import { Component, OnInit } from '@angular/core';
import { RequestProduct } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  req: RequestProduct = {
    name: '',
    price: null
  }

  ngOnInit() {
  }

  save() {
    this.productService.createProduct(this.req).subscribe(res => {
      alert("Produto salvo com sucesso!")
      this.router.navigate(['/'])
    })
  }

}
