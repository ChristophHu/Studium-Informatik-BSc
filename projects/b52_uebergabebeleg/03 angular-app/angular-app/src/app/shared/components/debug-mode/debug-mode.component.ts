import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ToggleComponent } from '@christophhu/ngx-json-form';
import { Router } from '@angular/router';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'debug-mode',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent,
    ToggleComponent
  ],
  templateUrl: './debug-mode.component.html',
  styleUrls: ['./debug-mode.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DebugModeComponent {
  debug: boolean = false

  constructor(private _router: Router) {
    document.body.classList.contains('debug') ? this.debug = true : this.debug = false
  }

  toggle() {
    this.debug = !this.debug
    switch (this.debug) {
      case true:
        document.body.classList.add('debug')
        break
      case false:
        document.body.classList.remove('debug')
        this._router.navigate(['/auswahl'])
        break
    }
  }
}
