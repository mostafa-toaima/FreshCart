// projects/auth/src/app/services/auth.service.ts
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var AuthService = class _AuthService {
  http;
  userInfo;
  javazonBaseUrl = "http://localhost:8082/javazon/user";
  constructor(http) {
    this.http = http;
  }
  SignUp(userData) {
    return this.http.post(this.javazonBaseUrl + "/register", userData);
  }
  Login(userData) {
    return this.http.post(this.javazonBaseUrl + "/login", userData);
  }
  decodedToken() {
    if (localStorage.getItem("token") !== null) {
      const encode = localStorage.getItem("token");
      if (encode !== null) {
        const decode = jwtDecode(encode);
        this.userInfo = decode;
      }
    }
  }
  updatePassword(updateData) {
    return this.http.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword", updateData);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(i0.\u0275\u0275inject(i1.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-NNWUHOE4.js.map
