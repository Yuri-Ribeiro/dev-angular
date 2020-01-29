import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-product-crud-homepage',
  templateUrl: './product-crud-homepage.component.html',
  styleUrls: ['./product-crud-homepage.component.css']
})
export class ProductCrudHomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createProduct() {
    this.router.navigate(['/products/create'])
  }

}
