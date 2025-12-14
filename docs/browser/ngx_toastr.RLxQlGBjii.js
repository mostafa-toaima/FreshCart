import { a as r, b as h } from "@nf-internal/chunk-JKOY2XUY";
import * as t from "@angular/core";
import { InjectionToken as Z, inject as m, ComponentFactoryResolver as k, ApplicationRef as L, SecurityContext as z, Injector as G, signal as v, makeEnvironmentProviders as $ } from "@angular/core";
import { trigger as q, state as C, style as b, transition as H, animate as M } from "@angular/animations";
import { DOCUMENT as E, NgIf as N } from "@angular/common";
import { Subject as u } from "rxjs";
import * as j from "@angular/platform-browser";
var B = ["toast-component", ""];
function U(s, o) { if (s & 1) {
    let e = t.ɵɵgetCurrentView();
    t.ɵɵelementStart(0, "button", 5), t.ɵɵlistener("click", function () { t.ɵɵrestoreView(e); let n = t.ɵɵnextContext(); return t.ɵɵresetView(n.remove()); }), t.ɵɵelementStart(1, "span", 6), t.ɵɵtext(2, "\xD7"), t.ɵɵelementEnd()();
} }
function J(s, o) { if (s & 1 && (t.ɵɵelementContainerStart(0), t.ɵɵtext(1), t.ɵɵelementContainerEnd()), s & 2) {
    let e = t.ɵɵnextContext(2);
    t.ɵɵadvance(), t.ɵɵtextInterpolate1("[", e.duplicatesCount + 1, "]");
} }
function K(s, o) { if (s & 1 && (t.ɵɵelementStart(0, "div"), t.ɵɵtext(1), t.ɵɵtemplate(2, J, 2, 1, "ng-container", 4), t.ɵɵelementEnd()), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵclassMap(e.options.titleClass), t.ɵɵattribute("aria-label", e.title), t.ɵɵadvance(), t.ɵɵtextInterpolate1(" ", e.title, " "), t.ɵɵadvance(), t.ɵɵproperty("ngIf", e.duplicatesCount);
} }
function Q(s, o) { if (s & 1 && t.ɵɵelement(0, "div", 7), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵclassMap(e.options.messageClass), t.ɵɵproperty("innerHTML", e.message, t.ɵɵsanitizeHtml);
} }
function W(s, o) { if (s & 1 && (t.ɵɵelementStart(0, "div", 8), t.ɵɵtext(1), t.ɵɵelementEnd()), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵclassMap(e.options.messageClass), t.ɵɵattribute("aria-label", e.message), t.ɵɵadvance(), t.ɵɵtextInterpolate1(" ", e.message, " ");
} }
function X(s, o) { if (s & 1 && (t.ɵɵelementStart(0, "div"), t.ɵɵelement(1, "div", 9), t.ɵɵelementEnd()), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵadvance(), t.ɵɵstyleProp("width", e.width() + "%");
} }
function Y(s, o) { if (s & 1) {
    let e = t.ɵɵgetCurrentView();
    t.ɵɵelementStart(0, "button", 5), t.ɵɵlistener("click", function () { t.ɵɵrestoreView(e); let n = t.ɵɵnextContext(); return t.ɵɵresetView(n.remove()); }), t.ɵɵelementStart(1, "span", 6), t.ɵɵtext(2, "\xD7"), t.ɵɵelementEnd()();
} }
function tt(s, o) { if (s & 1 && (t.ɵɵelementContainerStart(0), t.ɵɵtext(1), t.ɵɵelementContainerEnd()), s & 2) {
    let e = t.ɵɵnextContext(2);
    t.ɵɵadvance(), t.ɵɵtextInterpolate1("[", e.duplicatesCount + 1, "]");
} }
function et(s, o) { if (s & 1 && (t.ɵɵelementStart(0, "div"), t.ɵɵtext(1), t.ɵɵtemplate(2, tt, 2, 1, "ng-container", 4), t.ɵɵelementEnd()), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵclassMap(e.options.titleClass), t.ɵɵattribute("aria-label", e.title), t.ɵɵadvance(), t.ɵɵtextInterpolate1(" ", e.title, " "), t.ɵɵadvance(), t.ɵɵproperty("ngIf", e.duplicatesCount);
} }
function it(s, o) { if (s & 1 && t.ɵɵelement(0, "div", 7), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵclassMap(e.options.messageClass), t.ɵɵproperty("innerHTML", e.message, t.ɵɵsanitizeHtml);
} }
function st(s, o) { if (s & 1 && (t.ɵɵelementStart(0, "div", 8), t.ɵɵtext(1), t.ɵɵelementEnd()), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵclassMap(e.options.messageClass), t.ɵɵattribute("aria-label", e.message), t.ɵɵadvance(), t.ɵɵtextInterpolate1(" ", e.message, " ");
} }
function nt(s, o) { if (s & 1 && (t.ɵɵelementStart(0, "div"), t.ɵɵelement(1, "div", 9), t.ɵɵelementEnd()), s & 2) {
    let e = t.ɵɵnextContext();
    t.ɵɵadvance(), t.ɵɵstyleProp("width", e.width() + "%");
} }
var xt = (() => { class s {
    el;
    constructor(e) { this.el = e; }
    getContainerElement() { return this.el.nativeElement; }
    static ɵfac = function (i) { return new (i || s)(t.ɵɵdirectiveInject(t.ElementRef)); };
    static ɵdir = t.ɵɵdefineDirective({ type: s, selectors: [["", "toastContainer", ""]], exportAs: ["toastContainer"] });
} return s; })(), y = class {
    _attachedHost;
    component;
    viewContainerRef;
    injector;
    constructor(o, e) { this.component = o, this.injector = e; }
    attach(o, e) { return this._attachedHost = o, o.attach(this, e); }
    detach() { let o = this._attachedHost; if (o)
        return this._attachedHost = void 0, o.detach(); }
    get isAttached() { return this._attachedHost != null; }
    setAttachedHost(o) { this._attachedHost = o; }
}, I = class {
    _attachedPortal;
    _disposeFn;
    attach(o, e) { return this._attachedPortal = o, this.attachComponentPortal(o, e); }
    detach() { this._attachedPortal && this._attachedPortal.setAttachedHost(), this._attachedPortal = void 0, this._disposeFn && (this._disposeFn(), this._disposeFn = void 0); }
    setDisposeFn(o) { this._disposeFn = o; }
}, w = class {
    _overlayRef;
    componentInstance;
    duplicatesCount = 0;
    _afterClosed = new u;
    _activate = new u;
    _manualClose = new u;
    _resetTimeout = new u;
    _countDuplicate = new u;
    constructor(o) { this._overlayRef = o; }
    manualClose() { this._manualClose.next(), this._manualClose.complete(); }
    manualClosed() { return this._manualClose.asObservable(); }
    timeoutReset() { return this._resetTimeout.asObservable(); }
    countDuplicate() { return this._countDuplicate.asObservable(); }
    close() { this._overlayRef.detach(), this._afterClosed.next(), this._manualClose.next(), this._afterClosed.complete(), this._manualClose.complete(), this._activate.complete(), this._resetTimeout.complete(), this._countDuplicate.complete(); }
    afterClosed() { return this._afterClosed.asObservable(); }
    isInactive() { return this._activate.isStopped; }
    activate() { this._activate.next(), this._activate.complete(); }
    afterActivate() { return this._activate.asObservable(); }
    onDuplicate(o, e) { o && this._resetTimeout.next(), e && this._countDuplicate.next(++this.duplicatesCount); }
}, d = class {
    toastId;
    config;
    message;
    title;
    toastType;
    toastRef;
    _onTap = new u;
    _onAction = new u;
    constructor(o, e, i, n, a, c) { this.toastId = o, this.config = e, this.message = i, this.title = n, this.toastType = a, this.toastRef = c, this.toastRef.afterClosed().subscribe(() => { this._onAction.complete(), this._onTap.complete(); }); }
    triggerTap() { this._onTap.next(), this.config.tapToDismiss && this._onTap.complete(); }
    onTap() { return this._onTap.asObservable(); }
    triggerAction(o) { this._onAction.next(o); }
    onAction() { return this._onAction.asObservable(); }
}, O = { maxOpened: 0, autoDismiss: !1, newestOnTop: !0, preventDuplicates: !1, countDuplicates: !1, resetTimeoutOnDuplicate: !1, includeTitleDuplicates: !1, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, closeButton: !1, disableTimeOut: !1, timeOut: 5e3, extendedTimeOut: 1e3, enableHtml: !1, progressBar: !1, toastClass: "ngx-toastr", positionClass: "toast-top-right", titleClass: "toast-title", messageClass: "toast-message", easing: "ease-in", easeTime: 300, tapToDismiss: !0, onActivateTick: !1, progressAnimation: "decreasing" }, g = new Z("ToastConfig"), x = class extends I {
    _hostDomElement;
    _componentFactoryResolver;
    _appRef;
    constructor(o, e, i) { super(), this._hostDomElement = o, this._componentFactoryResolver = e, this._appRef = i; }
    attachComponentPortal(o, e) { let i = this._componentFactoryResolver.resolveComponentFactory(o.component), n; return n = i.create(o.injector), this._appRef.attachView(n.hostView), this.setDisposeFn(() => { this._appRef.detachView(n.hostView), n.destroy(); }), e ? this._hostDomElement.insertBefore(this._getComponentRootNode(n), this._hostDomElement.firstChild) : this._hostDomElement.appendChild(this._getComponentRootNode(n)), n; }
    _getComponentRootNode(o) { return o.hostView.rootNodes[0]; }
}, ot = (() => { class s {
    _document = m(E);
    _containerElement;
    ngOnDestroy() { this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement); }
    getContainerElement() { return this._containerElement || this._createContainer(), this._containerElement; }
    _createContainer() { let e = this._document.createElement("div"); e.classList.add("overlay-container"), e.setAttribute("aria-live", "polite"), this._document.body.appendChild(e), this._containerElement = e; }
    static ɵfac = function (i) { return new (i || s); };
    static ɵprov = t.ɵɵdefineInjectable({ token: s, factory: s.ɵfac, providedIn: "root" });
} return s; })(), D = class {
    _portalHost;
    constructor(o) { this._portalHost = o; }
    attach(o, e = !0) { return this._portalHost.attach(o, e); }
    detach() { return this._portalHost.detach(); }
}, at = (() => { class s {
    _overlayContainer = m(ot);
    _componentFactoryResolver = m(k);
    _appRef = m(L);
    _document = m(E);
    _paneElements = new Map;
    create(e, i) { return this._createOverlayRef(this.getPaneElement(e, i)); }
    getPaneElement(e = "", i) { return this._paneElements.get(i) || this._paneElements.set(i, {}), this._paneElements.get(i)[e] || (this._paneElements.get(i)[e] = this._createPaneElement(e, i)), this._paneElements.get(i)[e]; }
    _createPaneElement(e, i) { let n = this._document.createElement("div"); return n.id = "toast-container", n.classList.add(e), n.classList.add("toast-container"), i ? i.getContainerElement().appendChild(n) : this._overlayContainer.getContainerElement().appendChild(n), n; }
    _createPortalHost(e) { return new x(e, this._componentFactoryResolver, this._appRef); }
    _createOverlayRef(e) { return new D(this._createPortalHost(e)); }
    static ɵfac = function (i) { return new (i || s); };
    static ɵprov = t.ɵɵdefineInjectable({ token: s, factory: s.ɵfac, providedIn: "root" });
} return s; })(), S = (() => { class s {
    overlay;
    _injector;
    sanitizer;
    ngZone;
    toastrConfig;
    currentlyActive = 0;
    toasts = [];
    overlayContainer;
    previousToastMessage;
    index = 0;
    constructor(e, i, n, a, c) { this.overlay = i, this._injector = n, this.sanitizer = a, this.ngZone = c, this.toastrConfig = r(r({}, e.default), e.config), e.config.iconClasses && (this.toastrConfig.iconClasses = r(r({}, e.default.iconClasses), e.config.iconClasses)); }
    show(e, i, n = {}, a = "") { return this._preBuildNotification(a, e, i, this.applyConfig(n)); }
    success(e, i, n = {}) { let a = this.toastrConfig.iconClasses.success || ""; return this._preBuildNotification(a, e, i, this.applyConfig(n)); }
    error(e, i, n = {}) { let a = this.toastrConfig.iconClasses.error || ""; return this._preBuildNotification(a, e, i, this.applyConfig(n)); }
    info(e, i, n = {}) { let a = this.toastrConfig.iconClasses.info || ""; return this._preBuildNotification(a, e, i, this.applyConfig(n)); }
    warning(e, i, n = {}) { let a = this.toastrConfig.iconClasses.warning || ""; return this._preBuildNotification(a, e, i, this.applyConfig(n)); }
    clear(e) { for (let i of this.toasts)
        if (e !== void 0) {
            if (i.toastId === e) {
                i.toastRef.manualClose();
                return;
            }
        }
        else
            i.toastRef.manualClose(); }
    remove(e) { let i = this._findToast(e); if (!i || (i.activeToast.toastRef.close(), this.toasts.splice(i.index, 1), this.currentlyActive = this.currentlyActive - 1, !this.toastrConfig.maxOpened || !this.toasts.length))
        return !1; if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
        let n = this.toasts[this.currentlyActive].toastRef;
        n.isInactive() || (this.currentlyActive = this.currentlyActive + 1, n.activate());
    } return !0; }
    findDuplicate(e = "", i = "", n, a) { let { includeTitleDuplicates: c } = this.toastrConfig; for (let l of this.toasts) {
        let f = c && l.title === e;
        if ((!c || f) && l.message === i)
            return l.toastRef.onDuplicate(n, a), l;
    } return null; }
    applyConfig(e = {}) { return r(r({}, this.toastrConfig), e); }
    _findToast(e) { for (let i = 0; i < this.toasts.length; i++)
        if (this.toasts[i].toastId === e)
            return { index: i, activeToast: this.toasts[i] }; return null; }
    _preBuildNotification(e, i, n, a) { return a.onActivateTick ? this.ngZone.run(() => this._buildNotification(e, i, n, a)) : this._buildNotification(e, i, n, a); }
    _buildNotification(e, i, n, a) { if (!a.toastComponent)
        throw new Error("toastComponent required"); let c = this.findDuplicate(n, i, this.toastrConfig.resetTimeoutOnDuplicate && a.timeOut > 0, this.toastrConfig.countDuplicates); if ((this.toastrConfig.includeTitleDuplicates && n || i) && this.toastrConfig.preventDuplicates && c !== null)
        return c; this.previousToastMessage = i; let l = !1; this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened && (l = !0, this.toastrConfig.autoDismiss && this.clear(this.toasts[0].toastId)); let f = this.overlay.create(a.positionClass, this.overlayContainer); this.index = this.index + 1; let A = i; i && a.enableHtml && (A = this.sanitizer.sanitize(z.HTML, i)); let p = new w(f), _ = new d(this.index, a, A, n, e, p), F = [{ provide: d, useValue: _ }], V = G.create({ providers: F, parent: this._injector }), P = new y(a.toastComponent, V), R = f.attach(P, a.newestOnTop); p.componentInstance = R.instance; let T = { toastId: this.index, title: n || "", message: i || "", toastRef: p, onShown: p.afterActivate(), onHidden: p.afterClosed(), onTap: _.onTap(), onAction: _.onAction(), portal: R }; return l || (this.currentlyActive = this.currentlyActive + 1, setTimeout(() => { T.toastRef.activate(); })), this.toasts.push(T), T; }
    static ɵfac = function (i) { return new (i || s)(t.ɵɵinject(g), t.ɵɵinject(at), t.ɵɵinject(t.Injector), t.ɵɵinject(j.DomSanitizer), t.ɵɵinject(t.NgZone)); };
    static ɵprov = t.ɵɵdefineInjectable({ token: s, factory: s.ɵfac, providedIn: "root" });
} return s; })(), rt = (() => { class s {
    toastrService;
    toastPackage;
    ngZone;
    message;
    title;
    options;
    duplicatesCount;
    originalTimeout;
    width = v(-1);
    toastClasses = "";
    state;
    get _state() { return this.state(); }
    get displayStyle() { if (this.state().value === "inactive")
        return "none"; }
    timeout;
    intervalId;
    hideTime;
    sub;
    sub1;
    sub2;
    sub3;
    constructor(e, i, n) { this.toastrService = e, this.toastPackage = i, this.ngZone = n, this.message = i.message, this.title = i.title, this.options = i.config, this.originalTimeout = i.config.timeOut, this.toastClasses = `${i.toastType} ${i.config.toastClass}`, this.sub = i.toastRef.afterActivate().subscribe(() => { this.activateToast(); }), this.sub1 = i.toastRef.manualClosed().subscribe(() => { this.remove(); }), this.sub2 = i.toastRef.timeoutReset().subscribe(() => { this.resetTimeout(); }), this.sub3 = i.toastRef.countDuplicate().subscribe(a => { this.duplicatesCount = a; }), this.state = v({ value: "inactive", params: { easeTime: this.toastPackage.config.easeTime, easing: "ease-in" } }); }
    ngOnDestroy() { this.sub.unsubscribe(), this.sub1.unsubscribe(), this.sub2.unsubscribe(), this.sub3.unsubscribe(), clearInterval(this.intervalId), clearTimeout(this.timeout); }
    activateToast() { this.state.update(e => h(r({}, e), { value: "active" })), !(this.options.disableTimeOut === !0 || this.options.disableTimeOut === "timeOut") && this.options.timeOut && (this.outsideTimeout(() => this.remove(), this.options.timeOut), this.hideTime = new Date().getTime() + this.options.timeOut, this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10)); }
    updateProgress() { if (this.width() === 0 || this.width() === 100 || !this.options.timeOut)
        return; let e = new Date().getTime(), i = this.hideTime - e; this.width.set(i / this.options.timeOut * 100), this.options.progressAnimation === "increasing" && this.width.update(n => 100 - n), this.width() <= 0 && this.width.set(0), this.width() >= 100 && this.width.set(100); }
    resetTimeout() { clearTimeout(this.timeout), clearInterval(this.intervalId), this.state.update(e => h(r({}, e), { value: "active" })), this.outsideTimeout(() => this.remove(), this.originalTimeout), this.options.timeOut = this.originalTimeout, this.hideTime = new Date().getTime() + (this.options.timeOut || 0), this.width.set(-1), this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10); }
    remove() { this.state().value !== "removed" && (clearTimeout(this.timeout), this.state.update(e => h(r({}, e), { value: "removed" })), this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime)); }
    tapToast() { this.state().value !== "removed" && (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove()); }
    stickAround() { this.state().value !== "removed" && this.options.disableTimeOut !== "extendedTimeOut" && (clearTimeout(this.timeout), this.options.timeOut = 0, this.hideTime = 0, clearInterval(this.intervalId), this.width.set(0)); }
    delayedHideToast() { this.options.disableTimeOut === !0 || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state().value === "removed" || (this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut), this.options.timeOut = this.options.extendedTimeOut, this.hideTime = new Date().getTime() + (this.options.timeOut || 0), this.width.set(-1), this.options.progressBar && this.outsideInterval(() => this.updateProgress(), 10)); }
    outsideTimeout(e, i) { this.ngZone ? this.ngZone.runOutsideAngular(() => this.timeout = setTimeout(() => this.runInsideAngular(e), i)) : this.timeout = setTimeout(() => e(), i); }
    outsideInterval(e, i) { this.ngZone ? this.ngZone.runOutsideAngular(() => this.intervalId = setInterval(() => this.runInsideAngular(e), i)) : this.intervalId = setInterval(() => e(), i); }
    runInsideAngular(e) { this.ngZone ? this.ngZone.run(() => e()) : e(); }
    static ɵfac = function (i) { return new (i || s)(t.ɵɵdirectiveInject(S), t.ɵɵdirectiveInject(d), t.ɵɵdirectiveInject(t.NgZone)); };
    static ɵcmp = t.ɵɵdefineComponent({ type: s, selectors: [["", "toast-component", ""]], hostVars: 5, hostBindings: function (i, n) { i & 1 && t.ɵɵlistener("click", function () { return n.tapToast(); })("mouseenter", function () { return n.stickAround(); })("mouseleave", function () { return n.delayedHideToast(); }), i & 2 && (t.ɵɵsyntheticHostProperty("@flyInOut", n._state), t.ɵɵclassMap(n.toastClasses), t.ɵɵstyleProp("display", n.displayStyle)); }, attrs: B, decls: 5, vars: 5, consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]], template: function (i, n) { i & 1 && t.ɵɵtemplate(0, U, 3, 0, "button", 0)(1, K, 3, 5, "div", 1)(2, Q, 1, 3, "div", 2)(3, W, 2, 4, "div", 3)(4, X, 2, 2, "div", 4), i & 2 && (t.ɵɵproperty("ngIf", n.options.closeButton), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.title), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.message && n.options.enableHtml), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.message && !n.options.enableHtml), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.options.progressBar)); }, dependencies: [N], encapsulation: 2, data: { animation: [q("flyInOut", [C("inactive", b({ opacity: 0 })), C("active", b({ opacity: 1 })), C("removed", b({ opacity: 0 })), H("inactive => active", M("{{ easeTime }}ms {{ easing }}")), H("active => removed", M("{{ easeTime }}ms {{ easing }}"))])] }, changeDetection: 0 });
} return s; })(), ct = h(r({}, O), { toastComponent: rt }), lt = (s = {}) => $([{ provide: g, useValue: { default: ct, config: s } }]), ut = (() => { class s {
    static forRoot(e = {}) { return { ngModule: s, providers: [lt(e)] }; }
    static ɵfac = function (i) { return new (i || s); };
    static ɵmod = t.ɵɵdefineNgModule({ type: s });
    static ɵinj = t.ɵɵdefineInjector({});
} return s; })(), Dt = (() => { class s {
    static forRoot(e = {}) { return { ngModule: ut, providers: [{ provide: g, useValue: { default: O, config: e } }] }; }
    static ɵfac = function (i) { return new (i || s); };
    static ɵmod = t.ɵɵdefineNgModule({ type: s });
    static ɵinj = t.ɵɵdefineInjector({});
} return s; })(), ht = (() => { class s {
    toastrService;
    toastPackage;
    appRef;
    message;
    title;
    options;
    duplicatesCount;
    originalTimeout;
    width = v(-1);
    toastClasses = "";
    get displayStyle() { return this.state() === "inactive" ? "none" : null; }
    state = v("inactive");
    timeout;
    intervalId;
    hideTime;
    sub;
    sub1;
    sub2;
    sub3;
    constructor(e, i, n) { this.toastrService = e, this.toastPackage = i, this.appRef = n, this.message = i.message, this.title = i.title, this.options = i.config, this.originalTimeout = i.config.timeOut, this.toastClasses = `${i.toastType} ${i.config.toastClass}`, this.sub = i.toastRef.afterActivate().subscribe(() => { this.activateToast(); }), this.sub1 = i.toastRef.manualClosed().subscribe(() => { this.remove(); }), this.sub2 = i.toastRef.timeoutReset().subscribe(() => { this.resetTimeout(); }), this.sub3 = i.toastRef.countDuplicate().subscribe(a => { this.duplicatesCount = a; }); }
    ngOnDestroy() { this.sub.unsubscribe(), this.sub1.unsubscribe(), this.sub2.unsubscribe(), this.sub3.unsubscribe(), clearInterval(this.intervalId), clearTimeout(this.timeout); }
    activateToast() { this.state.set("active"), !(this.options.disableTimeOut === !0 || this.options.disableTimeOut === "timeOut") && this.options.timeOut && (this.timeout = setTimeout(() => { this.remove(); }, this.options.timeOut), this.hideTime = new Date().getTime() + this.options.timeOut, this.options.progressBar && (this.intervalId = setInterval(() => this.updateProgress(), 10))), this.options.onActivateTick && this.appRef.tick(); }
    updateProgress() { if (this.width() === 0 || this.width() === 100 || !this.options.timeOut)
        return; let e = new Date().getTime(), i = this.hideTime - e; this.width.set(i / this.options.timeOut * 100), this.options.progressAnimation === "increasing" && this.width.update(n => 100 - n), this.width() <= 0 && this.width.set(0), this.width() >= 100 && this.width.set(100); }
    resetTimeout() { clearTimeout(this.timeout), clearInterval(this.intervalId), this.state.set("active"), this.options.timeOut = this.originalTimeout, this.timeout = setTimeout(() => this.remove(), this.originalTimeout), this.hideTime = new Date().getTime() + (this.originalTimeout || 0), this.width.set(-1), this.options.progressBar && (this.intervalId = setInterval(() => this.updateProgress(), 10)); }
    remove() { this.state() !== "removed" && (clearTimeout(this.timeout), this.state.set("removed"), this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId))); }
    tapToast() { this.state() !== "removed" && (this.toastPackage.triggerTap(), this.options.tapToDismiss && this.remove()); }
    stickAround() { this.state() !== "removed" && (clearTimeout(this.timeout), this.options.timeOut = 0, this.hideTime = 0, clearInterval(this.intervalId), this.width.set(0)); }
    delayedHideToast() { this.options.disableTimeOut === !0 || this.options.disableTimeOut === "extendedTimeOut" || this.options.extendedTimeOut === 0 || this.state() === "removed" || (this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut), this.options.timeOut = this.options.extendedTimeOut, this.hideTime = new Date().getTime() + (this.options.timeOut || 0), this.width.set(-1), this.options.progressBar && (this.intervalId = setInterval(() => this.updateProgress(), 10))); }
    static ɵfac = function (i) { return new (i || s)(t.ɵɵdirectiveInject(S), t.ɵɵdirectiveInject(d), t.ɵɵdirectiveInject(t.ApplicationRef)); };
    static ɵcmp = t.ɵɵdefineComponent({ type: s, selectors: [["", "toast-component", ""]], hostVars: 4, hostBindings: function (i, n) { i & 1 && t.ɵɵlistener("click", function () { return n.tapToast(); })("mouseenter", function () { return n.stickAround(); })("mouseleave", function () { return n.delayedHideToast(); }), i & 2 && (t.ɵɵclassMap(n.toastClasses), t.ɵɵstyleProp("display", n.displayStyle)); }, attrs: B, decls: 5, vars: 5, consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]], template: function (i, n) { i & 1 && t.ɵɵtemplate(0, Y, 3, 0, "button", 0)(1, et, 3, 5, "div", 1)(2, it, 1, 3, "div", 2)(3, st, 2, 4, "div", 3)(4, nt, 2, 2, "div", 4), i & 2 && (t.ɵɵproperty("ngIf", n.options.closeButton), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.title), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.message && n.options.enableHtml), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.message && !n.options.enableHtml), t.ɵɵadvance(), t.ɵɵproperty("ngIf", n.options.progressBar)); }, dependencies: [N], encapsulation: 2, changeDetection: 0 });
} return s; })(), dt = h(r({}, O), { toastComponent: ht }), Ot = (() => { class s {
    static forRoot(e = {}) { return { ngModule: s, providers: [{ provide: g, useValue: { default: dt, config: e } }] }; }
    static ɵfac = function (i) { return new (i || s); };
    static ɵmod = t.ɵɵdefineNgModule({ type: s });
    static ɵinj = t.ɵɵdefineInjector({});
} return s; })();
export { I as BasePortalHost, y as ComponentPortal, ct as DefaultGlobalConfig, dt as DefaultNoAnimationsGlobalConfig, O as DefaultNoComponentGlobalConfig, at as Overlay, ot as OverlayContainer, D as OverlayRef, g as TOAST_CONFIG, rt as Toast, xt as ToastContainerDirective, ht as ToastNoAnimation, Ot as ToastNoAnimationModule, d as ToastPackage, w as ToastRef, Dt as ToastrComponentlessModule, ut as ToastrModule, S as ToastrService, lt as provideToastr };
