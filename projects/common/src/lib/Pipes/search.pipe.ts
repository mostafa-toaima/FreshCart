import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../../products/src/app/products/models/product';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], term: string): Product[] {
    return products.filter((p)=> p.title.toLowerCase().includes(term.toLocaleLowerCase()));
  }
}
