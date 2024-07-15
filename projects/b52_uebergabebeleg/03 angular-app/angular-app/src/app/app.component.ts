import { Component, HostListener, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsumerComponent } from './modules/landing/consumer/consumer.component';
import { ContentComponent } from './modules/landing/content/content.component';
import { SignatureComponent } from './shared/components/signature/signature.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // ConsumerComponent,
    // ContentComponent,
    RouterOutlet,
    // SignatureComponent
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
