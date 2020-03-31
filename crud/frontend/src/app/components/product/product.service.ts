import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product, RequestProduct } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  private baseApiUrl = 'http://localhost:3001/products'

  showMessage(message): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(req: RequestProduct): Observable<Product> {
    return this.http.post<Product>(this.baseApiUrl, req)
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl)
  }
  
  readById(id: string): Observable<Product> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.get<Product>(url)
  }
  

  update(id: string, req: RequestProduct): Observable<Product> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.put<Product>(url, req)
  }
  
  delete(id: string): Observable<any> {
    const url = `${this.baseApiUrl}/${id}`
    return this.http.delete<any>(url)
  }

}
