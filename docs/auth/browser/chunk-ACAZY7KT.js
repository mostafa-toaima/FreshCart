import {
  __spreadProps,
  __spreadValues
} from "./chunk-VUJOFXKG.js";

// projects/auth/src/app/components/forgotpassword/forgotpassword.component.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import * as i02 from "@angular/core";

// projects/auth/src/app/services/forgetpass.service.ts
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ForgetpassService = class _ForgetpassService {
  _HttpClient;
  constructor(_HttpClient) {
    this._HttpClient = _HttpClient;
  }
  baseUl = "https://ecommerce.routemisr.com/api/v1/auth/";
  forgetPassword(userEmail) {
    return this._HttpClient.post(this.baseUl + "forgotPasswords", userEmail);
  }
  verifyResetCode(resetCode) {
    return this._HttpClient.post(this.baseUl + "verifyResetCode", resetCode);
  }
  resetPassword(resetPasswordForm) {
    return this._HttpClient.put(this.baseUl + "resetPassword", resetPasswordForm);
  }
  static \u0275fac = function ForgetpassService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgetpassService)(i0.\u0275\u0275inject(i1.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _ForgetpassService, factory: _ForgetpassService.\u0275fac, providedIn: "root" });
};

// projects/auth/src/app/components/forgotpassword/forgotpassword.component.ts
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function ForgotpasswordComponent_section_6_i_8_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "i", 14);
  }
}
function ForgotpasswordComponent_section_6_p_9_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "p", 15);
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext(2);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(ctx_r2.userMsg);
  }
}
function ForgotpasswordComponent_section_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "section")(1, "form", 8)(2, "label", 9);
    i02.\u0275\u0275text(3, "Email:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(4, "input", 10);
    i02.\u0275\u0275elementStart(5, "button", 11, 0);
    i02.\u0275\u0275listener("click", function ForgotpasswordComponent_section_6_Template_button_click_5_listener() {
      i02.\u0275\u0275restoreView(_r1);
      const btnForget_r2 = i02.\u0275\u0275reference(6);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r2.forgotPassword(btnForget_r2));
    });
    i02.\u0275\u0275text(7, " Send Reset Code ");
    i02.\u0275\u0275template(8, ForgotpasswordComponent_section_6_i_8_Template, 1, 0, "i", 12);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275template(9, ForgotpasswordComponent_section_6_p_9_Template, 2, 1, "p", 13);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("formGroup", ctx_r2.forgotForm);
    i02.\u0275\u0275advance(7);
    i02.\u0275\u0275property("ngIf", ctx_r2.isLoading);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("ngIf", ctx_r2.userMsg);
  }
}
function ForgotpasswordComponent_section_7_i_8_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "i", 14);
  }
}
function ForgotpasswordComponent_section_7_p_9_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "p", 15);
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext(2);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(ctx_r2.userMsg);
  }
}
function ForgotpasswordComponent_section_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "section")(1, "form", 8)(2, "label", 16);
    i02.\u0275\u0275text(3, "Reset Code:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(4, "input", 17);
    i02.\u0275\u0275elementStart(5, "button", 11, 1);
    i02.\u0275\u0275listener("click", function ForgotpasswordComponent_section_7_Template_button_click_5_listener() {
      i02.\u0275\u0275restoreView(_r4);
      const btnReset_r5 = i02.\u0275\u0275reference(6);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r2.resetPasswordCode(btnReset_r5));
    });
    i02.\u0275\u0275text(7, " Verify Code ");
    i02.\u0275\u0275template(8, ForgotpasswordComponent_section_7_i_8_Template, 1, 0, "i", 12);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275template(9, ForgotpasswordComponent_section_7_p_9_Template, 2, 1, "p", 13);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("formGroup", ctx_r2.resetCode);
    i02.\u0275\u0275advance(7);
    i02.\u0275\u0275property("ngIf", ctx_r2.isLoading);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("ngIf", ctx_r2.userMsg);
  }
}
function ForgotpasswordComponent_section_8_i_8_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "i", 14);
  }
}
function ForgotpasswordComponent_section_8_p_9_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "p", 15);
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext(2);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(ctx_r2.userMsg);
  }
}
function ForgotpasswordComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "section")(1, "form", 8)(2, "label", 18);
    i02.\u0275\u0275text(3, "New Password:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(4, "input", 19);
    i02.\u0275\u0275elementStart(5, "button", 11, 2);
    i02.\u0275\u0275listener("click", function ForgotpasswordComponent_section_8_Template_button_click_5_listener() {
      i02.\u0275\u0275restoreView(_r6);
      const btnNew_r7 = i02.\u0275\u0275reference(6);
      const ctx_r2 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r2.newPassword(btnNew_r7));
    });
    i02.\u0275\u0275text(7, " Reset Password ");
    i02.\u0275\u0275template(8, ForgotpasswordComponent_section_8_i_8_Template, 1, 0, "i", 12);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275template(9, ForgotpasswordComponent_section_8_p_9_Template, 2, 1, "p", 13);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("formGroup", ctx_r2.resetPassword);
    i02.\u0275\u0275advance(7);
    i02.\u0275\u0275property("ngIf", ctx_r2.isLoading);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("ngIf", ctx_r2.userMsg);
  }
}
var ForgotpasswordComponent = class _ForgotpasswordComponent {
  _ForgetpassService;
  _Renderer2;
  _Router;
  location;
  close = new EventEmitter();
  login = false;
  step1 = true;
  step2 = false;
  step3 = false;
  isLoading = false;
  email = "";
  userMsg = "";
  forgotForm = new FormGroup({ email: new FormControl("") });
  resetCode = new FormGroup({ resetCode: new FormControl("") });
  resetPassword = new FormGroup({ newPassword: new FormControl("") });
  constructor(_ForgetpassService, _Renderer2, _Router, location) {
    this._ForgetpassService = _ForgetpassService;
    this._Renderer2 = _Renderer2;
    this._Router = _Router;
    this.location = location;
  }
  forgotPassword(btn) {
    this.isLoading = true;
    this._Renderer2.setAttribute(btn, "disabled", "true");
    this.email = this.forgotForm.value.email;
    this._ForgetpassService.forgetPassword(this.forgotForm.value).subscribe({
      next: (res) => {
        this.userMsg = res.message;
        this.isLoading = false;
        this.step1 = false;
        this.step2 = true;
        this._Renderer2.removeAttribute(btn, "disabled");
      },
      error: (err) => {
        this.userMsg = err.error.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, "disabled");
      }
    });
  }
  resetPasswordCode(btn) {
    this._Renderer2.setAttribute(btn, "disabled", "true");
    this.isLoading = true;
    this._ForgetpassService.verifyResetCode(this.resetCode.value).subscribe({
      next: (res) => {
        this.step2 = false;
        this.step3 = true;
        this.userMsg = res.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, "disabled");
      },
      error: (err) => {
        this.userMsg = err.error.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, "disabled");
      }
    });
  }
  newPassword(btn) {
    this._Renderer2.setAttribute(btn, "disabled", "true");
    this.isLoading = true;
    const payload = __spreadProps(__spreadValues({}, this.resetPassword.value), { email: this.email });
    this._ForgetpassService.resetPassword(payload).subscribe({
      next: (res) => {
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, "disabled");
        if (res.token) {
          localStorage.setItem("token", res.token);
          this._Router.navigate(["/home"]);
          this.close.emit();
        }
      },
      error: (err) => {
        this.userMsg = err.error.message;
        this.isLoading = false;
        this._Renderer2.removeAttribute(btn, "disabled");
      }
    });
  }
  closeModal() {
    if (this.login) {
      this.close.emit();
    } else {
      this.location.back();
    }
  }
  static \u0275fac = function ForgotpasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotpasswordComponent)(i02.\u0275\u0275directiveInject(ForgetpassService), i02.\u0275\u0275directiveInject(i02.Renderer2), i02.\u0275\u0275directiveInject(i2.Router), i02.\u0275\u0275directiveInject(i3.Location));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _ForgotpasswordComponent, selectors: [["app-forgotpassword"]], inputs: { login: "login" }, outputs: { close: "close" }, decls: 9, vars: 3, consts: [["btnForget", ""], ["btnReset", ""], ["btnNew", ""], [1, "modal-backdrop"], [1, "modal-container"], [1, "close-btn", 3, "click"], [1, "modal-title"], [4, "ngIf"], [3, "formGroup"], ["for", "email"], ["formControlName", "email", "type", "email", "id", "email", "placeholder", "Enter your email", 1, "form-control", "my-2"], ["type", "button", 1, "main-btn", "w-100", "mt-3", 3, "click"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "fas", "fa-spinner", "fa-spin"], [1, "alert", "alert-danger", "mt-2"], ["for", "resetCode"], ["formControlName", "resetCode", "type", "text", "id", "resetCode", "placeholder", "Enter reset code", 1, "form-control", "my-2"], ["for", "resetPassword"], ["formControlName", "newPassword", "type", "password", "id", "resetPassword", "placeholder", "Enter new password", 1, "form-control", "my-2"]], template: function ForgotpasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
      i02.\u0275\u0275listener("click", function ForgotpasswordComponent_Template_button_click_2_listener() {
        return ctx.closeModal();
      });
      i02.\u0275\u0275text(3, "\xD7");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(4, "h3", 6);
      i02.\u0275\u0275text(5, "Forget Password");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275template(6, ForgotpasswordComponent_section_6_Template, 10, 3, "section", 7)(7, ForgotpasswordComponent_section_7_Template, 10, 3, "section", 7)(8, ForgotpasswordComponent_section_8_Template, 10, 3, "section", 7);
      i02.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(6);
      i02.\u0275\u0275property("ngIf", ctx.step1);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("ngIf", ctx.step2);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("ngIf", ctx.step3);
    }
  }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i4.\u0275NgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  padding: 24px;\n  width: 100%;\n  max-width: 400px;\n  position: relative;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n.modal-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.main-btn[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.main-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n  margin-top: 8px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=forgotpassword.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(ForgotpasswordComponent, { className: "ForgotpasswordComponent", filePath: "projects/auth/src/app/components/forgotpassword/forgotpassword.component.ts", lineNumber: 14 });
})();

export {
  ForgotpasswordComponent
};
//# sourceMappingURL=chunk-ACAZY7KT.js.map
