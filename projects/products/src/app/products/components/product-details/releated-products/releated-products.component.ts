import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CutTextPipe } from '../../../../../../../common/src/lib/Pipes/cut-text.pipe';

import { ReleatedProductsPipe } from './../../../../../../../common/src/lib/Pipes/releatedProducts.pipe';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../../../../../common/src/lib/Services/wishlist.service';
import { Product } from '../../../models/product';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'javazone-releated-products',
  imports: [CommonModule, ReleatedProductsPipe, CutTextPipe, RouterLink],
  templateUrl: './releated-products.component.html',
  styleUrls: ['./releated-products.component.scss'],
})
export class ReleatedProducts {
  @Input() products: Product[] = [];
  wishListData: string[] = [];

  constructor(
    private _TostarService: ToastrService,
    private _WishlistService: WishlistService
  ) {

  }

  addFav(productId: string): void {
    this._WishlistService.addItemToWishList(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._TostarService.success(response.message);
        this.wishListData = response.data;
        this._WishlistService.whishItemNumber.next(response.data.length);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  removeFav(productId: string): void {
    this._WishlistService.removeItemFromWishList(productId).subscribe({
      next: (response) => {
        this._TostarService.success(response.message);
        this.wishListData = response.data;
        this._WishlistService.whishItemNumber.next(response.data.length);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addToCart(id: any, element: HTMLButtonElement) {
    // this._Render2.setAttribute(element, 'disabled', 'true');
    // this.isLoading = true;
    // this._CartService.addToCart(id).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.isLoading = false;
    //     this._TostarService.success(res.message);
    //     this._Render2.removeAttribute(element, 'disabled');

    //     this._CartService.cartNumber.next(res.numOfCartItems);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this._TostarService.error(err.message);
    //     this.isLoading = false;
    //     this._Render2.removeAttribute(element, 'disabled');
    //   },
    // });
  }

}
