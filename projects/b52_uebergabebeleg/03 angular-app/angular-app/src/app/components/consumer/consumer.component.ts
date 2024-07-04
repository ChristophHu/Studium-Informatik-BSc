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
  uebergabeForm: FormGroup

  constructor(private _bf: FormBuilder) {
    this.uebergabeForm = this._bf.group({
      personalnummer: new FormControl('24225132', [Validators.required]),
      mail: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.required]),
      vorname: new FormControl(''),
      abteilung: new FormControl('')
    })
  }
}
