import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly _isDebugModeActive = new BehaviorSubject<boolean>(false)
  sDebugModeActive$: Observable<boolean> = this._isDebugModeActive.asObservable()

  setDebugMode(show: boolean) {
    this._isDebugModeActive.next(show)
  }
}
