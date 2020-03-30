import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerData = new BehaviorSubject<HeaderData>({
    title: "Fenix",
    iconName: "dashboard",
    link: "/"
  });
  
  constructor() { }
  
  getHeaderData(): HeaderData{
    return this.headerData.value
  }

  setHeader(data: HeaderData) {
    this.headerData.next(data)
  }

}
