import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from './product-crud.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductCrudHomepageComponent } from './product-crud-homepage/product-crud-homepage.component';


const routes: Routes = [
  {path: "products", redirectTo: "/products/home", pathMatch: "full"},
  {path: "products", component: ProductCrudComponent,
    children: [
      {path: "home", component: ProductCrudHomepageComponent},
      {path: "create", component: ProductCreateComponent},
      {path: "update/:id", component: ProductUpdateComponent},
      {path: "delete/:id", component: ProductDeleteComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCrudRoutingModule { }
