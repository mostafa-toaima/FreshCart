import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl: string = 'https://ecommerce.routemisr.com';

  constructor(private http: HttpClient) { }

  GetCategories(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/v1/categories');
  }

  GetCategoryDetails(catId: string | null): Observable<any> {
    return this.http.get(this.baseUrl + `/api/v1/categories/${catId}`);
  }

}
