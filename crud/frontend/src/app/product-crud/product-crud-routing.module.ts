import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from './product-crud.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';


const routes: Routes = [
  {path: 'products', component: ProductCrudComponent},
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/update/:id", component: ProductUpdateComponent},
  {path: "products/delete/:id", component: ProductDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCrudRoutingModule { }
