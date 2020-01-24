import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { HomeComponent } from './products/home/home.component';
import { FormsModule } from "@angular/forms";
import { UpdateProductComponent } from './products/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductComponent,
    HomeComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
