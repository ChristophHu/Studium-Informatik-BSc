import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tabbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.sass']
})
export class TabbarComponent {
  @Input() tabs: Array<any> = []
  @Input() labelField: string = ''
  @Input() active: any;
  @Output() onTabSelect: EventEmitter<any> = new EventEmitter();

  select(tab: any) {
    this.onTabSelect.emit(tab);
  }
}
