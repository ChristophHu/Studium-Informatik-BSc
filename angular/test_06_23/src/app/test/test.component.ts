import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent {
  @Input() sentence: string = 'This is a sentence.'
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isDisabled: boolean = true;

  disableInput() {
    this.isDisabled = !this.isDisabled;
    this.onChange.emit(this.isDisabled);
  }
}
