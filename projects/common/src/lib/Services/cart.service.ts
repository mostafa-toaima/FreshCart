import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';
  javazonBaseUrl: string = 'http://localhost:8082/javazon/cartItem';

  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);



  constructor(private http: HttpClient) {}

  addToCart(cartItemDto: any): Observable<any> {
    return this.http.post(this.javazonBaseUrl + '/addProductToCart', cartItemDto);
  }

  // getUserCart(): Observable<any> {
  //   return this.http.get('https://ecommerce.routemisr.com/api/v1/cart');
  // }

  getUserCart(userId: number): Observable<any> {
    return this.http.get(this.javazonBaseUrl + `/getUserCartItems/${userId}`);
  }

  updateProductCount(cartItemId: number, countNum: number, userId: number): Observable<any> {
    return this.http.put(
      this.javazonBaseUrl + `/updateCount/${cartItemId}/user/${userId}`,
      {
        count: countNum,
      }
    );
  }

  removeSpecificItem(cartItemId: number): Observable<any> {
    return this.http.delete(this.javazonBaseUrl + `/deleteItem/${cartItemId}`);
  }

  deleteCrt(userId: number): Observable<any> {
    return this.http.delete(this.javazonBaseUrl + `/clearAllCart/${userId}`);
  }

  checkOut(cartId: string|null, orderInfo:  object): Observable<any> {
    return this.http.post(
      this.baseUrl +
        `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: orderInfo
      }
    );
  }
}
