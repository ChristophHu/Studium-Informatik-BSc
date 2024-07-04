import { Component } from '@angular/core';
import { TokenItemComponent } from './token-item/token-item.component';

@Component({
  selector: 'content',
  standalone: true,
  imports: [
    TokenItemComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {

}
