import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'crud-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Fenix'
  constructor() { }

  ngOnInit() {
    HeaderService.forwardTheHeader.subscribe(
      async title => this.title = await title
    );
  }

}
