import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  javazonBaseUrl: string = 'http://localhost:8082/javazon/product';

  constructor(private http: HttpClient) {}


  // GetAllProducts(pageNum:number = 1): Observable<any> {
  //   return this.http.get(this.baseUrl + `/api/v1/products?page=${pageNum}`);
  // }

  // GetSpecificProduct(id: any): Observable<any> {
  //   return this.http.get(this.baseUrl + `/api/v1/products/${id}`);
  // }

  GetAllProducts(pageNum:number = 0): Observable<any> {
    return this.http.get(this.javazonBaseUrl + `/all?page=${pageNum}`);
  }

  GetSpecificProduct(id:any): Observable<any> {
    return this.http.get(this.javazonBaseUrl + `/${id}`);
  }

}
