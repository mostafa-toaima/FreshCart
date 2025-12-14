import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/cart.routes';
import { CartMainComponent } from './app/cart-main.component';

bootstrapApplication(CartMainComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withHashLocation())
  ]
}).then(() => {
}).catch(err => {
});
