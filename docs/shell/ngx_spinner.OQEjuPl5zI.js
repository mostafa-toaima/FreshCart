import { a as h, b as m } from "@nf-internal/chunk-JKOY2XUY";
import * as e from "@angular/core";
import { InjectionToken as y, makeEnvironmentProviders as C } from "@angular/core";
import { BehaviorSubject as w, Subject as x } from "rxjs";
import { filter as I, takeUntil as O } from "rxjs/operators";
import { trigger as S, state as _, style as c, transition as b, animate as g } from "@angular/animations";
import * as v from "@angular/platform-browser";
import { NgIf as D, NgFor as z, CommonModule as N } from "@angular/common";
var j = ["overlay"], M = ["*"];
function P(s, t) { s & 1 && e.ɵɵelement(0, "div"); }
function k(s, t) { if (s & 1 && (e.ɵɵelementStart(0, "div"), e.ɵɵtemplate(1, P, 1, 0, "div", 6), e.ɵɵelementEnd()), s & 2) {
    let a = e.ɵɵnextContext(2);
    e.ɵɵclassMap(a.spinner.class), e.ɵɵstyleProp("color", a.spinner.color), e.ɵɵadvance(), e.ɵɵproperty("ngForOf", a.spinner.divArray);
} }
function R(s, t) { if (s & 1 && (e.ɵɵelement(0, "div", 7), e.ɵɵpipe(1, "safeHtml")), s & 2) {
    let a = e.ɵɵnextContext(2);
    e.ɵɵproperty("innerHTML", e.ɵɵpipeBind1(1, 1, a.template), e.ɵɵsanitizeHtml);
} }
function E(s, t) { if (s & 1 && (e.ɵɵelementStart(0, "div", 2, 0), e.ɵɵtemplate(2, k, 2, 5, "div", 3)(3, R, 2, 3, "div", 4), e.ɵɵelementStart(4, "div", 5), e.ɵɵprojection(5), e.ɵɵelementEnd()()), s & 2) {
    let a = e.ɵɵnextContext();
    e.ɵɵstyleProp("background-color", a.spinner.bdColor)("z-index", a.spinner.zIndex)("position", a.spinner.fullScreen ? "fixed" : "absolute"), e.ɵɵproperty("@.disabled", a.disableAnimation)("@fadeIn", "in"), e.ɵɵadvance(2), e.ɵɵproperty("ngIf", !a.template), e.ɵɵadvance(), e.ɵɵproperty("ngIf", a.template), e.ɵɵadvance(), e.ɵɵstyleProp("z-index", a.spinner.zIndex);
} }
var A = { "ball-8bits": 16, "ball-atom": 4, "ball-beat": 3, "ball-circus": 5, "ball-climbing-dot": 4, "ball-clip-rotate": 1, "ball-clip-rotate-multiple": 2, "ball-clip-rotate-pulse": 2, "ball-elastic-dots": 5, "ball-fall": 3, "ball-fussion": 4, "ball-grid-beat": 9, "ball-grid-pulse": 9, "ball-newton-cradle": 4, "ball-pulse": 3, "ball-pulse-rise": 5, "ball-pulse-sync": 3, "ball-rotate": 1, "ball-running-dots": 5, "ball-scale": 1, "ball-scale-multiple": 3, "ball-scale-pulse": 2, "ball-scale-ripple": 1, "ball-scale-ripple-multiple": 3, "ball-spin": 8, "ball-spin-clockwise": 8, "ball-spin-clockwise-fade": 8, "ball-spin-clockwise-fade-rotating": 8, "ball-spin-fade": 8, "ball-spin-fade-rotating": 8, "ball-spin-rotate": 2, "ball-square-clockwise-spin": 8, "ball-square-spin": 8, "ball-triangle-path": 3, "ball-zig-zag": 2, "ball-zig-zag-deflect": 2, cog: 1, "cube-transition": 2, fire: 3, "line-scale": 5, "line-scale-party": 5, "line-scale-pulse-out": 5, "line-scale-pulse-out-rapid": 5, "line-spin-clockwise-fade": 8, "line-spin-clockwise-fade-rotating": 8, "line-spin-fade": 8, "line-spin-fade-rotating": 8, pacman: 6, "square-jelly-box": 2, "square-loader": 1, "square-spin": 1, timer: 1, "triangle-skew-spin": 1 }, d = { BD_COLOR: "rgba(51,51,51,0.8)", SPINNER_COLOR: "#fff", Z_INDEX: 99999 }, u = "primary", l = class s {
    constructor(t) { Object.assign(this, t); }
    static create(t) {
        return !t?.template && !t?.type && console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`), new s(t);
    }
}, F = (() => { let t = class t {
    constructor() { this.spinnerObservable = new w(null); }
    getSpinner(i) { return this.spinnerObservable.asObservable().pipe(I(n => n && n.name === i)); }
    show(i = u, n) { return new Promise((r, o) => { setTimeout(() => { n && Object.keys(n).length ? (n.name = i, this.spinnerObservable.next(new l(m(h({}, n), { show: !0 }))), r(!0)) : (this.spinnerObservable.next(new l({ name: i, show: !0 })), r(!0)); }, 10); }); }
    hide(i = u, n = 10) { return new Promise((r, o) => { setTimeout(() => { this.spinnerObservable.next(new l({ name: i, show: !1 })), r(!0); }, n); }); }
}; t.ɵfac = function (n) { return new (n || t); }, t.ɵprov = e.ɵɵdefineInjectable({ token: t, factory: t.ɵfac, providedIn: "root" }); let s = t; return s; })(), f = new y("NGX_SPINNER_CONFIG"), T = (() => { let t = class t {
    constructor(i) { this._sanitizer = i; }
    transform(i) { if (i)
        return this._sanitizer.bypassSecurityTrustHtml(i); }
}; t.ɵfac = function (n) { return new (n || t)(e.ɵɵdirectiveInject(v.DomSanitizer, 16)); }, t.ɵpipe = e.ɵɵdefinePipe({ name: "safeHtml", type: t, pure: !0 }); let s = t; return s; })(), $ = (() => { let t = class t {
    constructor(i, n, r, o) { this.spinnerService = i, this.changeDetector = n, this.elementRef = r, this.globalConfig = o, this.disableAnimation = !1, this.spinner = new l, this.ngUnsubscribe = new x, this.setDefaultOptions = () => { let { type: p } = this.globalConfig ?? {}; this.spinner = l.create({ name: this.name, bdColor: this.bdColor, size: this.size, color: this.color, type: this.type ?? p, fullScreen: this.fullScreen, divArray: this.divArray, divCount: this.divCount, show: this.show, zIndex: this.zIndex, template: this.template, showSpinner: this.showSpinner }); }, this.bdColor = d.BD_COLOR, this.zIndex = d.Z_INDEX, this.color = d.SPINNER_COLOR, this.size = "large", this.fullScreen = !0, this.name = u, this.template = null, this.showSpinner = !1, this.divArray = [], this.divCount = 0, this.show = !1; }
    initObservable() { this.spinnerService.getSpinner(this.name).pipe(O(this.ngUnsubscribe)).subscribe(i => { this.setDefaultOptions(), Object.assign(this.spinner, i), i.show && this.onInputChange(), this.changeDetector.detectChanges(); }); }
    ngOnInit() { this.setDefaultOptions(), this.initObservable(); }
    isSpinnerZone(i) { return i === this.elementRef.nativeElement.parentElement ? !0 : i.parentNode && this.isSpinnerZone(i.parentNode); }
    ngOnChanges(i) { for (let n in i)
        if (n) {
            let r = i[n];
            if (r.isFirstChange())
                return;
            typeof r.currentValue < "u" && r.currentValue !== r.previousValue && r.currentValue !== "" && (this.spinner[n] = r.currentValue, n === "showSpinner" && (r.currentValue ? this.spinnerService.show(this.spinner.name, this.spinner) : this.spinnerService.hide(this.spinner.name)), n === "name" && this.initObservable());
        } }
    getClass(i, n) { this.spinner.divCount = A[i], this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((o, p) => p); let r = ""; switch (n.toLowerCase()) {
        case "small":
            r = "la-sm";
            break;
        case "medium":
            r = "la-2x";
            break;
        case "large":
            r = "la-3x";
            break;
        default: break;
    } return "la-" + i + " " + r; }
    onInputChange() { this.spinner.class = this.getClass(this.spinner.type, this.spinner.size); }
    ngOnDestroy() { this.ngUnsubscribe.next(), this.ngUnsubscribe.complete(); }
}; t.ɵfac = function (n) { return new (n || t)(e.ɵɵdirectiveInject(F), e.ɵɵdirectiveInject(e.ChangeDetectorRef), e.ɵɵdirectiveInject(e.ElementRef), e.ɵɵdirectiveInject(f, 8)); }, t.ɵcmp = e.ɵɵdefineComponent({ type: t, selectors: [["ngx-spinner"]], viewQuery: function (n, r) { if (n & 1 && e.ɵɵviewQuery(j, 5), n & 2) {
        let o;
        e.ɵɵqueryRefresh(o = e.ɵɵloadQuery()) && (r.spinnerDOM = o.first);
    } }, inputs: { bdColor: "bdColor", size: "size", color: "color", type: "type", fullScreen: "fullScreen", name: "name", zIndex: "zIndex", template: "template", showSpinner: "showSpinner", disableAnimation: "disableAnimation" }, features: [e.ɵɵNgOnChangesFeature], ngContentSelectors: M, decls: 1, vars: 1, consts: [["overlay", ""], ["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function (n, r) { n & 1 && (e.ɵɵprojectionDef(), e.ɵɵtemplate(0, E, 6, 12, "div", 1)), n & 2 && e.ɵɵproperty("ngIf", r.spinner.show); }, dependencies: [T, D, z], styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"], data: { animation: [S("fadeIn", [_("in", c({ opacity: 1 })), b(":enter", [c({ opacity: 0 }), g(300)]), b(":leave", g(200, c({ opacity: 0 })))])] }, changeDetection: 0 }); let s = t; return s; })(), ee = (() => { let t = class t {
    static forRoot(i) { return { ngModule: t, providers: [{ provide: f, useValue: i }] }; }
}; t.ɵfac = function (n) { return new (n || t); }, t.ɵmod = e.ɵɵdefineNgModule({ type: t }), t.ɵinj = e.ɵɵdefineInjector({ imports: [N] }); let s = t; return s; })(), te = s => C([{ provide: f, useValue: s }]);
export { d as DEFAULTS, A as LOADERS, l as NgxSpinner, $ as NgxSpinnerComponent, ee as NgxSpinnerModule, F as NgxSpinnerService, u as PRIMARY_SPINNER, te as provideSpinnerConfig };
