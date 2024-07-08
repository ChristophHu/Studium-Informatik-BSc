import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
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
  styleUrl: './content.component.sass'
})
export class ContentComponent {
  contentForm: FormGroup
  tokenArray: FormArray
  endgeraeteArray: FormArray

  constructor(private _fb: FormBuilder) {

    this.contentForm = this._fb.group({
      token: this._fb.array([]),
      endgeraete: this._fb.array([])
    })
    this.tokenArray = <FormArray>this.contentForm.get('token')
    this.endgeraeteArray = <FormArray>this.contentForm.get('endgeraete')
  }

  addToken() {
    const newToken =  this._fb.group({
      token_id: ''
    })
    this.tokenArray.push(newToken)
  }
  addEndgeraet() {
    const newEndgeraet =  this._fb.group({
      imei: '',
      rufnummer: '',
      pin: ''
    })
    this.endgeraeteArray.push(newEndgeraet)
  }
}
