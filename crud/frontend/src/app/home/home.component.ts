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

  constructor() {
    this.title = "Início"
  }

  ngOnInit() {
    HeaderService.changedTheName(this.title)
  }

}
