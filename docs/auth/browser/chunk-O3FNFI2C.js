import { l as c, p as m, w as h } from "@nf-internal/chunk-VOXALN5U";
function g(t, s, e) { let r = `swiper-slide-shadow${e ? `-${e}` : ""}${t ? ` swiper-slide-shadow-${t}` : ""}`, o = c(s), n = o.querySelector(`.${r.split(" ").join(".")}`); return n || (n = m("div", r.split(" ")), o.append(n)), n; }
function b(t) { let { effect: s, swiper: e, on: r, setTranslate: o, setTransition: n, overwriteParams: i, perspective: l, recreateShadows: a, getEffectParams: f } = t; r("beforeInit", () => { if (e.params.effect !== s)
    return; e.classNames.push(`${e.params.containerModifierClass}${s}`), l && l() && e.classNames.push(`${e.params.containerModifierClass}3d`); let d = i ? i() : {}; Object.assign(e.params, d), Object.assign(e.originalParams, d); }), r("setTranslate _virtualUpdated", () => { e.params.effect === s && o(); }), r("setTransition", (d, u) => { e.params.effect === s && n(u); }), r("transitionEnd", () => { if (e.params.effect === s && a) {
    if (!f || !f().slideShadows)
        return;
    e.slides.forEach(d => { d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u => u.remove()); }), a();
} }); let p; r("virtualUpdate", () => { e.params.effect === s && (e.slides.length || (p = !0), requestAnimationFrame(() => { p && e.slides && e.slides.length && (o(), p = !1); })); }); }
function S(t, s) { let e = c(s); return e !== s && (e.style.backfaceVisibility = "hidden", e.style["-webkit-backface-visibility"] = "hidden"), e; }
function x({ swiper: t, duration: s, transformElements: e, allSlides: r }) { let { activeIndex: o } = t, n = i => i.parentElement ? i.parentElement : t.slides.find(a => a.shadowRoot && a.shadowRoot === i.parentNode); if (t.params.virtualTranslate && s !== 0) {
    let i = !1, l;
    r ? l = e : l = e.filter(a => { let f = a.classList.contains("swiper-slide-transform") ? n(a) : a; return t.getSlideIndex(f) === o; }), l.forEach(a => { h(a, () => { if (i || !t || t.destroyed)
        return; i = !0, t.animating = !1; let f = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 }); t.wrapperEl.dispatchEvent(f); }); });
} }
export { g as a, b, S as c, x as d };
