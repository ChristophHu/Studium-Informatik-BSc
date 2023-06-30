import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test_06_23';
  sentence = 'This is a sentence.';
  isDisabled: boolean = true;
  varr: boolean = true;

  constructor() { }
  
  onParentChange(event: any): void {
    console.log(event)
    this.isDisabled = !event
  }

  @HostListener('mouseover') onHover() {
    let el = document.getElementById('color')
    el!.style.backgroundColor = 'green'
  }
}
