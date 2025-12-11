import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadComponent: () =>
      import('./cart/cart.component')
        .then(m => m.CartComponent),
      title: 'Cart Items',

  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./allorders/allorders.component')
        .then(m => m.AllordersComponent),
       title: 'All orders',
  },
  {
    path: 'payment/:id',
    loadComponent: () =>
      import('./payment/payment.component').then(
        (m) => m.PaymentComponent
      ),
    title: 'Payment',
  },

];

