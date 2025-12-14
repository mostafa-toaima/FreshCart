import { a as f, b as w } from "@nf-internal/chunk-JKOY2XUY";
import * as s from "@angular/core";
import { isDevMode as H, InjectionToken as te, PLATFORM_ID as F, input as m, output as C, signal as y } from "@angular/core";
import * as S from "@angular/common";
import { isPlatformBrowser as j, CommonModule as le } from "@angular/common";
import { toObservable as he } from "@angular/core/rxjs-interop";
import { Subject as p, merge as v, of as k, fromEvent as ce, from as ue } from "rxjs";
import { tap as c, filter as T, switchMap as M, first as B, take as ie, skip as se, map as R, toArray as de, pairwise as ge, delay as pe } from "rxjs/operators";
import * as D from "@angular/router";
import { NavigationEnd as fe } from "@angular/router";
import { trigger as me, state as V, transition as U, style as q, animate as Q } from "@angular/animations";
var ve = (n, u, e, t, i) => ({ width: n, transform: u, transition: e, "padding-left": t, "padding-right": i }), _e = (n, u, e, t) => ({ width: n, "margin-left": u, "margin-right": e, left: t }), Se = (n, u) => ({ $implicit: n, index: u }), re = (n, u) => u.id;
function De(n, u) { }
function ye(n, u) { if (n & 1 && s.ɵɵtemplate(0, De, 0, 0, "ng-template", 3), n & 2) {
    let e = s.ɵɵnextContext(), t = e.$implicit, i = e.$index, r = s.ɵɵnextContext();
    s.ɵɵproperty("ngTemplateOutlet", t.tplRef)("ngTemplateOutletContext", s.ɵɵpureFunction2(2, Se, r.preparePublicSlide(t), i));
} }
function be(n, u) { if (n & 1) {
    let e = s.ɵɵgetCurrentView();
    s.ɵɵelementStart(0, "div", 2), s.ɵɵlistener("animationend", function () { let i = s.ɵɵrestoreView(e).$implicit, r = s.ɵɵnextContext(); return s.ɵɵresetView(r.clear(i.id)); }), s.ɵɵconditionalCreate(1, ye, 1, 5, null, 3), s.ɵɵelementEnd();
} if (n & 2) {
    let e = u.$implicit;
    s.ɵɵproperty("ngClass", e.classes)("ngStyle", s.ɵɵpureFunction4(4, _e, e.width + "px", e.marginL ? e.marginL + "px" : "", e.marginR ? e.marginR + "px" : "", e.left))("@autoHeight", e.heightState), s.ɵɵadvance(), s.ɵɵconditional(e.load ? 1 : -1);
} }
var we = (n, u, e, t, i) => ({ "owl-rtl": n, "owl-loaded": u, "owl-responsive": e, "owl-drag": t, "owl-grab": i }), Ce = (n, u) => ({ isMouseDragable: n, isTouchDragable: u }), z = n => ({ disabled: n }), Me = (n, u) => ({ active: n, "owl-dot-text": u });
function Te(n, u) { if (n & 1 && (s.ɵɵelementStart(0, "div", 2), s.ɵɵelement(1, "owl-stage", 3), s.ɵɵelementEnd()), n & 2) {
    let e, t = s.ɵɵnextContext();
    s.ɵɵadvance(), s.ɵɵproperty("owlDraggable", s.ɵɵpureFunction2(3, Ce, (e = t.owlDOMData()) == null ? null : e.isMouseDragable, (e = t.owlDOMData()) == null ? null : e.isTouchDragable))("stageData", t.stageData())("slidesData", t.slidesData());
} }
function xe(n, u) { if (n & 1) {
    let e = s.ɵɵgetCurrentView();
    s.ɵɵelementStart(0, "div", 9), s.ɵɵlistener("click", function () { let i = s.ɵɵrestoreView(e).$implicit, r = s.ɵɵnextContext(2); return s.ɵɵresetView(r.moveByDot(i.id)); }), s.ɵɵelement(1, "span", 10), s.ɵɵelementEnd();
} if (n & 2) {
    let e = u.$implicit;
    s.ɵɵproperty("ngClass", s.ɵɵpureFunction2(2, Me, e.active, e.showInnerContent)), s.ɵɵadvance(), s.ɵɵproperty("innerHTML", e.innerContent, s.ɵɵsanitizeHtml);
} }
function Oe(n, u) { if (n & 1) {
    let e = s.ɵɵgetCurrentView();
    s.ɵɵelementStart(0, "div", 4)(1, "div", 5), s.ɵɵlistener("click", function () { s.ɵɵrestoreView(e); let i = s.ɵɵnextContext(); return s.ɵɵresetView(i.prev()); }), s.ɵɵelementEnd(), s.ɵɵelementStart(2, "div", 6), s.ɵɵlistener("click", function () { s.ɵɵrestoreView(e); let i = s.ɵɵnextContext(); return s.ɵɵresetView(i.next()); }), s.ɵɵelementEnd()(), s.ɵɵelementStart(3, "div", 7), s.ɵɵrepeaterCreate(4, xe, 2, 5, "div", 8, re), s.ɵɵelementEnd();
} if (n & 2) {
    let e, t, i, r, a, o, l, h = s.ɵɵnextContext();
    s.ɵɵproperty("ngClass", s.ɵɵpureFunction1(6, z, (e = h.navData()) == null ? null : e.disabled)), s.ɵɵadvance(), s.ɵɵproperty("ngClass", s.ɵɵpureFunction1(8, z, (t = h.navData()) == null || t.prev == null ? null : t.prev.disabled))("innerHTML", (i = h.navData()) == null || i.prev == null ? null : i.prev.htmlText, s.ɵɵsanitizeHtml), s.ɵɵadvance(), s.ɵɵproperty("ngClass", s.ɵɵpureFunction1(10, z, (r = h.navData()) == null || r.next == null ? null : r.next.disabled))("innerHTML", (a = h.navData()) == null || a.next == null ? null : a.next.htmlText, s.ɵɵsanitizeHtml), s.ɵɵadvance(), s.ɵɵproperty("ngClass", s.ɵɵpureFunction1(12, z, (o = h.dotsData()) == null ? null : o.disabled)), s.ɵɵadvance(), s.ɵɵrepeater((l = h.dotsData()) == null ? null : l.dots);
} }
var P = class {
    items = 3;
    skip_validateItems = !1;
    loop = !1;
    center = !1;
    rewind = !1;
    mouseDrag = !0;
    touchDrag = !0;
    pullDrag = !0;
    freeDrag = !1;
    margin = 0;
    stagePadding = 0;
    merge = !1;
    mergeFit = !0;
    autoWidth = !1;
    startPosition = 0;
    rtl = !1;
    smartSpeed = 250;
    fluidSpeed = !1;
    dragEndSpeed = !1;
    responsive = {};
    responsiveRefreshRate = 200;
    nav = !1;
    navText = ["prev", "next"];
    navSpeed = !1;
    slideBy = 1;
    dots = !0;
    dotsEach = !1;
    dotsData = !1;
    dotsSpeed = !1;
    autoplay = !1;
    autoplayTimeout = 5e3;
    autoplayHoverPause = !1;
    autoplaySpeed = !1;
    autoplayMouseleaveTimeout = 1;
    lazyLoad = !1;
    lazyLoadEager = 0;
    slideTransition = "";
    animateOut = !1;
    animateIn = !1;
    autoHeight = !1;
    URLhashListener = !1;
    constructor() { }
}, A = class {
    items = "number";
    skip_validateItems = "boolean";
    loop = "boolean";
    center = "boolean";
    rewind = "boolean";
    mouseDrag = "boolean";
    touchDrag = "boolean";
    pullDrag = "boolean";
    freeDrag = "boolean";
    margin = "number";
    stagePadding = "number";
    merge = "boolean";
    mergeFit = "boolean";
    autoWidth = "boolean";
    startPosition = "number|string";
    rtl = "boolean";
    smartSpeed = "number";
    fluidSpeed = "boolean";
    dragEndSpeed = "number|boolean";
    responsive = {};
    responsiveRefreshRate = "number";
    nav = "boolean";
    navText = "string[]";
    navSpeed = "number|boolean";
    slideBy = "number|string";
    dots = "boolean";
    dotsEach = "number|boolean";
    dotsData = "boolean";
    dotsSpeed = "number|boolean";
    autoplay = "boolean";
    autoplayTimeout = "number";
    autoplayHoverPause = "boolean";
    autoplaySpeed = "number|boolean";
    autoplayMouseleaveTimeout = "number";
    lazyLoad = "boolean";
    lazyLoadEager = "number";
    slideTransition = "string";
    animateOut = "string|boolean";
    animateIn = "string|boolean";
    autoHeight = "boolean";
    URLhashListener = "boolean";
    constructor() { }
}, W = (() => { class n {
    errorHandler;
    constructor(e) { this.errorHandler = e; }
    log(e, ...t) { H() && console.log(e, ...t); }
    error(e) { this.errorHandler.handleError(e); }
    warn(e, ...t) { console.warn(e, ...t); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(s.ErrorHandler)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })();
var ae = function (n) { return n.Event = "event", n.State = "state", n; }(ae || {}), I = function (n) { return n.Default = "default", n.Inner = "inner", n.Outer = "outer", n; }(I || {});
var _ = (() => { class n {
    logger;
    _viewSettingsShipper$ = new p;
    _initializedCarousel$ = new p;
    _changeSettingsCarousel$ = new p;
    _changedSettingsCarousel$ = new p;
    _translateCarousel$ = new p;
    _translatedCarousel$ = new p;
    _resizeCarousel$ = new p;
    _resizedCarousel$ = new p;
    _refreshCarousel$ = new p;
    _refreshedCarousel$ = new p;
    _dragCarousel$ = new p;
    _draggedCarousel$ = new p;
    settings = { items: 0 };
    owlDOMData = { rtl: !1, isResponsive: !1, isRefreshed: !1, isLoaded: !1, isLoading: !1, isMouseDragable: !1, isGrab: !1, isTouchDragable: !1 };
    stageData = { transform: "translate3d(0px,0px,0px)", transition: "0s", width: 0, paddingL: 0, paddingR: 0 };
    slidesData;
    navData;
    dotsData;
    _width;
    _items = [];
    _widths = [];
    _supress = {};
    _plugins = {};
    _current = null;
    _clones = [];
    _mergers = [];
    _speed = null;
    _coordinates = [];
    _breakpoint = null;
    clonedIdPrefix = "cloned-";
    _options = {};
    _invalidated = {};
    get invalidated() { return this._invalidated; }
    _states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } };
    get states() { return this._states; }
    _pipe = [{ filter: ["width", "items", "settings"], run: e => { e.current = this._items && this._items[this.relative(this._current)]?.id(); } }, { filter: ["width", "items", "settings"], run: e => { let t = this.settings.margin || "", i = !this.settings.autoWidth, r = this.settings.rtl, a = { "margin-left": r ? t : "", "margin-right": r ? "" : t }; i || this.slidesData.forEach(o => { o.marginL = a["margin-left"], o.marginR = a["margin-right"]; }), e.css = a; } }, { filter: ["width", "items", "settings"], run: e => { let t = +(this.width() / (this.settings.items || 1)).toFixed(3) - (this.settings.margin || 0), i = !this.settings.autoWidth, r = [], a = 0, o = this._items.length; for (e.items = { merge: !1, width: t }; o-- > 0;)
                a = this._mergers[o] || 1, a = this.settings.mergeFit && Math.min(a, this.settings.items || 1) || a, e.items.merge = a > 1 || e.items.merge, r[o] = i ? t * a : this._items[o].width() ? this._items[o].width() : t; this._widths = r, this.slidesData.forEach((l, h) => { l.width = this._widths[h], l.marginR = e.css["margin-right"], l.marginL = e.css["margin-left"]; }); } }, { filter: ["items", "settings"], run: () => { let e = [], t = this._items, i = this.settings, r = Math.max(i.items * 2, 4), a = Math.ceil(t.length / 2) * 2, o = [], l = [], h = i.loop && t.length ? i.rewind ? r : Math.max(r, a) : 0; for (h /= 2; h-- > 0;)
                e.push(this.normalize(e.length / 2, !0)), o.push(f({}, this.slidesData[e[e.length - 1]])), e.push(this.normalize(t.length - 1 - (e.length - 1) / 2, !0)), l.unshift(f({}, this.slidesData[e[e.length - 1]])); this._clones = e, o = o.map(d => w(f({}, d), { id: `${this.clonedIdPrefix}${d.id}-append`, isActive: !1, isCloned: !0 })), l = l.map(d => w(f({}, d), { id: `${this.clonedIdPrefix}${d.id}`, isActive: !1, isCloned: !0 })), this.slidesData = l.concat(this.slidesData).concat(o); } }, { filter: ["width", "items", "settings"], run: () => { let e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = [], r = -1, a = 0, o = 0; for (; ++r < t;)
                a = i[r - 1] || 0, o = this._widths[this.relative(r)] + this.settings.margin, i.push(a + o * e); this._coordinates = i; } }, { filter: ["width", "items", "settings"], run: () => { let e = this.settings.stagePadding || 0, t = this._coordinates, i = { width: Math.ceil(Math.abs(t[t.length - 1])) + e * 2, "padding-left": e || "", "padding-right": e || "" }; this.stageData.width = i.width, this.stageData.paddingL = i["padding-left"], this.stageData.paddingR = i["padding-right"]; } }, { filter: ["width", "items", "settings"], run: e => { let t = e.current ? this.slidesData.findIndex(i => i.id === e.current) : 0; t = Math.max(this.minimum(), Math.min(this.maximum(), t)), this.reset(t); } }, { filter: ["position"], run: () => { this.animate(this.coordinates(this._current)); } }, { filter: ["width", "position", "items", "settings"], run: () => { let e = this.settings.rtl ? 1 : -1, t = (this.settings.stagePadding || 0) * 2, i = [], r, a, o, l, h, d; if (r = this.coordinates(this.current()), typeof r == "number" ? r += t : r = 0, a = r + this.width() * e, e === -1 && this.settings.center) {
                let g = this._coordinates.filter($ => (this.settings.items || 1) % 2 === 1 ? $ >= r : $ > r);
                r = g.length ? g[g.length - 1] : r;
            } for (h = 0, d = this._coordinates.length; h < d; h++)
                o = Math.ceil(this._coordinates[h - 1] || 0), l = Math.ceil(Math.abs(this._coordinates[h]) + t * e), (this._op(o, "<=", r) && this._op(o, ">", a) || this._op(l, "<", r) && this._op(l, ">", a)) && i.push(h); this.slidesData.forEach(g => (g.isActive = !1, g)), i.forEach(g => { this.slidesData[g].isActive = !0; }), this.settings.center && (this.slidesData.forEach(g => (g.isCentered = !1, g)), this.slidesData[this.current()] && (this.slidesData[this.current()].isCentered = !0)); } }];
    constructor(e) { this.logger = e; }
    getViewCurSettings() { return this._viewSettingsShipper$.asObservable(); }
    getInitializedState() { return this._initializedCarousel$.asObservable(); }
    getChangeState() { return this._changeSettingsCarousel$.asObservable(); }
    getChangedState() { return this._changedSettingsCarousel$.asObservable(); }
    getTranslateState() { return this._translateCarousel$.asObservable(); }
    getTranslatedState() { return this._translatedCarousel$.asObservable(); }
    getResizeState() { return this._resizeCarousel$.asObservable(); }
    getResizedState() { return this._resizedCarousel$.asObservable(); }
    getRefreshState() { return this._refreshCarousel$.asObservable(); }
    getRefreshedState() { return this._refreshedCarousel$.asObservable(); }
    getDragState() { return this._dragCarousel$.asObservable(); }
    getDraggedState() { return this._draggedCarousel$.asObservable(); }
    setOptions(e) { let t = new P, i = this._validateOptions(e, t); this._options = f(f({}, t), i); }
    _validateOptions(e, t) { let i = f({}, e), r = new A, a = (o, l) => (this.logger.log(`options.${l} must be type of ${o}; ${l}=${e[l]} skipped to defaults: ${l}=${t[l]}`), t[l]); for (let o in i)
        if (i.hasOwnProperty(o)) {
            if (r[o] === "number")
                this._isNumeric(i[o]) ? (i[o] = +i[o], i[o] = o === "items" ? this._validateItems(i[o], i.skip_validateItems) : i[o]) : i[o] = a(r[o], o);
            else if (r[o] === "boolean" && typeof i[o] != "boolean")
                i[o] = a(r[o], o);
            else if (r[o] === "number|boolean" && !this._isNumberOrBoolean(i[o]))
                i[o] = a(r[o], o);
            else if (r[o] === "number|string" && !this._isNumberOrString(i[o]))
                i[o] = a(r[o], o);
            else if (r[o] === "string|boolean" && !this._isStringOrBoolean(i[o]))
                i[o] = a(r[o], o);
            else if (r[o] === "string[]")
                if (Array.isArray(i[o])) {
                    let l = !1;
                    i[o].forEach(h => { l = typeof h == "string"; }), l || (i[o] = a(r[o], o));
                }
                else
                    i[o] = a(r[o], o);
        } return i; }
    _validateItems(e, t) { let i = e; return e > this._items.length ? t ? this.logger.log("The option 'items' in your options is bigger than the number of slides. The navigation got disabled") : (i = this._items.length, this.logger.log("The option 'items' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled")) : e === this._items.length && (this.settings.dots || this.settings.nav) && this.logger.log("Option 'items' in your options is equal to the number of slides. So the navigation got disabled"), i; }
    setCarouselWidth(e) { this._width = e; }
    setup(e, t, i) { this.setCarouselWidth(e), this.setItems(t), this._defineSlidesData(), this.setOptions(i), this.settings = f({}, this._options), this.setOptionsForViewport(), this._trigger("change", { property: { name: "settings", value: this.settings } }), this.invalidate("settings"), this._trigger("changed", { property: { name: "settings", value: this.settings } }); }
    setOptionsForViewport() { let e = this._width, t = this._options.responsive || {}, i = -1; if (!Object.keys(t).length)
        return; if (!e) {
        this.settings.items = 1;
        return;
    } for (let a in t)
        t.hasOwnProperty(a) && +a <= e && +a > i && (i = Number(a)); this.settings = w(f(f({}, this._options), t[i]), { items: t[i] && t[i].items ? this._validateItems(t[i].items, this._options.skip_validateItems) : this._options.items }), delete this.settings.responsive, this.owlDOMData.isResponsive = !0, this.owlDOMData.isMouseDragable = this.settings.mouseDrag, this.owlDOMData.isTouchDragable = this.settings.touchDrag; let r = []; this._items.forEach(a => { let o = this.settings.merge ? a.dataMerge() : 1; r.push(o); }), this._mergers = r, this._breakpoint = i, this.invalidate("settings"); }
    initialize(e) { this.enter("initializing"), this.owlDOMData.rtl = this.settings.rtl, this._mergers.length && (this._mergers = []), e.forEach(t => { let i = this.settings.merge ? t.dataMerge() : 1; this._mergers.push(i); }), this._clones = [], this.reset(this._isNumeric(this.settings.startPosition) ? +(this.settings?.startPosition || 0) : 0), this.invalidate("items"), this.refresh(), this.owlDOMData.isLoaded = !0, this.owlDOMData.isMouseDragable = this.settings.mouseDrag, this.owlDOMData.isTouchDragable = this.settings.touchDrag, this.sendChanges(), this.leave("initializing"), this._trigger("initialized"); }
    sendChanges() { this._viewSettingsShipper$.next({ owlDOMData: this.owlDOMData, stageData: this.stageData, slidesData: this.slidesData, navData: this.navData, dotsData: this.dotsData }); }
    _optionsLogic() { this.settings.autoWidth && (this.settings.stagePadding = 0, this.settings.merge = !1); }
    update() { let e = 0, t = this._pipe.length, i = a => this._invalidated[a], r = {}; for (; e < t;) {
        let a = this._pipe[e].filter.filter(i);
        (this._invalidated.all || a.length > 0) && this._pipe[e].run(r), e++;
    } this.slidesData.forEach(a => a.classes = this.setCurSlideClasses(a)), this.sendChanges(), this._invalidated = {}, this.is("valid") || this.enter("valid"); }
    width(e) { switch (e = e || I.Default, e) {
        case I.Inner:
        case I.Outer: return this._width;
        default: return this._width - (this.settings.stagePadding || 0) * 2 + (this.settings.margin || 0);
    } }
    refresh() { this.enter("refreshing"), this._trigger("refresh"), this._defineSlidesData(), this.setOptionsForViewport(), this._optionsLogic(), this.update(), this.leave("refreshing"), this._trigger("refreshed"); }
    onResize(e) { if (!this._items.length)
        return !1; this.setCarouselWidth(e), this.enter("resizing"), this._trigger("resize"), this.invalidate("width"), this.refresh(), this.leave("resizing"), this._trigger("resized"); }
    prepareDragging(e) { let t, i; return i = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, "").split(","), t = { x: +i[0], y: +i[1] }, this.is("animating") && this.invalidate("position"), e.type === "mousedown" && (this.owlDOMData.isGrab = !0), this.speed(0), t; }
    enterDragging() { this.enter("dragging"), this._trigger("drag"); }
    defineNewCoordsDrag(e, t) { let i, r, a = 0, o = this.difference(t.pointer, this.pointer(e)), l = this.difference(t.stage.start, o); return this.is("dragging") ? (this.settings.loop ? (i = this.coordinates(this.minimum()), r = +this.coordinates(this.maximum() + 1) - i, l.x = ((l.x - i) % r + r) % r + i) : (i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), r = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), a = this.settings.pullDrag ? -1 * o.x / 5 : 0, l.x = Math.max(Math.min(l.x, i + a), r + a)), l) : !1; }
    finishDragging(e, t, i) { let r = ["right", "left"], a = this.difference(t.pointer, this.pointer(e)), o = t.stage.current, l = r[+(this.settings.rtl ? a.x < +this.settings.rtl : a.x > +(this.settings.rtl || 0))], h, d, g; (a.x !== 0 && this.is("dragging") || !this.is("valid")) && (this.speed(+(this.settings.dragEndSpeed || 0) || this.settings.smartSpeed), h = this.closest(o.x, a.x !== 0 ? l : t.direction), d = this.current(), g = this.current(h === -1 ? void 0 : h), d !== g && (this.invalidate("position"), this.update()), t.direction = l, (Math.abs(a.x) > 3 || new Date().getTime() - t.time > 300) && i()), this.is("dragging") && (this.leave("dragging"), this._trigger("dragged")); }
    closest(e, t) { let r = this.width(), a = this.coordinates(), o = -1; this.settings.center && (a = a.map(l => (l === 0 && (l += 1e-6), l))); for (let l = 0; l < a.length && (t === "left" && e > a[l] - 30 && e < a[l] + 30 ? o = l : t === "right" && e > a[l] - r - 30 && e < a[l] - r + 30 ? o = l + 1 : this._op(e, "<", a[l]) && this._op(e, ">", a[l + 1] || a[l] - r) ? o = t === "left" ? l + 1 : l : t === null && e > a[l] - 30 && e < a[l] + 30 && (o = l), o === -1); l++)
        ; return this.settings.loop || (this._op(e, ">", a[this.minimum()]) ? o = e = this.minimum() : this._op(e, "<", a[this.maximum()]) && (o = e = this.maximum())), o; }
    animate(e) { let t = this.speed() > 0; this.is("animating") && this.onTransitionEnd(), t && (this.enter("animating"), this._trigger("translate")), this.stageData.transform = "translate3d(" + e + "px,0px,0px)", this.stageData.transition = this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : ""); }
    is(e) { return this._states.current[e] && this._states.current[e] > 0; }
    current(e) { if (e === void 0)
        return this._current; if (this._items.length !== 0) {
        if (e = this.normalize(e), this._current !== e) {
            let t = this._trigger("change", { property: { name: "position", value: e } });
            this._current = e, this.invalidate("position"), this._trigger("changed", { property: { name: "position", value: this._current } });
        }
        return this._current;
    } }
    invalidate(e) { return typeof e == "string" && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), Object.keys(this._invalidated); }
    reset(e) { e = this.normalize(e), e !== void 0 && (this._speed = 0, this._current = e, this._suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this._release(["translate", "translated"])); }
    normalize(e, t) { let i = this._items.length, r = t ? 0 : this._clones.length, a = e; return !this._isNumeric(e) || i < 1 ? a = void 0 : (e < 0 || e >= i + r) && (a = ((e - r / 2) % i + i) % i + r / 2), a; }
    relative(e) { return e -= this._clones.length / 2, this.normalize(e, !0); }
    maximum(e = !1) { let t = this.settings, i = this._coordinates.length, r, a, o; if (t.loop)
        i = this._clones.length / 2 + this._items.length - 1;
    else if (t.autoWidth || t.merge) {
        for (r = this._items.length, a = this.slidesData[--r].width, o = this._width; r-- > 0 && (a += +(this.slidesData[r].width || 0) + (this.settings.margin || 0), !(a > o));)
            ;
        i = r + 1;
    }
    else
        t.center ? i = this._items.length - 1 : i = this._items.length - (t.items || 1); return e && (i -= this._clones.length / 2), Math.max(i, 0); }
    minimum(e = !1) { return e ? 0 : this._clones.length / 2; }
    items(e) { return e === void 0 ? this._items.slice() : (e = this.normalize(e, !0), [this._items[e]]); }
    mergers(e) { return e === void 0 ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e]); }
    clones(e) { let t = this._clones.length / 2, i = t + this._items.length, r = a => a % 2 === 0 ? i + a / 2 : t - (a + 1) / 2; return e === void 0 ? this._clones.map((a, o) => r(o)) : this._clones.map((a, o) => a === e ? r(o) : null).filter(a => a !== null); }
    speed(e) { return e !== void 0 && (this._speed = e), this._speed; }
    coordinates(e) { let t = 1, i = (e || 0) - 1, r, a; return e === void 0 ? (a = this._coordinates.map((o, l) => this.coordinates(l)), a) : (this.settings.center ? (this.settings.rtl && (t = -1, i = e + 1), r = this._coordinates[e], r += (this.width() - r + (this._coordinates[i] || 0)) / 2 * t) : r = this._coordinates[i] || 0, r = Math.ceil(r), r); }
    _duration(e, t, i) { return i === 0 ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(+(i || 0) || this.settings.smartSpeed || 0); }
    to(e, t) { let i = this.current(), r, a = e - this.relative(i), o = this.maximum(), l = 0, h = +(a > 0) - +(a < 0), d = this._items.length, g = this.minimum(); this.settings.loop ? (!this.settings.rewind && Math.abs(a) > d / 2 && (a += h * -1 * d), e = i + a, r = ((e - g) % d + d) % d + g, r !== e && r - a <= o && r - a > 0 && (i = r - a, e = r, l = 30, this.reset(i), this.sendChanges())) : this.settings.rewind ? (o += 1, e = (e % o + o) % o) : e = Math.max(g, Math.min(o, e)), setTimeout(() => { this.speed(this._duration(i, e, t)), this.current(e), this.update(); }, l); }
    next(e) { e = e || !1, this.to(this.relative(this.current()) + 1, e); }
    prev(e) { e = e || !1, this.to(this.relative(this.current()) - 1, e); }
    onTransitionEnd(e) { if (e !== void 0)
        return !1; this.leave("animating"), this._trigger("translated"); }
    _viewport() { let e; return this._width ? e = this._width : this.logger.log("Can not detect viewport width."), e; }
    setItems(e) { this._items = e; }
    _defineSlidesData() { let e; this.slidesData && this.slidesData.length && (e = new Map, this.slidesData.forEach(t => { t.load && e.set(t.id, t.load); })), this.slidesData = this._items.map(t => ({ id: `${t.id()}`, isActive: !1, tplRef: t.tplRef, dataMerge: t.dataMerge(), width: 0, isCloned: !1, load: e ? e.get(t.id()) : !1, hashFragment: t.dataHash() })); }
    setCurSlideClasses(e) { let t = { active: e.isActive || !1, center: e.isCentered || !1, cloned: e.isCloned || !1, animated: e.isAnimated || !1, "owl-animated-in": e.isDefAnimatedIn || !1, "owl-animated-out": e.isDefAnimatedOut || !1 }; return this.settings.animateIn && (t[this.settings.animateIn] = e.isCustomAnimatedIn || !1), this.settings.animateOut && (t[this.settings.animateOut] = e.isCustomAnimatedOut || !1), t; }
    _op(e, t, i) { let r = this.settings.rtl; switch (t) {
        case "<": return r ? e > i : e < i;
        case ">": return r ? e < i : e > i;
        case ">=": return r ? e <= i : e >= i;
        case "<=": return r ? e >= i : e <= i;
        default: break;
    } return !1; }
    _trigger(e, t, i, r, a) { switch (e) {
        case "initialized":
            this._initializedCarousel$.next(e);
            break;
        case "change":
            this._changeSettingsCarousel$.next(t);
            break;
        case "changed":
            this._changedSettingsCarousel$.next(t);
            break;
        case "drag":
            this._dragCarousel$.next(e);
            break;
        case "dragged":
            this._draggedCarousel$.next(e);
            break;
        case "resize":
            this._resizeCarousel$.next(e);
            break;
        case "resized":
            this._resizedCarousel$.next(e);
            break;
        case "refresh":
            this._refreshCarousel$.next(e);
            break;
        case "refreshed":
            this._refreshedCarousel$.next(e);
            break;
        case "translate":
            this._translateCarousel$.next(e);
            break;
        case "translated":
            this._translatedCarousel$.next(e);
            break;
        default: break;
    } }
    enter(e) { [e].concat(this._states.tags[e] || []).forEach(t => { this._states.current[t] === void 0 && (this._states.current[t] = 0), this._states.current[t]++; }); }
    leave(e) { [e].concat(this._states.tags[e] || []).forEach(t => { (this._states.current[t] === 0 || this._states.current[t]) && this._states.current[t]--; }); }
    register(e) { e.type === ae.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = this._states.tags[e.name].filter((t, i) => this._states.tags[e.name].indexOf(t) === i)); }
    _suppress(e) { e.forEach(t => { this._supress[t] = !0; }); }
    _release(e) { e.forEach(t => { delete this._supress[t]; }); }
    pointer(e) { let t = { x: 0, y: 0 }; return e = e.originalEvent || e || window.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t; }
    _isNumeric(e) { return !isNaN(parseFloat(e)); }
    _isNumberOrBoolean(e) { return this._isNumeric(e) || typeof e == "boolean"; }
    _isNumberOrString(e) { return this._isNumeric(e) || typeof e == "string"; }
    _isStringOrBoolean(e) { return typeof e == "string" || typeof e == "boolean"; }
    difference(e, t) { return e === null || t === null ? { x: 0, y: 0 } : { x: e.x - t.x, y: e.y - t.y }; }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(W)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), Z = (() => { class n {
    carouselService;
    navSubscription;
    _initialized = !1;
    _pages = [];
    _navData = { disabled: !1, prev: { disabled: !1, htmlText: "" }, next: { disabled: !1, htmlText: "" } };
    _dotsData = { disabled: !1, dots: [] };
    constructor(e) { this.carouselService = e, this.spyDataStreams(); }
    ngOnDestroy() { this.navSubscription.unsubscribe(); }
    spyDataStreams() { let e = this.carouselService.getInitializedState().pipe(c(a => { this.initialize(), this._updateNavPages(), this.draw(), this.update(), this.carouselService.sendChanges(); })), t = this.carouselService.getChangedState().pipe(T(a => a.property.name === "position"), c(a => { this.update(); })), i = this.carouselService.getRefreshedState().pipe(c(() => { this._updateNavPages(), this.draw(), this.update(), this.carouselService.sendChanges(); })), r = v(e, t, i); this.navSubscription = r.subscribe(() => { }); }
    initialize() { this._navData.disabled = !0, this._navData.prev.htmlText = this.carouselService.settings.navText[0], this._navData.next.htmlText = this.carouselService.settings.navText[1], this._dotsData.disabled = !0, this.carouselService.navData = this._navData, this.carouselService.dotsData = this._dotsData; }
    _updateNavPages() { let e, t, i, r = this.carouselService.clones().length / 2, a = r + this.carouselService.items().length, o = this.carouselService.maximum(!0), l = [], h = this.carouselService.settings, d = h.center || h.autoWidth || h.dotsData ? 1 : Math.floor(Number(h.dotsEach)) || Math.floor(h.items); if (d = +d, h.slideBy !== "page" && (h.slideBy = Math.min(+h.slideBy, h.items)), h.dots || h.slideBy === "page")
        for (e = r, t = 0, i = 0; e < a; e++) {
            if (t >= d || t === 0) {
                if (l.push({ start: Math.min(o, e - r), end: e - r + d - 1 }), Math.min(o, e - r) === o)
                    break;
                t = 0, ++i;
            }
            t += this.carouselService.mergers(this.carouselService.relative(e));
        } this._pages = l; }
    draw() { let e, t = this.carouselService.settings, i = this.carouselService.items(), r = i.length <= t.items; if (this._navData.disabled = !t.nav || r, this._dotsData.disabled = !t.dots || r, t.dots)
        if (e = this._pages.length - this._dotsData.dots.length, t.dotsData && e !== 0)
            this._dotsData.dots = [], i.forEach(a => { this._dotsData.dots.push({ active: !1, id: `dot-${a.id}`, innerContent: a.dotContent(), showInnerContent: !0 }); });
        else if (e > 0) {
            let a = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
            for (let o = 0; o < e; o++)
                this._dotsData.dots.push({ active: !1, id: `dot-${o + a}`, innerContent: "", showInnerContent: !1 });
        }
        else
            e < 0 && this._dotsData.dots.splice(e, Math.abs(e)); this.carouselService.navData = this._navData, this.carouselService.dotsData = this._dotsData; }
    update() { this._updateNavButtons(), this._updateDots(); }
    _updateNavButtons() { let e = this.carouselService.settings, t = e.loop || e.rewind, i = this.carouselService.relative(this.carouselService.current()); e.nav && (this._navData.prev.disabled = !t && i <= this.carouselService.minimum(!0), this._navData.next.disabled = !t && i >= this.carouselService.maximum(!0)), this.carouselService.navData = this._navData; }
    _updateDots() { let e; this.carouselService.settings.dots && (this._dotsData.dots.forEach(t => { t.active === !0 && (t.active = !1); }), e = this._current(), this._dotsData.dots.length && (this._dotsData.dots[e].active = !0), this.carouselService.dotsData = this._dotsData); }
    _current() { let e = this.carouselService.relative(this.carouselService.current()), t, i = this._pages.filter((r, a) => r.start <= e && r.end >= e).pop(); return t = this._pages.findIndex(r => r.start === i.start && r.end === i.end), t; }
    _getPosition(e) { let t, i, r = this.carouselService.settings; return r.slideBy === "page" ? (t = this._current(), i = this._pages.length, e ? ++t : --t, t = this._pages[(t % i + i) % i].start) : (t = this.carouselService.relative(this.carouselService.current()), i = this.carouselService.items().length, e ? t += +r.slideBy : t -= +r.slideBy), t; }
    next(e) { this.carouselService.to(this._getPosition(!0), e); }
    prev(e) { this.carouselService.to(this._getPosition(!1), e); }
    to(e, t, i) { let r; !i && this._pages.length ? (r = this._pages.length, this.carouselService.to(this._pages[(e % r + r) % r].start, t)) : this.carouselService.to(e, t); }
    moveByDot(e) { let t = this._dotsData.dots.findIndex(i => e === i.id); this.to(t, this.carouselService.settings.dotsSpeed); }
    toSlideById(e) { let t = this.carouselService.slidesData.findIndex(i => i.id === e && i.isCloned === !1); t === -1 || t === this.carouselService.current() || this.carouselService.to(this.carouselService.relative(t), !1); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(_)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), N = new te("WindowToken"), x = class {
    get nativeWindow() { throw new Error("Not implemented."); }
}, $e = (() => { class n extends x {
    constructor() { super(); }
    get nativeWindow() { return window; }
    static ɵfac = function (t) { return new (t || n); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })();
function ze(n, u) { return j(u) ? n.nativeWindow : { setTimeout: (t, i) => { }, clearTimeout: t => { } }; }
var Ie = { provide: x, useClass: $e }, ke = { provide: N, useFactory: ze, deps: [x, F] }, Le = [Ie, ke], L = new te("DocumentToken"), O = class {
    get nativeDocument() { throw new Error("Not implemented."); }
}, Re = (() => { class n extends O {
    constructor() { super(); }
    get nativeDocument() { return document; }
    static ɵfac = function (t) { return new (t || n); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })();
function Pe(n, u) { return j(u) ? n.nativeDocument : { hidden: !1, visibilityState: "visible" }; }
var Ae = { provide: O, useClass: Re }, Ee = { provide: L, useFactory: Pe, deps: [O, F] }, He = [Ae, Ee], G = (() => { class n {
    carouselService;
    ngZone;
    autoplaySubscription;
    _timeout = null;
    _paused = !1;
    _isArtificialAutoplayTimeout;
    _isAutoplayStopped = !1;
    get isAutoplayStopped() { return this._isAutoplayStopped; }
    set isAutoplayStopped(e) { this._isAutoplayStopped = e; }
    winRef;
    docRef;
    constructor(e, t, i, r) { this.carouselService = e, this.ngZone = r, this.winRef = t, this.docRef = i, this.spyDataStreams(); }
    ngOnDestroy() { this.autoplaySubscription.unsubscribe(); }
    spyDataStreams() { let e = this.carouselService.getInitializedState().pipe(c(() => { this.carouselService.settings.autoplay && this.play(); })), t = this.carouselService.getChangedState().pipe(c(a => { this._handleChangeObservable(a); })), i = this.carouselService.getResizedState().pipe(c(() => { this.carouselService.settings.autoplay && !this._isAutoplayStopped ? this.play() : this.stop(); })), r = v(e, t, i); this.autoplaySubscription = r.subscribe(() => { }); }
    play(e, t) { this._paused && (this._paused = !1, this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout)), !this.carouselService.is("rotating") && (this.carouselService.enter("rotating"), this._setAutoPlayInterval()); }
    _getNextTimeout(e, t) { return this._timeout && this.winRef.clearTimeout(this._timeout), this._isArtificialAutoplayTimeout = !!e, this.ngZone.runOutsideAngular(() => this.winRef.setTimeout(() => { this.ngZone.run(() => { this._paused || this.carouselService.is("busy") || this.carouselService.is("interacting") || this.docRef.hidden || this.carouselService.next(t || this.carouselService.settings.autoplaySpeed); }); }, e || this.carouselService.settings.autoplayTimeout)); }
    _setAutoPlayInterval(e) { this._timeout = this._getNextTimeout(e); }
    stop() { this.carouselService.is("rotating") && (this._paused = !0, this.winRef.clearTimeout(this._timeout), this.carouselService.leave("rotating")); }
    pause() { this.carouselService.is("rotating") && (this._paused = !0); }
    _handleChangeObservable(e) { e.property.name === "settings" ? this.carouselService.settings.autoplay ? this.play() : this.stop() : e.property.name === "position" && this.carouselService.settings.autoplay && this._setAutoPlayInterval(); }
    _playAfterTranslated() { k("translated").pipe(M(e => this.carouselService.getTranslatedState()), B(), T(() => this._isArtificialAutoplayTimeout), c(() => this._setAutoPlayInterval())).subscribe(() => { }); }
    startPausing() { this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating") && this.pause(); }
    startPlayingMouseLeave() { this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating") && (this.play(), this._playAfterTranslated()); }
    startPlayingTouchEnd() { this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating") && (this.play(), this._playAfterTranslated()); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(_), s.ɵɵinject(N), s.ɵɵinject(L), s.ɵɵinject(s.NgZone)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), K = (() => { class n {
    carouselService;
    lazyLoadSubscription;
    constructor(e) { this.carouselService = e, this.spyDataStreams(); }
    ngOnDestroy() { this.lazyLoadSubscription.unsubscribe(); }
    spyDataStreams() { let e = this.carouselService.getInitializedState().pipe(c(() => { let a = this.carouselService.settings && !this.carouselService.settings.lazyLoad; this.carouselService.slidesData.forEach(o => o.load = !!a); })), t = this.carouselService.getChangeState(), i = this.carouselService.getResizedState(), r = v(e, t, i).pipe(c(a => this._defineLazyLoadSlides(a))); this.lazyLoadSubscription = r.subscribe(() => { }); }
    _defineLazyLoadSlides(e) { if (!(!this.carouselService.settings || !this.carouselService.settings.lazyLoad) && (e.property && e.property.name === "position" || e === "initialized" || e === "resized")) {
        let t = this.carouselService.settings, i = this.carouselService.clones().length, r = t.center && Math.ceil(t.items / 2) || t.items, a = t.center && r * -1 || 0, o = (e.property && e.property.value !== void 0 ? e.property.value : this.carouselService.current()) + a;
        for (t.lazyLoadEager > 0 && (r += t.lazyLoadEager, t.loop && (o -= t.lazyLoadEager, r++)); a++ < r;)
            this._load(i / 2 + this.carouselService.relative(o)), i && this.carouselService.clones(this.carouselService.relative(o)).forEach(l => this._load(l)), o++;
    } }
    _load(e) { this.carouselService.slidesData[e].load || (this.carouselService.slidesData[e].load = !0); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(_)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), E = (() => { class n {
    carouselService;
    animateSubscription;
    swapping = !0;
    previous = void 0;
    next = void 0;
    constructor(e) { this.carouselService = e, this.spyDataStreams(); }
    ngOnDestroy() { this.animateSubscription.unsubscribe(); }
    spyDataStreams() { let e = this.carouselService.getChangeState().pipe(c(h => { h.property.name === "position" && (this.previous = this.carouselService.current(), this.next = h.property.value); })), t = this.carouselService.getDragState(), i = this.carouselService.getDraggedState(), r = this.carouselService.getTranslatedState(), a = v(t, i, r).pipe(c(h => this.swapping = h === "translated")), o = this.carouselService.getTranslateState().pipe(c(h => { this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn) && this._swap(); })), l = v(e, o, a).pipe(); this.animateSubscription = l.subscribe(() => { }); }
    _swap() { if (this.carouselService.settings.items !== 1)
        return; this.carouselService.speed(0); let e, t = this.carouselService.slidesData[this.previous], i = this.carouselService.slidesData[this.next], r = this.carouselService.settings.animateIn, a = this.carouselService.settings.animateOut; this.carouselService.current() !== this.previous && (a && (e = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next), this.carouselService.slidesData.forEach(o => { o.id === t.id && (o.left = `${e}px`, o.isAnimated = !0, o.isDefAnimatedOut = !0, o.isCustomAnimatedOut = !0); })), r && this.carouselService.slidesData.forEach(o => { o.id === i.id && (o.isAnimated = !0, o.isDefAnimatedIn = !0, o.isCustomAnimatedIn = !0); })); }
    clear(e) { this.carouselService.slidesData.forEach(t => { t.id === e && (t.left = "", t.isAnimated = !1, t.isDefAnimatedOut = !1, t.isCustomAnimatedOut = !1, t.isDefAnimatedIn = !1, t.isCustomAnimatedIn = !1, t.classes = this.carouselService.setCurSlideClasses(t)); }), this.carouselService.onTransitionEnd(); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(_)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), X = (() => { class n {
    carouselService;
    autoHeightSubscription;
    constructor(e) { this.carouselService = e, this.spyDataStreams(); }
    ngOnDestroy() { this.autoHeightSubscription.unsubscribe(); }
    spyDataStreams() { let e = this.carouselService.getInitializedState().pipe(c(a => { this.carouselService.settings.autoHeight ? this.update() : this.carouselService.slidesData.forEach(o => o.heightState = "full"); })), t = this.carouselService.getChangedState().pipe(c(a => { this.carouselService.settings.autoHeight && a.property.name === "position" && this.update(); })), i = this.carouselService.getRefreshedState().pipe(c(a => { this.carouselService.settings.autoHeight && this.update(); })), r = v(e, t, i); this.autoHeightSubscription = r.subscribe(() => { }); }
    update() { let e = this.carouselService.settings.items, t = this.carouselService.current(), i = t + e; this.carouselService.settings.center && (t = e % 2 === 1 ? t - (e - 1) / 2 : t - e / 2, i = e % 2 === 1 ? t + e : t + e + 1), this.carouselService.slidesData.forEach((r, a) => { r.heightState = a >= t && a < i ? "full" : "nulled"; }); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(_)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), Y = (() => { class n {
    carouselService;
    route;
    router;
    hashSubscription;
    currentHashFragment;
    constructor(e, t, i) { this.carouselService = e, this.route = t, this.router = i, this.spyDataStreams(), this.route || (this.route = { fragment: k("no route").pipe(ie(1)) }), this.router || (this.router = { navigate: (r, a) => { } }); }
    ngOnDestroy() { this.hashSubscription.unsubscribe(); }
    spyDataStreams() { let e = this.carouselService.getInitializedState().pipe(c(() => this.listenToRoute())), t = this.carouselService.getChangedState().pipe(c(r => { if (this.carouselService.settings.URLhashListener && r.property.name === "position") {
        let a = this.carouselService.current(), o = this.carouselService.slidesData[a].hashFragment;
        if (!o || o === this.currentHashFragment)
            return;
        this.router.navigate(["./"], { fragment: o, relativeTo: this.route });
    } })), i = v(e, t); this.hashSubscription = i.subscribe(() => { }); }
    rewind(e) { let t = this.carouselService.slidesData.findIndex(i => i.hashFragment === e && i.isCloned === !1); t === -1 || t === this.carouselService.current() || this.carouselService.to(this.carouselService.relative(t), !1); }
    listenToRoute() { let e = this.carouselService.settings.startPosition === "URLHash" ? 0 : 2; this.route.fragment.pipe(se(e)).subscribe(t => { this.currentHashFragment = t, this.rewind(t); }); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(_), s.ɵɵinject(D.ActivatedRoute, 8), s.ɵɵinject(D.Router, 8)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), Fe = 0, je = (() => { class n {
    tplRef;
    id = m(`owl-slide-${Fe++}`);
    dataMerge = m(1, { transform: e => +e || 1 });
    width = m(0);
    dotContent = m("");
    dataHash = m("");
    constructor(e) { this.tplRef = e; }
    isNumeric(e) { return !isNaN(parseFloat(e)); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵdirectiveInject(s.TemplateRef)); };
    static ɵdir = s.ɵɵdefineDirective({ type: n, selectors: [["ng-template", "carouselSlide", ""]], inputs: { id: [1, "id"], dataMerge: [1, "dataMerge"], width: [1, "width"], dotContent: [1, "dotContent"], dataHash: [1, "dataHash"] }, standalone: !1 });
} return n; })(), ne = (() => { class n {
    resizeObservable$;
    docRef;
    get onResize$() { return this.resizeObservable$.pipe(T(() => !this.docRef?.fullscreenElement)); }
    constructor(e, t, i) { this.docRef = t, this.resizeObservable$ = j(i) ? ce(e, "resize") : new p().asObservable(); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵinject(N), s.ɵɵinject(L), s.ɵɵinject(F)); };
    static ɵprov = s.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), Be = (() => { class n {
    zone;
    el;
    renderer;
    carouselService;
    animateService;
    owlDraggable = m();
    stageData = m();
    slidesData = m();
    listenerMouseMove;
    listenerTouchMove;
    listenerOneMouseMove;
    listenerOneTouchMove;
    listenerMouseUp;
    listenerTouchEnd;
    listenerOneClick;
    listenerATag;
    _drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null, active: !1, moving: !1 };
    _oneDragMove$ = new p;
    _oneMoveSubsription;
    preparePublicSlide = e => { let t = f({}, e); return delete t.tplRef, t; };
    constructor(e, t, i, r, a) { this.zone = e, this.el = t, this.renderer = i, this.carouselService = r, this.animateService = a; }
    onMouseDown(e) { this.owlDraggable()?.isMouseDragable && this._onDragStart(e); }
    onTouchStart(e) { if (e.targetTouches.length >= 2)
        return !1; this.owlDraggable()?.isTouchDragable && this._onDragStart(e); }
    onTouchCancel(e) { this._onDragEnd(e); }
    onDragStart() { if (this.owlDraggable()?.isMouseDragable)
        return !1; }
    onSelectStart() { if (this.owlDraggable()?.isMouseDragable)
        return !1; }
    ngOnInit() { this._oneMoveSubsription = this._oneDragMove$.pipe(B()).subscribe(() => { this._sendChanges(); }); }
    ngOnDestroy() { this._oneMoveSubsription.unsubscribe(); }
    bindOneMouseTouchMove = e => { this._oneMouseTouchMove(e); };
    bindOnDragMove = e => { this._onDragMove(e); };
    bindOnDragEnd = e => { this._onDragEnd(e); };
    _onDragStart(e) { if (e.which === 3)
        return; let t = this._prepareDragging(e); this._drag.time = new Date().getTime(), this._drag.target = e.target, this._drag.stage.start = t, this._drag.stage.current = t, this._drag.pointer = this._pointer(e), this.listenerMouseUp = this.renderer.listen(document, "mouseup", this.bindOnDragEnd), this.listenerTouchEnd = this.renderer.listen(document, "touchend", this.bindOnDragEnd), this.zone.runOutsideAngular(() => { this.listenerOneMouseMove = this.renderer.listen(document, "mousemove", this.bindOneMouseTouchMove), this.listenerOneTouchMove = this.renderer.listen(document, "touchmove", this.bindOneMouseTouchMove); }); }
    _oneMouseTouchMove(e) { let t = this._difference(this._drag.pointer, this._pointer(e)); this.listenerATag && this.listenerATag(), !(Math.abs(t.x) < 3 && Math.abs(t.y) < 3 && this._is("valid")) && (Math.abs(t.x) < 3 && Math.abs(t.x) < Math.abs(t.y) && this._is("valid") || (this.listenerOneMouseMove(), this.listenerOneTouchMove(), this._drag.moving = !0, this.blockClickAnchorInDragging(e), this.listenerMouseMove = this.renderer.listen(document, "mousemove", this.bindOnDragMove), this.listenerTouchMove = this.renderer.listen(document, "touchmove", this.bindOnDragMove), e.preventDefault(), this._enterDragging(), this._oneDragMove$.next(e))); }
    blockClickAnchorInDragging(e) { let t = e.target; for (; t && !(t instanceof HTMLAnchorElement);)
        t = t.parentElement; t instanceof HTMLAnchorElement && (this.listenerATag = this.renderer.listen(t, "click", () => !1)); }
    _onDragMove(e) { let t, i = this.carouselService.defineNewCoordsDrag(e, this._drag); i !== !1 && (t = i, e.preventDefault(), this._drag.stage.current = t, this._animate(t.x - this._drag.stage.start.x)); }
    _animate(e) { this.renderer.setStyle(this.el.nativeElement.children[0], "transform", `translate3d(${e}px,0px,0px`), this.renderer.setStyle(this.el.nativeElement.children[0], "transition", "0s"); }
    _onDragEnd(e) { this.carouselService.owlDOMData.isGrab = !1, this.listenerOneMouseMove(), this.listenerOneTouchMove(), this._drag.moving && (this.renderer.setStyle(this.el.nativeElement.children[0], "transform", ""), this.renderer.setStyle(this.el.nativeElement.children[0], "transition", this.carouselService.speed(+(this.carouselService?.settings?.dragEndSpeed || 0) || this.carouselService.settings.smartSpeed) / 1e3 + "s"), this._finishDragging(e), this.listenerMouseMove(), this.listenerTouchMove()), this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null, active: !1, moving: !1 }, this.listenerMouseUp(), this.listenerTouchEnd(); }
    _prepareDragging(e) { return this.carouselService.prepareDragging(e); }
    _oneClickHandler = () => { this.listenerOneClick = this.renderer.listen(this._drag.target, "click", () => !1), this.listenerOneClick(); };
    _finishDragging(e) { this.carouselService.finishDragging(e, this._drag, this._oneClickHandler); }
    _pointer(e) { return this.carouselService.pointer(e); }
    _difference(e, t) { return this.carouselService.difference(e, t); }
    _is(e) { return this.carouselService.is(e); }
    _enter(e) { this.carouselService.enter(e); }
    _sendChanges() { this.carouselService.sendChanges(); }
    onTransitionEnd() { this.carouselService.onTransitionEnd(); }
    _enterDragging() { this.carouselService.enterDragging(); }
    clear(e) { this.animateService.clear(e); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵdirectiveInject(s.NgZone), s.ɵɵdirectiveInject(s.ElementRef), s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(_), s.ɵɵdirectiveInject(E)); };
    static ɵcmp = s.ɵɵdefineComponent({ type: n, selectors: [["owl-stage"]], hostBindings: function (t, i) { t & 1 && s.ɵɵlistener("mousedown", function (a) { return i.onMouseDown(a); })("touchstart", function (a) { return i.onTouchStart(a); })("touchcancel", function (a) { return i.onTouchCancel(a); })("dragstart", function () { return i.onDragStart(); })("selectstart", function () { return i.onSelectStart(); }); }, inputs: { owlDraggable: [1, "owlDraggable"], stageData: [1, "stageData"], slidesData: [1, "slidesData"] }, standalone: !1, decls: 4, vars: 7, consts: [[1, "owl-stage", 3, "transitionend", "ngStyle"], [1, "owl-item", 3, "ngClass", "ngStyle"], [1, "owl-item", 3, "animationend", "ngClass", "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (t, i) { t & 1 && (s.ɵɵelementStart(0, "div")(1, "div", 0), s.ɵɵlistener("transitionend", function () { return i.onTransitionEnd(); }), s.ɵɵrepeaterCreate(2, be, 2, 9, "div", 1, re), s.ɵɵelementEnd()()), t & 2 && (s.ɵɵadvance(), s.ɵɵproperty("ngStyle", s.ɵɵpureFunction5(1, ve, i.stageData().width + "px", i.stageData().transform, i.stageData().transition, i.stageData().paddingL ? i.stageData().paddingL + "px" : "", i.stageData().paddingR ? i.stageData().paddingR + "px" : "")), s.ɵɵadvance(), s.ɵɵrepeater(i.slidesData())); }, dependencies: [S.NgClass, S.NgTemplateOutlet, S.NgStyle], encapsulation: 2, data: { animation: [me("autoHeight", [V("nulled", q({ height: 0 })), V("full", q({ height: "*" })), U("full => nulled", [Q("700ms 350ms")]), U("nulled => full", [Q(350)])])] } });
} return n; })(), ot = (() => { class n {
    el;
    resizeService;
    carouselService;
    navigationService;
    autoplayService;
    lazyLoadService;
    animateService;
    autoHeightService;
    hashService;
    logger;
    changeDetectorRef;
    slides;
    translated = C();
    dragging = C();
    change = C();
    changed = C();
    initialized = C();
    carouselWindowWidth;
    resizeSubscription;
    _allObservSubscription;
    _slidesChangesSubscription;
    _owlDOMData = y(null);
    owlDOMData = this._owlDOMData.asReadonly();
    _stageData = y(null);
    stageData = this._stageData.asReadonly();
    _slidesData = y([]);
    slidesData = this._slidesData.asReadonly();
    _navData = y(null);
    navData = this._navData.asReadonly();
    _dotsData = y(null);
    dotsData = this._dotsData.asReadonly();
    slidesOutputData;
    _carouselLoaded = y(!1);
    carouselLoaded = this._carouselLoaded.asReadonly();
    options = m();
    _options$ = he(this.options);
    _optionsPrevAndCur$;
    _viewCurSettings$;
    _translatedCarousel$;
    _draggingCarousel$;
    _changeCarousel$;
    _changedCarousel$;
    _initializedCarousel$;
    _carouselMerge$;
    docRef;
    constructor(e, t, i, r, a, o, l, h, d, g, $, oe) { this.el = e, this.resizeService = t, this.carouselService = i, this.navigationService = r, this.autoplayService = a, this.lazyLoadService = o, this.animateService = l, this.autoHeightService = h, this.hashService = d, this.logger = g, this.changeDetectorRef = $, this.docRef = oe; }
    onVisibilityChange(e) { if (this.carouselService.settings.autoplay)
        switch (this.docRef.visibilityState) {
            case "visible":
                !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
                break;
            case "hidden":
                this.autoplayService.pause();
                break;
            default: break;
        } }
    ngOnInit() { this.spyDataStreams(), this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth; }
    ngAfterContentInit() { this.slides.toArray().length ? (this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options()), this.carouselService.initialize(this.slides.toArray()), this._winResizeWatcher()) : this.logger.log("There are no slides to show. So the carousel won't be rendered"), this._slidesChangesSubscription = this.slides.changes.pipe(c(e => { this.carouselService.setup(this.carouselWindowWidth, e.toArray(), this.options()), this.carouselService.initialize(e.toArray()), e.toArray().length || this._carouselLoaded.set(!1), e.toArray().length && !this.resizeSubscription && this._winResizeWatcher(); })).subscribe(() => { }); }
    ngOnDestroy() { this.resizeSubscription && this.resizeSubscription.unsubscribe(), this._slidesChangesSubscription && this._slidesChangesSubscription.unsubscribe(), this._allObservSubscription && this._allObservSubscription.unsubscribe(); }
    spyDataStreams() { this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(c(e => { this._owlDOMData.set(e.owlDOMData), this._stageData.set(e.stageData), this._slidesData.set(e.slidesData), this._carouselLoaded() || this._carouselLoaded.set(!0), this._navData.set(e.navData), this._dotsData.set(e.dotsData), this.changeDetectorRef.markForCheck(); })), this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(c(() => { this.gatherTranslatedData(), this.initialized.emit(this.slidesOutputData); })), this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(c(() => { this.gatherTranslatedData(), this.translated.emit(this.slidesOutputData); })), this._changeCarousel$ = this.carouselService.getChangeState().pipe(c(() => { this.gatherTranslatedData(), this.change.emit(this.slidesOutputData); })), this._changedCarousel$ = this.carouselService.getChangeState().pipe(M(e => { let t = k(e).pipe(T(() => e.property.name === "position"), M(() => ue(this._slidesData())), se(e.property.value), ie(this.carouselService?.settings?.items || 0), R(i => { let r = this.carouselService.clonedIdPrefix, a = i.id.indexOf(r) >= 0 ? i.id.slice(r.length) : i.id; return w(f({}, i), { id: a, isActive: !0 }); }), de(), R(i => ({ slides: i, startPosition: this.carouselService.relative(e.property.value) }))); return v(t); }), c(e => { this.gatherTranslatedData(), this.changed.emit(e?.slides?.length ? e : this.slidesOutputData); })), this._draggingCarousel$ = this.carouselService.getDragState().pipe(c(() => { this.gatherTranslatedData(), this.dragging.emit({ dragging: !0, data: this.slidesOutputData }); }), M(() => this.carouselService.getDraggedState().pipe(R(() => !!this.carouselService.is("animating")))), M(e => e ? this.carouselService.getTranslatedState().pipe(B()) : k("not animating")), c(() => { this.dragging.emit({ dragging: !1, data: this.slidesOutputData }); })), this._optionsPrevAndCur$ = this._options$.pipe(ge(), c(([e, t]) => { let i = this.slides.toArray(); e && (this.carouselService.setup(this.carouselWindowWidth, i, t), this.carouselService.initialize(i)), e && !i.length && (this.logger.log("There are no slides to show."), this._carouselLoaded.set(!1)), e || this._carouselLoaded.set(!1); })), this._carouselMerge$ = v(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$, this._optionsPrevAndCur$), this._allObservSubscription = this._carouselMerge$.subscribe(() => { }); }
    _winResizeWatcher() { Object.keys(this.carouselService?._options?.responsive || {}).length && (this.resizeSubscription = this.resizeService.onResize$.pipe(T(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector(".owl-carousel").clientWidth), pe(this.carouselService.settings.responsiveRefreshRate || 200)).subscribe(() => { this.carouselService.onResize(this.el.nativeElement.querySelector(".owl-carousel").clientWidth), this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth; })); }
    onTransitionEnd() { this.carouselService.onTransitionEnd(); }
    next() { this._carouselLoaded() && this.navigationService.next(this.carouselService.settings.navSpeed || !1); }
    prev() { this._carouselLoaded() && this.navigationService.prev(this.carouselService.settings.navSpeed || !1); }
    moveByDot(e) { this._carouselLoaded() && this.navigationService.moveByDot(e); }
    to(e) { this._carouselLoaded() && this.navigationService.toSlideById(e); }
    gatherTranslatedData() { let e, t = this.carouselService.clonedIdPrefix, i = this._slidesData().filter(r => r.isActive === !0).map(r => ({ id: r.id.indexOf(t) >= 0 ? r.id.slice(t.length) : r.id, width: r.width, marginL: r.marginL, marginR: r.marginR, center: r.isCentered })); e = this.carouselService.relative(this.carouselService.current()), this.slidesOutputData = { startPosition: e, slides: i }; }
    startPausing() { this.autoplayService.startPausing(); }
    startPlayML() { this.autoplayService.startPlayingMouseLeave(); }
    startPlayTE() { this.autoplayService.startPlayingTouchEnd(); }
    stopAutoplay() { this.autoplayService.isAutoplayStopped = !0, this.autoplayService.stop(); }
    startAutoplay() { this.autoplayService.isAutoplayStopped = !1, this.autoplayService.play(); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵdirectiveInject(s.ElementRef), s.ɵɵdirectiveInject(ne), s.ɵɵdirectiveInject(_), s.ɵɵdirectiveInject(Z), s.ɵɵdirectiveInject(G), s.ɵɵdirectiveInject(K), s.ɵɵdirectiveInject(E), s.ɵɵdirectiveInject(X), s.ɵɵdirectiveInject(Y), s.ɵɵdirectiveInject(W), s.ɵɵdirectiveInject(s.ChangeDetectorRef), s.ɵɵdirectiveInject(L)); };
    static ɵcmp = s.ɵɵdefineComponent({ type: n, selectors: [["owl-carousel-o"]], contentQueries: function (t, i, r) { if (t & 1 && s.ɵɵcontentQuery(r, je, 4), t & 2) {
            let a;
            s.ɵɵqueryRefresh(a = s.ɵɵloadQuery()) && (i.slides = a);
        } }, hostBindings: function (t, i) { t & 1 && s.ɵɵlistener("visibilitychange", function (a) { return i.onVisibilityChange(a); }, s.ɵɵresolveDocument); }, inputs: { options: [1, "options"] }, outputs: { translated: "translated", dragging: "dragging", change: "change", changed: "changed", initialized: "initialized" }, standalone: !1, features: [s.ɵɵProvidersFeature([Z, G, _, K, E, X, Y])], decls: 4, vars: 9, consts: [["owlCarousel", ""], [1, "owl-carousel", "owl-theme", 3, "mouseover", "mouseleave", "touchstart", "touchend", "ngClass"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "click", "ngClass", "innerHTML"], [1, "owl-next", 3, "click", "ngClass", "innerHTML"], [1, "owl-dots", 3, "ngClass"], [1, "owl-dot", 3, "ngClass"], [1, "owl-dot", 3, "click", "ngClass"], [3, "innerHTML"]], template: function (t, i) { if (t & 1) {
            let r = s.ɵɵgetCurrentView();
            s.ɵɵelementStart(0, "div", 1, 0), s.ɵɵlistener("mouseover", function () { return s.ɵɵrestoreView(r), s.ɵɵresetView(i.startPausing()); })("mouseleave", function () { return s.ɵɵrestoreView(r), s.ɵɵresetView(i.startPlayML()); })("touchstart", function () { return s.ɵɵrestoreView(r), s.ɵɵresetView(i.startPausing()); })("touchend", function () { return s.ɵɵrestoreView(r), s.ɵɵresetView(i.startPlayTE()); }), s.ɵɵconditionalCreate(2, Te, 2, 6, "div", 2), s.ɵɵconditionalCreate(3, Oe, 6, 14), s.ɵɵelementEnd();
        } if (t & 2) {
            let r;
            s.ɵɵproperty("ngClass", s.ɵɵpureFunction5(3, we, (r = i.owlDOMData()) == null ? null : r.rtl, (r = i.owlDOMData()) == null ? null : r.isLoaded, (r = i.owlDOMData()) == null ? null : r.isResponsive, (r = i.owlDOMData()) == null ? null : r.isMouseDragable, (r = i.owlDOMData()) == null ? null : r.isGrab)), s.ɵɵadvance(2), s.ɵɵconditional(i.carouselLoaded() ? 2 : -1), s.ɵɵadvance(), s.ɵɵconditional(i.slides.toArray().length ? 3 : -1);
        } }, dependencies: [S.NgClass, Be], styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"], changeDetection: 0 });
} return n; })(), lt = (() => { class n {
    router;
    route;
    queryParams;
    fragment;
    queryParamsHandling;
    preserveFragment;
    skipLocationChange;
    replaceUrl;
    stopLink = !1;
    commands = [];
    preserve;
    constructor(e, t, i, r, a) { this.router = e, this.route = t, i == null && r.setAttribute(a.nativeElement, "tabindex", "0"); }
    set owlRouterLink(e) { e != null ? this.commands = Array.isArray(e) ? e : [e] : this.commands = []; }
    set preserveQueryParams(e) { H() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = e; }
    onClick() { let e = { skipLocationChange: b(this.skipLocationChange), replaceUrl: b(this.replaceUrl) }; return this.stopLink ? !1 : (this.router.navigateByUrl(this.urlTree, e), !0); }
    get urlTree() { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: b(this.preserveFragment) }); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵdirectiveInject(D.Router), s.ɵɵdirectiveInject(D.ActivatedRoute), s.ɵɵinjectAttribute("tabindex"), s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(s.ElementRef)); };
    static ɵdir = s.ɵɵdefineDirective({ type: n, selectors: [["", "owlRouterLink", "", 5, "a"]], hostBindings: function (t, i) { t & 1 && s.ɵɵlistener("click", function () { return i.onClick(); }); }, inputs: { queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", preserveFragment: "preserveFragment", skipLocationChange: "skipLocationChange", replaceUrl: "replaceUrl", stopLink: "stopLink", owlRouterLink: "owlRouterLink", preserveQueryParams: "preserveQueryParams" }, standalone: !1 });
} return n; })(), ht = (() => { class n {
    router;
    route;
    locationStrategy;
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    preserveFragment;
    skipLocationChange;
    replaceUrl;
    stopLink = !1;
    commands = [];
    subscription;
    preserve;
    href;
    constructor(e, t, i) { this.router = e, this.route = t, this.locationStrategy = i, this.subscription = e.events.subscribe(r => { r instanceof fe && this.updateTargetUrlAndHref(); }); }
    set owlRouterLink(e) { e != null ? this.commands = Array.isArray(e) ? e : [e] : this.commands = []; }
    set preserveQueryParams(e) { H() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = e; }
    ngOnChanges(e) { this.updateTargetUrlAndHref(); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    onClick(e, t, i, r) { if (e !== 0 || t || i || r || typeof this.target == "string" && this.target !== "_self")
        return !0; if (this.stopLink)
        return !1; let a = { skipLocationChange: b(this.skipLocationChange), replaceUrl: b(this.replaceUrl) }; return this.router.navigateByUrl(this.urlTree, a), !1; }
    updateTargetUrlAndHref() { this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)); }
    get urlTree() { return this.router.createUrlTree(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: b(this.preserveFragment) }); }
    static ɵfac = function (t) { return new (t || n)(s.ɵɵdirectiveInject(D.Router), s.ɵɵdirectiveInject(D.ActivatedRoute), s.ɵɵdirectiveInject(S.LocationStrategy)); };
    static ɵdir = s.ɵɵdefineDirective({ type: n, selectors: [["a", "owlRouterLink", ""]], hostVars: 2, hostBindings: function (t, i) { t & 1 && s.ɵɵlistener("click", function (a) { return i.onClick(a.button, a.ctrlKey, a.metaKey, a.shiftKey); }), t & 2 && (s.ɵɵdomProperty("href", i.href, s.ɵɵsanitizeUrl), s.ɵɵattribute("target", i.target)); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", preserveFragment: "preserveFragment", skipLocationChange: "skipLocationChange", replaceUrl: "replaceUrl", stopLink: "stopLink", owlRouterLink: "owlRouterLink", preserveQueryParams: "preserveQueryParams" }, standalone: !1, features: [s.ɵɵNgOnChangesFeature] });
} return n; })();
function b(n) { return n === "" || !!n; }
var J = class {
    startPosition;
    slides;
};
var ct = (() => { class n {
    static ɵfac = function (t) { return new (t || n); };
    static ɵmod = s.ɵɵdefineNgModule({ type: n });
    static ɵinj = s.ɵɵdefineInjector({ providers: [Le, ne, He, W], imports: [le] });
} return n; })(), ee = class {
    id;
    isActive;
    tplRef;
    dataMerge;
    width;
    marginL;
    marginR;
    isCentered;
    center;
    isCloned;
    load;
    left;
    classes;
    isAnimated;
    isDefAnimatedIn;
    isDefAnimatedOut;
    isCustomAnimatedIn;
    isCustomAnimatedOut;
    heightState;
    hashFragment;
};
export { ot as CarouselComponent, ct as CarouselModule, je as CarouselSlideDirective, lt as OwlRouterLinkDirective, ht as OwlRouterLinkWithHrefDirective, ee as SlideModel, J as SlidesOutputData };
