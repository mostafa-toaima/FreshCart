import { a as E } from "@nf-internal/chunk-LJGPQ2JK";
import { A as O } from "@nf-internal/chunk-VOXALN5U";
import { a as g } from "@nf-internal/chunk-JKOY2XUY";
var I = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function p(e) { return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__; }
function h(e, r) { let o = ["__proto__", "constructor", "prototype"]; Object.keys(r).filter(t => o.indexOf(t) < 0).forEach(t => { typeof e[t] > "u" ? e[t] = r[t] : p(r[t]) && p(e[t]) && Object.keys(r[t]).length > 0 ? r[t].__swiper__ ? e[t] = r[t] : h(e[t], r[t]) : e[t] = r[t]; }); }
function D(e = {}) { return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"; }
function R(e = {}) { return e.pagination && typeof e.pagination.el > "u"; }
function F(e = {}) { return e.scrollbar && typeof e.scrollbar.el > "u"; }
function S(e = "") { return e.replace(/-[a-z]/g, r => r.toUpperCase().replace("-", "")); }
function H({ swiper: e, slides: r, passedParams: o, changedParams: t, nextEl: l, prevEl: f, scrollbarEl: c, paginationEl: u }) { let s = t.filter(i => i !== "children" && i !== "direction" && i !== "wrapperClass"), { params: n, pagination: a, navigation: d, scrollbar: v, virtual: b, thumbs: x } = e, j, w, m, z, L, N, T, _; t.includes("thumbs") && o.thumbs && o.thumbs.swiper && !o.thumbs.swiper.destroyed && n.thumbs && (!n.thumbs.swiper || n.thumbs.swiper.destroyed) && (j = !0), t.includes("controller") && o.controller && o.controller.control && n.controller && !n.controller.control && (w = !0), t.includes("pagination") && o.pagination && (o.pagination.el || u) && (n.pagination || n.pagination === !1) && a && !a.el && (m = !0), t.includes("scrollbar") && o.scrollbar && (o.scrollbar.el || c) && (n.scrollbar || n.scrollbar === !1) && v && !v.el && (z = !0), t.includes("navigation") && o.navigation && (o.navigation.prevEl || f) && (o.navigation.nextEl || l) && (n.navigation || n.navigation === !1) && d && !d.prevEl && !d.nextEl && (L = !0); let y = i => { e[i] && (e[i].destroy(), i === "navigation" ? (e.isElement && (e[i].prevEl.remove(), e[i].nextEl.remove()), n[i].prevEl = void 0, n[i].nextEl = void 0, e[i].prevEl = void 0, e[i].nextEl = void 0) : (e.isElement && e[i].el.remove(), n[i].el = void 0, e[i].el = void 0)); }; t.includes("loop") && e.isElement && (n.loop && !o.loop ? N = !0 : !n.loop && o.loop ? T = !0 : _ = !0), s.forEach(i => { if (p(n[i]) && p(o[i]))
    Object.assign(n[i], o[i]), (i === "navigation" || i === "pagination" || i === "scrollbar") && "enabled" in o[i] && !o[i].enabled && y(i);
else {
    let C = o[i];
    (C === !0 || C === !1) && (i === "navigation" || i === "pagination" || i === "scrollbar") ? C === !1 && y(i) : n[i] = o[i];
} }), s.includes("controller") && !w && e.controller && e.controller.control && n.controller && n.controller.control && (e.controller.control = n.controller.control), t.includes("children") && r && b && n.virtual.enabled ? (b.slides = r, b.update(!0)) : t.includes("virtual") && b && n.virtual.enabled && (r && (b.slides = r), b.update(!0)), t.includes("children") && r && n.loop && (_ = !0), j && x.init() && x.update(!0), w && (e.controller.control = n.controller.control), m && (e.isElement && (!u || typeof u == "string") && (u = document.createElement("div"), u.classList.add("swiper-pagination"), u.part.add("pagination"), e.el.appendChild(u)), u && (n.pagination.el = u), a.init(), a.render(), a.update()), z && (e.isElement && (!c || typeof c == "string") && (c = document.createElement("div"), c.classList.add("swiper-scrollbar"), c.part.add("scrollbar"), e.el.appendChild(c)), c && (n.scrollbar.el = c), v.init(), v.updateSize(), v.setTranslate()), L && (e.isElement && ((!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-button-next"), O(l, e.navigation.arrowSvg), l.part.add("button-next"), e.el.appendChild(l)), (!f || typeof f == "string") && (f = document.createElement("div"), f.classList.add("swiper-button-prev"), O(f, e.navigation.arrowSvg), f.part.add("button-prev"), e.el.appendChild(f))), l && (n.navigation.nextEl = l), f && (n.navigation.prevEl = f), d.init(), d.update()), t.includes("allowSlideNext") && (e.allowSlideNext = o.allowSlideNext), t.includes("allowSlidePrev") && (e.allowSlidePrev = o.allowSlidePrev), t.includes("direction") && e.changeDirection(o.direction, !1), (N || _) && e.loopDestroy(), (T || _) && e.loopCreate(), e.update(); }
var M = e => { if (parseFloat(e) === Number(e))
    return Number(e); if (e === "true" || e === "")
    return !0; if (e === "false")
    return !1; if (e === "null")
    return null; if (e !== "undefined") {
    if (typeof e == "string" && e.includes("{") && e.includes("}") && e.includes('"')) {
        let r;
        try {
            r = JSON.parse(e);
        }
        catch {
            r = e;
        }
        return r;
    }
    return e;
} }, A = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function $(e, r, o) { let t = {}, l = {}; h(t, E); let f = [...I, "on"], c = f.map(s => s.replace(/_/, "")); f.forEach(s => { s = s.replace("_", ""), typeof e[s] < "u" && (l[s] = e[s]); }); let u = [...e.attributes]; return typeof r == "string" && typeof o < "u" && u.push({ name: r, value: p(o) ? g({}, o) : o }), u.forEach(s => { let n = A.find(a => s.name.startsWith(`${a}-`)); if (n) {
    let a = S(n), d = S(s.name.split(`${n}-`)[1]);
    typeof l[a] > "u" && (l[a] = {}), l[a] === !0 && (l[a] = { enabled: !0 }), l[a] === !1 && (l[a] = { enabled: !1 }), l[a][d] = M(s.value);
}
else {
    let a = S(s.name);
    if (!c.includes(a))
        return;
    let d = M(s.value);
    l[a] && A.includes(s.name) && !p(d) ? (l[a].constructor !== Object && (l[a] = {}), l[a].enabled = !!d) : l[a] = d;
} }), h(t, l), t.navigation ? t.navigation = g({ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }, t.navigation !== !0 ? t.navigation : {}) : t.navigation === !1 && delete t.navigation, t.scrollbar ? t.scrollbar = g({ el: ".swiper-scrollbar" }, t.scrollbar !== !0 ? t.scrollbar : {}) : t.scrollbar === !1 && delete t.scrollbar, t.pagination ? t.pagination = g({ el: ".swiper-pagination" }, t.pagination !== !0 ? t.pagination : {}) : t.pagination === !1 && delete t.pagination, { params: t, passedParams: l }; }
export { I as a, D as b, R as c, F as d, S as e, H as f, $ as g };
