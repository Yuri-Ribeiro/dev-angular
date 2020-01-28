import { Component, OnInit } from '@angular/core';
import { RequestProduct } from "../product.model";
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crud-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: string
  req: RequestProduct

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    this.productService.getProduct(this.id).subscribe(res => {
      this.req = {
        name: res.name,
        price: res.price
      }
    })
  }

  update() {
    this.productService.updateProduct(this.id, this.req).subscribe(res => {
      alert("Produto alterado com sucesso")
      this.router.navigate(['/'])
    })
  }

  cancel() {
    this.router.navigate(['/'])
  }

}
