// dist/common/fesm2022/common.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";
var Common = class _Common {
  static \u0275fac = function Common_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Common)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
    type: _Common,
    selectors: [["common-common"]],
    decls: 2,
    vars: 0,
    template: function Common_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275domElementStart(0, "p");
        i0.\u0275\u0275text(1, " common works! ");
        i0.\u0275\u0275domElementEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Common, [{
    type: Component,
    args: [{
      selector: "common-common",
      imports: [],
      template: `
    <p>
      common works!
    </p>
  `
    }]
  }], null, null);
})();
export {
  Common
};
//# sourceMappingURL=common.js.map
