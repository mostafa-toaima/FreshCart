import "./chunk-VUJOFXKG.js";

// projects/auth/src/app/auth.component.ts
import { Component, signal } from "@angular/core";
import * as i0 from "@angular/core";
var AuthComponent = class _AuthComponent {
  title = signal("auth", ...ngDevMode ? [{ debugName: "title" }] : []);
  static \u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["javazone-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275domElementStart(0, "p");
      i0.\u0275\u0275text(1, "javazone-auth");
      i0.\u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "projects/auth/src/app/auth.component.ts", lineNumber: 8 });
})();
export {
  AuthComponent
};
//# sourceMappingURL=Component.js.map
