import { a as ne, b as J, c as le, d as ue } from "@nf-internal/chunk-O3FNFI2C";
import { A as _, a as F, b as Q, c as de, e as me, f as te, g as Ae, h as Xe, j as Oe, l as ae, m as U, p as Z, q as he, u as Se, v as ie, w as ye, x as Ye, y as W, z as fe } from "@nf-internal/chunk-VOXALN5U";
function Ge({ swiper: e, extendParams: D, on: h, emit: E }) { D({ virtual: { enabled: !1, slides: [], cache: !0, slidesPerViewAutoSlideSize: 320, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } }); let M, g = F(); e.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }; let y = g.createElement("div"); function d(a, t) { let l = e.params.virtual; if (l.cache && e.virtual.cache[t])
    return e.virtual.cache[t]; let c; return l.renderSlide ? (c = l.renderSlide.call(e, a, t), typeof c == "string" && (_(y, c), c = y.children[0])) : e.isElement ? c = Z("swiper-slide") : c = Z("div", e.params.slideClass), c.setAttribute("data-swiper-slide-index", t), l.renderSlide || _(c, a), l.cache && (e.virtual.cache[t] = c), c; } function s(a, t, l) { let { slidesPerGroup: c, centeredSlides: n, slidesPerView: o, loop: f, initialSlide: T } = e.params; if (t && !f && T > 0)
    return; let { addSlidesBefore: A, addSlidesAfter: C, slidesPerViewAutoSlideSize: X } = e.params.virtual, { from: S, to: O, slides: z, slidesGrid: L, offset: x } = e.virtual; e.params.cssMode || e.updateActiveIndex(); let b = typeof l > "u" ? e.activeIndex || 0 : l, P; e.rtlTranslate ? P = "right" : P = e.isHorizontal() ? "left" : "top"; let R; if (o === "auto") {
    if (X) {
        let Y = e.size;
        Y || (Y = e.isHorizontal() ? e.el.getBoundingClientRect().width : e.el.getBoundingClientRect().height), R = Math.max(1, Math.ceil(Y / X));
    }
    else
        R = 1;
}
else
    R = o; let p, v; n ? (p = Math.floor(R / 2) + c + C, v = Math.floor(R / 2) + c + A) : (p = R + (c - 1) + C, v = (f ? R : c) + A); let I = b - v, B = b + p; f || (I = Math.max(I, 0), B = Math.min(B, z.length - 1)); let N = (e.slidesGrid[I] || 0) - (e.slidesGrid[0] || 0); f && b >= v ? (I -= v, n || (N += e.slidesGrid[0])) : f && b < v && (I = -v, n && (N += e.slidesGrid[0])), Object.assign(e.virtual, { from: I, to: B, offset: N, slidesGrid: e.slidesGrid, slidesBefore: v, slidesAfter: p }); function j() { e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), E("virtualUpdate"); } if (S === I && O === B && !a) {
    e.slidesGrid !== L && N !== x && e.slides.forEach(Y => { Y.style[P] = `${N - Math.abs(e.cssOverflowAdjustment())}px`; }), e.updateProgress(), E("virtualUpdate");
    return;
} if (e.params.virtual.renderExternal) {
    e.params.virtual.renderExternal.call(e, { offset: N, from: I, to: B, slides: function () { let q = []; for (let G = I; G <= B; G += 1)
            q.push(z[G]); return q; }() }), e.params.virtual.renderExternalUpdate ? j() : E("virtualUpdate");
    return;
} let se = [], K = [], $ = Y => { let q = Y; return Y < 0 ? q = z.length + Y : q >= z.length && (q = q - z.length), q; }; if (a)
    e.slides.filter(Y => Y.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(Y => { Y.remove(); });
else
    for (let Y = S; Y <= O; Y += 1)
        if (Y < I || Y > B) {
            let q = $(Y);
            e.slides.filter(G => G.matches(`.${e.params.slideClass}[data-swiper-slide-index="${q}"], swiper-slide[data-swiper-slide-index="${q}"]`)).forEach(G => { G.remove(); });
        } let k = f ? -z.length : 0, H = f ? z.length * 2 : z.length; for (let Y = k; Y < H; Y += 1)
    if (Y >= I && Y <= B) {
        let q = $(Y);
        typeof O > "u" || a ? K.push(q) : (Y > O && K.push(q), Y < S && se.push(q));
    } if (K.forEach(Y => { e.slidesEl.append(d(z[Y], Y)); }), f)
    for (let Y = se.length - 1; Y >= 0; Y -= 1) {
        let q = se[Y];
        e.slidesEl.prepend(d(z[q], q));
    }
else
    se.sort((Y, q) => q - Y), se.forEach(Y => { e.slidesEl.prepend(d(z[Y], Y)); }); U(e.slidesEl, ".swiper-slide, swiper-slide").forEach(Y => { Y.style[P] = `${N - Math.abs(e.cssOverflowAdjustment())}px`; }), j(); } function r(a) { if (typeof a == "object" && "length" in a)
    for (let t = 0; t < a.length; t += 1)
        a[t] && e.virtual.slides.push(a[t]);
else
    e.virtual.slides.push(a); s(!0); } function u(a) { let t = e.activeIndex, l = t + 1, c = 1; if (Array.isArray(a)) {
    for (let n = 0; n < a.length; n += 1)
        a[n] && e.virtual.slides.unshift(a[n]);
    l = t + a.length, c = a.length;
}
else
    e.virtual.slides.unshift(a); if (e.params.virtual.cache) {
    let n = e.virtual.cache, o = {};
    Object.keys(n).forEach(f => { let T = n[f], A = T.getAttribute("data-swiper-slide-index"); A && T.setAttribute("data-swiper-slide-index", parseInt(A, 10) + c), o[parseInt(f, 10) + c] = T; }), e.virtual.cache = o;
} s(!0), e.slideTo(l, 0); } function m(a) { if (typeof a > "u" || a === null)
    return; let t = e.activeIndex; if (Array.isArray(a))
    for (let l = a.length - 1; l >= 0; l -= 1)
        e.params.virtual.cache && (delete e.virtual.cache[a[l]], Object.keys(e.virtual.cache).forEach(c => { c > a && (e.virtual.cache[c - 1] = e.virtual.cache[c], e.virtual.cache[c - 1].setAttribute("data-swiper-slide-index", c - 1), delete e.virtual.cache[c]); })), e.virtual.slides.splice(a[l], 1), a[l] < t && (t -= 1), t = Math.max(t, 0);
else
    e.params.virtual.cache && (delete e.virtual.cache[a], Object.keys(e.virtual.cache).forEach(l => { l > a && (e.virtual.cache[l - 1] = e.virtual.cache[l], e.virtual.cache[l - 1].setAttribute("data-swiper-slide-index", l - 1), delete e.virtual.cache[l]); })), e.virtual.slides.splice(a, 1), a < t && (t -= 1), t = Math.max(t, 0); s(!0), e.slideTo(t, 0); } function i() { e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), s(!0), e.slideTo(0, 0); } h("beforeInit", () => { if (!e.params.virtual.enabled)
    return; let a; if (typeof e.passedParams.virtual.slides > "u") {
    let t = [...e.slidesEl.children].filter(l => l.matches(`.${e.params.slideClass}, swiper-slide`));
    t && t.length && (e.virtual.slides = [...t], a = !0, t.forEach((l, c) => { l.setAttribute("data-swiper-slide-index", c), e.virtual.cache[c] = l, l.remove(); }));
} a || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, s(!1, !0); }), h("setTranslate", () => { e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(M), M = setTimeout(() => { s(); }, 100)) : s()); }), h("init update resize", () => { e.params.virtual.enabled && e.params.cssMode && Oe(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`); }), Object.assign(e.virtual, { appendSlide: r, prependSlide: u, removeSlide: m, removeAllSlides: i, update: s }); }
function Ue({ swiper: e, extendParams: D, on: h, emit: E }) { let M = F(), g = Q(); e.keyboard = { enabled: !1 }, D({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }); function y(r) { if (!e.enabled)
    return; let { rtlTranslate: u } = e, m = r; m.originalEvent && (m = m.originalEvent); let i = m.keyCode || m.charCode, a = e.params.keyboard.pageUpDown, t = a && i === 33, l = a && i === 34, c = i === 37, n = i === 39, o = i === 38, f = i === 40; if (!e.allowSlideNext && (e.isHorizontal() && n || e.isVertical() && f || l) || !e.allowSlidePrev && (e.isHorizontal() && c || e.isVertical() && o || t))
    return !1; if (!(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) && !(M.activeElement && (M.activeElement.isContentEditable || M.activeElement.nodeName && (M.activeElement.nodeName.toLowerCase() === "input" || M.activeElement.nodeName.toLowerCase() === "textarea")))) {
    if (e.params.keyboard.onlyInViewport && (t || l || c || n || o || f)) {
        let T = !1;
        if (ie(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && ie(e.el, `.${e.params.slideActiveClass}`).length === 0)
            return;
        let A = e.el, C = A.clientWidth, X = A.clientHeight, S = g.innerWidth, O = g.innerHeight, z = he(A);
        u && (z.left -= A.scrollLeft);
        let L = [[z.left, z.top], [z.left + C, z.top], [z.left, z.top + X], [z.left + C, z.top + X]];
        for (let x = 0; x < L.length; x += 1) {
            let b = L[x];
            if (b[0] >= 0 && b[0] <= S && b[1] >= 0 && b[1] <= O) {
                if (b[0] === 0 && b[1] === 0)
                    continue;
                T = !0;
            }
        }
        if (!T)
            return;
    }
    e.isHorizontal() ? ((t || l || c || n) && (m.preventDefault ? m.preventDefault() : m.returnValue = !1), ((l || n) && !u || (t || c) && u) && e.slideNext(), ((t || c) && !u || (l || n) && u) && e.slidePrev()) : ((t || l || o || f) && (m.preventDefault ? m.preventDefault() : m.returnValue = !1), (l || f) && e.slideNext(), (t || o) && e.slidePrev()), E("keyPress", i);
} } function d() { e.keyboard.enabled || (M.addEventListener("keydown", y), e.keyboard.enabled = !0); } function s() { e.keyboard.enabled && (M.removeEventListener("keydown", y), e.keyboard.enabled = !1); } h("init", () => { e.params.keyboard.enabled && d(); }), h("destroy", () => { e.keyboard.enabled && s(); }), Object.assign(e.keyboard, { enable: d, disable: s }); }
function Je({ swiper: e, extendParams: D, on: h, emit: E }) { let M = Q(); D({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null, noMousewheelClass: "swiper-no-mousewheel" } }), e.mousewheel = { enabled: !1 }; let g, y = te(), d, s = []; function r(o) { let C = 0, X = 0, S = 0, O = 0; return "detail" in o && (X = o.detail), "wheelDelta" in o && (X = -o.wheelDelta / 120), "wheelDeltaY" in o && (X = -o.wheelDeltaY / 120), "wheelDeltaX" in o && (C = -o.wheelDeltaX / 120), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (C = X, X = 0), S = C * 10, O = X * 10, "deltaY" in o && (O = o.deltaY), "deltaX" in o && (S = o.deltaX), o.shiftKey && !S && (S = O, O = 0), (S || O) && o.deltaMode && (o.deltaMode === 1 ? (S *= 40, O *= 40) : (S *= 800, O *= 800)), S && !C && (C = S < 1 ? -1 : 1), O && !X && (X = O < 1 ? -1 : 1), { spinX: C, spinY: X, pixelX: S, pixelY: O }; } function u() { e.enabled && (e.mouseEntered = !0); } function m() { e.enabled && (e.mouseEntered = !1); } function i(o) { return e.params.mousewheel.thresholdDelta && o.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && te() - y < e.params.mousewheel.thresholdTime ? !1 : o.delta >= 6 && te() - y < 60 ? !0 : (o.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), E("scroll", o.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), E("scroll", o.raw)), y = new M.Date().getTime(), !1); } function a(o) { let f = e.params.mousewheel; if (o.direction < 0) {
    if (e.isEnd && !e.params.loop && f.releaseOnEdges)
        return !0;
}
else if (e.isBeginning && !e.params.loop && f.releaseOnEdges)
    return !0; return !1; } function t(o) { let f = o, T = !0; if (!e.enabled || o.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
    return; let A = e.params.mousewheel; e.params.cssMode && f.preventDefault(); let C = e.el; e.params.mousewheel.eventsTarget !== "container" && (C = document.querySelector(e.params.mousewheel.eventsTarget)); let X = C && C.contains(f.target); if (!e.mouseEntered && !X && !A.releaseOnEdges)
    return !0; f.originalEvent && (f = f.originalEvent); let S = 0, O = e.rtlTranslate ? -1 : 1, z = r(f); if (A.forceToAxis) {
    if (e.isHorizontal()) {
        if (Math.abs(z.pixelX) > Math.abs(z.pixelY))
            S = -z.pixelX * O;
        else
            return !0;
    }
    else if (Math.abs(z.pixelY) > Math.abs(z.pixelX))
        S = -z.pixelY;
    else
        return !0;
}
else
    S = Math.abs(z.pixelX) > Math.abs(z.pixelY) ? -z.pixelX * O : -z.pixelY; if (S === 0)
    return !0; A.invert && (S = -S); let L = e.getTranslate() + S * A.sensitivity; if (L >= e.minTranslate() && (L = e.minTranslate()), L <= e.maxTranslate() && (L = e.maxTranslate()), T = e.params.loop ? !0 : !(L === e.minTranslate() || L === e.maxTranslate()), T && e.params.nested && f.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
    let x = { time: te(), delta: Math.abs(S), direction: Math.sign(S), raw: o };
    s.length >= 2 && s.shift();
    let b = s.length ? s[s.length - 1] : void 0;
    if (s.push(x), b ? (x.direction !== b.direction || x.delta > b.delta || x.time > b.time + 150) && i(x) : i(x), a(x))
        return !0;
}
else {
    let x = { time: te(), delta: Math.abs(S), direction: Math.sign(S) }, b = d && x.time < d.time + 500 && x.delta <= d.delta && x.direction === d.direction;
    if (!b) {
        d = void 0;
        let P = e.getTranslate() + S * A.sensitivity, R = e.isBeginning, p = e.isEnd;
        if (P >= e.minTranslate() && (P = e.minTranslate()), P <= e.maxTranslate() && (P = e.maxTranslate()), e.setTransition(0), e.setTranslate(P), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!R && e.isBeginning || !p && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({ direction: x.direction < 0 ? "next" : "prev", byMousewheel: !0 }), e.params.freeMode.sticky) {
            clearTimeout(g), g = void 0, s.length >= 15 && s.shift();
            let v = s.length ? s[s.length - 1] : void 0, I = s[0];
            if (s.push(x), v && (x.delta > v.delta || x.direction !== v.direction))
                s.splice(0);
            else if (s.length >= 15 && x.time - I.time < 500 && I.delta - x.delta >= 1 && x.delta <= 6) {
                let B = S > 0 ? .8 : .2;
                d = x, s.splice(0), g = me(() => { e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, B); }, 0);
            }
            g || (g = me(() => { if (e.destroyed || !e.params)
                return; let B = .5; d = x, s.splice(0), e.slideToClosest(e.params.speed, !0, void 0, B); }, 500));
        }
        if (b || E("scroll", f), e.params.autoplay && e.params.autoplay.disableOnInteraction && e.autoplay.stop(), A.releaseOnEdges && (P === e.minTranslate() || P === e.maxTranslate()))
            return !0;
    }
} return f.preventDefault ? f.preventDefault() : f.returnValue = !1, !1; } function l(o) { let f = e.el; e.params.mousewheel.eventsTarget !== "container" && (f = document.querySelector(e.params.mousewheel.eventsTarget)), f[o]("mouseenter", u), f[o]("mouseleave", m), f[o]("wheel", t); } function c() { return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", t), !0) : e.mousewheel.enabled ? !1 : (l("addEventListener"), e.mousewheel.enabled = !0, !0); } function n() { return e.params.cssMode ? (e.wrapperEl.addEventListener(event, t), !0) : e.mousewheel.enabled ? (l("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1; } h("init", () => { !e.params.mousewheel.enabled && e.params.cssMode && n(), e.params.mousewheel.enabled && c(); }), h("destroy", () => { e.params.cssMode && c(), e.mousewheel.enabled && n(); }), Object.assign(e.mousewheel, { enable: c, disable: n }); }
function be(e, D, h, E) { return e.params.createElements && Object.keys(E).forEach(M => { if (!h[M] && h.auto === !0) {
    let g = U(e.el, `.${E[M]}`)[0];
    g || (g = Z("div", E[M]), g.className = E[M], e.el.append(g)), h[M] = g, D[M] = g;
} }), h; }
var He = "<svg class=\"swiper-navigation-icon\" width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z\" fill=\"currentColor\"/></svg>";
function lt({ swiper: e, extendParams: D, on: h, emit: E }) { D({ navigation: { nextEl: null, prevEl: null, addIcons: !0, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), e.navigation = { nextEl: null, prevEl: null, arrowSvg: He }; function M(a) { let t; return a && typeof a == "string" && e.isElement && (t = e.el.querySelector(a) || e.hostEl.querySelector(a), t) ? t : (a && (typeof a == "string" && (t = [...document.querySelectorAll(a)]), e.params.uniqueNavElements && typeof a == "string" && t && t.length > 1 && e.el.querySelectorAll(a).length === 1 ? t = e.el.querySelector(a) : t && t.length === 1 && (t = t[0])), a && !t ? a : t); } function g(a, t) { let l = e.params.navigation; a = W(a), a.forEach(c => { c && (c.classList[t ? "add" : "remove"](...l.disabledClass.split(" ")), c.tagName === "BUTTON" && (c.disabled = t), e.params.watchOverflow && e.enabled && c.classList[e.isLocked ? "add" : "remove"](l.lockClass)); }); } function y() { let { nextEl: a, prevEl: t } = e.navigation; if (e.params.loop) {
    g(t, !1), g(a, !1);
    return;
} g(t, e.isBeginning && !e.params.rewind), g(a, e.isEnd && !e.params.rewind); } function d(a) { a.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), E("navigationPrev")); } function s(a) { a.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), E("navigationNext")); } function r() { let a = e.params.navigation; if (e.params.navigation = be(e, e.originalParams.navigation, e.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !(a.nextEl || a.prevEl))
    return; let t = M(a.nextEl), l = M(a.prevEl); Object.assign(e.navigation, { nextEl: t, prevEl: l }), t = W(t), l = W(l); let c = (n, o) => { if (n) {
    if (a.addIcons && n.matches(".swiper-button-next,.swiper-button-prev") && !n.querySelector("svg")) {
        let f = document.createElement("div");
        _(f, He), n.appendChild(f.querySelector("svg")), f.remove();
    }
    n.addEventListener("click", o === "next" ? s : d);
} !e.enabled && n && n.classList.add(...a.lockClass.split(" ")); }; t.forEach(n => c(n, "next")), l.forEach(n => c(n, "prev")); } function u() { let { nextEl: a, prevEl: t } = e.navigation; a = W(a), t = W(t); let l = (c, n) => { c.removeEventListener("click", n === "next" ? s : d), c.classList.remove(...e.params.navigation.disabledClass.split(" ")); }; a.forEach(c => l(c, "next")), t.forEach(c => l(c, "prev")); } h("init", () => { e.params.navigation.enabled === !1 ? i() : (r(), y()); }), h("toEdge fromEdge lock unlock", () => { y(); }), h("destroy", () => { u(); }), h("enable disable", () => { let { nextEl: a, prevEl: t } = e.navigation; if (a = W(a), t = W(t), e.enabled) {
    y();
    return;
} [...a, ...t].filter(l => !!l).forEach(l => l.classList.add(e.params.navigation.lockClass)); }), h("click", (a, t) => { let { nextEl: l, prevEl: c } = e.navigation; l = W(l), c = W(c); let n = t.target, o = c.includes(n) || l.includes(n); if (e.isElement && !o) {
    let f = t.path || t.composedPath && t.composedPath();
    f && (o = f.find(T => l.includes(T) || c.includes(T)));
} if (e.params.navigation.hideOnClick && !o) {
    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n)))
        return;
    let f;
    l.length ? f = l[0].classList.contains(e.params.navigation.hiddenClass) : c.length && (f = c[0].classList.contains(e.params.navigation.hiddenClass)), E(f === !0 ? "navigationShow" : "navigationHide"), [...l, ...c].filter(T => !!T).forEach(T => T.classList.toggle(e.params.navigation.hiddenClass));
} }); let m = () => { e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), r(), y(); }, i = () => { e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u(); }; Object.assign(e.navigation, { enable: m, disable: i, update: y, init: r, destroy: u }); }
function w(e = "") { return `.${e.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`; }
function dt({ swiper: e, extendParams: D, on: h, emit: E }) { let M = "swiper-pagination"; D({ pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: n => n, formatFractionTotal: n => n, bulletClass: `${M}-bullet`, bulletActiveClass: `${M}-bullet-active`, modifierClass: `${M}-`, currentClass: `${M}-current`, totalClass: `${M}-total`, hiddenClass: `${M}-hidden`, progressbarFillClass: `${M}-progressbar-fill`, progressbarOppositeClass: `${M}-progressbar-opposite`, clickableClass: `${M}-clickable`, lockClass: `${M}-lock`, horizontalClass: `${M}-horizontal`, verticalClass: `${M}-vertical`, paginationDisabledClass: `${M}-disabled` } }), e.pagination = { el: null, bullets: [] }; let g, y = 0; function d() { return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0; } function s(n, o) { let { bulletActiveClass: f } = e.params.pagination; n && (n = n[`${o === "prev" ? "previous" : "next"}ElementSibling`], n && (n.classList.add(`${f}-${o}`), n = n[`${o === "prev" ? "previous" : "next"}ElementSibling`], n && n.classList.add(`${f}-${o}-${o}`))); } function r(n, o, f) { if (n = n % f, o = o % f, o === n + 1)
    return "next"; if (o === n - 1)
    return "previous"; } function u(n) { let o = n.target.closest(w(e.params.pagination.bulletClass)); if (!o)
    return; n.preventDefault(); let f = Se(o) * e.params.slidesPerGroup; if (e.params.loop) {
    if (e.realIndex === f)
        return;
    let T = r(e.realIndex, f, e.slides.length);
    T === "next" ? e.slideNext() : T === "previous" ? e.slidePrev() : e.slideToLoop(f);
}
else
    e.slideTo(f); } function m() { let n = e.rtl, o = e.params.pagination; if (d())
    return; let f = e.pagination.el; f = W(f); let T, A, C = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, X = e.params.loop ? Math.ceil(C / e.params.slidesPerGroup) : e.snapGrid.length; if (e.params.loop ? (A = e.previousRealIndex || 0, T = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (T = e.snapIndex, A = e.previousSnapIndex) : (A = e.previousIndex || 0, T = e.activeIndex || 0), o.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
    let S = e.pagination.bullets, O, z, L;
    if (o.dynamicBullets && (g = Ye(S[0], e.isHorizontal() ? "width" : "height", !0), f.forEach(x => { x.style[e.isHorizontal() ? "width" : "height"] = `${g * (o.dynamicMainBullets + 4)}px`; }), o.dynamicMainBullets > 1 && A !== void 0 && (y += T - (A || 0), y > o.dynamicMainBullets - 1 ? y = o.dynamicMainBullets - 1 : y < 0 && (y = 0)), O = Math.max(T - y, 0), z = O + (Math.min(S.length, o.dynamicMainBullets) - 1), L = (z + O) / 2), S.forEach(x => { let b = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(P => `${o.bulletActiveClass}${P}`)].map(P => typeof P == "string" && P.includes(" ") ? P.split(" ") : P).flat(); x.classList.remove(...b); }), f.length > 1)
        S.forEach(x => { let b = Se(x); b === T ? x.classList.add(...o.bulletActiveClass.split(" ")) : e.isElement && x.setAttribute("part", "bullet"), o.dynamicBullets && (b >= O && b <= z && x.classList.add(...`${o.bulletActiveClass}-main`.split(" ")), b === O && s(x, "prev"), b === z && s(x, "next")); });
    else {
        let x = S[T];
        if (x && x.classList.add(...o.bulletActiveClass.split(" ")), e.isElement && S.forEach((b, P) => { b.setAttribute("part", P === T ? "bullet-active" : "bullet"); }), o.dynamicBullets) {
            let b = S[O], P = S[z];
            for (let R = O; R <= z; R += 1)
                S[R] && S[R].classList.add(...`${o.bulletActiveClass}-main`.split(" "));
            s(b, "prev"), s(P, "next");
        }
    }
    if (o.dynamicBullets) {
        let x = Math.min(S.length, o.dynamicMainBullets + 4), b = (g * x - g) / 2 - L * g, P = n ? "right" : "left";
        S.forEach(R => { R.style[e.isHorizontal() ? P : "top"] = `${b}px`; });
    }
} f.forEach((S, O) => { if (o.type === "fraction" && (S.querySelectorAll(w(o.currentClass)).forEach(z => { z.textContent = o.formatFractionCurrent(T + 1); }), S.querySelectorAll(w(o.totalClass)).forEach(z => { z.textContent = o.formatFractionTotal(X); })), o.type === "progressbar") {
    let z;
    o.progressbarOpposite ? z = e.isHorizontal() ? "vertical" : "horizontal" : z = e.isHorizontal() ? "horizontal" : "vertical";
    let L = (T + 1) / X, x = 1, b = 1;
    z === "horizontal" ? x = L : b = L, S.querySelectorAll(w(o.progressbarFillClass)).forEach(P => { P.style.transform = `translate3d(0,0,0) scaleX(${x}) scaleY(${b})`, P.style.transitionDuration = `${e.params.speed}ms`; });
} o.type === "custom" && o.renderCustom ? (_(S, o.renderCustom(e, T + 1, X)), O === 0 && E("paginationRender", S)) : (O === 0 && E("paginationRender", S), E("paginationUpdate", S)), e.params.watchOverflow && e.enabled && S.classList[e.isLocked ? "add" : "remove"](o.lockClass); }); } function i() { let n = e.params.pagination; if (d())
    return; let o = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length, f = e.pagination.el; f = W(f); let T = ""; if (n.type === "bullets") {
    let A = e.params.loop ? Math.ceil(o / e.params.slidesPerGroup) : e.snapGrid.length;
    e.params.freeMode && e.params.freeMode.enabled && A > o && (A = o);
    for (let C = 0; C < A; C += 1)
        n.renderBullet ? T += n.renderBullet.call(e, C, n.bulletClass) : T += `<${n.bulletElement} ${e.isElement ? "part=\"bullet\"" : ""} class="${n.bulletClass}"></${n.bulletElement}>`;
} n.type === "fraction" && (n.renderFraction ? T = n.renderFraction.call(e, n.currentClass, n.totalClass) : T = `<span class="${n.currentClass}"></span> / <span class="${n.totalClass}"></span>`), n.type === "progressbar" && (n.renderProgressbar ? T = n.renderProgressbar.call(e, n.progressbarFillClass) : T = `<span class="${n.progressbarFillClass}"></span>`), e.pagination.bullets = [], f.forEach(A => { n.type !== "custom" && _(A, T || ""), n.type === "bullets" && e.pagination.bullets.push(...A.querySelectorAll(w(n.bulletClass))); }), n.type !== "custom" && E("paginationRender", f[0]); } function a() { e.params.pagination = be(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" }); let n = e.params.pagination; if (!n.el)
    return; let o; typeof n.el == "string" && e.isElement && (o = e.el.querySelector(n.el)), !o && typeof n.el == "string" && (o = [...document.querySelectorAll(n.el)]), o || (o = n.el), !(!o || o.length === 0) && (e.params.uniqueNavElements && typeof n.el == "string" && Array.isArray(o) && o.length > 1 && (o = [...e.el.querySelectorAll(n.el)], o.length > 1 && (o = o.find(f => ie(f, ".swiper")[0] === e.el))), Array.isArray(o) && o.length === 1 && (o = o[0]), Object.assign(e.pagination, { el: o }), o = W(o), o.forEach(f => { n.type === "bullets" && n.clickable && f.classList.add(...(n.clickableClass || "").split(" ")), f.classList.add(n.modifierClass + n.type), f.classList.add(e.isHorizontal() ? n.horizontalClass : n.verticalClass), n.type === "bullets" && n.dynamicBullets && (f.classList.add(`${n.modifierClass}${n.type}-dynamic`), y = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), n.type === "progressbar" && n.progressbarOpposite && f.classList.add(n.progressbarOppositeClass), n.clickable && f.addEventListener("click", u), e.enabled || f.classList.add(n.lockClass); })); } function t() { let n = e.params.pagination; if (d())
    return; let o = e.pagination.el; o && (o = W(o), o.forEach(f => { f.classList.remove(n.hiddenClass), f.classList.remove(n.modifierClass + n.type), f.classList.remove(e.isHorizontal() ? n.horizontalClass : n.verticalClass), n.clickable && (f.classList.remove(...(n.clickableClass || "").split(" ")), f.removeEventListener("click", u)); })), e.pagination.bullets && e.pagination.bullets.forEach(f => f.classList.remove(...n.bulletActiveClass.split(" "))); } h("changeDirection", () => { if (!e.pagination || !e.pagination.el)
    return; let n = e.params.pagination, { el: o } = e.pagination; o = W(o), o.forEach(f => { f.classList.remove(n.horizontalClass, n.verticalClass), f.classList.add(e.isHorizontal() ? n.horizontalClass : n.verticalClass); }); }), h("init", () => { e.params.pagination.enabled === !1 ? c() : (a(), i(), m()); }), h("activeIndexChange", () => { typeof e.snapIndex > "u" && m(); }), h("snapIndexChange", () => { m(); }), h("snapGridLengthChange", () => { i(), m(); }), h("destroy", () => { t(); }), h("enable disable", () => { let { el: n } = e.pagination; n && (n = W(n), n.forEach(o => o.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))); }), h("lock unlock", () => { m(); }), h("click", (n, o) => { let f = o.target, T = W(e.pagination.el); if (e.params.pagination.el && e.params.pagination.hideOnClick && T && T.length > 0 && !f.classList.contains(e.params.pagination.bulletClass)) {
    if (e.navigation && (e.navigation.nextEl && f === e.navigation.nextEl || e.navigation.prevEl && f === e.navigation.prevEl))
        return;
    let A = T[0].classList.contains(e.params.pagination.hiddenClass);
    E(A === !0 ? "paginationShow" : "paginationHide"), T.forEach(C => C.classList.toggle(e.params.pagination.hiddenClass));
} }); let l = () => { e.el.classList.remove(e.params.pagination.paginationDisabledClass); let { el: n } = e.pagination; n && (n = W(n), n.forEach(o => o.classList.remove(e.params.pagination.paginationDisabledClass))), a(), i(), m(); }, c = () => { e.el.classList.add(e.params.pagination.paginationDisabledClass); let { el: n } = e.pagination; n && (n = W(n), n.forEach(o => o.classList.add(e.params.pagination.paginationDisabledClass))), t(); }; Object.assign(e.pagination, { enable: l, disable: c, render: i, update: m, init: a, destroy: t }); }
function pt({ swiper: e, extendParams: D, on: h, emit: E }) { let M = F(), g = !1, y = null, d = null, s, r, u, m; D({ scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), e.scrollbar = { el: null, dragEl: null }; function i() { if (!e.params.scrollbar.el || !e.scrollbar.el)
    return; let { scrollbar: L, rtlTranslate: x } = e, { dragEl: b, el: P } = L, R = e.params.scrollbar, p = e.params.loop ? e.progressLoop : e.progress, v = r, I = (u - r) * p; x ? (I = -I, I > 0 ? (v = r - I, I = 0) : -I + r > u && (v = u + I)) : I < 0 ? (v = r + I, I = 0) : I + r > u && (v = u - I), e.isHorizontal() ? (b.style.transform = `translate3d(${I}px, 0, 0)`, b.style.width = `${v}px`) : (b.style.transform = `translate3d(0px, ${I}px, 0)`, b.style.height = `${v}px`), R.hide && (clearTimeout(y), P.style.opacity = 1, y = setTimeout(() => { P.style.opacity = 0, P.style.transitionDuration = "400ms"; }, 1e3)); } function a(L) { !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${L}ms`); } function t() { if (!e.params.scrollbar.el || !e.scrollbar.el)
    return; let { scrollbar: L } = e, { dragEl: x, el: b } = L; x.style.width = "", x.style.height = "", u = e.isHorizontal() ? b.offsetWidth : b.offsetHeight, m = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), e.params.scrollbar.dragSize === "auto" ? r = u * m : r = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? x.style.width = `${r}px` : x.style.height = `${r}px`, m >= 1 ? b.style.display = "none" : b.style.display = "", e.params.scrollbar.hide && (b.style.opacity = 0), e.params.watchOverflow && e.enabled && L.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass); } function l(L) { return e.isHorizontal() ? L.clientX : L.clientY; } function c(L) { let { scrollbar: x, rtlTranslate: b } = e, { el: P } = x, R; R = (l(L) - he(P)[e.isHorizontal() ? "left" : "top"] - (s !== null ? s : r / 2)) / (u - r), R = Math.max(Math.min(R, 1), 0), b && (R = 1 - R); let p = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * R; e.updateProgress(p), e.setTranslate(p), e.updateActiveIndex(), e.updateSlidesClasses(); } function n(L) { let x = e.params.scrollbar, { scrollbar: b, wrapperEl: P } = e, { el: R, dragEl: p } = b; g = !0, s = L.target === p ? l(L) - L.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, L.preventDefault(), L.stopPropagation(), P.style.transitionDuration = "100ms", p.style.transitionDuration = "100ms", c(L), clearTimeout(d), R.style.transitionDuration = "0ms", x.hide && (R.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), E("scrollbarDragStart", L); } function o(L) { let { scrollbar: x, wrapperEl: b } = e, { el: P, dragEl: R } = x; g && (L.preventDefault && L.cancelable ? L.preventDefault() : L.returnValue = !1, c(L), b.style.transitionDuration = "0ms", P.style.transitionDuration = "0ms", R.style.transitionDuration = "0ms", E("scrollbarDragMove", L)); } function f(L) { let x = e.params.scrollbar, { scrollbar: b, wrapperEl: P } = e, { el: R } = b; g && (g = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", P.style.transitionDuration = ""), x.hide && (clearTimeout(d), d = me(() => { R.style.opacity = 0, R.style.transitionDuration = "400ms"; }, 1e3)), E("scrollbarDragEnd", L), x.snapOnRelease && e.slideToClosest()); } function T(L) { let { scrollbar: x, params: b } = e, P = x.el; if (!P)
    return; let R = P, p = b.passiveListeners ? { passive: !1, capture: !1 } : !1, v = b.passiveListeners ? { passive: !0, capture: !1 } : !1; if (!R)
    return; let I = L === "on" ? "addEventListener" : "removeEventListener"; R[I]("pointerdown", n, p), M[I]("pointermove", o, p), M[I]("pointerup", f, v); } function A() { !e.params.scrollbar.el || !e.scrollbar.el || T("on"); } function C() { !e.params.scrollbar.el || !e.scrollbar.el || T("off"); } function X() { let { scrollbar: L, el: x } = e; e.params.scrollbar = be(e, e.originalParams.scrollbar, e.params.scrollbar, { el: "swiper-scrollbar" }); let b = e.params.scrollbar; if (!b.el)
    return; let P; if (typeof b.el == "string" && e.isElement && (P = e.el.querySelector(b.el)), !P && typeof b.el == "string") {
    if (P = M.querySelectorAll(b.el), !P.length)
        return;
}
else
    P || (P = b.el); e.params.uniqueNavElements && typeof b.el == "string" && P.length > 1 && x.querySelectorAll(b.el).length === 1 && (P = x.querySelector(b.el)), P.length > 0 && (P = P[0]), P.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass); let R; P && (R = P.querySelector(w(e.params.scrollbar.dragClass)), R || (R = Z("div", e.params.scrollbar.dragClass), P.append(R))), Object.assign(L, { el: P, dragEl: R }), b.draggable && A(), P && P.classList[e.enabled ? "remove" : "add"](...de(e.params.scrollbar.lockClass)); } function S() { let L = e.params.scrollbar, x = e.scrollbar.el; x && x.classList.remove(...de(e.isHorizontal() ? L.horizontalClass : L.verticalClass)), C(); } h("changeDirection", () => { if (!e.scrollbar || !e.scrollbar.el)
    return; let L = e.params.scrollbar, { el: x } = e.scrollbar; x = W(x), x.forEach(b => { b.classList.remove(L.horizontalClass, L.verticalClass), b.classList.add(e.isHorizontal() ? L.horizontalClass : L.verticalClass); }); }), h("init", () => { e.params.scrollbar.enabled === !1 ? z() : (X(), t(), i()); }), h("update resize observerUpdate lock unlock changeDirection", () => { t(); }), h("setTranslate", () => { i(); }), h("setTransition", (L, x) => { a(x); }), h("enable disable", () => { let { el: L } = e.scrollbar; L && L.classList[e.enabled ? "remove" : "add"](...de(e.params.scrollbar.lockClass)); }), h("destroy", () => { S(); }); let O = () => { e.el.classList.remove(...de(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...de(e.params.scrollbar.scrollbarDisabledClass)), X(), t(), i(); }, z = () => { e.el.classList.add(...de(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...de(e.params.scrollbar.scrollbarDisabledClass)), S(); }; Object.assign(e.scrollbar, { enable: O, disable: z, updateSize: t, setTranslate: i, init: X, destroy: S }); }
function bt({ swiper: e, extendParams: D, on: h }) { D({ parallax: { enabled: !1 } }); let E = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", M = (d, s) => { let { rtl: r } = e, u = r ? -1 : 1, m = d.getAttribute("data-swiper-parallax") || "0", i = d.getAttribute("data-swiper-parallax-x"), a = d.getAttribute("data-swiper-parallax-y"), t = d.getAttribute("data-swiper-parallax-scale"), l = d.getAttribute("data-swiper-parallax-opacity"), c = d.getAttribute("data-swiper-parallax-rotate"); if (i || a ? (i = i || "0", a = a || "0") : e.isHorizontal() ? (i = m, a = "0") : (a = m, i = "0"), i.indexOf("%") >= 0 ? i = `${parseInt(i, 10) * s * u}%` : i = `${i * s * u}px`, a.indexOf("%") >= 0 ? a = `${parseInt(a, 10) * s}%` : a = `${a * s}px`, typeof l < "u" && l !== null) {
    let o = l - (l - 1) * (1 - Math.abs(s));
    d.style.opacity = o;
} let n = `translate3d(${i}, ${a}, 0px)`; if (typeof t < "u" && t !== null) {
    let o = t - (t - 1) * (1 - Math.abs(s));
    n += ` scale(${o})`;
} if (c && typeof c < "u" && c !== null) {
    let o = c * s * -1;
    n += ` rotate(${o}deg)`;
} d.style.transform = n; }, g = () => { let { el: d, slides: s, progress: r, snapGrid: u, isElement: m } = e, i = U(d, E); e.isElement && i.push(...U(e.hostEl, E)), i.forEach(a => { M(a, r); }), s.forEach((a, t) => { let l = a.progress; e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (l += Math.ceil(t / 2) - r * (u.length - 1)), l = Math.min(Math.max(l, -1), 1), a.querySelectorAll(`${E}, [data-swiper-parallax-rotate]`).forEach(c => { M(c, l); }); }); }, y = (d = e.params.speed) => { let { el: s, hostEl: r } = e, u = [...s.querySelectorAll(E)]; e.isElement && u.push(...r.querySelectorAll(E)), u.forEach(m => { let i = parseInt(m.getAttribute("data-swiper-parallax-duration"), 10) || d; d === 0 && (i = 0), m.style.transitionDuration = `${i}ms`; }); }; h("beforeInit", () => { e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0); }), h("init", () => { e.params.parallax.enabled && g(); }), h("setTranslate", () => { e.params.parallax.enabled && g(); }), h("setTransition", (d, s) => { e.params.parallax.enabled && y(s); }); }
function Mt({ swiper: e, extendParams: D, on: h, emit: E }) { let M = Q(); D({ zoom: { enabled: !1, limitToOriginalSize: !1, maxRatio: 3, minRatio: 1, panOnMouseMove: !1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), e.zoom = { enabled: !1 }; let g = 1, y = !1, d = !1, s = { x: 0, y: 0 }, r = -3, u, m, i = [], a = { originX: 0, originY: 0, slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3 }, t = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, l = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, c = 1; Object.defineProperty(e.zoom, "scale", { get() { return c; }, set($) { if (c !== $) {
        let k = a.imageEl, H = a.slideEl;
        E("zoomChange", $, k, H);
    } c = $; } }); function n() { if (i.length < 2)
    return 1; let $ = i[0].pageX, k = i[0].pageY, H = i[1].pageX, Y = i[1].pageY; return Math.sqrt((H - $) ** 2 + (Y - k) ** 2); } function o() { let $ = e.params.zoom, k = a.imageWrapEl.getAttribute("data-swiper-zoom") || $.maxRatio; if ($.limitToOriginalSize && a.imageEl && a.imageEl.naturalWidth) {
    let H = a.imageEl.naturalWidth / a.imageEl.offsetWidth;
    return Math.min(H, k);
} return k; } function f() { if (i.length < 2)
    return { x: null, y: null }; let $ = a.imageEl.getBoundingClientRect(); return [(i[0].pageX + (i[1].pageX - i[0].pageX) / 2 - $.x - M.scrollX) / g, (i[0].pageY + (i[1].pageY - i[0].pageY) / 2 - $.y - M.scrollY) / g]; } function T() { return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`; } function A($) { let k = T(); return !!($.target.matches(k) || e.slides.filter(H => H.contains($.target)).length > 0); } function C($) { let k = `.${e.params.zoom.containerClass}`; return !!($.target.matches(k) || [...e.hostEl.querySelectorAll(k)].filter(H => H.contains($.target)).length > 0); } function X($) { if ($.pointerType === "mouse" && i.splice(0, i.length), !A($))
    return; let k = e.params.zoom; if (u = !1, m = !1, i.push($), !(i.length < 2)) {
    if (u = !0, a.scaleStart = n(), !a.slideEl) {
        a.slideEl = $.target.closest(`.${e.params.slideClass}, swiper-slide`), a.slideEl || (a.slideEl = e.slides[e.activeIndex]);
        let H = a.slideEl.querySelector(`.${k.containerClass}`);
        if (H && (H = H.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), a.imageEl = H, H ? a.imageWrapEl = ie(a.imageEl, `.${k.containerClass}`)[0] : a.imageWrapEl = void 0, !a.imageWrapEl) {
            a.imageEl = void 0;
            return;
        }
        a.maxRatio = o();
    }
    if (a.imageEl) {
        let [H, Y] = f();
        a.originX = H, a.originY = Y, a.imageEl.style.transitionDuration = "0ms";
    }
    y = !0;
} } function S($) { if (!A($))
    return; let k = e.params.zoom, H = e.zoom, Y = i.findIndex(q => q.pointerId === $.pointerId); Y >= 0 && (i[Y] = $), !(i.length < 2) && (m = !0, a.scaleMove = n(), a.imageEl && (H.scale = a.scaleMove / a.scaleStart * g, H.scale > a.maxRatio && (H.scale = a.maxRatio - 1 + (H.scale - a.maxRatio + 1) ** .5), H.scale < k.minRatio && (H.scale = k.minRatio + 1 - (k.minRatio - H.scale + 1) ** .5), a.imageEl.style.transform = `translate3d(0,0,0) scale(${H.scale})`)); } function O($) { if (!A($) || $.pointerType === "mouse" && $.type === "pointerout")
    return; let k = e.params.zoom, H = e.zoom, Y = i.findIndex(q => q.pointerId === $.pointerId); Y >= 0 && i.splice(Y, 1), !(!u || !m) && (u = !1, m = !1, a.imageEl && (H.scale = Math.max(Math.min(H.scale, a.maxRatio), k.minRatio), a.imageEl.style.transitionDuration = `${e.params.speed}ms`, a.imageEl.style.transform = `translate3d(0,0,0) scale(${H.scale})`, g = H.scale, y = !1, H.scale > 1 && a.slideEl ? a.slideEl.classList.add(`${k.zoomedSlideClass}`) : H.scale <= 1 && a.slideEl && a.slideEl.classList.remove(`${k.zoomedSlideClass}`), H.scale === 1 && (a.originX = 0, a.originY = 0, a.slideEl = void 0))); } let z; function L() { e.touchEventsData.preventTouchMoveFromPointerMove = !1; } function x() { clearTimeout(z), e.touchEventsData.preventTouchMoveFromPointerMove = !0, z = setTimeout(() => { e.destroyed || L(); }); } function b($) { let k = e.device; if (!a.imageEl || t.isTouched)
    return; k.android && $.cancelable && $.preventDefault(), t.isTouched = !0; let H = i.length > 0 ? i[0] : $; t.touchesStart.x = H.pageX, t.touchesStart.y = H.pageY; } function P($) { let H = $.pointerType === "mouse" && e.params.zoom.panOnMouseMove; if (!A($) || !C($))
    return; let Y = e.zoom; if (!a.imageEl)
    return; if (!t.isTouched || !a.slideEl) {
    H && v($);
    return;
} if (H) {
    v($);
    return;
} t.isMoved || (t.width = a.imageEl.offsetWidth || a.imageEl.clientWidth, t.height = a.imageEl.offsetHeight || a.imageEl.clientHeight, t.startX = Ae(a.imageWrapEl, "x") || 0, t.startY = Ae(a.imageWrapEl, "y") || 0, a.slideWidth = a.slideEl.offsetWidth, a.slideHeight = a.slideEl.offsetHeight, a.imageWrapEl.style.transitionDuration = "0ms"); let q = t.width * Y.scale, G = t.height * Y.scale; if (t.minX = Math.min(a.slideWidth / 2 - q / 2, 0), t.maxX = -t.minX, t.minY = Math.min(a.slideHeight / 2 - G / 2, 0), t.maxY = -t.minY, t.touchesCurrent.x = i.length > 0 ? i[0].pageX : $.pageX, t.touchesCurrent.y = i.length > 0 ? i[0].pageY : $.pageY, Math.max(Math.abs(t.touchesCurrent.x - t.touchesStart.x), Math.abs(t.touchesCurrent.y - t.touchesStart.y)) > 5 && (e.allowClick = !1), !t.isMoved && !y) {
    if (e.isHorizontal() && (Math.floor(t.minX) === Math.floor(t.startX) && t.touchesCurrent.x < t.touchesStart.x || Math.floor(t.maxX) === Math.floor(t.startX) && t.touchesCurrent.x > t.touchesStart.x)) {
        t.isTouched = !1, L();
        return;
    }
    if (!e.isHorizontal() && (Math.floor(t.minY) === Math.floor(t.startY) && t.touchesCurrent.y < t.touchesStart.y || Math.floor(t.maxY) === Math.floor(t.startY) && t.touchesCurrent.y > t.touchesStart.y)) {
        t.isTouched = !1, L();
        return;
    }
} $.cancelable && $.preventDefault(), $.stopPropagation(), x(), t.isMoved = !0; let oe = (Y.scale - g) / (a.maxRatio - e.params.zoom.minRatio), { originX: ce, originY: V } = a; t.currentX = t.touchesCurrent.x - t.touchesStart.x + t.startX + oe * (t.width - ce * 2), t.currentY = t.touchesCurrent.y - t.touchesStart.y + t.startY + oe * (t.height - V * 2), t.currentX < t.minX && (t.currentX = t.minX + 1 - (t.minX - t.currentX + 1) ** .8), t.currentX > t.maxX && (t.currentX = t.maxX - 1 + (t.currentX - t.maxX + 1) ** .8), t.currentY < t.minY && (t.currentY = t.minY + 1 - (t.minY - t.currentY + 1) ** .8), t.currentY > t.maxY && (t.currentY = t.maxY - 1 + (t.currentY - t.maxY + 1) ** .8), l.prevPositionX || (l.prevPositionX = t.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = t.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (t.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (t.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(t.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(t.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = t.touchesCurrent.x, l.prevPositionY = t.touchesCurrent.y, l.prevTime = Date.now(), a.imageWrapEl.style.transform = `translate3d(${t.currentX}px, ${t.currentY}px,0)`; } function R() { let $ = e.zoom; if (i.length = 0, !a.imageEl)
    return; if (!t.isTouched || !t.isMoved) {
    t.isTouched = !1, t.isMoved = !1;
    return;
} t.isTouched = !1, t.isMoved = !1; let k = 300, H = 300, Y = l.x * k, q = t.currentX + Y, G = l.y * H, re = t.currentY + G; l.x !== 0 && (k = Math.abs((q - t.currentX) / l.x)), l.y !== 0 && (H = Math.abs((re - t.currentY) / l.y)); let oe = Math.max(k, H); t.currentX = q, t.currentY = re; let ce = t.width * $.scale, V = t.height * $.scale; t.minX = Math.min(a.slideWidth / 2 - ce / 2, 0), t.maxX = -t.minX, t.minY = Math.min(a.slideHeight / 2 - V / 2, 0), t.maxY = -t.minY, t.currentX = Math.max(Math.min(t.currentX, t.maxX), t.minX), t.currentY = Math.max(Math.min(t.currentY, t.maxY), t.minY), a.imageWrapEl.style.transitionDuration = `${oe}ms`, a.imageWrapEl.style.transform = `translate3d(${t.currentX}px, ${t.currentY}px,0)`; } function p() { let $ = e.zoom; a.slideEl && e.activeIndex !== e.slides.indexOf(a.slideEl) && (a.imageEl && (a.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), a.imageWrapEl && (a.imageWrapEl.style.transform = "translate3d(0,0,0)"), a.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), $.scale = 1, g = 1, a.slideEl = void 0, a.imageEl = void 0, a.imageWrapEl = void 0, a.originX = 0, a.originY = 0); } function v($) { if (g <= 1 || !a.imageWrapEl || !A($) || !C($))
    return; let k = M.getComputedStyle(a.imageWrapEl).transform, H = new M.DOMMatrix(k); if (!d) {
    d = !0, s.x = $.clientX, s.y = $.clientY, t.startX = H.e, t.startY = H.f, t.width = a.imageEl.offsetWidth || a.imageEl.clientWidth, t.height = a.imageEl.offsetHeight || a.imageEl.clientHeight, a.slideWidth = a.slideEl.offsetWidth, a.slideHeight = a.slideEl.offsetHeight;
    return;
} let Y = ($.clientX - s.x) * r, q = ($.clientY - s.y) * r, G = t.width * g, re = t.height * g, oe = a.slideWidth, ce = a.slideHeight, V = Math.min(oe / 2 - G / 2, 0), ee = -V, Ee = Math.min(ce / 2 - re / 2, 0), Me = -Ee, ge = Math.max(Math.min(t.startX + Y, ee), V), pe = Math.max(Math.min(t.startY + q, Me), Ee); a.imageWrapEl.style.transitionDuration = "0ms", a.imageWrapEl.style.transform = `translate3d(${ge}px, ${pe}px, 0)`, s.x = $.clientX, s.y = $.clientY, t.startX = ge, t.startY = pe, t.currentX = ge, t.currentY = pe; } function I($) { let k = e.zoom, H = e.params.zoom; if (!a.slideEl) {
    $ && $.target && (a.slideEl = $.target.closest(`.${e.params.slideClass}, swiper-slide`)), a.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? a.slideEl = U(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : a.slideEl = e.slides[e.activeIndex]);
    let xe = a.slideEl.querySelector(`.${H.containerClass}`);
    xe && (xe = xe.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), a.imageEl = xe, xe ? a.imageWrapEl = ie(a.imageEl, `.${H.containerClass}`)[0] : a.imageWrapEl = void 0;
} if (!a.imageEl || !a.imageWrapEl)
    return; e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), a.slideEl.classList.add(`${H.zoomedSlideClass}`); let Y, q, G, re, oe, ce, V, ee, Ee, Me, ge, pe, Te, Ce, $e, Le, De, Pe; typeof t.touchesStart.x > "u" && $ ? (Y = $.pageX, q = $.pageY) : (Y = t.touchesStart.x, q = t.touchesStart.y); let ze = g, ve = typeof $ == "number" ? $ : null; g === 1 && ve && (Y = void 0, q = void 0, t.touchesStart.x = void 0, t.touchesStart.y = void 0); let Ie = o(); k.scale = ve || Ie, g = ve || Ie, $ && !(g === 1 && ve) ? (De = a.slideEl.offsetWidth, Pe = a.slideEl.offsetHeight, G = he(a.slideEl).left + M.scrollX, re = he(a.slideEl).top + M.scrollY, oe = G + De / 2 - Y, ce = re + Pe / 2 - q, Ee = a.imageEl.offsetWidth || a.imageEl.clientWidth, Me = a.imageEl.offsetHeight || a.imageEl.clientHeight, ge = Ee * k.scale, pe = Me * k.scale, Te = Math.min(De / 2 - ge / 2, 0), Ce = Math.min(Pe / 2 - pe / 2, 0), $e = -Te, Le = -Ce, ze > 0 && ve && typeof t.currentX == "number" && typeof t.currentY == "number" ? (V = t.currentX * k.scale / ze, ee = t.currentY * k.scale / ze) : (V = oe * k.scale, ee = ce * k.scale), V < Te && (V = Te), V > $e && (V = $e), ee < Ce && (ee = Ce), ee > Le && (ee = Le)) : (V = 0, ee = 0), ve && k.scale === 1 && (a.originX = 0, a.originY = 0), t.currentX = V, t.currentY = ee, a.imageWrapEl.style.transitionDuration = "300ms", a.imageWrapEl.style.transform = `translate3d(${V}px, ${ee}px,0)`, a.imageEl.style.transitionDuration = "300ms", a.imageEl.style.transform = `translate3d(0,0,0) scale(${k.scale})`; } function B() { let $ = e.zoom, k = e.params.zoom; if (!a.slideEl) {
    e.params.virtual && e.params.virtual.enabled && e.virtual ? a.slideEl = U(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : a.slideEl = e.slides[e.activeIndex];
    let H = a.slideEl.querySelector(`.${k.containerClass}`);
    H && (H = H.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), a.imageEl = H, H ? a.imageWrapEl = ie(a.imageEl, `.${k.containerClass}`)[0] : a.imageWrapEl = void 0;
} !a.imageEl || !a.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), $.scale = 1, g = 1, t.currentX = void 0, t.currentY = void 0, t.touchesStart.x = void 0, t.touchesStart.y = void 0, a.imageWrapEl.style.transitionDuration = "300ms", a.imageWrapEl.style.transform = "translate3d(0,0,0)", a.imageEl.style.transitionDuration = "300ms", a.imageEl.style.transform = "translate3d(0,0,0) scale(1)", a.slideEl.classList.remove(`${k.zoomedSlideClass}`), a.slideEl = void 0, a.originX = 0, a.originY = 0, e.params.zoom.panOnMouseMove && (s = { x: 0, y: 0 }, d && (d = !1, t.startX = 0, t.startY = 0))); } function N($) { let k = e.zoom; k.scale && k.scale !== 1 ? B() : I($); } function j() { let $ = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, k = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0; return { passiveListener: $, activeListenerWithCapture: k }; } function se() { let $ = e.zoom; if ($.enabled)
    return; $.enabled = !0; let { passiveListener: k, activeListenerWithCapture: H } = j(); e.wrapperEl.addEventListener("pointerdown", X, k), e.wrapperEl.addEventListener("pointermove", S, H), ["pointerup", "pointercancel", "pointerout"].forEach(Y => { e.wrapperEl.addEventListener(Y, O, k); }), e.wrapperEl.addEventListener("pointermove", P, H); } function K() { let $ = e.zoom; if (!$.enabled)
    return; $.enabled = !1; let { passiveListener: k, activeListenerWithCapture: H } = j(); e.wrapperEl.removeEventListener("pointerdown", X, k), e.wrapperEl.removeEventListener("pointermove", S, H), ["pointerup", "pointercancel", "pointerout"].forEach(Y => { e.wrapperEl.removeEventListener(Y, O, k); }), e.wrapperEl.removeEventListener("pointermove", P, H); } h("init", () => { e.params.zoom.enabled && se(); }), h("destroy", () => { K(); }), h("touchStart", ($, k) => { e.zoom.enabled && b(k); }), h("touchEnd", ($, k) => { e.zoom.enabled && R(); }), h("doubleTap", ($, k) => { !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && N(k); }), h("transitionEnd", () => { e.zoom.enabled && e.params.zoom.enabled && p(); }), h("slideChange", () => { e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && p(); }), Object.assign(e.zoom, { enable: se, disable: K, in: I, out: B, toggle: N }); }
function $t({ swiper: e, extendParams: D, on: h }) { D({ controller: { control: void 0, inverse: !1, by: "slide" } }), e.controller = { control: void 0 }; function E(s, r) { let u = function () { let t, l, c; return (n, o) => { for (l = -1, t = n.length; t - l > 1;)
    c = t + l >> 1, n[c] <= o ? l = c : t = c; return t; }; }(); this.x = s, this.y = r, this.lastIndex = s.length - 1; let m, i; return this.interpolate = function (t) { return t ? (i = u(this.x, t), m = i - 1, (t - this.x[m]) * (this.y[i] - this.y[m]) / (this.x[i] - this.x[m]) + this.y[m]) : 0; }, this; } function M(s) { e.controller.spline = e.params.loop ? new E(e.slidesGrid, s.slidesGrid) : new E(e.snapGrid, s.snapGrid); } function g(s, r) { let u = e.controller.control, m, i, a = e.constructor; function t(l) { if (l.destroyed)
    return; let c = e.rtlTranslate ? -e.translate : e.translate; e.params.controller.by === "slide" && (M(l), i = -e.controller.spline.interpolate(-c)), (!i || e.params.controller.by === "container") && (m = (l.maxTranslate() - l.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1), i = (c - e.minTranslate()) * m + l.minTranslate()), e.params.controller.inverse && (i = l.maxTranslate() - i), l.updateProgress(i), l.setTranslate(i, e), l.updateActiveIndex(), l.updateSlidesClasses(); } if (Array.isArray(u))
    for (let l = 0; l < u.length; l += 1)
        u[l] !== r && u[l] instanceof a && t(u[l]);
else
    u instanceof a && r !== u && t(u); } function y(s, r) { let u = e.constructor, m = e.controller.control, i; function a(t) { t.destroyed || (t.setTransition(s, e), s !== 0 && (t.transitionStart(), t.params.autoHeight && me(() => { t.updateAutoHeight(); }), ye(t.wrapperEl, () => { m && t.transitionEnd(); }))); } if (Array.isArray(m))
    for (i = 0; i < m.length; i += 1)
        m[i] !== r && m[i] instanceof u && a(m[i]);
else
    m instanceof u && r !== m && a(m); } function d() { e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline); } h("beforeInit", () => { if (typeof window < "u" && (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
    (typeof e.params.controller.control == "string" ? [...document.querySelectorAll(e.params.controller.control)] : [e.params.controller.control]).forEach(r => { if (e.controller.control || (e.controller.control = []), r && r.swiper)
        e.controller.control.push(r.swiper);
    else if (r) {
        let u = `${e.params.eventsPrefix}init`, m = i => { e.controller.control.push(i.detail[0]), e.update(), r.removeEventListener(u, m); };
        r.addEventListener(u, m);
    } });
    return;
} e.controller.control = e.params.controller.control; }), h("update", () => { d(); }), h("resize", () => { d(); }), h("observerUpdate", () => { d(); }), h("setTranslate", (s, r, u) => { !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(r, u); }), h("setTransition", (s, r, u) => { !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(r, u); }), Object.assign(e.controller, { setTranslate: g, setTransition: y }); }
function At({ swiper: e, extendParams: D, on: h }) { D({ a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, containerRole: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null, scrollOnFocus: !0, wrapperLiveRegion: !0 } }), e.a11y = { clicked: !1 }; let E = null, M, g, y = new Date().getTime(); function d(p) { let v = E; v.length !== 0 && _(v, p); } function s(p = 16) { let v = () => Math.round(16 * Math.random()).toString(16); return "x".repeat(p).replace(/x/g, v); } function r(p) { p = W(p), p.forEach(v => { v.setAttribute("tabIndex", "0"); }); } function u(p) { p = W(p), p.forEach(v => { v.setAttribute("tabIndex", "-1"); }); } function m(p, v) { p = W(p), p.forEach(I => { I.setAttribute("role", v); }); } function i(p, v) { p = W(p), p.forEach(I => { I.setAttribute("aria-roledescription", v); }); } function a(p, v) { p = W(p), p.forEach(I => { I.setAttribute("aria-controls", v); }); } function t(p, v) { p = W(p), p.forEach(I => { I.setAttribute("aria-label", v); }); } function l(p, v) { p = W(p), p.forEach(I => { I.setAttribute("id", v); }); } function c(p, v) { p = W(p), p.forEach(I => { I.setAttribute("aria-live", v); }); } function n(p) { p = W(p), p.forEach(v => { v.setAttribute("aria-disabled", !0); }); } function o(p) { p = W(p), p.forEach(v => { v.setAttribute("aria-disabled", !1); }); } function f(p) { if (p.keyCode !== 13 && p.keyCode !== 32)
    return; let v = e.params.a11y, I = p.target; if (!(e.pagination && e.pagination.el && (I === e.pagination.el || e.pagination.el.contains(p.target)) && !p.target.matches(w(e.params.pagination.bulletClass)))) {
    if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        let B = W(e.navigation.prevEl);
        W(e.navigation.nextEl).includes(I) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? d(v.lastSlideMessage) : d(v.nextSlideMessage)), B.includes(I) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? d(v.firstSlideMessage) : d(v.prevSlideMessage));
    }
    e.pagination && I.matches(w(e.params.pagination.bulletClass)) && I.click();
} } function T() { if (e.params.loop || e.params.rewind || !e.navigation)
    return; let { nextEl: p, prevEl: v } = e.navigation; v && (e.isBeginning ? (n(v), u(v)) : (o(v), r(v))), p && (e.isEnd ? (n(p), u(p)) : (o(p), r(p))); } function A() { return e.pagination && e.pagination.bullets && e.pagination.bullets.length; } function C() { return A() && e.params.pagination.clickable; } function X() { let p = e.params.a11y; A() && e.pagination.bullets.forEach(v => { e.params.pagination.clickable && (r(v), e.params.pagination.renderBullet || (m(v, "button"), t(v, p.paginationBulletMessage.replace(/\{\{index\}\}/, Se(v) + 1)))), v.matches(w(e.params.pagination.bulletActiveClass)) ? v.setAttribute("aria-current", "true") : v.removeAttribute("aria-current"); }); } let S = (p, v, I) => { r(p), p.tagName !== "BUTTON" && (m(p, "button"), p.addEventListener("keydown", f)), t(p, I), a(p, v); }, O = p => { g && g !== p.target && !g.contains(p.target) && (M = !0), e.a11y.clicked = !0; }, z = () => { M = !1, requestAnimationFrame(() => { requestAnimationFrame(() => { e.destroyed || (e.a11y.clicked = !1); }); }); }, L = p => { y = new Date().getTime(); }, x = p => { if (e.a11y.clicked || !e.params.a11y.scrollOnFocus || new Date().getTime() - y < 100)
    return; let v = p.target.closest(`.${e.params.slideClass}, swiper-slide`); if (!v || !e.slides.includes(v))
    return; g = v; let I = e.slides.indexOf(v) === e.activeIndex, B = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(v); I || B || p.sourceCapabilities && p.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => { M || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(v.getAttribute("data-swiper-slide-index"))), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(v)), 0), M = !1); })); }, b = () => { let p = e.params.a11y; p.itemRoleDescriptionMessage && i(e.slides, p.itemRoleDescriptionMessage), p.slideRole && m(e.slides, p.slideRole); let v = e.slides.length; p.slideLabelMessage && e.slides.forEach((I, B) => { let N = e.params.loop ? parseInt(I.getAttribute("data-swiper-slide-index"), 10) : B, j = p.slideLabelMessage.replace(/\{\{index\}\}/, N + 1).replace(/\{\{slidesLength\}\}/, v); t(I, j); }); }, P = () => { let p = e.params.a11y; e.el.append(E); let v = e.el; p.containerRoleDescriptionMessage && i(v, p.containerRoleDescriptionMessage), p.containerMessage && t(v, p.containerMessage), p.containerRole && m(v, p.containerRole); let I = e.wrapperEl, B = p.id || I.getAttribute("id") || `swiper-wrapper-${s(16)}`; if (l(I, B), p.wrapperLiveRegion) {
    let K = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
    c(I, K);
} b(); let { nextEl: N, prevEl: j } = e.navigation ? e.navigation : {}; N = W(N), j = W(j), N && N.forEach(K => S(K, B, p.nextSlideMessage)), j && j.forEach(K => S(K, B, p.prevSlideMessage)), C() && W(e.pagination.el).forEach($ => { $.addEventListener("keydown", f); }), F().addEventListener("visibilitychange", L), e.el.addEventListener("focus", x, !0), e.el.addEventListener("focus", x, !0), e.el.addEventListener("pointerdown", O, !0), e.el.addEventListener("pointerup", z, !0); }; function R() { E && E.remove(); let { nextEl: p, prevEl: v } = e.navigation ? e.navigation : {}; p = W(p), v = W(v), p && p.forEach(B => B.removeEventListener("keydown", f)), v && v.forEach(B => B.removeEventListener("keydown", f)), C() && W(e.pagination.el).forEach(N => { N.removeEventListener("keydown", f); }), F().removeEventListener("visibilitychange", L), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", x, !0), e.el.removeEventListener("pointerdown", O, !0), e.el.removeEventListener("pointerup", z, !0)); } h("beforeInit", () => { E = Z("span", e.params.a11y.notificationClass), E.setAttribute("aria-live", "assertive"), E.setAttribute("aria-atomic", "true"); }), h("afterInit", () => { e.params.a11y.enabled && P(); }), h("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => { e.params.a11y.enabled && b(); }), h("fromEdge toEdge afterInit lock unlock", () => { e.params.a11y.enabled && T(); }), h("paginationUpdate", () => { e.params.a11y.enabled && X(); }), h("destroy", () => { e.params.a11y.enabled && R(); }); }
function Ot({ swiper: e, extendParams: D, on: h }) { D({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } }); let E = !1, M = {}, g = i => i.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), y = i => { let a = Q(), t; i ? t = new URL(i) : t = a.location; let l = t.pathname.slice(1).split("/").filter(f => f !== ""), c = l.length, n = l[c - 2], o = l[c - 1]; return { key: n, value: o }; }, d = (i, a) => { let t = Q(); if (!E || !e.params.history.enabled)
    return; let l; e.params.url ? l = new URL(e.params.url) : l = t.location; let c = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${a}"]`) : e.slides[a], n = g(c.getAttribute("data-history")); if (e.params.history.root.length > 0) {
    let f = e.params.history.root;
    f[f.length - 1] === "/" && (f = f.slice(0, f.length - 1)), n = `${f}/${i ? `${i}/` : ""}${n}`;
}
else
    l.pathname.includes(i) || (n = `${i ? `${i}/` : ""}${n}`); e.params.history.keepQuery && (n += l.search); let o = t.history.state; o && o.value === n || (e.params.history.replaceState ? t.history.replaceState({ value: n }, null, n) : t.history.pushState({ value: n }, null, n)); }, s = (i, a, t) => { if (a)
    for (let l = 0, c = e.slides.length; l < c; l += 1) {
        let n = e.slides[l];
        if (g(n.getAttribute("data-history")) === a) {
            let f = e.getSlideIndex(n);
            e.slideTo(f, i, t);
        }
    }
else
    e.slideTo(0, i, t); }, r = () => { M = y(e.params.url), s(e.params.speed, M.value, !1); }, u = () => { let i = Q(); if (e.params.history) {
    if (!i.history || !i.history.pushState) {
        e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
        return;
    }
    if (E = !0, M = y(e.params.url), !M.key && !M.value) {
        e.params.history.replaceState || i.addEventListener("popstate", r);
        return;
    }
    s(0, M.value, e.params.runCallbacksOnInit), e.params.history.replaceState || i.addEventListener("popstate", r);
} }, m = () => { let i = Q(); e.params.history.replaceState || i.removeEventListener("popstate", r); }; h("init", () => { e.params.history.enabled && u(); }), h("destroy", () => { e.params.history.enabled && m(); }), h("transitionEnd _freeModeNoMomentumRelease", () => { E && d(e.params.history.key, e.activeIndex); }), h("slideChange", () => { E && e.params.cssMode && d(e.params.history.key, e.activeIndex); }); }
function Rt({ swiper: e, extendParams: D, emit: h, on: E }) { let M = !1, g = F(), y = Q(); D({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1, getSlideIndex(m, i) { if (e.virtual && e.params.virtual.enabled) {
            let a = e.slides.find(l => l.getAttribute("data-hash") === i);
            return a ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : 0;
        } return e.getSlideIndex(U(e.slidesEl, `.${e.params.slideClass}[data-hash="${i}"], swiper-slide[data-hash="${i}"]`)[0]); } } }); let d = () => { h("hashChange"); let m = g.location.hash.replace("#", ""), i = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], a = i ? i.getAttribute("data-hash") : ""; if (m !== a) {
    let t = e.params.hashNavigation.getSlideIndex(e, m);
    if (typeof t > "u" || Number.isNaN(t))
        return;
    e.slideTo(t);
} }, s = () => { if (!M || !e.params.hashNavigation.enabled)
    return; let m = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], i = m ? m.getAttribute("data-hash") || m.getAttribute("data-history") : ""; e.params.hashNavigation.replaceState && y.history && y.history.replaceState ? (y.history.replaceState(null, null, `#${i}` || ""), h("hashSet")) : (g.location.hash = i || "", h("hashSet")); }, r = () => { if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
    return; M = !0; let m = g.location.hash.replace("#", ""); if (m) {
    let a = e.params.hashNavigation.getSlideIndex(e, m);
    e.slideTo(a || 0, 0, e.params.runCallbacksOnInit, !0);
} e.params.hashNavigation.watchState && y.addEventListener("hashchange", d); }, u = () => { e.params.hashNavigation.watchState && y.removeEventListener("hashchange", d); }; E("init", () => { e.params.hashNavigation.enabled && r(); }), E("destroy", () => { e.params.hashNavigation.enabled && u(); }), E("transitionEnd _freeModeNoMomentumRelease", () => { M && s(); }), E("slideChange", () => { M && e.params.cssMode && s(); }); }
function qt({ swiper: e, extendParams: D, on: h, emit: E, params: M }) { e.autoplay = { running: !1, paused: !1, timeLeft: 0 }, D({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !1, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }); let g, y, d = M && M.autoplay ? M.autoplay.delay : 3e3, s = M && M.autoplay ? M.autoplay.delay : 3e3, r, u = new Date().getTime(), m, i, a, t, l, c, n; function o(v) { !e || e.destroyed || !e.wrapperEl || v.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", o), !(n || v.detail && v.detail.bySwiperTouchMove) && O()); } let f = () => { if (e.destroyed || !e.autoplay.running)
    return; e.autoplay.paused ? m = !0 : m && (s = r, m = !1); let v = e.autoplay.paused ? r : u + s - new Date().getTime(); e.autoplay.timeLeft = v, E("autoplayTimeLeft", v, v / d), y = requestAnimationFrame(() => { f(); }); }, T = () => { let v; return e.virtual && e.params.virtual.enabled ? v = e.slides.find(B => B.classList.contains("swiper-slide-active")) : v = e.slides[e.activeIndex], v ? parseInt(v.getAttribute("data-swiper-autoplay"), 10) : void 0; }, A = v => { if (e.destroyed || !e.autoplay.running)
    return; cancelAnimationFrame(y), f(); let I = typeof v > "u" ? e.params.autoplay.delay : v; d = e.params.autoplay.delay, s = e.params.autoplay.delay; let B = T(); !Number.isNaN(B) && B > 0 && typeof v > "u" && (I = B, d = B, s = B), r = I; let N = e.params.speed, j = () => { !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(N, !0, !0), E("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, N, !0, !0), E("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(N, !0, !0), E("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, N, !0, !0), E("autoplay")), e.params.cssMode && (u = new Date().getTime(), requestAnimationFrame(() => { A(); }))); }; return I > 0 ? (clearTimeout(g), g = setTimeout(() => { j(); }, I)) : requestAnimationFrame(() => { j(); }), I; }, C = () => { u = new Date().getTime(), e.autoplay.running = !0, A(), E("autoplayStart"); }, X = () => { e.autoplay.running = !1, clearTimeout(g), cancelAnimationFrame(y), E("autoplayStop"); }, S = (v, I) => { if (e.destroyed || !e.autoplay.running)
    return; clearTimeout(g), v || (c = !0); let B = () => { E("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", o) : O(); }; if (e.autoplay.paused = !0, I) {
    l && (r = e.params.autoplay.delay), l = !1, B();
    return;
} r = (r || e.params.autoplay.delay) - (new Date().getTime() - u), !(e.isEnd && r < 0 && !e.params.loop) && (r < 0 && (r = 0), B()); }, O = () => { e.isEnd && r < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (u = new Date().getTime(), c ? (c = !1, A(r)) : A(), e.autoplay.paused = !1, E("autoplayResume")); }, z = () => { if (e.destroyed || !e.autoplay.running)
    return; let v = F(); v.visibilityState === "hidden" && (c = !0, S(!0)), v.visibilityState === "visible" && O(); }, L = v => { v.pointerType === "mouse" && (c = !0, n = !0, !(e.animating || e.autoplay.paused) && S(!0)); }, x = v => { v.pointerType === "mouse" && (n = !1, e.autoplay.paused && O()); }, b = () => { e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", L), e.el.addEventListener("pointerleave", x)); }, P = () => { e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", L), e.el.removeEventListener("pointerleave", x)); }, R = () => { F().addEventListener("visibilitychange", z); }, p = () => { F().removeEventListener("visibilitychange", z); }; h("init", () => { e.params.autoplay.enabled && (b(), R(), C()); }), h("destroy", () => { P(), p(), e.autoplay.running && X(); }), h("_freeModeStaticRelease", () => { (a || c) && O(); }), h("_freeModeNoMomentumRelease", () => { e.params.autoplay.disableOnInteraction ? X() : S(!0, !0); }), h("beforeTransitionStart", (v, I, B) => { e.destroyed || !e.autoplay.running || (B || !e.params.autoplay.disableOnInteraction ? S(!0, !0) : X()); }), h("sliderFirstMove", () => { if (!(e.destroyed || !e.autoplay.running)) {
    if (e.params.autoplay.disableOnInteraction) {
        X();
        return;
    }
    i = !0, a = !1, c = !1, t = setTimeout(() => { c = !0, a = !0, S(!0); }, 200);
} }), h("touchEnd", () => { if (!(e.destroyed || !e.autoplay.running || !i)) {
    if (clearTimeout(t), clearTimeout(g), e.params.autoplay.disableOnInteraction) {
        a = !1, i = !1;
        return;
    }
    a && e.params.cssMode && O(), a = !1, i = !1;
} }), h("slideChange", () => { e.destroyed || !e.autoplay.running || (l = !0); }), Object.assign(e.autoplay, { start: C, stop: X, pause: S, resume: O }); }
function Vt({ swiper: e, extendParams: D, on: h }) { D({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } }); let E = !1, M = !1; e.thumbs = { swiper: null }; function g() { let s = e.thumbs.swiper; if (!s || s.destroyed)
    return; let r = s.clickedIndex, u = s.clickedSlide; if (u && u.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof r > "u" || r === null)
    return; let m; s.params.loop ? m = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : m = r, e.params.loop ? e.slideToLoop(m) : e.slideTo(m); } function y() { let { thumbs: s } = e.params; if (E)
    return !1; E = !0; let r = e.constructor; if (s.swiper instanceof r) {
    if (s.swiper.destroyed)
        return E = !1, !1;
    e.thumbs.swiper = s.swiper, Object.assign(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), Object.assign(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), e.thumbs.swiper.update();
}
else if (Xe(s.swiper)) {
    let u = Object.assign({}, s.swiper);
    Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), e.thumbs.swiper = new r(u), M = !0;
} return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", g), !0; } function d(s) { let r = e.thumbs.swiper; if (!r || r.destroyed)
    return; let u = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : r.params.slidesPerView, m = 1, i = e.params.thumbs.slideThumbActiveClass; if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (m = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (m = 1), m = Math.floor(m), r.slides.forEach(l => l.classList.remove(i)), r.params.loop || r.params.virtual && r.params.virtual.enabled)
    for (let l = 0; l < m; l += 1)
        U(r.slidesEl, `[data-swiper-slide-index="${e.realIndex + l}"]`).forEach(c => { c.classList.add(i); });
else
    for (let l = 0; l < m; l += 1)
        r.slides[e.realIndex + l] && r.slides[e.realIndex + l].classList.add(i); let a = e.params.thumbs.autoScrollOffset, t = a && !r.params.loop; if (e.realIndex !== r.realIndex || t) {
    let l = r.activeIndex, c, n;
    if (r.params.loop) {
        let o = r.slides.find(f => f.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        c = r.slides.indexOf(o), n = e.activeIndex > e.previousIndex ? "next" : "prev";
    }
    else
        c = e.realIndex, n = c > e.previousIndex ? "next" : "prev";
    t && (c += n === "next" ? a : -1 * a), r.visibleSlidesIndexes && r.visibleSlidesIndexes.indexOf(c) < 0 && (r.params.centeredSlides ? c > l ? c = c - Math.floor(u / 2) + 1 : c = c + Math.floor(u / 2) - 1 : c > l && r.params.slidesPerGroup, r.slideTo(c, s ? 0 : void 0));
} } h("beforeInit", () => { let { thumbs: s } = e.params; if (!(!s || !s.swiper))
    if (typeof s.swiper == "string" || s.swiper instanceof HTMLElement) {
        let r = F(), u = () => { let i = typeof s.swiper == "string" ? r.querySelector(s.swiper) : s.swiper; if (i && i.swiper)
            s.swiper = i.swiper, y(), d(!0);
        else if (i) {
            let a = `${e.params.eventsPrefix}init`, t = l => { s.swiper = l.detail[0], i.removeEventListener(a, t), y(), d(!0), s.swiper.update(), e.update(); };
            i.addEventListener(a, t);
        } return i; }, m = () => { if (e.destroyed)
            return; u() || requestAnimationFrame(m); };
        requestAnimationFrame(m);
    }
    else
        y(), d(!0); }), h("slideChange update resize observerUpdate", () => { d(); }), h("setTransition", (s, r) => { let u = e.thumbs.swiper; !u || u.destroyed || u.setTransition(r); }), h("beforeDestroy", () => { let s = e.thumbs.swiper; !s || s.destroyed || M && s.destroy(); }), Object.assign(e.thumbs, { init: y, update: d }); }
function Ut({ swiper: e, extendParams: D, emit: h, once: E }) { D({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: .02 } }); function M() { if (e.params.cssMode)
    return; let d = e.getTranslate(); e.setTranslate(d), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate }); } function g() { if (e.params.cssMode)
    return; let { touchEventsData: d, touches: s } = e; d.velocities.length === 0 && d.velocities.push({ position: s[e.isHorizontal() ? "startX" : "startY"], time: d.touchStartTime }), d.velocities.push({ position: s[e.isHorizontal() ? "currentX" : "currentY"], time: te() }); } function y({ currentPos: d }) { if (e.params.cssMode)
    return; let { params: s, wrapperEl: r, rtlTranslate: u, snapGrid: m, touchEventsData: i } = e, t = te() - i.touchStartTime; if (d < -e.minTranslate()) {
    e.slideTo(e.activeIndex);
    return;
} if (d > -e.maxTranslate()) {
    e.slides.length < m.length ? e.slideTo(m.length - 1) : e.slideTo(e.slides.length - 1);
    return;
} if (s.freeMode.momentum) {
    if (i.velocities.length > 1) {
        let C = i.velocities.pop(), X = i.velocities.pop(), S = C.position - X.position, O = C.time - X.time;
        e.velocity = S / O, e.velocity /= 2, Math.abs(e.velocity) < s.freeMode.minimumVelocity && (e.velocity = 0), (O > 150 || te() - C.time > 300) && (e.velocity = 0);
    }
    else
        e.velocity = 0;
    e.velocity *= s.freeMode.momentumVelocityRatio, i.velocities.length = 0;
    let l = 1e3 * s.freeMode.momentumRatio, c = e.velocity * l, n = e.translate + c;
    u && (n = -n);
    let o = !1, f, T = Math.abs(e.velocity) * 20 * s.freeMode.momentumBounceRatio, A;
    if (n < e.maxTranslate())
        s.freeMode.momentumBounce ? (n + e.maxTranslate() < -T && (n = e.maxTranslate() - T), f = e.maxTranslate(), o = !0, i.allowMomentumBounce = !0) : n = e.maxTranslate(), s.loop && s.centeredSlides && (A = !0);
    else if (n > e.minTranslate())
        s.freeMode.momentumBounce ? (n - e.minTranslate() > T && (n = e.minTranslate() + T), f = e.minTranslate(), o = !0, i.allowMomentumBounce = !0) : n = e.minTranslate(), s.loop && s.centeredSlides && (A = !0);
    else if (s.freeMode.sticky) {
        let C;
        for (let X = 0; X < m.length; X += 1)
            if (m[X] > -n) {
                C = X;
                break;
            }
        Math.abs(m[C] - n) < Math.abs(m[C - 1] - n) || e.swipeDirection === "next" ? n = m[C] : n = m[C - 1], n = -n;
    }
    if (A && E("transitionEnd", () => { e.loopFix(); }), e.velocity !== 0) {
        if (u ? l = Math.abs((-n - e.translate) / e.velocity) : l = Math.abs((n - e.translate) / e.velocity), s.freeMode.sticky) {
            let C = Math.abs((u ? -n : n) - e.translate), X = e.slidesSizesGrid[e.activeIndex];
            C < X ? l = s.speed : C < 2 * X ? l = s.speed * 1.5 : l = s.speed * 2.5;
        }
    }
    else if (s.freeMode.sticky) {
        e.slideToClosest();
        return;
    }
    s.freeMode.momentumBounce && o ? (e.updateProgress(f), e.setTransition(l), e.setTranslate(n), e.transitionStart(!0, e.swipeDirection), e.animating = !0, ye(r, () => { !e || e.destroyed || !i.allowMomentumBounce || (h("momentumBounce"), e.setTransition(s.speed), setTimeout(() => { e.setTranslate(f), ye(r, () => { !e || e.destroyed || e.transitionEnd(); }); }, 0)); })) : e.velocity ? (h("_freeModeNoMomentumRelease"), e.updateProgress(n), e.setTransition(l), e.setTranslate(n), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, ye(r, () => { !e || e.destroyed || e.transitionEnd(); }))) : e.updateProgress(n), e.updateActiveIndex(), e.updateSlidesClasses();
}
else if (s.freeMode.sticky) {
    e.slideToClosest();
    return;
}
else
    s.freeMode && h("_freeModeNoMomentumRelease"); (!s.freeMode.momentum || t >= s.longSwipesMs) && (h("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses()); } Object.assign(e, { freeMode: { onTouchStart: M, onTouchMove: g, onTouchEnd: y } }); }
function Kt({ swiper: e, extendParams: D, on: h }) { D({ grid: { rows: 1, fill: "column" } }); let E, M, g, y, d = () => { let t = e.params.spaceBetween; return typeof t == "string" && t.indexOf("%") >= 0 ? t = parseFloat(t.replace("%", "")) / 100 * e.size : typeof t == "string" && (t = parseFloat(t)), t; }, s = t => { let { slidesPerView: l } = e.params, { rows: c, fill: n } = e.params.grid, o = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : t.length; g = Math.floor(o / c), Math.floor(o / c) === o / c ? E = o : E = Math.ceil(o / c) * c, l !== "auto" && n === "row" && (E = Math.max(E, l * c)), M = E / c; }, r = () => { e.slides && e.slides.forEach(t => { t.swiperSlideGridSet && (t.style.height = "", t.style[e.getDirectionLabel("margin-top")] = ""); }); }, u = (t, l, c) => { let { slidesPerGroup: n } = e.params, o = d(), { rows: f, fill: T } = e.params.grid, A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : c.length, C, X, S; if (T === "row" && n > 1) {
    let O = Math.floor(t / (n * f)), z = t - f * n * O, L = O === 0 ? n : Math.min(Math.ceil((A - O * f * n) / f), n);
    S = Math.floor(z / L), X = z - S * L + O * n, C = X + S * E / f, l.style.order = C;
}
else
    T === "column" ? (X = Math.floor(t / f), S = t - X * f, (X > g || X === g && S === f - 1) && (S += 1, S >= f && (S = 0, X += 1))) : (S = Math.floor(t / M), X = t - S * M); l.row = S, l.column = X, l.style.height = `calc((100% - ${(f - 1) * o}px) / ${f})`, l.style[e.getDirectionLabel("margin-top")] = S !== 0 ? o && `${o}px` : "", l.swiperSlideGridSet = !0; }, m = (t, l) => { let { centeredSlides: c, roundLengths: n } = e.params, o = d(), { rows: f } = e.params.grid; if (e.virtualSize = (t + o) * E, e.virtualSize = Math.ceil(e.virtualSize / f) - o, e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + o}px`), c) {
    let T = [];
    for (let A = 0; A < l.length; A += 1) {
        let C = l[A];
        n && (C = Math.floor(C)), l[A] < e.virtualSize + l[0] && T.push(C);
    }
    l.splice(0, l.length), l.push(...T);
} }, i = () => { y = e.params.grid && e.params.grid.rows > 1; }, a = () => { let { params: t, el: l } = e, c = t.grid && t.grid.rows > 1; y && !c ? (l.classList.remove(`${t.containerModifierClass}grid`, `${t.containerModifierClass}grid-column`), g = 1, e.emitContainerClasses()) : !y && c && (l.classList.add(`${t.containerModifierClass}grid`), t.grid.fill === "column" && l.classList.add(`${t.containerModifierClass}grid-column`), e.emitContainerClasses()), y = c; }; h("init", i), h("update", a), e.grid = { initSlides: s, unsetSlides: r, updateSlide: u, updateWrapperSize: m }; }
function ke(e) { let D = this, { params: h, slidesEl: E } = D; h.loop && D.loopDestroy(); let M = g => { if (typeof g == "string") {
    let y = document.createElement("div");
    _(y, g), E.append(y.children[0]), _(y, "");
}
else
    E.append(g); }; if (typeof e == "object" && "length" in e)
    for (let g = 0; g < e.length; g += 1)
        e[g] && M(e[g]);
else
    M(e); D.recalcSlides(), h.loop && D.loopCreate(), (!h.observer || D.isElement) && D.update(); }
function Re(e) { let D = this, { params: h, activeIndex: E, slidesEl: M } = D; h.loop && D.loopDestroy(); let g = E + 1, y = d => { if (typeof d == "string") {
    let s = document.createElement("div");
    _(s, d), M.prepend(s.children[0]), _(s, "");
}
else
    M.prepend(d); }; if (typeof e == "object" && "length" in e) {
    for (let d = 0; d < e.length; d += 1)
        e[d] && y(e[d]);
    g = E + e.length;
}
else
    y(e); D.recalcSlides(), h.loop && D.loopCreate(), (!h.observer || D.isElement) && D.update(), D.slideTo(g, 0, !1); }
function Be(e, D) { let h = this, { params: E, activeIndex: M, slidesEl: g } = h, y = M; E.loop && (y -= h.loopedSlides, h.loopDestroy(), h.recalcSlides()); let d = h.slides.length; if (e <= 0) {
    h.prependSlide(D);
    return;
} if (e >= d) {
    h.appendSlide(D);
    return;
} let s = y > e ? y + 1 : y, r = []; for (let u = d - 1; u >= e; u -= 1) {
    let m = h.slides[u];
    m.remove(), r.unshift(m);
} if (typeof D == "object" && "length" in D) {
    for (let u = 0; u < D.length; u += 1)
        D[u] && g.append(D[u]);
    s = y > e ? y + D.length : y;
}
else
    g.append(D); for (let u = 0; u < r.length; u += 1)
    g.append(r[u]); h.recalcSlides(), E.loop && h.loopCreate(), (!E.observer || h.isElement) && h.update(), E.loop ? h.slideTo(s + h.loopedSlides, 0, !1) : h.slideTo(s, 0, !1); }
function We(e) { let D = this, { params: h, activeIndex: E } = D, M = E; h.loop && (M -= D.loopedSlides, D.loopDestroy()); let g = M, y; if (typeof e == "object" && "length" in e) {
    for (let d = 0; d < e.length; d += 1)
        y = e[d], D.slides[y] && D.slides[y].remove(), y < g && (g -= 1);
    g = Math.max(g, 0);
}
else
    y = e, D.slides[y] && D.slides[y].remove(), y < g && (g -= 1), g = Math.max(g, 0); D.recalcSlides(), h.loop && D.loopCreate(), (!h.observer || D.isElement) && D.update(), h.loop ? D.slideTo(g + D.loopedSlides, 0, !1) : D.slideTo(g, 0, !1); }
function qe() { let e = this, D = []; for (let h = 0; h < e.slides.length; h += 1)
    D.push(h); e.removeSlide(D); }
function wt({ swiper: e }) { Object.assign(e, { appendSlide: ke.bind(e), prependSlide: Re.bind(e), addSlide: Be.bind(e), removeSlide: We.bind(e), removeAllSlides: qe.bind(e) }); }
function sa({ swiper: e, extendParams: D, on: h }) { D({ fadeEffect: { crossFade: !1 } }), J({ effect: "fade", swiper: e, on: h, setTranslate: () => { let { slides: g } = e, y = e.params.fadeEffect; for (let d = 0; d < g.length; d += 1) {
        let s = e.slides[d], u = -s.swiperSlideOffset;
        e.params.virtualTranslate || (u -= e.translate);
        let m = 0;
        e.isHorizontal() || (m = u, u = 0);
        let i = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s.progress), 0) : 1 + Math.min(Math.max(s.progress, -1), 0), a = le(y, s);
        a.style.opacity = i, a.style.transform = `translate3d(${u}px, ${m}px, 0px)`;
    } }, setTransition: g => { let y = e.slides.map(d => ae(d)); y.forEach(d => { d.style.transitionDuration = `${g}ms`; }), ue({ swiper: e, duration: g, transformElements: y, allSlides: !0 }); }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode }) }); }
function ca({ swiper: e, extendParams: D, on: h }) { D({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }); let E = (d, s, r) => { let u = r ? d.querySelector(".swiper-slide-shadow-left") : d.querySelector(".swiper-slide-shadow-top"), m = r ? d.querySelector(".swiper-slide-shadow-right") : d.querySelector(".swiper-slide-shadow-bottom"); u || (u = Z("div", `swiper-slide-shadow-cube swiper-slide-shadow-${r ? "left" : "top"}`.split(" ")), d.append(u)), m || (m = Z("div", `swiper-slide-shadow-cube swiper-slide-shadow-${r ? "right" : "bottom"}`.split(" ")), d.append(m)), u && (u.style.opacity = Math.max(-s, 0)), m && (m.style.opacity = Math.max(s, 0)); }; J({ effect: "cube", swiper: e, on: h, setTranslate: () => { let { el: d, wrapperEl: s, slides: r, width: u, height: m, rtlTranslate: i, size: a, browser: t } = e, l = fe(e), c = e.params.cubeEffect, n = e.isHorizontal(), o = e.virtual && e.params.virtual.enabled, f = 0, T; c.shadow && (n ? (T = e.wrapperEl.querySelector(".swiper-cube-shadow"), T || (T = Z("div", "swiper-cube-shadow"), e.wrapperEl.append(T)), T.style.height = `${u}px`) : (T = d.querySelector(".swiper-cube-shadow"), T || (T = Z("div", "swiper-cube-shadow"), d.append(T)))); for (let C = 0; C < r.length; C += 1) {
        let X = r[C], S = C;
        o && (S = parseInt(X.getAttribute("data-swiper-slide-index"), 10));
        let O = S * 90, z = Math.floor(O / 360);
        i && (O = -O, z = Math.floor(-O / 360));
        let L = Math.max(Math.min(X.progress, 1), -1), x = 0, b = 0, P = 0;
        S % 4 === 0 ? (x = -z * 4 * a, P = 0) : (S - 1) % 4 === 0 ? (x = 0, P = -z * 4 * a) : (S - 2) % 4 === 0 ? (x = a + z * 4 * a, P = a) : (S - 3) % 4 === 0 && (x = -a, P = 3 * a + a * 4 * z), i && (x = -x), n || (b = x, x = 0);
        let R = `rotateX(${l(n ? 0 : -O)}deg) rotateY(${l(n ? O : 0)}deg) translate3d(${x}px, ${b}px, ${P}px)`;
        L <= 1 && L > -1 && (f = S * 90 + L * 90, i && (f = -S * 90 - L * 90)), X.style.transform = R, c.slideShadows && E(X, L, n);
    } if (s.style.transformOrigin = `50% 50% -${a / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${a / 2}px`, c.shadow)
        if (n)
            T.style.transform = `translate3d(0px, ${u / 2 + c.shadowOffset}px, ${-u / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
        else {
            let C = Math.abs(f) - Math.floor(Math.abs(f) / 90) * 90, X = 1.5 - (Math.sin(C * 2 * Math.PI / 360) / 2 + Math.cos(C * 2 * Math.PI / 360) / 2), S = c.shadowScale, O = c.shadowScale / X, z = c.shadowOffset;
            T.style.transform = `scale3d(${S}, 1, ${O}) translate3d(0px, ${m / 2 + z}px, ${-m / 2 / O}px) rotateX(-89.99deg)`;
        } let A = (t.isSafari || t.isWebView) && t.needPerspectiveFix ? -a / 2 : 0; s.style.transform = `translate3d(0px,0,${A}px) rotateX(${l(e.isHorizontal() ? 0 : f)}deg) rotateY(${l(e.isHorizontal() ? -f : 0)}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${A}px`); }, setTransition: d => { let { el: s, slides: r } = e; if (r.forEach(u => { u.style.transitionDuration = `${d}ms`, u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m => { m.style.transitionDuration = `${d}ms`; }); }), e.params.cubeEffect.shadow && !e.isHorizontal()) {
        let u = s.querySelector(".swiper-cube-shadow");
        u && (u.style.transitionDuration = `${d}ms`);
    } }, recreateShadows: () => { let d = e.isHorizontal(); e.slides.forEach(s => { let r = Math.max(Math.min(s.progress, 1), -1); E(s, r, d); }); }, getEffectParams: () => e.params.cubeEffect, perspective: () => !0, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }) }); }
function pa({ swiper: e, extendParams: D, on: h }) { D({ flipEffect: { slideShadows: !0, limitRotation: !0 } }); let E = (d, s) => { let r = e.isHorizontal() ? d.querySelector(".swiper-slide-shadow-left") : d.querySelector(".swiper-slide-shadow-top"), u = e.isHorizontal() ? d.querySelector(".swiper-slide-shadow-right") : d.querySelector(".swiper-slide-shadow-bottom"); r || (r = ne("flip", d, e.isHorizontal() ? "left" : "top")), u || (u = ne("flip", d, e.isHorizontal() ? "right" : "bottom")), r && (r.style.opacity = Math.max(-s, 0)), u && (u.style.opacity = Math.max(s, 0)); }; J({ effect: "flip", swiper: e, on: h, setTranslate: () => { let { slides: d, rtlTranslate: s } = e, r = e.params.flipEffect, u = fe(e); for (let m = 0; m < d.length; m += 1) {
        let i = d[m], a = i.progress;
        e.params.flipEffect.limitRotation && (a = Math.max(Math.min(i.progress, 1), -1));
        let t = i.swiperSlideOffset, c = -180 * a, n = 0, o = e.params.cssMode ? -t - e.translate : -t, f = 0;
        e.isHorizontal() ? s && (c = -c) : (f = o, o = 0, n = -c, c = 0), i.style.zIndex = -Math.abs(Math.round(a)) + d.length, r.slideShadows && E(i, a);
        let T = `translate3d(${o}px, ${f}px, 0px) rotateX(${u(n)}deg) rotateY(${u(c)}deg)`, A = le(r, i);
        A.style.transform = T;
    } }, setTransition: d => { let s = e.slides.map(r => ae(r)); s.forEach(r => { r.style.transitionDuration = `${d}ms`, r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u => { u.style.transitionDuration = `${d}ms`; }); }), ue({ swiper: e, duration: d, transformElements: s }); }, recreateShadows: () => { e.params.flipEffect, e.slides.forEach(d => { let s = d.progress; e.params.flipEffect.limitRotation && (s = Math.max(Math.min(d.progress, 1), -1)), E(d, s); }); }, getEffectParams: () => e.params.flipEffect, perspective: () => !0, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !e.params.cssMode }) }); }
function Sa({ swiper: e, extendParams: D, on: h }) { D({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } }), J({ effect: "coverflow", swiper: e, on: h, setTranslate: () => { let { width: g, height: y, slides: d, slidesSizesGrid: s } = e, r = e.params.coverflowEffect, u = e.isHorizontal(), m = e.translate, i = u ? -m + g / 2 : -m + y / 2, a = u ? r.rotate : -r.rotate, t = r.depth, l = fe(e); for (let c = 0, n = d.length; c < n; c += 1) {
        let o = d[c], f = s[c], T = o.swiperSlideOffset, A = (i - T - f / 2) / f, C = typeof r.modifier == "function" ? r.modifier(A) : A * r.modifier, X = u ? a * C : 0, S = u ? 0 : a * C, O = -t * Math.abs(C), z = r.stretch;
        typeof z == "string" && z.indexOf("%") !== -1 && (z = parseFloat(r.stretch) / 100 * f);
        let L = u ? 0 : z * C, x = u ? z * C : 0, b = 1 - (1 - r.scale) * Math.abs(C);
        Math.abs(x) < .001 && (x = 0), Math.abs(L) < .001 && (L = 0), Math.abs(O) < .001 && (O = 0), Math.abs(X) < .001 && (X = 0), Math.abs(S) < .001 && (S = 0), Math.abs(b) < .001 && (b = 0);
        let P = `translate3d(${x}px,${L}px,${O}px)  rotateX(${l(S)}deg) rotateY(${l(X)}deg) scale(${b})`, R = le(r, o);
        if (R.style.transform = P, o.style.zIndex = -Math.abs(Math.round(C)) + 1, r.slideShadows) {
            let p = u ? o.querySelector(".swiper-slide-shadow-left") : o.querySelector(".swiper-slide-shadow-top"), v = u ? o.querySelector(".swiper-slide-shadow-right") : o.querySelector(".swiper-slide-shadow-bottom");
            p || (p = ne("coverflow", o, u ? "left" : "top")), v || (v = ne("coverflow", o, u ? "right" : "bottom")), p && (p.style.opacity = C > 0 ? C : 0), v && (v.style.opacity = -C > 0 ? -C : 0);
        }
    } }, setTransition: g => { e.slides.map(d => ae(d)).forEach(d => { d.style.transitionDuration = `${g}ms`, d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(s => { s.style.transitionDuration = `${g}ms`; }); }); }, perspective: () => !0, overwriteParams: () => ({ watchSlidesProgress: !0 }) }); }
function Pa({ swiper: e, extendParams: D, on: h }) { D({ creativeEffect: { limitProgress: 1, shadowPerProgress: !1, progressMultiplier: 1, perspective: !0, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } }); let E = y => typeof y == "string" ? y : `${y}px`; J({ effect: "creative", swiper: e, on: h, setTranslate: () => { let { slides: y, wrapperEl: d, slidesSizesGrid: s } = e, r = e.params.creativeEffect, { progressMultiplier: u } = r, m = e.params.centeredSlides, i = fe(e); if (m) {
        let a = s[0] / 2 - e.params.slidesOffsetBefore || 0;
        d.style.transform = `translateX(calc(50% - ${a}px))`;
    } for (let a = 0; a < y.length; a += 1) {
        let t = y[a], l = t.progress, c = Math.min(Math.max(t.progress, -r.limitProgress), r.limitProgress), n = c;
        m || (n = Math.min(Math.max(t.originalProgress, -r.limitProgress), r.limitProgress));
        let o = t.swiperSlideOffset, f = [e.params.cssMode ? -o - e.translate : -o, 0, 0], T = [0, 0, 0], A = !1;
        e.isHorizontal() || (f[1] = f[0], f[0] = 0);
        let C = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
        c < 0 ? (C = r.next, A = !0) : c > 0 && (C = r.prev, A = !0), f.forEach((b, P) => { f[P] = `calc(${b}px + (${E(C.translate[P])} * ${Math.abs(c * u)}))`; }), T.forEach((b, P) => { let R = C.rotate[P] * Math.abs(c * u); T[P] = R; }), t.style.zIndex = -Math.abs(Math.round(l)) + y.length;
        let X = f.join(", "), S = `rotateX(${i(T[0])}deg) rotateY(${i(T[1])}deg) rotateZ(${i(T[2])}deg)`, O = n < 0 ? `scale(${1 + (1 - C.scale) * n * u})` : `scale(${1 - (1 - C.scale) * n * u})`, z = n < 0 ? 1 + (1 - C.opacity) * n * u : 1 - (1 - C.opacity) * n * u, L = `translate3d(${X}) ${S} ${O}`;
        if (A && C.shadow || !A) {
            let b = t.querySelector(".swiper-slide-shadow");
            if (!b && C.shadow && (b = ne("creative", t)), b) {
                let P = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                b.style.opacity = Math.min(Math.max(Math.abs(P), 0), 1);
            }
        }
        let x = le(r, t);
        x.style.transform = L, x.style.opacity = z, C.origin && (x.style.transformOrigin = C.origin);
    } }, setTransition: y => { let d = e.slides.map(s => ae(s)); d.forEach(s => { s.style.transitionDuration = `${y}ms`, s.querySelectorAll(".swiper-slide-shadow").forEach(r => { r.style.transitionDuration = `${y}ms`; }); }), ue({ swiper: e, duration: y, transformElements: d, allSlides: !0 }); }, perspective: () => e.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode }) }); }
function Ha({ swiper: e, extendParams: D, on: h }) {
    D({ cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }), J({ effect: "cards", swiper: e, on: h, setTranslate: () => {
            let { slides: g, activeIndex: y, rtlTranslate: d } = e, s = e.params.cardsEffect, { startTranslate: r, isTouched: u } = e.touchEventsData, m = d ? -e.translate : e.translate;
            for (let i = 0; i < g.length; i += 1) {
                let a = g[i], t = a.progress, l = Math.min(Math.max(t, -4), 4), c = a.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (c -= g[0].swiperSlideOffset);
                let n = e.params.cssMode ? -c - e.translate : -c, o = 0, f = -100 * Math.abs(l), T = 1, A = -s.perSlideRotate * l, C = s.perSlideOffset - Math.abs(l) * .75, X = e.virtual && e.params.virtual.enabled ? e.virtual.from + i : i, S = (X === y || X === y - 1) && l > 0 && l < 1 && (u || e.params.cssMode) && m < r, O = (X === y || X === y + 1) && l < 0 && l > -1 && (u || e.params.cssMode) && m > r;
                if (S || O) {
                    let b = (1 - Math.abs((Math.abs(l) - .5) / .5)) ** .5;
                    A += -28 * l * b, T += -.5 * b, C += 96 * b, o = `${(s.rotate || e.isHorizontal() ? -25 : 0) * b * Math.abs(l)}%`;
                }
                if (l < 0 ? n = `calc(${n}px ${d ? "-" : "+"} (${C * Math.abs(l)}%))` : l > 0 ? n = `calc(${n}px ${d ? "-" : "+"} (-${C * Math.abs(l)}%))` : n = `${n}px`, !e.isHorizontal()) {
                    let b = o;
                    o = n, n = b;
                }
                let z = l < 0 ? `${1 + (1 - T) * l}` : `${1 - (1 - T) * l}`, L = `
        translate3d(${n}, ${o}, ${f}px)
        rotateZ(${s.rotate ? d ? -A : A : 0}deg)
        scale(${z})
      `;
                if (s.slideShadows) {
                    let b = a.querySelector(".swiper-slide-shadow");
                    b || (b = ne("cards", a)), b && (b.style.opacity = Math.min(Math.max((Math.abs(l) - .5) / .5, 0), 1));
                }
                a.style.zIndex = -Math.abs(Math.round(t)) + g.length;
                let x = le(s, a);
                x.style.transform = L;
            }
        }, setTransition: g => { let y = e.slides.map(d => ae(d)); y.forEach(d => { d.style.transitionDuration = `${g}ms`, d.querySelectorAll(".swiper-slide-shadow").forEach(s => { s.style.transitionDuration = `${g}ms`; }); }), ue({ swiper: e, duration: g, transformElements: y }); }, perspective: () => !0, overwriteParams: () => ({ _loopSwapReset: !1, watchSlidesProgress: !0, loopAdditionalSlides: e.params.cardsEffect.rotate ? 3 : 2, centeredSlides: !0, virtualTranslate: !e.params.cssMode }) });
}
export { Ge as a, Ue as b, Je as c, lt as d, dt as e, pt as f, bt as g, Mt as h, $t as i, At as j, Ot as k, Rt as l, qt as m, Vt as n, Ut as o, Kt as p, wt as q, sa as r, ca as s, pa as t, Sa as u, Pa as v, Ha as w };
