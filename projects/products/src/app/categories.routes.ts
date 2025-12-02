import { Routes } from '@angular/router';
import { ProductsComponent } from './products/components/all-products/products.component';
import { Brands } from './brands/brands.component';
import { ProductsMainComponent } from './products-main.component';
import { CategoriesMainComponent } from './categories/categories-main.component';

export const routes: Routes = [
  {
    path: '',
    component: CategoriesMainComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./categories/components/categories/categories.component')
            .then(c => c.CategoriesComponent)
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./categories/components/categoreydetails/categoreydetails.component')
            .then(c => c.CategoreydetailsComponent)
      },
    ]
  },
];
