import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, forwardRef, Inject, Injector, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, NgControl, ValidationErrors } from '@angular/forms';
import { PadComponent } from './pad/pad.component';

@Component({
  selector: 'nxt-signature',
  standalone: true,
  imports: [
    CommonModule,
    PadComponent
  ],
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.sass',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 }) ),
      state('*', style({ opacity: 1 })),
      transition('void => false', []),
      transition('void => *', animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOut', [
      state('*', style({ opacity: 1 })), 
      state('void', style({ opacity: 0 })),
      transition('false => void', []),
      transition('* => void', animate('200ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeInTop', [
        state('void', style({ opacity  : 0, transform: 'translate3d(0, -100%, 0)' })),
        state('*', style({ opacity  : 1, transform: 'translate3d(0, 0, 0)' })),
        transition('void => false', []),
        transition('void => *', animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOutTop', [
        state('*', style({ opacity  : 1, transform: 'translate3d(0, 0, 0)' })),
        state('void', style({ opacity  : 0, transform: 'translate3d(0, -100%, 0)' })), 
        transition('false => void', []),
        transition('* => void', animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ])
  ],
  providers: [     
    {       
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureComponent),
      multi: true
    }
  ]
})
export class SignatureComponent implements AfterContentInit, ControlValueAccessor {
  @Input() label: string = 'Unterschrift'
  @Input() description: string | undefined
  @Input() formControlName: string = 'signature'

  myGroup: FormGroup = new FormGroup({})
  errors: ValidationErrors | null | undefined
  signature: string = ''
  signImg = new Image();

  isShowModal: boolean = false
  isDisabled: boolean = false

  myImg = new Image();
  // Place link to original base64 image here, then adjust width and height below

  onTouched = () => {}
  onChange = (_: any | null) => { }

  constructor(@Inject(Injector) private injector: Injector) {
    this.myGroup = new FormGroup({
      value: new FormControl()
    })
  }

  ngAfterContentInit(): void {
    const injectedControl = this.injector.get(NgControl)
    
    injectedControl.control?.valueChanges.subscribe({
      next: (data: any) => {
        this.errors = injectedControl.control?.errors
      }
    })
  }

  sign(event: any) {
    this.signature = event
    this.onChange(event)
  }

  openSignPad() {
    this.isShowModal = true
  }
  close() {
    this.isShowModal = false
  }
  clear() {
    this.signature = ''
    this.onChange('0')
  }

  registerOnChange(fn: any): any {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    // this.disabled = isDisabled
  }
  writeValue(value: string): void {
    this.myGroup.patchValue({ value })
    this.signature = value
  }
}
