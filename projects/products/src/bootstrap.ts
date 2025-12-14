import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { ProductsMainComponent } from './app/products-main.component';
import { routes } from './app/products.routes';

bootstrapApplication(ProductsMainComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withHashLocation())
  ]
}).then(() => {
}).catch(err => {
});
