import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../../products/src/app/products/models/product';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], term: string): Product[] {
    if (!products || !term) return products;
    return products.filter(p => p.productName?.toLowerCase().includes(term.toLowerCase()));
  }
}

