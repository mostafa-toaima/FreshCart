import {
  __spreadValues
} from "./chunk-VUJOFXKG.js";

// projects/auth/src/app/auth.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  __spreadValues({
    path: "login",
    loadComponent: () => import("./login.component-7N64YQMH.js").then((c) => c.LoginComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/components/login/login.component.ts" } : {}),
  __spreadValues({
    path: "register",
    loadComponent: () => import("./register.component-2QUNNYDM.js").then((c) => c.RegisterComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/components/register/register.component.ts" } : {}),
  __spreadValues({
    path: "updatepassword",
    loadComponent: () => import("./update-password.component-JGVEKARQ.js").then((m) => m.UpdatePasswordComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/components/update-password/update-password.component.ts" } : {}),
  __spreadValues({
    path: "forgotpassword",
    loadComponent: () => import("./forgotpassword.component-ZI46R2DN.js").then((m) => m.ForgotpasswordComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/components/forgotpassword/forgotpassword.component.ts" } : {})
];
export {
  routes
};
//# sourceMappingURL=routes.js.map
