import {
  AuthService
} from "./chunk-NNWUHOE4.js";
import "./chunk-VUJOFXKG.js";

// projects/auth/src/app/components/update-password/update-password.component.ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function UpdatePasswordComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275element(1, "i", 14);
    i0.\u0275\u0275elementEnd();
  }
}
var UpdatePasswordComponent = class _UpdatePasswordComponent {
  _Render2;
  _Router;
  _AuthService;
  constructor(_Render2, _Router, _AuthService) {
    this._Render2 = _Render2;
    this._Router = _Router;
    this._AuthService = _AuthService;
  }
  isLoading = false;
  name = "";
  userData = {};
  ngOnInit() {
    this._AuthService.decodedToken();
    this.userData = this._AuthService.userInfo;
    this.name = this.userData?.name;
    console.log(this.userData);
  }
  updateForm = new FormGroup({
    currentPassword: new FormControl(""),
    password: new FormControl(""),
    rePassword: new FormControl("")
  });
  handelUpdate(updateForm, btnUpdate) {
    this._Render2.setAttribute(btnUpdate, "disabled", "true");
    this.isLoading = true;
    if (updateForm.valid) {
      this._AuthService.updatePassword(updateForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Router.navigate(["/home"]);
          localStorage.setItem("token", res.token);
          this._AuthService.decodedToken();
          this.isLoading = false;
          this._Render2.removeAttribute(btnUpdate, "disabled");
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this._Render2.removeAttribute(btnUpdate, "disabled");
        }
      });
    }
    updateForm.reset();
  }
  static \u0275fac = function UpdatePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdatePasswordComponent)(i0.\u0275\u0275directiveInject(i0.Renderer2), i0.\u0275\u0275directiveInject(i1.Router), i0.\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _UpdatePasswordComponent, selectors: [["app-update-password"]], decls: 23, vars: 4, consts: [["btnUpdate", ""], [1, "text-center"], [1, "mx-auto", "width", "rounded", "shadow", "p-4", "my-4", "bg-main-light"], [1, "my-3", "text-center", "text-main", "h3"], [3, "ngSubmit", "formGroup"], [1, "form-item", "mt-2"], ["for", "currentPassword"], ["formControlName", "currentPassword", "type", "text", "id", "currentPassword", "placeholder", "Write Current Password.... ", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "id", "password", "placeholder", "Write New Password... ", 1, "form-control"], ["for", "rePassword"], ["formControlName", "rePassword", "type", "password", "id", "rePassword", "placeholder", "Write Confirm Password... ", 1, "form-control"], ["type", "submit", 1, "main-btn", "mt-2", 3, "disabled"], [4, "ngIf"], [1, "fas", "fa-spin", "fa-spinner"]], template: function UpdatePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i0.\u0275\u0275getCurrentView();
      i0.\u0275\u0275elementStart(0, "section")(1, "h2", 1);
      i0.\u0275\u0275text(2);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(3, "section", 2)(4, "h2", 3);
      i0.\u0275\u0275text(5, "Update Password!");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(6, "form", 4);
      i0.\u0275\u0275listener("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_6_listener() {
        i0.\u0275\u0275restoreView(_r1);
        const btnUpdate_r2 = i0.\u0275\u0275reference(20);
        return i0.\u0275\u0275resetView(ctx.handelUpdate(ctx.updateForm, btnUpdate_r2));
      });
      i0.\u0275\u0275elementStart(7, "div", 5)(8, "label", 6);
      i0.\u0275\u0275text(9, "Current Password:");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(10, "input", 7);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(11, "div", 5)(12, "label", 8);
      i0.\u0275\u0275text(13, "New Password:");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(14, "input", 9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(15, "div", 5)(16, "label", 10);
      i0.\u0275\u0275text(17, "Confirm Password:");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(18, "input", 11);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(19, "button", 12, 0);
      i0.\u0275\u0275text(21, " Update ");
      i0.\u0275\u0275template(22, UpdatePasswordComponent_span_22_Template, 2, 0, "span", 13);
      i0.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275textInterpolate1("Hello ", ctx.name);
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("formGroup", ctx.updateForm);
      i0.\u0275\u0275advance(13);
      i0.\u0275\u0275property("disabled", ctx.updateForm.invalid);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i4.\u0275NgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName], styles: ["\n\n@media only screen and (max-width: 575px) {\n  .width[_ngcontent-%COMP%], \n   .container[_ngcontent-%COMP%], \n   .container-md[_ngcontent-%COMP%], \n   .container-sm[_ngcontent-%COMP%] {\n    max-width: 300px !important;\n  }\n}\n@media only screen and (min-width: 576px) and (max-width: 1400px) {\n  .width[_ngcontent-%COMP%], \n   .container[_ngcontent-%COMP%], \n   .container-md[_ngcontent-%COMP%], \n   .container-sm[_ngcontent-%COMP%] {\n    max-width: 400px !important;\n  }\n}\n/*# sourceMappingURL=update-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(UpdatePasswordComponent, { className: "UpdatePasswordComponent", filePath: "projects/auth/src/app/components/update-password/update-password.component.ts", lineNumber: 14 });
})();
export {
  UpdatePasswordComponent
};
//# sourceMappingURL=update-password.component-JGVEKARQ.js.map
