import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'products-app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent {
  constructor() {
    console.log('✅ ProductsMainComponent created');
  }
}
