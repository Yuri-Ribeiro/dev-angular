import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private headerService: HeaderService) {
  }

  get title(): string {
    return this.headerService.getHeaderData().title
  }

  get iconName(): string {
    return this.headerService.getHeaderData().iconName
  }

  get link(): string {
    return this.headerService.getHeaderData().link
  }

  ngOnInit() { }

}
