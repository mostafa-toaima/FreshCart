import {
  ForgotpasswordComponent
} from "./chunk-ACAZY7KT.js";
import {
  AuthService
} from "./chunk-NNWUHOE4.js";
import "./chunk-VUJOFXKG.js";

// projects/auth/src/app/components/login/login.component.ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i4 from "@angular/common";
function LoginComponent_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "Email is required");
    i0.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "Invalid Email");
    i0.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 19);
    i0.\u0275\u0275template(1, LoginComponent_div_13_span_1_Template, 2, 0, "span", 20)(2, LoginComponent_div_13_span_2_Template, 2, 0, "span", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.loginForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function LoginComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "Password is required");
    i0.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, " Password must start with an uppercase letter followed by 5-8 lowercase letters or numbers. ");
    i0.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 19);
    i0.\u0275\u0275template(1, LoginComponent_div_18_span_1_Template, 2, 0, "span", 20)(2, LoginComponent_div_18_span_2_Template, 2, 0, "span", 20);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.loginForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.loginForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function LoginComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275element(0, "i", 21);
  }
}
function LoginComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p", 22);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(ctx_r2.errMsg);
  }
}
function LoginComponent_app_forgotpassword_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "app-forgotpassword", 23);
    i0.\u0275\u0275listener("close", function LoginComponent_app_forgotpassword_30_Template_app_forgotpassword_close_0_listener() {
      i0.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r2.closeForgotPassword());
    });
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i0.\u0275\u0275property("login", true);
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  _Router;
  _AuthService;
  _Render2;
  loginForm;
  errMsg = "";
  isLoading = false;
  showForgotPassword = false;
  constructor(fb, _Router, _AuthService, _Render2) {
    this.fb = fb;
    this._Router = _Router;
    this._AuthService = _AuthService;
    this._Render2 = _Render2;
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,8}$/)]
      ]
    });
  }
  loginHandel(loginForm, btnLogin) {
    this._Render2.setAttribute(btnLogin, "disabled", "true");
    this.isLoading = true;
    if (loginForm.valid) {
      this._AuthService.Login(loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(["/home"]);
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res?.user));
          this._AuthService.decodedToken();
          this.isLoading = false;
          this._Render2.removeAttribute(btnLogin, "disabled");
        },
        error: (error) => {
          console.log(error);
          this.errMsg = error.error.message;
          this.isLoading = false;
          this._Render2.removeAttribute(btnLogin, "disabled");
        }
      });
    }
  }
  openForgotPassword() {
    this.showForgotPassword = true;
  }
  closeForgotPassword() {
    this.showForgotPassword = false;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(i0.\u0275\u0275directiveInject(i1.FormBuilder), i0.\u0275\u0275directiveInject(i2.Router), i0.\u0275\u0275directiveInject(AuthService), i0.\u0275\u0275directiveInject(i0.Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 31, vars: 7, consts: [["btnLogin", ""], [1, "login-wrapper"], [1, "login-card"], [1, "header", "d-flex", "justify-content-center", "align-items-center"], ["src", "./assets/javazone.svg", "alt", "javazone"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Write your email...", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Write your password...", 1, "form-control"], [1, "actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [1, "d-flex", "flex-column", "gap-3"], ["routerLink", "/auth/register", 1, "forgot"], [1, "forgot", 3, "click"], ["class", "server-error", 4, "ngIf"], [3, "login", "close", 4, "ngIf"], [1, "error"], [4, "ngIf"], [1, "fas", "fa-spinner", "fa-spin"], [1, "server-error"], [3, "close", "login"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i0.\u0275\u0275getCurrentView();
      i0.\u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
      i0.\u0275\u0275text(4, "Welcome to");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(5, "img", 4);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(6, "p", 5);
      i0.\u0275\u0275text(7, " Type your e-mail and password to log in or create an account. ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(8, "form", 6);
      i0.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
        i0.\u0275\u0275restoreView(_r1);
        const btnLogin_r2 = i0.\u0275\u0275reference(21);
        return i0.\u0275\u0275resetView(ctx.loginHandel(ctx.loginForm, btnLogin_r2));
      });
      i0.\u0275\u0275elementStart(9, "div", 7)(10, "label");
      i0.\u0275\u0275text(11, "Email");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(12, "input", 8);
      i0.\u0275\u0275template(13, LoginComponent_div_13_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(14, "div", 7)(15, "label");
      i0.\u0275\u0275text(16, "Password");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(17, "input", 10);
      i0.\u0275\u0275template(18, LoginComponent_div_18_Template, 3, 2, "div", 9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(19, "div", 11)(20, "button", 12, 0);
      i0.\u0275\u0275text(22, " Login ");
      i0.\u0275\u0275template(23, LoginComponent_i_23_Template, 1, 0, "i", 13);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(24, "div", 14)(25, "a", 15);
      i0.\u0275\u0275text(26, " Create Account? ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(27, "a", 16);
      i0.\u0275\u0275listener("click", function LoginComponent_Template_a_click_27_listener() {
        i0.\u0275\u0275restoreView(_r1);
        return i0.\u0275\u0275resetView(ctx.openForgotPassword());
      });
      i0.\u0275\u0275text(28, " Forget Password? ");
      i0.\u0275\u0275elementEnd()()()();
      i0.\u0275\u0275template(29, LoginComponent_p_29_Template, 2, 1, "p", 17);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275template(30, LoginComponent_app_forgotpassword_30_Template, 1, 1, "app-forgotpassword", 18);
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      i0.\u0275\u0275advance(8);
      i0.\u0275\u0275property("formGroup", ctx.loginForm);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.errors));
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("ngIf", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.errors));
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275property("ngIf", ctx.isLoading);
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275property("ngIf", ctx.errMsg);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("ngIf", ctx.showForgotPassword);
    }
  }, dependencies: [CommonModule, i4.NgIf, ReactiveFormsModule, i1.\u0275NgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink, ForgotpasswordComponent], styles: ['@import "https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@300&display=swap";\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f0f3f2;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #35ACA0;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: "Encode Sans Expanded", sans-serif !important;\n}\na[_ngcontent-%COMP%], \na[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-decoration: none !important;\n}\n.product[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.product[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%] {\n  right: 5px;\n}\n.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%] {\n  transition: right 0.7s;\n  font-size: 35px;\n  top: 5px;\n  right: -50px;\n  position: absolute;\n  z-index: 99;\n  cursor: pointer;\n}\n.product[_ngcontent-%COMP%]:hover {\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px !important;\n  border: solid 1px #35ACA0 !important;\n}\n.product[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: transform 1s, opacity 1s;\n  opacity: 0;\n  transform: translateY(100%);\n}\n.product[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.border-main[_ngcontent-%COMP%] {\n  border: solid 1px #35ACA0 !important;\n}\n.text-main[_ngcontent-%COMP%] {\n  color: #878787 !important;\n}\n.text-featured[_ngcontent-%COMP%] {\n  color: #35ACA0 !important;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-main-light[_ngcontent-%COMP%] {\n  background-color: #f0f3f2 !important;\n}\n.bg-main-light[_ngcontent-%COMP%] {\n  background-color: #f0f3f2 !important;\n}\n.bg-main[_ngcontent-%COMP%] {\n  background-color: #35ACA0 !important;\n}\n.rating-color[_ngcontent-%COMP%] {\n  color: #ffc908 !important;\n}\n.font-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n.main-btn[_ngcontent-%COMP%], \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #35ACA0 !important;\n  color: #fff !important;\n  border-radius: 5px !important;\n  border: unset !important;\n  cursor: pointer !important;\n  padding: 4px 8px !important;\n  transition:\n    background-color 0.5s ease,\n    box-shadow 0.5s ease,\n    transform 0.3s ease !important;\n}\n.main-btn[_ngcontent-%COMP%]:disabled, \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #878787 !important;\n  color: rgba(255, 255, 255, 0.6117647059) !important;\n  cursor: not-allowed !important;\n}\n.main-btn[_ngcontent-%COMP%]:hover:not(:disabled), \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px !important;\n  transform: translateY(-2px);\n}\n.main-btn[_ngcontent-%COMP%]:active, \n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px !important;\n}\n.active-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #35ACA0 !important;\n  border-radius: 5px !important;\n}\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px !important;\n  border-color: #35ACA0 !important;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain[_ngcontent-%COMP%] {\n  padding-block: 70px 30px;\n  margin-block: auto;\n}\n.go-up[_ngcontent-%COMP%] {\n  all: unset;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-content: center;\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 999;\n  font-size: 23px;\n  transition: opacity 1s;\n}\n.go-up.hide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0;\n}\n.go-up[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background-color: #f0f3f2;\n  border: 1px solid rgba(0, 0, 0, 0.3333333333);\n  border-radius: 10px;\n  transform: rotate(45deg);\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n[_nghost-%COMP%] {\n  min-height: auto;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 50%;\n  background-color: #f0f3f2;\n  border-radius: 10px;\n  padding: 32px;\n  box-shadow:\n    rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,\n    rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,\n    rgba(145, 158, 171, 0.12) 0px 1px 10px 0px;\n  border: 1px solid rgba(135, 135, 135, 0.25);\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n.login-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.login-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  display: block;\n}\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  color: #555;\n  margin-bottom: 25px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n  display: block;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  background-color: white;\n  transition: 0.8s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #35ACA0;\n  box-shadow: 0 0 0 0.25rem rgba(135, 135, 135, 0.35) !important;\n  outline: none;\n}\n.error[_ngcontent-%COMP%] {\n  color: #c91c1c;\n  padding-left: 4px;\n  padding-top: 4px;\n  font-size: 12px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 7px 18px !important;\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.actions[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  color: #35ACA0;\n  font-size: 17px;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n.server-error[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 10px;\n  text-align: center;\n  background-color: #ffdddd;\n  color: #a30000;\n  border-radius: 6px;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 670px) {\n  .login-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 24px;\n    border-radius: 8px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "projects/auth/src/app/components/login/login.component.ts", lineNumber: 16 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-7N64YQMH.js.map
