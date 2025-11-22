import { platformBrowser } from '@angular/platform-browser';
import { CartModule } from './app/cart.module';

platformBrowser().bootstrapModule(CartModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
