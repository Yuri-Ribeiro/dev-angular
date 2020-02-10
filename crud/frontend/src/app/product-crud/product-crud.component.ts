import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'crud-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  title: "Produtos"

  constructor() { }

  ngOnInit() {
    HeaderService.changedTheName(this.title)
  }

}
