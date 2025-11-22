import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { authGuard, authGuardLogin } from '../../../common/src/lib/guards/auth.guard';

export const routes: Routes = [
  // --------------------------
  // BLANK LAYOUT
  // --------------------------
  {
    canActivate: [authGuard],
    path: '',
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component')
        .then(m => m.BlankLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'products',
        loadChildren: () =>
          loadRemoteModule('products', './routes').then(m => m.routes)
      },
      // {
      //   path: 'brands',
      //   loadComponent: () =>
      //     import('./components/brands/brands.component').then(m => m.BrandsComponent)
      // },
      // {
      //   path: 'categories',
      //   loadComponent: () =>
      //     import('./components/categories/categories.component').then(m => m.CategoriesComponent)
      // }
    ]
  },

  // --------------------------
  // AUTH LAYOUT
  // --------------------------
  {
    canActivate: [authGuardLogin],
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component')
        .then(m => m.AuthLayoutComponent),
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          loadRemoteModule('auth', './routes').then(m => m.routes)
      },
    ]
  },

  // --------------------------
  // NOT FOUND
  // --------------------------
  { path: '**', redirectTo: '' }
];
