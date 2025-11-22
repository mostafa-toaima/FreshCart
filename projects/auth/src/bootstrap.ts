import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AuthComponent } from './app/auth.component';
import { routes } from './app/auth.routes';

bootstrapApplication(AuthComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).then(() => {
}).catch(err => {
});
