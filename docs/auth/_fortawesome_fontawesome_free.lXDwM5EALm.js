(function () {
    "use strict";
    function qe(t, e, a) { return (e = Ze(e)) in t ? Object.defineProperty(t, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = a, t; }
    function Qe(t, e) { if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && J(t, e); }
    function Xt(t, e) { var a = Object.keys(t); if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function (r) { return Object.getOwnPropertyDescriptor(t, r).enumerable; })), a.push.apply(a, n);
    } return a; }
    function s(t) { for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Xt(Object(a), !0).forEach(function (n) { qe(t, n, a[n]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Xt(Object(a)).forEach(function (n) { Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(a, n)); });
    } return t; }
    function J(t, e) { return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (a, n) { return a.__proto__ = n, a; }, J(t, e); }
    function Je(t, e) { if (typeof t != "object" || !t)
        return t; var a = t[Symbol.toPrimitive]; if (a !== void 0) {
        var n = a.call(t, e || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return (e === "string" ? String : Number)(t); }
    function Ze(t) { var e = Je(t, "string"); return typeof e == "symbol" ? e : e + ""; }
    function W() { W = function (r, i) { return new a(r, void 0, i); }; var t = RegExp.prototype, e = new WeakMap; function a(r, i, o) { var l = RegExp(r, i); return e.set(l, o || e.get(r)), J(l, a.prototype); } function n(r, i) { var o = e.get(i); return Object.keys(o).reduce(function (l, u) { var f = o[u]; if (typeof f == "number")
        l[u] = r[f];
    else {
        for (var d = 0; r[f[d]] === void 0 && d + 1 < f.length;)
            d++;
        l[u] = r[f[d]];
    } return l; }, Object.create(null)); } return Qe(a, RegExp), a.prototype.exec = function (r) { var i = t.exec.call(this, r); if (i) {
        i.groups = n(i, this);
        var o = i.indices;
        o && (o.groups = n(o, this));
    } return i; }, a.prototype[Symbol.replace] = function (r, i) { if (typeof i == "string") {
        var o = e.get(this);
        return t[Symbol.replace].call(this, r, i.replace(/\$<([^>]+)>/g, function (u, f) { var d = o[f]; return "$" + (Array.isArray(d) ? d.join("$") : d); }));
    } if (typeof i == "function") {
        var l = this;
        return t[Symbol.replace].call(this, r, function () { var u = arguments; return typeof u[u.length - 1] != "object" && (u = [].slice.call(u)).push(n(u, l)), i.apply(this, u); });
    } return t[Symbol.replace].call(this, r, i); }, W.apply(this, arguments); }
    let Bt = () => { }, ct = {}, Vt = {}, $t = null, Kt = { mark: Bt, measure: Bt };
    try {
        typeof window < "u" && (ct = window), typeof document < "u" && (Vt = document), typeof MutationObserver < "u" && ($t = MutationObserver), typeof performance < "u" && (Kt = performance);
    }
    catch { }
    let { userAgent: qt = "" } = ct.navigator || {}, w = ct, p = Vt, Qt = $t, Z = Kt, ta = !!w.document, P = !!p.documentElement && !!p.head && typeof p.addEventListener == "function" && typeof p.createElement == "function", Jt = ~qt.indexOf("MSIE") || ~qt.indexOf("Trident/");
    var ea = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, aa = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Zt = { classic: { fa: "solid", fas: "solid", "fa-solid": "solid", far: "regular", "fa-regular": "regular", fal: "light", "fa-light": "light", fat: "thin", "fa-thin": "thin", fab: "brands", "fa-brands": "brands" }, duotone: { fa: "solid", fad: "solid", "fa-solid": "solid", "fa-duotone": "solid", fadr: "regular", "fa-regular": "regular", fadl: "light", "fa-light": "light", fadt: "thin", "fa-thin": "thin" }, sharp: { fa: "solid", fass: "solid", "fa-solid": "solid", fasr: "regular", "fa-regular": "regular", fasl: "light", "fa-light": "light", fast: "thin", "fa-thin": "thin" }, "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid", fasdr: "regular", "fa-regular": "regular", fasdl: "light", "fa-light": "light", fasdt: "thin", "fa-thin": "thin" } }, na = { GROUP: "duotone-group", SWAP_OPACITY: "swap-opacity", PRIMARY: "primary", SECONDARY: "secondary" }, te = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], b = "classic", tt = "duotone", ra = "sharp", ia = "sharp-duotone", ee = [b, tt, ra, ia], oa = { classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" }, duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" }, sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }, "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" } }, sa = { "Font Awesome 6 Free": { 900: "fas", 400: "far" }, "Font Awesome 6 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" }, "Font Awesome 6 Brands": { 400: "fab", normal: "fab" }, "Font Awesome 6 Duotone": { 900: "fad", 400: "fadr", normal: "fadr", 300: "fadl", 100: "fadt" }, "Font Awesome 6 Sharp": { 900: "fass", 400: "fasr", normal: "fasr", 300: "fasl", 100: "fast" }, "Font Awesome 6 Sharp Duotone": { 900: "fasds", 400: "fasdr", normal: "fasdr", 300: "fasdl", 100: "fasdt" } }, la = new Map([["classic", { defaultShortPrefixId: "fas", defaultStyleId: "solid", styleIds: ["solid", "regular", "light", "thin", "brands"], futureStyleIds: [], defaultFontWeight: 900 }], ["sharp", { defaultShortPrefixId: "fass", defaultStyleId: "solid", styleIds: ["solid", "regular", "light", "thin"], futureStyleIds: [], defaultFontWeight: 900 }], ["duotone", { defaultShortPrefixId: "fad", defaultStyleId: "solid", styleIds: ["solid", "regular", "light", "thin"], futureStyleIds: [], defaultFontWeight: 900 }], ["sharp-duotone", { defaultShortPrefixId: "fasds", defaultStyleId: "solid", styleIds: ["solid", "regular", "light", "thin"], futureStyleIds: [], defaultFontWeight: 900 }]]), fa = { classic: { solid: "fas", regular: "far", light: "fal", thin: "fat", brands: "fab" }, duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" }, sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }, "sharp-duotone": { solid: "fasds", regular: "fasdr", light: "fasdl", thin: "fasdt" } }, ca = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ae = { kit: { fak: "kit", "fa-kit": "kit" }, "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" } }, ua = ["kit"], da = { kit: { "fa-kit": "fak" }, "kit-duotone": { "fa-kit-duotone": "fakd" } }, ma = ["fak", "fakd"], ga = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } }, ne = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } }, et = { GROUP: "duotone-group", SWAP_OPACITY: "swap-opacity", PRIMARY: "primary", SECONDARY: "secondary" }, pa = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ha = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ba = { "Font Awesome Kit": { 400: "fak", normal: "fak" }, "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" } }, ya = { classic: { "fa-brands": "fab", "fa-duotone": "fad", "fa-light": "fal", "fa-regular": "far", "fa-solid": "fas", "fa-thin": "fat" }, duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" }, sharp: { "fa-solid": "fass", "fa-regular": "fasr", "fa-light": "fasl", "fa-thin": "fast" }, "sharp-duotone": { "fa-solid": "fasds", "fa-regular": "fasdr", "fa-light": "fasdl", "fa-thin": "fasdt" } }, va = { classic: ["fas", "far", "fal", "fat", "fad"], duotone: ["fadr", "fadl", "fadt"], sharp: ["fass", "fasr", "fasl", "fast"], "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"] }, ut = { classic: { fab: "fa-brands", fad: "fa-duotone", fal: "fa-light", far: "fa-regular", fas: "fa-solid", fat: "fa-thin" }, duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" }, sharp: { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light", fast: "fa-thin" }, "sharp-duotone": { fasds: "fa-solid", fasdr: "fa-regular", fasdl: "fa-light", fasdt: "fa-thin" } }, xa = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], dt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...pa, ...xa], Aa = ["solid", "regular", "light", "thin", "duotone", "brands"], re = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], wa = re.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ka = [...Object.keys(va), ...Aa, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", et.GROUP, et.SWAP_OPACITY, et.PRIMARY, et.SECONDARY].concat(re.map(t => "".concat(t, "x"))).concat(wa.map(t => "w-".concat(t))), Pa = { "Font Awesome 5 Free": { 900: "fas", 400: "far" }, "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" }, "Font Awesome 5 Brands": { 400: "fab", normal: "fab" }, "Font Awesome 5 Duotone": { 900: "fad" } };
    let S = "___FONT_AWESOME___", mt = 16, ie = "fa", oe = "svg-inline--fa", _ = "data-fa-i2svg", gt = "data-fa-pseudo-element", Sa = "data-fa-pseudo-element-pending", pt = "data-prefix", ht = "data-icon", se = "fontawesome-i2svg", Ea = "async", Oa = ["HTML", "HEAD", "STYLE", "SCRIPT"], bt = (() => { try {
        return !0;
    }
    catch {
        return !1;
    } })();
    function G(t) { return new Proxy(t, { get(e, a) { return a in e ? e[a] : e[b]; } }); }
    let le = s({}, Zt);
    le[b] = s(s(s(s({}, { "fa-duotone": "duotone" }), Zt[b]), ae.kit), ae["kit-duotone"]);
    let Ca = G(le), yt = s({}, fa);
    yt[b] = s(s(s(s({}, { duotone: "fad" }), yt[b]), ne.kit), ne["kit-duotone"]);
    let fe = G(yt), vt = s({}, ut);
    vt[b] = s(s({}, vt[b]), ga.kit);
    let xt = G(vt), At = s({}, ya);
    At[b] = s(s({}, At[b]), da.kit);
    let Zn = G(At), Ia = ea, ce = "fa-layers-text", Fa = aa, Na = s({}, oa), tr = G(Na), Ta = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], wt = na, _a = [...ua, ...ka], H = w.FontAwesomeConfig || {};
    function Ma(t) { var e = p.querySelector("script[" + t + "]"); if (e)
        return e.getAttribute(t); }
    function La(t) { return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t; }
    p && typeof p.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(e => { let [a, n] = e, r = La(Ma(a)); r != null && (H[n] = r); });
    let ue = { styleDefault: "solid", familyDefault: b, cssPrefix: ie, replacementClass: oe, autoReplaceSvg: !0, autoAddCss: !0, autoA11y: !0, searchPseudoElements: !1, observeMutations: !0, mutateApproach: "async", keepOriginalSource: !0, measurePerformance: !1, showMissingIcons: !0 };
    H.familyPrefix && (H.cssPrefix = H.familyPrefix);
    let D = s(s({}, ue), H);
    D.autoReplaceSvg || (D.observeMutations = !1);
    let c = {};
    Object.keys(ue).forEach(t => { Object.defineProperty(c, t, { enumerable: !0, set: function (e) { D[t] = e, X.forEach(a => a(c)); }, get: function () { return D[t]; } }); }), Object.defineProperty(c, "familyPrefix", { enumerable: !0, set: function (t) { D.cssPrefix = t, X.forEach(e => e(c)); }, get: function () { return D.cssPrefix; } }), w.FontAwesomeConfig = c;
    let X = [];
    function Da(t) { return X.push(t), () => { X.splice(X.indexOf(t), 1); }; }
    let C = mt, k = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
    function Ra(t) { try {
        for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
            a[n - 1] = arguments[n];
        t(...a);
    }
    catch (r) {
        if (!bt)
            throw r;
    } }
    function za(t) { if (!t || !P)
        return; let e = p.createElement("style"); e.setAttribute("type", "text/css"), e.innerHTML = t; let a = p.head.childNodes, n = null; for (let r = a.length - 1; r > -1; r--) {
        let i = a[r], o = (i.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    } return p.head.insertBefore(e, n), t; }
    let ja = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    function B() { let t = 12, e = ""; for (; t-- > 0;)
        e += ja[Math.random() * 62 | 0]; return e; }
    function R(t) { let e = []; for (let a = (t || []).length >>> 0; a--;)
        e[a] = t[a]; return e; }
    function kt(t) { return t.classList ? R(t.classList) : (t.getAttribute("class") || "").split(" ").filter(e => e); }
    function de(t) { return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function Ya(t) { return Object.keys(t || {}).reduce((e, a) => e + "".concat(a, '="').concat(de(t[a]), '" '), "").trim(); }
    function at(t) { return Object.keys(t || {}).reduce((e, a) => e + "".concat(a, ": ").concat(t[a].trim(), ";"), ""); }
    function Pt(t) { return t.size !== k.size || t.x !== k.x || t.y !== k.y || t.rotate !== k.rotate || t.flipX || t.flipY; }
    function Ua(t) { let { transform: e, containerWidth: a, iconWidth: n } = t, r = { transform: "translate(".concat(a / 2, " 256)") }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), l = "rotate(".concat(e.rotate, " 0 0)"), u = { transform: "".concat(i, " ").concat(o, " ").concat(l) }, f = { transform: "translate(".concat(n / 2 * -1, " -256)") }; return { outer: r, inner: u, path: f }; }
    function Wa(t) { let { transform: e, width: a = mt, height: n = mt, startCentered: r = !1 } = t, i = ""; return r && Jt ? i += "translate(".concat(e.x / C - a / 2, "em, ").concat(e.y / C - n / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(e.x / C, "em), calc(-50% + ").concat(e.y / C, "em)) ") : i += "translate(".concat(e.x / C, "em, ").concat(e.y / C, "em) "), i += "scale(".concat(e.size / C * (e.flipX ? -1 : 1), ", ").concat(e.size / C * (e.flipY ? -1 : 1), ") "), i += "rotate(".concat(e.rotate, "deg) "), i; }
    var Ga = ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-regular:normal 400 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-light:normal 300 1em/1 "Font Awesome 6 Duotone";--fa-font-duotone-thin:normal 100 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin:normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid:normal 900 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-regular:normal 400 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-light:normal 300 1em/1 "Font Awesome 6 Sharp Duotone";--fa-font-sharp-duotone-thin:normal 100 1em/1 "Font Awesome 6 Sharp Duotone"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1,1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1,1) translateY(0)}100%{transform:scale(1,1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}100%,40%{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1,1)}.fa-flip-vertical{transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1,-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}';
    function me() { let t = ie, e = oe, a = c.cssPrefix, n = c.replacementClass, r = Ga; if (a !== t || n !== e) {
        let i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), l = new RegExp("\\.".concat(e), "g");
        r = r.replace(i, ".".concat(a, "-")).replace(o, "--".concat(a, "-")).replace(l, ".".concat(n));
    } return r; }
    let ge = !1;
    function St() { c.autoAddCss && !ge && (za(me()), ge = !0); }
    var Ha = { mixout() { return { dom: { css: me, insertCss: St } }; }, hooks() { return { beforeDOMElementCreation() { St(); }, beforeI2svg() { St(); } }; } };
    let E = w || {};
    E[S] || (E[S] = {}), E[S].styles || (E[S].styles = {}), E[S].hooks || (E[S].hooks = {}), E[S].shims || (E[S].shims = []);
    var h = E[S];
    let pe = [], he = function () { p.removeEventListener("DOMContentLoaded", he), nt = 1, pe.map(t => t()); }, nt = !1;
    P && (nt = (p.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(p.readyState), nt || p.addEventListener("DOMContentLoaded", he));
    function be(t) { P && (nt ? setTimeout(t, 0) : pe.push(t)); }
    function V(t) { let { tag: e, attributes: a = {}, children: n = [] } = t; return typeof t == "string" ? de(t) : "<".concat(e, " ").concat(Ya(a), ">").concat(n.map(V).join(""), "</").concat(e, ">"); }
    function ye(t, e, a) { if (t && t[e] && t[e][a])
        return { prefix: e, iconName: a, icon: t[e][a] }; }
    var Xa = function (e, a) { return function (n, r, i, o) { return e.call(a, n, r, i, o); }; }, Et = function (e, a, n, r) { var i = Object.keys(e), o = i.length, l = r !== void 0 ? Xa(a, r) : a, u, f, d; for (n === void 0 ? (u = 1, d = e[i[0]]) : (u = 0, d = n); u < o; u++)
        f = i[u], d = l(d, e[f], f, e); return d; };
    function Ba(t) { let e = [], a = 0, n = t.length; for (; a < n;) {
        let r = t.charCodeAt(a++);
        if (r >= 55296 && r <= 56319 && a < n) {
            let i = t.charCodeAt(a++);
            (i & 64512) == 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), a--);
        }
        else
            e.push(r);
    } return e; }
    function Ot(t) { let e = Ba(t); return e.length === 1 ? e[0].toString(16) : null; }
    function Va(t, e) { let a = t.length, n = t.charCodeAt(e), r; return n >= 55296 && n <= 56319 && a > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n; }
    function ve(t) { return Object.keys(t).reduce((e, a) => { let n = t[a]; return !!n.icon ? e[n.iconName] = n.icon : e[a] = n, e; }, {}); }
    function Ct(t, e) { let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, { skipHooks: n = !1 } = a, r = ve(e); typeof h.hooks.addPack == "function" && !n ? h.hooks.addPack(t, ve(e)) : h.styles[t] = s(s({}, h.styles[t] || {}), r), t === "fas" && Ct("fa", e); }
    let er = [W(/path d="([^"]+)".*path d="([^"]+)"/, { d1: 1, d2: 2 }), W(/path class="([^"]+)".*d="([^"]+)".*path class="([^"]+)".*d="([^"]+)"/, { cls1: 1, d1: 2, cls2: 3, d2: 4 }), W(/path class="([^"]+)".*d="([^"]+)"/, { cls1: 1, d1: 2 })], { styles: $, shims: $a } = h, xe = Object.keys(xt), Ka = xe.reduce((t, e) => (t[e] = Object.keys(xt[e]), t), {}), It = null, Ae = {}, we = {}, ke = {}, Pe = {}, Se = {};
    function qa(t) { return ~_a.indexOf(t); }
    function Qa(t, e) { let a = e.split("-"), n = a[0], r = a.slice(1).join("-"); return n === t && r !== "" && !qa(r) ? r : null; }
    let K = () => { let t = n => Et($, (r, i, o) => (r[o] = Et(i, n, {}), r), {}); Ae = t((n, r, i) => (r[3] && (n[r[3]] = i), r[2] && r[2].filter(l => typeof l == "number").forEach(l => { n[l.toString(16)] = i; }), n)), we = t((n, r, i) => (n[i] = i, r[2] && r[2].filter(l => typeof l == "string").forEach(l => { n[l] = i; }), n)), Se = t((n, r, i) => { let o = r[2]; return n[i] = i, o.forEach(l => { n[l] = i; }), n; }); let e = "far" in $ || c.autoFetchSvg, a = Et($a, (n, r) => { let i = r[0], o = r[1], l = r[2]; return o === "far" && !e && (o = "fas"), typeof i == "string" && (n.names[i] = { prefix: o, iconName: l }), typeof i == "number" && (n.unicodes[i.toString(16)] = { prefix: o, iconName: l }), n; }, { names: {}, unicodes: {} }); ke = a.names, Pe = a.unicodes, It = rt(c.styleDefault, { family: c.familyDefault }); };
    Da(t => { It = rt(t.styleDefault, { family: c.familyDefault }); }), K();
    function Ft(t, e) { return (Ae[t] || {})[e]; }
    function Ja(t, e) { return (we[t] || {})[e]; }
    function M(t, e) { return (Se[t] || {})[e]; }
    function Ee(t) { return ke[t] || { prefix: null, iconName: null }; }
    function Za(t) { let e = Pe[t], a = Ft("fas", t); return e || (a ? { prefix: "fas", iconName: a } : null) || { prefix: null, iconName: null }; }
    function I() { return It; }
    let Oe = () => ({ prefix: null, iconName: null, rest: [] });
    function tn(t) { let e = b, a = xe.reduce((n, r) => (n[r] = "".concat(c.cssPrefix, "-").concat(r), n), {}); return ee.forEach(n => { (t.includes(a[n]) || t.some(r => Ka[n].includes(r))) && (e = n); }), e; }
    function rt(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { family: a = b } = e, n = Ca[a][t]; if (a === tt && !t)
        return "fad"; let r = fe[a][t] || fe[a][n], i = t in h.styles ? t : null; return r || i || null; }
    function en(t) { let e = [], a = null; return t.forEach(n => { let r = Qa(c.cssPrefix, n); r ? a = r : n && e.push(n); }), { iconName: a, rest: e }; }
    function Ce(t) { return t.sort().filter((e, a, n) => n.indexOf(e) === a); }
    function it(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { skipLookups: a = !1 } = e, n = null, r = dt.concat(ha), i = Ce(t.filter(g => r.includes(g))), o = Ce(t.filter(g => !dt.includes(g))), l = i.filter(g => (n = g, !te.includes(g))), [u = null] = l, f = tn(i), d = s(s({}, en(o)), {}, { prefix: rt(u, { family: f }) }); return s(s(s({}, d), on({ values: t, family: f, styles: $, config: c, canonical: d, givenPrefix: n })), an(a, n, d)); }
    function an(t, e, a) { let { prefix: n, iconName: r } = a; if (t || !n || !r)
        return { prefix: n, iconName: r }; let i = e === "fa" ? Ee(r) : {}, o = M(n, r); return r = i.iconName || o || r, n = i.prefix || n, n === "far" && !$.far && $.fas && !c.autoFetchSvg && (n = "fas"), { prefix: n, iconName: r }; }
    let nn = ee.filter(t => t !== b || t !== tt), rn = Object.keys(ut).filter(t => t !== b).map(t => Object.keys(ut[t])).flat();
    function on(t) { let { values: e, family: a, canonical: n, givenPrefix: r = "", styles: i = {}, config: o = {} } = t, l = a === tt, u = e.includes("fa-duotone") || e.includes("fad"), f = o.familyDefault === "duotone", d = n.prefix === "fad" || n.prefix === "fa-duotone"; if (!l && (u || f || d) && (n.prefix = "fad"), (e.includes("fa-brands") || e.includes("fab")) && (n.prefix = "fab"), !n.prefix && nn.includes(a) && (Object.keys(i).find(m => rn.includes(m)) || o.autoFetchSvg)) {
        let m = la.get(a).defaultShortPrefixId;
        n.prefix = m, n.iconName = M(n.prefix, n.iconName) || n.iconName;
    } return (n.prefix === "fa" || r === "fa") && (n.prefix = I() || "fas"), n; }
    class sn {
        constructor() { this.definitions = {}; }
        add() { for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++)
            a[n] = arguments[n]; let r = a.reduce(this._pullDefinitions, {}); Object.keys(r).forEach(i => { this.definitions[i] = s(s({}, this.definitions[i] || {}), r[i]), Ct(i, r[i]); let o = xt[b][i]; o && Ct(o, r[i]), K(); }); }
        reset() { this.definitions = {}; }
        _pullDefinitions(e, a) { let n = a.prefix && a.iconName && a.icon ? { 0: a } : a; return Object.keys(n).map(r => { let { prefix: i, iconName: o, icon: l } = n[r], u = l[2]; e[i] || (e[i] = {}), u.length > 0 && u.forEach(f => { typeof f == "string" && (e[i][f] = l); }), e[i][o] = l; }), e; }
    }
    let Ie = [], z = {}, j = {}, ln = Object.keys(j);
    function fn(t, e) { let { mixoutsTo: a } = e; return Ie = t, z = {}, Object.keys(j).forEach(n => { ln.indexOf(n) === -1 && delete j[n]; }), Ie.forEach(n => { let r = n.mixout ? n.mixout() : {}; if (Object.keys(r).forEach(i => { typeof r[i] == "function" && (a[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach(o => { a[i] || (a[i] = {}), a[i][o] = r[i][o]; }); }), n.hooks) {
        let i = n.hooks();
        Object.keys(i).forEach(o => { z[o] || (z[o] = []), z[o].push(i[o]); });
    } n.provides && n.provides(j); }), a; }
    function Nt(t, e) { for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
        n[r - 2] = arguments[r]; return (z[t] || []).forEach(o => { e = o.apply(null, [e, ...n]); }), e; }
    function F(t) { for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        a[n - 1] = arguments[n]; (z[t] || []).forEach(i => { i.apply(null, a); }); }
    function N() { let t = arguments[0], e = Array.prototype.slice.call(arguments, 1); return j[t] ? j[t].apply(null, e) : void 0; }
    function Tt(t) { t.prefix === "fa" && (t.prefix = "fas"); let { iconName: e } = t, a = t.prefix || I(); if (e)
        return e = M(a, e) || e, ye(Fe.definitions, a, e) || ye(h.styles, a, e); }
    let Fe = new sn, _t = { noAuto: () => { c.autoReplaceSvg = !1, c.observeMutations = !1, F("noAuto"); }, config: c, dom: { i2svg: function () { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return P ? (F("beforeI2svg", t), N("pseudoElements2svg", t), N("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind.")); }, watch: function () { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { autoReplaceSvgRoot: e } = t; c.autoReplaceSvg === !1 && (c.autoReplaceSvg = !0), c.observeMutations = !0, be(() => { q({ autoReplaceSvgRoot: e }), F("watch", t); }); } }, parse: { icon: t => { if (t === null)
                return null; if (typeof t == "object" && t.prefix && t.iconName)
                return { prefix: t.prefix, iconName: M(t.prefix, t.iconName) || t.iconName }; if (Array.isArray(t) && t.length === 2) {
                let e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], a = rt(t[0]);
                return { prefix: a, iconName: M(a, e) || e };
            } if (typeof t == "string" && (t.indexOf("".concat(c.cssPrefix, "-")) > -1 || t.match(Ia))) {
                let e = it(t.split(" "), { skipLookups: !0 });
                return { prefix: e.prefix || I(), iconName: M(e.prefix, e.iconName) || e.iconName };
            } if (typeof t == "string") {
                let e = I();
                return { prefix: e, iconName: M(e, t) || t };
            } } }, library: Fe, findIconDefinition: Tt, toHtml: V }, q = function () { let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { autoReplaceSvgRoot: e = p } = t; (Object.keys(h.styles).length > 0 || c.autoFetchSvg) && P && c.autoReplaceSvg && _t.dom.i2svg({ node: e }); };
    function cn(t) { ta && (w.FontAwesome || (w.FontAwesome = _t), be(() => { q(), F("bootstrap"); })), h.hooks = s(s({}, h.hooks), {}, { addPack: (e, a) => { h.styles[e] = s(s({}, h.styles[e] || {}), a), K(), q(); }, addPacks: e => { e.forEach(a => { let [n, r] = a; h.styles[n] = s(s({}, h.styles[n] || {}), r); }), K(), q(); }, addShims: e => { h.shims.push(...e), K(), q(); } }); }
    function ot(t, e) { return Object.defineProperty(t, "abstract", { get: e }), Object.defineProperty(t, "html", { get: function () { return t.abstract.map(a => V(a)); } }), Object.defineProperty(t, "node", { get: function () { if (!P)
            return; let a = p.createElement("div"); return a.innerHTML = t.html, a.children; } }), t; }
    function un(t) { let { children: e, main: a, mask: n, attributes: r, styles: i, transform: o } = t; if (Pt(o) && a.found && !n.found) {
        let { width: l, height: u } = a, f = { x: l / u / 2, y: .5 };
        r.style = at(s(s({}, i), {}, { "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em") }));
    } return [{ tag: "svg", attributes: r, children: e }]; }
    function dn(t) { let { prefix: e, iconName: a, children: n, attributes: r, symbol: i } = t, o = i === !0 ? "".concat(e, "-").concat(c.cssPrefix, "-").concat(a) : i; return [{ tag: "svg", attributes: { style: "display: none;" }, children: [{ tag: "symbol", attributes: s(s({}, r), {}, { id: o }), children: n }] }]; }
    function Mt(t) { let { icons: { main: e, mask: a }, prefix: n, iconName: r, transform: i, symbol: o, title: l, maskId: u, titleId: f, extra: d, watchable: g = !1 } = t, { width: m, height: y } = a.found ? a : e, T = ma.includes(n), L = [c.replacementClass, r ? "".concat(c.cssPrefix, "-").concat(r) : ""].filter(U => d.classes.indexOf(U) === -1).filter(U => U !== "" || !!U).concat(d.classes).join(" "), x = { children: [], attributes: s(s({}, d.attributes), {}, { "data-prefix": n, "data-icon": r, class: L, role: d.attributes.role || "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 ".concat(m, " ").concat(y) }) }, O = T && !~d.classes.indexOf("fa-fw") ? { width: "".concat(m / y * 16 * .0625, "em") } : {}; g && (x.attributes[_] = ""), l && (x.children.push({ tag: "title", attributes: { id: x.attributes["aria-labelledby"] || "title-".concat(f || B()) }, children: [l] }), delete x.attributes.title); let v = s(s({}, x), {}, { prefix: n, iconName: r, main: e, mask: a, maskId: u, transform: i, symbol: o, styles: s(s({}, O), d.styles) }), { children: A, attributes: Y } = a.found && e.found ? N("generateAbstractMask", v) || { children: [], attributes: {} } : N("generateAbstractIcon", v) || { children: [], attributes: {} }; return v.children = A, v.attributes = Y, o ? dn(v) : un(v); }
    function Ne(t) { let { content: e, width: a, height: n, transform: r, title: i, extra: o, watchable: l = !1 } = t, u = s(s(s({}, o.attributes), i ? { title: i } : {}), {}, { class: o.classes.join(" ") }); l && (u[_] = ""); let f = s({}, o.styles); Pt(r) && (f.transform = Wa({ transform: r, startCentered: !0, width: a, height: n }), f["-webkit-transform"] = f.transform); let d = at(f); d.length > 0 && (u.style = d); let g = []; return g.push({ tag: "span", attributes: u, children: [e] }), i && g.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }), g; }
    function mn(t) { let { content: e, title: a, extra: n } = t, r = s(s(s({}, n.attributes), a ? { title: a } : {}), {}, { class: n.classes.join(" ") }), i = at(n.styles); i.length > 0 && (r.style = i); let o = []; return o.push({ tag: "span", attributes: r, children: [e] }), a && o.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] }), o; }
    let { styles: Lt } = h;
    function Dt(t) { let e = t[0], a = t[1], [n] = t.slice(4), r = null; return Array.isArray(n) ? r = { tag: "g", attributes: { class: "".concat(c.cssPrefix, "-").concat(wt.GROUP) }, children: [{ tag: "path", attributes: { class: "".concat(c.cssPrefix, "-").concat(wt.SECONDARY), fill: "currentColor", d: n[0] } }, { tag: "path", attributes: { class: "".concat(c.cssPrefix, "-").concat(wt.PRIMARY), fill: "currentColor", d: n[1] } }] } : r = { tag: "path", attributes: { fill: "currentColor", d: n } }, { found: !0, width: e, height: a, icon: r }; }
    let gn = { found: !1, width: 512, height: 512 };
    function pn(t, e) { !bt && !c.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.')); }
    function Rt(t, e) { let a = e; return e === "fa" && c.styleDefault !== null && (e = I()), new Promise((n, r) => { if (a === "fa") {
        let i = Ee(t) || {};
        t = i.iconName || t, e = i.prefix || e;
    } if (t && e && Lt[e] && Lt[e][t]) {
        let i = Lt[e][t];
        return n(Dt(i));
    } pn(t, e), n(s(s({}, gn), {}, { icon: c.showMissingIcons && t ? N("missingIconAbstract") || {} : {} })); }); }
    let Te = () => { }, zt = c.measurePerformance && Z && Z.mark && Z.measure ? Z : { mark: Te, measure: Te }, Q = 'FA "6.7.2"', hn = t => (zt.mark("".concat(Q, " ").concat(t, " begins")), () => _e(t)), _e = t => { zt.mark("".concat(Q, " ").concat(t, " ends")), zt.measure("".concat(Q, " ").concat(t), "".concat(Q, " ").concat(t, " begins"), "".concat(Q, " ").concat(t, " ends")); };
    var jt = { begin: hn, end: _e };
    let st = () => { };
    function Me(t) { return typeof (t.getAttribute ? t.getAttribute(_) : null) == "string"; }
    function bn(t) { let e = t.getAttribute ? t.getAttribute(pt) : null, a = t.getAttribute ? t.getAttribute(ht) : null; return e && a; }
    function yn(t) { return t && t.classList && t.classList.contains && t.classList.contains(c.replacementClass); }
    function vn() { return c.autoReplaceSvg === !0 ? lt.replace : lt[c.autoReplaceSvg] || lt.replace; }
    function xn(t) { return p.createElementNS("http://www.w3.org/2000/svg", t); }
    function An(t) { return p.createElement(t); }
    function Le(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { ceFn: a = t.tag === "svg" ? xn : An } = e; if (typeof t == "string")
        return p.createTextNode(t); let n = a(t.tag); return Object.keys(t.attributes || []).forEach(function (i) { n.setAttribute(i, t.attributes[i]); }), (t.children || []).forEach(function (i) { n.appendChild(Le(i, { ceFn: a })); }), n; }
    function wn(t) { let e = " ".concat(t.outerHTML, " "); return e = "".concat(e, "Font Awesome fontawesome.com "), e; }
    let lt = { replace: function (t) { let e = t[0]; if (e.parentNode)
            if (t[1].forEach(a => { e.parentNode.insertBefore(Le(a), e); }), e.getAttribute(_) === null && c.keepOriginalSource) {
                let a = p.createComment(wn(e));
                e.parentNode.replaceChild(a, e);
            }
            else
                e.remove(); }, nest: function (t) {
            let e = t[0], a = t[1];
            if (~kt(e).indexOf(c.replacementClass))
                return lt.replace(t);
            let n = new RegExp("".concat(c.cssPrefix, "-.*"));
            if (delete a[0].attributes.id, a[0].attributes.class) {
                let i = a[0].attributes.class.split(" ").reduce((o, l) => (l === c.replacementClass || l.match(n) ? o.toSvg.push(l) : o.toNode.push(l), o), { toNode: [], toSvg: [] });
                a[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
            }
            let r = a.map(i => V(i)).join(`
`);
            e.setAttribute(_, ""), e.innerHTML = r;
        } };
    function De(t) { t(); }
    function Re(t, e) { let a = typeof e == "function" ? e : st; if (t.length === 0)
        a();
    else {
        let n = De;
        c.mutateApproach === Ea && (n = w.requestAnimationFrame || De), n(() => { let r = vn(), i = jt.begin("mutate"); t.map(r), i(), a(); });
    } }
    let Yt = !1;
    function ze() { Yt = !0; }
    function Ut() { Yt = !1; }
    let ft = null;
    function je(t) { if (!Qt || !c.observeMutations)
        return; let { treeCallback: e = st, nodeCallback: a = st, pseudoElementsCallback: n = st, observeMutationsRoot: r = p } = t; ft = new Qt(i => { if (Yt)
        return; let o = I(); R(i).forEach(l => { if (l.type === "childList" && l.addedNodes.length > 0 && !Me(l.addedNodes[0]) && (c.searchPseudoElements && n(l.target), e(l.target)), l.type === "attributes" && l.target.parentNode && c.searchPseudoElements && n(l.target.parentNode), l.type === "attributes" && Me(l.target) && ~Ta.indexOf(l.attributeName))
        if (l.attributeName === "class" && bn(l.target)) {
            let { prefix: u, iconName: f } = it(kt(l.target));
            l.target.setAttribute(pt, u || o), f && l.target.setAttribute(ht, f);
        }
        else
            yn(l.target) && a(l.target); }); }), P && ft.observe(r, { childList: !0, attributes: !0, characterData: !0, subtree: !0 }); }
    function kn() { ft && ft.disconnect(); }
    function Pn(t) { let e = t.getAttribute("style"), a = []; return e && (a = e.split(";").reduce((n, r) => { let i = r.split(":"), o = i[0], l = i.slice(1); return o && l.length > 0 && (n[o] = l.join(":").trim()), n; }, {})), a; }
    function Sn(t) { let e = t.getAttribute("data-prefix"), a = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", r = it(kt(t)); return r.prefix || (r.prefix = I()), e && a && (r.prefix = e, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = Ja(r.prefix, t.innerText) || Ft(r.prefix, Ot(t.innerText))), !r.iconName && c.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r; }
    function En(t) { let e = R(t.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), a = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id"); return c.autoA11y && (a ? e["aria-labelledby"] = "".concat(c.replacementClass, "-title-").concat(n || B()) : (e["aria-hidden"] = "true", e.focusable = "false")), e; }
    function On() { return { iconName: null, title: null, titleId: null, prefix: null, transform: k, symbol: !1, mask: { iconName: null, prefix: null, rest: [] }, maskId: null, extra: { classes: [], styles: {}, attributes: {} } }; }
    function Ye(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, { iconName: a, prefix: n, rest: r } = Sn(t), i = En(t), o = Nt("parseNodeAttributes", {}, t), l = e.styleParser ? Pn(t) : []; return s({ iconName: a, title: t.getAttribute("title"), titleId: t.getAttribute("data-fa-title-id"), prefix: n, transform: k, mask: { iconName: null, prefix: null, rest: [] }, maskId: null, symbol: !1, extra: { classes: r, styles: l, attributes: i } }, o); }
    let { styles: Cn } = h;
    function Ue(t) { let e = c.autoReplaceSvg === "nest" ? Ye(t, { styleParser: !1 }) : Ye(t); return ~e.extra.classes.indexOf(ce) ? N("generateLayersText", t, e) : N("generateSvgReplacementMutation", t, e); }
    function In() { return [...ca, ...dt]; }
    function We(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; if (!P)
        return Promise.resolve(); let a = p.documentElement.classList, n = d => a.add("".concat(se, "-").concat(d)), r = d => a.remove("".concat(se, "-").concat(d)), i = c.autoFetchSvg ? In() : te.concat(Object.keys(Cn)); i.includes("fa") || i.push("fa"); let o = [".".concat(ce, ":not([").concat(_, "])")].concat(i.map(d => ".".concat(d, ":not([").concat(_, "])"))).join(", "); if (o.length === 0)
        return Promise.resolve(); let l = []; try {
        l = R(t.querySelectorAll(o));
    }
    catch { } if (l.length > 0)
        n("pending"), r("complete");
    else
        return Promise.resolve(); let u = jt.begin("onTree"), f = l.reduce((d, g) => { try {
        let m = Ue(g);
        m && d.push(m);
    }
    catch (m) {
        bt || m.name === "MissingIcon" && console.error(m);
    } return d; }, []); return new Promise((d, g) => { Promise.all(f).then(m => { Re(m, () => { n("active"), n("complete"), r("pending"), typeof e == "function" && e(), u(), d(); }); }).catch(m => { u(), g(m); }); }); }
    function Fn(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; Ue(t).then(a => { a && Re([a], e); }); }
    function Nn(t) { return function (e) { let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Tt(e || {}), { mask: r } = a; return r && (r = (r || {}).icon ? r : Tt(r || {})), t(n, s(s({}, a), {}, { mask: r })); }; }
    let Tn = function (t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: a = k, symbol: n = !1, mask: r = null, maskId: i = null, title: o = null, titleId: l = null, classes: u = [], attributes: f = {}, styles: d = {} } = e; if (!t)
        return; let { prefix: g, iconName: m, icon: y } = t; return ot(s({ type: "icon" }, t), () => (F("beforeDOMElementCreation", { iconDefinition: t, params: e }), c.autoA11y && (o ? f["aria-labelledby"] = "".concat(c.replacementClass, "-title-").concat(l || B()) : (f["aria-hidden"] = "true", f.focusable = "false")), Mt({ icons: { main: Dt(y), mask: r ? Dt(r.icon) : { found: !1, width: null, height: null, icon: {} } }, prefix: g, iconName: m, transform: s(s({}, k), a), symbol: n, title: o, maskId: i, titleId: l, extra: { attributes: f, styles: d, classes: u } }))); };
    var _n = { mixout() { return { icon: Nn(Tn) }; }, hooks() { return { mutationObserverCallbacks(t) { return t.treeCallback = We, t.nodeCallback = Fn, t; } }; }, provides(t) { t.i2svg = function (e) { let { node: a = p, callback: n = () => { } } = e; return We(a, n); }, t.generateSvgReplacementMutation = function (e, a) { let { iconName: n, title: r, titleId: i, prefix: o, transform: l, symbol: u, mask: f, maskId: d, extra: g } = a; return new Promise((m, y) => { Promise.all([Rt(n, o), f.iconName ? Rt(f.iconName, f.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })]).then(T => { let [L, x] = T; m([e, Mt({ icons: { main: L, mask: x }, prefix: o, iconName: n, transform: l, symbol: u, maskId: d, title: r, titleId: i, extra: g, watchable: !0 })]); }).catch(y); }); }, t.generateAbstractIcon = function (e) { let { children: a, attributes: n, main: r, transform: i, styles: o } = e, l = at(o); l.length > 0 && (n.style = l); let u; return Pt(i) && (u = N("generateAbstractTransformGrouping", { main: r, transform: i, containerWidth: r.width, iconWidth: r.width })), a.push(u || r.icon), { children: a, attributes: n }; }; } }, Mn = { mixout() { return { layer(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { classes: a = [] } = e; return ot({ type: "layer" }, () => { F("beforeDOMElementCreation", { assembler: t, params: e }); let n = []; return t(r => { Array.isArray(r) ? r.map(i => { n = n.concat(i.abstract); }) : n = n.concat(r.abstract); }), [{ tag: "span", attributes: { class: ["".concat(c.cssPrefix, "-layers"), ...a].join(" ") }, children: n }]; }); } }; } }, Ln = { mixout() { return { counter(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { title: a = null, classes: n = [], attributes: r = {}, styles: i = {} } = e; return ot({ type: "counter", content: t }, () => (F("beforeDOMElementCreation", { content: t, params: e }), mn({ content: t.toString(), title: a, extra: { attributes: r, styles: i, classes: ["".concat(c.cssPrefix, "-layers-counter"), ...n] } }))); } }; } }, Dn = { mixout() { return { text(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: a = k, title: n = null, classes: r = [], attributes: i = {}, styles: o = {} } = e; return ot({ type: "text", content: t }, () => (F("beforeDOMElementCreation", { content: t, params: e }), Ne({ content: t, transform: s(s({}, k), a), title: n, extra: { attributes: i, styles: o, classes: ["".concat(c.cssPrefix, "-layers-text"), ...r] } }))); } }; }, provides(t) { t.generateLayersText = function (e, a) { let { title: n, transform: r, extra: i } = a, o = null, l = null; if (Jt) {
            let u = parseInt(getComputedStyle(e).fontSize, 10), f = e.getBoundingClientRect();
            o = f.width / u, l = f.height / u;
        } return c.autoA11y && !n && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, Ne({ content: e.innerHTML, width: o, height: l, transform: r, title: n, extra: i, watchable: !0 })]); }; } };
    let Rn = new RegExp('"', "ug"), Ge = [1105920, 1112319], He = s(s(s(s({}, { FontAwesome: { normal: "fas", 400: "fas" } }), sa), Pa), ba), Wt = Object.keys(He).reduce((t, e) => (t[e.toLowerCase()] = He[e], t), {}), zn = Object.keys(Wt).reduce((t, e) => { let a = Wt[e]; return t[e] = a[900] || [...Object.entries(a)][0][1], t; }, {});
    function jn(t) { let e = t.replace(Rn, ""), a = Va(e, 0), n = a >= Ge[0] && a <= Ge[1], r = e.length === 2 ? e[0] === e[1] : !1; return { value: Ot(r ? e[0] : e), isSecondary: n || r }; }
    function Yn(t, e) { let a = t.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(e), r = isNaN(n) ? "normal" : n; return (Wt[a] || {})[r] || zn[a]; }
    function Xe(t, e) {
        let a = "".concat(Sa).concat(e.replace(":", "-"));
        return new Promise((n, r) => {
            if (t.getAttribute(a) !== null)
                return n();
            let o = R(t.children).filter(m => m.getAttribute(gt) === e)[0], l = w.getComputedStyle(t, e), u = l.getPropertyValue("font-family"), f = u.match(Fa), d = l.getPropertyValue("font-weight"), g = l.getPropertyValue("content");
            if (o && !f)
                return t.removeChild(o), n();
            if (f && g !== "none" && g !== "") {
                let m = l.getPropertyValue("content"), y = Yn(u, d), { value: T, isSecondary: L } = jn(m), x = f[0].startsWith("FontAwesome"), O = Ft(y, T), v = O;
                if (x) {
                    let A = Za(T);
                    A.iconName && A.prefix && (O = A.iconName, y = A.prefix);
                }
                if (O && !L && (!o || o.getAttribute(pt) !== y || o.getAttribute(ht) !== v)) {
                    t.setAttribute(a, v), o && t.removeChild(o);
                    let A = On(), { extra: Y } = A;
                    Y.attributes[gt] = e, Rt(O, y).then(U => {
                        let Qn = Mt(s(s({}, A), {}, { icons: { main: U, mask: Oe() }, prefix: y, iconName: v, extra: Y, watchable: !0 })), Ht = p.createElementNS("http://www.w3.org/2000/svg", "svg");
                        e === "::before" ? t.insertBefore(Ht, t.firstChild) : t.appendChild(Ht), Ht.outerHTML = Qn.map(Jn => V(Jn)).join(`
`), t.removeAttribute(a), n();
                    }).catch(r);
                }
                else
                    n();
            }
            else
                n();
        });
    }
    function Un(t) { return Promise.all([Xe(t, "::before"), Xe(t, "::after")]); }
    function Wn(t) { return t.parentNode !== document.head && !~Oa.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(gt) && (!t.parentNode || t.parentNode.tagName !== "svg"); }
    function Be(t) { if (P)
        return new Promise((e, a) => { let n = R(t.querySelectorAll("*")).filter(Wn).map(Un), r = jt.begin("searchPseudoElements"); ze(), Promise.all(n).then(() => { r(), Ut(), e(); }).catch(() => { r(), Ut(), a(); }); }); }
    var Gn = { hooks() { return { mutationObserverCallbacks(t) { return t.pseudoElementsCallback = Be, t; } }; }, provides(t) { t.pseudoElements2svg = function (e) { let { node: a = p } = e; c.searchPseudoElements && Be(a); }; } };
    let Ve = !1;
    var Hn = { mixout() { return { dom: { unwatch() { ze(), Ve = !0; } } }; }, hooks() { return { bootstrap() { je(Nt("mutationObserverCallbacks", {})); }, noAuto() { kn(); }, watch(t) { let { observeMutationsRoot: e } = t; Ve ? Ut() : je(Nt("mutationObserverCallbacks", { observeMutationsRoot: e })); } }; } };
    let $e = t => { let e = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }; return t.toLowerCase().split(" ").reduce((a, n) => { let r = n.toLowerCase().split("-"), i = r[0], o = r.slice(1).join("-"); if (i && o === "h")
        return a.flipX = !0, a; if (i && o === "v")
        return a.flipY = !0, a; if (o = parseFloat(o), isNaN(o))
        return a; switch (i) {
        case "grow":
            a.size = a.size + o;
            break;
        case "shrink":
            a.size = a.size - o;
            break;
        case "left":
            a.x = a.x - o;
            break;
        case "right":
            a.x = a.x + o;
            break;
        case "up":
            a.y = a.y - o;
            break;
        case "down":
            a.y = a.y + o;
            break;
        case "rotate":
            a.rotate = a.rotate + o;
            break;
    } return a; }, e); };
    var Xn = { mixout() { return { parse: { transform: t => $e(t) } }; }, hooks() { return { parseNodeAttributes(t, e) { let a = e.getAttribute("data-fa-transform"); return a && (t.transform = $e(a)), t; } }; }, provides(t) { t.generateAbstractTransformGrouping = function (e) { let { main: a, transform: n, containerWidth: r, iconWidth: i } = e, o = { transform: "translate(".concat(r / 2, " 256)") }, l = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), f = "rotate(".concat(n.rotate, " 0 0)"), d = { transform: "".concat(l, " ").concat(u, " ").concat(f) }, g = { transform: "translate(".concat(i / 2 * -1, " -256)") }, m = { outer: o, inner: d, path: g }; return { tag: "g", attributes: s({}, m.outer), children: [{ tag: "g", attributes: s({}, m.inner), children: [{ tag: a.icon.tag, children: a.icon.children, attributes: s(s({}, a.icon.attributes), m.path) }] }] }; }; } };
    let Gt = { x: 0, y: 0, width: "100%", height: "100%" };
    function Ke(t) { let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0; return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t; }
    function Bn(t) { return t.tag === "g" ? t.children : [t]; }
    var Vn = { hooks() { return { parseNodeAttributes(t, e) { let a = e.getAttribute("data-fa-mask"), n = a ? it(a.split(" ").map(r => r.trim())) : Oe(); return n.prefix || (n.prefix = I()), t.mask = n, t.maskId = e.getAttribute("data-fa-mask-id"), t; } }; }, provides(t) { t.generateAbstractMask = function (e) { let { children: a, attributes: n, main: r, mask: i, maskId: o, transform: l } = e, { width: u, icon: f } = r, { width: d, icon: g } = i, m = Ua({ transform: l, containerWidth: d, iconWidth: u }), y = { tag: "rect", attributes: s(s({}, Gt), {}, { fill: "white" }) }, T = f.children ? { children: f.children.map(Ke) } : {}, L = { tag: "g", attributes: s({}, m.inner), children: [Ke(s({ tag: f.tag, attributes: s(s({}, f.attributes), m.path) }, T))] }, x = { tag: "g", attributes: s({}, m.outer), children: [L] }, O = "mask-".concat(o || B()), v = "clip-".concat(o || B()), A = { tag: "mask", attributes: s(s({}, Gt), {}, { id: O, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" }), children: [y, x] }, Y = { tag: "defs", children: [{ tag: "clipPath", attributes: { id: v }, children: Bn(g) }, A] }; return a.push(Y, { tag: "rect", attributes: s({ fill: "currentColor", "clip-path": "url(#".concat(v, ")"), mask: "url(#".concat(O, ")") }, Gt) }), { children: a, attributes: n }; }; } }, $n = { provides(t) { let e = !1; w.matchMedia && (e = w.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function () { let a = [], n = { fill: "currentColor" }, r = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" }; a.push({ tag: "path", attributes: s(s({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" }) }); let i = s(s({}, r), {}, { attributeName: "opacity" }), o = { tag: "circle", attributes: s(s({}, n), {}, { cx: "256", cy: "364", r: "28" }), children: [] }; return e || o.children.push({ tag: "animate", attributes: s(s({}, r), {}, { attributeName: "r", values: "28;14;28;28;14;28;" }) }, { tag: "animate", attributes: s(s({}, i), {}, { values: "1;0;1;1;0;1;" }) }), a.push(o), a.push({ tag: "path", attributes: s(s({}, n), {}, { opacity: "1", d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z" }), children: e ? [] : [{ tag: "animate", attributes: s(s({}, i), {}, { values: "1;0;0;0;0;1;" }) }] }), e || a.push({ tag: "path", attributes: s(s({}, n), {}, { opacity: "0", d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z" }), children: [{ tag: "animate", attributes: s(s({}, i), {}, { values: "0;0;1;1;0;0;" }) }] }), { tag: "g", attributes: { class: "missing" }, children: a }; }; } }, Kn = { hooks() { return { parseNodeAttributes(t, e) { let a = e.getAttribute("data-fa-symbol"), n = a === null ? !1 : a === "" ? !0 : a; return t.symbol = n, t; } }; } }, qn = [Ha, _n, Mn, Ln, Dn, Gn, Hn, Xn, Vn, $n, Kn];
    fn(qn, { mixoutsTo: _t }), Ra(cn);
})();
/*! Bundled license information:

@fortawesome/fontawesome-free/js/fontawesome.js:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
