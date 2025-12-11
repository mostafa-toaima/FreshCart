import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'javazone-main-cart',
  template: "<p>javazone-cart</p>",
  standalone: true,
})
export class CartMainComponent {
  constructor() {
    console.log('CartMainComponent created');
  }
}
