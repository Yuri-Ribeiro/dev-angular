import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product, RequestProduct } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  private URL = 'http://localhost:3001/products'

  showMessage(message): void {
    this._snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL)
  }
  
  createProduct(req: RequestProduct): Observable<Product> {
    return this.http.post<Product>(this.URL, req)
  }
  
  getProduct(id: string): Observable<Product> {
    const formatedURL = `${this.URL}/${id}`

    return this.http.get<Product>(formatedURL)
  }

  updateProduct(id: string, req: RequestProduct): Observable<Product> {
    const formatedURL = `${this.URL}/${id}`
    
    return this.http.put<Product>(formatedURL, req)
  }
  
  deleteProduct(id: string): Observable<any> {
    const formatedURL = `${this.URL}/${id}`

    return this.http.delete<any>(formatedURL)
  }

}
