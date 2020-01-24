import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'crud-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  responseProducts: Product[]

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.responseProducts = res
    })
  }

}
