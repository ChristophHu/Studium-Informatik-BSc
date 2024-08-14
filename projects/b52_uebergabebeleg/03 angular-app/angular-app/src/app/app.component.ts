import { Component, HostListener, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  constructor() {
    console.log('application is running in devmode', isDevMode())
  }

  @HostListener('document:backbutton', ['$event'])
    onBackButton(event: any) {
  }
}
