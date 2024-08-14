import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _consumer = new BehaviorSubject<any>({})
  consumer$: Observable<any> = this._consumer.asObservable()

  private readonly _content = new BehaviorSubject<any>({})
  content$: Observable<any> = this._content.asObservable()

  private readonly _signature = new BehaviorSubject<any>({})
  signature$: Observable<any> = this._signature.asObservable()

  private readonly _data = new BehaviorSubject<any>({})
  data$: Observable<any> = this._data.asObservable()

  constructor() { }

  setConsumer(consumer: any) {
    this._consumer.next(consumer)
    this._data.next({ consumer: this._consumer.value, content: this._content.value, signature: this._signature.value })
  }

  setContent(content: any) {
    this._content.next(content)
    this._data.next({ consumer: this._consumer.value, content: this._content.value, signature: this._signature.value })
  }

  setSignature(signature: any) {
    this._signature.next(signature)
    this._data.next({ consumer: this._consumer.value, content: this._content.value, signature: this._signature.value })
  }
}
