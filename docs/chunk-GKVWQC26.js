import{Mc as o,_ as i,da as s}from"./chunk-AVFOVZ2H.js";var h=(()=>{let e=class e{constructor(t){this.http=t,this.baseUrl="https://ecommerce.routemisr.com"}GetAllProducts(t=1){return this.http.get(this.baseUrl+`/api/v1/products?page=${t}`)}GetSpecificProduct(t){return this.http.get(this.baseUrl+`/api/v1/products/${t}`)}GetCategories(){return this.http.get(this.baseUrl+"/api/v1/categories")}GetCategoryDetails(t){return this.http.get(this.baseUrl+`/api/v1/categories/${t}`)}};e.\u0275fac=function(a){return new(a||e)(s(o))},e.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{h as a};
