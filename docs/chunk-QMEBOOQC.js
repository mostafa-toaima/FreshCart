import{a as $}from"./chunk-VMJZIDPE.js";import{a as B}from"./chunk-GH4GP4SJ.js";import{a as U}from"./chunk-N3M6Y7YM.js";import"./chunk-WXI33M2S.js";import{h as L}from"./chunk-LRRIKLGP.js";import{$a as T,Ac as F,Eb as u,Fb as s,Fc as O,Gb as h,Gc as j,Hb as R,Nb as k,Pb as V,Qa as E,Ub as I,Va as d,Wa as C,Wb as S,Xb as A,ia as y,jb as x,lb as p,pb as o,qb as c,ra as f,rb as g,sa as b,ub as w,wb as v,xb as _,zc as P}from"./chunk-AVFOVZ2H.js";var M=r=>["/payment",r];function N(r,a){r&1&&g(0,"i",22)}function D(r,a){r&1&&g(0,"i",23)}function G(r,a){if(r&1){let i=w();o(0,"div",12)(1,"div",13),g(2,"img",14),c(),o(3,"div",15)(4,"div")(5,"h3",16),s(6),I(7,"cutText"),c(),o(8,"p",17),s(9),I(10,"currency"),c(),o(11,"button",18,1),v("click",function(){let t=f(i).$implicit,n=u(12),l=_(2);return b(l.removeItem(t.product._id,n))}),x(13,N,1,0,"i",19)(14,D,1,0,"i",20),s(15," Remove "),c()(),o(16,"div")(17,"button",21,2),v("click",function(){let t=f(i).$implicit,n=u(18),l=u(23),m=_(2);return b(m.updateItem(t.product._id,t.count-1,n,l))}),s(19," - "),c(),o(20,"span"),s(21),c(),o(22,"button",21,3),v("click",function(){let t=f(i).$implicit,n=u(18),l=u(23),m=_(2);return b(m.updateItem(t.product._id,t.count+1,n,l))}),s(24," + "),c()()()()}if(r&2){let i=a.$implicit,e=u(12);d(2),p("src",i==null||i.product==null?null:i.product.imageCover,E)("alt",i==null||i.product==null?null:i.product.title),d(4),h(S(7,7,i==null||i.product==null?null:i.product.title,2)),d(3),R(" Price : ",S(10,10,i.price,"EGP ")," "),d(4),p("ngIf",!e.disabled),d(),p("ngIf",e.disabled),d(7),h(i.count)}}function z(r,a){if(r&1){let i=w();o(0,"section",5)(1,"div",6)(2,"h1",7),s(3,"Shop Cart"),c(),o(4,"button",8),v("click",function(){f(i);let t=_();return b(t.clearCart())}),s(5,"Clear Cart"),c()(),o(6,"p"),s(7," Total Price : "),o(8,"span",9),s(9),I(10,"currency"),c()(),x(11,G,25,13,"div",10),o(12,"button",11),s(13,"Online Payment"),c()()}if(r&2){let i=_();d(9),h(S(10,3,i.cartItems.totalCartPrice,"EGP ")),d(2),p("ngForOf",i.cartItems.products),d(),p("routerLink",V(6,M,i.cartItems._id))}}function Y(r,a){r&1&&(o(0,"h2",24),s(1,"Your Cart Is Empty..."),c())}var Z=(()=>{let a=class a{constructor(e,t,n){this._CartService=e,this._Render2=t,this._TostarService=n,this.cartItems=null}ngOnInit(){this.getLoggedUserCart()}getLoggedUserCart(){this._CartService.getUserCart().subscribe({next:e=>{this.cartItems=e.data,console.log(e)},error:e=>{console.log()}})}updateItem(e,t,n,l){t>=1?(this._Render2.setAttribute(n,"disabled","true"),this._Render2.setAttribute(l,"disabled","true"),this._CartService.updateProductCount(e,t).subscribe({next:m=>{console.log(m),this.cartItems=m.data,this._Render2.removeAttribute(n,"disabled"),this._Render2.removeAttribute(l,"disabled")},error:m=>{console.log(m),this._Render2.removeAttribute(n,"disabled"),this._Render2.removeAttribute(l,"disabled")}})):this._CartService.removeSpecificItem(e).subscribe(m=>{this.cartItems=m.data,this._TostarService.info("Item removed"),this._CartService.cartNumber.next(m.numOfCartItems)})}removeItem(e,t){this._Render2.setAttribute(t,"disabled","true"),this._CartService.removeSpecificItem(e).subscribe({next:n=>{console.log(n),this.cartItems=n.data,this._Render2.removeAttribute(t,"disabled"),this._CartService.cartNumber.next(n.numOfCartItems)},error:n=>{console.log(n),this._Render2.removeAttribute(t,"disabled")}})}clearCart(){this._CartService.deleteCrt().subscribe({next:e=>{console.log(e),e.message=="success"&&(this.cartItems=null,this._TostarService.success("Cart is cleared successfully","Success"))},error:e=>{console.log(e)}})}};a.\u0275fac=function(t){return new(t||a)(C(U),C(T),C(B))},a.\u0275cmp=y({type:a,selectors:[["app-cart"]],standalone:!0,features:[k],decls:3,vars:2,consts:[["msg",""],["btnRemove",""],["btn1",""],["btn2",""],["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-3",3,"routerLink"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["class","fas fa-trash-can",4,"ngIf"],["class","fas fa-spin fa-spinner",4,"ngIf"],[1,"btn","btn-sm","border-success","mx-2",3,"click"],[1,"fas","fa-trash-can"],[1,"fas","fa-spin","fa-spinner"],[1,"text-center"]],template:function(t,n){if(t&1&&x(0,z,14,8,"section",4)(1,Y,2,0,"ng-template",null,0,A),t&2){let l=u(2);p("ngIf",n.cartItems&&n.cartItems.products.length>0)("ngIfElse",l)}},dependencies:[j,P,F,O,$,L]});let r=a;return r})();export{Z as CartComponent};