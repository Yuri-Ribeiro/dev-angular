import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  static forwardTheHeader = new EventEmitter<string>()

  constructor() { }

  static mudouNome(nome: string){
    HeaderService.forwardTheHeader.emit(nome)
  }
}
