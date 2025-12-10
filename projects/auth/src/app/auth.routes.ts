import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component')
        .then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component')
        .then(c => c.RegisterComponent)
  },
  {
    path: 'updatepassword',
    loadComponent: () =>
      import('./components/update-password/update-password.component')
        .then(m => m.UpdatePasswordComponent)
  },
  {
    path: 'forgotpassword',
    loadComponent: () =>
      import('./components/forgotpassword/forgotpassword.component')
        .then(m => m.ForgotpasswordComponent)
  }
];

