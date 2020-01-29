import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductReadComponent } from './product-crud/product-read/product-read.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './product-crud/product-create/product-create.component';
import { FormsModule } from "@angular/forms";
import { ProductUpdateComponent } from './product-crud/product-update/product-update.component';
import { ProductDeleteComponent } from './product-crud/product-delete/product-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatSidenavModule} from "@angular/material";
import { HomeComponent } from './home/home.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    HomeComponent,
    ProductCrudComponent,
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
