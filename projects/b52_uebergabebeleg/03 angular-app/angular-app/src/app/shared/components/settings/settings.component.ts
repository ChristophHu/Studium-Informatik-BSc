import { Component } from '@angular/core';
import { DebugModeComponent } from '../debug-mode/debug-mode.component';
import { ThemesComponent } from '../themes/themes.component';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    DebugModeComponent,
    ThemesComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.sass'
})
export class SettingsComponent {
  constructor() {

  }
}
