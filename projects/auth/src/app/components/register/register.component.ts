import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

import { AuthService } from '../../services/auth.service';
import { User } from "../../interfaces/user";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading: boolean = false;
  errMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private _Router: Router,
    private _AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group(
      {
        name: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,8}$/)],
        ],
        rePassword: [""],
        phone: [
          "",
          [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
        ],
      },
      { validators: [this.checkPassword] }
    );
  }

  checkPassword(group: FormGroup): void {
    const password = group.get("password");
    const rePassword = group.get("rePassword");
    if (rePassword?.value === "") {
      rePassword?.setErrors({ ...rePassword.errors, required: true });
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ ...rePassword.errors, mismatch: true });
    } else {
      const errors = rePassword?.errors;
      if (errors) {
        delete errors['mismatch'];
        if (Object.keys(errors).length === 0) rePassword.setErrors(null);
      }
    }

  }

  registerHandel(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      const userData: User = {
        userName: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };

      this._AuthService.SignUp(userData).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(["/home"]);
          this.isLoading = false;
          localStorage.setItem('token', res.token);
          this._AuthService.decodedToken();
        },
        error: (error) => {
          this.errMsg = error.error.message;
          console.log(error);
          this.isLoading = false;
        },
      });
    }
    registerForm.reset();
  }
}
