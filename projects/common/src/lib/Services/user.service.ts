import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  getUserId(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user)._id : null;
  }

}
