import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createProduct() {
    this.router.navigate(['/products/create'])
  }

}
