import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';
import { take } from 'rxjs';

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
export class ConsumerComponent implements OnInit {
  consumerForm: FormGroup

  constructor(private _fb: FormBuilder, private _dataService: DataService) {
    this.consumerForm = this._fb.group({
      personalnummer: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.required]),
      vorname: new FormControl(''),
      dienststelle: new FormControl(''),
      assystkennung: new FormControl('')
    })
  }

  ngOnInit(): void {
    this._dataService.consumer$
    .pipe(take(1))
    .subscribe({
      next: (consumer) => {
        this.consumerForm.patchValue(consumer)
      }
    })

    this.consumerForm.valueChanges.subscribe({
      next: (value) => {
        this._dataService.setConsumer(value)
        const json = JSON.stringify(value)
        console.log('jason', json.toString())
        console.log('jason', JSON.parse(json))
      }
    })
  }
}
