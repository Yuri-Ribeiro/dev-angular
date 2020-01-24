import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseProducts, Product, RequestProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3001/products'

  getProducts(): Observable<ResponseProducts> {
    return this.http.get<ResponseProducts>(this.URL)
  }
  
  createProduct(request: RequestProduct): Observable<Product> {
    return this.http.post<Product>(this.URL, request)
  }
  
  getProduct(id: string): Observable<Product> {
    const formatedURL = `${this.URL}/${id}`

    return this.http.get<Product>(formatedURL)
  }

  updateProduct(id: string, request: RequestProduct): Observable<Product> {
    const formatedURL = `${this.URL}/${id}`
    
    return this.http.put<Product>(formatedURL, request)
  }
  
  deleteProduct(id: string): Observable<any> {
    const formatedURL = `${this.URL}/${id}`

    return this.http.delete<any>(formatedURL)
  }

}
