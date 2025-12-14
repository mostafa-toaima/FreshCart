import "@nf-internal/chunk-JKOY2XUY";
import * as e from "@angular/core";
import { EventEmitter as m } from "@angular/core";
import * as d from "@angular/common";
import { CommonModule as I } from "@angular/common";
function L(i, a) { if (i & 1) {
    let t = e.ɵɵgetCurrentView();
    e.ɵɵelementStart(0, "a", 12), e.ɵɵlistener("keyup.enter", function () { e.ɵɵrestoreView(t), e.ɵɵnextContext(3); let r = e.ɵɵreference(1); return e.ɵɵresetView(r.previous()); })("click", function () { e.ɵɵrestoreView(t), e.ɵɵnextContext(3); let r = e.ɵɵreference(1); return e.ɵɵresetView(r.previous()); }), e.ɵɵtext(1), e.ɵɵelementStart(2, "span", 13), e.ɵɵtext(3), e.ɵɵelementEnd()();
} if (i & 2) {
    let t = e.ɵɵnextContext(3);
    e.ɵɵadvance(), e.ɵɵtextInterpolate1(" ", t.previousLabel, " "), e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.screenReaderPageLabel);
} }
function y(i, a) { if (i & 1 && (e.ɵɵelementStart(0, "span", 14), e.ɵɵtext(1), e.ɵɵelementStart(2, "span", 13), e.ɵɵtext(3), e.ɵɵelementEnd()()), i & 2) {
    let t = e.ɵɵnextContext(3);
    e.ɵɵadvance(), e.ɵɵtextInterpolate1(" ", t.previousLabel, " "), e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.screenReaderPageLabel);
} }
function k(i, a) { if (i & 1 && (e.ɵɵelementStart(0, "li", 9), e.ɵɵtemplate(1, L, 4, 2, "a", 10)(2, y, 4, 2, "span", 11), e.ɵɵelementEnd()), i & 2) {
    e.ɵɵnextContext(2);
    let t = e.ɵɵreference(1);
    e.ɵɵclassProp("disabled", t.isFirstPage()), e.ɵɵadvance(), e.ɵɵproperty("ngIf", 1 < t.getCurrent()), e.ɵɵadvance(), e.ɵɵproperty("ngIf", t.isFirstPage());
} }
function w(i, a) { if (i & 1) {
    let t = e.ɵɵgetCurrentView();
    e.ɵɵelementStart(0, "a", 12), e.ɵɵlistener("keyup.enter", function () { e.ɵɵrestoreView(t); let r = e.ɵɵnextContext().$implicit; e.ɵɵnextContext(2); let s = e.ɵɵreference(1); return e.ɵɵresetView(s.setCurrent(r.value)); })("click", function () { e.ɵɵrestoreView(t); let r = e.ɵɵnextContext().$implicit; e.ɵɵnextContext(2); let s = e.ɵɵreference(1); return e.ɵɵresetView(s.setCurrent(r.value)); }), e.ɵɵelementStart(1, "span", 13), e.ɵɵtext(2), e.ɵɵelementEnd(), e.ɵɵelementStart(3, "span"), e.ɵɵtext(4), e.ɵɵpipe(5, "number"), e.ɵɵelementEnd()();
} if (i & 2) {
    let t = e.ɵɵnextContext().$implicit, n = e.ɵɵnextContext(2);
    e.ɵɵadvance(2), e.ɵɵtextInterpolate1("", n.screenReaderPageLabel, " "), e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.label === "..." ? t.label : e.ɵɵpipeBind2(5, 2, t.label, ""));
} }
function S(i, a) { if (i & 1 && (e.ɵɵelementContainerStart(0), e.ɵɵelementStart(1, "span", 16)(2, "span", 13), e.ɵɵtext(3), e.ɵɵelementEnd(), e.ɵɵelementStart(4, "span"), e.ɵɵtext(5), e.ɵɵpipe(6, "number"), e.ɵɵelementEnd()(), e.ɵɵelementContainerEnd()), i & 2) {
    let t = e.ɵɵnextContext().$implicit, n = e.ɵɵnextContext(2);
    e.ɵɵadvance(3), e.ɵɵtextInterpolate1("", n.screenReaderCurrentLabel, " "), e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.label === "..." ? t.label : e.ɵɵpipeBind2(6, 2, t.label, ""));
} }
function E(i, a) { if (i & 1 && (e.ɵɵelementStart(0, "li"), e.ɵɵtemplate(1, w, 6, 5, "a", 10)(2, S, 7, 5, "ng-container", 15), e.ɵɵelementEnd()), i & 2) {
    let t = a.$implicit;
    e.ɵɵnextContext(2);
    let n = e.ɵɵreference(1);
    e.ɵɵclassProp("current", n.getCurrent() === t.value)("ellipsis", t.label === "..."), e.ɵɵadvance(), e.ɵɵproperty("ngIf", n.getCurrent() !== t.value), e.ɵɵadvance(), e.ɵɵproperty("ngIf", n.getCurrent() === t.value);
} }
function T(i, a) { if (i & 1) {
    let t = e.ɵɵgetCurrentView();
    e.ɵɵelementStart(0, "a", 12), e.ɵɵlistener("keyup.enter", function () { e.ɵɵrestoreView(t), e.ɵɵnextContext(3); let r = e.ɵɵreference(1); return e.ɵɵresetView(r.next()); })("click", function () { e.ɵɵrestoreView(t), e.ɵɵnextContext(3); let r = e.ɵɵreference(1); return e.ɵɵresetView(r.next()); }), e.ɵɵtext(1), e.ɵɵelementStart(2, "span", 13), e.ɵɵtext(3), e.ɵɵelementEnd()();
} if (i & 2) {
    let t = e.ɵɵnextContext(3);
    e.ɵɵadvance(), e.ɵɵtextInterpolate1(" ", t.nextLabel, " "), e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.screenReaderPageLabel);
} }
function D(i, a) { if (i & 1 && (e.ɵɵelementStart(0, "span", 14), e.ɵɵtext(1), e.ɵɵelementStart(2, "span", 13), e.ɵɵtext(3), e.ɵɵelementEnd()()), i & 2) {
    let t = e.ɵɵnextContext(3);
    e.ɵɵadvance(), e.ɵɵtextInterpolate1(" ", t.nextLabel, " "), e.ɵɵadvance(2), e.ɵɵtextInterpolate(t.screenReaderPageLabel);
} }
function M(i, a) { if (i & 1 && (e.ɵɵelementStart(0, "li", 17), e.ɵɵtemplate(1, T, 4, 2, "a", 10)(2, D, 4, 2, "span", 11), e.ɵɵelementEnd()), i & 2) {
    e.ɵɵnextContext(2);
    let t = e.ɵɵreference(1);
    e.ɵɵclassProp("disabled", t.isLastPage()), e.ɵɵadvance(), e.ɵɵproperty("ngIf", !t.isLastPage()), e.ɵɵadvance(), e.ɵɵproperty("ngIf", t.isLastPage());
} }
function F(i, a) { if (i & 1 && (e.ɵɵelementStart(0, "ul", 4), e.ɵɵtemplate(1, k, 3, 4, "li", 5), e.ɵɵelementStart(2, "li", 6), e.ɵɵtext(3), e.ɵɵelementEnd(), e.ɵɵtemplate(4, E, 3, 6, "li", 7)(5, M, 3, 4, "li", 8), e.ɵɵelementEnd()), i & 2) {
    let t = e.ɵɵnextContext(), n = e.ɵɵreference(1);
    e.ɵɵclassProp("responsive", t.responsive), e.ɵɵadvance(), e.ɵɵproperty("ngIf", t.directionLinks), e.ɵɵadvance(2), e.ɵɵtextInterpolate2(" ", n.getCurrent(), " / ", n.getLastPage(), " "), e.ɵɵadvance(), e.ɵɵproperty("ngForOf", n.pages)("ngForTrackBy", t.trackByIndex), e.ɵɵadvance(), e.ɵɵproperty("ngIf", t.directionLinks);
} }
var h = class {
    constructor() { this.change = new m, this.instances = {}, this.DEFAULT_ID = "DEFAULT_PAGINATION_ID"; }
    defaultId() { return this.DEFAULT_ID; }
    register(a) { return a.id == null && (a.id = this.DEFAULT_ID), this.instances[a.id] ? this.updateInstance(a) : (this.instances[a.id] = a, !0); }
    updateInstance(a) { let t = !1; for (let n in this.instances[a.id])
        a[n] !== this.instances[a.id][n] && (this.instances[a.id][n] = a[n], t = !0); return t; }
    getCurrentPage(a) { return this.instances[a] ? this.instances[a].currentPage : 1; }
    setCurrentPage(a, t) { if (this.instances[a]) {
        let n = this.instances[a], r = Math.ceil(n.totalItems / n.itemsPerPage);
        t <= r && 1 <= t && (this.instances[a].currentPage = t, this.change.emit(a));
    } }
    setTotalItems(a, t) { this.instances[a] && 0 <= t && (this.instances[a].totalItems = t, this.change.emit(a)); }
    setItemsPerPage(a, t) { this.instances[a] && (this.instances[a].itemsPerPage = t, this.change.emit(a)); }
    getInstance(a = this.DEFAULT_ID) { return this.instances[a] ? this.clone(this.instances[a]) : {}; }
    clone(a) { var t = {}; for (var n in a)
        a.hasOwnProperty(n) && (t[n] = a[n]); return t; }
}, B = Number.MAX_SAFE_INTEGER, G = (() => { class i {
    constructor(t) { this.service = t, this.state = {}; }
    transform(t, n) { if (!(t instanceof Array)) {
        let c = n.id || this.service.defaultId();
        return this.state[c] ? this.state[c].slice : t;
    } let r = n.totalItems && n.totalItems !== t.length, s = this.createInstance(t, n), o = s.id, l, p, g = s.itemsPerPage, f = this.service.register(s); if (!r && t instanceof Array) {
        if (g = +g || B, l = (s.currentPage - 1) * g, p = l + g, this.stateIsIdentical(o, t, l, p))
            return this.state[o].slice;
        {
            let _ = t.slice(l, p);
            return this.saveState(o, t, _, l, p), this.service.change.emit(o), _;
        }
    }
    else
        return f && this.service.change.emit(o), this.saveState(o, t, t, l, p), t; }
    createInstance(t, n) { return this.checkConfig(n), { id: n.id != null ? n.id : this.service.defaultId(), itemsPerPage: +n.itemsPerPage || 0, currentPage: +n.currentPage || 1, totalItems: +n.totalItems || t.length }; }
    checkConfig(t) { let r = ["itemsPerPage", "currentPage"].filter(s => !(s in t)); if (0 < r.length)
        throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`); }
    saveState(t, n, r, s, o) { this.state[t] = { collection: n, size: n.length, slice: r, start: s, end: o }; }
    stateIsIdentical(t, n, r, s) { let o = this.state[t]; return !o || !(o.size === n.length && o.start === r && o.end === s) ? !1 : o.slice.every((p, g) => p === n[r + g]); }
} return i.ɵfac = function (t) { return new (t || i)(e.ɵɵdirectiveInject(h, 16)); }, i.ɵpipe = e.ɵɵdefinePipe({ name: "paginate", type: i, pure: !1, standalone: !1 }), i; })();
var V = (() => { class i {
    constructor(t, n) { this.service = t, this.changeDetectorRef = n, this.maxSize = 7, this.pageChange = new m, this.pageBoundsCorrection = new m, this.pages = [], this.changeSub = this.service.change.subscribe(r => { this.id === r && (this.updatePageLinks(), this.changeDetectorRef.markForCheck(), this.changeDetectorRef.detectChanges()); }); }
    ngOnInit() { this.id === void 0 && (this.id = this.service.defaultId()), this.updatePageLinks(); }
    ngOnChanges(t) { this.updatePageLinks(); }
    ngOnDestroy() { this.changeSub.unsubscribe(); }
    previous() { this.checkValidId(), this.setCurrent(this.getCurrent() - 1); }
    next() { this.checkValidId(), this.setCurrent(this.getCurrent() + 1); }
    isFirstPage() { return this.getCurrent() === 1; }
    isLastPage() { return this.getLastPage() === this.getCurrent(); }
    setCurrent(t) { this.pageChange.emit(t); }
    getCurrent() { return this.service.getCurrentPage(this.id); }
    getLastPage() { let t = this.service.getInstance(this.id); return t.totalItems < 1 ? 1 : Math.ceil(t.totalItems / t.itemsPerPage); }
    getTotalItems() { return this.service.getInstance(this.id).totalItems; }
    checkValidId() { this.service.getInstance(this.id).id == null && console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`); }
    updatePageLinks() { let t = this.service.getInstance(this.id), n = this.outOfBoundCorrection(t); n !== t.currentPage ? setTimeout(() => { this.pageBoundsCorrection.emit(n), this.pages = this.createPageArray(t.currentPage, t.itemsPerPage, t.totalItems, this.maxSize); }) : this.pages = this.createPageArray(t.currentPage, t.itemsPerPage, t.totalItems, this.maxSize); }
    outOfBoundCorrection(t) { let n = Math.ceil(t.totalItems / t.itemsPerPage); return n < t.currentPage && 0 < n ? n : t.currentPage < 1 ? 1 : t.currentPage; }
    createPageArray(t, n, r, s) { s = +s; let o = [], l = Math.max(Math.ceil(r / n), 1), p = Math.ceil(s / 2), g = t <= p, f = l - p < t, c = !g && !f, _ = s < l, u = 1; for (; u <= l && u <= s;) {
        let x, b = this.calculatePageNumber(u, t, s, l), v = u === 2 && (c || f), P = u === s - 1 && (c || g);
        _ && (v || P) ? x = "..." : x = b, o.push({ label: x, value: b }), u++;
    } return o; }
    calculatePageNumber(t, n, r, s) { let o = Math.ceil(r / 2); return t === r ? s : t === 1 ? t : r < s ? s - o < n ? s - r + t : o < n ? n - o + t : t : t; }
} return i.ɵfac = function (t) { return new (t || i)(e.ɵɵdirectiveInject(h), e.ɵɵdirectiveInject(e.ChangeDetectorRef)); }, i.ɵdir = e.ɵɵdefineDirective({ type: i, selectors: [["pagination-template"], ["", "pagination-template", ""]], inputs: { id: "id", maxSize: "maxSize" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, exportAs: ["paginationApi"], standalone: !1, features: [e.ɵɵNgOnChangesFeature] }), i; })();
function C(i) { return !!i && i !== "false"; }
var W = (() => {
    class i {
        constructor() { this.maxSize = 7, this.previousLabel = "Previous", this.nextLabel = "Next", this.screenReaderPaginationLabel = "Pagination", this.screenReaderPageLabel = "page", this.screenReaderCurrentLabel = "You're on page", this.pageChange = new m, this.pageBoundsCorrection = new m, this._directionLinks = !0, this._autoHide = !1, this._responsive = !1; }
        get directionLinks() { return this._directionLinks; }
        set directionLinks(t) { this._directionLinks = C(t); }
        get autoHide() { return this._autoHide; }
        set autoHide(t) { this._autoHide = C(t); }
        get responsive() { return this._responsive; }
        set responsive(t) { this._responsive = C(t); }
        trackByIndex(t) { return t; }
    }
    return i.ɵfac = function (t) { return new (t || i); }, i.ɵcmp = e.ɵɵdefineComponent({ type: i, selectors: [["pagination-controls"]], inputs: { id: "id", maxSize: "maxSize", directionLinks: "directionLinks", autoHide: "autoHide", responsive: "responsive", previousLabel: "previousLabel", nextLabel: "nextLabel", screenReaderPaginationLabel: "screenReaderPaginationLabel", screenReaderPageLabel: "screenReaderPageLabel", screenReaderCurrentLabel: "screenReaderCurrentLabel" }, outputs: { pageChange: "pageChange", pageBoundsCorrection: "pageBoundsCorrection" }, standalone: !1, decls: 4, vars: 4, consts: [["p", "paginationApi"], [3, "pageChange", "pageBoundsCorrection", "id", "maxSize"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]], template: function (t, n) { if (t & 1) {
            let r = e.ɵɵgetCurrentView();
            e.ɵɵelementStart(0, "pagination-template", 1, 0), e.ɵɵlistener("pageChange", function (o) { return e.ɵɵrestoreView(r), e.ɵɵresetView(n.pageChange.emit(o)); })("pageBoundsCorrection", function (o) { return e.ɵɵrestoreView(r), e.ɵɵresetView(n.pageBoundsCorrection.emit(o)); }), e.ɵɵelementStart(2, "nav", 2), e.ɵɵtemplate(3, F, 6, 8, "ul", 3), e.ɵɵelementEnd()();
        } if (t & 2) {
            let r = e.ɵɵreference(1);
            e.ɵɵproperty("id", n.id)("maxSize", n.maxSize), e.ɵɵadvance(2), e.ɵɵattribute("aria-label", n.screenReaderPaginationLabel), e.ɵɵadvance(), e.ɵɵproperty("ngIf", !(n.autoHide && r.pages.length <= 1));
        } }, dependencies: [V, d.NgIf, d.NgForOf, d.DecimalPipe], styles: [`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`], encapsulation: 2, changeDetection: 0 }), i;
})(), Y = (() => { class i {
} return i.ɵfac = function (t) { return new (t || i); }, i.ɵmod = e.ɵɵdefineNgModule({ type: i }), i.ɵinj = e.ɵɵdefineInjector({ providers: [h], imports: [[I]] }), i; })();
export { Y as NgxPaginationModule, G as PaginatePipe, W as PaginationControlsComponent, V as PaginationControlsDirective, h as PaginationService };
