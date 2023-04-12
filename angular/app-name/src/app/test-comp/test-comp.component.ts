import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.sass']
})
export class TestCompComponent {
  varname: string = 'String'
  varChecked: boolean = false

  @Input() inputBinding: string = ''
  @Output() outputBinding: EventEmitter<string> = new EventEmitter<string>()

  clicked() {
    this.outputBinding.emit('Return')
  }
}
