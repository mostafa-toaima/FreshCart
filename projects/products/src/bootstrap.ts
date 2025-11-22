import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ProductsMainComponent } from './app/products-main.component';
import { routes } from './app/products.routes';

bootstrapApplication(ProductsMainComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).then(() => {
}).catch(err => {
});
