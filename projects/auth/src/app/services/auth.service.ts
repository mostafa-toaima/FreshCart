import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo: any;
  javazonBaseUrl: string = 'http://localhost:8082/javazon/user';

  constructor(private http: HttpClient) {}

  SignUp(userData: User): Observable<any> {
    return this.http.post(this.javazonBaseUrl + '/register',userData);
  }

  Login(userData: User): Observable<any> {
    return this.http.post(this.javazonBaseUrl + '/login', userData);
  }

  decodedToken(): void {
    if (localStorage.getItem('token') !== null) {
      const encode = localStorage.getItem('token');
      if (encode !== null) {
        const decode = jwtDecode(encode);
        this.userInfo = decode;
      }
    }
  }

  updatePassword(updateData: object) : Observable<any> {
    return this.http.put(
      'https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', updateData
    );
  }
}
