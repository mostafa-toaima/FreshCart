function w(e) { return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object; }
function h(e = {}, t = {}) { let r = ["__proto__", "constructor", "prototype"]; Object.keys(t).filter(n => r.indexOf(n) < 0).forEach(n => { typeof e[n] > "u" ? e[n] = t[n] : w(t[n]) && w(e[n]) && Object.keys(t[n]).length > 0 && h(e[n], t[n]); }); }
var g = { body: {}, addEventListener() { }, removeEventListener() { }, activeElement: { blur() { }, nodeName: "" }, querySelector() { return null; }, querySelectorAll() { return []; }, getElementById() { return null; }, createEvent() { return { initEvent() { } }; }, createElement() { return { children: [], childNodes: [], style: {}, setAttribute() { }, getElementsByTagName() { return []; } }; }, createElementNS() { return {}; }, importNode() { return null; }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
function T() { let e = typeof document < "u" ? document : {}; return h(e, g), e; }
var E = { document: g, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() { }, pushState() { }, go() { }, back() { } }, CustomEvent: function () { return this; }, addEventListener() { }, removeEventListener() { }, getComputedStyle() { return { getPropertyValue() { return ""; } }; }, Image() { }, Date() { }, screen: {}, setTimeout() { }, clearTimeout() { }, matchMedia() { return {}; }, requestAnimationFrame(e) { return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0); }, cancelAnimationFrame(e) { typeof setTimeout > "u" || clearTimeout(e); } };
function c() { let e = typeof window < "u" ? window : {}; return h(e, E), e; }
function b(e = "") { return e.trim().split(" ").filter(t => !!t.trim()); }
function O(e) { let t = e; Object.keys(t).forEach(r => { try {
    t[r] = null;
}
catch { } try {
    delete t[r];
}
catch { } }); }
function A(e, t = 0) { return setTimeout(e, t); }
function F() { return Date.now(); }
function x(e) { let t = c(), r; return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r; }
function _(e, t = "x") { let r = c(), n, o, l, s = x(e); return r.WebKitCSSMatrix ? (o = s.transform || s.webkitTransform, o.split(",").length > 6 && (o = o.split(", ").map(a => a.replace(",", ".")).join(", ")), l = new r.WebKitCSSMatrix(o === "none" ? "" : o)) : (l = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = l.toString().split(",")), t === "x" && (r.WebKitCSSMatrix ? o = l.m41 : n.length === 16 ? o = parseFloat(n[12]) : o = parseFloat(n[4])), t === "y" && (r.WebKitCSSMatrix ? o = l.m42 : n.length === 16 ? o = parseFloat(n[13]) : o = parseFloat(n[5])), o || 0; }
function p(e) { return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"; }
function M(e) { return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11); }
function S(...e) { let t = Object(e[0]), r = ["__proto__", "constructor", "prototype"]; for (let n = 1; n < e.length; n += 1) {
    let o = e[n];
    if (o != null && !M(o)) {
        let l = Object.keys(Object(o)).filter(s => r.indexOf(s) < 0);
        for (let s = 0, a = l.length; s < a; s += 1) {
            let i = l[s], u = Object.getOwnPropertyDescriptor(o, i);
            u !== void 0 && u.enumerable && (p(t[i]) && p(o[i]) ? o[i].__swiper__ ? t[i] = o[i] : S(t[i], o[i]) : !p(t[i]) && p(o[i]) ? (t[i] = {}, o[i].__swiper__ ? t[i] = o[i] : S(t[i], o[i])) : t[i] = o[i]);
        }
    }
} return t; }
function j(e, t, r) { e.style.setProperty(t, r); }
function H({ swiper: e, targetPosition: t, side: r }) { let n = c(), o = -e.translate, l = null, s, a = e.params.speed; e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID); let i = t > o ? "next" : "prev", u = (m, d) => i === "next" && m >= d || i === "prev" && m <= d, y = () => { s = new Date().getTime(), l === null && (l = s); let m = Math.max(Math.min((s - l) / a, 1), 0), d = .5 - Math.cos(m * Math.PI) / 2, f = o + d * (t - o); if (u(f, t) && (f = t), e.wrapperEl.scrollTo({ [r]: f }), u(f, t)) {
    e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => { e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [r]: f }); }), n.cancelAnimationFrame(e.cssModeFrameID);
    return;
} e.cssModeFrameID = n.requestAnimationFrame(y); }; y(); }
function P(e) { return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e; }
function I(e, t = "") { let r = c(), n = [...e.children]; return r.HTMLSlotElement && e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter(o => o.matches(t)) : n; }
function v(e, t) { let r = [t]; for (; r.length > 0;) {
    let n = r.shift();
    if (e === n)
        return !0;
    r.push(...n.children, ...n.shadowRoot ? n.shadowRoot.children : [], ...n.assignedElements ? n.assignedElements() : []);
} }
function D(e, t) { let r = c(), n = t.contains(e); return !n && r.HTMLSlotElement && t instanceof HTMLSlotElement && (n = [...t.assignedElements()].includes(e), n || (n = v(e, t))), n; }
function W(e) { try {
    console.warn(e);
    return;
}
catch { } }
function q(e, t = []) { let r = document.createElement(e); return r.classList.add(...Array.isArray(t) ? t : b(t)), r; }
function N(e) { let t = c(), r = T(), n = e.getBoundingClientRect(), o = r.body, l = e.clientTop || o.clientTop || 0, s = e.clientLeft || o.clientLeft || 0, a = e === t ? t.scrollY : e.scrollTop, i = e === t ? t.scrollX : e.scrollLeft; return { top: n.top + a - l, left: n.left + i - s }; }
function R(e, t) { let r = []; for (; e.previousElementSibling;) {
    let n = e.previousElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
} return r; }
function B(e, t) { let r = []; for (; e.nextElementSibling;) {
    let n = e.nextElementSibling;
    t ? n.matches(t) && r.push(n) : r.push(n), e = n;
} return r; }
function K(e, t) { return c().getComputedStyle(e, null).getPropertyValue(t); }
function V(e) { let t = e, r; if (t) {
    for (r = 0; (t = t.previousSibling) !== null;)
        t.nodeType === 1 && (r += 1);
    return r;
} }
function k(e, t) { let r = [], n = e.parentElement; for (; n;)
    t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement; return r; }
function Q(e, t) { function r(n) { n.target === e && (t.call(e, n), e.removeEventListener("transitionend", r)); } t && e.addEventListener("transitionend", r); }
function X(e, t, r) { let n = c(); return r ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth; }
function Y(e) { return (Array.isArray(e) ? e : [e]).filter(t => !!t); }
function z(e) { return t => Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 === 0 ? t + .001 : t; }
function G(e, t = "") { typeof trustedTypes < "u" ? e.innerHTML = trustedTypes.createPolicy("html", { createHTML: r => r }).createHTML(t) : e.innerHTML = t; }
export { T as a, c as b, b as c, O as d, A as e, F as f, _ as g, p as h, S as i, j, H as k, P as l, I as m, D as n, W as o, q as p, N as q, R as r, B as s, K as t, V as u, k as v, Q as w, X as x, Y as y, z, G as A };
