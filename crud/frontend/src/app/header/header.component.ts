import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title
  iconName
  link
  
  constructor() {
    this.title = "Fenix",
    this.iconName = "dashboard",
    this.link = "/"
  }

  ngOnInit() {
    HeaderService.forwardTheHeader.subscribe(
      async data => {
        
        this.title = await data.title
        this.iconName = await data.iconName
        this.link = await data.link
        
        console.log(data)
      }
    );
  }

}
