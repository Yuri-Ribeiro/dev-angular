import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderService} from '../../components/template/header/header.service';

@Component({
  selector: 'crud-product-crud-homepage',
  templateUrl: './product-crud-homepage.component.html',
  styleUrls: ['./product-crud-homepage.component.css']
})
export class ProductCrudHomepageComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    this.headerService.setHeader({
      title: "Produtos",
      iconName: "storefront",
      link: "/products"
    })
  }

  ngOnInit() { }

  navigateToCreateProduct() {
    this.router.navigate(['/products/create'])
  }

}
