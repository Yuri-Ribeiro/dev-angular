import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  createProduct() {
    this.route.navigate(['products/create'])
  }
}
