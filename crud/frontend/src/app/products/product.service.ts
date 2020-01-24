import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseProducts, Product, RequestCreate } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3001/products'

  getProducts(): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(this.url)
  }

  createUser(request: RequestCreate): Observable<Product> {
    return this.http.post<Product>(this.url, request)
  }
}
