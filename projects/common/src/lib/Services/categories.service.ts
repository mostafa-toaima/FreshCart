import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // baseUrl: string = 'https://ecommerce.routemisr.com';
  javazonBaseUrl: string = 'http://localhost:8082/javazon/category';

  constructor(private http: HttpClient) { }


  // GetCategories(): Observable<any> {
  //   return this.http.get(this.baseUrl + '/api/v1/categories');
  // }

  // GetCategoryDetails(catId: string | null): Observable<any> {
  //   return this.http.get(this.baseUrl + `/api/v1/categories/${catId}`);
  // }


  GetCategories(): Observable<any> {
    return this.http.get(this.javazonBaseUrl + '/all');
  }

  GetCategoryDetails(catId: number | null): Observable<any> {
    return this.http.get(this.javazonBaseUrl + `/${catId}`);
  }

}
