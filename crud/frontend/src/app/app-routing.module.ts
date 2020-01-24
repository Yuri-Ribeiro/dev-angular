import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './products/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //perguntar se boa prática
  {path: 'home', component: HomeComponent},
  {path: 'products/create', component: CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
