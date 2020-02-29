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

  private baseApiUrl = 'http://localhost:3001/products'

  create(req: RequestProduct): Observable<Product> {
    return this.http.post<Product>(this.baseApiUrl, req)
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl)
  }
  
  readById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseApiUrl}/${id}`)
  }
  
  showMessage(message): void {
    this._snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  update(id: string, req: RequestProduct): Observable<Product> {
    return this.http.put<Product>(`${this.baseApiUrl}/${id}`, req)
  }
  
  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseApiUrl}/${id}`)
  }

}
