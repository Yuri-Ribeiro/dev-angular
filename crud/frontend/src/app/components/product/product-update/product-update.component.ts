import { Component, OnInit } from '@angular/core';
import { RequestProduct } from "../product.model";
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crud-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: string
  req: RequestProduct

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    this.productService.readById(this.id).subscribe(res => {
      this.req = {
        name: res.name,
        price: res.price
      }
    })
  }

  updateProduct() {
    this.productService.update(this.id, this.req).subscribe(res => {
      this.productService.showMessage("Produto alterado com sucesso")
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
