import { Component, inject } from '@angular/core';
// import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NotificationService } from '../../../shared/components/notifications/services/notification.service';
import { IconsComponent } from '../../../shared/components/icons/icons.component';

@Component({
  selector: 'topnav',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent,
    AsyncPipe
  ],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.sass'
})
export class TopnavComponent {
  isOffline: boolean = false;
  // store = inject(Store)
  notificationShown: boolean = false;
  // schiff$: Observable<Schiff | null> = this.store.select(bootFeature.selectSchiff)
  // streife$: Observable<Streife | null> = this.store.select(bootFeature.selectStreife)

  constructor(private _notificationService : NotificationService) { }

  ngOnInit() {
    document.addEventListener('offline', () => {
      this.isOffline = true;
      console.log("Bordbuch offline. isOffline: ", this.isOffline)
      if (!this.notificationShown) {
        this._notificationService.open({ type: 'error', header: 'Kein Internet', message: 'Es besteht keine Internetverbindung.', autoClose: true })?.pipe().subscribe((data: any) => {
            console.log("Bordbuch offline. isOffline: ", data)
        })
        this.notificationShown = true;
      }
    });

    document.addEventListener('online', () => {
      this.isOffline = false;
      console.log("Bordbuch online. isOffline: ", this.isOffline)
      this._notificationService.clear();
      this.notificationShown = false;
    });
  }
}
