import{a as I}from"./chunk-GKVWQC26.js";import{e as D}from"./chunk-LRRIKLGP.js";import{Ac as y,Fb as f,Gb as h,Gc as x,Nb as v,Qa as l,Va as n,Wa as r,ia as m,jb as p,lb as s,pb as c,qb as d,rb as g,xb as u}from"./chunk-AVFOVZ2H.js";function C(i,e){if(i&1&&(c(0,"section",1)(1,"div",2)(2,"div",3),g(3,"img",4),d(),c(4,"div",3)(5,"h2"),f(6),d()()()()),i&2){let o=u();n(3),s("src",o.categoryDetails.image,l)("alt",o.categoryDetails.name),n(3),h(o.categoryDetails.name)}}var P=(()=>{let e=class e{constructor(t,a){this._ActivatedRoute=t,this._ProductsService=a,this.catId="",this.categoryDetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.catId=t.get("id")}}),this.getData()}getData(){this._ProductsService.GetCategoryDetails(this.catId).subscribe({next:t=>{console.log(t),this.categoryDetails=t.data},error:t=>{console.log(t)}})}};e.\u0275fac=function(a){return new(a||e)(r(D),r(I))},e.\u0275cmp=m({type:e,selectors:[["app-categoreydetails"]],standalone:!0,features:[v],decls:1,vars:1,consts:[["class","w-75 mx-auto p-3 bg-main-light my-2 rounded shadow",4,"ngIf"],[1,"w-75","mx-auto","p-3","bg-main-light","my-2","rounded","shadow"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"]],template:function(a,w){a&1&&p(0,C,7,3,"section",0),a&2&&s("ngIf",w.categoryDetails._id)},dependencies:[x,y]});let i=e;return i})();export{P as CategoreydetailsComponent};
