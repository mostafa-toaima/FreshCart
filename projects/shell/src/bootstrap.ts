import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/shell.routes';
import { ShellComponent } from './app/shell.component';
import { myHttpInterceptor } from '../../common/src/lib/interceptors/myhttp.interceptor';
import { loadingInterceptor } from '../../common/src/lib/interceptors/loading.interceptor';
import { importProvidersFrom } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(ShellComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([myHttpInterceptor, loadingInterceptor])
    ),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(CarouselModule),
    provideToastr({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 3000
    })
  ]
}).catch(err => {
  console.error(err);
});
