import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';

import { RandomSlicePipe } from '../../../../../common/src/lib/Pipes/random.pipe';
import { CutTextPipe } from '../../../../../common/src/lib/Pipes/cut-text.pipe';
import { SearchPipe } from '../../../../../common/src/lib/Pipes/search.pipe';

import { Categories } from '../../../../../common/src/lib/interfaces/categories';
import { Product } from '../../../../../common/src/lib/interfaces/product';

import { CategoriesService } from '../../../../../common/src/lib/Services/categories.service';
import { ProductsService } from '../../../../../common/src/lib/Services/products.service';
import { WishlistService } from '../../../../../common/src/lib/Services/wishlist.service';
import { CartService } from '../../../../../common/src/lib/Services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CutTextPipe,
    RandomSlicePipe,
    CarouselModule,
    RouterLink,
    SearchPipe,
    FormsModule,
    NgbModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  products: Product[] = [];
  categories: Categories[] = [];
  isLoading: boolean = false;
  term: string = '';
  wishListData: string[] = [];
  slides = [
    {
      image: './assets/img/banner_img_01.jpg',
      title: '<b>Zay</b> eCommerce',
      titleClass: 'text-success',
      subtitle: 'Tiny and Perfect eCommerce Template',
      description: `Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
    This template is 100% free provided by <a rel="sponsored" class="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a>.
    Image credits go to <a rel="sponsored" class="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
    <a rel="sponsored" class="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
    <a rel="sponsored" class="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.`,
    },
    {
      image: './assets/img/banner_img_02.jpg',
      title: 'Proident occaecat',
      subtitle: 'Aliquip ex ea commodo consequat',
      description: `You are permitted to use this Zay CSS template for your commercial websites.
    You are <strong>not permitted</strong> to re-distribute the template ZIP file.`,
    },
    {
      image: './assets/img/banner_img_03.jpg',
      title: 'Repr in voluptate',
      subtitle: 'Ullamco laboris nisi ut',
      description: `We bring you 100% free CSS templates for your websites.
    If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website.`,
    },
  ];


  constructor(
    private _ProductsService: ProductsService,
    private categoriesService: CategoriesService,
    private _CartService: CartService,
    private _TostarService: ToastrService,
    private _Render2: Renderer2,
    private _WishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.getPopularProducts();
    this.getCategories();
    this.getWishListUser();
  }

  getWishListUser() {
    // this._WishlistService.getLoggedUserWishlist().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.wishListData = res.data.map((item: any) => item._id);
    //   },
    // });
  }

  getPopularProducts() {
    this._ProductsService.GetAllProducts().subscribe({
      next: (res) => {

        this.products = res.content;
        console.log('productsData ',this.products);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getCategories() {
    this.categoriesService.GetCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addToCart(id: any, element: HTMLButtonElement) {
    this._Render2.setAttribute(element, 'disabled', 'true');
    this.isLoading = true;
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this._TostarService.success(res.message);
        this._Render2.removeAttribute(element, 'disabled');

        this._CartService.cartNumber.next(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
        this._TostarService.error(err.message);
        this.isLoading = false;
        this._Render2.removeAttribute(element, 'disabled');
      },
    });
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

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    margin: 10,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: false,
  };

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

}
