import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  static forwardTheHeader = new EventEmitter<string>()

  constructor() { }

  static changedTheName(name: string){
    HeaderService.forwardTheHeader.emit(name)
  }
}
