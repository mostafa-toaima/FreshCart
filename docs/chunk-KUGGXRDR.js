import{a as N,b as V,c as B}from"./chunk-MAAXALLB.js";import{a as G}from"./chunk-GKVWQC26.js";import{a as z}from"./chunk-GH4GP4SJ.js";import{a as M}from"./chunk-N3M6Y7YM.js";import"./chunk-WXI33M2S.js";import{e as F,h as L}from"./chunk-LRRIKLGP.js";import{$a as S,Ac as j,Eb as g,Fb as l,Fc as O,Gb as p,Gc as k,Hb as w,Nb as P,Qa as b,Ub as A,Va as o,Wa as d,Wb as E,ia as _,jb as m,lb as u,pb as a,qb as s,ra as h,rb as f,sa as D,sb as C,tb as I,ub as y,wb as x,xb as T,zc as R}from"./chunk-AVFOVZ2H.js";function q(i,n){if(i&1&&f(0,"img",18),i&2){let U=T().$implicit;u("src",U,b)}}function H(i,n){i&1&&(C(0),m(1,q,1,1,"ng-template",17),I())}function J(i,n){i&1&&f(0,"i",19)}var ne=(()=>{let n=class n{constructor(t,r,e,c,v){this._ActivatedRoute=t,this._ProductsService=r,this._CartService=e,this._TostarService=c,this._Render2=v,this.productDetails=[],this.isLoading=!1,this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:1e3,items:1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.productId=t.get("id"),this.productId&&this.getProductDetails()},error:t=>{console.error(t)}})}getProductDetails(){this._ProductsService.GetSpecificProduct(this.productId).subscribe({next:t=>{this.productDetails=t.data},error:t=>{console.log(t)}})}addToCart(t,r){this._Render2.setAttribute(r,"disabled","true"),this.isLoading=!0,this._CartService.addToCart(t).subscribe({next:e=>{console.log(e),this.isLoading=!1,this._TostarService.success(e.message),this._Render2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(e.numOfCartItems)},error:e=>{console.log(e),this._TostarService.error(e.message),this.isLoading=!1,this._Render2.removeAttribute(r,"disabled")}})}};n.\u0275fac=function(r){return new(r||n)(d(F),d(G),d(M),d(z),d(S))},n.\u0275cmp=_({type:n,selectors:[["app-product-details"]],standalone:!0,features:[P],decls:27,vars:11,consts:[["btnAdd",""],[1,"w-75","mx-auto","rounded","shadow","p-3","mb-4"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted","small"],[1,"d-flex","align-items-center","justify-content-between","my-3"],[1,"small","text-muted"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"d-flex","justify-content-between"],[1,"btn","w-75","mx-auto","main-btn",3,"click"],["class","fas fa-spin fa-spinner",4,"ngIf"],["routerLink","/home",1,"btn","btn-danger","w-25","mx-auto","ms-2"],["carouselSlide",""],[1,"w-100",3,"src"],[1,"fas","fa-spin","fa-spinner"]],template:function(r,e){if(r&1){let c=y();a(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),m(4,H,2,0,"ng-container",5),s()(),a(5,"div",6)(6,"div")(7,"h2",7),l(8),s(),a(9,"p",8),l(10),s(),a(11,"span"),l(12),s(),a(13,"div",9)(14,"span",10),l(15),A(16,"currency"),s(),a(17,"p",11),f(18,"i",12),l(19),s()(),a(20,"div",13)(21,"button",14,0),x("click",function(){h(c);let $=g(22);return D(e.addToCart(e.productDetails._id,$))}),l(23,"+ Add To Cart "),m(24,J,1,0,"i",15),s(),a(25,"button",16),l(26,"Back"),s()()()()()()}if(r&2){let c=g(22);o(3),u("options",e.productDetailsOptions),o(),u("ngForOf",e.productDetails==null?null:e.productDetails.images),o(4),p(e.productDetails==null?null:e.productDetails.title),o(2),p(e.productDetails==null?null:e.productDetails.description),o(2),p(e.productDetails.category==null?null:e.productDetails.category.name),o(3),p(E(16,8,e.productDetails==null?null:e.productDetails.price,"EGP")),o(4),w("",e.productDetails==null?null:e.productDetails.ratingsAverage," "),o(5),u("ngIf",c.disabled)}},dependencies:[k,R,j,O,B,V,N,L]});let i=n;return i})();export{ne as ProductDetailsComponent};