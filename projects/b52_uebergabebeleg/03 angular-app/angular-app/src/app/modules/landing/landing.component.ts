import { Component } from '@angular/core';
import { ConsumerComponent } from './consumer/consumer.component';
import { ContentComponent } from './content/content.component';
import { SignatureComponent } from '../../shared/components/signature/signature.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ConsumerComponent,
    ContentComponent,
    FormsModule,
    JsonPipe,
    SignatureComponent,
    ReactiveFormsModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass'
})
export class LandingComponent {
  signature: FormGroup

  constructor(private _dataService: DataService) {
    this.signature = new FormGroup({
      sign: new FormControl()
    })

    this._dataService.signature$
    .pipe(take(1))
    .subscribe({
      next: (signature) => {
        if (signature) {
          this.signature.patchValue(signature)
        }
      }
    })

    this.signature.valueChanges.subscribe({
      next: (value) => {
        this._dataService.setSignature(value)
      }
    })
  }

  genPdf() {
    // console.log('sign', this.signature)
  }

  // <div [formGroup]="myGroup">
  //   <input formControlName="firstName">
  // </div>

  // In your class:

  // this.myGroup = new FormGroup({
  //     firstName: new FormControl()
  // });
}
