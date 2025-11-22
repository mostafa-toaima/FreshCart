import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { App } from './app';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class CartModule { }
