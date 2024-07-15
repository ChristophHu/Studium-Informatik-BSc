import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { Notification } from '../model/notification.model'

@Injectable({ 
  providedIn: 'root' 
})

export class NotificationService {
  
  private _notificationService = new Subject<any>()
  
  get() {
    return this._notificationService.asObservable()
  }

  open(notification: Partial<Notification>): Observable<any> | void {
    return new Observable(observer => {
      const note = Object.assign({}, notification, { response: (response: any) => {
        observer.next(response)
        observer.complete()
      }})
      this.add(note)
    })
  }

  add(data: any) {
    this._notificationService.next({ action: 'add', data: data })
  }

  remove(id: string) {
    this._notificationService.next({ action: 'remove', id })
  }

  clear() {
    this._notificationService.next({ action: 'clear' })
  }
}
