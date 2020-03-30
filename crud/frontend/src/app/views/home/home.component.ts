import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'crud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.setHeader({
      title: "Início",
      iconName: "home",
      link: "/"
    })
  }

  ngOnInit() { }

}
