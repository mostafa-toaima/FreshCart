import{Mc as p,_ as c,da as a}from"./chunk-AVFOVZ2H.js";var n=class extends Error{};n.prototype.name="InvalidTokenError";function l(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let e=o.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function h(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return l(t)}catch{return atob(t)}}function d(r,t){if(typeof r!="string")throw new n("Invalid token specified: must be a string");t||(t={});let o=t.header===!0?0:1,e=r.split(".")[o];if(typeof e!="string")throw new n(`Invalid token specified: missing part #${o+1}`);let i;try{i=h(e)}catch(s){throw new n(`Invalid token specified: invalid base64 for part #${o+1} (${s.message})`)}try{return JSON.parse(i)}catch(s){throw new n(`Invalid token specified: invalid json for part #${o+1} (${s.message})`)}}var w=(()=>{let t=class t{constructor(e){this.http=e}SignUp(e){return this.http.post("https://ecommerce.routemisr.com/api/v1/auth/signup",e)}Login(e){return this.http.post("https://ecommerce.routemisr.com/api/v1/auth/signin",e)}decodedToken(){if(localStorage.getItem("token")!==null){let e=localStorage.getItem("token");if(e!==null){let i=d(e);this.userInfo=i,console.log(this.userInfo)}}}updatePassword(e){return this.http.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",e)}};t.\u0275fac=function(i){return new(i||t)(a(p))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{w as a};