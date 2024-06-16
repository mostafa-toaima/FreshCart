import{a as D}from"./chunk-R2M3W24S.js";import{a as M,c as N,d as A,e as E,f as c,h as I,i as F,j as O,m as R}from"./chunk-WEXOQBYC.js";import{g as y}from"./chunk-LRRIKLGP.js";import{$a as w,Ac as b,Eb as P,Fb as a,Gc as x,Hb as C,Nb as S,Va as d,Wa as l,ia as u,jb as g,lb as p,pb as i,qb as t,ra as h,rb as m,sa as f,ub as v,wb as _}from"./chunk-AVFOVZ2H.js";function L(s,r){s&1&&(i(0,"span"),m(1,"i",14),t())}var B=(()=>{let r=class r{constructor(o,n,e){this._Render2=o,this._Router=n,this._AuthService=e,this.isLoading=!1,this.name="",this.userData={},this.updateForm=new E({currentPassword:new c(""),password:new c(""),rePassword:new c("")})}ngOnInit(){this._AuthService.decodedToken(),this.userData=this._AuthService.userInfo,this.name=this.userData?.name,console.log(this.userData)}handelUpdate(o,n){this._Render2.setAttribute(n,"disabled","true"),this.isLoading=!0,o.valid&&this._AuthService.updatePassword(o.value).subscribe({next:e=>{console.log(e),this._Router.navigate(["/home"]),localStorage.setItem("token",e.token),this._AuthService.decodedToken(),this.isLoading=!1,this._Render2.removeAttribute(n,"disabled")},error:e=>{console.log(e),this.isLoading=!1,this._Render2.removeAttribute(n,"disabled")}}),o.reset()}};r.\u0275fac=function(n){return new(n||r)(l(w),l(y),l(D))},r.\u0275cmp=u({type:r,selectors:[["app-update-password"]],standalone:!0,features:[S],decls:23,vars:4,consts:[["btnUpdate",""],[1,"text-center"],[1,"mx-auto","width","rounded","shadow","p-4","my-4","bg-main-light"],[1,"my-3","text-center","text-main","h3"],[3,"ngSubmit","formGroup"],[1,"form-item","mt-2"],["for","currentPassword"],["formControlName","currentPassword","type","text","id","currentPassword","placeholder","Write Current Password.... ",1,"form-control"],["for","password"],["formControlName","password","type","password","id","password","placeholder","Write New Password... ",1,"form-control"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword","placeholder","Write Confirm Password... ",1,"form-control"],["type","submit",1,"main-btn","mt-2",3,"disabled"],[4,"ngIf"],[1,"fas","fa-spin","fa-spinner"]],template:function(n,e){if(n&1){let U=v();i(0,"section")(1,"h2",1),a(2),t()(),i(3,"section",2)(4,"h2",3),a(5,"Update Password!"),t(),i(6,"form",4),_("ngSubmit",function(){h(U);let G=P(20);return f(e.handelUpdate(e.updateForm,G))}),i(7,"div",5)(8,"label",6),a(9,"Current Password:"),t(),m(10,"input",7),t(),i(11,"div",5)(12,"label",8),a(13,"New Password:"),t(),m(14,"input",9),t(),i(15,"div",5)(16,"label",10),a(17,"Confirm Password:"),t(),m(18,"input",11),t(),i(19,"button",12,0),a(21," Update "),g(22,L,2,0,"span",13),t()()()}n&2&&(d(2),C("Hello ",e.name,""),d(4),p("formGroup",e.updateForm),d(13),p("disabled",e.updateForm.invalid),d(3),p("ngIf",e.isLoading))},dependencies:[x,b,R,I,M,N,A,F,O],styles:["@media only screen and (max-width: 575px){.width[_ngcontent-%COMP%], .container[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%]{max-width:300px!important}}@media only screen and (min-width: 576px) and (max-width: 1400px){.width[_ngcontent-%COMP%], .container[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%]{max-width:400px!important}}"]});let s=r;return s})();export{B as UpdatePasswordComponent};