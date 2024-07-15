import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from '../../../core/navbar/topnav/topnav.component';
import { SidebarComponent } from '../../../core/navbar/sidebar/sidebar.component';
import { CircularSpinnerComponent } from '../../../shared/components/circular-spinner/circular-spinner.component';
import { NotificationComponent } from '../../../shared/components/notifications/components/notification/notification.component';
import { IconsComponent } from '../../../shared/components/icons/icons.component';

@Component({
  selector: 'mobile-layout',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.sass',
  standalone: true,
  imports: [
    CircularSpinnerComponent,
    CommonModule,
    IconsComponent,
    NotificationComponent,
    RouterOutlet,
    RouterLink,
    FormsModule,
    SidebarComponent,
    TopnavComponent
  ]
})
export class MobileComponent {
  isOpen: boolean = false;

  loading = false

  constructor(private _router: Router) {
    this._router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.loading = true
          break

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.loading = false
          break

        default:
          break
      }
    })
  }

  close(event: any) {
    this.isOpen = event
  }
}
