import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from '../../../../common/src/lib/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: any = null;

  constructor(
    private _CartService: CartService,
    private _Render2: Renderer2,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private _TostarService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getLoggedUserCart();
  }

  getLoggedUserCart() {
    this._CartService.getUserCart(1).subscribe({
      next: (res) => {
        this.cartItems = res;
        console.log(res);
      },
      error: (err) => {
        console.log();
      },
    });
  }

  updateItem(
    cartItemId: number,
    countNumber: number,
    btn1: HTMLButtonElement,
    btn2: HTMLButtonElement
  ) {
    if (countNumber >= 1) {
      this._Render2.setAttribute(btn1, 'disabled', 'true');
      this._Render2.setAttribute(btn2, 'disabled', 'true');
      this._CartService.updateProductCount(cartItemId, countNumber, 1).subscribe({
        next: (response) => {
          console.log(response);
          this.cartItems = response;
          this._Render2.removeAttribute(btn1, 'disabled');
          this._Render2.removeAttribute(btn2, 'disabled');
        },
        error: (error) => {
          console.log(error);
          this._Render2.removeAttribute(btn1, 'disabled');
          this._Render2.removeAttribute(btn2, 'disabled');
        },
      });
    } else {
      this._CartService.removeSpecificItem(cartItemId).subscribe((res) => {
        this.cartItems = res;
        this._TostarService.info("Item removed");
        this._CartService.cartNumber.next(res.numOfCartItems);
      });
    }
  }


  removeItem(cartItemId: number, btnRef: HTMLButtonElement): void {
    this._Render2.setAttribute(btnRef, 'disabled', 'true');
    this._CartService.removeSpecificItem(cartItemId).subscribe({
      next: (response) => {
        console.log(response);
        this.cartItems = response;
        this.cdr.detectChanges();
        this._Render2.removeAttribute(btnRef, 'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (error) => {
        console.log(error);
        this._Render2.removeAttribute(btnRef, 'disabled');
      },
    });
  }

  clearCart() {
    this._CartService.deleteCrt(1).subscribe({
      next: (res) => {
        console.log("res open", res);
          this.cartItems = null;
          this.router.navigate(['/home']);
          this._TostarService.success('Cart is cleared successfully', 'Success')
      },
      error:(err)=>{console.log(err);
      }
    })
  }
}
