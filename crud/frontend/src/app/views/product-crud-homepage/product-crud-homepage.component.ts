import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'crud-product-crud-homepage',
  templateUrl: './product-crud-homepage.component.html',
  styleUrls: ['./product-crud-homepage.component.css']
})
export class ProductCrudHomepageComponent implements OnInit {
  title
  iconName
  link

  constructor(private router: Router) { 
    this.title = "Produtos"
    this.iconName = "storefront"
    this.link = "/products"
  }

  ngOnInit() {
    HeaderService.changedTheName({title: this.title, iconName: this.iconName, link: this.link})

  }

  navigateToCreateProduct() {
    this.router.navigate(['/products/create'])
  }

}
