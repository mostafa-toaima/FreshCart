import{a as L,b as z,c as D}from"./chunk-ZGVJUQJM.js";import{Fb as C,Gb as P,Gc as F,Mc as I,Nb as _,Qa as u,Rb as B,Ub as S,Va as o,Wa as h,Wb as x,_ as d,da as m,ia as g,jb as f,lb as l,pb as s,qb as c,rb as v,wb as b,zc as y}from"./chunk-AVFOVZ2H.js";var j=(()=>{let e=class e{constructor(n){this._HttpClient=n,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getAllBrands(n=1){return this._HttpClient.get(this.baseUrl+`brands?page=${n}`)}};e.\u0275fac=function(t){return new(t||e)(m(I))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var O=(i,e,a)=>({id:"brandsPaginate",itemsPerPage:i,currentPage:e,totalItems:a});function T(i,e){if(i&1&&(s(0,"div",5)(1,"div",6),v(2,"img",7),s(3,"h3",8),C(4),c()()()),i&2){let a=e.$implicit;o(2),l("src",a==null?null:a.image,u)("alt",a==null?null:a.name),o(2),P(a==null?null:a.name)}}var A=(()=>{let e=class e{constructor(n){this._BrandsService=n,this.brandsData=[],this.currentPage=1,this.pageSize=0,this.total=0}ngOnInit(){this.getBrands(this.currentPage)}getBrands(n){this._BrandsService.getAllBrands(n).subscribe({next:t=>{console.log(t),this.brandsData=t.data,this.currentPage=t.metadata.currentPage,this.pageSize=t.metadata.limit,this.total=t.results,console.log("brandsData ",t)},error:t=>{console.log(t)}})}pageChanged(n){this.currentPage=n,this.getBrands(n)}};e.\u0275fac=function(t){return new(t||e)(h(j))},e.\u0275cmp=g({type:e,selectors:[["app-brands"]],standalone:!0,features:[_],decls:6,vars:12,consts:[[1,"my-4"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"pt-4","text-main","text-center"],["id","brandsPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"pageChange","pageBoundsCorrection","maxSize","directionLinks","autoHide","responsive"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"border","border-success","rounded","p-2","shadow"],["height","270px",1,"w-100",3,"src","alt"],[1,"text-center","text-main"]],template:function(t,r){t&1&&(s(0,"section",0)(1,"div",1),f(2,T,5,3,"div",2),S(3,"paginate"),c(),s(4,"div",3)(5,"pagination-controls",4),b("pageChange",function(p){return r.pageChanged(p)})("pageBoundsCorrection",function(p){return r.pageChanged(p)}),c()()()),t&2&&(o(2),l("ngForOf",x(3,5,r.brandsData,B(8,O,r.pageSize,r.currentPage,r.total))),o(3),l("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[F,y,D,L,z]});let i=e;return i})();export{A as BrandsComponent};