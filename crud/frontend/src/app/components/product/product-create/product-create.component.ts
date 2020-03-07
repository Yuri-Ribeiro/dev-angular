import { Component, OnInit } from '@angular/core';
import { RequestProduct } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  req: RequestProduct = {
    name: '',
    price: null
  }

  ngOnInit() {
  }

  createProduct() {
    this.productService.create(this.req).subscribe( () => {
      this.productService.showMessage('Produto salvo com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
