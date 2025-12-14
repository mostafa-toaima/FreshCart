import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';
import { WishlistService } from '../../../../../../common/src/lib/Services/wishlist.service';

import { ReleatedProducts } from './releated-products/releated-products.component';
import { CartService } from '../../../../../../common/src/lib/Services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink, ReleatedProducts],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  products: Product[] = [];
  wishListData: string[] = [];
  productId!: any;
  isLoading: boolean = false;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _TostarService: ToastrService,
    private _Render2: Renderer2,
    private _WishlistService: WishlistService
  ) {

  }


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
        if (this.productId) {
          this.getProductDetails();
        }
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.getReleatedProducts();
    this.getWishListUser();

  }

  getReleatedProducts() {
    this._ProductsService.GetAllProducts().subscribe({
      next: (res) => {

        this.products = res.content;

        console.log('productsData ', this.products);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getWishListUser() {
    this._WishlistService.getLoggedUserWishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.wishListData = res.data.map((item: any) => item._id);
      },
    });
  }

  getProductDetails() {
    this._ProductsService.GetSpecificProduct(this.productId).subscribe({
      next: (res) => {
        this.productDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
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
        this._TostarService.error(err.message);
        this.isLoading = false;
        this._Render2.removeAttribute(element, 'disabled');
      },
    });
  }


  productDetailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    items: 1,
  };
}
