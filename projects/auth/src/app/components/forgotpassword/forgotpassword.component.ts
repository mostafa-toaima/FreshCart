import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpassService } from '../../services/forgetpass.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent {
  @Output() close = new EventEmitter<void>();
  @Input() login: boolean = false;

  step1 = true;
  step2 = false;
  step3 = false;
  isLoading = false;
  email: any = '';
  userMsg = '';

  forgotForm = new FormGroup({ email: new FormControl('') });
  resetCode = new FormGroup({ resetCode: new FormControl('') });
  resetPassword = new FormGroup({ newPassword: new FormControl('') });

  constructor(
    private _ForgetpassService: ForgetpassService,
    private _Renderer2: Renderer2,
    private _Router: Router,
    private location:Location
  ) { }

  forgotPassword(btn: HTMLButtonElement) {
    this.isLoading = true;
    this._Renderer2.setAttribute(btn, 'disabled', 'true');
    this.email = this.forgotForm.value.email;

    this._ForgetpassService.forgetPassword(this.forgotForm.value).subscribe({
      next: (res) => {
        this.userMsg = res.message;
        this.isLoading = false;
        this.step1 = false;
        this.step2 = true;
        this._Renderer2.removeAttribute(btn, 'disabled');
      },
      error: (err) => {
        this.userMsg = err.error.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, 'disabled');
      },
    });
  }

  resetPasswordCode(btn: HTMLButtonElement) {
    this._Renderer2.setAttribute(btn, 'disabled', 'true');
    this.isLoading = true;

    this._ForgetpassService.verifyResetCode(this.resetCode.value).subscribe({
      next: (res) => {
        this.step2 = false;
        this.step3 = true;
        this.userMsg = res.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, 'disabled');
      },
      error: (err) => {
        this.userMsg = err.error.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, 'disabled');
      },
    });
  }

  newPassword(btn: HTMLButtonElement) {
    this._Renderer2.setAttribute(btn, 'disabled', 'true');
    this.isLoading = true;

    const payload = { ...this.resetPassword.value, email: this.email };

    this._ForgetpassService.resetPassword(payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, 'disabled');
        if (res.token) {
          localStorage.setItem('token', res.token);
          this._Router.navigate(['/home']);
          this.close.emit(); // close modal
        }
      },
      error: (err) => {
        this.userMsg = err.error.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, 'disabled');
      },
    });
  }

  closeModal() {
    if (this.login) {
      this.close.emit();
    } else {
      this.location.back();
    }
  }
}
