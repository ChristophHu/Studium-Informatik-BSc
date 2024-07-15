import { Component } from '@angular/core'
import { SpinnerComponent } from './spinner'
import { CommonModule } from '@angular/common'
import { IconsComponent } from '../icons/icons.component'

@Component({
  selector: 'circular-spinner',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './circular-spinner.component.html',
  styleUrls: ['./circular-spinner.component.sass']
})
export class CircularSpinnerComponent extends SpinnerComponent {
  get strokeWidth() {
    return 4 * (this.thickness / 100)
  }

  get dashStyle() {
    return { color: this.color, ...(!this.still ? { animation: `spinners-angular-circular ${140 / this.speed}s linear infinite` } : {})}
  }
}