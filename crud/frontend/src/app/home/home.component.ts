import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HeaderService]
})
export class HomeComponent implements OnInit {
  title
  iconName
  link

  constructor() {
    this.title = "Início"
    this.iconName = "home"
    this.link = "/"
  }

  ngOnInit() {
    HeaderService.changedTheName({title: this.title, iconName: this.iconName, link: this.link})
  }

}
