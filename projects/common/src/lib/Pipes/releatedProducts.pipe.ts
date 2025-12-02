import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../../products/src/app/products/models/product';

@Pipe({
  name: 'releatedProductsSlice',
  standalone: true,
})

export class ReleatedProductsPipe implements PipeTransform {
  transform(products: any[]): Product[] {
    const result: any[] = [];
    const indices = new Set<number>();

    while (indices.size < 12 && indices.size < products.length) {
      indices.add(this.getRandomNumber(0, products.length - 1));
    }

    indices.forEach((index) => result.push(products[index]));
    return result;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
