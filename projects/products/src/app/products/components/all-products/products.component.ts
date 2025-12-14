import { FormsModule } from '@angular/forms';
import { Component, Renderer2 } from '@angular/core';

import { Product } from './../../models/product';
import { ProductsService } from '../../services/products.service';
import { CutTextPipe } from '../../../../../../common/src/lib/Pipes/cut-text.pipe';
import { CartService } from './../../../../../../common/src/lib/Services/cart.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'javazone-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    CutTextPipe
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [];
  pageSize: number = 0;
  currentPage: number = 0;
  total: number = 0;
  isLoading: boolean = false;
  // wishListData: string[] = [];

  constructor(
    private _ProductsService: ProductsService,
    private _Render2: Renderer2,
    private _TostarService: ToastrService,
    private _CartService: CartService,
    // private _WishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.getProducts(this.currentPage);
    // this.getWishListUser();
  }

  // getWishListUser() {
  //   this._WishlistService.getLoggedUserWishlist().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.wishListData = res.data.map((item: any) => item._id);
  //     },
  //   });
  // }

  getProducts(event: number) {
    this._ProductsService.GetAllProducts(event).subscribe({
      next: (res) => {
        console.log("event", event);

        console.log('products ', res);
        this.products = res.content;
        this.pageSize = res.size;
        this.currentPage = res.page;
        this.total = res.totalPages;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  pageChanged(event: any): void {
    console.log(event);
    this.currentPage = event;
    this.getProducts(event);
  }

  addToCart(id: any, element: HTMLButtonElement) {
    this._Render2.setAttribute(element, 'disabled', 'true');
    this.isLoading = true;

    const user = JSON.parse(localStorage.getItem("user")!);
    const userEmail = user?.email;

    const cartItemDto = {
      productId: id,
      userId: 1,
      userEmail: userEmail,
      quantity: 1
    };

    this._CartService.addToCart(cartItemDto).subscribe({
      next: (res) => {
        this.isLoading = false;
        this._TostarService.success("Product Added To Cart");
        this._Render2.removeAttribute(element, 'disabled');
        this._CartService.cartNumber.next(res.numOfCartItems);
      },
      error: (err) => {
        this._TostarService.error("General Error");
        this.isLoading = false;
        this._Render2.removeAttribute(element, 'disabled');
      },
    });
  }

  addFav(productId: string): void {
    // this._WishlistService.addItemToWishList(productId).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this._TostarService.success(response.message);
    //     this.wishListData = response.data;
    //     this._WishlistService.whishItemNumber.next(response.data.length);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  removeFav(productId: string): void {
    // this._WishlistService.removeItemFromWishList(productId).subscribe({
    //   next: (response) => {
    //     this._TostarService.success(response.message);
    //     this.wishListData = response.data;
    //     this._WishlistService.whishItemNumber.next(response.data.length);
    //   },
    //   error: (error) => { },
    // });
  }
}
