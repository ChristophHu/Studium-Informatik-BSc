import { Component } from '@angular/core';
import { ConsumerComponent } from './consumer/consumer.component';
import { ContentComponent } from './content/content.component';
import { SignatureComponent } from '../../shared/components/signature/signature.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Subject, take } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ConsumerComponent,
    ContentComponent,
    FormsModule,
    JsonPipe,
    SignatureComponent,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass'
})
export class LandingComponent {
  isValidated: boolean = false
  signature: FormGroup

  destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(private _dataService: DataService, private _router: Router) {
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

    this._dataService.data$.subscribe({
      next: (data) => {
        if (data) this.validateBeleg(data)
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  validateBeleg(data: { consumer: any, content: any, signature: any }) {
    if (
      (data.consumer && data.consumer.personalnummer)
      && (data.content && (data.content.endgeraete || data.content.sim || data.content.token) ) 
      && (data.signature && data.signature.sign && data.signature.sign != '0')
    ) {
      this.isValidated = true
    } else {
      this.isValidated = false
    }
  }

  generatePdf() {
    this._router.navigate(['/beleg'])
  }
}
