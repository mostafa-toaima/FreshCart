import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from '../../../../common/src/lib/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'javazone-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems: any = { content: [], totalAmount: 0 };

  constructor(
    private _CartService: CartService,
    private _Render2: Renderer2,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private _TostarService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getLoggedUserCart();
  }

  calculateTotal() {
    if (!this.cartItems?.content) return;
    this.cartItems.totalAmount = this.cartItems.content
      .reduce((sum: number, item: any) => sum + (item.quantity * item.price), 0);
  }

  getLoggedUserCart() {
    this._CartService.getUserCart(1).subscribe({
      next: (res) => {
        this.cartItems = res;
        this.calculateTotal();
      },
      error: () => { },
    });
  }

  updateItem(cartItemId: number, countNumber: number, btn1: HTMLButtonElement, btn2: HTMLButtonElement) {

    if (countNumber < 1) {
      this.removeItem(cartItemId);
      return;
    }

    const item = this.cartItems.content.find((i: any) => i.cartItemId === cartItemId);
    if (item) item.quantity = countNumber;
    this.calculateTotal();

    this._Render2.setAttribute(btn1, 'disabled', 'true');
    this._Render2.setAttribute(btn2, 'disabled', 'true');

    this._CartService.updateProductCount(cartItemId, countNumber, 1).subscribe({
      next: (response) => {
        this.cartItems = response;
        this.calculateTotal();
        this._Render2.removeAttribute(btn1, 'disabled');
        this._Render2.removeAttribute(btn2, 'disabled');
      },
      error: () => {
        this._Render2.removeAttribute(btn1, 'disabled');
        this._Render2.removeAttribute(btn2, 'disabled');
        this.getLoggedUserCart();
      },
    });
  }

  removeItem(cartItemId: number, btnRef?: HTMLButtonElement): void {
    if (btnRef) this._Render2.setAttribute(btnRef, 'disabled', 'true');

    this.cartItems.content = this.cartItems.content.filter(
      (item: any) => item.cartItemId !== cartItemId
    );
    this.calculateTotal();
    this._CartService.cartNumber.next(this.cartItems.content.length);

    this._CartService.removeSpecificItem(cartItemId).subscribe({
      next: (response) => { },
      error: () => {
        this.getLoggedUserCart();
      },
    });
  }

  clearCart() {
    this.cartItems = { content: [], totalAmount: 0 };
    this._CartService.cartNumber.next(0);
    this._CartService.deleteCrt(1).subscribe({
      next: () => {
        this._TostarService.success('Cart cleared successfully');
        this.router.navigate(['/home']);
      },
      error: () => this.getLoggedUserCart()
    });
  }
}
