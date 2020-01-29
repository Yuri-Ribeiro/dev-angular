import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductCreateComponent } from './product-crud/product-create/product-create.component';
import { ProductUpdateComponent } from './product-crud/product-update/product-update.component';
import { ProductDeleteComponent } from './product-crud/product-delete/product-delete.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
