import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test_06_23';
  sentence = 'This is a sentence.';
  isDisabled: boolean = true;

  onParentChange(event: any): void {
    console.log(event)
    this.isDisabled = !event
  }
}
