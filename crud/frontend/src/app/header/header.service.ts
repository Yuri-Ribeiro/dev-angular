import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  static forwardTheHeader = new EventEmitter<Object>()

  constructor() { }

  static changedTheName(data: Object){
    HeaderService.forwardTheHeader.emit(data)
  }
}
