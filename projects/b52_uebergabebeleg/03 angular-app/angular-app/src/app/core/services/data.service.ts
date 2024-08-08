import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _consumer = new BehaviorSubject<any>({})
  consumer$: Observable<any> = this._consumer.asObservable()

  constructor() { }

  setConsumer(consumer: any) {
    this._consumer.next(consumer)
  }
}
