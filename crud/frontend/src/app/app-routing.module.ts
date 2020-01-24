import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"}, //perguntar se boa prática
  {path: "home", component: HomeComponent},
  {path: "products/create", component: CreateProductComponent},
  {path: "products/update/:id", component: UpdateProductComponent},
  {path: "products/delete/:id", component: DeleteProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
