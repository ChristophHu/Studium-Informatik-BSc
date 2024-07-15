import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly _isMenuOpen = new BehaviorSubject<boolean>(true)
  isMenuOpen$: Observable<boolean> = this._isMenuOpen.asObservable()

  constructor() { }

  openMenu(open: boolean) {
      this._isMenuOpen.next(open)
  }
}
