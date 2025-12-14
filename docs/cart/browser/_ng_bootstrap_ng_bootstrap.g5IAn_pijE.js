import { a as Ft, b as xt, c as Bt, d as Vt, e as Lt } from "@nf-internal/chunk-FT25MRJC";
import { a as F, b as ke } from "@nf-internal/chunk-JKOY2XUY";
import * as n from "@angular/core";
import { inject as c, ElementRef as S, NgZone as A, EventEmitter as g, TemplateRef as k, ViewContainerRef as Dt, ChangeDetectorRef as x, DestroyRef as se, PLATFORM_ID as ti, Injector as M, afterNextRender as U, LOCALE_ID as ii, forwardRef as te, DOCUMENT as B, afterEveryRender as Ee, ApplicationRef as wt, EnvironmentInjector as Gt, createComponent as de, InjectionToken as Zi } from "@angular/core";
import { takeUntilDestroyed as L } from "@angular/core/rxjs-interop";
import { Observable as zi, EMPTY as lt, of as Me, Subject as b, fromEvent as I, timer as ni, race as si, BehaviorSubject as Y, combineLatest as Ht, NEVER as Qi, zip as De, merge as Yi } from "rxjs";
import { endWith as qi, takeUntil as N, filter as $, map as K, startWith as ct, distinctUntilChanged as $e, switchMap as Tt, take as we, tap as qe, withLatestFrom as dt, delay as Xi, mergeMap as en, skip as tn, finalize as nn } from "rxjs/operators";
import { isPlatformBrowser as oi, NgTemplateOutlet as Z, formatDate as ht, PercentPipe as sn } from "@angular/common";
import { NG_VALUE_ACCESSOR as Ae, NG_VALIDATORS as on } from "@angular/forms";
var an = ["container"], rn = ["ngbAccordionBody", ""], z = ["*"];
function ln(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 1), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.close()); }), n.\u0275\u0275domElementEnd();
} }
function cn(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "button", 7), n.\u0275\u0275listener("click", function () { let i = n.\u0275\u0275restoreView(a).$implicit, o = n.\u0275\u0275nextContext(); return o.focus(), n.\u0275\u0275resetView(o.select(i.id, o.NgbSlideEventSource.INDICATOR)); }), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275classProp("active", a.id === e.activeId), n.\u0275\u0275attribute("aria-labelledby", "slide-" + a.id)("aria-controls", "slide-" + a.id)("aria-selected", a.id === e.activeId);
} }
function dn(s, t) { }
function hn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 6)(1, "span", 8), n.\u0275\u0275i18n(2, 0), n.\u0275\u0275elementEnd(), n.\u0275\u0275template(3, dn, 0, 0, "ng-template", 9), n.\u0275\u0275elementEnd()), s & 2) {
    let a = t.$implicit, e = t.$index, i = t.$count;
    n.\u0275\u0275property("id", "slide-" + a.id), n.\u0275\u0275advance(2), n.\u0275\u0275i18nExp(e + 1)(i), n.\u0275\u0275i18nApply(2), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", a.templateRef);
} }
function un(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "button", 10), n.\u0275\u0275listener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.arrowLeft()); }), n.\u0275\u0275element(1, "span", 11), n.\u0275\u0275elementStart(2, "span", 12), n.\u0275\u0275i18n(3, 1), n.\u0275\u0275elementEnd()(), n.\u0275\u0275elementStart(4, "button", 13), n.\u0275\u0275listener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.arrowRight()); }), n.\u0275\u0275element(5, "span", 14), n.\u0275\u0275elementStart(6, "span", 12), n.\u0275\u0275i18n(7, 2), n.\u0275\u0275elementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275attribute("aria-labelledby", a.id + "-previous"), n.\u0275\u0275advance(2), n.\u0275\u0275property("id", a.id + "-previous"), n.\u0275\u0275advance(2), n.\u0275\u0275attribute("aria-labelledby", a.id + "-next"), n.\u0275\u0275advance(2), n.\u0275\u0275property("id", a.id + "-next");
} }
var _n = ["ngbDatepickerDayView", ""], pn = ["month"], fn = ["year"];
function gn(s, t) { if (s & 1 && (n.\u0275\u0275domElementStart(0, "option", 3), n.\u0275\u0275text(1), n.\u0275\u0275domElementEnd()), s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275domProperty("value", a), n.\u0275\u0275attribute("aria-label", e.i18n.getMonthFullName(a, e.date.year)), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(e.i18n.getMonthShortName(a, e.date.year));
} }
function mn(s, t) { if (s & 1 && (n.\u0275\u0275domElementStart(0, "option", 3), n.\u0275\u0275text(1), n.\u0275\u0275domElementEnd()), s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275domProperty("value", a), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(e.i18n.getYearNumerals(a));
} }
function ai(s, t) { return this.idMonth(t); }
function yn(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "ngb-datepicker-navigation-select", 7), n.\u0275\u0275listener("select", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.select.emit(i)); }), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275property("date", a.date)("disabled", a.disabled)("months", a.selectBoxes.months)("years", a.selectBoxes.years);
} }
function vn(s, t) { s & 1 && n.\u0275\u0275element(0, "div", 8); }
function bn(s, t) { s & 1 && n.\u0275\u0275element(0, "div", 8); }
function Dn(s, t) { if (s & 1 && (n.\u0275\u0275conditionalCreate(0, vn, 1, 0, "div", 8), n.\u0275\u0275elementStart(1, "div", 9), n.\u0275\u0275text(2), n.\u0275\u0275elementEnd(), n.\u0275\u0275conditionalCreate(3, bn, 1, 0, "div", 8)), s & 2) {
    let a = t.$implicit, e = t.$index, i = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275conditional(e > 0 ? 0 : -1), n.\u0275\u0275advance(2), n.\u0275\u0275textInterpolate1(" ", i.i18n.getMonthLabel(a.firstDate), " "), n.\u0275\u0275advance(), n.\u0275\u0275conditional(e !== i.months.length - 1 ? 3 : -1);
} }
function wn(s, t) { if (s & 1 && n.\u0275\u0275repeaterCreate(0, Dn, 4, 3, null, null, ai, !0), s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275repeater(a.months);
} }
function Tn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "span"), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(e.i18n.getMonthLabel(a.firstDate));
} }
function Sn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 1), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(a.i18n.getWeekLabel());
} }
function On(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 2), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = t.$implicit;
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(a);
} }
function Cn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 0), n.\u0275\u0275conditionalCreate(1, Sn, 2, 1, "div", 1), n.\u0275\u0275repeaterCreate(2, On, 2, 1, "div", 2, n.\u0275\u0275repeaterTrackByIndex), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275conditional(a.datepicker.showWeekNumbers ? 1 : -1), n.\u0275\u0275advance(), n.\u0275\u0275repeater(a.viewModel.weekdays);
} }
function En(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 4), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext(2).$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(e.i18n.getWeekNumerals(a.number));
} }
function Mn(s, t) { }
function An(s, t) { if (s & 1 && n.\u0275\u0275template(0, Mn, 0, 0, "ng-template", 7), s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit, e = n.\u0275\u0275nextContext(3);
    n.\u0275\u0275property("ngTemplateOutlet", e.datepicker.dayTemplate)("ngTemplateOutletContext", a.context);
} }
function Rn(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "div", 6), n.\u0275\u0275listener("click", function (i) { let o = n.\u0275\u0275restoreView(a).$implicit; return n.\u0275\u0275nextContext(3).doSelect(o), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275conditionalCreate(1, An, 1, 2, null, 7), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = t.$implicit;
    n.\u0275\u0275classProp("disabled", a.context.disabled)("hidden", a.hidden)("ngb-dp-today", a.context.today), n.\u0275\u0275property("tabindex", a.tabindex), n.\u0275\u0275attribute("aria-label", a.ariaLabel)("aria-disabled", a.context.disabled)("aria-selected", a.context.selected), n.\u0275\u0275advance(), n.\u0275\u0275conditional(a.hidden ? -1 : 1);
} }
function Nn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 3), n.\u0275\u0275conditionalCreate(1, En, 2, 1, "div", 4), n.\u0275\u0275repeaterCreate(2, Rn, 2, 11, "div", 5, n.\u0275\u0275repeaterTrackByIdentity), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275conditional(e.datepicker.showWeekNumbers ? 1 : -1), n.\u0275\u0275advance(), n.\u0275\u0275repeater(a.days);
} }
function Pn(s, t) { if (s & 1 && n.\u0275\u0275conditionalCreate(0, Nn, 4, 1, "div", 3), s & 2) {
    let a = t.$implicit;
    n.\u0275\u0275conditional(a.collapsed ? -1 : 0);
} }
var In = ["defaultDayTemplate"], kn = ["content"], ri = s => ({ $implicit: s });
function Fn(s, t) { if (s & 1 && n.\u0275\u0275element(0, "div", 8), s & 2) {
    let a = t.date, e = t.currentMonth, i = t.selected, o = t.disabled, r = t.focused;
    n.\u0275\u0275property("date", a)("currentMonth", e)("selected", i)("disabled", o)("focused", r);
} }
function xn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 10), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit, e = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1(" ", e.i18n.getMonthLabel(a.firstDate), " ");
} }
function Bn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 9), n.\u0275\u0275conditionalCreate(1, xn, 2, 1, "div", 10), n.\u0275\u0275element(2, "ngb-datepicker-month", 11), n.\u0275\u0275elementEnd()), s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275advance(), n.\u0275\u0275conditional(e.navigation === "none" || e.displayMonths > 1 && e.navigation === "select" ? 1 : -1), n.\u0275\u0275advance(), n.\u0275\u0275property("month", a.firstDate);
} }
function Vn(s, t) { if (s & 1 && n.\u0275\u0275repeaterCreate(0, Bn, 3, 2, "div", 9, n.\u0275\u0275repeaterTrackByIdentity), s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275repeater(a.model.months);
} }
function Ln(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "ngb-datepicker-navigation", 12), n.\u0275\u0275listener("navigate", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.onNavigateEvent(i)); })("select", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.onNavigateDateSelect(i)); }), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275property("date", a.model.firstDate)("months", a.model.months)("disabled", a.model.disabled)("showSelect", a.model.navigation === "select")("prevDisabled", a.model.prevDisabled)("nextDisabled", a.model.nextDisabled)("selectBoxes", a.model.selectBoxes);
} }
function Gn(s, t) { }
function Hn(s, t) { }
var Jn = ["dialog"], $n = ["ngbNavOutlet", ""];
function jn(s, t) { }
function Wn(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "div", 0), n.\u0275\u0275template(1, jn, 0, 0, "ng-template", 1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275property("item", a)("nav", e.nav)("role", e.paneRole), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (a.contentTpl == null ? null : a.contentTpl.templateRef) || null)("ngTemplateOutletContext", n.\u0275\u0275pureFunction1(5, ri, a.active || e.isPanelTransitioning(a)));
} }
function Kn(s, t) { if (s & 1 && n.\u0275\u0275conditionalCreate(0, Wn, 2, 7, "div", 0), s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275conditional(a.isPanelInDom() || e.isPanelTransitioning(a) ? 0 : -1);
} }
var Un = (s, t, a) => ({ $implicit: s, pages: t, disabled: a }), Zn = s => ({ disabled: !0, currentPage: s }), zn = (s, t, a) => ({ disabled: s, $implicit: t, currentPage: a }), St = (s, t) => ({ disabled: s, currentPage: t }), Qn = s => ({ disabled: s });
function Yn(s, t) { s & 1 && (n.\u0275\u0275elementStart(0, "span", 13), n.\u0275\u0275i18n(1, 7), n.\u0275\u0275elementEnd()); }
function qn(s, t) { s & 1 && (n.\u0275\u0275elementStart(0, "span", 13), n.\u0275\u0275i18n(1, 8), n.\u0275\u0275elementEnd()); }
function Xn(s, t) { s & 1 && (n.\u0275\u0275elementStart(0, "span", 13), n.\u0275\u0275i18n(1, 9), n.\u0275\u0275elementEnd()); }
function es(s, t) { s & 1 && (n.\u0275\u0275elementStart(0, "span", 13), n.\u0275\u0275i18n(1, 10), n.\u0275\u0275elementEnd()); }
function ts(s, t) { s & 1 && n.\u0275\u0275text(0, "..."); }
function is(s, t) { if (s & 1 && n.\u0275\u0275text(0), s & 2) {
    let a = t.$implicit;
    n.\u0275\u0275textInterpolate(a);
} }
function ns(s, t) { }
function ss(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "a", 16), n.\u0275\u0275template(1, ns, 0, 0, "ng-template", 12), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext(2).$implicit, e = n.\u0275\u0275nextContext(), i = n.\u0275\u0275reference(9);
    n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (e.tplEllipsis == null ? null : e.tplEllipsis.templateRef) || i)("ngTemplateOutletContext", n.\u0275\u0275pureFunction1(2, Zn, a));
} }
function os(s, t) { }
function as(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "a", 18), n.\u0275\u0275listener("click", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext().$implicit; return n.\u0275\u0275nextContext(2).selectPage(o), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275template(1, os, 0, 0, "ng-template", 12), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit, e = n.\u0275\u0275nextContext(), i = e.$implicit, o = e.disabled, r = n.\u0275\u0275nextContext(), l = n.\u0275\u0275reference(11);
    n.\u0275\u0275attribute("tabindex", o ? "-1" : null)("aria-disabled", o ? "true" : null)("aria-current", a === i ? "page" : null), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (r.tplNumber == null ? null : r.tplNumber.templateRef) || l)("ngTemplateOutletContext", n.\u0275\u0275pureFunction3(5, zn, o, a, i));
} }
function rs(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "li", 15), n.\u0275\u0275conditionalCreate(1, ss, 2, 4, "a", 16)(2, as, 2, 9, "a", 17), n.\u0275\u0275elementEnd()), s & 2) {
    let a = t.$implicit, e = n.\u0275\u0275nextContext(), i = e.$implicit, o = e.disabled, r = n.\u0275\u0275nextContext();
    n.\u0275\u0275classProp("active", a === i)("disabled", r.isEllipsis(a) || o), n.\u0275\u0275advance(), n.\u0275\u0275conditional(r.isEllipsis(a) ? 1 : 2);
} }
function ls(s, t) { if (s & 1 && n.\u0275\u0275repeaterCreate(0, rs, 3, 5, "li", 14, n.\u0275\u0275repeaterTrackByIndex), s & 2) {
    let a = t.pages;
    n.\u0275\u0275repeater(a);
} }
function cs(s, t) { }
function ds(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "li", 15)(1, "a", 19), n.\u0275\u0275listener("click", function (i) { return n.\u0275\u0275restoreView(a), n.\u0275\u0275nextContext().selectPage(1), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275template(2, cs, 0, 0, "ng-template", 12), n.\u0275\u0275elementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(), e = n.\u0275\u0275reference(1);
    n.\u0275\u0275classProp("disabled", a.previousDisabled()), n.\u0275\u0275advance(), n.\u0275\u0275attribute("tabindex", a.previousDisabled() ? "-1" : null)("aria-disabled", a.previousDisabled() ? "true" : null), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (a.tplFirst == null ? null : a.tplFirst.templateRef) || e)("ngTemplateOutletContext", n.\u0275\u0275pureFunction2(6, St, a.previousDisabled(), a.page));
} }
function hs(s, t) { }
function us(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "li", 15)(1, "a", 20), n.\u0275\u0275listener("click", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return o.selectPage(o.page - 1), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275template(2, hs, 0, 0, "ng-template", 12), n.\u0275\u0275elementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(), e = n.\u0275\u0275reference(3);
    n.\u0275\u0275classProp("disabled", a.previousDisabled()), n.\u0275\u0275advance(), n.\u0275\u0275attribute("tabindex", a.previousDisabled() ? "-1" : null)("aria-disabled", a.previousDisabled() ? "true" : null), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (a.tplPrevious == null ? null : a.tplPrevious.templateRef) || e)("ngTemplateOutletContext", n.\u0275\u0275pureFunction1(6, Qn, a.previousDisabled()));
} }
function _s(s, t) { }
function ps(s, t) { }
function fs(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "li", 15)(1, "a", 21), n.\u0275\u0275listener("click", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return o.selectPage(o.page + 1), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275template(2, ps, 0, 0, "ng-template", 12), n.\u0275\u0275elementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(), e = n.\u0275\u0275reference(5);
    n.\u0275\u0275classProp("disabled", a.nextDisabled()), n.\u0275\u0275advance(), n.\u0275\u0275attribute("tabindex", a.nextDisabled() ? "-1" : null)("aria-disabled", a.nextDisabled() ? "true" : null), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (a.tplNext == null ? null : a.tplNext.templateRef) || e)("ngTemplateOutletContext", n.\u0275\u0275pureFunction2(6, St, a.nextDisabled(), a.page));
} }
function gs(s, t) { }
function ms(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "li", 15)(1, "a", 22), n.\u0275\u0275listener("click", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return o.selectPage(o.pageCount), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275template(2, gs, 0, 0, "ng-template", 12), n.\u0275\u0275elementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(), e = n.\u0275\u0275reference(7);
    n.\u0275\u0275classProp("disabled", a.nextDisabled()), n.\u0275\u0275advance(), n.\u0275\u0275attribute("tabindex", a.nextDisabled() ? "-1" : null)("aria-disabled", a.nextDisabled() ? "true" : null), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (a.tplLast == null ? null : a.tplLast.templateRef) || e)("ngTemplateOutletContext", n.\u0275\u0275pureFunction2(6, St, a.nextDisabled(), a.page));
} }
function ys(s, t) { if (s & 1 && n.\u0275\u0275text(0), s & 2) {
    let a = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275textInterpolate(a.title);
} }
function vs(s, t) { }
function bs(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "h3", 2), n.\u0275\u0275template(1, ys, 1, 1, "ng-template", null, 0, n.\u0275\u0275templateRefExtractor)(3, vs, 0, 0, "ng-template", 4), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275reference(2), e = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(3), n.\u0275\u0275property("ngTemplateOutlet", e.isTitleTemplate() ? e.title : a)("ngTemplateOutletContext", e.context);
} }
function Ds(s, t) { if (s & 1 && (n.\u0275\u0275domElementStart(0, "span"), n.\u0275\u0275i18n(1, 0), n.\u0275\u0275pipe(2, "percent"), n.\u0275\u0275domElementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(2), n.\u0275\u0275i18nExp(n.\u0275\u0275pipeBind1(2, 1, a.getValue() / a.max)), n.\u0275\u0275i18nApply(1);
} }
function ws(s, t) { if (s & 1 && n.\u0275\u0275text(0), s & 2) {
    let a = t.fill;
    n.\u0275\u0275textInterpolate(a === 100 ? "\u2605" : "\u2606");
} }
function Ts(s, t) { }
function Ss(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "span", 1), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(2, "span", 2), n.\u0275\u0275listener("mouseenter", function () { let i = n.\u0275\u0275restoreView(a).$index, o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.enter(i + 1)); })("click", function () { let i = n.\u0275\u0275restoreView(a).$index, o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.handleClick(i + 1)); }), n.\u0275\u0275template(3, Ts, 0, 0, "ng-template", 3), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = t.$index, e = n.\u0275\u0275nextContext(), i = n.\u0275\u0275reference(1);
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate1("(", a < e.nextRate ? "*" : " ", ")"), n.\u0275\u0275advance(), n.\u0275\u0275styleProp("cursor", e.isInteractive() ? "pointer" : "default"), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", e.starTemplate || e.starTemplateFromContent || i)("ngTemplateOutletContext", e.contexts[a]);
} }
function Os(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 15), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.changeHour(i.hourStep)); }), n.\u0275\u0275domElement(1, "span", 16), n.\u0275\u0275domElementStart(2, "span", 17), n.\u0275\u0275i18n(3, 0), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled);
} }
function Cs(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 15), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.changeHour(-i.hourStep)); }), n.\u0275\u0275domElement(1, "span", 18), n.\u0275\u0275domElementStart(2, "span", 17), n.\u0275\u0275i18n(3, 1), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled);
} }
function Es(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 15), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.changeMinute(i.minuteStep)); }), n.\u0275\u0275domElement(1, "span", 16), n.\u0275\u0275domElementStart(2, "span", 17), n.\u0275\u0275i18n(3, 2), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled);
} }
function Ms(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 15), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.changeMinute(-i.minuteStep)); }), n.\u0275\u0275domElement(1, "span", 18), n.\u0275\u0275domElementStart(2, "span", 17), n.\u0275\u0275i18n(3, 3), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled);
} }
function As(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 15), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(2); return n.\u0275\u0275resetView(i.changeSecond(i.secondStep)); }), n.\u0275\u0275domElement(1, "span", 16), n.\u0275\u0275domElementStart(2, "span", 17), n.\u0275\u0275i18n(3, 4), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled);
} }
function Rs(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "button", 15), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(2); return n.\u0275\u0275resetView(i.changeSecond(-i.secondStep)); }), n.\u0275\u0275domElement(1, "span", 18), n.\u0275\u0275domElementStart(2, "span", 17), n.\u0275\u0275i18n(3, 5), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled);
} }
function Ns(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElementStart(0, "div", 12), n.\u0275\u0275text(1, ":"), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(2, "div", 19), n.\u0275\u0275conditionalCreate(3, As, 4, 7, "button", 10), n.\u0275\u0275domElementStart(4, "input", 20), n.\u0275\u0275domListener("change", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.updateSecond(i.target.value)); })("blur", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.handleBlur()); })("input", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.formatInput(i.target)); })("keydown.ArrowUp", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return o.changeSecond(o.secondStep), n.\u0275\u0275resetView(i.preventDefault()); })("keydown.ArrowDown", function (i) { n.\u0275\u0275restoreView(a); let o = n.\u0275\u0275nextContext(); return o.changeSecond(-o.secondStep), n.\u0275\u0275resetView(i.preventDefault()); }), n.\u0275\u0275domElementEnd(), n.\u0275\u0275conditionalCreate(5, Rs, 4, 7, "button", 10), n.\u0275\u0275domElementEnd();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(3), n.\u0275\u0275conditional(a.spinners ? 3 : -1), n.\u0275\u0275advance(), n.\u0275\u0275classProp("form-control-sm", a.isSmallSize)("form-control-lg", a.isLargeSize), n.\u0275\u0275domProperty("value", a.formatMinSec(a.model == null ? null : a.model.second))("readOnly", a.readonlyInputs)("disabled", a.disabled), n.\u0275\u0275advance(), n.\u0275\u0275conditional(a.spinners ? 5 : -1);
} }
function Ps(s, t) { if (s & 1 && (n.\u0275\u0275domElementContainerStart(0), n.\u0275\u0275i18n(1, 6), n.\u0275\u0275domElementContainerEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275advance(), n.\u0275\u0275i18nExp(a.i18n.getAfternoonPeriod()), n.\u0275\u0275i18nApply(1);
} }
function Is(s, t) { if (s & 1 && (n.\u0275\u0275domElementContainerStart(0), n.\u0275\u0275text(1), n.\u0275\u0275domElementContainerEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext(2);
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(a.i18n.getMorningPeriod());
} }
function ks(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275domElement(0, "div", 12), n.\u0275\u0275domElementStart(1, "div", 21)(2, "button", 22), n.\u0275\u0275domListener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.toggleMeridian()); }), n.\u0275\u0275conditionalCreate(3, Ps, 2, 1, "ng-container")(4, Is, 2, 1, "ng-container"), n.\u0275\u0275domElementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(2), n.\u0275\u0275classProp("btn-sm", a.isSmallSize)("btn-lg", a.isLargeSize)("disabled", a.disabled), n.\u0275\u0275domProperty("disabled", a.disabled), n.\u0275\u0275advance(), n.\u0275\u0275conditional(a.model && a.model.hour >= 12 ? 3 : 4);
} }
function Fs(s, t) { if (s & 1 && (n.\u0275\u0275elementStart(0, "strong", 3), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(a.header);
} }
function xs(s, t) { }
function Bs(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "div", 1), n.\u0275\u0275template(1, xs, 0, 0, "ng-template", 4), n.\u0275\u0275elementStart(2, "button", 5), n.\u0275\u0275listener("click", function () { n.\u0275\u0275restoreView(a); let i = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(i.hide()); }), n.\u0275\u0275elementEnd()();
} if (s & 2) {
    let a = n.\u0275\u0275nextContext(), e = n.\u0275\u0275reference(1);
    n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", a.contentHeaderTpl || e);
} }
function Vs(s, t) { if (s & 1 && (n.\u0275\u0275domElementStart(0, "span"), n.\u0275\u0275text(1), n.\u0275\u0275domElementEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit, e = n.\u0275\u0275nextContext();
    n.\u0275\u0275classMap(e.highlightClass), n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(a);
} }
function Ls(s, t) { if (s & 1 && (n.\u0275\u0275domElementContainerStart(0), n.\u0275\u0275text(1), n.\u0275\u0275domElementContainerEnd()), s & 2) {
    let a = n.\u0275\u0275nextContext().$implicit;
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(a);
} }
function Gs(s, t) { if (s & 1 && n.\u0275\u0275conditionalCreate(0, Vs, 2, 3, "span", 0)(1, Ls, 2, 1, "ng-container"), s & 2) {
    let a = t.$index;
    n.\u0275\u0275conditional(a % 2 !== 0 ? 0 : 1);
} }
var Hs = (s, t, a) => ({ result: s, term: t, formatter: a });
function Js(s, t) { if (s & 1 && n.\u0275\u0275element(0, "ngb-highlight", 2), s & 2) {
    let a = t.result, e = t.term, i = t.formatter;
    n.\u0275\u0275property("result", i(a))("term", e);
} }
function $s(s, t) { }
function js(s, t) { if (s & 1) {
    let a = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "button", 3), n.\u0275\u0275listener("mouseenter", function () { let i = n.\u0275\u0275restoreView(a).$index, o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.markActive(i)); })("click", function () { let i = n.\u0275\u0275restoreView(a).$implicit, o = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(o.select(i)); }), n.\u0275\u0275template(1, $s, 0, 0, "ng-template", 4), n.\u0275\u0275elementEnd();
} if (s & 2) {
    let a = t.$implicit, e = t.$index, i = n.\u0275\u0275nextContext(), o = n.\u0275\u0275reference(1);
    n.\u0275\u0275classProp("active", e === i.activeIdx), n.\u0275\u0275property("id", i.id + "-" + e), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", i.resultTemplate || o)("ngTemplateOutletContext", n.\u0275\u0275pureFunction3(5, Hs, a, i.term, i.formatter));
} }
var li = { animation: !0, transitionTimerDelayMs: 5 }, W = (() => { let t = class t {
    constructor() { this.animation = li.animation; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ws = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.closeOthers = !1, this.destroyOnHide = !0; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })();
function Ks(s) { let { transitionDelay: t, transitionDuration: a } = window.getComputedStyle(s), e = parseFloat(t), i = parseFloat(a); return (e + i) * 1e3; }
function P(s) { return parseInt(`${s}`, 10); }
function Te(s) { return s != null ? `${s}` : ""; }
function je(s, t, a = 0) { return Math.max(Math.min(s, t), a); }
function j(s) { return typeof s == "string"; }
function v(s) { return !isNaN(P(s)); }
function m(s) { return typeof s == "number" && isFinite(s) && Math.floor(s) === s; }
function H(s) { return s != null; }
function ci(s) { return s && s.then; }
function ae(s) { return v(s) ? `0${s}`.slice(-2) : ""; }
function Us(s) { return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }
function Zs(s, t) { return !t || typeof s.closest > "u" ? null : s.closest(t); }
function X(s) { return (s || document.body).getBoundingClientRect(); }
function zs(s) { return t => new zi(a => { let e = r => s.run(() => a.next(r)), i = r => s.run(() => a.error(r)), o = () => s.run(() => a.complete()); return t.subscribe({ next: e, error: i, complete: o }); }); }
function Jt(s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function di(s = document) { let t = s?.activeElement; return t ? t.shadowRoot ? di(t.shadowRoot) : t : null; }
var Qs = () => { }, { transitionTimerDelayMs: Ys } = li, ye = new Map, E = (s, t, a, e) => { let i = e.context || {}, o = ye.get(t); if (o)
    switch (e.runningTransition) {
        case "continue": return lt;
        case "stop": s.run(() => o.transition$.complete()), i = Object.assign(o.context, i), ye.delete(t);
    } let r = a(t, e.animation, i) || Qs; if (!e.animation || window.getComputedStyle(t).transitionProperty === "none")
    return s.run(() => r()), Me(void 0).pipe(zs(s)); let l = new b, d = new b, h = l.pipe(qi(!0)); ye.set(t, { transition$: l, complete: () => { d.next(), d.complete(); }, context: i }); let u = Ks(t); return s.runOutsideAngular(() => { let _ = I(t, "transitionend").pipe(N(h), $(({ target: f }) => f === t)), p = ni(u + Ys).pipe(N(h)); si(p, _, d).pipe(N(h)).subscribe(() => { ye.delete(t), s.run(() => { r(), l.next(), l.complete(); }); }); }), l.asObservable(); }, Se = s => { ye.get(s)?.complete(); };
function qs(s, t) { if (typeof navigator > "u")
    return "0px"; let { classList: a } = s, e = a.contains("show"); e || a.add("show"), s.style[t] = ""; let i = s.getBoundingClientRect()[t] + "px"; return e || a.remove("show"), i; }
var Xs = (s, t, a) => { let { direction: e, maxSize: i, dimension: o } = a, { classList: r } = s; function l() { r.add("collapse"), e === "show" ? r.add("show") : r.remove("show"); } if (!t) {
    l();
    return;
} return i || (i = qs(s, o), a.maxSize = i, s.style[o] = e !== "show" ? i : "0px", r.remove("collapse", "collapsing", "show"), X(s), r.add("collapsing")), s.style[o] = e === "show" ? i : "0px", () => { l(), r.remove("collapsing"), s.style[o] = ""; }; }, eo = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.horizontal = !1; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), $t = (() => { let t = class t {
    constructor() { this._config = c(eo), this._element = c(S), this._zone = c(A), this.animation = this._config.animation, this._afterInit = !1, this._isCollapsed = !1, this.ngbCollapseChange = new g, this.horizontal = this._config.horizontal, this.shown = new g, this.hidden = new g; }
    set collapsed(e) { this._isCollapsed !== e && (this._isCollapsed = e, this._afterInit && this._runTransitionWithEvents(e, this.animation)); }
    ngOnInit() { this._runTransition(this._isCollapsed, !1), this._afterInit = !0; }
    toggle(e = this._isCollapsed) { this.collapsed = !e, this.ngbCollapseChange.next(this._isCollapsed); }
    _runTransition(e, i) { return E(this._zone, this._element.nativeElement, Xs, { animation: i, runningTransition: "stop", context: { direction: e ? "hide" : "show", dimension: this.horizontal ? "width" : "height" } }); }
    _runTransitionWithEvents(e, i) { this._runTransition(e, i).subscribe(() => { e ? this.hidden.emit() : this.shown.emit(); }); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbCollapse", ""]], hostVars: 2, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275classProp("collapse-horizontal", o.horizontal); }, inputs: { animation: "animation", collapsed: [0, "ngbCollapse", "collapsed"], horizontal: "horizontal" }, outputs: { ngbCollapseChange: "ngbCollapseChange", shown: "shown", hidden: "hidden" }, exportAs: ["ngbCollapse"] }); let s = t; return s; })(), to = 0, Qr = (() => { let t = class t {
    constructor() { this._item = c(he), this._viewRef = null, this.elementRef = c(S); }
    ngAfterContentChecked() { this._bodyTpl && (this._item._shouldBeInDOM ? this._createViewIfNotExists() : this._destroyViewIfExists()); }
    ngOnDestroy() { this._destroyViewIfExists(); }
    _destroyViewIfExists() { this._viewRef?.destroy(), this._viewRef = null; }
    _createViewIfNotExists() { this._viewRef || (this._viewRef = this._vcr.createEmbeddedView(this._bodyTpl), this._viewRef.detectChanges()); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["", "ngbAccordionBody", ""]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, k, 7), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o._bodyTpl = l.first);
    } }, viewQuery: function (i, o) { if (i & 1 && n.\u0275\u0275viewQuery(an, 7, Dt), i & 2) {
        let r;
        n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o._vcr = r.first);
    } }, hostAttrs: [1, "accordion-body"], attrs: rn, ngContentSelectors: z, decls: 3, vars: 0, consts: [["container", ""]], template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275domElementContainer(0, null, 0), n.\u0275\u0275projection(2)); }, encapsulation: 2 }); let s = t; return s; })(), io = (() => { let t = class t {
    constructor() { this.item = c(he), this.ngbCollapse = c($t); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbAccordionCollapse", ""]], hostAttrs: ["role", "region", 1, "accordion-collapse"], hostVars: 2, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275domProperty("id", o.item.collapseId), n.\u0275\u0275attribute("aria-labelledby", o.item.toggleId)); }, exportAs: ["ngbAccordionCollapse"], features: [n.\u0275\u0275HostDirectivesFeature([$t])] }); let s = t; return s; })(), no = (() => { let t = class t {
    constructor() { this.item = c(he), this.accordion = c(hi); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbAccordionToggle", ""]], hostVars: 5, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("click", function () { return !o.item.disabled && o.accordion.toggle(o.item.id); }), i & 2 && (n.\u0275\u0275domProperty("id", o.item.toggleId), n.\u0275\u0275attribute("aria-controls", o.item.collapseId)("aria-expanded", !o.item.collapsed), n.\u0275\u0275classProp("collapsed", o.item.collapsed)); } }); let s = t; return s; })(), Yr = (() => { let t = class t {
    constructor() { this.item = c(he); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["button", "ngbAccordionButton", ""]], hostAttrs: ["type", "button", 1, "accordion-button"], hostVars: 1, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275domProperty("disabled", o.item.disabled); }, features: [n.\u0275\u0275HostDirectivesFeature([no])] }); let s = t; return s; })(), qr = (() => { let t = class t {
    constructor() { this.item = c(he); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbAccordionHeader", ""]], hostAttrs: ["role", "heading", 1, "accordion-header"], hostVars: 2, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275classProp("collapsed", o.item.collapsed); } }); let s = t; return s; })(), he = (() => { let t = class t {
    constructor() { this._accordion = c(hi), this._cd = c(x), this._destroyRef = c(se), this._collapsed = !0, this._id = `ngb-accordion-item-${to++}`, this._collapseAnimationRunning = !1, this.disabled = !1, this.show = new g, this.shown = new g, this.hide = new g, this.hidden = new g; }
    set id(e) { j(e) && e !== "" && (this._id = e); }
    set destroyOnHide(e) { this._destroyOnHide = e; }
    get destroyOnHide() { return this._destroyOnHide === void 0 ? this._accordion.destroyOnHide : this._destroyOnHide; }
    set collapsed(e) { e ? this.collapse() : this.expand(); }
    get collapsed() { return this._collapsed; }
    get id() { return `${this._id}`; }
    get toggleId() { return `${this.id}-toggle`; }
    get collapseId() { return `${this.id}-collapse`; }
    get _shouldBeInDOM() { return !this.collapsed || this._collapseAnimationRunning || !this.destroyOnHide; }
    ngAfterContentInit() { let { ngbCollapse: e } = this._collapse; e.animation = !1, e.collapsed = this.collapsed, e.animation = this._accordion.animation, e.hidden.pipe(L(this._destroyRef)).subscribe(() => { this._collapseAnimationRunning = !1, this.hidden.emit(), this._accordion.hidden.emit(this.id), this._cd.markForCheck(); }), e.shown.pipe(L(this._destroyRef)).subscribe(() => { this.shown.emit(), this._accordion.shown.emit(this.id), this._cd.markForCheck(); }); }
    toggle() { this.collapsed = !this.collapsed; }
    expand() { if (this.collapsed) {
        if (!this._accordion._ensureCanExpand(this))
            return;
        this._collapsed = !1, this._cd.markForCheck(), this._cd.detectChanges(), this.show.emit(), this._accordion.show.emit(this.id), this._collapse.ngbCollapse.animation = this._accordion.animation, this._collapse.ngbCollapse.collapsed = !1;
    } }
    collapse() { this.collapsed || (this._collapsed = !0, this._collapseAnimationRunning = !0, this._cd.markForCheck(), this.hide.emit(), this._accordion.hide.emit(this.id), this._collapse.ngbCollapse.animation = this._accordion.animation, this._collapse.ngbCollapse.collapsed = !0); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbAccordionItem", ""]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, io, 7), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o._collapse = l.first);
    } }, hostAttrs: [1, "accordion-item"], hostVars: 1, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275domProperty("id", o.id); }, inputs: { id: [0, "ngbAccordionItem", "id"], destroyOnHide: "destroyOnHide", disabled: "disabled", collapsed: "collapsed" }, outputs: { show: "show", shown: "shown", hide: "hide", hidden: "hidden" }, exportAs: ["ngbAccordionItem"] }); let s = t; return s; })(), hi = (() => { let t = class t {
    constructor() { this._config = c(Ws), this._anItemWasAlreadyExpandedDuringInitialisation = !1, this.animation = this._config.animation, this.closeOthers = this._config.closeOthers, this.destroyOnHide = this._config.destroyOnHide, this.show = new g, this.shown = new g, this.hide = new g, this.hidden = new g; }
    toggle(e) { this._getItem(e)?.toggle(); }
    expand(e) { this._getItem(e)?.expand(); }
    expandAll() { this._items && (this.closeOthers ? this._items.find(e => !e.collapsed) || this._items.first.expand() : this._items.forEach(e => e.expand())); }
    collapse(e) { this._getItem(e)?.collapse(); }
    collapseAll() { this._items?.forEach(e => e.collapse()); }
    isExpanded(e) { let i = this._getItem(e); return i ? !i.collapsed : !1; }
    _ensureCanExpand(e) { return this.closeOthers ? this._items ? (this._items.find(i => !i.collapsed && e !== i)?.collapse(), !0) : this._anItemWasAlreadyExpandedDuringInitialisation ? !1 : (this._anItemWasAlreadyExpandedDuringInitialisation = !0, !0) : !0; }
    _getItem(e) { return this._items?.find(i => i.id === e); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbAccordion", ""]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, he, 4), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o._items = l);
    } }, hostAttrs: [1, "accordion"], inputs: { animation: "animation", closeOthers: "closeOthers", destroyOnHide: "destroyOnHide" }, outputs: { show: "show", shown: "shown", hide: "hide", hidden: "hidden" }, exportAs: ["ngbAccordion"] }); let s = t; return s; })();
var ui = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), so = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.dismissible = !0, this.type = "warning"; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), oo = ({ classList: s }) => { s.remove("show"); }, Xr = (() => {
    let t = class t {
        constructor() { this._config = c(so), this._elementRef = c(S), this._zone = c(A), this.animation = this._config.animation, this.dismissible = this._config.dismissible, this.type = this._config.type, this.closed = new g; }
        close() { let e = E(this._zone, this._elementRef.nativeElement, oo, { animation: this.animation, runningTransition: "continue" }); return e.subscribe(() => this.closed.emit()), e; }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-alert"]], hostAttrs: ["role", "alert"], hostVars: 6, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275classMap("alert show" + (o.type ? " alert-" + o.type : "")), n.\u0275\u0275classProp("fade", o.animation)("alert-dismissible", o.dismissible)); }, inputs: { animation: "animation", dismissible: "dismissible", type: "type" }, outputs: { closed: "closed" }, exportAs: ["ngbAlert"], ngContentSelectors: z, decls: 2, vars: 1, consts: () => { let e; return e = $localize `:@@ngb.alert.close:Close`, [["type", "button", "aria-label", e, 1, "btn-close"], ["type", "button", "aria-label", e, 1, "btn-close", 3, "click"]]; }, template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275projection(0), n.\u0275\u0275conditionalCreate(1, ln, 1, 0, "button", 0)), i & 2 && (n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.dismissible ? 1 : -1)); }, styles: [`ngb-alert{display:block}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), _i = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), ao = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.interval = 5e3, this.wrap = !0, this.keyboard = !0, this.pauseOnHover = !0, this.pauseOnFocus = !0, this.showNavigationArrows = !0, this.showNavigationIndicators = !0; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), re = (function (s) { return s.START = "start", s.END = "end", s; })(re || {}), pi = ({ classList: s }) => s.contains("carousel-item-start") || s.contains("carousel-item-end"), Ot = s => { s.remove("carousel-item-start", "carousel-item-end"); }, We = s => { Ot(s), s.remove("carousel-item-prev", "carousel-item-next"); }, ro = (s, t, { direction: a }) => { let { classList: e } = s; if (!t) {
    We(e), e.add("active");
    return;
} return pi(s) ? Ot(e) : (e.add("carousel-item-" + (a === re.START ? "next" : "prev")), X(s), e.add("carousel-item-" + a)), () => { We(e), e.add("active"); }; }, lo = (s, t, { direction: a }) => { let { classList: e } = s; if (!t) {
    We(e), e.remove("active");
    return;
} return pi(s) ? Ot(e) : e.add("carousel-item-" + a), () => { We(e), e.remove("active"); }; }, co = 0, ho = 0, uo = (() => { let t = class t {
    constructor() { this.templateRef = c(k), this.id = `ngb-slide-${co++}`, this.slid = new g; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbSlide", ""]], inputs: { id: "id" }, outputs: { slid: "slid" } }); let s = t; return s; })(), el = (() => { let t = class t {
    constructor() { this.NgbSlideEventSource = ve, this._config = c(ao), this._platformId = c(ti), this._ngZone = c(A), this._cd = c(x), this._container = c(S), this._destroyRef = c(se), this._injector = c(M), this._interval$ = new Y(this._config.interval), this._mouseHover$ = new Y(!1), this._focused$ = new Y(!1), this._pauseOnHover$ = new Y(this._config.pauseOnHover), this._pauseOnFocus$ = new Y(this._config.pauseOnFocus), this._pause$ = new Y(!1), this._wrap$ = new Y(this._config.wrap), this.id = `ngb-carousel-${ho++}`, this.animation = this._config.animation, this.keyboard = this._config.keyboard, this.showNavigationArrows = this._config.showNavigationArrows, this.showNavigationIndicators = this._config.showNavigationIndicators, this.slide = new g, this.slid = new g, this._transitionIds = null; }
    set interval(e) { this._interval$.next(e); }
    get interval() { return this._interval$.value; }
    set wrap(e) { this._wrap$.next(e); }
    get wrap() { return this._wrap$.value; }
    set pauseOnHover(e) { this._pauseOnHover$.next(e); }
    get pauseOnHover() { return this._pauseOnHover$.value; }
    set pauseOnFocus(e) { this._pauseOnFocus$.next(e); }
    get pauseOnFocus() { return this._pauseOnFocus$.value; }
    set mouseHover(e) { this._mouseHover$.next(e); }
    get mouseHover() { return this._mouseHover$.value; }
    set focused(e) { this._focused$.next(e); }
    get focused() { return this._focused$.value; }
    arrowLeft() { this.focus(), this.prev(ve.ARROW_LEFT); }
    arrowRight() { this.focus(), this.next(ve.ARROW_RIGHT); }
    ngAfterContentInit() { oi(this._platformId) && this._ngZone.runOutsideAngular(() => { let e = Ht([this.slide.pipe(K(i => i.current), ct(this.activeId)), this._wrap$, this.slides.changes.pipe(ct(null))]).pipe(K(([i, o]) => { let r = this.slides.toArray(), l = this._getSlideIdxById(i); return o ? r.length > 1 : l < r.length - 1; }), $e()); Ht([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, e]).pipe(K(([i, o, r, l, d, h, u]) => i || o && r || l && d || !u ? 0 : h), $e(), Tt(i => i > 0 ? ni(i, i) : Qi), L(this._destroyRef)).subscribe(() => this._ngZone.run(() => this.next(ve.TIMER))); }), this.slides.changes.pipe(L(this._destroyRef)).subscribe(() => { this._transitionIds?.forEach(e => Se(this._getSlideElement(e))), this._transitionIds = null, this._cd.markForCheck(), U({ mixedReadWrite: () => { for (let { id: e } of this.slides) {
            let i = this._getSlideElement(e);
            e === this.activeId ? i.classList.add("active") : i.classList.remove("active");
        } } }, { injector: this._injector }); }); }
    ngAfterContentChecked() { let e = this._getSlideById(this.activeId); this.activeId = e ? e.id : this.slides.length ? this.slides.first.id : ""; }
    ngAfterViewInit() { if (this.activeId) {
        let e = this._getSlideElement(this.activeId);
        e && e.classList.add("active");
    } }
    select(e, i) { this._cycleToSelected(e, this._getSlideEventDirection(this.activeId, e), i); }
    prev(e) { this._cycleToSelected(this._getPrevSlide(this.activeId), re.END, e); }
    next(e) { this._cycleToSelected(this._getNextSlide(this.activeId), re.START, e); }
    pause() { this._pause$.next(!0); }
    cycle() { this._pause$.next(!1); }
    focus() { this._container.nativeElement.focus(); }
    _cycleToSelected(e, i, o) { let r = this._transitionIds; if (r && (r[0] !== e || r[1] !== this.activeId))
        return; let l = this._getSlideById(e); if (l && l.id !== this.activeId) {
        this._transitionIds = [this.activeId, e], this.slide.emit({ prev: this.activeId, current: l.id, direction: i, paused: this._pause$.value, source: o });
        let d = { animation: this.animation, runningTransition: "stop", context: { direction: i } }, h = [], u = this._getSlideById(this.activeId);
        if (u) {
            let C = E(this._ngZone, this._getSlideElement(u.id), lo, d);
            C.subscribe(() => { u.slid.emit({ isShown: !1, direction: i, source: o }); }), h.push(C);
        }
        let _ = this.activeId;
        this.activeId = l.id;
        let p = this._getSlideById(this.activeId), f = E(this._ngZone, this._getSlideElement(l.id), ro, d);
        f.subscribe(() => { p?.slid.emit({ isShown: !0, direction: i, source: o }); }), h.push(f), De(...h).pipe(we(1)).subscribe(() => { this._transitionIds = null, this.slid.emit({ prev: _, current: l.id, direction: i, paused: this._pause$.value, source: o }); });
    } this._cd.markForCheck(); }
    _getSlideEventDirection(e, i) { let o = this._getSlideIdxById(e), r = this._getSlideIdxById(i); return o > r ? re.END : re.START; }
    _getSlideById(e) { return this.slides.find(i => i.id === e) || null; }
    _getSlideIdxById(e) { let i = this._getSlideById(e); return i != null ? this.slides.toArray().indexOf(i) : -1; }
    _getNextSlide(e) { let i = this.slides.toArray(), o = this._getSlideIdxById(e); return o === i.length - 1 ? this.wrap ? i[0].id : i[i.length - 1].id : i[o + 1].id; }
    _getPrevSlide(e) { let i = this.slides.toArray(), o = this._getSlideIdxById(e); return o === 0 ? this.wrap ? i[i.length - 1].id : i[0].id : i[o - 1].id; }
    _getSlideElement(e) { return this._container.nativeElement.querySelector(`#slide-${e}`); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-carousel"]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, uo, 4), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.slides = l);
    } }, hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"], hostVars: 2, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("keydown.arrowLeft", function () { return o.keyboard && o.arrowLeft(); })("keydown.arrowRight", function () { return o.keyboard && o.arrowRight(); })("mouseenter", function () { return o.mouseHover = !0; })("mouseleave", function () { return o.mouseHover = !1; })("focusin", function () { return o.focused = !0; })("focusout", function () { return o.focused = !1; }), i & 2 && n.\u0275\u0275styleProp("display", "block"); }, inputs: { animation: "animation", activeId: "activeId", interval: "interval", wrap: "wrap", keyboard: "keyboard", pauseOnHover: "pauseOnHover", pauseOnFocus: "pauseOnFocus", showNavigationArrows: "showNavigationArrows", showNavigationIndicators: "showNavigationIndicators" }, outputs: { slide: "slide", slid: "slid" }, exportAs: ["ngbCarousel"], decls: 7, vars: 3, consts: () => { let e; e = $localize `:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `; let i; i = $localize `:@@ngb.carousel.previous:Previous`; let o; return o = $localize `:@@ngb.carousel.next:Next`, [e, i, o, ["role", "tablist", 1, "carousel-indicators"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "active"], [1, "carousel-inner"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"], [1, "visually-hidden"], [3, "ngTemplateOutlet"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden", 3, "id"], ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]]; }, template: function (i, o) { i & 1 && (n.\u0275\u0275elementStart(0, "div", 3), n.\u0275\u0275repeaterCreate(1, cn, 1, 5, "button", 4, n.\u0275\u0275repeaterTrackByIdentity), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(3, "div", 5), n.\u0275\u0275repeaterCreate(4, hn, 4, 4, "div", 6, n.\u0275\u0275repeaterTrackByIdentity), n.\u0275\u0275elementEnd(), n.\u0275\u0275conditionalCreate(6, un, 8, 4)), i & 2 && (n.\u0275\u0275classProp("visually-hidden", !o.showNavigationIndicators), n.\u0275\u0275advance(), n.\u0275\u0275repeater(o.slides), n.\u0275\u0275advance(3), n.\u0275\u0275repeater(o.slides), n.\u0275\u0275advance(2), n.\u0275\u0275conditional(o.showNavigationArrows ? 6 : -1)); }, dependencies: [Z], encapsulation: 2, changeDetection: 0 }); let s = t; return s; })(), ve = (function (s) { return s.TIMER = "timer", s.ARROW_LEFT = "arrowLeft", s.ARROW_RIGHT = "arrowRight", s.INDICATOR = "indicator", s; })(ve || {}), fi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), gi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), D = class s {
    static from(t) { return t instanceof s ? t : t ? new s(t.year, t.month, t.day) : null; }
    constructor(t, a, e) { this.year = m(t) ? t : null, this.month = m(a) ? a : null, this.day = m(e) ? e : null; }
    equals(t) { return t != null && this.year === t.year && this.month === t.month && this.day === t.day; }
    before(t) { return t ? this.year === t.year ? this.month === t.month ? this.day === t.day ? !1 : this.day < t.day : this.month < t.month : this.year < t.year : !1; }
    after(t) { return t ? this.year === t.year ? this.month === t.month ? this.day === t.day ? !1 : this.day > t.day : this.month > t.month : this.year > t.year : !1; }
};
function ut(s) { return new D(s.getFullYear(), s.getMonth() + 1, s.getDate()); }
function be(s) { let t = new Date(s.year, s.month - 1, s.day, 12); return isNaN(t.getTime()) || t.setFullYear(s.year), t; }
function _o() { return new mi; }
var ee = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: () => _o(), providedIn: "root" }); let s = t; return s; })(), mi = (() => { let t = class t extends ee {
    getDaysPerWeek() { return 7; }
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    getNext(e, i = "d", o = 1) { let r = be(e), l = !0, d = r.getMonth(); switch (i) {
        case "y":
            r.setFullYear(r.getFullYear() + o);
            break;
        case "m":
            d += o, r.setMonth(d), d = d % 12, d < 0 && (d = d + 12);
            break;
        case "d":
            r.setDate(r.getDate() + o), l = !1;
            break;
        default: return e;
    } return l && r.getMonth() !== d && r.setDate(0), ut(r); }
    getPrev(e, i = "d", o = 1) { return this.getNext(e, i, -o); }
    getWeekday(e) { let o = be(e).getDay(); return o === 0 ? 7 : o; }
    getWeekNumber(e, i) { i === 7 && (i = 0); let o = (11 - i) % 7, r = e[o], l = be(r); l.setDate(l.getDate() + 4 - (l.getDay() || 7)); let d = l.getTime(); return l.setMonth(0), l.setDate(1), Math.floor(Math.round((d - l.getTime()) / 864e5) / 7) + 1; }
    getToday() { return ut(new Date); }
    isValid(e) { if (!e || !m(e.year) || !m(e.month) || !m(e.day) || e.year === 0)
        return !1; let i = be(e); return !isNaN(i.getTime()) && i.getFullYear() === e.year && i.getMonth() + 1 === e.month && i.getDate() === e.day; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })();
function le(s, t) { return !po(s, t); }
function yi(s, t) { return !s && !t ? !1 : !s || !t ? !0 : s.year !== t.year || s.month !== t.month; }
function po(s, t) { return !s && !t || !!s && !!t && s.equals(t); }
function fo(s, t) { if (t && s && t.before(s))
    throw new Error(`'maxDate' ${t} should be greater than 'minDate' ${s}`); }
function Fe(s, t, a) { return s && t && s.before(t) ? t : s && a && s.after(a) ? a : s || null; }
function it(s, t) { let { minDate: a, maxDate: e, disabled: i, markDisabled: o } = t; return !(s == null || i || o && o(s, { year: s.year, month: s.month }) || a && s.before(a) || e && s.after(e)); }
function go(s, t, a, e) { if (!t)
    return []; let i = s.getMonths(t.year); if (a && t.year === a.year) {
    let o = i.findIndex(r => r === a.month);
    i = i.slice(o);
} if (e && t.year === e.year) {
    let o = i.findIndex(r => r === e.month);
    i = i.slice(0, o + 1);
} return i; }
function mo(s, t, a) { if (!s)
    return []; let e = t ? Math.max(t.year, s.year - 500) : s.year - 10, o = (a ? Math.min(a.year, s.year + 500) : s.year + 10) - e + 1, r = Array(o); for (let l = 0; l < o; l++)
    r[l] = e + l; return r; }
function yo(s, t, a) { let e = Object.assign(s.getNext(t, "m"), { day: 1 }); return a != null && e.after(a); }
function vo(s, t, a) { let e = Object.assign(s.getPrev(t, "m"), { day: 1 }); return a != null && (e.year === a.year && e.month < a.month || e.year < a.year && a.month === 1); }
function bo(s, t, a, e, i) { let { displayMonths: o, months: r } = a, l = r.splice(0, r.length); return Array.from({ length: o }, (h, u) => { let _ = Object.assign(s.getNext(t, "m", u), { day: 1 }); if (r[u] = null, !i) {
    let p = l.findIndex(f => f.firstDate.equals(_));
    p !== -1 && (r[u] = l.splice(p, 1)[0]);
} return _; }).forEach((h, u) => { r[u] === null && (r[u] = Do(s, h, a, e, l.shift() || {})); }), r; }
function Do(s, t, a, e, i = {}) { let { dayTemplateData: o, minDate: r, maxDate: l, firstDayOfWeek: d, markDisabled: h, outsideDays: u, weekdayWidth: _, weekdaysVisible: p } = a, f = s.getToday(); i.firstDate = null, i.lastDate = null, i.number = t.month, i.year = t.year, i.weeks = i.weeks || [], i.weekdays = i.weekdays || [], t = wo(s, t, d), p || (i.weekdays.length = 0); for (let C = 0; C < s.getWeeksPerMonth(); C++) {
    let T = i.weeks[C];
    T || (T = i.weeks[C] = { number: 0, days: [], collapsed: !0 });
    let y = T.days;
    for (let w = 0; w < s.getDaysPerWeek(); w++) {
        C === 0 && p && (i.weekdays[w] = e.getWeekdayLabel(s.getWeekday(t), _));
        let R = new D(t.year, t.month, t.day), Ie = s.getNext(R), et = e.getDayAriaLabel(R), ue = !!(r && R.before(r) || l && R.after(l));
        !ue && h && (ue = h(R, { month: i.number, year: i.year }));
        let oe = R.equals(f), tt = o ? o(R, { month: i.number, year: i.year }) : void 0;
        i.firstDate === null && R.month === i.number && (i.firstDate = R), R.month === i.number && Ie.month !== i.number && (i.lastDate = R);
        let J = y[w];
        J || (J = y[w] = {}), J.date = R, J.context = Object.assign(J.context || {}, { $implicit: R, date: R, data: tt, currentMonth: i.number, currentYear: i.year, disabled: ue, focused: !1, selected: !1, today: oe }), J.tabindex = -1, J.ariaLabel = et, J.hidden = !1, t = Ie;
    }
    T.number = s.getWeekNumber(y.map(w => w.date), d), T.collapsed = u === "collapsed" && y[0].date.month !== i.number && y[y.length - 1].date.month !== i.number;
} return i; }
function wo(s, t, a) { let e = s.getDaysPerWeek(), i = new D(t.year, t.month, 1), o = s.getWeekday(i) % e; return s.getPrev(i, "d", (e + o - a) % e); }
var Q = (() => { let t = class t {
    getMonthLabel(e) { return `${this.getMonthFullName(e.month, e.year)} ${this.getYearNumerals(e.year)}`; }
    getDayNumerals(e) { return `${e.day}`; }
    getWeekNumerals(e) { return `${e}`; }
    getYearNumerals(e) { return `${e}`; }
    getWeekLabel() { return ""; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: () => new To, providedIn: "root" }); let s = t; return s; })(), To = (() => { let t = class t extends Q {
    constructor() { super(...arguments), this._locale = c(ii), this._monthsShort = [...Array(12).keys()].map(e => Intl.DateTimeFormat(this._locale, { month: "short", timeZone: "UTC" }).format(Date.UTC(2e3, e))), this._monthsFull = [...Array(12).keys()].map(e => Intl.DateTimeFormat(this._locale, { month: "long", timeZone: "UTC" }).format(Date.UTC(2e3, e))); }
    getWeekdayLabel(e, i = "narrow") { return [1, 2, 3, 4, 5, 6, 7].map(r => Intl.DateTimeFormat(this._locale, { weekday: i, timeZone: "UTC" }).format(Date.UTC(2e3, 4, r)))[e - 1] || ""; }
    getMonthShortName(e) { return this._monthsShort[e - 1] || ""; }
    getMonthFullName(e) { return this._monthsFull[e - 1] || ""; }
    getDayAriaLabel(e) { let i = new Date(e.year, e.month - 1, e.day); return ht(i, "fullDate", this._locale); }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), _t = (() => { let t = class t {
    constructor() { this._VALIDATORS = { dayTemplateData: e => { if (this._state.dayTemplateData !== e)
            return { dayTemplateData: e }; }, displayMonths: e => { if (e = P(e), m(e) && e > 0 && this._state.displayMonths !== e)
            return { displayMonths: e }; }, disabled: e => { if (this._state.disabled !== e)
            return { disabled: e }; }, firstDayOfWeek: e => { if (e = P(e), m(e) && e >= 0 && this._state.firstDayOfWeek !== e)
            return { firstDayOfWeek: e }; }, focusVisible: e => { if (this._state.focusVisible !== e && !this._state.disabled)
            return { focusVisible: e }; }, markDisabled: e => { if (this._state.markDisabled !== e)
            return { markDisabled: e }; }, maxDate: e => { let i = this.toValidDate(e, null); if (le(this._state.maxDate, i))
            return { maxDate: i }; }, minDate: e => { let i = this.toValidDate(e, null); if (le(this._state.minDate, i))
            return { minDate: i }; }, navigation: e => { if (this._state.navigation !== e)
            return { navigation: e }; }, outsideDays: e => { if (this._state.outsideDays !== e)
            return { outsideDays: e }; }, weekdays: e => { let i = e === !0 || e === !1 ? "narrow" : e, o = e === !0 || e === !1 ? e : !0; if (this._state.weekdayWidth !== i || this._state.weekdaysVisible !== o)
            return { weekdayWidth: i, weekdaysVisible: o }; } }, this._calendar = c(ee), this._i18n = c(Q), this._model$ = new b, this._dateSelect$ = new b, this._state = { dayTemplateData: null, markDisabled: null, maxDate: null, minDate: null, disabled: !1, displayMonths: 1, firstDate: null, firstDayOfWeek: 1, lastDate: null, focusDate: null, focusVisible: !1, months: [], navigation: "select", outsideDays: "visible", prevDisabled: !1, nextDisabled: !1, selectedDate: null, selectBoxes: { years: [], months: [] }, weekdayWidth: "narrow", weekdaysVisible: !0 }; }
    get model$() { return this._model$.pipe($(e => e.months.length > 0)); }
    get dateSelect$() { return this._dateSelect$.pipe($(e => e !== null)); }
    set(e) { let i = Object.keys(e).map(o => this._VALIDATORS[o](e[o])).reduce((o, r) => F(F({}, o), r), {}); Object.keys(i).length > 0 && this._nextState(i); }
    focus(e) { let i = this.toValidDate(e, null); i != null && !this._state.disabled && le(this._state.focusDate, i) && this._nextState({ focusDate: e }); }
    focusSelect() { it(this._state.focusDate, this._state) && this.select(this._state.focusDate, { emitEvent: !0 }); }
    open(e) { let i = this.toValidDate(e, this._calendar.getToday()); i != null && !this._state.disabled && (!this._state.firstDate || yi(this._state.firstDate, i)) && this._nextState({ firstDate: i }); }
    select(e, i = {}) { let o = this.toValidDate(e, null); o != null && !this._state.disabled && (le(this._state.selectedDate, o) && this._nextState({ selectedDate: o }), i.emitEvent && it(o, this._state) && this._dateSelect$.next(o)); }
    toValidDate(e, i) { let o = D.from(e); return i === void 0 && (i = this._calendar.getToday()), this._calendar.isValid(o) ? o : i; }
    getMonth(e) { for (let i of this._state.months)
        if (e.month === i.number && e.year === i.year)
            return i; throw new Error(`month ${e.month} of year ${e.year} not found`); }
    _nextState(e) { let i = this._updateState(e); this._patchContexts(i), this._state = i, this._model$.next(this._state); }
    _patchContexts(e) { let { months: i, displayMonths: o, selectedDate: r, focusDate: l, focusVisible: d, disabled: h, outsideDays: u } = e; e.months.forEach(_ => { _.weeks.forEach(p => { p.days.forEach(f => { l && (f.context.focused = l.equals(f.date) && d), f.tabindex = !h && l && f.date.equals(l) && l.month === _.number ? 0 : -1, h === !0 && (f.context.disabled = !0), r !== void 0 && (f.context.selected = r !== null && r.equals(f.date)), _.number !== f.date.month && (f.hidden = u === "hidden" || u === "collapsed" || o > 1 && f.date.after(i[0].firstDate) && f.date.before(i[o - 1].lastDate)); }); }); }); }
    _updateState(e) { let i = Object.assign({}, this._state, e), o = i.firstDate; if (("minDate" in e || "maxDate" in e) && (fo(i.minDate, i.maxDate), i.focusDate = Fe(i.focusDate, i.minDate, i.maxDate), i.firstDate = Fe(i.firstDate, i.minDate, i.maxDate), o = i.focusDate), "disabled" in e && (i.focusVisible = !1), "selectedDate" in e && this._state.months.length === 0 && (o = i.selectedDate), "focusVisible" in e || "focusDate" in e && (i.focusDate = Fe(i.focusDate, i.minDate, i.maxDate), o = i.focusDate, i.months.length !== 0 && i.focusDate && !i.focusDate.before(i.firstDate) && !i.focusDate.after(i.lastDate)))
        return i; if ("firstDate" in e && (i.firstDate = Fe(i.firstDate, i.minDate, i.maxDate), o = i.firstDate), o) {
        let r = "dayTemplateData" in e || "firstDayOfWeek" in e || "markDisabled" in e || "minDate" in e || "maxDate" in e || "disabled" in e || "outsideDays" in e || "weekdaysVisible" in e, l = bo(this._calendar, o, i, this._i18n, r);
        i.months = l, i.firstDate = l[0].firstDate, i.lastDate = l[l.length - 1].lastDate, "selectedDate" in e && !it(i.selectedDate, i) && (i.selectedDate = null), "firstDate" in e && (!i.focusDate || i.focusDate.before(i.firstDate) || i.focusDate.after(i.lastDate)) && (i.focusDate = o);
        let d = !this._state.firstDate || this._state.firstDate.year !== i.firstDate.year, h = !this._state.firstDate || this._state.firstDate.month !== i.firstDate.month;
        i.navigation === "select" ? (("minDate" in e || "maxDate" in e || i.selectBoxes.years.length === 0 || d) && (i.selectBoxes.years = mo(i.firstDate, i.minDate, i.maxDate)), ("minDate" in e || "maxDate" in e || i.selectBoxes.months.length === 0 || d) && (i.selectBoxes.months = go(this._calendar, i.firstDate, i.minDate, i.maxDate))) : i.selectBoxes = { years: [], months: [] }, (i.navigation === "arrows" || i.navigation === "select") && (h || d || "minDate" in e || "maxDate" in e || "disabled" in e) && (i.prevDisabled = i.disabled || vo(this._calendar, i.firstDate, i.minDate), i.nextDisabled = i.disabled || yo(this._calendar, i.lastDate, i.maxDate));
    } return i; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Ke = (function (s) { return s[s.PREV = 0] = "PREV", s[s.NEXT = 1] = "NEXT", s; })(Ke || {}), Ct = (() => { let t = class t {
    constructor() { this.displayMonths = 1, this.firstDayOfWeek = 1, this.navigation = "select", this.outsideDays = "visible", this.showWeekNumbers = !1, this.weekdays = "narrow"; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })();
function So() { return new Oo; }
var Xe = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: () => So(), providedIn: "root" }); let s = t; return s; })(), Oo = (() => { let t = class t extends Xe {
    fromModel(e) { return e && m(e.year) && m(e.month) && m(e.day) ? { year: e.year, month: e.month, day: e.day } : null; }
    toModel(e) { return e && m(e.year) && m(e.month) && m(e.day) ? { year: e.year, month: e.month, day: e.day } : null; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Co = (() => { let t = class t {
    processKey(e, i) { let { state: o, calendar: r } = i; switch (e.key) {
        case "PageUp":
            i.focusDate(r.getPrev(o.focusedDate, e.shiftKey ? "y" : "m", 1));
            break;
        case "PageDown":
            i.focusDate(r.getNext(o.focusedDate, e.shiftKey ? "y" : "m", 1));
            break;
        case "End":
            i.focusDate(e.shiftKey ? o.maxDate : o.lastDate);
            break;
        case "Home":
            i.focusDate(e.shiftKey ? o.minDate : o.firstDate);
            break;
        case "ArrowLeft":
            i.focusDate(r.getPrev(o.focusedDate, "d", 1));
            break;
        case "ArrowUp":
            i.focusDate(r.getPrev(o.focusedDate, "d", r.getDaysPerWeek()));
            break;
        case "ArrowRight":
            i.focusDate(r.getNext(o.focusedDate, "d", 1));
            break;
        case "ArrowDown":
            i.focusDate(r.getNext(o.focusedDate, "d", r.getDaysPerWeek()));
            break;
        case "Enter":
        case " ":
            i.focusSelect();
            break;
        default: return;
    } e.preventDefault(), e.stopPropagation(); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Eo = (() => {
    let t = class t {
        constructor() { this.i18n = c(Q); }
        isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["", "ngbDatepickerDayView", ""]], hostAttrs: [1, "btn-light"], hostVars: 10, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275classProp("bg-primary", o.selected)("text-white", o.selected)("text-muted", o.isMuted())("outside", o.isMuted())("active", o.focused); }, inputs: { currentMonth: "currentMonth", date: "date", disabled: "disabled", focused: "focused", selected: "selected" }, attrs: _n, decls: 1, vars: 1, template: function (i, o) { i & 1 && n.\u0275\u0275text(0), i & 2 && n.\u0275\u0275textInterpolate(o.i18n.getDayNumerals(o.date)); }, styles: [`[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), Mo = (() => {
    let t = class t {
        constructor() { this._month = -1, this._year = -1, this.i18n = c(Q), this.select = new g; }
        changeMonth(e) { this.select.emit(new D(this.date.year, P(e), 1)); }
        changeYear(e) { this.select.emit(new D(P(e), this.date.month, 1)); }
        ngAfterViewChecked() { this.date && (this.date.month !== this._month && (this._month = this.date.month, this.monthSelect.nativeElement.value = `${this._month}`), this.date.year !== this._year && (this._year = this.date.year, this.yearSelect.nativeElement.value = `${this._year}`)); }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-datepicker-navigation-select"]], viewQuery: function (i, o) { if (i & 1 && (n.\u0275\u0275viewQuery(pn, 7, S), n.\u0275\u0275viewQuery(fn, 7, S)), i & 2) {
            let r;
            n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o.monthSelect = r.first), n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o.yearSelect = r.first);
        } }, inputs: { date: "date", disabled: "disabled", months: "months", years: "years" }, outputs: { select: "select" }, decls: 8, vars: 2, consts: () => { let e; e = $localize `:@@ngb.datepicker.select-month:Select month`; let i; i = $localize `:@@ngb.datepicker.select-month:Select month`; let o; o = $localize `:@@ngb.datepicker.select-year:Select year`; let r; return r = $localize `:@@ngb.datepicker.select-year:Select year`, [["month", ""], ["year", ""], ["aria-label", e, "title", i, 1, "form-select", 3, "change", "disabled"], [3, "value"], ["aria-label", o, "title", r, 1, "form-select", 3, "change", "disabled"]]; }, template: function (i, o) { if (i & 1) {
            let r = n.\u0275\u0275getCurrentView();
            n.\u0275\u0275domElementStart(0, "select", 2, 0), n.\u0275\u0275domListener("change", function (d) { return n.\u0275\u0275restoreView(r), n.\u0275\u0275resetView(o.changeMonth(d.target.value)); }), n.\u0275\u0275repeaterCreate(2, gn, 2, 3, "option", 3, n.\u0275\u0275repeaterTrackByIdentity), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(4, "select", 4, 1), n.\u0275\u0275domListener("change", function (d) { return n.\u0275\u0275restoreView(r), n.\u0275\u0275resetView(o.changeYear(d.target.value)); }), n.\u0275\u0275repeaterCreate(6, mn, 2, 2, "option", 3, n.\u0275\u0275repeaterTrackByIdentity), n.\u0275\u0275domElementEnd();
        } i & 2 && (n.\u0275\u0275domProperty("disabled", o.disabled), n.\u0275\u0275advance(2), n.\u0275\u0275repeater(o.months), n.\u0275\u0275advance(2), n.\u0275\u0275domProperty("disabled", o.disabled), n.\u0275\u0275advance(2), n.\u0275\u0275repeater(o.years)); }, styles: [`ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), Ao = (() => {
    let t = class t {
        constructor() { this.navigation = Ke, this.i18n = c(Q), this.months = [], this.navigate = new g, this.select = new g; }
        onClickPrev(e) { e.currentTarget.focus(), this.navigate.emit(this.navigation.PREV); }
        onClickNext(e) { e.currentTarget.focus(), this.navigate.emit(this.navigation.NEXT); }
        idMonth(e) { return e; }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-datepicker-navigation"]], inputs: { date: "date", disabled: "disabled", months: "months", showSelect: "showSelect", prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", selectBoxes: "selectBoxes" }, outputs: { navigate: "navigate", select: "select" }, decls: 11, vars: 4, consts: () => { let e; e = $localize `:@@ngb.datepicker.previous-month:Previous month`; let i; i = $localize `:@@ngb.datepicker.previous-month:Previous month`; let o; o = $localize `:@@ngb.datepicker.next-month:Next month`; let r; return r = $localize `:@@ngb.datepicker.next-month:Next month`, [[1, "ngb-dp-arrow", "ngb-dp-arrow-prev"], ["type", "button", "aria-label", e, "title", i, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-chevron"], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years"], ["aria-live", "polite", 1, "visually-hidden"], [1, "ngb-dp-arrow", "ngb-dp-arrow-next"], ["type", "button", "aria-label", o, "title", r, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-select", 3, "select", "date", "disabled", "months", "years"], [1, "ngb-dp-arrow"], [1, "ngb-dp-month-name"]]; }, template: function (i, o) { i & 1 && (n.\u0275\u0275elementStart(0, "div", 0)(1, "button", 1), n.\u0275\u0275listener("click", function (l) { return o.onClickPrev(l); }), n.\u0275\u0275element(2, "span", 2), n.\u0275\u0275elementEnd()(), n.\u0275\u0275conditionalCreate(3, yn, 1, 4, "ngb-datepicker-navigation-select", 3), n.\u0275\u0275conditionalCreate(4, wn, 2, 0), n.\u0275\u0275elementStart(5, "div", 4), n.\u0275\u0275repeaterCreate(6, Tn, 2, 1, "span", null, ai, !0), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(8, "div", 5)(9, "button", 6), n.\u0275\u0275listener("click", function (l) { return o.onClickNext(l); }), n.\u0275\u0275element(10, "span", 2), n.\u0275\u0275elementEnd()()), i & 2 && (n.\u0275\u0275advance(), n.\u0275\u0275property("disabled", o.prevDisabled), n.\u0275\u0275advance(2), n.\u0275\u0275conditional(o.showSelect ? 3 : -1), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.showSelect ? -1 : 4), n.\u0275\u0275advance(2), n.\u0275\u0275repeater(o.months), n.\u0275\u0275advance(3), n.\u0275\u0275property("disabled", o.nextDisabled)); }, dependencies: [Mo], styles: [`ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), Ro = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbDatepickerContent", ""]] }); let s = t; return s; })(), No = (() => {
    let t = class t {
        constructor() { this._keyboardService = c(Co), this._service = c(_t), this.i18n = c(Q), this.datepicker = c(vi); }
        set month(e) { this.viewModel = this._service.getMonth(e); }
        onKeyDown(e) { this._keyboardService.processKey(e, this.datepicker); }
        doSelect(e) { !e.context.disabled && !e.hidden && this.datepicker.onDateSelect(e.date); }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-datepicker-month"]], hostAttrs: ["role", "grid"], hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("keydown", function (l) { return o.onKeyDown(l); }); }, inputs: { month: "month" }, decls: 3, vars: 1, consts: [["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["role", "row", 1, "ngb-dp-week"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "disabled", "tabindex", "hidden", "ngb-dp-today"], ["role", "gridcell", 1, "ngb-dp-day", 3, "click", "tabindex"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (i, o) { i & 1 && (n.\u0275\u0275conditionalCreate(0, Cn, 4, 1, "div", 0), n.\u0275\u0275repeaterCreate(1, Pn, 1, 1, null, null, n.\u0275\u0275repeaterTrackByIdentity)), i & 2 && (n.\u0275\u0275conditional(o.viewModel.weekdays.length > 0 ? 0 : -1), n.\u0275\u0275advance(), n.\u0275\u0275repeater(o.viewModel.weeks)); }, dependencies: [Z], styles: [`ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}
`], encapsulation: 2 });
    let s = t;
    return s;
})(), vi = (() => {
    let t = class t {
        constructor() { this.injector = c(M), this._service = c(_t), this._calendar = c(ee), this._i18n = c(Q), this._config = c(Ct), this._nativeElement = c(S).nativeElement, this._ngbDateAdapter = c(Xe), this._ngZone = c(A), this._destroyRef = c(se), this._injector = c(M), this._controlValue = null, this._publicState = {}, this._initialized = !1, this.dayTemplate = this._config.dayTemplate, this.dayTemplateData = this._config.dayTemplateData, this.displayMonths = this._config.displayMonths, this.firstDayOfWeek = this._config.firstDayOfWeek, this.footerTemplate = this._config.footerTemplate, this.markDisabled = this._config.markDisabled, this.maxDate = this._config.maxDate, this.minDate = this._config.minDate, this.navigation = this._config.navigation, this.outsideDays = this._config.outsideDays, this.showWeekNumbers = this._config.showWeekNumbers, this.startDate = this._config.startDate, this.weekdays = this._config.weekdays, this.navigate = new g, this.dateSelect = new g, this.onChange = i => { }, this.onTouched = () => { }; let e = c(x); this._service.dateSelect$.pipe(L()).subscribe(i => { this.dateSelect.emit(i); }), this._service.model$.pipe(L()).subscribe(i => { let o = i.firstDate, r = this.model ? this.model.firstDate : null; this._publicState = { maxDate: i.maxDate, minDate: i.minDate, firstDate: i.firstDate, lastDate: i.lastDate, focusedDate: i.focusDate, months: i.months.map(_ => _.firstDate) }; let l = !1; if (!o.equals(r) && (this.navigate.emit({ current: r ? { year: r.year, month: r.month } : null, next: { year: o.year, month: o.month }, preventDefault: () => l = !0 }), l && r !== null)) {
            this._service.open(r);
            return;
        } let d = i.selectedDate, h = i.focusDate, u = this.model ? this.model.focusDate : null; this.model = i, le(d, this._controlValue) && (this._controlValue = d, this.onTouched(), this.onChange(this._ngbDateAdapter.toModel(d))), le(h, u) && u && i.focusVisible && this.focus(), e.markForCheck(); }); }
        get state() { return this._publicState; }
        get calendar() { return this._calendar; }
        get i18n() { return this._i18n; }
        focusDate(e) { this._service.focus(D.from(e)); }
        focusSelect() { this._service.focusSelect(); }
        focus() { U({ read: () => { this._nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]')?.focus(); } }, { injector: this._injector }); }
        navigateTo(e) { this._service.open(D.from(e ? e.day ? e : ke(F({}, e), { day: 1 }) : null)); }
        ngAfterViewInit() { this._ngZone.runOutsideAngular(() => { let e = I(this._contentEl.nativeElement, "focusin"), i = I(this._contentEl.nativeElement, "focusout"); Yi(e, i).pipe($(o => { let r = o.target, l = o.relatedTarget; return !(r?.classList.contains("ngb-dp-day") && l?.classList.contains("ngb-dp-day") && this._nativeElement.contains(r) && this._nativeElement.contains(l)); }), L(this._destroyRef)).subscribe(({ type: o }) => this._ngZone.run(() => this._service.set({ focusVisible: o === "focusin" }))); }); }
        ngOnInit() { if (this.model === void 0) {
            let e = {};
            ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].forEach(i => e[i] = this[i]), this._service.set(e), this.navigateTo(this.startDate);
        } this.dayTemplate || (this.dayTemplate = this._defaultDayTemplate), this._initialized = !0; }
        ngOnChanges(e) { let i = {}; if (["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].filter(o => o in e).forEach(o => i[o] = this[o]), this._service.set(i), "startDate" in e && this._initialized) {
            let { currentValue: o, previousValue: r } = e.startDate;
            yi(r, o) && this.navigateTo(this.startDate);
        } }
        onDateSelect(e) { this._service.focus(e), this._service.select(e, { emitEvent: !0 }); }
        onNavigateDateSelect(e) { this._service.open(e); }
        onNavigateEvent(e) { switch (e) {
            case Ke.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, "m", 1));
                break;
            case Ke.NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, "m", 1));
                break;
        } }
        registerOnChange(e) { this.onChange = e; }
        registerOnTouched(e) { this.onTouched = e; }
        setDisabledState(e) { this._service.set({ disabled: e }); }
        writeValue(e) { this._controlValue = D.from(this._ngbDateAdapter.fromModel(e)), this._service.select(this._controlValue); }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-datepicker"]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, Ro, 7), i & 2) {
            let l;
            n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.contentTemplateFromContent = l.first);
        } }, viewQuery: function (i, o) { if (i & 1 && (n.\u0275\u0275viewQuery(In, 7), n.\u0275\u0275viewQuery(kn, 7)), i & 2) {
            let r;
            n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o._defaultDayTemplate = r.first), n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o._contentEl = r.first);
        } }, hostVars: 2, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275classProp("disabled", o.model.disabled); }, inputs: { contentTemplate: "contentTemplate", dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekNumbers: "showWeekNumbers", startDate: "startDate", weekdays: "weekdays" }, outputs: { navigate: "navigate", dateSelect: "dateSelect" }, exportAs: ["ngbDatepicker"], features: [n.\u0275\u0275ProvidersFeature([{ provide: Ae, useExisting: te(() => t), multi: !0 }, _t]), n.\u0275\u0275NgOnChangesFeature], decls: 10, vars: 9, consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], ["content", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"], [1, "ngb-dp-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], [1, "ngb-dp-month"], [1, "ngb-dp-month-name"], [3, "month"], [3, "navigate", "select", "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"]], template: function (i, o) { if (i & 1 && (n.\u0275\u0275template(0, Fn, 1, 5, "ng-template", null, 0, n.\u0275\u0275templateRefExtractor)(2, Vn, 2, 0, "ng-template", null, 1, n.\u0275\u0275templateRefExtractor), n.\u0275\u0275elementStart(4, "div", 3), n.\u0275\u0275conditionalCreate(5, Ln, 1, 7, "ngb-datepicker-navigation", 4), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(6, "div", 5, 2), n.\u0275\u0275template(8, Gn, 0, 0, "ng-template", 6), n.\u0275\u0275elementEnd(), n.\u0275\u0275template(9, Hn, 0, 0, "ng-template", 7)), i & 2) {
            let r = n.\u0275\u0275reference(3);
            n.\u0275\u0275advance(5), n.\u0275\u0275conditional(o.navigation !== "none" ? 5 : -1), n.\u0275\u0275advance(), n.\u0275\u0275classProp("ngb-dp-months", !o.contentTemplate), n.\u0275\u0275advance(2), n.\u0275\u0275property("ngTemplateOutlet", o.contentTemplate || (o.contentTemplateFromContent == null ? null : o.contentTemplateFromContent.templateRef) || r)("ngTemplateOutletContext", n.\u0275\u0275pureFunction1(7, ri, o))("ngTemplateOutletInjector", o.injector), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", o.footerTemplate);
        } }, dependencies: [Z, Eo, No, Ao], styles: [`ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), xe = (s, t) => t ? t.some(a => a.contains(s)) : !1, jt = (s, t) => !t || Zs(s, t) != null, Po = (() => { let s = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2, t = () => /Android/.test(navigator.userAgent); return typeof navigator < "u" ? !!navigator.userAgent && (s() || t()) : !1; })(), Io = s => Po ? () => setTimeout(() => s(), 100) : s;
function Re(s, t, a, e, i, o, r, l) { a && s.runOutsideAngular(Io(() => { let d = p => { let f = p.target; return p.button === 2 || xe(f, r) ? !1 : a === "inside" ? xe(f, o) && jt(f, l) : a === "outside" ? !xe(f, o) : jt(f, l) || !xe(f, o); }, h = I(t, "keydown").pipe(N(i), $(p => p.key === "Escape"), qe(p => p.preventDefault())), u = I(t, "mousedown").pipe(K(d), N(i)), _ = I(t, "mouseup").pipe(dt(u), $(([p, f]) => f), Xi(0), N(i)); si([h.pipe(K(p => 0)), _.pipe(K(p => 1))]).subscribe(p => s.run(() => e(p))); })); }
var bi = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");
function Et(s) { let t = Array.from(s.querySelectorAll(bi)).filter(a => a.tabIndex !== -1); return [t[0], t[t.length - 1]]; }
var Mt = (s, t, a, e = !1) => { s.runOutsideAngular(() => { let i = I(t, "focusin").pipe(N(a), K(o => o.target)); I(t, "keydown").pipe(N(a), $(o => o.key === "Tab"), dt(i)).subscribe(([o, r]) => { let [l, d] = Et(t); (r === l || r === t) && o.shiftKey && (d.focus(), o.preventDefault()), r === d && !o.shiftKey && (l.focus(), o.preventDefault()); }), e && I(t, "click").pipe(N(a), dt(i), K(o => o[1])).subscribe(o => o.focus()); }); }, ko = (() => { let t = class t {
    constructor() { this._element = c(B).documentElement; }
    isRTL() { return (this._element.getAttribute("dir") || "").toLowerCase() === "rtl"; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Fo = /\s+/, xo = /  +/gi, Bo = { top: ["top"], bottom: ["bottom"], start: ["left", "right"], left: ["left"], end: ["right", "left"], right: ["right"], "top-start": ["top-start", "top-end"], "top-left": ["top-start"], "top-end": ["top-end", "top-start"], "top-right": ["top-end"], "bottom-start": ["bottom-start", "bottom-end"], "bottom-left": ["bottom-start"], "bottom-end": ["bottom-end", "bottom-start"], "bottom-right": ["bottom-end"], "start-top": ["left-start", "right-start"], "left-top": ["left-start"], "start-bottom": ["left-end", "right-end"], "left-bottom": ["left-end"], "end-top": ["right-start", "left-start"], "right-top": ["right-start"], "end-bottom": ["right-end", "left-end"], "right-bottom": ["right-end"] };
function Vo(s, t) { let [a, e] = Bo[s]; return t && e || a; }
var Lo = /^left/, Go = /^right/, Ho = /^start/, Jo = /^end/;
function $o(s, t) { let [a, e] = t.split("-"), i = a.replace(Lo, "start").replace(Go, "end"), o = [i]; if (e) {
    let r = e;
    (a === "left" || a === "right") && (r = r.replace(Ho, "top").replace(Jo, "bottom")), o.push(`${i}-${r}`);
} return s && (o = o.map(r => `${s}-${r}`)), o.join(" "); }
function Wt({ placement: s, baseClass: t }, a) { let e = Array.isArray(s) ? s : s.split(Fo), i = ["top", "bottom", "start", "end", "top-start", "top-end", "bottom-start", "bottom-end", "start-top", "start-bottom", "end-top", "end-bottom"], o = e.findIndex(h => h === "auto"); o >= 0 && i.forEach(function (h) { e.find(u => u.search("^" + h) !== -1) == null && e.splice(o++, 1, h); }); let r = e.map(h => Vo(h, a.isRTL())); return { placement: r.shift(), modifiers: [{ name: "bootstrapClasses", enabled: !!t, phase: "write", fn({ state: h }) { let u = new RegExp(t + "(-[a-z]+)*", "gi"), _ = h.elements.popper, p = h.placement, f = _.className; f = f.replace(u, ""), f += ` ${$o(t, p)}`, f = f.trim().replace(xo, " "), _.className = f; } }, xt, Vt, Ft, { enabled: !0, name: "flip", options: { fallbackPlacements: r } }] }; }
function Kt(s) { return s; }
function Ne() { let s = c(ko), t = null; return { createPopper(a) { if (!t) {
        let i = (a.updatePopperOptions || Kt)(Wt(a, s));
        t = Lt(a.hostElement, a.targetElement, i);
    } }, update() { t && t.update(); }, setOptions(a) { if (t) {
        let i = (a.updatePopperOptions || Kt)(Wt(a, s));
        t.setOptions(i);
    } }, destroy() { t && (t.destroy(), t = null); } }; }
function jo() { return new Wo; }
var Di = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: () => jo(), providedIn: "root" }); let s = t; return s; })(), Wo = (() => { let t = class t extends Di {
    parse(e) { if (e != null) {
        let i = e.trim().split("-");
        if (i.length === 1 && v(i[0]))
            return { year: P(i[0]), month: null, day: null };
        if (i.length === 2 && v(i[0]) && v(i[1]))
            return { year: P(i[0]), month: P(i[1]), day: null };
        if (i.length === 3 && v(i[0]) && v(i[1]) && v(i[2]))
            return { year: P(i[0]), month: P(i[1]), day: P(i[2]) };
    } return null; }
    format(e) { return e ? `${e.year}-${v(e.month) ? ae(e.month) : ""}-${v(e.day) ? ae(e.day) : ""}` : ""; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Ut = (() => { let t = class t extends Ct {
    constructor() { super(...arguments), this.autoClose = !0, this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"], this.popperOptions = e => e, this.restoreFocus = !0; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })();
function Pe(s) { return t => (t.modifiers.push(Bt, { name: "offset", options: { offset: () => s } }), t); }
var tl = (() => { let t = class t {
    constructor() { this._parserFormatter = c(Di), this._elRef = c(S), this._vcRef = c(Dt), this._ngZone = c(A), this._calendar = c(ee), this._dateAdapter = c(Xe), this._document = c(B), this._changeDetector = c(x), this._injector = c(M), this._config = c(Ut), this._cRef = null, this._disabled = !1, this._elWithFocus = null, this._model = null, this._positioning = Ne(), this._destroyCloseHandlers$ = new b, this.autoClose = this._config.autoClose, this.placement = this._config.placement, this.popperOptions = this._config.popperOptions, this.container = this._config.container, this.positionTarget = this._config.positionTarget, this.dateSelect = new g, this.navigate = new g, this.closed = new g, this._onChange = e => { }, this._onTouched = () => { }, this._validatorChange = () => { }; }
    get disabled() { return this._disabled; }
    set disabled(e) { this._disabled = e === "" || e && e !== "false", this.isOpen() && this._cRef.instance.setDisabledState(this._disabled); }
    registerOnChange(e) { this._onChange = e; }
    registerOnTouched(e) { this._onTouched = e; }
    registerOnValidatorChange(e) { this._validatorChange = e; }
    setDisabledState(e) { this.disabled = e; }
    validate(e) { let { value: i } = e; if (i != null) {
        let o = this._fromDateStruct(this._dateAdapter.fromModel(i));
        if (!o)
            return { ngbDate: { invalid: i } };
        if (this.minDate && o.before(D.from(this.minDate)))
            return { ngbDate: { minDate: { minDate: this.minDate, actual: i } } };
        if (this.maxDate && o.after(D.from(this.maxDate)))
            return { ngbDate: { maxDate: { maxDate: this.maxDate, actual: i } } };
    } return null; }
    writeValue(e) { this._model = this._fromDateStruct(this._dateAdapter.fromModel(e)), this._writeModelValue(this._model); }
    manualDateChange(e, i = !1) { let o = e !== this._inputValue; o && (this._inputValue = e, this._model = this._fromDateStruct(this._parserFormatter.parse(e))), (o || !i) && this._onChange(this._model ? this._dateAdapter.toModel(this._model) : e === "" ? null : e), i && this._model && this._writeModelValue(this._model); }
    isOpen() { return !!this._cRef; }
    open() { if (!this.isOpen()) {
        this._cRef = this._vcRef.createComponent(vi, { injector: this._injector }), this._applyPopupStyling(this._cRef.location.nativeElement), this._applyDatepickerInputs(this._cRef), this._subscribeForDatepickerOutputs(this._cRef.instance), this._cRef.instance.ngOnInit(), this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model)), this._cRef.instance.registerOnChange(i => { this.writeValue(i), this._onChange(i), this._onTouched(); }), this._cRef.changeDetectorRef.detectChanges(), this._cRef.instance.setDisabledState(this.disabled), this.container === "body" && this._document.querySelector(this.container)?.appendChild(this._cRef.location.nativeElement), this._elWithFocus = this._document.activeElement, Mt(this._ngZone, this._cRef.location.nativeElement, this.closed, !0), setTimeout(() => this._cRef?.instance.focus());
        let e;
        if (j(this.positionTarget) ? e = this._document.querySelector(this.positionTarget) : this.positionTarget instanceof HTMLElement ? e = this.positionTarget : e = this._elRef.nativeElement, this.positionTarget && !e)
            throw new Error("ngbDatepicker could not find element declared in [positionTarget] to position against.");
        this._ngZone.runOutsideAngular(() => { this._cRef && e && (this._positioning.createPopper({ hostElement: e, targetElement: this._cRef.location.nativeElement, placement: this.placement, updatePopperOptions: i => this.popperOptions(Pe([0, 2])(i)) }), this._afterRenderRef = Ee({ mixedReadWrite: () => { this._positioning.update(); } }, { injector: this._injector })); }), this._setCloseHandlers();
    } }
    close() { if (this.isOpen()) {
        this._cRef?.destroy(), this._cRef = null, this._positioning.destroy(), this._afterRenderRef?.destroy(), this._destroyCloseHandlers$.next(), this.closed.emit(), this._changeDetector.markForCheck();
        let e = this._elWithFocus;
        j(this.restoreFocus) ? e = this._document.querySelector(this.restoreFocus) : this.restoreFocus !== void 0 && (e = this.restoreFocus), e && e.focus ? e.focus() : this._document.body.focus();
    } }
    toggle() { this.isOpen() ? this.close() : this.open(); }
    navigateTo(e) { this.isOpen() && this._cRef.instance.navigateTo(e); }
    onBlur() { this._onTouched(); }
    onFocus() { this._elWithFocus = this._elRef.nativeElement; }
    ngOnChanges(e) { if ((e.minDate || e.maxDate) && (this._validatorChange(), this.isOpen() && (e.minDate && this._cRef.setInput("minDate", this.minDate), e.maxDate && this._cRef.setInput("maxDate", this.maxDate))), e.datepickerClass) {
        let { currentValue: i, previousValue: o } = e.datepickerClass;
        this._applyPopupClass(i, o);
    } e.autoClose && this.isOpen() && this._setCloseHandlers(); }
    ngOnDestroy() { this.close(); }
    _applyDatepickerInputs(e) { ["contentTemplate", "dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showNavigation", "showWeekNumbers", "weekdays"].forEach(i => { this[i] !== void 0 && e.setInput(i, this[i]); }), e.setInput("startDate", this.startDate || this._model); }
    _applyPopupClass(e, i) { let o = this._cRef?.location.nativeElement; o && (e && o.classList.add(e), i && o.classList.remove(i)); }
    _applyPopupStyling(e) { e.classList.add("dropdown-menu", "show"), this.container === "body" && e.classList.add("ngb-dp-body"), this._applyPopupClass(this.datepickerClass); }
    _subscribeForDatepickerOutputs(e) { e.navigate.subscribe(i => this.navigate.emit(i)), e.dateSelect.subscribe(i => { this.dateSelect.emit(i), (this.autoClose === !0 || this.autoClose === "inside") && this.close(); }); }
    _writeModelValue(e) { let i = this._parserFormatter.format(e); this._inputValue = i, this._elRef.nativeElement.value = i, this.isOpen() && (this._cRef.instance.writeValue(this._dateAdapter.toModel(e)), this._onTouched()); }
    _fromDateStruct(e) { let i = e ? new D(e.year, e.month, e.day) : null; return this._calendar.isValid(i) ? i : null; }
    _setCloseHandlers() { this._destroyCloseHandlers$.next(), Re(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["input", "ngbDatepicker", ""]], hostVars: 1, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("input", function (l) { return o.manualDateChange(l.target.value); })("change", function (l) { return o.manualDateChange(l.target.value, !0); })("focus", function () { return o.onFocus(); })("blur", function () { return o.onBlur(); }), i & 2 && n.\u0275\u0275domProperty("disabled", o.disabled); }, inputs: { autoClose: "autoClose", contentTemplate: "contentTemplate", datepickerClass: "datepickerClass", dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", minDate: "minDate", maxDate: "maxDate", navigation: "navigation", outsideDays: "outsideDays", placement: "placement", popperOptions: "popperOptions", restoreFocus: "restoreFocus", showWeekNumbers: "showWeekNumbers", startDate: "startDate", container: "container", positionTarget: "positionTarget", weekdays: "weekdays", disabled: "disabled" }, outputs: { dateSelect: "dateSelect", navigate: "navigate", closed: "closed" }, exportAs: ["ngbDatepicker"], features: [n.\u0275\u0275ProvidersFeature([{ provide: Ae, useExisting: te(() => t), multi: !0 }, { provide: on, useExisting: te(() => t), multi: !0 }, { provide: Ct, useExisting: Ut }]), n.\u0275\u0275NgOnChangesFeature] }); let s = t; return s; })(), Ko = (() => { let t = class t extends ee {
    getDaysPerWeek() { return 7; }
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    getNext(e, i = "d", o = 1) { switch (e = new D(e.year, e.month, e.day), i) {
        case "y": return e = this._setYear(e, e.year + o), e.month = 1, e.day = 1, e;
        case "m": return e = this._setMonth(e, e.month + o), e.day = 1, e;
        case "d": return this._setDay(e, e.day + o);
        default: return e;
    } }
    getPrev(e, i = "d", o = 1) { return this.getNext(e, i, -o); }
    getWeekday(e) { let i = this.toGregorian(e).getDay(); return i === 0 ? 7 : i; }
    getWeekNumber(e, i) { i === 7 && (i = 0); let o = (11 - i) % 7, r = e[o], l = this.toGregorian(r); l.setDate(l.getDate() + 4 - (l.getDay() || 7)); let d = l.getTime(), h = this.toGregorian(new D(r.year, 1, 1)); return Math.floor(Math.round((d - h.getTime()) / 864e5) / 7) + 1; }
    getToday() { return this.fromGregorian(new Date); }
    isValid(e) { return e != null && v(e.year) && v(e.month) && v(e.day) && !isNaN(this.toGregorian(e).getTime()); }
    _setDay(e, i) { i = +i; let o = this.getDaysPerMonth(e.month, e.year); if (i <= 0)
        for (; i <= 0;)
            e = this._setMonth(e, e.month - 1), o = this.getDaysPerMonth(e.month, e.year), i += o;
    else if (i > o)
        for (; i > o;)
            i -= o, e = this._setMonth(e, e.month + 1), o = this.getDaysPerMonth(e.month, e.year); return e.day = i, e; }
    _setMonth(e, i) { return i = +i, e.year = e.year + Math.floor((i - 1) / 12), e.month = Math.floor(((i - 1) % 12 + 12) % 12) + 1, e; }
    _setYear(e, i) { return e.year = +i, e; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })();
function Uo(s) { return (14 + 11 * s) % 30 < 11; }
function Be(s) { let t = s.getFullYear(); return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0; }
function Zo(s, t) { return Math.ceil(29.5 * t) + (s - 1) * 354 + Math.floor((3 + 11 * s) / 30); }
function zo(s) { return (s - 1) * 354 + Math.floor((3 + 11 * s) / 30); }
function nt(s, t) { return s - t * Math.floor(s / t); }
var _e = 17214255e-1, Zt = 19484395e-1, Qo = (() => { let t = class t extends Ko {
    fromGregorian(e) { let i = e.getFullYear(), o = e.getMonth(), r = e.getDate(), l = _e - 1 + 365 * (i - 1) + Math.floor((i - 1) / 4) + -Math.floor((i - 1) / 100) + Math.floor((i - 1) / 400) + Math.floor((367 * (o + 1) - 362) / 12 + (o + 1 <= 2 ? 0 : Be(e) ? -1 : -2) + r); l = Math.floor(l) + .5; let d = l - Zt, h = Math.floor((30 * d + 10646) / 10631), u = Math.ceil((d - 29 - zo(h)) / 29.5); u = Math.min(u, 11); let _ = Math.ceil(d - Zo(h, u)) + 1; return new D(h, u + 1, _); }
    toGregorian(e) { let i = e.year, o = e.month - 1, l = e.day + Math.ceil(29.5 * o) + (i - 1) * 354 + Math.floor((3 + 11 * i) / 30) + Zt - 1, d = Math.floor(l - .5) + .5, h = d - _e, u = Math.floor(h / 146097), _ = nt(h, 146097), p = Math.floor(_ / 36524), f = nt(_, 36524), C = Math.floor(f / 1461), T = nt(f, 1461), y = Math.floor(T / 365), w = u * 400 + p * 100 + C * 4 + y; p === 4 || y === 4 || w++; let R = _e + 365 * (w - 1) + Math.floor((w - 1) / 4) - Math.floor((w - 1) / 100) + Math.floor((w - 1) / 400), Ie = d - R, et = _e - 1 + 365 * (w - 1) + Math.floor((w - 1) / 4) - Math.floor((w - 1) / 100) + Math.floor((w - 1) / 400) + Math.floor(739 / 12 + (Be(new Date(w, 3, 1)) ? -1 : -2) + 1), ue = d < et ? 0 : Be(new Date(w, 3, 1)) ? 1 : 2, oe = Math.floor(((Ie + ue) * 12 + 373) / 367), tt = _e - 1 + 365 * (w - 1) + Math.floor((w - 1) / 4) - Math.floor((w - 1) / 100) + Math.floor((w - 1) / 400) + Math.floor((367 * oe - 362) / 12 + (oe <= 2 ? 0 : Be(new Date(w, oe - 1, 1)) ? -1 : -2) + 1), J = d - tt + 1; return new Date(w, oe - 1, J); }
    getDaysPerMonth(e, i) { i = i + Math.floor(e / 13), e = (e - 1) % 12 + 1; let o = 29 + e % 2; return e === 12 && Uo(i) && o++, o; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Ve = new Date(1882, 10, 12), Yo = new Date(2174, 10, 25), pe = 1300, zt = 1600, qo = 1e3 * 60 * 60 * 24, fe = ["101010101010", "110101010100", "111011001001", "011011010100", "011011101010", "001101101100", "101010101101", "010101010101", "011010101001", "011110010010", "101110101001", "010111010100", "101011011010", "010101011100", "110100101101", "011010010101", "011101001010", "101101010100", "101101101010", "010110101101", "010010101110", "101001001111", "010100010111", "011010001011", "011010100101", "101011010101", "001011010110", "100101011011", "010010011101", "101001001101", "110100100110", "110110010101", "010110101100", "100110110110", "001010111010", "101001011011", "010100101011", "101010010101", "011011001010", "101011101001", "001011110100", "100101110110", "001010110110", "100101010110", "101011001010", "101110100100", "101111010010", "010111011001", "001011011100", "100101101101", "010101001101", "101010100101", "101101010010", "101110100101", "010110110100", "100110110110", "010101010111", "001010010111", "010101001011", "011010100011", "011101010010", "101101100101", "010101101010", "101010101011", "010100101011", "110010010101", "110101001010", "110110100101", "010111001010", "101011010110", "100101010111", "010010101011", "100101001011", "101010100101", "101101010010", "101101101010", "010101110101", "001001110110", "100010110111", "010001011011", "010101010101", "010110101001", "010110110100", "100111011010", "010011011101", "001001101110", "100100110110", "101010101010", "110101010100", "110110110010", "010111010101", "001011011010", "100101011011", "010010101011", "101001010101", "101101001001", "101101100100", "101101110001", "010110110100", "101010110101", "101001010101", "110100100101", "111010010010", "111011001001", "011011010100", "101011101001", "100101101011", "010010101011", "101010010011", "110101001001", "110110100100", "110110110010", "101010111001", "010010111010", "101001011011", "010100101011", "101010010101", "101100101010", "101101010101", "010101011100", "010010111101", "001000111101", "100100011101", "101010010101", "101101001010", "101101011010", "010101101101", "001010110110", "100100111011", "010010011011", "011001010101", "011010101001", "011101010100", "101101101010", "010101101100", "101010101101", "010101010101", "101100101001", "101110010010", "101110101001", "010111010100", "101011011010", "010101011010", "101010101011", "010110010101", "011101001001", "011101100100", "101110101010", "010110110101", "001010110110", "101001010110", "111001001101", "101100100101", "101101010010", "101101101010", "010110101101", "001010101110", "100100101111", "010010010111", "011001001011", "011010100101", "011010101100", "101011010110", "010101011101", "010010011101", "101001001101", "110100010110", "110110010101", "010110101010", "010110110101", "001011011010", "100101011011", "010010101101", "010110010101", "011011001010", "011011100100", "101011101010", "010011110101", "001010110110", "100101010110", "101010101010", "101101010100", "101111010010", "010111011001", "001011101010", "100101101101", "010010101101", "101010010101", "101101001010", "101110100101", "010110110010", "100110110101", "010011010110", "101010010111", "010101000111", "011010010011", "011101001001", "101101010101", "010101101010", "101001101011", "010100101011", "101010001011", "110101000110", "110110100011", "010111001010", "101011010110", "010011011011", "001001101011", "100101001011", "101010100101", "101101010010", "101101101001", "010101110101", "000101110110", "100010110111", "001001011011", "010100101011", "010101100101", "010110110100", "100111011010", "010011101101", "000101101101", "100010110110", "101010100110", "110101010010", "110110101001", "010111010100", "101011011010", "100101011011", "010010101011", "011001010011", "011100101001", "011101100010", "101110101001", "010110110010", "101010110101", "010101010101", "101100100101", "110110010010", "111011001001", "011011010010", "101011101001", "010101101011", "010010101011", "101001010101", "110100101001", "110101010100", "110110101010", "100110110101", "010010111010", "101000111011", "010010011011", "101001001101", "101010101010", "101011010101", "001011011010", "100101011101", "010001011110", "101000101110", "110010011010", "110101010101", "011010110010", "011010111001", "010010111010", "101001011101", "010100101101", "101010010101", "101101010010", "101110101000", "101110110100", "010110111001", "001011011010", "100101011010", "101101001010", "110110100100", "111011010001", "011011101000", "101101101010", "010101101101", "010100110101", "011010010101", "110101001010", "110110101000", "110111010100", "011011011010", "010101011011", "001010011101", "011000101011", "101100010101", "101101001010", "101110010101", "010110101010", "101010101110", "100100101110", "110010001111", "010100100111", "011010010101", "011010101010", "101011010110", "010101011101", "001010011101"];
function Xo(s, t) { let a = Date.UTC(s.getFullYear(), s.getMonth(), s.getDate()), e = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()), i = Math.abs(a - e); return Math.round(i / qo); }
var il = (() => { let t = class t extends Qo {
    fromGregorian(e) { let i = 1, o = 0, r = 1300, l = Xo(e, Ve); if (e.getTime() - Ve.getTime() >= 0 && e.getTime() - Yo.getTime() <= 0) {
        let d = 1300;
        for (let h = 0; h < fe.length; h++, d++)
            for (let u = 0; u < 12; u++) {
                let _ = +fe[h][u] + 29;
                if (l <= _)
                    return i = l + 1, i > _ && (i = 1, u++), u > 11 && (u = 0, d++), o = u, r = d, new D(r, o + 1, i);
                l = l - _;
            }
        return null;
    }
    else
        return super.fromGregorian(e); }
    toGregorian(e) { let i = e.year, o = e.month - 1, r = e.day, l = new Date(Ve), d = r - 1; if (i >= pe && i <= zt) {
        for (let h = 0; h < i - pe; h++)
            for (let u = 0; u < 12; u++)
                d += +fe[h][u] + 29;
        for (let h = 0; h < o; h++)
            d += +fe[i - pe][h] + 29;
        l.setDate(Ve.getDate() + d);
    }
    else
        l = super.toGregorian(e); return l; }
    getDaysPerMonth(e, i) { if (i >= pe && i <= zt) {
        let o = i - pe;
        return +fe[o][e - 1] + 29;
    } return super.getDaysPerMonth(e, i); }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })();
function Le(s) { let t = sa(s.year, s.month, s.day), a = wi(t); return a.setHours(6, 30, 3, 200), a; }
function ea(s) { let t = Rt(s.getFullYear(), s.getMonth() + 1, s.getDate()); return na(t); }
function ta(s, t) { return s.year = +t, s; }
function pt(s, t) { return t = +t, s.year = s.year + Math.floor((t - 1) / 12), s.month = Math.floor(((t - 1) % 12 + 12) % 12) + 1, s; }
function ia(s, t) { let a = st(s.month, s.year); if (t <= 0)
    for (; t <= 0;)
        s = pt(s, s.month - 1), a = st(s.month, s.year), t += a;
else if (t > a)
    for (; t > a;)
        t -= a, s = pt(s, s.month + 1), a = st(s.month, s.year); return s.day = t, s; }
function G(s, t) { return s - t * Math.floor(s / t); }
function O(s, t) { return Math.trunc(s / t); }
function At(s) { let t = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178], a = t.length, e = s + 621, i = -14, o = t[0]; if (s < o || s >= t[a - 1])
    throw new Error("Invalid Jalali year " + s); let r; for (let _ = 1; _ < a; _ += 1) {
    let p = t[_];
    if (r = p - o, s < p)
        break;
    i = i + O(r, 33) * 8 + O(G(r, 33), 4), o = p;
} let l = s - o; i = i + O(l, 33) * 8 + O(G(l, 33) + 3, 4), G(r, 33) === 4 && r - l === 4 && (i += 1); let d = O(e, 4) - O((O(e, 100) + 1) * 3, 4) - 150, h = 20 + i - d; r - l < 6 && (l = l - r + O(r + 4, 33) * 33); let u = G(G(l + 1, 33) - 1, 4); return u === -1 && (u = 4), { leap: u, gy: e, march: h }; }
function wi(s) { let t = 4 * s + 139361631; t = t + O(O(4 * s + 183187720, 146097) * 3, 4) * 4 - 3908; let a = O(G(t, 1461), 4) * 5 + 308, e = O(G(a, 153), 5) + 1, i = G(O(a, 153), 12) + 1, o = O(t, 1461) - 100100 + O(8 - i, 6); return new Date(o, i - 1, e); }
function Rt(s, t, a) { let e = O((s + O(t - 8, 6) + 100100) * 1461, 4) + O(153 * G(t + 9, 12) + 2, 5) + a - 34840408; return e = e - O(O(s + 100100 + O(t - 8, 6), 100) * 3, 4) + 752, e; }
function na(s) { let t = wi(s).getFullYear(), a = t - 621, e = At(a), i = Rt(t, 3, e.march), o, r, l; if (l = s - i, l >= 0) {
    if (l <= 185)
        return r = 1 + O(l, 31), o = G(l, 31) + 1, new D(a, r, o);
    l -= 186;
}
else
    a -= 1, l += 179, e.leap === 1 && (l += 1); return r = 7 + O(l, 30), o = G(l, 30) + 1, new D(a, r, o); }
function sa(s, t, a) { let e = At(s); return Rt(e.gy, 3, e.march) + (t - 1) * 31 - O(t, 7) * (t - 7) + a - 1; }
function st(s, t) { return s <= 6 ? 31 : s <= 11 || At(t).leap === 0 ? 30 : 29; }
var nl = (() => { let t = class t extends ee {
    getDaysPerWeek() { return 7; }
    getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    getNext(e, i = "d", o = 1) { switch (e = new D(e.year, e.month, e.day), i) {
        case "y": return e = ta(e, e.year + o), e.month = 1, e.day = 1, e;
        case "m": return e = pt(e, e.month + o), e.day = 1, e;
        case "d": return ia(e, e.day + o);
        default: return e;
    } }
    getPrev(e, i = "d", o = 1) { return this.getNext(e, i, -o); }
    getWeekday(e) { let i = Le(e).getDay(); return i === 0 ? 7 : i; }
    getWeekNumber(e, i) { i === 7 && (i = 0); let o = (11 - i) % 7, r = e[o], l = Le(r); l.setDate(l.getDate() + 4 - (l.getDay() || 7)); let d = l.getTime(), h = Le(new D(r.year, 1, 1)); return Math.floor(Math.round((d - h.getTime()) / 864e5) / 7) + 1; }
    getToday() { return ea(new Date); }
    isValid(e) { return e != null && m(e.year) && m(e.month) && m(e.day) && !isNaN(Le(e).getTime()); }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Oe = 1080, Ue = 24 * Oe, Ti = 12 * Oe + 793, oa = 29 * Ue + Ti, aa = 11 * Oe + 204, ra = 2092591, la = 17214255e-1;
function ce(s) { return s % 4 === 0 && s % 100 !== 0 || s % 400 === 0; }
function ie(s) { let t = Math.floor((235 * s - 234) / 19), a = t * Ti + aa, e = t * 29 + Math.floor(a / Ue), i = a % Ue, o = e % 7; return (o === 2 || o === 4 || o === 6) && (e++, o = e % 7), o === 1 && i > 15 * Oe + 204 && !ne(s) ? e += 2 : o === 0 && i > 21 * Oe + 589 && ne(s - 1) && e++, e; }
function ge(s, t) { let a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; return ce(t) && a[1]++, a[s - 1]; }
function He(s) { return ne(s) ? 13 : 12; }
function Qt(s) { return ie(s + 1) - ie(s); }
function ne(s) { if (s != null) {
    let t = (s * 12 + 17) % 19;
    return t >= (t < 0 ? -7 : 12);
} return !1; }
function q(s, t) { let a = ie(t + 1) - ie(t), e = (a <= 380 ? a : a - 30) - 353, o = ne(t) ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29]; return e > 0 && o[2]++, e > 1 && o[1]++, o[s - 1]; }
function ft(s) { let t = 0; for (let a = 1; a < s.month; a++)
    t += q(a, s.year); return t + s.day; }
function ca(s, t) { let a = t >= 0; for (a || (t = -t); t > 0;)
    a ? t > He(s.year) - s.month ? (t -= He(s.year) - s.month + 1, s.year++, s.month = 1) : (s.month += t, t = 0) : t >= s.month ? (s.year--, t -= s.month, s.month = He(s.year)) : (s.month -= t, t = 0); return s; }
function da(s, t) { let a = t >= 0; for (a || (t = -t); t > 0;)
    a ? t > Qt(s.year) - ft(s) ? (t -= Qt(s.year) - ft(s) + 1, s.year++, s.month = 1, s.day = 1) : t > q(s.month, s.year) - s.day ? (t -= q(s.month, s.year) - s.day + 1, s.month++, s.day = 1) : (s.day += t, t = 0) : t >= s.day ? (t -= s.day, s.month--, s.month === 0 && (s.year--, s.month = He(s.year)), s.day = q(s.month, s.year)) : (s.day -= t, t = 0); return s; }
function Yt(s) { let t = new Date(s), a = t.getFullYear(), e = t.getMonth(), i = t.getDate(), o = la - 1 + 365 * (a - 1) + Math.floor((a - 1) / 4) - Math.floor((a - 1) / 100) + Math.floor((a - 1) / 400) + Math.floor((367 * (e + 1) - 362) / 12 + (e + 1 <= 2 ? 0 : ce(a) ? -1 : -2) + i); o = Math.floor(o + .5); let r = o - 347997, l = Math.floor(r * Ue / oa), d = Math.floor((l * 19 + 234) / 235) + 1, h = ie(d), u = r - h; for (; u < 1;)
    d--, h = ie(d), u = r - h; let _ = 1, p = u; for (; p > q(_, d);)
    p -= q(_, d), _++; return new D(d, _, p); }
function ot(s) { let t = s.year, a = s.month, e = s.day, i = ie(t); for (let u = 1; u < a; u++)
    i += q(u, t); i += e; let o = i - ra, r = o >= 0; r || (o = -o); let l = 1970, d = 1, h = 1; for (; o > 0;)
    r ? o >= (ce(l) ? 366 : 365) ? (o -= ce(l) ? 366 : 365, l++) : o >= ge(d, l) ? (o -= ge(d, l), d++) : (h += o, o = 0) : o >= (ce(l - 1) ? 366 : 365) ? (o -= ce(l - 1) ? 366 : 365, l--) : (d > 1 ? d-- : (d = 12, l--), o >= ge(d, l) ? o -= ge(d, l) : (h = ge(d, l) - o + 1, o = 0)); return new Date(l, d - 1, h); }
function me(s) { if (!s)
    return ""; let t = ["", "\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05D6", "\u05D7", "\u05D8"], a = ["\u05D9", "\u05D9\u05D0", "\u05D9\u05D1", "\u05D9\u05D2", "\u05D9\u05D3", "\u05D8\u05D5", "\u05D8\u05D6", "\u05D9\u05D6", "\u05D9\u05D7", "\u05D9\u05D8"], e = ["", "", "\u05DB", "\u05DC", "\u05DE", "\u05E0", "\u05E1", "\u05E2", "\u05E4", "\u05E6"], i = ["", "\u05E7", "\u05E8", "\u05E9", "\u05EA", "\u05EA\u05E7", "\u05EA\u05E8", "\u05EA\u05E9", "\u05EA\u05EA", "\u05EA\u05EA\u05E7"], o = ["", "\u05D0", "\u05D1", "\u05D1\u05D0", "\u05D1\u05D1", "\u05D4", "\u05D4\u05D0", "\u05D4\u05D1", "\u05D4\u05D1\u05D0", "\u05D4\u05D1\u05D1"], r = "\u05F3", l = "\u05F4", d = 0, h = [], u = 0; for (; s > 0;) {
    let _ = s % 10;
    if (u === 0)
        d = _;
    else if (u === 1)
        _ !== 1 ? h.unshift(e[_], t[d]) : h.unshift(a[d]);
    else if (u === 2)
        h.unshift(i[_]);
    else {
        _ !== 5 && h.unshift(o[_], r, " ");
        break;
    }
    s = Math.floor(s / 10), u === 0 && s === 0 && h.unshift(t[_]), u++;
} return h = h.join("").split(""), h.length === 1 ? h.push(r) : h.length > 1 && h.splice(h.length - 1, 0, l), h.join(""); }
var sl = (() => { let t = class t extends ee {
    getDaysPerWeek() { return 7; }
    getMonths(e) { return e && ne(e) ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }
    getWeeksPerMonth() { return 6; }
    isValid(e) { if (e != null) {
        let i = v(e.year) && v(e.month) && v(e.day);
        return i = i && e.month > 0 && e.month <= (ne(e.year) ? 13 : 12), i = i && e.day > 0 && e.day <= q(e.month, e.year), i && !isNaN(ot(e).getTime());
    } return !1; }
    getNext(e, i = "d", o = 1) { switch (e = new D(e.year, e.month, e.day), i) {
        case "y": return e.year += o, e.month = 1, e.day = 1, e;
        case "m": return e = ca(e, o), e.day = 1, e;
        case "d": return da(e, o);
        default: return e;
    } }
    getPrev(e, i = "d", o = 1) { return this.getNext(e, i, -o); }
    getWeekday(e) { let i = ot(e).getDay(); return i === 0 ? 7 : i; }
    getWeekNumber(e, i) { let o = e[e.length - 1]; return Math.ceil(ft(o) / 7); }
    getToday() { return Yt(new Date); }
    toGregorian(e) { return ut(ot(e)); }
    fromGregorian(e) { return Yt(be(e)); }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), ha = ["\u05E9\u05E0\u05D9", "\u05E9\u05DC\u05D9\u05E9\u05D9", "\u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D7\u05DE\u05D9\u05E9\u05D9", "\u05E9\u05D9\u05E9\u05D9", "\u05E9\u05D1\u05EA", "\u05E8\u05D0\u05E9\u05D5\u05DF"], ua = ["\u05EA\u05E9\u05E8\u05D9", "\u05D7\u05E9\u05D5\u05DF", "\u05DB\u05E1\u05DC\u05D5", "\u05D8\u05D1\u05EA", "\u05E9\u05D1\u05D8", "\u05D0\u05D3\u05E8", "\u05E0\u05D9\u05E1\u05DF", "\u05D0\u05D9\u05D9\u05E8", "\u05E1\u05D9\u05D5\u05DF", "\u05EA\u05DE\u05D5\u05D6", "\u05D0\u05D1", "\u05D0\u05DC\u05D5\u05DC"], _a = ["\u05EA\u05E9\u05E8\u05D9", "\u05D7\u05E9\u05D5\u05DF", "\u05DB\u05E1\u05DC\u05D5", "\u05D8\u05D1\u05EA", "\u05E9\u05D1\u05D8", "\u05D0\u05D3\u05E8 \u05D0\u05F3", "\u05D0\u05D3\u05E8 \u05D1\u05F3", "\u05E0\u05D9\u05E1\u05DF", "\u05D0\u05D9\u05D9\u05E8", "\u05E1\u05D9\u05D5\u05DF", "\u05EA\u05DE\u05D5\u05D6", "\u05D0\u05D1", "\u05D0\u05DC\u05D5\u05DC"], ol = (() => { let t = class t extends Q {
    getMonthShortName(e, i) { return this.getMonthFullName(e, i); }
    getMonthFullName(e, i) { return ne(i) ? _a[e - 1] || "" : ua[e - 1] || ""; }
    getWeekdayLabel(e, i) { return ha[e - 1] || ""; }
    getDayAriaLabel(e) { return `${me(e.day)} ${this.getMonthFullName(e.month, e.year)} ${me(e.year)}`; }
    getDayNumerals(e) { return me(e.day); }
    getWeekNumerals(e) { return me(e); }
    getYearNumerals(e) { return me(e); }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })();
function Ge(s) { return new Date(s.year - 543, s.month - 1, s.day); }
function qt(s) { return new D(s.getFullYear() + 543, s.getMonth() + 1, s.getDate()); }
var al = (() => { let t = class t extends mi {
    getToday() { return qt(new Date); }
    getNext(e, i = "d", o = 1) { let r = Ge(e), l = !0, d = r.getMonth(); switch (i) {
        case "y":
            r.setFullYear(r.getFullYear() + o);
            break;
        case "m":
            d += o, r.setMonth(d), d = d % 12, d < 0 && (d = d + 12);
            break;
        case "d":
            r.setDate(r.getDate() + o), l = !1;
            break;
        default: return e;
    } return l && r.getMonth() !== d && r.setDate(0), qt(r); }
    getPrev(e, i = "d", o = 1) { return this.getNext(e, i, -o); }
    getWeekday(e) { let o = Ge(e).getDay(); return o === 0 ? 7 : o; }
    getWeekNumber(e, i) { i === 7 && (i = 0); let o = (11 - i) % 7, r = e[o], l = Ge(r); l.setDate(l.getDate() + 4 - (l.getDay() || 7)); let d = l.getTime(); return l.setMonth(0), l.setDate(1), Math.floor(Math.round((d - l.getTime()) / 864e5) / 7) + 1; }
    isValid(e) { if (!e || !m(e.year) || !m(e.month) || !m(e.day) || e.year === 0)
        return !1; let i = Ge(e); return !isNaN(i.getTime()) && i.getFullYear() === e.year - 543 && i.getMonth() + 1 === e.month && i.getDate() === e.day; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Si = 17242205e-1, pa = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5];
function fa(s) { return s != null ? s % 4 == 3 || s % 4 == -1 : !1; }
function ga(s, t) { return s.year = +t, s; }
function gt(s, t) { return t = +t, s.year = s.year + Math.floor((t - 1) / 13), s.month = Math.floor(((t - 1) % 13 + 13) % 13) + 1, s; }
function ma(s, t) { let a = at(s.month, s.year); if (t <= 0)
    for (; t <= 0;)
        s = gt(s, s.month - 1), a = at(s.month, s.year), t += a;
else if (t > a)
    for (; t > a;)
        t -= a, s = gt(s, s.month + 1), a = at(s.month, s.year); return s.day = t, s; }
function at(s, t) { let a = fa(t); return pa[s - 1] + (s === 13 && a ? 1 : 0); }
function rt(s) { let t = Nt(s.year, s.month, s.day), a = ba(t); return a.setHours(6, 30, 3, 200), a; }
function ya(s) { let t = Da(s.getFullYear(), s.getMonth() + 1, s.getDate()); return va(t); }
function Nt(s, t, a) { return s < 0 && s++, a + (t - 1) * 30 + (s - 1) * 365 + Math.floor(s / 4) + Si - 1; }
function va(s) { let t = Math.floor(s) + .5 - Si, a = Math.floor((t - Math.floor((t + 366) / 1461)) / 365) + 1; a <= 0 && a--, t = Math.floor(s) + .5 - Nt(a, 1, 1); let e = Math.floor(t / 30) + 1, i = t - (e - 1) * 30 + 1; return new D(a, e, i); }
function ba(s) { let t = Math.floor(s + .5), a = Math.floor((t - 186721625e-2) / 36524.25); a = t + 1 + a - Math.floor(a / 4); let e = a + 1524, i = Math.floor((e - 122.1) / 365.25), o = Math.floor(365.25 * i), r = Math.floor((e - o) / 30.6001), l = e - o - Math.floor(r * 30.6001), d = r - (r > 13.5 ? 13 : 1), h = i - (d > 2.5 ? 4716 : 4715); return h <= 0 && h--, new Date(h, d, l); }
function Da(s, t, a) { s < 0 && s++, t < 3 && (t += 12, s--); let e = Math.floor(s / 100), i = 2 - e + Math.floor(e / 4); return Math.floor(365.25 * (s + 4716)) + Math.floor(30.6001 * (t + 1)) + a + i - 1524.5; }
var rl = (() => { let t = class t extends ee {
    getDaysPerWeek() { return 7; }
    getMonths(e) { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; }
    getNext(e, i = "d", o = 1) { switch (e = new D(e.year, e.month, e.day), i) {
        case "y": return e = ga(e, e.year + o), e.month = 1, e.day = 1, e;
        case "m": return e = gt(e, e.month + o), e.day = 1, e;
        case "d": return ma(e, e.day + o);
        default: return e;
    } }
    getPrev(e, i = "d", o = 1) { return this.getNext(e, i, -o); }
    getWeekday(e) { let i = Math.floor(Nt(e.year, e.month, e.day) + 3) % 7; return i === 0 ? 7 : i; }
    getWeekNumber(e, i) { i === 7 && (i = 0); let o = (11 - i) % 7, r = e[o], l = rt(r); l.setDate(l.getDate() + 4 - (l.getDay() || 7)); let d = l.getTime(), h = rt(new D(r.year, 1, 1)); return Math.floor(Math.round((d - h.getTime()) / 864e5) / 7) + 1; }
    getWeeksPerMonth() { return 6; }
    getToday() { return ya(new Date); }
    isValid(e) { return e && m(e.year) && m(e.month) && m(e.day) && !isNaN(rt(e).getTime()); }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), wa = ["\u12A5\u1211\u12F5", "\u1230\u129E", "\u121B\u12AD\u1230\u129E", "\u1228\u1261\u12D5", "\u1213\u1219\u1235", "\u12D3\u122D\u1265", "\u1245\u12F3\u121C"], Ta = ["\u1218\u1235\u12A8\u1228\u121D", "\u1325\u1245\u121D\u1275", "\u1285\u12F3\u122D", "\u1273\u1205\u1223\u1225", "\u1325\u122D", "\u12E8\u12AB\u1272\u1275", "\u1218\u130B\u1262\u1275", "\u121A\u12EB\u12DD\u12EB", "\u130D\u1295\u1266\u1275", "\u1230\u1294", "\u1210\u121D\u120C", "\u1290\u1210\u1234", "\u1333\u1309\u121C"], ll = (() => { let t = class t extends Q {
    getMonthShortName(e, i) { return this.getMonthFullName(e, i); }
    getMonthFullName(e, i) { return Ta[e - 1]; }
    getWeekdayLabel(e, i) { return wa[e - 1]; }
    getDayAriaLabel(e) { return `${e.day} ${this.getMonthFullName(e.month, e.year)} ${e.year}`; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Sa = (() => { let t = class t extends Xe {
    fromModel(e) { return e instanceof Date && !isNaN(e.getTime()) ? this._fromNativeDate(e) : null; }
    toModel(e) { return e && m(e.year) && m(e.month) && m(e.day) ? this._toNativeDate(e) : null; }
    _fromNativeDate(e) { return { year: e.getFullYear(), month: e.getMonth() + 1, day: e.getDate() }; }
    _toNativeDate(e) { let i = new Date(e.year, e.month - 1, e.day, 12); return i.setFullYear(e.year), i; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), cl = (() => { let t = class t extends Sa {
    _fromNativeDate(e) { return { year: e.getUTCFullYear(), month: e.getUTCMonth() + 1, day: e.getUTCDate() }; }
    _toNativeDate(e) { let i = new Date(Date.UTC(e.year, e.month - 1, e.day)); return i.setUTCFullYear(e.year), i; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })();
var Oi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), Oa = (() => { let t = class t {
    constructor() { this.autoClose = !0, this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"], this.popperOptions = e => e, this.container = null; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ci = (() => { let t = class t {
    constructor() { this._disabled = !1, this.nativeElement = c(S).nativeElement, this.tabindex = 0; }
    set disabled(e) { this._disabled = e === "" || e === !0; }
    get disabled() { return this._disabled; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbDropdownItem", ""]], hostAttrs: [1, "dropdown-item"], hostVars: 3, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275domProperty("tabIndex", o.disabled ? -1 : o.tabindex), n.\u0275\u0275classProp("disabled", o.disabled)); }, inputs: { tabindex: "tabindex", disabled: "disabled" } }); let s = t; return s; })(), dl = (() => { let t = class t {
    constructor() { this.item = c(Ci); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["button", "ngbDropdownItem", ""]], hostVars: 1, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275domProperty("disabled", o.item.disabled); } }); let s = t; return s; })(), Ca = (() => { let t = class t {
    constructor() { this.dropdown = c(Ei), this.nativeElement = c(S).nativeElement; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbDropdownMenu", ""]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, Ci, 4), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.menuItems = l);
    } }, hostAttrs: [1, "dropdown-menu"], hostVars: 2, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("keydown.ArrowUp", function (l) { return o.dropdown.onKeyDown(l); })("keydown.ArrowDown", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Home", function (l) { return o.dropdown.onKeyDown(l); })("keydown.End", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Enter", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Space", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Tab", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Shift.Tab", function (l) { return o.dropdown.onKeyDown(l); }), i & 2 && n.\u0275\u0275classProp("show", o.dropdown.isOpen()); } }); let s = t; return s; })(), mt = (() => { let t = class t {
    constructor() { this.dropdown = c(Ei), this.nativeElement = c(S).nativeElement; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbDropdownAnchor", ""]], hostAttrs: [1, "dropdown-toggle"], hostVars: 3, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275attribute("aria-expanded", o.dropdown.isOpen()), n.\u0275\u0275classProp("show", o.dropdown.isOpen())); } }); let s = t; return s; })(), hl = (() => { let t = class t extends mt {
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbDropdownToggle", ""]], hostAttrs: [1, "dropdown-toggle"], hostVars: 3, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("click", function () { return o.dropdown.toggle(); })("keydown.ArrowUp", function (l) { return o.dropdown.onKeyDown(l); })("keydown.ArrowDown", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Home", function (l) { return o.dropdown.onKeyDown(l); })("keydown.End", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Tab", function (l) { return o.dropdown.onKeyDown(l); })("keydown.Shift.Tab", function (l) { return o.dropdown.onKeyDown(l); }), i & 2 && (n.\u0275\u0275attribute("aria-expanded", o.dropdown.isOpen()), n.\u0275\u0275classProp("show", o.dropdown.isOpen())); }, features: [n.\u0275\u0275ProvidersFeature([{ provide: mt, useExisting: te(() => t) }]), n.\u0275\u0275InheritDefinitionFeature] }); let s = t; return s; })(), Ei = (() => { let t = class t {
    constructor() { this._changeDetector = c(x), this._config = c(Oa), this._document = c(B), this._injector = c(M), this._ngZone = c(A), this._nativeElement = c(S).nativeElement, this._destroyCloseHandlers$ = new b, this._bodyContainer = null, this._positioning = Ne(), this.autoClose = this._config.autoClose, this._open = !1, this.placement = this._config.placement, this.popperOptions = this._config.popperOptions, this.container = this._config.container, this.openChange = new g; }
    ngOnInit() { this.display || (this.display = this._nativeElement.closest(".navbar") ? "static" : "dynamic"); }
    ngAfterContentInit() { U({ write: () => { this._applyPlacementClasses(), this._open && this._setCloseHandlers(); } }, { injector: this._injector }); }
    ngOnChanges(e) { if (e.container && this._open && this._applyContainer(this.container), e.placement && !e.placement.firstChange && (this._positioning.setOptions({ hostElement: this._anchor.nativeElement, targetElement: this._bodyContainer || this._menu.nativeElement, placement: this.placement }), this._applyPlacementClasses()), e.dropdownClass) {
        let { currentValue: i, previousValue: o } = e.dropdownClass;
        this._applyCustomDropdownClass(i, o);
    } e.autoClose && this._open && (this.autoClose = e.autoClose.currentValue, this._setCloseHandlers()); }
    isOpen() { return this._open; }
    open() { this._open || (this._open = !0, this._applyContainer(this.container), this.openChange.emit(!0), this._setCloseHandlers(), this._anchor && (this._anchor.nativeElement.focus(), this.display === "dynamic" && this._ngZone.runOutsideAngular(() => { this._positioning.createPopper({ hostElement: this._anchor.nativeElement, targetElement: this._bodyContainer || this._menu.nativeElement, placement: this.placement, updatePopperOptions: e => this.popperOptions(Pe([0, 2])(e)) }), this._applyPlacementClasses(), this._afterRenderRef = Ee({ write: () => { this._positionMenu(); } }, { injector: this._injector }); }))); }
    _setCloseHandlers() { this._destroyCloseHandlers$.next(), Re(this._ngZone, this._document, this.autoClose, e => { this.close(), e === 0 && this._anchor.nativeElement.focus(); }, this._destroyCloseHandlers$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], ".dropdown-item,.dropdown-divider"); }
    close() { this._open && (this._open = !1, this._resetContainer(), this._positioning.destroy(), this._afterRenderRef?.destroy(), this._destroyCloseHandlers$.next(), this.openChange.emit(!1), this._changeDetector.markForCheck()); }
    toggle() { this.isOpen() ? this.close() : this.open(); }
    ngOnDestroy() { this.close(); }
    onKeyDown(e) { let { key: i } = e, o = this._getMenuElements(), r = -1, l = null, d = this._isEventFromToggle(e); if (!d && o.length && o.forEach((h, u) => { h.contains(e.target) && (l = h), h === di(this._document) && (r = u); }), i === " " || i === "Enter") {
        l && (this.autoClose === !0 || this.autoClose === "inside") && I(l, "click").pipe(we(1)).subscribe(() => this.close());
        return;
    } if (i === "Tab") {
        if (e.target && this.isOpen() && this.autoClose)
            if (this._anchor.nativeElement === e.target) {
                this.container === "body" && !e.shiftKey ? (this._menu.nativeElement.setAttribute("tabindex", "0"), this._menu.nativeElement.focus(), this._menu.nativeElement.removeAttribute("tabindex")) : e.shiftKey && this.close();
                return;
            }
            else if (this.container === "body") {
                let h = this._menu.nativeElement.querySelectorAll(bi);
                e.shiftKey && e.target === h[0] ? (this._anchor.nativeElement.focus(), e.preventDefault()) : !e.shiftKey && e.target === h[h.length - 1] && (this._anchor.nativeElement.focus(), this.close());
            }
            else
                I(e.target, "focusout").pipe(we(1)).subscribe(({ relatedTarget: h }) => { this._nativeElement.contains(h) || this.close(); });
        return;
    } if (d || l) {
        if (this.open(), o.length) {
            switch (i) {
                case "ArrowDown":
                    r = Math.min(r + 1, o.length - 1);
                    break;
                case "ArrowUp":
                    if (this._isDropup() && r === -1) {
                        r = o.length - 1;
                        break;
                    }
                    r = Math.max(r - 1, 0);
                    break;
                case "Home":
                    r = 0;
                    break;
                case "End":
                    r = o.length - 1;
                    break;
            }
            o[r].focus();
        }
        e.preventDefault();
    } }
    _isDropup() { return this._nativeElement.classList.contains("dropup"); }
    _isEventFromToggle(e) { return this._anchor.nativeElement.contains(e.target); }
    _getMenuElements() { return this._menu ? this._menu.menuItems.filter(({ disabled: e }) => !e).map(({ nativeElement: e }) => e) : []; }
    _positionMenu() { let e = this._menu; this.isOpen() && e && (this.display === "dynamic" ? (this._positioning.update(), this._applyPlacementClasses()) : this._applyPlacementClasses(this._getFirstPlacement(this.placement))); }
    _getFirstPlacement(e) { return Array.isArray(e) ? e[0] : e.split(" ")[0]; }
    _resetContainer() { this._menu && this._nativeElement.appendChild(this._menu.nativeElement), this._bodyContainer && (this._document.body.removeChild(this._bodyContainer), this._bodyContainer = null); }
    _applyContainer(e = null) { if (this._resetContainer(), e === "body") {
        let i = this._menu.nativeElement, o = this._bodyContainer = this._bodyContainer || this._document.createElement("div");
        o.style.position = "absolute", i.style.position = "static", o.style.zIndex = "1055", o.appendChild(i), this._document.body.appendChild(o);
    } this._applyCustomDropdownClass(this.dropdownClass); }
    _applyCustomDropdownClass(e, i) { let o = this.container === "body" ? this._bodyContainer : this._nativeElement; o && (i && o.classList.remove(i), e && o.classList.add(e)); }
    _applyPlacementClasses(e) { if (this._menu) {
        e || (e = this._getFirstPlacement(this.placement)), this._nativeElement.classList.remove("dropup", "dropdown"), this.display === "static" ? this._menu.nativeElement.setAttribute("data-bs-popper", "static") : this._menu.nativeElement.removeAttribute("data-bs-popper");
        let i = e.search("^top") !== -1 ? "dropup" : "dropdown";
        this._nativeElement.classList.add(i), this._bodyContainer && (this._bodyContainer.classList.remove("dropup", "dropdown"), this._bodyContainer.classList.add(i));
    } }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbDropdown", ""]], contentQueries: function (i, o, r) { if (i & 1 && (n.\u0275\u0275contentQuery(r, Ca, 5), n.\u0275\u0275contentQuery(r, mt, 5)), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o._menu = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o._anchor = l.first);
    } }, hostVars: 2, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275classProp("show", o.isOpen()); }, inputs: { autoClose: "autoClose", dropdownClass: "dropdownClass", _open: [0, "open", "_open"], placement: "placement", popperOptions: "popperOptions", container: "container", display: "display" }, outputs: { openChange: "openChange" }, exportAs: ["ngbDropdown"], features: [n.\u0275\u0275NgOnChangesFeature] }); let s = t; return s; })();
var Mi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), Ea = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.backdrop = !0, this.fullscreen = !1, this.keyboard = !0, this.role = "dialog"; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), V = class {
    constructor(t, a, e) { this.nodes = t, this.viewRef = a, this.componentRef = e; }
}, Ce = class {
    constructor(t) { this._componentType = t, this._windowRef = null, this._contentRef = null, this._document = c(B), this._applicationRef = c(wt), this._injector = c(M), this._viewContainerRef = c(Dt), this._ngZone = c(A); }
    open(t, a, e = !1) { this._windowRef || (this._contentRef = this._getContentRef(t, a), this._windowRef = this._viewContainerRef.createComponent(this._componentType, { injector: this._injector, projectableNodes: this._contentRef.nodes })); let { nativeElement: i } = this._windowRef.location, o = new b; U({ mixedReadWrite: () => { o.next(), o.complete(); } }, { injector: this._injector }); let r = o.pipe(en(() => E(this._ngZone, i, ({ classList: l }) => l.add("show"), { animation: e, runningTransition: "continue" }))); return { windowRef: this._windowRef, transition$: r }; }
    close(t = !1) { return this._windowRef ? E(this._ngZone, this._windowRef.location.nativeElement, ({ classList: a }) => a.remove("show"), { animation: t, runningTransition: "stop" }).pipe(qe(() => { this._windowRef?.destroy(), this._contentRef?.viewRef?.destroy(), this._windowRef = null, this._contentRef = null; })) : Me(void 0); }
    _getContentRef(t, a) { if (t)
        if (t instanceof k) {
            let e = t.createEmbeddedView(a);
            return this._applicationRef.attachView(e), new V([e.rootNodes], e);
        }
        else
            return new V([[this._document.createTextNode(`${t}`)]]);
    else
        return new V([]); }
}, Ai = (() => { let t = class t {
    constructor() { this._document = c(B); }
    hide() { let e = Math.abs(window.innerWidth - this._document.documentElement.clientWidth), i = this._document.body, o = i.style, { overflow: r, paddingRight: l } = o; if (e > 0) {
        let d = parseFloat(window.getComputedStyle(i).paddingRight);
        o.paddingRight = `${d + e}px`;
    } return o.overflow = "hidden", () => { e > 0 && (o.paddingRight = l), o.overflow = r; }; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ma = ["animation", "backdropClass"], Aa = (() => { let t = class t {
    constructor() { this._nativeElement = c(S).nativeElement, this._zone = c(A), this._injector = c(M), this._cdRef = c(x); }
    ngOnInit() { U({ mixedReadWrite: () => E(this._zone, this._nativeElement, (e, i) => { i && X(e), e.classList.add("show"); }, { animation: this.animation, runningTransition: "continue" }) }, { injector: this._injector }); }
    hide() { return E(this._zone, this._nativeElement, ({ classList: e }) => e.remove("show"), { animation: this.animation, runningTransition: "stop" }); }
    updateOptions(e) { Ma.forEach(i => { H(e[i]) && (this[i] = e[i]); }), this._cdRef.markForCheck(); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-modal-backdrop"]], hostAttrs: [2, "z-index", "1055"], hostVars: 6, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275classMap("modal-backdrop" + (o.backdropClass ? " " + o.backdropClass : "")), n.\u0275\u0275classProp("show", !o.animation)("fade", o.animation)); }, inputs: { animation: "animation", backdropClass: "backdropClass" }, decls: 0, vars: 0, template: function (i, o) { }, encapsulation: 2 }); let s = t; return s; })(), Ze = class {
    update(t) { }
    close(t) { }
    dismiss(t) { }
}, yt = class {
    update(t) { this._windowCmptRef.instance.updateOptions(t), this._backdropCmptRef && this._backdropCmptRef.instance && this._backdropCmptRef.instance.updateOptions(t); }
    get componentInstance() { if (this._contentRef && this._contentRef.componentRef)
        return this._contentRef.componentRef.instance; }
    get closed() { return this._closed.asObservable().pipe(N(this._hidden)); }
    get dismissed() { return this._dismissed.asObservable().pipe(N(this._hidden)); }
    get hidden() { return this._hidden.asObservable(); }
    get shown() { return this._windowCmptRef.instance.shown.asObservable(); }
    constructor(t, a, e, i) { this._windowCmptRef = t, this._contentRef = a, this._backdropCmptRef = e, this._beforeDismiss = i, this._closed = new b, this._dismissed = new b, this._hidden = new b, t.instance.dismissEvent.subscribe(o => { this.dismiss(o); }), this.result = new Promise((o, r) => { this._resolve = o, this._reject = r; }), this.result.then(null, () => { }); }
    close(t) { this._windowCmptRef && (this._closed.next(t), this._resolve(t), this._removeModalElements()); }
    _dismiss(t) { this._dismissed.next(t), this._reject(t), this._removeModalElements(); }
    dismiss(t) { if (this._windowCmptRef)
        if (!this._beforeDismiss)
            this._dismiss(t);
        else {
            let a = this._beforeDismiss();
            ci(a) ? a.then(e => { e !== !1 && this._dismiss(t); }, () => { }) : a !== !1 && this._dismiss(t);
        } }
    _removeModalElements() { let t = this._windowCmptRef.instance.hide(), a = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : Me(void 0); t.subscribe(() => { let { nativeElement: e } = this._windowCmptRef.location; e.parentNode.removeChild(e), this._windowCmptRef.destroy(), this._contentRef?.viewRef?.destroy(), this._windowCmptRef = null, this._contentRef = null; }), a.subscribe(() => { if (this._backdropCmptRef) {
        let { nativeElement: e } = this._backdropCmptRef.location;
        e.parentNode.removeChild(e), this._backdropCmptRef.destroy(), this._backdropCmptRef = null;
    } }), De(t, a).subscribe(() => { this._hidden.next(), this._hidden.complete(); }); }
}, vt = (function (s) { return s[s.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", s[s.ESC = 1] = "ESC", s; })(vt || {}), Ra = ["animation", "ariaLabelledBy", "ariaDescribedBy", "backdrop", "centered", "fullscreen", "keyboard", "role", "scrollable", "size", "windowClass", "modalDialogClass"], Na = (() => {
    let t = class t {
        constructor() { this._document = c(B), this._elRef = c(S), this._zone = c(A), this._injector = c(M), this._cdRef = c(x), this._closed$ = new b, this._elWithFocus = null, this.backdrop = !0, this.keyboard = !0, this.role = "dialog", this.dismissEvent = new g, this.shown = new b, this.hidden = new b; }
        get fullscreenClass() { return this.fullscreen === !0 ? " modal-fullscreen" : j(this.fullscreen) ? ` modal-fullscreen-${this.fullscreen}-down` : ""; }
        dismiss(e) { this.dismissEvent.emit(e); }
        ngOnInit() { this._elWithFocus = this._document.activeElement, U({ mixedReadWrite: () => this._show() }, { injector: this._injector }); }
        ngOnDestroy() { this._disableEventHandling(); }
        hide() { let { nativeElement: e } = this._elRef, i = { animation: this.animation, runningTransition: "stop" }, o = E(this._zone, e, () => e.classList.remove("show"), i), r = E(this._zone, this._dialogEl.nativeElement, () => { }, i), l = De(o, r); return l.subscribe(() => { this.hidden.next(), this.hidden.complete(); }), this._disableEventHandling(), this._restoreFocus(), l; }
        updateOptions(e) { Ra.forEach(i => { H(e[i]) && (this[i] = e[i]); }), this._cdRef.markForCheck(); }
        _show() { let e = { animation: this.animation, runningTransition: "continue" }, i = E(this._zone, this._elRef.nativeElement, (r, l) => { l && X(r), r.classList.add("show"); }, e), o = E(this._zone, this._dialogEl.nativeElement, () => { }, e); De(i, o).subscribe(() => { this.shown.next(), this.shown.complete(); }), this._enableEventHandling(), this._setFocus(); }
        _enableEventHandling() { let { nativeElement: e } = this._elRef; this._zone.runOutsideAngular(() => { I(e, "keydown").pipe(N(this._closed$), $(o => o.key === "Escape")).subscribe(o => { this.keyboard ? requestAnimationFrame(() => { o.defaultPrevented || this._zone.run(() => this.dismiss(vt.ESC)); }) : this.backdrop === "static" && this._bumpBackdrop(); }); let i = !1; I(this._dialogEl.nativeElement, "mousedown").pipe(N(this._closed$), qe(() => i = !1), Tt(() => I(e, "mouseup").pipe(N(this._closed$), we(1))), $(({ target: o }) => e === o)).subscribe(() => { i = !0; }), I(e, "click").pipe(N(this._closed$)).subscribe(({ target: o }) => { e === o && (this.backdrop === "static" ? this._bumpBackdrop() : this.backdrop === !0 && !i && this._zone.run(() => this.dismiss(vt.BACKDROP_CLICK))), i = !1; }); }); }
        _disableEventHandling() { this._closed$.next(); }
        _setFocus() { let { nativeElement: e } = this._elRef; if (!e.contains(document.activeElement)) {
            let i = e.querySelector("[ngbAutofocus]"), o = Et(e)[0];
            (i || o || e).focus();
        } }
        _restoreFocus() { let e = this._document.body, i = this._elWithFocus, o; i && i.focus && e.contains(i) ? o = i : o = e, this._zone.runOutsideAngular(() => { setTimeout(() => o.focus()), this._elWithFocus = null; }); }
        _bumpBackdrop() { this.backdrop === "static" && E(this._zone, this._elRef.nativeElement, ({ classList: e }) => (e.add("modal-static"), () => e.remove("modal-static")), { animation: this.animation, runningTransition: "continue" }); }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-modal-window"]], viewQuery: function (i, o) { if (i & 1 && n.\u0275\u0275viewQuery(Jn, 7), i & 2) {
            let r;
            n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o._dialogEl = r.first);
        } }, hostAttrs: ["tabindex", "-1"], hostVars: 8, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275attribute("aria-modal", !0)("aria-labelledby", o.ariaLabelledBy)("aria-describedby", o.ariaDescribedBy)("role", o.role), n.\u0275\u0275classMap("modal d-block" + (o.windowClass ? " " + o.windowClass : "")), n.\u0275\u0275classProp("fade", o.animation)); }, inputs: { animation: "animation", ariaLabelledBy: "ariaLabelledBy", ariaDescribedBy: "ariaDescribedBy", backdrop: "backdrop", centered: "centered", fullscreen: "fullscreen", keyboard: "keyboard", role: "role", scrollable: "scrollable", size: "size", windowClass: "windowClass", modalDialogClass: "modalDialogClass" }, outputs: { dismissEvent: "dismiss" }, ngContentSelectors: z, decls: 4, vars: 2, consts: [["dialog", ""], ["role", "document"], [1, "modal-content"]], template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275domElementStart(0, "div", 1, 0)(2, "div", 2), n.\u0275\u0275projection(3), n.\u0275\u0275domElementEnd()()), i & 2 && n.\u0275\u0275classMap("modal-dialog" + (o.size ? " modal-" + o.size : "") + (o.centered ? " modal-dialog-centered" : "") + o.fullscreenClass + (o.scrollable ? " modal-dialog-scrollable" : "") + (o.modalDialogClass ? " " + o.modalDialogClass : "")); }, styles: [`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`], encapsulation: 2 });
    let s = t;
    return s;
})(), Pa = (() => { let t = class t {
    constructor() { this._applicationRef = c(wt), this._injector = c(M), this._environmentInjector = c(Gt), this._document = c(B), this._scrollBar = c(Ai), this._activeWindowCmptHasChanged = new b, this._ariaHiddenValues = new Map, this._scrollBarRestoreFn = null, this._modalRefs = [], this._windowCmpts = [], this._activeInstances = new g; let e = c(A); this._activeWindowCmptHasChanged.subscribe(() => { if (this._windowCmpts.length) {
        let i = this._windowCmpts[this._windowCmpts.length - 1];
        Mt(e, i.location.nativeElement, this._activeWindowCmptHasChanged), this._revertAriaHidden(), this._setAriaHidden(i.location.nativeElement);
    } }); }
    _restoreScrollBar() { let e = this._scrollBarRestoreFn; e && (this._scrollBarRestoreFn = null, e()); }
    _hideScrollBar() { this._scrollBarRestoreFn || (this._scrollBarRestoreFn = this._scrollBar.hide()); }
    open(e, i, o) { let r = o.container instanceof HTMLElement ? o.container : H(o.container) ? this._document.querySelector(o.container) : this._document.body; if (!r)
        throw new Error(`The specified modal container "${o.container || "body"}" was not found in the DOM.`); this._hideScrollBar(); let l = new Ze; e = o.injector || e; let d = e.get(Gt, null) || this._environmentInjector, h = this._getContentRef(e, d, i, l, o), u = o.backdrop !== !1 ? this._attachBackdrop(r) : void 0, _ = this._attachWindowComponent(r, h.nodes), p = new yt(_, h, u, o.beforeDismiss); return this._registerModalRef(p), this._registerWindowCmpt(_), p.hidden.pipe(we(1)).subscribe(() => Promise.resolve(!0).then(() => { this._modalRefs.length || (this._document.body.classList.remove("modal-open"), this._restoreScrollBar(), this._revertAriaHidden()); })), l.close = f => { p.close(f); }, l.dismiss = f => { p.dismiss(f); }, l.update = f => { p.update(f); }, p.update(o), this._modalRefs.length === 1 && this._document.body.classList.add("modal-open"), u && u.instance && u.changeDetectorRef.detectChanges(), _.changeDetectorRef.detectChanges(), p; }
    get activeInstances() { return this._activeInstances; }
    dismissAll(e) { this._modalRefs.forEach(i => i.dismiss(e)); }
    hasOpenModals() { return this._modalRefs.length > 0; }
    _attachBackdrop(e) { let i = de(Aa, { environmentInjector: this._applicationRef.injector, elementInjector: this._injector }); return this._applicationRef.attachView(i.hostView), e.appendChild(i.location.nativeElement), i; }
    _attachWindowComponent(e, i) { let o = de(Na, { environmentInjector: this._applicationRef.injector, elementInjector: this._injector, projectableNodes: i }); return this._applicationRef.attachView(o.hostView), e.appendChild(o.location.nativeElement), o; }
    _getContentRef(e, i, o, r, l) { return o ? o instanceof k ? this._createFromTemplateRef(o, r) : j(o) ? this._createFromString(o) : this._createFromComponent(e, i, o, r, l) : new V([]); }
    _createFromTemplateRef(e, i) { let o = { $implicit: i, close(l) { i.close(l); }, dismiss(l) { i.dismiss(l); } }, r = e.createEmbeddedView(o); return this._applicationRef.attachView(r), new V([r.rootNodes], r); }
    _createFromString(e) { let i = this._document.createTextNode(`${e}`); return new V([[i]]); }
    _createFromComponent(e, i, o, r, l) { let d = M.create({ providers: [{ provide: Ze, useValue: r }], parent: e }), h = de(o, { environmentInjector: i, elementInjector: d }), u = h.location.nativeElement; return l.scrollable && u.classList.add("component-host-scrollable"), this._applicationRef.attachView(h.hostView), new V([[u]], h.hostView, h); }
    _setAriaHidden(e) { let i = e.parentElement; i && e !== this._document.body && (Array.from(i.children).forEach(o => { o !== e && o.nodeName !== "SCRIPT" && (this._ariaHiddenValues.set(o, o.getAttribute("aria-hidden")), o.setAttribute("aria-hidden", "true")); }), this._setAriaHidden(i)); }
    _revertAriaHidden() { this._ariaHiddenValues.forEach((e, i) => { e ? i.setAttribute("aria-hidden", e) : i.removeAttribute("aria-hidden"); }), this._ariaHiddenValues.clear(); }
    _registerModalRef(e) { let i = () => { let o = this._modalRefs.indexOf(e); o > -1 && (this._modalRefs.splice(o, 1), this._activeInstances.emit(this._modalRefs)); }; this._modalRefs.push(e), this._activeInstances.emit(this._modalRefs), e.result.then(i, i); }
    _registerWindowCmpt(e) { this._windowCmpts.push(e), this._activeWindowCmptHasChanged.next(), e.onDestroy(() => { let i = this._windowCmpts.indexOf(e); i > -1 && (this._windowCmpts.splice(i, 1), this._activeWindowCmptHasChanged.next()); }); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ia = (() => { let t = class t {
    constructor() { this._injector = c(M), this._modalStack = c(Pa), this._config = c(Ea); }
    open(e, i = {}) { let o = F(ke(F({}, this._config), { animation: this._config.animation }), i); return this._modalStack.open(this._injector, e, o); }
    get activeInstances() { return this._modalStack.activeInstances; }
    dismissAll(e) { this._modalStack.dismissAll(e); }
    hasOpenModals() { return this._modalStack.hasOpenModals(); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ri = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({ providers: [Ia] }); let s = t; return s; })(), ka = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.destroyOnHide = !0, this.orientation = "horizontal", this.roles = "tablist", this.keyboard = !0; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ni = s => H(s) && s !== "", Fa = 0, xa = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbNavContent", ""]] }); let s = t; return s; })(), ul = (() => { let t = class t {
    constructor(e) { this.role = e, this.nav = c(Pt); }
}; t.\u0275fac = function (i) { return new (i || t)(n.\u0275\u0275injectAttribute("role")); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbNavItem", "", 5, "ng-container"]], hostVars: 1, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275attribute("role", o.role ? o.role : o.nav.roles ? "presentation" : void 0); } }); let s = t; return s; })(), Pi = (() => { let t = class t {
    constructor() { this._nav = c(Pt), this._nativeElement = c(S).nativeElement, this.disabled = !1, this.shown = new g, this.hidden = new g; }
    ngOnInit() { H(this.domId) || (this.domId = `ngb-nav-${Fa++}`); }
    get active() { return this._nav.activeId === this.id; }
    get id() { return Ni(this._id) ? this._id : this.domId; }
    get panelDomId() { return `${this.domId}-panel`; }
    isPanelInDom() { return (H(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active; }
    isNgContainer() { return this._nativeElement.nodeType === Node.COMMENT_NODE; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbNavItem", ""]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, xa, 4), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.contentTpl = l.first);
    } }, hostAttrs: [1, "nav-item"], inputs: { destroyOnHide: "destroyOnHide", disabled: "disabled", domId: "domId", _id: [0, "ngbNavItem", "_id"] }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbNavItem"] }); let s = t; return s; })(), Pt = (() => { let t = class t {
    constructor(e) { this.role = e, this._config = c(ka), this._cd = c(x), this._document = c(B), this._nativeElement = c(S).nativeElement, this.destroyRef = c(se), this._navigatingWithKeyboard = !1, this.activeIdChange = new g, this.animation = this._config.animation, this.destroyOnHide = this._config.destroyOnHide, this.orientation = this._config.orientation, this.roles = this._config.roles, this.keyboard = this._config.keyboard, this.shown = new g, this.hidden = new g, this.navItemChange$ = new b, this.navChange = new g; }
    click(e) { e.disabled || this._updateActiveId(e.id); }
    onFocusout({ relatedTarget: e }) { this._nativeElement.contains(e) || (this._navigatingWithKeyboard = !1); }
    onKeyDown(e) { if (this.roles !== "tablist" || !this.keyboard)
        return; let i = this.links.filter(l => !l.navItem.disabled), { length: o } = i, r = -1; if (i.forEach((l, d) => { l.nativeElement === this._document.activeElement && (r = d); }), o) {
        switch (e.key) {
            case "ArrowUp":
            case "ArrowLeft":
                r = (r - 1 + o) % o;
                break;
            case "ArrowRight":
            case "ArrowDown":
                r = (r + 1) % o;
                break;
            case "Home":
                r = 0;
                break;
            case "End":
                r = o - 1;
                break;
        }
        this.keyboard === "changeWithArrows" && this.select(i[r].navItem.id), i[r].nativeElement.focus(), this._navigatingWithKeyboard = !0, e.preventDefault();
    } }
    select(e) { this._updateActiveId(e, !1); }
    ngAfterContentInit() { if (!H(this.activeId)) {
        let e = this.items.first ? this.items.first.id : null;
        Ni(e) && (this._updateActiveId(e, !1), this._cd.detectChanges());
    } this.items.changes.pipe(L(this.destroyRef)).subscribe(() => this._notifyItemChanged(this.activeId)); }
    ngOnChanges({ activeId: e }) { e && !e.firstChange && this._notifyItemChanged(e.currentValue); }
    _updateActiveId(e, i = !0) { if (this.activeId !== e) {
        let o = !1;
        i && this.navChange.emit({ activeId: this.activeId, nextId: e, preventDefault: () => { o = !0; } }), o || (this.activeId = e, this.activeIdChange.emit(e), this._notifyItemChanged(e));
    } }
    _notifyItemChanged(e) { this.navItemChange$.next(this._getItemById(e)); }
    _getItemById(e) { return this.items && this.items.find(i => i.id === e) || null; }
}; t.\u0275fac = function (i) { return new (i || t)(n.\u0275\u0275injectAttribute("role")); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbNav", ""]], contentQueries: function (i, o, r) { if (i & 1 && (n.\u0275\u0275contentQuery(r, Pi, 4), n.\u0275\u0275contentQuery(r, It, 5)), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.items = l), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.links = l);
    } }, hostAttrs: [1, "nav"], hostVars: 4, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("keydown.arrowLeft", function (l) { return o.onKeyDown(l); })("keydown.arrowRight", function (l) { return o.onKeyDown(l); })("keydown.arrowDown", function (l) { return o.onKeyDown(l); })("keydown.arrowUp", function (l) { return o.onKeyDown(l); })("keydown.Home", function (l) { return o.onKeyDown(l); })("keydown.End", function (l) { return o.onKeyDown(l); })("focusout", function (l) { return o.onFocusout(l); }), i & 2 && (n.\u0275\u0275attribute("aria-orientation", o.orientation === "vertical" && o.roles === "tablist" ? "vertical" : void 0)("role", o.role ? o.role : o.roles ? "tablist" : void 0), n.\u0275\u0275classProp("flex-column", o.orientation === "vertical")); }, inputs: { activeId: "activeId", animation: "animation", destroyOnHide: "destroyOnHide", orientation: "orientation", roles: "roles", keyboard: "keyboard" }, outputs: { activeIdChange: "activeIdChange", shown: "shown", hidden: "hidden", navChange: "navChange" }, exportAs: ["ngbNav"], features: [n.\u0275\u0275NgOnChangesFeature] }); let s = t; return s; })(), It = (() => { let t = class t {
    constructor(e) { this.role = e, this.navItem = c(Pi), this.nav = c(Pt), this.nativeElement = c(S).nativeElement; }
    get tabindex() { return this.nav.keyboard === !1 ? this.navItem.disabled ? -1 : void 0 : this.nav._navigatingWithKeyboard || this.navItem.disabled || !this.navItem.active ? -1 : void 0; }
}; t.\u0275fac = function (i) { return new (i || t)(n.\u0275\u0275injectAttribute("role")); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbNavLink", ""]], hostAttrs: [1, "nav-link"], hostVars: 12, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275domProperty("id", o.navItem.domId), n.\u0275\u0275attribute("role", o.role ? o.role : o.nav.roles ? "tab" : void 0)("tabindex", o.tabindex)("aria-controls", o.navItem.isPanelInDom() ? o.navItem.panelDomId : null)("aria-selected", o.navItem.active)("aria-disabled", o.navItem.disabled), n.\u0275\u0275classProp("nav-item", o.navItem.isNgContainer())("active", o.navItem.active)("disabled", o.navItem.disabled)); } }); let s = t; return s; })(), _l = (() => { let t = class t extends It {
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["button", "ngbNavLink", ""]], hostAttrs: ["type", "button"], hostVars: 1, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("click", function () { return o.nav.click(o.navItem); }), i & 2 && n.\u0275\u0275domProperty("disabled", o.navItem.disabled); }, features: [n.\u0275\u0275InheritDefinitionFeature] }); let s = t; return s; })(), pl = (() => { let t = class t extends It {
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["a", "ngbNavLink", ""]], hostAttrs: ["href", ""], hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("click", function (l) { return o.nav.click(o.navItem), l.preventDefault(); }); }, features: [n.\u0275\u0275InheritDefinitionFeature] }); let s = t; return s; })(), Ba = ({ classList: s }) => (s.remove("show"), () => s.remove("active")), Va = (s, t) => { t && X(s), s.classList.add("show"); }, Xt = (() => { let t = class t {
    constructor() { this.nativeElement = c(S).nativeElement; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbNavPane", ""]], hostAttrs: [1, "tab-pane"], hostVars: 5, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275domProperty("id", o.item.panelDomId), n.\u0275\u0275attribute("role", o.role ? o.role : o.nav.roles ? "tabpanel" : void 0)("aria-labelledby", o.item.domId), n.\u0275\u0275classProp("fade", o.nav.animation)); }, inputs: { item: "item", nav: "nav", role: "role" } }); let s = t; return s; })(), fl = (() => { let t = class t {
    constructor() { this._cd = c(x), this._ngZone = c(A), this._activePane = null; }
    isPanelTransitioning(e) { return this._activePane?.item === e; }
    ngAfterViewInit() { this._updateActivePane(), this.nav.navItemChange$.pipe(L(this.nav.destroyRef), ct(this._activePane?.item || null), $e(), tn(1)).subscribe(e => { let i = { animation: this.nav.animation, runningTransition: "stop" }; this._cd.detectChanges(), this._activePane ? E(this._ngZone, this._activePane.nativeElement, Ba, i).subscribe(() => { let o = this._activePane?.item; this._activePane = this._getPaneForItem(e), this._cd.markForCheck(), this._activePane && (this._activePane.nativeElement.classList.add("active"), E(this._ngZone, this._activePane.nativeElement, Va, i).subscribe(() => { e && (e.shown.emit(), this.nav.shown.emit(e.id)); })), o && (o.hidden.emit(), this.nav.hidden.emit(o.id)); }) : this._updateActivePane(); }); }
    _updateActivePane() { this._activePane = this._getActivePane(), this._activePane?.nativeElement.classList.add("show", "active"); }
    _getPaneForItem(e) { return this._panes && this._panes.find(i => i.item === e) || null; }
    _getActivePane() { return this._panes && this._panes.find(e => e.item.active) || null; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["", "ngbNavOutlet", ""]], viewQuery: function (i, o) { if (i & 1 && n.\u0275\u0275viewQuery(Xt, 5), i & 2) {
        let r;
        n.\u0275\u0275queryRefresh(r = n.\u0275\u0275loadQuery()) && (o._panes = r);
    } }, hostAttrs: [1, "tab-content"], inputs: { paneRole: "paneRole", nav: [0, "ngbNavOutlet", "nav"] }, attrs: $n, decls: 2, vars: 0, consts: [["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (i, o) { i & 1 && n.\u0275\u0275repeaterCreate(0, Kn, 1, 1, null, null, n.\u0275\u0275repeaterTrackByIdentity), i & 2 && n.\u0275\u0275repeater(o.nav.items); }, dependencies: [Xt, Z], encapsulation: 2, changeDetection: 0 }); let s = t; return s; })();
var Ii = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), La = (() => { let t = class t {
    constructor() { this.disabled = !1, this.boundaryLinks = !1, this.directionLinks = !0, this.ellipses = !0, this.maxSize = 0, this.pageSize = 10, this.rotate = !1; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ga = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationEllipsis", ""]] }); let s = t; return s; })(), Ha = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationFirst", ""]] }); let s = t; return s; })(), Ja = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationLast", ""]] }); let s = t; return s; })(), $a = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationNext", ""]] }); let s = t; return s; })(), ja = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationNumber", ""]] }); let s = t; return s; })(), Wa = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationPrevious", ""]] }); let s = t; return s; })(), Ka = (() => { let t = class t {
    constructor() { this.templateRef = c(k); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["ng-template", "ngbPaginationPages", ""]] }); let s = t; return s; })(), gl = (() => { let t = class t {
    constructor() { this._config = c(La), this.pageCount = 0, this.pages = [], this.disabled = this._config.disabled, this.boundaryLinks = this._config.boundaryLinks, this.directionLinks = this._config.directionLinks, this.ellipses = this._config.ellipses, this.rotate = this._config.rotate, this.maxSize = this._config.maxSize, this.page = 1, this.pageSize = this._config.pageSize, this.pageChange = new g(!0), this.size = this._config.size; }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(e) { this._updatePages(e); }
    ngOnChanges(e) { this._updatePages(this.page); }
    isEllipsis(e) { return e === -1; }
    _applyEllipses(e, i) { this.ellipses && (e > 0 && (e > 2 ? this.pages.unshift(-1) : e === 2 && this.pages.unshift(2), this.pages.unshift(1)), i < this.pageCount && (i < this.pageCount - 2 ? this.pages.push(-1) : i === this.pageCount - 2 && this.pages.push(this.pageCount - 1), this.pages.push(this.pageCount))); }
    _applyRotation() { let e = 0, i = this.pageCount, o = Math.floor(this.maxSize / 2), r = this.maxSize % 2 === 0 ? o - 1 : o; return this.page <= o ? i = this.maxSize : this.pageCount - this.page < o ? e = this.pageCount - this.maxSize : (e = this.page - o - 1, i = this.page + r), [e, i]; }
    _applyPagination() { let i = (Math.ceil(this.page / this.maxSize) - 1) * this.maxSize, o = i + this.maxSize; return [i, o]; }
    _setPageInRange(e) { let i = this.page; this.page = je(e, this.pageCount, 1), this.page !== i && v(this.collectionSize) && this.pageChange.emit(this.page); }
    _updatePages(e) { this.pageCount = Math.ceil(this.collectionSize / this.pageSize), v(this.pageCount) || (this.pageCount = 0), this.pages.length = 0; for (let i = 1; i <= this.pageCount; i++)
        this.pages.push(i); if (this._setPageInRange(e), this.maxSize > 0 && this.pageCount > this.maxSize) {
        let i = 0, o = this.pageCount;
        this.rotate ? [i, o] = this._applyRotation() : [i, o] = this._applyPagination(), this.pages = this.pages.slice(i, o), this._applyEllipses(i, o);
    } }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-pagination"]], contentQueries: function (i, o, r) { if (i & 1 && (n.\u0275\u0275contentQuery(r, Ga, 5), n.\u0275\u0275contentQuery(r, Ha, 5), n.\u0275\u0275contentQuery(r, Ja, 5), n.\u0275\u0275contentQuery(r, $a, 5), n.\u0275\u0275contentQuery(r, ja, 5), n.\u0275\u0275contentQuery(r, Wa, 5), n.\u0275\u0275contentQuery(r, Ka, 5)), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplEllipsis = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplFirst = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplLast = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplNext = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplNumber = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplPrevious = l.first), n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.tplPages = l.first);
    } }, hostAttrs: ["role", "navigation"], inputs: { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, outputs: { pageChange: "pageChange" }, features: [n.\u0275\u0275NgOnChangesFeature], decls: 20, vars: 12, consts: () => { let e; e = $localize `:@@ngb.pagination.first:««`; let i; i = $localize `:@@ngb.pagination.previous:«`; let o; o = $localize `:@@ngb.pagination.next:»`; let r; r = $localize `:@@ngb.pagination.last:»»`; let l; l = $localize `:@@ngb.pagination.first-aria:First`; let d; d = $localize `:@@ngb.pagination.previous-aria:Previous`; let h; h = $localize `:@@ngb.pagination.next-aria:Next`; let u; return u = $localize `:@@ngb.pagination.last-aria:Last`, [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], e, i, o, r, [1, "page-item", 3, "disabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", l, "href", "", 1, "page-link", 3, "click"], ["aria-label", d, "href", "", 1, "page-link", 3, "click"], ["aria-label", h, "href", "", 1, "page-link", 3, "click"], ["aria-label", u, "href", "", 1, "page-link", 3, "click"]]; }, template: function (i, o) { if (i & 1 && (n.\u0275\u0275template(0, Yn, 2, 0, "ng-template", null, 0, n.\u0275\u0275templateRefExtractor)(2, qn, 2, 0, "ng-template", null, 1, n.\u0275\u0275templateRefExtractor)(4, Xn, 2, 0, "ng-template", null, 2, n.\u0275\u0275templateRefExtractor)(6, es, 2, 0, "ng-template", null, 3, n.\u0275\u0275templateRefExtractor)(8, ts, 1, 0, "ng-template", null, 4, n.\u0275\u0275templateRefExtractor)(10, is, 1, 1, "ng-template", null, 5, n.\u0275\u0275templateRefExtractor)(12, ls, 2, 0, "ng-template", null, 6, n.\u0275\u0275templateRefExtractor), n.\u0275\u0275elementStart(14, "ul"), n.\u0275\u0275conditionalCreate(15, ds, 3, 9, "li", 11), n.\u0275\u0275conditionalCreate(16, us, 3, 8, "li", 11), n.\u0275\u0275template(17, _s, 0, 0, "ng-template", 12), n.\u0275\u0275conditionalCreate(18, fs, 3, 9, "li", 11), n.\u0275\u0275conditionalCreate(19, ms, 3, 9, "li", 11), n.\u0275\u0275elementEnd()), i & 2) {
        let r = n.\u0275\u0275reference(13);
        n.\u0275\u0275advance(14), n.\u0275\u0275classMap("pagination" + (o.size ? " pagination-" + o.size : "")), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.boundaryLinks ? 15 : -1), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.directionLinks ? 16 : -1), n.\u0275\u0275advance(), n.\u0275\u0275property("ngTemplateOutlet", (o.tplPages == null ? null : o.tplPages.templateRef) || r)("ngTemplateOutletContext", n.\u0275\u0275pureFunction3(8, Un, o.page, o.pages, o.disabled)), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.directionLinks ? 18 : -1), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.boundaryLinks ? 19 : -1);
    } }, dependencies: [Z], encapsulation: 2, changeDetection: 0 }); let s = t; return s; })();
var ki = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), Ua = { hover: ["mouseenter", "mouseleave"], focus: ["focusin", "focusout"] };
function Za(s) { let t = (s || "").trim(); if (t.length === 0)
    return []; let a = t.split(/\s+/).map(i => i.split(":")).map(i => Ua[i[0]] || i), e = a.filter(i => i.includes("manual")); if (e.length > 1)
    throw "Triggers parse error: only one manual trigger is allowed"; if (e.length === 1 && a.length > 1)
    throw "Triggers parse error: manual trigger can't be mixed with other triggers"; return e.length ? [] : a; }
function Fi(s, t, a, e, i, o = 0, r = 0, l = lt, d = lt) { let h = Za(t); if (h.length === 0)
    return () => { }; let u = new Set, _ = [], p; function f(T, y) { s.addEventListener(T, y), _.push(() => s.removeEventListener(T, y)); } function C(T, y) { clearTimeout(p), y > 0 ? p = setTimeout(T, y) : T(); } for (let [T, y] of h)
    if (y ? (f(T, () => { u.add(T), C(() => u.size > 0 && e(), o); }), f(y, () => { u.delete(T), C(() => u.size === 0 && i(), r); })) : f(T, () => a() ? C(i, r) : C(e, o)), T === "mouseenter" && y === "mouseleave" && r > 0) {
        let w = l.subscribe(() => { u.delete(T), clearTimeout(p); }), R = d.subscribe(() => { u.delete(T), C(() => u.size === 0 && i(), r); });
        _.push(() => w.unsubscribe(), () => R.unsubscribe());
    } return _.push(() => clearTimeout(p)), () => _.forEach(T => T()); }
var za = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.autoClose = !0, this.placement = "auto", this.popperOptions = e => e, this.triggers = "click", this.disablePopover = !1, this.openDelay = 0, this.closeDelay = 0; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Qa = 0, Ya = (() => { let t = class t {
    isTitleTemplate() { return this.title instanceof k; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-popover-window"]], hostAttrs: ["role", "tooltip", 2, "position", "absolute"], hostVars: 5, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("mouseenter", function () { return o.onMouseEnter(); })("mouseleave", function () { return o.onMouseLeave(); }), i & 2 && (n.\u0275\u0275domProperty("id", o.id), n.\u0275\u0275classMap("popover" + (o.popoverClass ? " " + o.popoverClass : "")), n.\u0275\u0275classProp("fade", o.animation)); }, inputs: { animation: "animation", title: "title", id: "id", popoverClass: "popoverClass", context: "context", onMouseEnter: "onMouseEnter", onMouseLeave: "onMouseLeave" }, ngContentSelectors: z, decls: 4, vars: 1, consts: [["simpleTitle", ""], ["data-popper-arrow", "", 1, "popover-arrow"], [1, "popover-header"], [1, "popover-body"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275element(0, "div", 1), n.\u0275\u0275conditionalCreate(1, bs, 4, 2, "h3", 2), n.\u0275\u0275elementStart(2, "div", 3), n.\u0275\u0275projection(3), n.\u0275\u0275elementEnd()), i & 2 && (n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.title ? 1 : -1)); }, dependencies: [Z], encapsulation: 2, changeDetection: 0 }); let s = t; return s; })(), ml = (() => { let t = class t {
    constructor() { this._config = c(za), this.animation = this._config.animation, this.autoClose = this._config.autoClose, this.placement = this._config.placement, this.popperOptions = this._config.popperOptions, this.triggers = this._config.triggers, this.container = this._config.container, this.disablePopover = this._config.disablePopover, this.popoverClass = this._config.popoverClass, this.openDelay = this._config.openDelay, this.closeDelay = this._config.closeDelay, this.shown = new g, this.hidden = new g, this._nativeElement = c(S).nativeElement, this._ngZone = c(A), this._document = c(B), this._changeDetector = c(x), this._injector = c(M), this._ngbPopoverWindowId = `ngb-popover-${Qa++}`, this._popupService = new Ce(Ya), this._windowRef = null, this._positioning = Ne(), this._mouseEnterPopover = new b, this._mouseLeavePopover = new b, this._opening = !0, this._transitioning = !1; }
    open(e) { if (!this._opening && this._transitioning && (this._transitioning = !1, Se(this._windowRef.location.nativeElement)), !this._windowRef && !this._isDisabled()) {
        let { windowRef: i, transition$: o } = this._popupService.open(this.ngbPopover, e ?? this.popoverContext, this.animation);
        this._opening = !0, this._transitioning = !0, this._windowRef = i, this._windowRef.setInput("animation", this.animation), this._windowRef.setInput("title", this.popoverTitle), this._windowRef.setInput("context", e ?? this.popoverContext), this._windowRef.setInput("popoverClass", this.popoverClass), this._windowRef.setInput("id", this._ngbPopoverWindowId), this._windowRef.setInput("onMouseEnter", () => this._mouseEnterPopover.next()), this._windowRef.setInput("onMouseLeave", () => this._mouseLeavePopover.next()), this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbPopoverWindowId), this.container === "body" && this._document.body.appendChild(this._windowRef.location.nativeElement), this._windowRef.changeDetectorRef.detectChanges(), this._windowRef.changeDetectorRef.markForCheck(), this._ngZone.runOutsideAngular(() => { this._positioning.createPopper({ hostElement: this._getPositionTargetElement(), targetElement: this._windowRef.location.nativeElement, placement: this.placement, baseClass: "bs-popover", updatePopperOptions: r => this.popperOptions(Pe([0, 8])(r)) }), Promise.resolve().then(() => { this._positioning.update(); }), this._afterRenderRef = Ee({ mixedReadWrite: () => { this._positioning.update(); } }, { injector: this._injector }); }), Re(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]), o.subscribe(() => { this._transitioning && (this._transitioning = !1, this.shown.emit()); });
    } }
    close(e = this.animation) { this._opening && this._transitioning && (this._transitioning = !1, Se(this._windowRef.location.nativeElement)), this._windowRef && (this._getPositionTargetElement().removeAttribute("aria-describedby"), this._opening = !1, this._transitioning = !0, this._popupService.close(e).subscribe(() => { this._windowRef = null, this._positioning.destroy(), this._afterRenderRef?.destroy(), this._transitioning && (this._transitioning = !1, this.hidden.emit()), this._changeDetector.markForCheck(); })); }
    toggle() { this._windowRef ? this.close() : this.open(); }
    isOpen() { return this._windowRef != null; }
    ngOnInit() { this._unregisterListenersFn = Fi(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterPopover, this._mouseLeavePopover); }
    ngOnChanges({ ngbPopover: e, popoverTitle: i, disablePopover: o, popoverClass: r }) { r && this.isOpen() && this._windowRef.setInput("popoverClass", r.currentValue), (e || i || o) && this._isDisabled() && this.close(); }
    ngOnDestroy() { this.close(!1), this._unregisterListenersFn?.(); }
    _isDisabled() { return this.disablePopover ? !0 : !this.ngbPopover && !this.popoverTitle; }
    _getPositionTargetElement() { return (j(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbPopover", ""]], inputs: { animation: "animation", autoClose: "autoClose", ngbPopover: "ngbPopover", popoverTitle: "popoverTitle", placement: "placement", popperOptions: "popperOptions", triggers: "triggers", positionTarget: "positionTarget", container: "container", disablePopover: "disablePopover", popoverClass: "popoverClass", popoverContext: "popoverContext", openDelay: "openDelay", closeDelay: "closeDelay" }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbPopover"], features: [n.\u0275\u0275NgOnChangesFeature] }); let s = t; return s; })(), xi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), qa = (() => { let t = class t {
    constructor() { this.max = 100, this.animated = !1, this.ariaLabel = "progress bar", this.striped = !1, this.showValue = !1; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), yl = (() => { let t = class t {
    set max(e) { this._max = !v(e) || e <= 0 ? 100 : e; }
    get max() { return this._max; }
    constructor() { this._config = c(qa), this.stacked = c(Xa, { optional: !0 }), this.animated = this._config.animated, this.ariaLabel = this._config.ariaLabel, this.striped = this._config.striped, this.showValue = this._config.showValue, this.textType = this._config.textType, this.type = this._config.type, this.value = 0, this.height = this._config.height, this.max = this._config.max; }
    getValue() { return je(this.value, this.max); }
    getPercentValue() { return 100 * this.getValue() / this.max; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-progressbar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0", 1, "progress"], hostVars: 7, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275attribute("aria-valuenow", o.getValue())("aria-valuemax", o.max)("aria-label", o.ariaLabel), n.\u0275\u0275styleProp("width", o.stacked ? o.getPercentValue() : null, "%")("height", o.height)); }, inputs: { max: "max", animated: "animated", ariaLabel: "ariaLabel", striped: "striped", showValue: "showValue", textType: "textType", type: "type", value: "value", height: "height" }, ngContentSelectors: z, decls: 3, vars: 11, consts: () => { let e; return e = $localize `:@@ngb.progressbar.value:${"\uFFFD0\uFFFD"}:INTERPOLATION:`, [e]; }, template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275domElementStart(0, "div"), n.\u0275\u0275conditionalCreate(1, Ds, 3, 3, "span"), n.\u0275\u0275projection(2), n.\u0275\u0275domElementEnd()), i & 2 && (n.\u0275\u0275classMap(n.\u0275\u0275interpolate2("progress-bar", o.type ? o.textType ? " bg-" + o.type : " text-bg-" + o.type : "", "", o.textType ? " text-" + o.textType : "")), n.\u0275\u0275styleProp("width", o.stacked ? null : o.getPercentValue(), "%"), n.\u0275\u0275classProp("progress-bar-animated", o.animated)("progress-bar-striped", o.striped), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.showValue ? 1 : -1)); }, dependencies: [sn], encapsulation: 2, changeDetection: 0 }); let s = t; return s; })(), Xa = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-progressbar-stacked"]], hostAttrs: [1, "progress-stacked"], ngContentSelectors: z, decls: 1, vars: 0, template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 }); let s = t; return s; })(), Bi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), er = (() => { let t = class t {
    constructor() { this.max = 10, this.readonly = !1, this.resettable = !1, this.tabindex = 0; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), vl = (() => { let t = class t {
    constructor() { this.contexts = [], this._config = c(er), this._changeDetectorRef = c(x), this.disabled = !1, this.max = this._config.max, this.readonly = this._config.readonly, this.resettable = this._config.resettable, this.tabindex = this._config.tabindex, this.hover = new g, this.leave = new g, this.rateChange = new g(!0), this.onChange = e => { }, this.onTouched = () => { }; }
    ariaValueText(e, i) { return `${e} out of ${i}`; }
    isInteractive() { return !this.readonly && !this.disabled; }
    enter(e) { this.isInteractive() && this._updateState(e), this.hover.emit(e); }
    handleBlur() { this.onTouched(); }
    handleClick(e) { this.isInteractive() && this.update(this.resettable && this.rate === e ? 0 : e); }
    handleKeyDown(e) { switch (e.key) {
        case "ArrowDown":
        case "ArrowLeft":
            this.update(this.rate - 1);
            break;
        case "ArrowUp":
        case "ArrowRight":
            this.update(this.rate + 1);
            break;
        case "Home":
            this.update(0);
            break;
        case "End":
            this.update(this.max);
            break;
        default: return;
    } e.preventDefault(); }
    ngOnChanges(e) { e.rate && this.update(this.rate), e.max && this._updateMax(); }
    ngOnInit() { this._setupContexts(), this._updateState(this.rate); }
    registerOnChange(e) { this.onChange = e; }
    registerOnTouched(e) { this.onTouched = e; }
    reset() { this.leave.emit(this.nextRate), this._updateState(this.rate); }
    setDisabledState(e) { this.disabled = e; }
    update(e, i = !0) { let o = je(e, this.max, 0); this.isInteractive() && this.rate !== o && (this.rate = o, this.rateChange.emit(this.rate)), i && (this.onChange(this.rate), this.onTouched()), this._updateState(this.rate); }
    writeValue(e) { this.update(e, !1), this._changeDetectorRef.markForCheck(); }
    _updateState(e) { this.nextRate = e, this.contexts.forEach((i, o) => i.fill = Math.round(je(e - o, 1, 0) * 100)); }
    _updateMax() { this.max > 0 && (this._setupContexts(), this.update(this.rate)); }
    _setupContexts() { this.contexts = Array.from({ length: this.max }, (e, i) => ({ fill: 0, index: i })); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-rating"]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, k, 5), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.starTemplateFromContent = l.first);
    } }, hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"], hostVars: 6, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("blur", function () { return o.handleBlur(); })("keydown", function (l) { return o.handleKeyDown(l); })("mouseleave", function () { return o.reset(); }), i & 2 && (n.\u0275\u0275domProperty("tabIndex", o.disabled ? -1 : o.tabindex), n.\u0275\u0275attribute("aria-valuemax", o.max)("aria-valuenow", o.nextRate)("aria-valuetext", o.ariaValueText(o.nextRate, o.max))("aria-readonly", o.readonly && !o.disabled ? !0 : null)("aria-disabled", o.disabled ? !0 : null)); }, inputs: { disabled: "disabled", max: "max", rate: "rate", readonly: "readonly", resettable: "resettable", starTemplate: "starTemplate", tabindex: "tabindex", ariaValueText: "ariaValueText" }, outputs: { hover: "hover", leave: "leave", rateChange: "rateChange" }, features: [n.\u0275\u0275ProvidersFeature([{ provide: Ae, useExisting: te(() => t), multi: !0 }]), n.\u0275\u0275NgOnChangesFeature], decls: 4, vars: 0, consts: [["t", ""], [1, "visually-hidden"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (i, o) { i & 1 && (n.\u0275\u0275template(0, ws, 1, 1, "ng-template", null, 0, n.\u0275\u0275templateRefExtractor), n.\u0275\u0275repeaterCreate(2, Ss, 4, 5, null, null, n.\u0275\u0275repeaterTrackByIdentity)), i & 2 && (n.\u0275\u0275advance(2), n.\u0275\u0275repeater(o.contexts)); }, dependencies: [Z], encapsulation: 2, changeDetection: 0 }); let s = t; return s; })(), Vi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })();
function Je(s, t) { return !s || t == null ? null : j(t) ? s.querySelector(`#${CSS.escape(t)}`) : t; }
function tr(s, t) { let a = [...t].map(({ id: e }) => `#${CSS.escape(e)}`).join(","); return Array.from(s.querySelectorAll(a)); }
var ir = (s, t, a) => { let { rootElement: e, fragments: i, scrollSpy: o, options: r, entries: l } = s, d = tr(e, i); if (!a.initialized) {
    a.initialized = !0, a.gapFragment = null, a.visibleFragments = new Set;
    let h = Je(e, r?.initialFragment);
    if (h) {
        o.scrollTo(h);
        return;
    }
} for (let h of l) {
    let { isIntersecting: u, target: _ } = h;
    if (u)
        a.gapFragment && (a.visibleFragments.delete(a.gapFragment), a.gapFragment = null), a.visibleFragments.add(_);
    else if (a.visibleFragments.delete(_), a.visibleFragments.size === 0 && o.active !== "")
        if (h.boundingClientRect.top < h.rootBounds.top)
            a.gapFragment = _, a.visibleFragments.add(a.gapFragment);
        else if (_ === d[0]) {
            a.gapFragment = null, a.visibleFragments.clear(), t("");
            return;
        }
        else {
            let p = d.indexOf(_);
            a.gapFragment = d[p - 1] || null, a.gapFragment && a.visibleFragments.add(a.gapFragment);
        }
} for (let h of d)
    if (a.visibleFragments.has(h)) {
        t(h.id);
        break;
    } }, nr = (() => { let t = class t {
    constructor() { this.scrollBehavior = "smooth", this.processChanges = ir; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), sr = 3, ze = (() => { let t = class t {
    constructor() { this._observer = null, this._containerElement = null, this._fragments = new Set, this._preRegisteredFragments = new Set, this._active$ = new b, this._distinctActive$ = this._active$.pipe($e()), this._active = "", this._config = c(nr), this._document = c(B), this._platformId = c(ti), this._scrollBehavior = this._config.scrollBehavior, this._diChangeDetectorRef = c(x, { optional: !0 }), this._changeDetectorRef = this._diChangeDetectorRef, this._zone = c(A), this._distinctActive$.pipe(L()).subscribe(e => { this._active = e, this._changeDetectorRef?.markForCheck(); }); }
    get active() { return this._active; }
    get active$() { return this._distinctActive$; }
    start(e) { if (oi(this._platformId)) {
        this._cleanup();
        let { root: i, rootMargin: o, scrollBehavior: r, threshold: l, fragments: d, changeDetectorRef: h, processChanges: u } = F({}, e);
        this._containerElement = i ?? this._document.documentElement, this._changeDetectorRef = h ?? this._diChangeDetectorRef, this._scrollBehavior = r ?? this._config.scrollBehavior;
        let _ = u ?? this._config.processChanges, p = {};
        this._observer = new IntersectionObserver(f => _({ entries: f, rootElement: this._containerElement, fragments: this._fragments, scrollSpy: this, options: F({}, e) }, C => this._active$.next(C), p), F(F({ root: i ?? this._document }, o && { rootMargin: o }), l && { threshold: l }));
        for (let f of [...this._preRegisteredFragments, ...d ?? []])
            this.observe(f);
        this._preRegisteredFragments.clear();
    } }
    stop() { this._cleanup(), this._active$.next(""); }
    scrollTo(e, i) { let { behavior: o } = F({ behavior: this._scrollBehavior }, i); if (this._containerElement) {
        let r = Je(this._containerElement, e);
        if (r) {
            let l = r.offsetTop - this._containerElement.offsetTop;
            this._containerElement.scrollTo({ top: l, behavior: o });
            let d = this._containerElement.scrollTop, h = 0, u = this._containerElement;
            this._zone.runOutsideAngular(() => { let _ = () => { let p = d === u.scrollTop; p ? h++ : h = 0, !p || p && h < sr ? (d = u.scrollTop, requestAnimationFrame(_)) : this._zone.run(() => this._active$.next(r.id)); }; requestAnimationFrame(_); });
        }
    } }
    observe(e) { if (!this._observer) {
        this._preRegisteredFragments.add(e);
        return;
    } let i = Je(this._containerElement, e); i && !this._fragments.has(i) && (this._fragments.add(i), this._observer.observe(i)); }
    unobserve(e) { if (!this._observer) {
        this._preRegisteredFragments.delete(e);
        return;
    } let i = Je(this._containerElement, e); if (i) {
        this._fragments.delete(i), this._observer.disconnect();
        for (let o of this._fragments)
            this._observer.observe(o);
    } }
    ngOnDestroy() { this._cleanup(); }
    _cleanup() { this._fragments.clear(), this._observer?.disconnect(), this._changeDetectorRef = this._diChangeDetectorRef, this._scrollBehavior = this._config.scrollBehavior, this._observer = null, this._containerElement = null; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), or = (() => { let t = class t {
    constructor() { this._changeDetector = c(x), this._scrollSpyMenu = c(ar, { optional: !0 }), this._scrollSpyAPI = this._scrollSpyMenu ?? c(ze), this._destroyRef = c(se), this._isActive = !1; }
    set data(e) { Array.isArray(e) ? (this._scrollSpyAPI = e[0], this.fragment = e[1], this.parent ??= e[2]) : e instanceof Li ? this._scrollSpyAPI = e : j(e) && (this.fragment = e); }
    ngOnInit() { this._scrollSpyMenu || this._scrollSpyAPI.active$.pipe(L(this._destroyRef)).subscribe(e => { e === this.fragment ? this._activate() : this._deactivate(), this._changeDetector.markForCheck(); }); }
    _activate() { this._isActive = !0, this._scrollSpyMenu && this._scrollSpyMenu.getItem(this.parent ?? "")?._activate(); }
    _deactivate() { this._isActive = !1, this._scrollSpyMenu && this._scrollSpyMenu.getItem(this.parent ?? "")?._deactivate(); }
    isActive() { return this._isActive; }
    scrollTo(e) { this._scrollSpyAPI.scrollTo(this.fragment, e); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbScrollSpyItem", ""]], hostVars: 2, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("click", function () { return o.scrollTo(); }), i & 2 && n.\u0275\u0275classProp("active", o.isActive()); }, inputs: { data: [0, "ngbScrollSpyItem", "data"], fragment: "fragment", parent: "parent" }, exportAs: ["ngbScrollSpyItem"] }); let s = t; return s; })(), ar = (() => { let t = class t {
    constructor() { this._scrollSpyRef = c(ze), this._destroyRef = c(se), this._map = new Map, this._lastActiveItem = null; }
    set scrollSpy(e) { this._scrollSpyRef = e; }
    get active() { return this._scrollSpyRef.active; }
    get active$() { return this._scrollSpyRef.active$; }
    scrollTo(e, i) { this._scrollSpyRef.scrollTo(e, i); }
    getItem(e) { return this._map.get(e); }
    ngAfterViewInit() { this._items.changes.pipe(L(this._destroyRef)).subscribe(() => this._rebuildMap()), this._rebuildMap(), this._scrollSpyRef.active$.pipe(L(this._destroyRef)).subscribe(e => { this._lastActiveItem?._deactivate(); let i = this._map.get(e); i && (i._activate(), this._lastActiveItem = i); }); }
    _rebuildMap() { this._map.clear(); for (let e of this._items)
        this._map.set(e.fragment, e); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbScrollSpyMenu", ""]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, or, 5), i & 2) {
        let l;
        n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o._items = l);
    } }, inputs: { scrollSpy: [0, "ngbScrollSpyMenu", "scrollSpy"] } }); let s = t; return s; })(), Li = (() => { let t = class t {
    constructor() { this._initialFragment = null, this._service = c(ze), this._nativeElement = c(S).nativeElement, this.activeChange = this._service.active$; }
    set active(e) { this._initialFragment = e, this.scrollTo(e); }
    get active() { return this._service.active; }
    get active$() { return this._service.active$; }
    ngAfterViewInit() { this._service.start(F({ processChanges: this.processChanges, root: this._nativeElement, rootMargin: this.rootMargin, threshold: this.threshold }, this._initialFragment && { initialFragment: this._initialFragment })); }
    _registerFragment(e) { this._service.observe(e.id); }
    _unregisterFragment(e) { this._service.unobserve(e.id); }
    scrollTo(e, i) { this._service.scrollTo(e, F(F({}, this.scrollBehavior && { behavior: this.scrollBehavior }), i)); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbScrollSpy", ""]], hostAttrs: ["tabindex", "0", 2, "overflow-y", "auto"], inputs: { processChanges: "processChanges", rootMargin: "rootMargin", scrollBehavior: "scrollBehavior", threshold: "threshold", active: "active" }, outputs: { activeChange: "activeChange" }, exportAs: ["ngbScrollSpy"], features: [n.\u0275\u0275ProvidersFeature([ze])] }); let s = t; return s; })(), bl = (() => { let t = class t {
    constructor() { this._destroyRef = c(se), this._scrollSpy = c(Li); }
    ngAfterViewInit() { this._scrollSpy._registerFragment(this), this._destroyRef.onDestroy(() => this._scrollSpy._unregisterFragment(this)); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbScrollSpyFragment", ""]], hostVars: 1, hostBindings: function (i, o) { i & 2 && n.\u0275\u0275domProperty("id", o.id); }, inputs: { id: [0, "ngbScrollSpyFragment", "id"] } }); let s = t; return s; })(), Gi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), Qe = class {
    constructor(t, a, e) { this.hour = P(t), this.minute = P(a), this.second = P(e); }
    changeHour(t = 1) { this.updateHour((isNaN(this.hour) ? 0 : this.hour) + t); }
    updateHour(t) { v(t) ? this.hour = (t < 0 ? 24 + t : t) % 24 : this.hour = NaN; }
    changeMinute(t = 1) { this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + t); }
    updateMinute(t) { v(t) ? (this.minute = t % 60 < 0 ? 60 + t % 60 : t % 60, this.changeHour(Math.floor(t / 60))) : this.minute = NaN; }
    changeSecond(t = 1) { this.updateSecond((isNaN(this.second) ? 0 : this.second) + t); }
    updateSecond(t) { v(t) ? (this.second = t < 0 ? 60 + t % 60 : t % 60, this.changeMinute(Math.floor(t / 60))) : this.second = NaN; }
    isValid(t = !0) { return v(this.hour) && v(this.minute) && (t ? v(this.second) : !0); }
    toString() { return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`; }
}, rr = (() => { let t = class t {
    constructor() { this.meridian = !1, this.spinners = !0, this.seconds = !1, this.hourStep = 1, this.minuteStep = 1, this.secondStep = 1, this.disabled = !1, this.readonlyInputs = !1, this.size = "medium"; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })();
function lr() { return new cr; }
var Hi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: () => lr(), providedIn: "root" }); let s = t; return s; })(), cr = (() => { let t = class t extends Hi {
    fromModel(e) { return e && m(e.hour) && m(e.minute) ? { hour: e.hour, minute: e.minute, second: m(e.second) ? e.second : null } : null; }
    toModel(e) { return e && m(e.hour) && m(e.minute) ? { hour: e.hour, minute: e.minute, second: m(e.second) ? e.second : null } : null; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), Ji = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: () => new dr, providedIn: "root" }); let s = t; return s; })(), dr = (() => { let t = class t extends Ji {
    constructor() { super(...arguments), this._locale = c(ii), this._periods = [ht(new Date(36e5), "a", this._locale, "UTC"), ht(new Date(36e5 * 13), "a", this._locale, "UTC")]; }
    getMorningPeriod() { return this._periods[0]; }
    getAfternoonPeriod() { return this._periods[1]; }
}; t.\u0275fac = (() => { let e; return function (o) { return (e || (e = n.\u0275\u0275getInheritedFactory(t)))(o || t); }; })(), t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); let s = t; return s; })(), hr = /[^0-9]/g, Dl = (() => {
    let t = class t {
        set hourStep(e) { this._hourStep = m(e) ? e : this._config.hourStep; }
        get hourStep() { return this._hourStep; }
        set minuteStep(e) { this._minuteStep = m(e) ? e : this._config.minuteStep; }
        get minuteStep() { return this._minuteStep; }
        set secondStep(e) { this._secondStep = m(e) ? e : this._config.secondStep; }
        get secondStep() { return this._secondStep; }
        constructor(e, i, o, r) { this._config = e, this._ngbTimeAdapter = i, this._cd = o, this.i18n = r, this.onChange = l => { }, this.onTouched = () => { }, this.meridian = e.meridian, this.spinners = e.spinners, this.seconds = e.seconds, this.hourStep = e.hourStep, this.minuteStep = e.minuteStep, this.secondStep = e.secondStep, this.disabled = e.disabled, this.readonlyInputs = e.readonlyInputs, this.size = e.size; }
        writeValue(e) { let i = this._ngbTimeAdapter.fromModel(e); this.model = i ? new Qe(i.hour, i.minute, i.second) : new Qe, !this.seconds && (!i || !v(i.second)) && (this.model.second = 0), this._cd.markForCheck(); }
        registerOnChange(e) { this.onChange = e; }
        registerOnTouched(e) { this.onTouched = e; }
        setDisabledState(e) { this.disabled = e; }
        changeHour(e) { this.model?.changeHour(e), this.propagateModelChange(); }
        changeMinute(e) { this.model?.changeMinute(e), this.propagateModelChange(); }
        changeSecond(e) { this.model?.changeSecond(e), this.propagateModelChange(); }
        updateHour(e) { let i = this.model ? this.model.hour >= 12 : !1, o = P(e); this.meridian && (i && o < 12 || !i && o === 12) ? this.model?.updateHour(o + 12) : this.model?.updateHour(o), this.propagateModelChange(); }
        updateMinute(e) { this.model?.updateMinute(P(e)), this.propagateModelChange(); }
        updateSecond(e) { this.model?.updateSecond(P(e)), this.propagateModelChange(); }
        toggleMeridian() { this.model && v(this.model.hour) && this.meridian && this.changeHour(12); }
        formatInput(e) { e.value = e.value.replace(hr, ""); }
        formatHour(e) { return v(e) ? this.meridian ? ae(e % 12 === 0 ? 12 : e % 12) : ae(e % 24) : ae(NaN); }
        formatMinSec(e) { return ae(v(e) ? e : NaN); }
        handleBlur() { this.onTouched(); }
        get isSmallSize() { return this.size === "small"; }
        get isLargeSize() { return this.size === "large"; }
        ngOnChanges(e) { e.seconds && !this.seconds && this.model && !v(this.model.second) && (this.model.second = 0, this.propagateModelChange(!1)); }
        propagateModelChange(e = !0) { e && this.onTouched(), this.model?.isValid(this.seconds) ? this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second })) : this.onChange(this._ngbTimeAdapter.toModel(null)); }
    };
    t.\u0275fac = function (i) { return new (i || t)(n.\u0275\u0275directiveInject(rr), n.\u0275\u0275directiveInject(Hi), n.\u0275\u0275directiveInject(n.ChangeDetectorRef), n.\u0275\u0275directiveInject(Ji)); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-timepicker"]], inputs: { meridian: "meridian", spinners: "spinners", seconds: "seconds", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", readonlyInputs: "readonlyInputs", size: "size" }, exportAs: ["ngbTimepicker"], features: [n.\u0275\u0275ProvidersFeature([{ provide: Ae, useExisting: te(() => t), multi: !0 }]), n.\u0275\u0275NgOnChangesFeature], decls: 14, vars: 23, consts: () => { let e; e = $localize `:@@ngb.timepicker.HH:HH`; let i; i = $localize `:@@ngb.timepicker.hours:Hours`; let o; o = $localize `:@@ngb.timepicker.MM:MM`; let r; r = $localize `:@@ngb.timepicker.minutes:Minutes`; let l; l = $localize `:@@ngb.timepicker.increment-hours:Increment hours`; let d; d = $localize `:@@ngb.timepicker.decrement-hours:Decrement hours`; let h; h = $localize `:@@ngb.timepicker.increment-minutes:Increment minutes`; let u; u = $localize `:@@ngb.timepicker.decrement-minutes:Decrement minutes`; let _; _ = $localize `:@@ngb.timepicker.SS:SS`; let p; p = $localize `:@@ngb.timepicker.seconds:Seconds`; let f; f = $localize `:@@ngb.timepicker.increment-seconds:Increment seconds`; let C; C = $localize `:@@ngb.timepicker.decrement-seconds:Decrement seconds`; let T; return T = $localize `:@@ngb.timepicker.PM:${"\uFFFD0\uFFFD"}:INTERPOLATION:`, [l, d, h, u, f, C, T, [3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "btn-sm", "btn-lg", "disabled"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", e, "aria-label", i, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", o, "aria-label", r, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "click", "disabled"], [1, "chevron", "ngb-tp-chevron"], [1, "visually-hidden"], [1, "chevron", "ngb-tp-chevron", "bottom"], [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", _, "aria-label", p, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"]]; }, template: function (i, o) { i & 1 && (n.\u0275\u0275domElementStart(0, "fieldset", 7)(1, "div", 8)(2, "div", 9), n.\u0275\u0275conditionalCreate(3, Os, 4, 7, "button", 10), n.\u0275\u0275domElementStart(4, "input", 11), n.\u0275\u0275domListener("change", function (l) { return o.updateHour(l.target.value); })("blur", function () { return o.handleBlur(); })("input", function (l) { return o.formatInput(l.target); })("keydown.ArrowUp", function (l) { return o.changeHour(o.hourStep), l.preventDefault(); })("keydown.ArrowDown", function (l) { return o.changeHour(-o.hourStep), l.preventDefault(); }), n.\u0275\u0275domElementEnd(), n.\u0275\u0275conditionalCreate(5, Cs, 4, 7, "button", 10), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(6, "div", 12), n.\u0275\u0275text(7, ":"), n.\u0275\u0275domElementEnd(), n.\u0275\u0275domElementStart(8, "div", 13), n.\u0275\u0275conditionalCreate(9, Es, 4, 7, "button", 10), n.\u0275\u0275domElementStart(10, "input", 14), n.\u0275\u0275domListener("change", function (l) { return o.updateMinute(l.target.value); })("blur", function () { return o.handleBlur(); })("input", function (l) { return o.formatInput(l.target); })("keydown.ArrowUp", function (l) { return o.changeMinute(o.minuteStep), l.preventDefault(); })("keydown.ArrowDown", function (l) { return o.changeMinute(-o.minuteStep), l.preventDefault(); }), n.\u0275\u0275domElementEnd(), n.\u0275\u0275conditionalCreate(11, Ms, 4, 7, "button", 10), n.\u0275\u0275domElementEnd(), n.\u0275\u0275conditionalCreate(12, Ns, 6, 9), n.\u0275\u0275conditionalCreate(13, ks, 5, 8), n.\u0275\u0275domElementEnd()()), i & 2 && (n.\u0275\u0275classProp("disabled", o.disabled), n.\u0275\u0275domProperty("disabled", o.disabled), n.\u0275\u0275advance(3), n.\u0275\u0275conditional(o.spinners ? 3 : -1), n.\u0275\u0275advance(), n.\u0275\u0275classProp("form-control-sm", o.isSmallSize)("form-control-lg", o.isLargeSize), n.\u0275\u0275domProperty("value", o.formatHour(o.model == null ? null : o.model.hour))("readOnly", o.readonlyInputs)("disabled", o.disabled), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.spinners ? 5 : -1), n.\u0275\u0275advance(4), n.\u0275\u0275conditional(o.spinners ? 9 : -1), n.\u0275\u0275advance(), n.\u0275\u0275classProp("form-control-sm", o.isSmallSize)("form-control-lg", o.isLargeSize), n.\u0275\u0275domProperty("value", o.formatMinSec(o.model == null ? null : o.model.minute))("readOnly", o.readonlyInputs)("disabled", o.disabled), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.spinners ? 11 : -1), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.seconds ? 12 : -1), n.\u0275\u0275advance(), n.\u0275\u0275conditional(o.meridian ? 13 : -1)); }, styles: [`ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}
`], encapsulation: 2 });
    let s = t;
    return s;
})(), $i = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), ur = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.autohide = !0, this.delay = 5e3, this.ariaLive = "polite"; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), _r = (s, t) => { let { classList: a } = s; if (t)
    a.add("fade");
else {
    a.add("show");
    return;
} return X(s), a.add("show", "showing"), () => { a.remove("showing"); }; }, pr = ({ classList: s }) => (s.add("showing"), () => { s.remove("show", "showing"); }), fr = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbToastHeader", ""]] }); let s = t; return s; })(), wl = (() => {
    let t = class t {
        constructor(e) { this.ariaLive = e, this._config = c(ur), this._zone = c(A), this._injector = c(M), this._element = c(S), this.animation = this._config.animation, this.delay = this._config.delay, this.autohide = this._config.autohide, this.contentHeaderTpl = null, this.shown = new g, this.hidden = new g, this.ariaLive ??= this._config.ariaLive; }
        ngAfterContentInit() { U({ mixedReadWrite: () => { this._init(), this.show(); } }, { injector: this._injector }); }
        ngOnChanges(e) { "autohide" in e && (this._clearTimeout(), this._init()); }
        hide() { this._clearTimeout(); let e = E(this._zone, this._element.nativeElement, pr, { animation: this.animation, runningTransition: "stop" }); return e.subscribe(() => { this.hidden.emit(); }), e; }
        show() { let e = E(this._zone, this._element.nativeElement, _r, { animation: this.animation, runningTransition: "continue" }); return e.subscribe(() => { this.shown.emit(); }), e; }
        _init() { this.autohide && !this._timeoutID && (this._timeoutID = setTimeout(() => this.hide(), this.delay)); }
        _clearTimeout() { this._timeoutID && (clearTimeout(this._timeoutID), this._timeoutID = null); }
    };
    t.\u0275fac = function (i) { return new (i || t)(n.\u0275\u0275injectAttribute("aria-live")); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-toast"]], contentQueries: function (i, o, r) { if (i & 1 && n.\u0275\u0275contentQuery(r, fr, 7, k), i & 2) {
            let l;
            n.\u0275\u0275queryRefresh(l = n.\u0275\u0275loadQuery()) && (o.contentHeaderTpl = l.first);
        } }, hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"], hostVars: 3, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275attribute("aria-live", o.ariaLive), n.\u0275\u0275classProp("fade", o.animation)); }, inputs: { animation: "animation", delay: "delay", autohide: "autohide", header: "header" }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbToast"], features: [n.\u0275\u0275NgOnChangesFeature], ngContentSelectors: z, decls: 5, vars: 1, consts: () => { let e; return e = $localize `:@@ngb.toast.close-aria:Close`, [["headerTpl", ""], [1, "toast-header"], [1, "toast-body"], [1, "me-auto"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", e, 1, "btn-close", 3, "click"]]; }, template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275template(0, Fs, 2, 1, "ng-template", null, 0, n.\u0275\u0275templateRefExtractor), n.\u0275\u0275conditionalCreate(2, Bs, 3, 1, "div", 1), n.\u0275\u0275elementStart(3, "div", 2), n.\u0275\u0275projection(4), n.\u0275\u0275elementEnd()), i & 2 && (n.\u0275\u0275advance(2), n.\u0275\u0275conditional(o.contentHeaderTpl || o.header ? 2 : -1)); }, dependencies: [Z], styles: [`ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}
`], encapsulation: 2 });
    let s = t;
    return s;
})(), ji = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), gr = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.autoClose = !0, this.placement = "auto", this.popperOptions = e => e, this.triggers = "hover focus", this.disableTooltip = !1, this.openDelay = 0, this.closeDelay = 0; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), mr = 0, yr = (() => {
    let t = class t {
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-tooltip-window"]], hostAttrs: ["role", "tooltip"], hostVars: 5, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("mouseenter", function () { return o.onMouseEnter(); })("mouseleave", function () { return o.onMouseLeave(); }), i & 2 && (n.\u0275\u0275domProperty("id", o.id), n.\u0275\u0275classMap("tooltip" + (o.tooltipClass ? " " + o.tooltipClass : "")), n.\u0275\u0275classProp("fade", o.animation)); }, inputs: { animation: "animation", id: "id", tooltipClass: "tooltipClass", onMouseEnter: "onMouseEnter", onMouseLeave: "onMouseLeave" }, ngContentSelectors: z, decls: 3, vars: 0, consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]], template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275domElement(0, "div", 0), n.\u0275\u0275domElementStart(1, "div", 1), n.\u0275\u0275projection(2), n.\u0275\u0275domElementEnd()); }, styles: [`ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), Tl = (() => { let t = class t {
    constructor() { this._config = c(gr), this.animation = this._config.animation, this.autoClose = this._config.autoClose, this.placement = this._config.placement, this.popperOptions = this._config.popperOptions, this.triggers = this._config.triggers, this.container = this._config.container, this.disableTooltip = this._config.disableTooltip, this.tooltipClass = this._config.tooltipClass, this.openDelay = this._config.openDelay, this.closeDelay = this._config.closeDelay, this.shown = new g, this.hidden = new g, this._nativeElement = c(S).nativeElement, this._ngZone = c(A), this._document = c(B), this._changeDetector = c(x), this._injector = c(M), this._ngbTooltipWindowId = `ngb-tooltip-${mr++}`, this._popupService = new Ce(yr), this._windowRef = null, this._positioning = Ne(), this._mouseEnterTooltip = new b, this._mouseLeaveTooltip = new b, this._opening = !0, this._transitioning = !1; }
    set ngbTooltip(e) { this._ngbTooltip = e, !e && this._windowRef && this.close(); }
    get ngbTooltip() { return this._ngbTooltip; }
    open(e) { if (!this._opening && this._transitioning && (this._transitioning = !1, Se(this._windowRef.location.nativeElement)), !this._windowRef && this._ngbTooltip && !this.disableTooltip) {
        let { windowRef: i, transition$: o } = this._popupService.open(this._ngbTooltip, e ?? this.tooltipContext, this.animation);
        this._opening = !0, this._transitioning = !0, this._windowRef = i, this._windowRef.setInput("animation", this.animation), this._windowRef.setInput("tooltipClass", this.tooltipClass), this._windowRef.setInput("id", this._ngbTooltipWindowId), this._windowRef.setInput("onMouseEnter", () => this._mouseEnterTooltip.next()), this._windowRef.setInput("onMouseLeave", () => this._mouseLeaveTooltip.next()), this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbTooltipWindowId), this.container === "body" && this._document.body.appendChild(this._windowRef.location.nativeElement), this._windowRef.changeDetectorRef.detectChanges(), this._windowRef.changeDetectorRef.markForCheck(), this._ngZone.runOutsideAngular(() => { this._positioning.createPopper({ hostElement: this._getPositionTargetElement(), targetElement: this._windowRef.location.nativeElement, placement: this.placement, baseClass: "bs-tooltip", updatePopperOptions: r => this.popperOptions(Pe([0, 6])(r)) }), Promise.resolve().then(() => { this._positioning.update(); }), this._afterRenderRef = Ee({ mixedReadWrite: () => { this._positioning.update(); } }, { injector: this._injector }); }), Re(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement], [this._nativeElement]), o.subscribe(() => { this._transitioning && (this._transitioning = !1, this.shown.emit()); });
    } }
    close(e = this.animation) { this._opening && this._transitioning && (this._transitioning = !1, Se(this._windowRef.location.nativeElement)), this._windowRef != null && (this._getPositionTargetElement().removeAttribute("aria-describedby"), this._opening = !1, this._transitioning = !0, this._popupService.close(e).subscribe(() => { this._windowRef = null, this._positioning.destroy(), this._afterRenderRef?.destroy(), this._transitioning && (this._transitioning = !1, this.hidden.emit()), this._changeDetector.markForCheck(); })); }
    toggle() { this._windowRef ? this.close() : this.open(); }
    isOpen() { return this._windowRef != null; }
    ngOnInit() { this._unregisterListenersFn = Fi(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterTooltip, this._mouseLeaveTooltip); }
    ngOnChanges({ tooltipClass: e }) { e && this.isOpen() && this._windowRef.setInput("tooltipClass", e.currentValue); }
    ngOnDestroy() { this.close(!1), this._unregisterListenersFn?.(); }
    _getPositionTargetElement() { return (j(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["", "ngbTooltip", ""]], inputs: { animation: "animation", autoClose: "autoClose", placement: "placement", popperOptions: "popperOptions", triggers: "triggers", positionTarget: "positionTarget", container: "container", disableTooltip: "disableTooltip", tooltipClass: "tooltipClass", tooltipContext: "tooltipContext", openDelay: "openDelay", closeDelay: "closeDelay", ngbTooltip: "ngbTooltip" }, outputs: { shown: "shown", hidden: "hidden" }, exportAs: ["ngbTooltip"], features: [n.\u0275\u0275NgOnChangesFeature] }); let s = t; return s; })(), Wi = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), vr = (() => {
    let t = class t {
        constructor() { this.highlightClass = "ngb-highlight", this.accentSensitive = !0; }
        ngOnChanges(e) { !this.accentSensitive && !String.prototype.normalize && (console.warn("The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser."), this.accentSensitive = !0); let i = Te(this.result), o = Array.isArray(this.term) ? this.term : [this.term], r = u => this.accentSensitive ? u : Jt(u), l = o.map(u => Us(r(Te(u)))).filter(u => u), d = this.accentSensitive ? i : Jt(i), h = l.length ? d.split(new RegExp(`(${l.join("|")})`, "gmi")) : [i]; if (this.accentSensitive)
            this.parts = h;
        else {
            let u = 0;
            this.parts = h.map(_ => i.substring(u, u += _.length));
        } }
    };
    t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-highlight"]], inputs: { highlightClass: "highlightClass", result: "result", term: "term", accentSensitive: "accentSensitive" }, features: [n.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [[3, "class"]], template: function (i, o) { i & 1 && n.\u0275\u0275repeaterCreate(0, Gs, 2, 1, null, null, n.\u0275\u0275repeaterTrackByIndex), i & 2 && n.\u0275\u0275repeater(o.parts); }, styles: [`.ngb-highlight{font-weight:700}
`], encapsulation: 2, changeDetection: 0 });
    let s = t;
    return s;
})(), br = new Zi("live announcer delay", { providedIn: "root", factory: () => 100 });
function ei(s, t = !1) { let a = s.body.querySelector("#ngb-live"); return a == null && t && (a = s.createElement("div"), a.setAttribute("id", "ngb-live"), a.setAttribute("aria-live", "polite"), a.setAttribute("aria-atomic", "true"), a.classList.add("visually-hidden"), s.body.appendChild(a)), a; }
var Dr = (() => { let t = class t {
    constructor() { this._document = c(B), this._delay = c(br); }
    ngOnDestroy() { let e = ei(this._document); e && e.parentElement.removeChild(e); }
    say(e) { let i = ei(this._document, !0), o = this._delay; if (i != null) {
        i.textContent = "";
        let r = () => i.textContent = e;
        o === null ? r() : setTimeout(r, o);
    } }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), wr = (() => { let t = class t {
    constructor() { this.editable = !0, this.focusFirst = !0, this.selectOnExact = !1, this.showHint = !1, this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"], this.popperOptions = e => e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Tr = (() => { let t = class t {
    constructor() { this.activeIdx = 0, this.focusFirst = !0, this.formatter = Te, this.selectEvent = new g, this.activeChangeEvent = new g; }
    hasActive() { return this.activeIdx > -1 && this.activeIdx < this.results.length; }
    getActive() { return this.results[this.activeIdx]; }
    markActive(e) { this.activeIdx = e, this._activeChanged(); }
    next() { this.activeIdx === this.results.length - 1 ? this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1 : this.activeIdx++, this._activeChanged(); }
    prev() { this.activeIdx < 0 ? this.activeIdx = this.results.length - 1 : this.activeIdx === 0 ? this.activeIdx = this.focusFirst ? this.results.length - 1 : -1 : this.activeIdx--, this._activeChanged(); }
    resetActive() { this.activeIdx = this.focusFirst ? 0 : -1, this._activeChanged(); }
    select(e) { this.selectEvent.emit(e); }
    ngOnInit() { this.resetActive(); }
    _activeChanged() { this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-typeahead-window"]], hostAttrs: ["role", "listbox"], hostVars: 3, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("mousedown", function (l) { return l.preventDefault(); }), i & 2 && (n.\u0275\u0275domProperty("id", o.id), n.\u0275\u0275classMap("dropdown-menu show" + (o.popupClass ? " " + o.popupClass : ""))); }, inputs: { id: "id", focusFirst: "focusFirst", results: "results", term: "term", formatter: "formatter", resultTemplate: "resultTemplate", popupClass: "popupClass" }, outputs: { selectEvent: "select", activeChangeEvent: "activeChange" }, exportAs: ["ngbTypeaheadWindow"], decls: 4, vars: 0, consts: [["rt", ""], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "active"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "mouseenter", "click", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function (i, o) { i & 1 && (n.\u0275\u0275template(0, Js, 1, 2, "ng-template", null, 0, n.\u0275\u0275templateRefExtractor), n.\u0275\u0275repeaterCreate(2, js, 2, 9, "button", 1, n.\u0275\u0275repeaterTrackByIndex)), i & 2 && (n.\u0275\u0275advance(2), n.\u0275\u0275repeater(o.results)); }, dependencies: [vr, Z], encapsulation: 2 }); let s = t; return s; })(), Sr = 0, Sl = (() => { let t = class t {
    constructor() { this._nativeElement = c(S).nativeElement, this._config = c(wr), this._live = c(Dr), this._document = c(B), this._ngZone = c(A), this._changeDetector = c(x), this._injector = c(M), this._popupService = new Ce(Tr), this._positioning = Ne(), this._subscription = null, this._closed$ = new b, this._inputValueBackup = null, this._inputValueForSelectOnExact = null, this._valueChanges$ = I(this._nativeElement, "input").pipe(K(e => e.target.value)), this._resubscribeTypeahead$ = new Y(null), this._windowRef = null, this.autocomplete = "off", this.container = this._config.container, this.editable = this._config.editable, this.focusFirst = this._config.focusFirst, this.selectOnExact = this._config.selectOnExact, this.showHint = this._config.showHint, this.placement = this._config.placement, this.popperOptions = this._config.popperOptions, this.selectItem = new g, this.activeDescendant = null, this.popupId = `ngb-typeahead-${Sr++}`, this._onTouched = () => { }, this._onChange = e => { }; }
    ngOnInit() { this._subscribeToUserInput(); }
    ngOnChanges({ ngbTypeahead: e }) { e && !e.firstChange && (this._unsubscribeFromUserInput(), this._subscribeToUserInput()); }
    ngOnDestroy() { this._closePopup(), this._unsubscribeFromUserInput(); }
    registerOnChange(e) { this._onChange = e; }
    registerOnTouched(e) { this._onTouched = e; }
    writeValue(e) { this._writeInputValue(this._formatItemForInput(e)), this.showHint && (this._inputValueBackup = e); }
    setDisabledState(e) { this._nativeElement.disabled = e; }
    dismissPopup() { this.isPopupOpen() && (this._resubscribeTypeahead$.next(null), this._closePopup(), this.showHint && this._inputValueBackup !== null && this._writeInputValue(this._inputValueBackup), this._changeDetector.markForCheck()); }
    isPopupOpen() { return this._windowRef != null; }
    handleBlur() { this._resubscribeTypeahead$.next(null), this._onTouched(); }
    handleKeyDown(e) { if (this.isPopupOpen())
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault(), this._windowRef.instance.next(), this._showHint();
                break;
            case "ArrowUp":
                e.preventDefault(), this._windowRef.instance.prev(), this._showHint();
                break;
            case "Enter":
            case "Tab": {
                let i = this._windowRef.instance.getActive();
                H(i) && (e.preventDefault(), e.stopPropagation(), this._selectResult(i)), this._closePopup();
                break;
            }
        } }
    _openPopup() { if (!this.isPopupOpen()) {
        this._inputValueBackup = this._nativeElement.value;
        let { windowRef: e } = this._popupService.open();
        this._windowRef = e, this._windowRef.setInput("id", this.popupId), this._windowRef.setInput("popupClass", this.popupClass), this._windowRef.instance.selectEvent.subscribe(i => this._selectResultClosePopup(i)), this._windowRef.instance.activeChangeEvent.subscribe(i => this.activeDescendant = i), this.container === "body" && (this._windowRef.location.nativeElement.style.zIndex = "1055", this._document.body.appendChild(this._windowRef.location.nativeElement)), this._changeDetector.markForCheck(), this._ngZone.runOutsideAngular(() => { this._windowRef && (this._positioning.createPopper({ hostElement: this._nativeElement, targetElement: this._windowRef.location.nativeElement, placement: this.placement, updatePopperOptions: i => this.popperOptions(Pe([0, 2])(i)) }), this._afterRenderRef = Ee({ mixedReadWrite: () => { this._positioning.update(); } }, { injector: this._injector })); }), Re(this._ngZone, this._document, "outside", () => this.dismissPopup(), this._closed$, [this._nativeElement, this._windowRef.location.nativeElement]);
    } }
    _closePopup() { this._popupService.close().subscribe(() => { this._positioning.destroy(), this._afterRenderRef?.destroy(), this._closed$.next(), this._windowRef = null, this.activeDescendant = null; }); }
    _selectResult(e) { let i = !1; this.selectItem.emit({ item: e, preventDefault: () => { i = !0; } }), this._resubscribeTypeahead$.next(null), i || (this.writeValue(e), this._onChange(e)); }
    _selectResultClosePopup(e) { this._selectResult(e), this._closePopup(); }
    _showHint() { if (this.showHint && this._windowRef?.instance.hasActive() && this._inputValueBackup != null) {
        let e = this._inputValueBackup.toLowerCase(), i = this._formatItemForInput(this._windowRef.instance.getActive());
        e === i.substring(0, this._inputValueBackup.length).toLowerCase() ? (this._writeInputValue(this._inputValueBackup + i.substring(this._inputValueBackup.length)), this._nativeElement.setSelectionRange.apply(this._nativeElement, [this._inputValueBackup.length, i.length])) : this._writeInputValue(i);
    } }
    _formatItemForInput(e) { return e != null && this.inputFormatter ? this.inputFormatter(e) : Te(e); }
    _writeInputValue(e) { this._nativeElement.value = Te(e); }
    _subscribeToUserInput() { let e = this._valueChanges$.pipe(qe(i => { this._inputValueBackup = this.showHint ? i : null, this._inputValueForSelectOnExact = this.selectOnExact ? i : null, this._onChange(this.editable ? i : null); }), this.ngbTypeahead ? this.ngbTypeahead : () => Me([])); this._subscription = this._resubscribeTypeahead$.pipe(Tt(() => e)).subscribe(i => { !i || i.length === 0 ? this._closePopup() : this.selectOnExact && i.length === 1 && this._formatItemForInput(i[0]) === this._inputValueForSelectOnExact ? (this._selectResult(i[0]), this._closePopup()) : (this._openPopup(), this._windowRef.setInput("focusFirst", this.focusFirst), this._windowRef.setInput("results", i), this._windowRef.setInput("term", this._nativeElement.value), this.resultFormatter && this._windowRef.setInput("formatter", this.resultFormatter), this.resultTemplate && this._windowRef.setInput("resultTemplate", this.resultTemplate), this._windowRef.instance.resetActive(), this._windowRef.changeDetectorRef.detectChanges(), this._showHint()); let o = i ? i.length : 0; this._live.say(o === 0 ? "No results available" : `${o} result${o === 1 ? "" : "s"} available`); }); }
    _unsubscribeFromUserInput() { this._subscription && this._subscription.unsubscribe(), this._subscription = null; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275dir = n.\u0275\u0275defineDirective({ type: t, selectors: [["input", "ngbTypeahead", ""]], hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox"], hostVars: 7, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("blur", function () { return o.handleBlur(); })("keydown", function (l) { return o.handleKeyDown(l); }), i & 2 && (n.\u0275\u0275domProperty("autocomplete", o.autocomplete), n.\u0275\u0275attribute("aria-autocomplete", o.showHint ? "both" : "list")("aria-activedescendant", o.activeDescendant)("aria-controls", o.isPopupOpen() ? o.popupId : null)("aria-expanded", o.isPopupOpen()), n.\u0275\u0275classProp("open", o.isPopupOpen())); }, inputs: { autocomplete: "autocomplete", container: "container", editable: "editable", focusFirst: "focusFirst", inputFormatter: "inputFormatter", ngbTypeahead: "ngbTypeahead", resultFormatter: "resultFormatter", resultTemplate: "resultTemplate", selectOnExact: "selectOnExact", showHint: "showHint", placement: "placement", popperOptions: "popperOptions", popupClass: "popupClass" }, outputs: { selectItem: "selectItem" }, exportAs: ["ngbTypeahead"], features: [n.\u0275\u0275ProvidersFeature([{ provide: Ae, useExisting: te(() => t), multi: !0 }]), n.\u0275\u0275NgOnChangesFeature] }); let s = t; return s; })(), Ki = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), Or = (() => { let t = class t {
    constructor() { this._ngbConfig = c(W), this.backdrop = !0, this.keyboard = !0, this.position = "start", this.scroll = !1; }
    get animation() { return this._animation ?? this._ngbConfig.animation; }
    set animation(e) { this._animation = e; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ye = class {
    close(t) { }
    dismiss(t) { }
}, bt = class {
    get componentInstance() { if (this._contentRef && this._contentRef.componentRef)
        return this._contentRef.componentRef.instance; }
    get closed() { return this._closed.asObservable().pipe(N(this._hidden)); }
    get dismissed() { return this._dismissed.asObservable().pipe(N(this._hidden)); }
    get hidden() { return this._hidden.asObservable(); }
    get shown() { return this._panelCmptRef.instance.shown.asObservable(); }
    constructor(t, a, e, i) { this._panelCmptRef = t, this._contentRef = a, this._backdropCmptRef = e, this._beforeDismiss = i, this._closed = new b, this._dismissed = new b, this._hidden = new b, t.instance.dismissEvent.subscribe(o => { this.dismiss(o); }), e && e.instance.dismissEvent.subscribe(o => { this.dismiss(o); }), this.result = new Promise((o, r) => { this._resolve = o, this._reject = r; }), this.result.then(null, () => { }); }
    close(t) { this._panelCmptRef && (this._closed.next(t), this._resolve(t), this._removeOffcanvasElements()); }
    _dismiss(t) { this._dismissed.next(t), this._reject(t), this._removeOffcanvasElements(); }
    dismiss(t) { if (this._panelCmptRef)
        if (!this._beforeDismiss)
            this._dismiss(t);
        else {
            let a = this._beforeDismiss();
            ci(a) ? a.then(e => { e !== !1 && this._dismiss(t); }, () => { }) : a !== !1 && this._dismiss(t);
        } }
    _removeOffcanvasElements() { let t = this._panelCmptRef.instance.hide(), a = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : Me(void 0); t.subscribe(() => { let { nativeElement: e } = this._panelCmptRef.location; e.parentNode.removeChild(e), this._panelCmptRef.destroy(), this._contentRef?.viewRef?.destroy(), this._panelCmptRef = null, this._contentRef = null; }), a.subscribe(() => { if (this._backdropCmptRef) {
        let { nativeElement: e } = this._backdropCmptRef.location;
        e.parentNode.removeChild(e), this._backdropCmptRef.destroy(), this._backdropCmptRef = null;
    } }), De(t, a).subscribe(() => { this._hidden.next(), this._hidden.complete(); }); }
}, kt = (function (s) { return s[s.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", s[s.ESC = 1] = "ESC", s; })(kt || {}), Cr = (() => { let t = class t {
    constructor() { this._nativeElement = c(S).nativeElement, this._zone = c(A), this._injector = c(M), this.dismissEvent = new g; }
    ngOnInit() { U({ mixedReadWrite: () => E(this._zone, this._nativeElement, (e, i) => { i && X(e), e.classList.add("show"); }, { animation: this.animation, runningTransition: "continue" }) }, { injector: this._injector }); }
    hide() { return E(this._zone, this._nativeElement, ({ classList: e }) => e.remove("show"), { animation: this.animation, runningTransition: "stop" }); }
    dismiss() { this.static || this.dismissEvent.emit(kt.BACKDROP_CLICK); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-offcanvas-backdrop"]], hostVars: 6, hostBindings: function (i, o) { i & 1 && n.\u0275\u0275listener("mousedown", function () { return o.dismiss(); }), i & 2 && (n.\u0275\u0275classMap("offcanvas-backdrop" + (o.backdropClass ? " " + o.backdropClass : "")), n.\u0275\u0275classProp("show", !o.animation)("fade", o.animation)); }, inputs: { animation: "animation", backdropClass: "backdropClass", static: "static" }, outputs: { dismissEvent: "dismiss" }, decls: 0, vars: 0, template: function (i, o) { }, encapsulation: 2 }); let s = t; return s; })(), Er = (() => { let t = class t {
    constructor() { this._document = c(B), this._elRef = c(S), this._zone = c(A), this._injector = c(M), this._closed$ = new b, this._elWithFocus = null, this.keyboard = !0, this.position = "start", this.dismissEvent = new g, this.shown = new b, this.hidden = new b; }
    dismiss(e) { this.dismissEvent.emit(e); }
    ngOnInit() { this._elWithFocus = this._document.activeElement, U({ mixedReadWrite: () => this._show() }, { injector: this._injector }); }
    ngOnDestroy() { this._disableEventHandling(); }
    hide() { let e = { animation: this.animation, runningTransition: "stop" }, i = E(this._zone, this._elRef.nativeElement, o => (o.classList.remove("showing"), o.classList.add("hiding"), () => o.classList.remove("show", "hiding")), e); return i.subscribe(() => { this.hidden.next(), this.hidden.complete(); }), this._disableEventHandling(), this._restoreFocus(), i; }
    _show() { let e = { animation: this.animation, runningTransition: "continue" }; E(this._zone, this._elRef.nativeElement, (o, r) => (r && X(o), o.classList.add("show", "showing"), () => o.classList.remove("showing")), e).subscribe(() => { this.shown.next(), this.shown.complete(); }), this._enableEventHandling(), this._setFocus(); }
    _enableEventHandling() { let { nativeElement: e } = this._elRef; this._zone.runOutsideAngular(() => { I(e, "keydown").pipe(N(this._closed$), $(i => i.key === "Escape")).subscribe(i => { this.keyboard && requestAnimationFrame(() => { i.defaultPrevented || this._zone.run(() => this.dismiss(kt.ESC)); }); }); }); }
    _disableEventHandling() { this._closed$.next(); }
    _setFocus() { let { nativeElement: e } = this._elRef; if (!e.contains(document.activeElement)) {
        let i = e.querySelector("[ngbAutofocus]"), o = Et(e)[0];
        (i || o || e).focus();
    } }
    _restoreFocus() { let e = this._document.body, i = this._elWithFocus, o; i && i.focus && e.contains(i) ? o = i : o = e, this._zone.runOutsideAngular(() => { setTimeout(() => o.focus()), this._elWithFocus = null; }); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngb-offcanvas-panel"]], hostAttrs: ["role", "dialog", "tabindex", "-1"], hostVars: 5, hostBindings: function (i, o) { i & 2 && (n.\u0275\u0275attribute("aria-modal", !0)("aria-labelledby", o.ariaLabelledBy)("aria-describedby", o.ariaDescribedBy), n.\u0275\u0275classMap("offcanvas offcanvas-" + o.position + (o.panelClass ? " " + o.panelClass : ""))); }, inputs: { animation: "animation", ariaLabelledBy: "ariaLabelledBy", ariaDescribedBy: "ariaDescribedBy", keyboard: "keyboard", panelClass: "panelClass", position: "position" }, outputs: { dismissEvent: "dismiss" }, ngContentSelectors: z, decls: 1, vars: 0, template: function (i, o) { i & 1 && (n.\u0275\u0275projectionDef(), n.\u0275\u0275projection(0)); }, encapsulation: 2 }); let s = t; return s; })(), Mr = (() => { let t = class t {
    constructor() { this._applicationRef = c(wt), this._injector = c(M), this._document = c(B), this._scrollBar = c(Ai), this._activePanelCmptHasChanged = new b, this._scrollBarRestoreFn = null, this._backdropAttributes = ["animation", "backdropClass"], this._panelAttributes = ["animation", "ariaDescribedBy", "ariaLabelledBy", "keyboard", "panelClass", "position"], this._activeInstance = new g; let e = c(A); this._activePanelCmptHasChanged.subscribe(() => { this._panelCmpt && Mt(e, this._panelCmpt.location.nativeElement, this._activePanelCmptHasChanged); }); }
    _restoreScrollBar() { let e = this._scrollBarRestoreFn; e && (this._scrollBarRestoreFn = null, e()); }
    _hideScrollBar() { this._scrollBarRestoreFn || (this._scrollBarRestoreFn = this._scrollBar.hide()); }
    open(e, i, o) { let r = o.container instanceof HTMLElement ? o.container : H(o.container) ? this._document.querySelector(o.container) : this._document.body; if (!r)
        throw new Error(`The specified offcanvas container "${o.container || "body"}" was not found in the DOM.`); o.scroll || this._hideScrollBar(); let l = new Ye, d = this._getContentRef(o.injector || e, i, l), h = o.backdrop !== !1 ? this._attachBackdrop(r) : void 0, u = this._attachWindowComponent(r, d.nodes), _ = new bt(u, d, h, o.beforeDismiss); return this._registerOffcanvasRef(_), this._registerPanelCmpt(u), _.hidden.pipe(nn(() => this._restoreScrollBar())).subscribe(), l.close = p => { _.close(p); }, l.dismiss = p => { _.dismiss(p); }, this._applyPanelOptions(u.instance, o), h && h.instance && (this._applyBackdropOptions(h.instance, o), h.changeDetectorRef.detectChanges()), u.changeDetectorRef.detectChanges(), _; }
    get activeInstance() { return this._activeInstance; }
    dismiss(e) { this._offcanvasRef?.dismiss(e); }
    hasOpenOffcanvas() { return !!this._offcanvasRef; }
    _attachBackdrop(e) { let i = de(Cr, { environmentInjector: this._applicationRef.injector, elementInjector: this._injector }); return this._applicationRef.attachView(i.hostView), e.appendChild(i.location.nativeElement), i; }
    _attachWindowComponent(e, i) { let o = de(Er, { environmentInjector: this._applicationRef.injector, elementInjector: this._injector, projectableNodes: i }); return this._applicationRef.attachView(o.hostView), e.appendChild(o.location.nativeElement), o; }
    _applyPanelOptions(e, i) { this._panelAttributes.forEach(o => { H(i[o]) && (e[o] = i[o]); }); }
    _applyBackdropOptions(e, i) { this._backdropAttributes.forEach(o => { H(i[o]) && (e[o] = i[o]); }), e.static = i.backdrop === "static"; }
    _getContentRef(e, i, o) { return i ? i instanceof k ? this._createFromTemplateRef(i, o) : j(i) ? this._createFromString(i) : this._createFromComponent(e, i, o) : new V([]); }
    _createFromTemplateRef(e, i) { let o = { $implicit: i, close(l) { i.close(l); }, dismiss(l) { i.dismiss(l); } }, r = e.createEmbeddedView(o); return this._applicationRef.attachView(r), new V([r.rootNodes], r); }
    _createFromString(e) { let i = this._document.createTextNode(`${e}`); return new V([[i]]); }
    _createFromComponent(e, i, o) { let r = M.create({ providers: [{ provide: Ye, useValue: o }], parent: e }), l = de(i, { environmentInjector: this._applicationRef.injector, elementInjector: r }), d = l.location.nativeElement; return this._applicationRef.attachView(l.hostView), new V([[d]], l.hostView, l); }
    _registerOffcanvasRef(e) { let i = () => { this._offcanvasRef = void 0, this._activeInstance.emit(this._offcanvasRef); }; this._offcanvasRef = e, this._activeInstance.emit(this._offcanvasRef), e.result.then(i, i); }
    _registerPanelCmpt(e) { this._panelCmpt = e, this._activePanelCmptHasChanged.next(), e.onDestroy(() => { this._panelCmpt = void 0, this._activePanelCmptHasChanged.next(); }); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ol = (() => { let t = class t {
    constructor() { this._injector = c(M), this._offcanvasStack = c(Mr), this._config = c(Or); }
    open(e, i = {}) { let o = F(ke(F({}, this._config), { animation: this._config.animation }), i); return this._offcanvasStack.open(this._injector, e, o); }
    get activeInstance() { return this._offcanvasStack.activeInstance; }
    dismiss(e) { this._offcanvasStack.dismiss(e); }
    hasOpenOffcanvas() { return this._offcanvasStack.hasOpenOffcanvas(); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let s = t; return s; })(), Ui = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({}); let s = t; return s; })(), Ar = [ui, _i, fi, gi, Oi, Mi, Ri, Ii, Ui, ki, xi, Bi, Vi, Gi, $i, ji, Wi, Ki], Cl = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({ imports: [Ar, ui, _i, fi, gi, Oi, Mi, Ri, Ii, Ui, ki, xi, Bi, Vi, Gi, $i, ji, Wi, Ki] }); let s = t; return s; })();
export { vt as ModalDismissReasons, Qr as NgbAccordionBody, Yr as NgbAccordionButton, io as NgbAccordionCollapse, Ws as NgbAccordionConfig, hi as NgbAccordionDirective, qr as NgbAccordionHeader, he as NgbAccordionItem, ui as NgbAccordionModule, no as NgbAccordionToggle, Ze as NgbActiveModal, Ye as NgbActiveOffcanvas, Xr as NgbAlert, so as NgbAlertConfig, _i as NgbAlertModule, ee as NgbCalendar, al as NgbCalendarBuddhist, rl as NgbCalendarEthiopian, mi as NgbCalendarGregorian, sl as NgbCalendarHebrew, Qo as NgbCalendarIslamicCivil, il as NgbCalendarIslamicUmalqura, nl as NgbCalendarPersian, el as NgbCarousel, ao as NgbCarouselConfig, fi as NgbCarouselModule, $t as NgbCollapse, eo as NgbCollapseConfig, gi as NgbCollapseModule, W as NgbConfig, D as NgbDate, Xe as NgbDateAdapter, Sa as NgbDateNativeAdapter, cl as NgbDateNativeUTCAdapter, Di as NgbDateParserFormatter, Oo as NgbDateStructAdapter, vi as NgbDatepicker, Ct as NgbDatepickerConfig, Ro as NgbDatepickerContent, Q as NgbDatepickerI18n, ll as NgbDatepickerI18nAmharic, To as NgbDatepickerI18nDefault, ol as NgbDatepickerI18nHebrew, Co as NgbDatepickerKeyboardService, Oi as NgbDatepickerModule, No as NgbDatepickerMonth, Ei as NgbDropdown, mt as NgbDropdownAnchor, dl as NgbDropdownButtonItem, Oa as NgbDropdownConfig, Ci as NgbDropdownItem, Ca as NgbDropdownMenu, Mi as NgbDropdownModule, hl as NgbDropdownToggle, vr as NgbHighlight, tl as NgbInputDatepicker, Ut as NgbInputDatepickerConfig, Ia as NgbModal, Ea as NgbModalConfig, Ri as NgbModalModule, yt as NgbModalRef, Cl as NgbModule, Pt as NgbNav, ka as NgbNavConfig, xa as NgbNavContent, Pi as NgbNavItem, ul as NgbNavItemRole, pl as NgbNavLink, It as NgbNavLinkBase, _l as NgbNavLinkButton, Ii as NgbNavModule, fl as NgbNavOutlet, Xt as NgbNavPane, Ol as NgbOffcanvas, Or as NgbOffcanvasConfig, Ui as NgbOffcanvasModule, bt as NgbOffcanvasRef, gl as NgbPagination, La as NgbPaginationConfig, Ga as NgbPaginationEllipsis, Ha as NgbPaginationFirst, Ja as NgbPaginationLast, ki as NgbPaginationModule, $a as NgbPaginationNext, ja as NgbPaginationNumber, Ka as NgbPaginationPages, Wa as NgbPaginationPrevious, ml as NgbPopover, za as NgbPopoverConfig, xi as NgbPopoverModule, yl as NgbProgressbar, qa as NgbProgressbarConfig, Bi as NgbProgressbarModule, Xa as NgbProgressbarStacked, vl as NgbRating, er as NgbRatingConfig, Vi as NgbRatingModule, Li as NgbScrollSpy, nr as NgbScrollSpyConfig, bl as NgbScrollSpyFragment, or as NgbScrollSpyItem, ar as NgbScrollSpyMenu, Gi as NgbScrollSpyModule, ze as NgbScrollSpyService, uo as NgbSlide, re as NgbSlideEventDirection, ve as NgbSlideEventSource, Hi as NgbTimeAdapter, Dl as NgbTimepicker, rr as NgbTimepickerConfig, Ji as NgbTimepickerI18n, $i as NgbTimepickerModule, wl as NgbToast, ur as NgbToastConfig, fr as NgbToastHeader, ji as NgbToastModule, Tl as NgbTooltip, gr as NgbTooltipConfig, Wi as NgbTooltipModule, Sl as NgbTypeahead, wr as NgbTypeaheadConfig, Ki as NgbTypeaheadModule, kt as OffcanvasDismissReasons };
