import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'crud-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  req: RequestCreate = {
    name: '',
    price: null
  }

  ngOnInit() {
  }

  save() {
    this.productService.createUser(this.req).subscribe(res => {
      alert("Produto salvo com sucesso!")
    })
  }

}
