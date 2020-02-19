import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';

import { FormsModule } from "@angular/forms";

import { ProductCrudRoutingModule } from './product-crud-routing.module';
import { ProductCrudComponent } from './product-crud.component';
import { ProductReadComponent } from './product-read/product-read.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductCrudHomepageComponent } from './product-crud-homepage/product-crud-homepage.component';

@NgModule({
  declarations: [
    ProductCrudComponent,
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductCrudHomepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    ProductCrudRoutingModule,
  ]
})
export class ProductCrudModule { }
