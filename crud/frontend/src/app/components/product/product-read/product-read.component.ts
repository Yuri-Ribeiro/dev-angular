import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'crud-product-read',
  templateUrl: './product-read.component.html',
  styleUrls:  ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[]
  displayedColumns: string[] = ['ID', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res
    })
  }

}
