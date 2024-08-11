import { CommonModule, DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatTabsModule } from '@angular/material/tabs'
import { DataService } from '../../../core/services/data.service';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { AccordionComponent, AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '../../../../../projects/accordion/src/public-api';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgxDynamicTableComponent, TableActionEnum, TableActionReturn, Tableoptions } from '@christophhu/ngx-dynamic-table';
import { CircularSpinnerComponent } from '../../../shared/components/circular-spinner/circular-spinner.component';
import { MatMenuModule } from '@angular/material/menu';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'content',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionHeader,
    AccordionTitle,
    CircularSpinnerComponent,
    CommonModule,
    MatMenuModule,
    NgxDynamicTableComponent,
    FormsModule,
    MatTableModule,
    MatSortModule,
    // MatTabsModule,
    ReactiveFormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit, AfterViewInit {
  /**
 * The isVisible property belongs to the data of the dynamic-table.
 * It is used to show or hide the table, depended on the data.
 * 
 * @type {boolean} isVisible - The isVisible property.
 */
  isVisible: boolean = true
  isSpinnerVisible: boolean = true
  isCheckedAll: boolean = false

  private readonly _data = new BehaviorSubject<any[]>([])
  data$: Observable<any[]> = this._data.asObservable()
  
  data: any = [
    { id: '1', name: 'Tim', date: '01.01.2024 00:00:59', ort: 'Berlin', checked: false, description: 'Test1' },
    { id: '2', name: 'Tom', date: '01.01.2023 00:00:59', ort: 'Hamburg', checked: false, description: 'Test2' },
    { id: '3', name: 'Thomas', date: '01.02.2023 00:00:59', ort: 'Dresden', checked: false, description: 'Test3' },
    { id: '4', name: 'Martin', date: '03.02.2023 00:00:59', ort: 'München', checked: false, description: 'Halllo1' },
    { id: '5', name: 'Markus', date: '04.02.2023 00:00:59', ort: 'Köln', checked: false, description: 'Hallo2' }
  ]

  tableoptions: Tableoptions = {
    actions: [
      { name: 'delete', icon: 'trash', action: 1 },
      { name: 'edit', icon: 'edit', action: 2 },
      { name: 'show', icon: 'eye', action: 4 }
    ],
    columns: [
      { id: '1', name: 'id', header: 'ID', cell: 'id', hidden: true, sortable: true },
      { id: '2', name: 'name', header: 'Name', cell: 'name', hidden: false, sortable: true },
      { id: '3', name: 'date', header: 'Datum/Zeit', cell: 'date', pipe: { name: DatePipe, args: 'dd.MM.YYYY HH:mm:ss'}, hidden: false, sortable: true },
      { id: '4', name: 'ort', header: 'Ort', cell: 'ort', hidden: false, sortable: true },
    ],
    columnFilter: ['name', 'date', 'ort', 'description'],
    columnNames: ['name', 'date', 'ort'],
    isExpandable: true,
    checkbox: true,
    count: false,
    paginator: true,
    sortRowManual: false,
    unread: false,
    sortColumn: 'date',
    sortStart: 'asc'
  }
  
  contentForm: FormGroup
  tokenArray: FormArray
  endgeraeteArray: FormArray
  simArray: FormArray

  collapsing = true
  editable = true

  // ELEMENT_DATA: any[] = [{ count: 1, token_id: this.generateGUID(), token_sn: ''}]
  endgeraeteDataSource = new MatTableDataSource([])
  simDataSource = new MatTableDataSource([])
  tokenDataSource = new MatTableDataSource([])
  // @ViewChild(MatSort) sort!: MatSort
  // tokenColumns: string[] = ['checkbox', 'count', 'token_sn', 'actions']
  endgeraeteColumns: string[] = ['count', 'token_sn']

  constructor(private _fb: FormBuilder, private _dataService: DataService) {

    this.contentForm = this._fb.group({
      token: this._fb.array([]),
      token_description: new FormControl(''),
      endgeraete: this._fb.array([]),
      endgeraete_description: new FormControl(''),
      sim: this._fb.array([]),
      sim_description: new FormControl('')
    })
    this.tokenArray = <FormArray>this.contentForm.get('token')
    this.endgeraeteArray = <FormArray>this.contentForm.get('endgeraete')
    this.simArray = <FormArray>this.contentForm.get('sim')

    this.setData()
  }

  ngOnInit(): void {

    this._dataService.content$
    .pipe(take(1))
    .subscribe({
      next: (content) => {
        if (content) {
          this.contentForm.patchValue(content)
  
          if (content.token && content.token.length >= 0) {
            content.token.forEach((token: any) => {
              this.tokenArray.push(this._fb.group(token))
              this.tokenDataSource.data = this.tokenArray.value
            })
          }
  
          if (content.endgeraete && content.endgeraete.length >= 0) {
            content.endgeraete.forEach((endgeraet: any) => {
              this.endgeraeteArray.push(this._fb.group(endgeraet))
              this.endgeraeteDataSource.data = this.endgeraeteArray.value
            })
          }
  
          if (content.sim && content.sim.length >= 0) {
            content.sim.forEach((sim: any) => {
              this.simArray.push(this._fb.group(sim))
              this.simDataSource.data = this.simArray.value
            })
          }
        }
      }
    })

    this.contentForm.valueChanges.subscribe({
      next: (value) => {
        this._dataService.setContent(value)
      }
    })
  }

  ngAfterViewInit() {
    // this.tokenDataSource.sort = this.sort
  }

  /**
 * @param {TableActionReturn} event  The target to process
 * @returns The processed target number
 */
  returnTableAction(event: TableActionReturn) {
    switch (event.action) {
      case TableActionEnum.DELETE:
        console.log('delete row')
        break
      case TableActionEnum.EDIT:
        console.log('edit row')
        break
      case TableActionEnum.SHOW:
        console.log('show row')
        break
      case TableActionEnum.REFRESH:
        console.log('refresh table')
        // this.setData()
        break
      case TableActionEnum.CHECK:
        console.log('check row', event.row)
        break
      case TableActionEnum.CHECKALL:
        console.log('check all rows')
        this.isCheckedAll = !this.isCheckedAll
        this._data.value.forEach((row: any) => {
          row.checked = this.isCheckedAll
        })
        break
      default:
        console.log('default action')
    }
  }
  /**
 * @ignore
 */
  setData() {
    this._data.next(this.data)
  }

  refreshTable() {
    this._data.next(this.data)
  }

  getTokenArrayLength(): string {
    return this.tokenArray.controls.length.toString()
  }
  addToken() {
    const newToken =  this._fb.group({
      token_id: this.generateGUID(),
      token_sn: ''
    })
    this.tokenArray.push(newToken)
    this.tokenDataSource.data = this.tokenArray.value
  }
  removeToken(token_id: string) {
    this.tokenArray.removeAt(this.tokenArray.controls.findIndex((control: any) => control.get('token_id').value === token_id))
    this.tokenDataSource.data = this.tokenArray.value
  }
  getEndgeraeteArrayLength(): string {
    return this.endgeraeteArray.controls.length.toString()
  }
  addEndgeraet() {
    const newEndgeraet =  this._fb.group({
      endgeraet_id: this.generateGUID(),
      modell: '',
      ausstattung: '',
      imei: ''
    })
    this.endgeraeteArray.push(newEndgeraet)
    this.endgeraeteDataSource.data = this.endgeraeteArray.value
  }
  removeEndgeraet(endgeraet_id: string) {
    this.endgeraeteArray.removeAt(this.endgeraeteArray.controls.findIndex((control: any) => control.get('endgeraet_id').value === endgeraet_id))
  }
  getSimArrayLength(): string {
    return this.simArray.controls.length.toString()
  }
  addSim() {
    const newSim =  this._fb.group({
      sim_id: this.generateGUID(),
      sn: '',
      rufnummer: '',
      pin: '',
      puk: ''
    })
    this.simArray.push(newSim)
    this.simDataSource.data = this.simArray.value
  }
  removeSim(sim_id: string) {
    this.simArray.removeAt(this.simArray.controls.findIndex((control: any) => control.get('sim_id').value === sim_id))
  }
  check(row: any) {
    // this.action.emit({ row, action: TableActionEnum.CHECK })
  }
  checkAll() {
    // this.action.emit({ action: TableActionEnum.CHECKALL })
  }
  refresh() {
    // this.action.emit({ action: TableActionEnum.REFRESH })
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: any) => {
      var rnd = Math.random() * 16 | 0, v = c === 'x' ? rnd : (rnd & 0x3 | 0x8)
      return v.toString(16)
    });
  }
}
