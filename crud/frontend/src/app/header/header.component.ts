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
  
  constructor() {
    this.title = 'Fenix',
    this.iconName = "dashboard"
  }

  ngOnInit() {
    HeaderService.forwardTheHeader.subscribe(
      async data => {
        
        this.title = await data.title
        this.iconName = await data.iconName
        
        console.log(data)
      }
    );
  }

}
