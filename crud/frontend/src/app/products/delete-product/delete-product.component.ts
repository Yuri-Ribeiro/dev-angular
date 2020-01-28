import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crud-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id: string
  product: Product

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    this.productService.getProduct(this.id).subscribe(res => {
      this.product = res
    })
  }

  delete() {
    this.productService.deleteProduct(this.id).subscribe(res => {
      alert("Produto deletado com sucesso!")
      this.router.navigate(['/'])
    })
  }

  cancel() {
    this.router.navigate(['/'])
  }

}
