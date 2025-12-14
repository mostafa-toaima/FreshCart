import { a as l, b as h, c as p, d as _, e as y, f as c, g as f, h as A, i as g, j as v, k as M, l as D, m as I, n as P, o as w, p as T, q as b, r as E } from "@nf-internal/chunk-HJ4HPMQE";
import "@nf-internal/chunk-JKOY2XUY";
import * as r from "@angular/core";
import { inject as u, ANIMATION_MODULE_TYPE as j, ɵRuntimeError as x, DOCUMENT as R, ViewEncapsulation as N } from "@angular/core";
var k = (() => { class t {
    static ɵfac = function (i) { return new (i || t); };
    static ɵprov = r.ɵɵdefineInjectable({ token: t, factory: () => u(O), providedIn: "root" });
} return t; })(), o = class {
}, O = (() => { class t extends k {
    animationModuleType = u(j, { optional: !0 });
    _nextAnimationId = 0;
    _renderer;
    constructor(n, i) { super(); let s = { id: "0", encapsulation: N.None, styles: [], data: { animation: [] } }; if (this._renderer = n.createRenderer(i.body, s), this.animationModuleType === null && !$(this._renderer))
        throw new x(3600, !1); }
    build(n) { let i = this._nextAnimationId; this._nextAnimationId++; let s = Array.isArray(n) ? c(n) : n; return m(this._renderer, null, i, "register", [s]), new a(i, this._renderer); }
    static ɵfac = function (i) { return new (i || t)(r.ɵɵinject(r.RendererFactory2), r.ɵɵinject(R)); };
    static ɵprov = r.ɵɵdefineInjectable({ token: t, factory: t.ɵfac, providedIn: "root" });
} return t; })(), a = class extends o {
    _id;
    _renderer;
    constructor(e, n) { super(), this._id = e, this._renderer = n; }
    create(e, n) { return new d(this._id, e, n || {}, this._renderer); }
}, d = class {
    id;
    element;
    _renderer;
    parentPlayer = null;
    _started = !1;
    constructor(e, n, i, s) { this.id = e, this.element = n, this._renderer = s, this._command("create", i); }
    _listen(e, n) { return this._renderer.listen(this.element, `@@${this.id}:${e}`, n); }
    _command(e, ...n) { m(this._renderer, this.element, this.id, e, n); }
    onDone(e) { this._listen("done", e); }
    onStart(e) { this._listen("start", e); }
    onDestroy(e) { this._listen("destroy", e); }
    init() { this._command("init"); }
    hasStarted() { return this._started; }
    play() { this._command("play"), this._started = !0; }
    pause() { this._command("pause"); }
    restart() { this._command("restart"); }
    finish() { this._command("finish"); }
    destroy() { this._command("destroy"); }
    reset() { this._command("reset"), this._started = !1; }
    setPosition(e) { this._command("setPosition", e); }
    getPosition() { return S(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0; }
    totalTime = 0;
};
function m(t, e, n, i, s) { t.setProperty(e, `@@${n}:${i}`, s); }
function S(t) { let e = t.ɵtype; return e === 0 ? t : e === 1 ? t.animationRenderer : null; }
function $(t) { let e = t.ɵtype; return e === 0 || e === 1; }
export { h as AUTO_STYLE, k as AnimationBuilder, o as AnimationFactory, l as AnimationMetadataType, T as NoopAnimationPlayer, _ as animate, D as animateChild, M as animation, y as group, g as keyframes, P as query, c as sequence, w as stagger, A as state, f as style, v as transition, p as trigger, I as useAnimation, b as ɵAnimationGroupPlayer, O as ɵBrowserAnimationBuilder, E as ɵPRE_STYLE }; /*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.3.13
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
