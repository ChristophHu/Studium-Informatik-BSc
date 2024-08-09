import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'
import { DataService } from '../../../core/services/data.service';
import { take } from 'rxjs';
import { AccordionComponent, AccordionContent, AccordionHeader, AccordionItem, AccordionTitle } from '../../../../../projects/accordion/src/public-api';

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
    MatTabsModule,
    ReactiveFormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {
  contentForm: FormGroup
  tokenArray: FormArray
  endgeraeteArray: FormArray
  simArray: FormArray

  collapsing = true

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
        console.log('content: ', content)
        this.contentForm.patchValue(content)

        content.token.forEach((token: any) => {
          this.tokenArray.push(this._fb.group(token))
        })

        content.endgeraete.forEach((endgeraet: any) => {
          this.endgeraeteArray.push(this._fb.group(endgeraet))
        })

        content.sim.forEach((sim: any) => {
          this.simArray.push(this._fb.group(sim))
        })
      }
    })

    this.contentForm.valueChanges.subscribe({
      next: (value) => {
        this._dataService.setContent(value)
      }
    })
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
  }
  removeToken(token_id: string) {
    this.tokenArray.removeAt(this.tokenArray.controls.findIndex((control: any) => control.get('token_id').value === token_id))
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
  }
  removeSim(sim_id: string) {
    this.simArray.removeAt(this.simArray.controls.findIndex((control: any) => control.get('sim_id').value === sim_id))
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: any) => {
      var rnd = Math.random() * 16 | 0, v = c === 'x' ? rnd : (rnd & 0x3 | 0x8)
      return v.toString(16)
    });
  }
}
