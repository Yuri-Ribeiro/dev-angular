import { Component, OnInit } from '@angular/core';
import { ResponseProducts } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'crud-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  responseProducts: ResponseProducts

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.responseProducts = res
    })
  }

}
