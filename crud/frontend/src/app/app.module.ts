import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatToolbarModule, MatSidenavModule } from '@angular/material/';

import { HomeComponent } from './home/home.component';
import { ProductCrudModule } from './product-crud/product-crud.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    ProductCrudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
