import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'nxt-pad',
  standalone: true,
  imports: [],
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.sass']
})
export class PadComponent {
  height: number | undefined
  width: number | undefined
  @Output() signature: EventEmitter<any> = new EventEmitter<any>()
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>()
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl: ElementRef | undefined
  @ViewChild('wind') wind: ElementRef | undefined
  signatureImg!: string;
  showModal = false

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth - 8*2*4
    this.height = this.width / 3
  }
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl!.nativeElement)
  }

  startDrawing(event: Event) {
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  close() {
    this.cancel.emit(true)
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL()
    this.signature.emit(base64Data)
    this.cancel.emit(true)
  }
}
