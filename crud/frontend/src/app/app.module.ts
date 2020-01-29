import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/read-product/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { FormsModule } from "@angular/forms";
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatSidenavModule} from "@angular/material";
import { ListProductsComponent } from './products/list-products/list-products.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ListProductsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
