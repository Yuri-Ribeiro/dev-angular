import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string
  iconName: string
  link: string
  
  constructor(private headerService: HeaderService) {
    let {title, iconName, link} = this.headerService.getHeaderData();
    this.title = title
    this.iconName = iconName
    this.link = link
  }

  ngOnInit() { }

}
