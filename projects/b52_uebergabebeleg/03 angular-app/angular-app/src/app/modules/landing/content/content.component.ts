import { CommonModule, NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass',
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent {
  contentForm: FormGroup
  tokenArray: FormArray
  endgeraeteArray: FormArray

  constructor(private _fb: FormBuilder) {

    this.contentForm = this._fb.group({
      token: this._fb.array([]),
      token_description: new FormControl(''),
      endgeraete: this._fb.array([]),
      endgeraete_description: new FormControl('')
    })
    this.tokenArray = <FormArray>this.contentForm.get('token')
    this.endgeraeteArray = <FormArray>this.contentForm.get('endgeraete')
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
      imei: '',
      rufnummer: '',
      pin: ''
    })
    this.endgeraeteArray.push(newEndgeraet)
  }
  removeEndgeraet(endgeraet_id: string) {
    this.endgeraeteArray.removeAt(this.endgeraeteArray.controls.findIndex((control: any) => control.get('endgeraet_id').value === endgeraet_id))
  }

  generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: any) => {
      var rnd = Math.random() * 16 | 0, v = c === 'x' ? rnd : (rnd & 0x3 | 0x8)
      return v.toString(16)
    });
  }
}
