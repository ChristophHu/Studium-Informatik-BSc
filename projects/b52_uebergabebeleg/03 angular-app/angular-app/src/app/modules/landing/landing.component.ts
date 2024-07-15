import { Component } from '@angular/core';
import { ConsumerComponent } from './consumer/consumer.component';
import { ContentComponent } from './content/content.component';
import { SignatureComponent } from '../../shared/components/signature/signature.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ConsumerComponent,
    ContentComponent,
    SignatureComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.sass'
})
export class LandingComponent {

}
