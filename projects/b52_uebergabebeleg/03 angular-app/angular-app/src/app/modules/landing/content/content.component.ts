import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatTabsModule } from '@angular/material/tabs'
import { DataService } from '../../../core/services/data.service';
import { take } from 'rxjs';
import { AccordionComponent, AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '../../../../../projects/accordion/src/public-api';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

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
    CommonModule,
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
  tokenColumns: string[] = ['checkbox', 'count', 'token_sn', 'actions']
  endgeraeteColumns: string[] = ['checkbox', 'count', 'token_sn', 'actions']

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
