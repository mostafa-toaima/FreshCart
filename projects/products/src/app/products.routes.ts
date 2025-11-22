import { Routes } from '@angular/router';
import { ProductsComponent } from './products/components/all-products/products.component';
import { Brands } from './brands/brands.component';
import { ProductsMainComponent } from './products-main.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsMainComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./products/components/all-products/products.component')
            .then(c => c.ProductsComponent)
      }
    ]
  },

  {
    path: 'brands',
    component: Brands
  }
];
