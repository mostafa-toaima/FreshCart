import {
  AuthService
} from "./chunk-NNWUHOE4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VUJOFXKG.js";

// projects/auth/src/app/components/register/register.component.ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i4 from "@angular/common";
function RegisterComponent_div_12_p_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Name is required");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_12_p_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Name minLength 3");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 23);
    i0.\u0275\u0275template(1, RegisterComponent_div_12_p_1_Template, 2, 0, "p", 20)(2, RegisterComponent_div_12_p_2_Template, 2, 0, "p", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("name")) == null ? null : tmp_1_0.getError("required"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("name")) == null ? null : tmp_2_0.getError("minlength"));
  }
}
function RegisterComponent_div_17_p_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Email is required");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_17_p_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Invalid Email");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 23);
    i0.\u0275\u0275template(1, RegisterComponent_div_17_p_1_Template, 2, 0, "p", 20)(2, RegisterComponent_div_17_p_2_Template, 2, 0, "p", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_1_0.getError("required"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_2_0.getError("email"));
  }
}
function RegisterComponent_div_23_p_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Password is required");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_23_p_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, " Password must start with an uppercase letter followed by 5 to 8 lowercase letters or numbers. ");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 23);
    i0.\u0275\u0275template(1, RegisterComponent_div_23_p_1_Template, 2, 0, "p", 20)(2, RegisterComponent_div_23_p_2_Template, 2, 0, "p", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_1_0.getError("required"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_2_0.getError("pattern"));
  }
}
function RegisterComponent_div_28_p_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Confirm is required");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_28_p_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Passwords don't match");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 23);
    i0.\u0275\u0275template(1, RegisterComponent_div_28_p_1_Template, 2, 0, "p", 20)(2, RegisterComponent_div_28_p_2_Template, 2, 0, "p", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("rePassword")) == null ? null : tmp_1_0.getError("required"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("rePassword")) == null ? null : tmp_2_0.getError("mismatch"));
  }
}
function RegisterComponent_div_34_p_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "Phone is required");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_34_p_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, " Invalid Egyptian phone number. Must be in the format 01XXXXXXXXX. ");
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 23);
    i0.\u0275\u0275template(1, RegisterComponent_div_34_p_1_Template, 2, 0, "p", 20)(2, RegisterComponent_div_34_p_2_Template, 2, 0, "p", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("phone")) == null ? null : tmp_1_0.getError("required"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("phone")) == null ? null : tmp_2_0.getError("pattern"));
  }
}
function RegisterComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275element(1, "i", 24);
    i0.\u0275\u0275elementEnd();
  }
}
function RegisterComponent_p_41_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p", 25);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(ctx_r0.errMsg);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  _Router;
  _AuthService;
  registerForm;
  isLoading = false;
  errMsg = "";
  constructor(fb, _Router, _AuthService) {
    this.fb = fb;
    this._Router = _Router;
    this._AuthService = _AuthService;
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,8}$/)]
      ],
      rePassword: [""],
      phone: [
        "",
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]
      ]
    }, { validators: [this.checkPassword] });
  }
  checkPassword(group) {
    const password = group.get("password");
    const rePassword = group.get("rePassword");
    if (rePassword?.value === "") {
      rePassword?.setErrors(__spreadProps(__spreadValues({}, rePassword.errors), { required: true }));
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors(__spreadProps(__spreadValues({}, rePassword.errors), { mismatch: true }));
    } else {
      const errors = rePassword?.errors;
      if (errors) {
        delete errors["mismatch"];
        if (Object.keys(errors).length === 0)
          rePassword.setErrors(null);
      }
    }
  }
  registerHandel(registerForm) {
    this.isLoading = true;
    if (registerForm.valid) {
      const userData = {
        userName: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      this._AuthService.SignUp(userData).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(["/home"]);
          this.isLoading = false;
          localStorage.setItem("token", res.token);
          this._AuthService.decodedToken();
        },
        error: (error) => {
          this.errMsg = error.error.message;
          console.log(error);
          this.isLoading = false;
        }
      });
    }
    registerForm.reset();
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(i0.\u0275\u0275directiveInject(i1.FormBuilder), i0.\u0275\u0275directiveInject(i2.Router), i0.\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 42, vars: 9, consts: [[1, "register-wrapper"], [1, "register-card"], [1, "logo-wrapper", "d-flex", "align-items-center", "justify-content-center"], ["src", "./assets/javazone.svg", "alt", "javazone"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "name"], ["formControlName", "name", "type", "text", "placeholder", "Write your name...", "id", "name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "type", "email", "placeholder", "Write your email...", "id", "email", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "placeholder", "Write your password...", "id", "password", 1, "form-control"], ["for", "rePassword"], ["formControlName", "rePassword", "type", "password", "placeholder", "Write your confirm password...", "id", "rePassword", 1, "form-control"], ["for", "phone"], ["type", "tel", "formControlName", "phone", "placeholder", "Write your phone...", "id", "phone", 1, "form-control"], [1, "actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["routerLink", "./auth", 1, "login"], ["class", "server-error", 4, "ngIf"], [1, "error"], [1, "fas", "fa-spin", "fa-spinner"], [1, "server-error"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      i0.\u0275\u0275text(4, "Register Now");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(5, "img", 3);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(6, "form", 4);
      i0.\u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
        return ctx.registerHandel(ctx.registerForm);
      });
      i0.\u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label", 7);
      i0.\u0275\u0275text(10, "Name");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(11, "input", 8);
      i0.\u0275\u0275template(12, RegisterComponent_div_12_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(13, "div", 6)(14, "label", 10);
      i0.\u0275\u0275text(15, "Email");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(16, "input", 11);
      i0.\u0275\u0275template(17, RegisterComponent_div_17_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(18, "div", 5)(19, "div", 6)(20, "label", 12);
      i0.\u0275\u0275text(21, "Password");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(22, "input", 13);
      i0.\u0275\u0275template(23, RegisterComponent_div_23_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(24, "div", 6)(25, "label", 14);
      i0.\u0275\u0275text(26, "Confirm Password");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(27, "input", 15);
      i0.\u0275\u0275template(28, RegisterComponent_div_28_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(29, "div", 5)(30, "div", 6)(31, "label", 16);
      i0.\u0275\u0275text(32, "Phone Number");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(33, "input", 17);
      i0.\u0275\u0275template(34, RegisterComponent_div_34_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(35, "div", 18)(36, "button", 19);
      i0.\u0275\u0275text(37, " SignUp ");
      i0.\u0275\u0275template(38, RegisterComponent_span_38_Template, 2, 0, "span", 20);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(39, "a", 21);
      i0.\u0275\u0275text(40, " Login ? ");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275template(41, RegisterComponent_p_41_Template, 2, 1, "p", 22);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275property("formGroup", ctx.registerForm);
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275property("ngIf", ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.touched));
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("ngIf", ((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.registerForm.get("email")) == null ? null : tmp_2_0.touched));
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275property("ngIf", ((tmp_3_0 = ctx.registerForm.get("password")) == null ? null : tmp_3_0.errors) && ((tmp_3_0 = ctx.registerForm.get("password")) == null ? null : tmp_3_0.touched));
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("ngIf", ((tmp_4_0 = ctx.registerForm.get("rePassword")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.registerForm.get("rePassword")) == null ? null : tmp_4_0.touched));
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275property("ngIf", ((tmp_5_0 = ctx.registerForm.get("phone")) == null ? null : tmp_5_0.errors) && ((tmp_5_0 = ctx.registerForm.get("phone")) == null ? null : tmp_5_0.touched));
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("disabled", ctx.registerForm.invalid);
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("ngIf", ctx.isLoading);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275property("ngIf", ctx.errMsg != "");
    }
  }, dependencies: [CommonModule, i4.NgIf, ReactiveFormsModule, i1.\u0275NgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@300&display=swap";\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f0f3f2;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #35ACA0;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: "Encode Sans Expanded", sans-serif !important;\n}\na[_ngcontent-%COMP%], \na[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-decoration: none !important;\n}\n.product[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.product[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%] {\n  right: 5px;\n}\n.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%] {\n  transition: right 0.7s;\n  font-size: 35px;\n  top: 5px;\n  right: -50px;\n  position: absolute;\n  z-index: 99;\n  cursor: pointer;\n}\n.product[_ngcontent-%COMP%]:hover {\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px !important;\n  border: solid 1px #35ACA0 !important;\n}\n.product[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: transform 1s, opacity 1s;\n  opacity: 0;\n  transform: translateY(100%);\n}\n.product[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.border-main[_ngcontent-%COMP%] {\n  border: solid 1px #35ACA0 !important;\n}\n.text-main[_ngcontent-%COMP%] {\n  color: #878787 !important;\n}\n.text-featured[_ngcontent-%COMP%] {\n  color: #35ACA0 !important;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-main-light[_ngcontent-%COMP%] {\n  background-color: #f0f3f2 !important;\n}\n.bg-main-light[_ngcontent-%COMP%] {\n  background-color: #f0f3f2 !important;\n}\n.bg-main[_ngcontent-%COMP%] {\n  background-color: #35ACA0 !important;\n}\n.rating-color[_ngcontent-%COMP%] {\n  color: #ffc908 !important;\n}\n.font-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n.main-btn[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #35ACA0 !important;\n  color: #fff !important;\n  border-radius: 5px !important;\n  border: unset !important;\n  cursor: pointer !important;\n  padding: 4px 8px !important;\n  transition:\n    background-color 0.5s ease,\n    box-shadow 0.5s ease,\n    transform 0.3s ease !important;\n}\n.main-btn[_ngcontent-%COMP%]:disabled, \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #878787 !important;\n  color: rgba(255, 255, 255, 0.6117647059) !important;\n  cursor: not-allowed !important;\n}\n.main-btn[_ngcontent-%COMP%]:hover:not(:disabled), \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px !important;\n  transform: translateY(-2px);\n}\n.main-btn[_ngcontent-%COMP%]:active, \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px !important;\n}\n.active-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #35ACA0 !important;\n  border-radius: 5px !important;\n}\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px !important;\n  border-color: #35ACA0 !important;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain[_ngcontent-%COMP%] {\n  padding-block: 70px 30px;\n  margin-block: auto;\n}\n.go-up[_ngcontent-%COMP%] {\n  all: unset;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-content: center;\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 999;\n  font-size: 23px;\n  transition: opacity 1s;\n}\n.go-up.hide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n}\n.go-up[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background-color: #f0f3f2;\n  border: 1px solid rgba(0, 0, 0, 0.3333333333);\n  border-radius: 10px;\n  transform: rotate(45deg);\n}\n.register-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n[_nghost-%COMP%] {\n  min-height: auto;\n}\n.register-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 60%;\n  background-color: #f0f3f2;\n  border-radius: 10px;\n  padding: 36px 30px;\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px;\n  border: 1px solid rgba(135, 135, 135, 0.25);\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n.register-card[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  margin-bottom: 12px;\n}\n.register-card[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 12px;\n  font-weight: 600;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: block;\n  margin-bottom: 5px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  background-color: white;\n  transition: 0.8s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #35ACA0;\n  box-shadow: 0 0 0 0.25rem rgba(135, 135, 135, 0.35) !important;\n  outline: none;\n}\n.error[_ngcontent-%COMP%] {\n  color: #c91c1c;\n  padding-left: 4px;\n  padding-top: 4px;\n  font-size: 12px;\n}\n.actions[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 7px 18px !important;\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.actions[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  color: #35ACA0;\n  font-size: 20px;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n.server-error[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 10px;\n  text-align: center;\n  background-color: #ffdddd;\n  color: #a30000;\n  border-radius: 6px;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 670px) {\n  .register-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 24px;\n    border-radius: 8px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "projects/auth/src/app/components/register/register.component.ts", lineNumber: 21 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=register.component-2QUNNYDM.js.map
