import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'consumer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.sass'
})
export class ConsumerComponent {
  consumerForm: FormGroup

  constructor(private _fb: FormBuilder) {
    this.consumerForm = this._fb.group({
      personalnummer: new FormControl('24225132', [Validators.required]),
      mail: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.required]),
      vorname: new FormControl(''),
      abteilung: new FormControl(''),
      assyst: new FormControl('')
    })
  }
}
