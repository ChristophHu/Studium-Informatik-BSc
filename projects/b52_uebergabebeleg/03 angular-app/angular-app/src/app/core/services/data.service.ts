import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _consumer = new BehaviorSubject<any>({})
  consumer$: Observable<any> = this._consumer.asObservable()

  // { endgeraete_description: '', endgeraete: [], sim_description: '', sim: [], token_description: '', token: [] }
  private readonly _content = new BehaviorSubject<any>({})
  content$: Observable<any> = this._content.asObservable()

  constructor() { }

  setConsumer(consumer: any) {
    this._consumer.next(consumer)
  }

  setContent(content: any) {
    this._content.next(content)
  }
}
