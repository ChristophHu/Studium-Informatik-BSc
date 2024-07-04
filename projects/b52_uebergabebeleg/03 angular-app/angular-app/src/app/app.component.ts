import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { SignatureComponent } from './components/signature/signature.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConsumerComponent,
    ContentComponent,
    RouterOutlet,
    SignatureComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
