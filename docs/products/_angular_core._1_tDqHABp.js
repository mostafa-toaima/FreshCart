import { a as di, c as tp, d as np, e as op, g as rp, h as ip, i as sp, j as ap, l as cp, o as Ec } from "@nf-internal/chunk-W5FDN2D3";
import { a as VC } from "@nf-internal/chunk-IDI7FQMM";
import { $ as Te, $a as To, $b as T, $c as mc, A as $r, Aa as q, Ab as ae, Ac as oe, B as Ur, Ba as ie, Bb as Wa, Bc as Dt, C as ka, Ca as se, Cb as Xr, Cc as _e, D as ht, Da as te, Db as Vf, Dc as lc, E as Rt, Ea as xt, Eb as _o, Ec as uc, F as M, Fa as L, Fb as ei, Fc as dc, G as Ie, Ga as A, Gb as ti, Gc as fc, H as _f, Ha as Qe, Hb as ni, Hc as So, I as xa, Ia as C, Ib as Ga, Ic as xe, J as kt, Ja as yt, Jb as Ft, Jc as wC, K as wf, Ka as Eo, Kb as Bf, Kc as Jf, L as Ae, La as Do, Lb as $f, Lc as De, M as Wr, Ma as Q, Mb as Uf, Mc as bC, N as D, Na as Ze, Nb as Wf, Nc as fn, O as Oa, Oa as cn, Ob as Gf, Oc as ci, P as sn, Pa as je, Pb as qa, Pc as Ct, Q as Gr, Qa as ln, Qb as oi, Qc as pc, R as bf, Ra as Va, Rb as wo, Rc as SC, S as Re, Sa as Ba, Sb as za, Sc as Xf, T as Pa, Ta as Jr, Tb as Qa, Tc as AC, U as mo, Ua as Co, Ub as qf, Uc as hc, V as yo, Va as Ne, Vb as Za, Vc as ep, W as La, Wa as Ot, Wb as Ya, Wc as gc, X as Sf, Xa as Ye, Xb as g, Xc as RC, Y as vo, Ya as I, Yb as N, Yc as li, Z as qr, Za as Ee, Zb as Ka, Zc as Ke, _ as zr, _a as ke, _b as Ja, _c as pn, a as gC, aa as P, ab as Pt, ac as zf, ad as ui, b as mC, ba as gt, bb as F, bc as dn, bd as Tt, c as jr, ca as TC, cb as Y, cc as Ve, cd as yc, d as _, da as an, db as K, dc as Xa, dd as Ao, e as Tf, ea as Qr, eb as $a, ec, ed as vc, f as ve, fa as W, fb as ge, fc as tc, fd as Ic, g as Sa, ga as Me, gb as un, gc as nc, gd as kC, h as Mf, ha as Fe, hb as me, hc as oc, hd as xC, i as on, ia as Io, ib as He, ic as ue, id as OC, j as Hr, ja as ze, jb as Ua, jc as Be, jd as PC, k as yC, ka as MC, kb as xf, kc as rc, kd as LC, l as Aa, la as NC, lb as vt, lc as de, ld as FC, m as U, ma as Fa, mb as Of, mc as $e, md as jC, n as Vr, na as Zr, nb as Pf, nc as Qf, nd as HC, o as Nf, oa as Af, ob as k, oc as ic, p as V, pa as Rf, pb as Mo, pc as Zf, q as vC, qa as Yr, qb as Lt, qc as Yf, r as go, ra as mt, rb as ne, rc as sc, s as IC, sa as ja, sb as Lf, sc as ri, t as EC, ta as kf, tb as It, tc as ii, u as Br, ua as Kr, ub as Et, uc as bo, v as Ra, va as Ha, vb as No, vc as ac, w, wa as _C, wb as le, wc as si, x as DC, xa as H, xb as Ff, xc as cc, y as CC, ya as y, yb as jf, yc as ai, z as rn, za as b, zb as Hf, zc as Kf } from "@nf-internal/chunk-GR2Q6GQB";
import { b as hC } from "@nf-internal/chunk-AVHZ3DAJ";
import { B as wa, E as ba, a as pt, b as R, c as Ef, f as _a, g as Pr, n as po, p as Lr, r as Fr, s as ho, w as Df, x as Cf } from "@nf-internal/chunk-2UHUP2NL";
import { a as G, b as Le, e as fo } from "@nf-internal/chunk-JKOY2XUY";
import { Subject as Zl, Subscription as Yl } from "rxjs";
import { setActiveConsumer as lp } from "@angular/core/primitives/signals";
import { map as BC } from "rxjs/operators";
function We(e) { return { toString: e }.toString(); }
var mn = "__annotations__", yn = "__parameters__", vn = "__prop__metadata__";
function cr(e, t, n, o, r) { return We(() => { let i = Kl(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(mn) ? u[mn] : Object.defineProperty(u, mn, { value: [] })[mn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function Kl(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Wn(e, t, n) { return We(() => { let o = Kl(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(yn) ? c[yn] : Object.defineProperty(c, yn, { value: [] })[yn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function rt(e, t, n, o) { return We(() => { let r = Kl(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(vn) ? d[vn] : Object.defineProperty(d, vn, { value: {} })[vn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Dh = sn(Wn("Inject", e => ({ token: e })), -1), Ch = sn(Wn("Optional"), 8), Th = sn(Wn("Self"), 2), Mh = sn(Wn("SkipSelf"), 4), Nh = sn(Wn("Host"), 1);
function X(e) { let t = ve.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var up = { \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: go, \u0275\u0275inject: Ae, \u0275\u0275invalidFactoryDep: Wr, resolveForwardRef: U }, _h = Function;
function ko(e) { return typeof e == "function"; }
var $C = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, UC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, WC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, GC = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function qC(e) { return $C.test(e) || GC.test(e) || UC.test(e) && !WC.test(e); }
var ki = class {
    _reflect;
    constructor(t) { this._reflect = t || ve.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = yo(n.length) : o = yo(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (qC(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Dc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(yn) && t[yn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : yo(t.length); }
    parameters(t) { if (!ko(t))
        return []; let n = fi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Dc(t.decorators) : t.hasOwnProperty(mn) ? t[mn] : null; }
    annotations(t) { if (!ko(t))
        return []; let n = fi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Dc(o[i]); }), r;
    } return t.hasOwnProperty(vn) ? t[vn] : null; }
    propMetadata(t) { if (!ko(t))
        return {}; let n = fi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return ko(t) ? this._ownPropMetadata(t, fi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof _h && n in t.prototype; }
};
function Dc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function fi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var xi = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function wh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var bh = (() => { let e = () => Sh; return e.ngInherit = !0, e; })();
function Sh(e) { return e.type.prototype.ngOnChanges && (e.setInput = QC), zC; }
function zC() { let e = Rh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Te)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function QC(e, t, n, o, r) { let i = this.declaredInputs[o], s = Rh(e) || ZC(e, { previous: Te, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new xi(l && l.currentValue, n, c === Te), wh(e, t, r, n); }
var Ah = "__ngSimpleChanges__";
function Rh(e) { return e[Ah] || null; }
function ZC(e, t) { return e[Ah] = t; }
var dp = [];
var x = function (e, t = null, n) { for (let o = 0; o < dp.length; o++) {
    let r = dp[o];
    r(e, t, n);
} };
function YC(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Sh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function kh(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ci(e, t, n) { xh(e, t, 3, n); }
function Ti(e, t, n, o) { (e[b] & 3) === n && xh(e, t, n, o); }
function Cc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function xh(e, t, n, o) { let r = o !== void 0 ? e[cn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[cn] += 65536), (a < i || i == -1) && (KC(e, n, t, c), e[cn] = (e[cn] & 4294901760) + c + 2), c++; }
function fp(e, t) { x(4, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), x(5, e, t);
} }
function KC(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[cn] >> 16 && (e[b] & 3) === t && (e[b] += 16384, fp(a, i)) : fp(a, i); }
var Tn = -1, Ut = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function ls(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Oh(e) { return !!(e.type & 128); }
function JC(e) { return (e.flags & 8) !== 0; }
function XC(e) { return (e.flags & 16) !== 0; }
function eT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        tT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Ph(e) { return e === 3 || e === 4 || e === 6; }
function tT(e) { return e.charCodeAt(0) === 64; }
function Rn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? pp(e, n, r, null, t[++o]) : pp(e, n, r, null, null));
        }
    } return e; }
function pp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function Lh(e) { return e !== Tn; }
function Oi(e) { return e & 32767; }
function nT(e) { return e >> 16; }
function Pi(e, t) { let n = nT(e), o = t; for (; n > 0;)
    o = o[Do], n--; return o; }
var zc = !0;
function Li(e) { let t = zc; return zc = e, t; }
var oT = 256, Fh = oT - 1, jh = 5, rT = 0, Ue = {};
function iT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(Rt) && (o = n[Rt]), o == null && (o = n[Rt] = rT++); let r = o & Fh, i = 1 << r; t.data[e + (r >> jh)] |= i; }
function Fi(e, t) { let n = Hh(e, t); if (n !== -1)
    return n; let o = t[y]; o.firstCreatePass && (e.injectorIndex = t.length, Tc(o.data, e), Tc(t, null), Tc(o.blueprint, null)); let r = Jl(e, t), i = e.injectorIndex; if (Lh(r)) {
    let s = Oi(r), a = Pi(r, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Tc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Hh(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Jl(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Gh(r), o === null)
        return Tn;
    if (n++, r = r[Do], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return Tn; }
function Qc(e, t, n) { iT(e, t, n); }
function sT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Ph(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Vh(e, t, n) { if (n & 8 || e !== void 0)
    return e; xa(t, "NodeInjector"); }
function Bh(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[A], i = kt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : wf(t, o, n & 8);
    }
    finally {
        kt(i);
    }
} return Vh(o, t, n); }
function $h(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = uT(e, t, n, o, Ue);
        if (s !== Ue)
            return s;
    }
    let i = Uh(e, t, n, o, Ue);
    if (i !== Ue)
        return i;
} return Bh(t, n, o, r); }
function Uh(e, t, n, o, r) { let i = cT(n); if (typeof i == "function") {
    if (!ac(t, e, o))
        return o & 1 ? Vh(r, n, o) : Bh(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            xa(n);
        else
            return s;
    }
    finally {
        cc();
    }
}
else if (typeof i == "number") {
    let s = null, a = Hh(e, t), c = Tn, l = o & 1 ? t[Q][se] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? Jl(e, t) : t[a + 8], c === Tn || !gp(o, !1) ? a = -1 : (s = t[y], a = Oi(c), t = Pi(c, t))); a !== -1;) {
        let u = t[y];
        if (hp(i, a, u.data)) {
            let d = aT(a, t, n, s, o, l);
            if (d !== Ue)
                return d;
        }
        c = t[a + 8], c !== Tn && gp(o, t[y].data[a + 8] === l) && hp(i, a, t) ? (s = u, a = Oi(c), t = Pi(c, t)) : a = -1;
    }
} return r; }
function aT(e, t, n, o, r, i) { let s = t[y], a = s.data[e + 8], c = o == null ? ge(a) && zc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Mi(a, s, n, c, l); return u !== null ? qo(t, s, u, a, r) : Ue; }
function Mi(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && me(p) && p.type === n)
        return c;
} return null; }
function qo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Ut) {
    let a = i;
    if (a.resolving) {
        let p = Ie(s[n]);
        throw _f(p);
    }
    let c = Li(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? kt(a.injectImpl) : null, f = ac(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && YC(n, s[n], t);
    }
    finally {
        d !== null && kt(d), Li(c), a.resolving = !1, cc();
    }
} return i; }
function cT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(Rt) ? e[Rt] : void 0; return typeof t == "number" ? t >= 0 ? t & Fh : lT : t; }
function hp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> jh)] & o); }
function gp(e, t) { return !(e & 2) && !(e & 1 && t); }
var Nt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return $h(this._tNode, this._lView, t, Oa(o), n); }
};
function lT() { return new Nt(T(), g()); }
function Wh(e) { return We(() => { let t = e.prototype.constructor, n = t[ht] || Zc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ht] || Zc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Zc(e) { return Vr(e) ? () => { let t = Zc(U(e)); return t && t(); } : Gr(e); }
function uT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !He(s);) {
    let a = Uh(i, s, n, o | 2, Ue);
    if (a !== Ue)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Va];
        if (l) {
            let u = l.get(n, Ue, o);
            if (u !== Ue)
                return u;
        }
        c = Gh(s), s = s[Do];
    }
    i = c;
} return r; }
function Gh(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[se] : null; }
function us(e) { return sT(T(), e); }
var qh = Wn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => us(e) })), mp = null;
function Xl() { return mp = mp || new ki; }
function ds(e) { return zh(Xl().parameters(e)); }
function zh(e) { return e.map(t => dT(t)); }
function dT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Ch || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Mh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Th || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Nh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Dh)
            t.token = o.token;
        else if (o instanceof qh) {
            if (o.attributeName === void 0)
                throw new _(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function fT(e, t) { let n = null, o = null; e.hasOwnProperty(Br) || Object.defineProperty(e, Br, { get: () => (n === null && (n = X({ usage: 0, kind: "injectable", type: e }).compileInjectable(up, `ng:///${e.name}/\u0275prov.js`, mT(e, t))), n) }), e.hasOwnProperty(ht) || Object.defineProperty(e, ht, { get: () => { if (o === null) {
        let r = X({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(up, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: ds(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var pT = Sa({ provide: String, useValue: Sa });
function yp(e) { return e.useClass !== void 0; }
function hT(e) { return pT in e; }
function vp(e) { return e.useFactory !== void 0; }
function gT(e) { return e.useExisting !== void 0; }
function mT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (yp(n) || vp(n)) && n.deps !== void 0 && (o.deps = zh(n.deps)), yp(n) ? o.useClass = n.useClass : hT(n) ? o.useValue = n.useValue : vp(n) ? o.useFactory = n.useFactory : gT(n) && (o.useExisting = n.useExisting), o; }
var yT = cr("Injectable", void 0, void 0, void 0, (e, t) => fT(e, t));
function vT() { return Gn(T(), g()); }
function Gn(e, t) { return new lr(ne(e, t)); }
var lr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = vT;
} return e; })();
function Qh(e) { return e instanceof lr ? e.nativeElement : e; }
function IT() { return this._results[Symbol.iterator](); }
var ji = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Zl; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Re(t); (this._changesDetected = !bf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = IT;
}, qn = "ngSkipHydration", ET = "ngskiphydration";
function eu(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === ET)
        return !0;
} return !1; }
function Zh(e) { return e.hasAttribute(qn); }
function zo(e) { return (e.flags & 128) === 128; }
function zn(e) { if (zo(e))
    return !0; let t = e.parent; for (; t;) {
    if (zo(e) || eu(t))
        return !0;
    t = t.parent;
} return !1; }
function Yh(e) { return zo(e) || eu(e) || zn(e); }
var fs = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(fs || {}), ps = new Map, DT = 0;
function CT() { return DT++; }
function TT(e) { ps.set(e[ln], e); }
function Kh(e) { return ps.get(e) || null; }
function Yc(e) { ps.delete(e[ln]); }
function MT() { return ps; }
var Hi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Kh(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ye(e) { let t = Ni(e); if (t) {
    if (Y(t)) {
        let n = t, o, r, i;
        if (Xh(e)) {
            if (o = wT(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (NT(e)) {
            if (o = bT(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = eg(o, n);
        }
        else if (o = Ep(n, e), o == -1)
            return null;
        let s = k(n[o]), a = Ni(s), c = a && !Array.isArray(a) ? a : Ip(n, o, s);
        if (r && c.component === void 0 && (c.component = r, we(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                we(i[l], c);
        }
        we(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ni(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Ep(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = Ip(i, s, a);
                we(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Ip(e, t, n) { return new Hi(e[ln], t, n); }
var Kc = "__ngContext__";
function we(e, t) { Y(t) ? (e[Kc] = t[ln], TT(t)) : e[Kc] = t; }
function Ni(e) { let t = e[Kc]; return typeof t == "number" ? Kh(t) : t || null; }
function Jh(e) { let t = Ni(e); return t ? Y(t) ? t : t.lView : null; }
function Xh(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function NT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Ep(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function _T(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function wT(e, t) { let n = e[y].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (le(r, e)[L] === t)
            return r;
    }
else if (le(I, e)[L] === t)
    return I; return -1; }
function bT(e, t) { let n = e[y].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = _T(n);
} return -1; }
function eg(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return P; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Xh(i) || o.push(i);
} return o; }
function ST(e, t) { let n = t[y].data[e]; return ge(n) ? t[n.directiveStart + n.componentOffset] : null; }
function AT(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function tg(e) { return og(e[yt]); }
function ng(e) { return og(e[ie]); }
function og(e) { for (; e !== null && !K(e);)
    e = e[ie]; return e; }
function Dp(e) { let t = ye(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = ST(t.nodeIndex, n);
} return t.component; }
function RT(e) { BT(e); let t = ye(e), n = t ? t.lView : null; return n === null ? null : n[L]; }
function kT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[y].type === 2 && (o = Ft(n));)
    n = o; return He(n) ? null : n[L]; }
function xT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return De.NULL; let o = n[y].data[t.nodeIndex]; return new Nt(o, n); }
function OT(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    VT(l) && (l = l.type), i.push(l);
} return i; }
function PT(e) { if (e instanceof Text)
    return []; let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[y], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = eg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var rg = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(rg || {}), ig = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(ig || {}), sg = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(sg || {});
function LT(e) { let t = ye(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = AT(n, t.nodeIndex);
} return t.localRefs || {}; }
function FT(e) { return ye(e).native; }
function jT(e) { let t = ye(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[y], r = n[xt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(HT), s; }
function HT(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function VT(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function BT(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Jc;
function $T(e) { Jc = e; }
function it() { if (Jc !== void 0)
    return Jc; if (typeof document < "u")
    return document; throw new _(210, !1); }
var st = new w("", { providedIn: "root", factory: () => UT }), UT = "ng", tu = new w(""), WT = new w("", { providedIn: "platform", factory: () => "unknown" }), GT = new w(""), qT = new w(""), zT = new w("", { providedIn: "root", factory: () => it().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), ag = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, QT = new w("", { providedIn: "root", factory: () => ag });
function ZT(e) { return e; }
function YT() { let e = new Jt; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = cg(it(), D(st))), e; }
var Jt = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: YT });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function cg(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var nu = "h", ou = "b", lg = "f", ug = "n", ur = "e", hs = "t", Qn = "c", dr = "x", tt = "r", gs = "i", fr = "n", Zn = "d", ms = "l", ys = "di", pr = "s", ru = "p", vs = "t", Xt = new w(""), dg = !1, iu = new w("", { providedIn: "root", factory: () => dg }), su = new w(""), Is = new w(""), au = !1, cu = new w(""), hr = new w("", { providedIn: "root", factory: () => new Map }), KT = new w("");
var Vi = { passive: !0, capture: !0 }, Mc = new WeakMap, Nc = new WeakMap, In = new WeakMap, Bi = ["click", "keydown"], $i = ["mouseenter", "mouseover", "focusin"], hn = null, _c = 0, Qo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function fg(e, t) { let n = Nc.get(e); if (!n) {
    n = new Qo, Nc.set(e, n);
    for (let o of Bi)
        e.addEventListener(o, n.listener, Vi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Nc.delete(e);
    for (let i of Bi)
        e.removeEventListener(i, r, Vi);
} }; }
function pg(e, t) { let n = Mc.get(e); if (!n) {
    n = new Qo, Mc.set(e, n);
    for (let o of $i)
        e.addEventListener(o, n.listener, Vi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of $i)
        e.removeEventListener(i, r, Vi);
    Mc.delete(e);
} }; }
function JT() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && In.has(t.target) && In.get(t.target).listener(); }); }
function XT(e, t, n) { let o = In.get(e); return hn = hn || n(), o || (o = new Qo, hn.observe(e), In.set(e, o), _c++), o.callbacks.add(t), () => { In.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (hn?.unobserve(e), In.delete(e), _c--), _c === 0 && (hn?.disconnect(), hn = null)); }; }
var Yn = "ngb";
function lu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(di.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(di.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Yn, i); }
var hg = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, uu = (e, t) => { let n = e, o = n.getAttribute(Yn) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function eM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(du);
} }
var du = e => { e.removeAttribute(di.JSACTION), e.removeAttribute(Yn), e.__jsaction_fns = void 0; }, fu = new w("", { providedIn: "root", factory: () => ({}) });
function pu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var Xc = new Map;
function gg(e, t) { return Xc.set(e, t), () => Xc.delete(e); }
var Cp = !1, mg = (e, t, n, o) => { };
function tM(e, t, n, o) { mg(e, t, n, o); }
function yg() { Cp || (mg = (e, t, n, o) => { let r = e[A].get(st); Xc.get(r)?.(t, n, o); }, Cp = !0); }
var at = new w(""), vg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(hr);
    contract = D(fu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { eM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = V({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Kn(e) { return (e.flags & 32) === 32; }
var Ig = "__nghData__", Es = Ig, Eg = "__nghDeferData__", Ds = Eg;
function nM(e) { return e === Ig || e === Eg; }
var Mn = "ngh", Dg = "nghm", Cg = () => null;
function oM(e, t, n = !1) { let o = e.getAttribute(Mn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Jt, null, { optional: !0 });
    u !== null && (c = u.get(Es, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Cs(l, 0, e.nextSibling)), a ? e.setAttribute(Mn, a) : e.removeAttribute(Mn), l; }
function Tg() { Cg = oM; }
function Mg(e, t, n = !1) { return Cg(e, t, n); }
function hu(e) { let t = e._lView; return t[y].type === 2 ? null : (He(t) && (t = t[I]), t); }
function rM(e) { return e.textContent?.replace(/\s/gm, ""); }
function iM(e) { let t = it(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = rM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Ng = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Ng || {}), sM = "__ngDebugHydrationInfo__";
function aM(e) { return e[sM] ?? null; }
function Cs(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function el(e, t) { return e.segmentHeads?.[t] ?? null; }
function gr(e) { return e.get(cu, !1, { optional: !0 }); }
var cM = !1;
function lM() { cM = !1; }
function _g(e, t) { let n = e.data, o = n[ur]?.[t] ?? null; return o === null && n[Qn]?.[t] && (o = gu(e, t)), o; }
function uM(e, t) { return e.data[ur]?.[t] !== void 0; }
function wg(e, t) { return e.data[Qn]?.[t] ?? null; }
function gu(e, t) { let n = wg(e, t) ?? [], o = 0; for (let r of n)
    o += r[tt] * (r[dr] ?? 1); return o; }
function bg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Zn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Ts(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Zn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!bg(e)?.has(t); }
function Ms(e, t) { let n = e[te]; return n !== null && !wo() && !Kn(t) && !Ts(n, t.index - I); }
function mu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Sg(e) { let t = []; return e !== null && (e.has(4) && t.push(...$i), e.has(3) && t.push(...Bi)), t; }
function dM(e, t) { let n = t.get(at), r = t.get(Jt).get(Ds, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][ru];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function fM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [$i.join(":;"), Bi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Ag(e, t) { let n = fM(e), o = t.get(hr); for (let r of n)
    uu(r, o); }
var Rg = () => ({});
function pM(e) { let t = e.get(Jt, null, { optional: !0 }); return t !== null ? t.get(Ds, {}) : {}; }
function kg() { Rg = pM; }
function hM(e) { return Rg(e); }
function gM(e) { return typeof e == "object" && e.trigger === 5; }
function mM(e) { return e[vs]?.find(n => gM(n))?.delay ?? null; }
function wc(e, t) { return e[vs]?.includes(t) ?? !1; }
function yM(e) { return { data: e, hydrate: { idle: wc(e, 0), immediate: wc(e, 1), timer: mM(e), viewport: wc(e, 2) } }; }
function xg(e) { let t = hM(e), n = new Map; for (let o in t)
    n.set(o, yM(t[o])); return n; }
function bc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Dg; }
function Tp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function Og(e) { for (let o of e.body.childNodes)
    if (bc(o))
        return; let t = Tp(e.body.previousSibling); if (bc(t))
    return; let n = Tp(e.head.lastChild); if (!bc(n))
    throw new _(-507, !1); }
function Pg(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                bo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function tl(e, t, n) { bo(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function yu(e, t, n) { if ($a(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var nt = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(nt || {}), pi;
function Lg() { if (pi === void 0 && (pi = null, ve.trustedTypes))
    try {
        pi = ve.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return pi; }
function Jn(e) { return Lg()?.createHTML(e) || e; }
function vM(e) { return Lg()?.createScriptURL(e) || e; }
var hi;
function vu() { if (hi === void 0 && (hi = null, ve.trustedTypes))
    try {
        hi = ve.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return hi; }
function Mp(e) { return vu()?.createHTML(e) || e; }
function Np(e) { return vu()?.createScript(e) || e; }
function _p(e) { return vu()?.createScriptURL(e) || e; }
var ot = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${jr})`; }
}, nl = class extends ot {
    getTypeName() { return "HTML"; }
}, ol = class extends ot {
    getTypeName() { return "Style"; }
}, rl = class extends ot {
    getTypeName() { return "Script"; }
}, il = class extends ot {
    getTypeName() { return "URL"; }
}, sl = class extends ot {
    getTypeName() { return "ResourceURL"; }
};
function ct(e) { return e instanceof ot ? e.changingThisBreaksApplicationSecurity : e; }
function Xn(e, t) { let n = Fg(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${jr})`);
} return n === t; }
function Fg(e) { return e instanceof ot && e.getTypeName() || null; }
function IM(e) { return new nl(e); }
function EM(e) { return new ol(e); }
function DM(e) { return new rl(e); }
function CM(e) { return new il(e); }
function TM(e) { return new sl(e); }
function jg(e) { let t = new cl(e); return MM() ? new al(t) : t; }
var al = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Jn(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, cl = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Jn(t), n; }
};
function MM() { try {
    return !!new window.DOMParser().parseFromString(Jn(""), "text/html");
}
catch {
    return !1;
} }
var NM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ns(e) { return e = String(e), e.match(NM) ? e : "unsafe:" + e; }
function lt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function mr(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Hg = lt("area,br,col,hr,img,wbr"), Vg = lt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Bg = lt("rp,rt"), _M = mr(Bg, Vg), wM = mr(Vg, lt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), bM = mr(Bg, lt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ll = mr(Hg, wM, bM, _M), Iu = lt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), SM = lt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), AM = lt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), $g = mr(Iu, SM, AM), RM = lt("script,style,template"), ul = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = OM(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = xM(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = wp(t).toLowerCase(); if (!ll.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !RM.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!$g.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Iu[a] && (c = Ns(c)), this.buf.push(" ", s, '="', bp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = wp(t).toLowerCase(); ll.hasOwnProperty(n) && !Hg.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(bp(t)); }
};
function kM(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function xM(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Ug(t); return t; }
function OM(e) { let t = e.firstChild; if (t && kM(e, t))
    throw Ug(t); return t; }
function wp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Ug(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var PM = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, LM = /([^\#-~ |!])/g;
function bp(e) { return e.replace(/&/g, "&amp;").replace(PM, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(LM, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var gi;
function Wg(e, t) { let n = null; try {
    gi = gi || jg(e);
    let o = t ? String(t) : "";
    n = gi.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = gi.getInertBodyElement(o);
    } while (o !== i);
    let a = new ul().sanitizeChildren(dl(n) || n);
    return Jn(a);
}
finally {
    if (n) {
        let o = dl(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function dl(e) { return "content" in e && FM(e) ? e.content : null; }
function FM(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var en = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(en || {});
function Gg(e) { let t = yr(); return t ? Mp(t.sanitize(en.HTML, e) || "") : Xn(e, "HTML") ? Mp(ct(e)) : Wg(it(), M(e)); }
function qg(e) { let t = yr(); return t ? t.sanitize(en.STYLE, e) || "" : Xn(e, "Style") ? ct(e) : M(e); }
function Eu(e) { let t = yr(); return t ? t.sanitize(en.URL, e) || "" : Xn(e, "URL") ? ct(e) : Ns(M(e)); }
function Du(e) { let t = yr(); if (t)
    return _p(t.sanitize(en.RESOURCE_URL, e) || ""); if (Xn(e, "ResourceURL"))
    return _p(ct(e)); throw new _(904, !1); }
function zg(e) { let t = yr(); if (t)
    return Np(t.sanitize(en.SCRIPT, e) || ""); if (Xn(e, "Script"))
    return Np(ct(e)); throw new _(905, !1); }
function Qg(e) { return Jn(e[0]); }
function Zg(e) { return vM(e[0]); }
function jM(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? Du : Eu; }
function Yg(e, t, n) { return jM(t, n)(e); }
function yr() { let e = g(); return e && e[Qe].sanitizer; }
var HM = /^>|^->|<!--|-->|--!>|<!-$/g, VM = /(<|>)/g, BM = "\u200B$1\u200B";
function $M(e) { return e.replace(HM, t => t.replace(VM, BM)); }
function UM() { return ze([]); }
var WM = { name: "custom-elements" }, GM = { name: "no-errors-schema" }, Kg = !1;
function qM(e) { Kg = e; }
function zM() { return Kg; }
var Jg = !1;
function QM(e) { Jg = e; }
function ZM() { return Jg; }
function Xg(e) { return e.ownerDocument.defaultView; }
function em(e) { return e.ownerDocument; }
function Cu(e) { return e.ownerDocument.body; }
var YM = "\uFFFD";
function En(e) { return e instanceof Function ? e() : e; }
function KM(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var tm = "ng-template";
function JM(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && KM(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Tu(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Tu(e) { return e.type === 4 && e.value !== tm; }
function XM(e, t, n) { let o = e.type === 4 && !n ? tm : e.value; return t === o; }
function eN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? oN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Oe(o) && !Oe(c))
            return !1;
        if (s && Oe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !XM(e, c, n) || c === "" && t.length === 1) {
                if (Oe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !JM(e, r, c, n)) {
                if (Oe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = tN(c, r, Tu(e), n);
            if (u === -1) {
                if (Oe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Oe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Oe(o) || s; }
function Oe(e) { return (e & 1) === 0; }
function tN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return rN(t, e); }
function nm(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (eN(e, t[o], n))
        return !0; return !1; }
function nN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function oN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Ph(n))
        return t;
} return e.length; }
function rN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function iN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Sp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function sN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Oe(s) && (t += Sp(i, r), r = ""), o = s, i = i || !Oe(o);
    n++;
} return r !== "" && (t += Sp(i, r)), t; }
function aN(e) { return e.map(sN).join(","); }
function cN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Oe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var O = {};
function Mu(e, t) { return e.createText(t); }
function om(e, t, n) { e.setValue(t, n); }
function Nu(e, t) { return e.createComment($M(t)); }
function _s(e, t, n) { return e.createElement(t, n); }
function Wt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function rm(e, t, n) { e.appendChild(t, n); }
function Ap(e, t, n, o, r) { o !== null ? Wt(e, t, n, o, r) : rm(e, t, n); }
function vr(e, t, n, o) { e.removeChild(null, t, n, o); }
function im(e) { e.textContent = ""; }
function lN(e, t, n) { e.setAttribute(t, "style", n); }
function uN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function sm(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && eT(e, t, o), r !== null && uN(e, t, r), i !== null && lN(e, t, i); }
function _u(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = dN(d, f), h = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function dN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : O); return n; }
function am(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = _u(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function ws(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[H] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), Wa(d), d[q] = d[Do] = e, d[L] = n, d[Qe] = s || e && e[Qe], d[C] = a || e && e[C], d[A] = c || e && e[A] || null, d[se] = i, d[ln] = CT(), d[te] = u, d[Va] = l, d[Q] = t.type == 2 ? e[Q] : d, d; }
function fN(e, t, n) { let o = ne(t, e), r = am(n), i = e[Qe].rendererFactory, s = bu(e, ws(e, r, null, wu(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function wu(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Ir(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function bu(e, t) { return e[yt] ? e[Eo][ie] = t : e[yt] = t, e[Eo] = t, t; }
function cm(e = 1) { lm(N(), g(), oe() + e, !1); }
function lm(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ci(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ti(t, i, 0, n);
    } Dt(n); }
var bs = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(bs || {});
function Zo(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & bs.SignalBased) !== 0 && (c = t[i][pt]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : wh(t, c, i, o);
}
finally {
    R(r);
} }
var Ui = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Ui || {}), fl;
function Su(e, t) { return fl(e, t); }
function pN(e) { fl === void 0 && (fl = e()); }
function Wi(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function Nn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function hN(e) { let t = Nn(e, "transition-property"), n = Nn(e, "transition-duration"), o = Nn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Wi(o[i]) + Wi(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function gN(e) { let t = Nn(e, "animation-name"), n = Nn(e, "animation-delay"), o = Nn(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Wi(n[i]) + Wi(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function um(e, t) { return e !== void 0 && e.duration > t.duration; }
function dm(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function mN(e, t) { let n = getComputedStyle(e), o = gN(n), r = hN(n), i = o.duration > r.duration ? o : r; um(t.get(e), i) || dm(i) && t.set(e, i); }
function fm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? mN(e, t) : yN(e, t, o); }
function yN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} um(t.get(e), o) || dm(o) && t.set(e, o); }
var Gt = new Set, Ss = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ss || {}), eo = new w(""), Rp = new Set;
function Z(e) { Rp.has(e) || (Rp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var pm = !1, pl = class extends Zl {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Ha() && (this.destroyRef = D(fn, { optional: !0 }) ?? void 0, this.pendingTasks = D(Tt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof Yl && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, Xe = pl;
function hm(e) { let t, n; function o() { e = Ao; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function kp(e) { return queueMicrotask(() => e()), () => { e = Ao; }; }
var Au = "isAngularZone", Gi = Au + "_ID", vN = 0, j = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new Xe(!1);
    onMicrotaskEmpty = new Xe(!1);
    onStable = new Xe(!1);
    onError = new Xe(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = pm } = t; if (typeof Zone > "u")
        throw new _(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, DN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Au) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new _(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new _(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, IN, Ao, Ao); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, IN = {};
function Ru(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function EN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { hm(() => { e.callbackScheduled = !1, hl(e), e.isCheckStableRunning = !0, Ru(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), hl(e); }
function DN(e) { let t = () => { EN(e); }, n = vN++; e._inner = e._inner.fork({ name: "angular", properties: { [Au]: !0, [Gi]: n, [Gi + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (CN(c))
        return o.invokeTask(i, s, a, c); try {
        return xp(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Op(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return xp(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !TN(c) && t(), Op(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, hl(e), Ru(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function hl(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function xp(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Op(e) { e._nesting--, Ru(e); }
var kn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new Xe;
    onMicrotaskEmpty = new Xe;
    onStable = new Xe;
    onError = new Xe;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function CN(e) { return gm(e, "__ignore_ng_zone__"); }
function TN(e) { return gm(e, "__scheduler_tick__"); }
function gm(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function mm(e = "zone.js", t) { return e === "noop" ? new kn : e === "zone.js" ? new j(t) : e; }
var As = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), ku = [0, 1, 2, 3], xu = (() => { class e {
    ngZone = D(j);
    scheduler = D(Ke);
    errorHandler = D(ci, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(eo, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && x(16), this.executing = !0; for (let o of ku)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && x(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Ot] ??= []).push(n), ti(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Ss.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Yo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Ot]; t && (this.view[Ot] = t.filter(n => n !== this)); }
};
function ym(e, t) { let n = t?.injector ?? D(De); return typeof ngServerMode < "u" && ngServerMode ? Rs : (Z("NgAfterRender"), vm(e, n, t, !1)); }
function Ou(e, t) { let n = t?.injector ?? D(De); return typeof ngServerMode < "u" && ngServerMode ? Rs : (Z("NgAfterNextRender"), vm(e, n, t, !0)); }
function MN(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function vm(e, t, n, o) { let r = t.get(As); r.impl ??= t.get(xu); let i = t.get(eo, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(fn) : null, a = t.get(li, null, { optional: !0 }), c = new Yo(r.impl, MN(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Rs = { destroy() { } }, ks = new w("", { providedIn: "root", factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function Im(e, t, n) { let o = e.get(ks); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function NN(e, t) { let n = e.get(ks); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function _N(e) { let t = e.get(ks); t.isScheduled || (Ou(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function xs(e) { let t = e.get(ks); t.scheduler = _N, t.scheduler(e); }
function Pu(e, t) { for (let [n, o] of t)
    Im(e, o.animateFns); }
function Pp(e, t, n, o) { let r = e?.[Ye]?.enter; t !== null && r && r.has(n.index) && Pu(o, r); }
function Dn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    K(r) ? c = r : Y(r) && (l = !0, r = r[H]);
    let u = k(r);
    e === 0 && o !== null ? (Pp(a, o, i, n), s == null ? rm(t, o, u) : Wt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Pp(a, o, i, n), Wt(t, o, u, s || null, !0)) : e === 2 ? Lp(a, i, n, d => { vr(t, u, l, d); }) : e === 3 && Lp(a, i, n, () => { t.destroyNode(u); }), c != null && xN(t, e, n, c, i, o, s);
} }
function Em(e, t) { Dm(e, t), t[H] = null, t[se] = null; }
function wN(e, t, n, o, r, i) { o[H] = r, o[se] = t, Os(e, o, n, 1, r, i); }
function Dm(e, t) { t[Qe].changeDetectionScheduler?.notify(9), Os(e, t, t[C], 2, null, null); }
function bN(e) { let t = e[yt]; if (!t)
    return Sc(e[y], e); for (; t;) {
    let n = null;
    if (Y(t))
        n = t[yt];
    else {
        let o = t[F];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ie] && t !== e;)
            Y(t) && Sc(t[y], t), t = t[q];
        t === null && (t = e), Y(t) && Sc(t[y], t), n = t && t[ie];
    }
    t = n;
} }
function Lu(e, t) { let n = e[Pt], o = n.indexOf(t); n.splice(o, 1); }
function Er(e, t) { if (vt(t))
    return; let n = t[C]; n.destroyNode && Os(e, t, n, 3, null, null), bN(t); }
function Sc(e, t) { if (vt(t))
    return; let n = R(null); try {
    t[b] &= -129, t[b] |= 256, t[Ne] && ho(t[Ne]), RN(e, t), AN(e, t), t[y].type === 1 && t[C].destroy();
    let o = t[Ze];
    if (o !== null && K(t[q])) {
        o !== t[q] && Lu(o, t);
        let r = t[je];
        r !== null && r.detachView(e);
    }
    Yc(t);
}
finally {
    R(n);
} }
function Lp(e, t, n, o) { let r = e?.[Ye]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Gt.add(e), Im(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), SN(e, o);
}
else
    e && Gt.delete(e), o(!1); }, r); }
function SN(e, t) { let n = e[Ye]?.running; if (n) {
    n.then(() => { e[Ye].running = void 0, Gt.delete(e), t(!0); });
    return;
} t(!1); }
function AN(e, t) { let n = e.cleanup, o = t[xt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[xt] = null); let r = t[Ba]; if (r !== null) {
    t[Ba] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Co]; if (i !== null) {
    t[Co] = null;
    for (let s of i)
        s.destroy();
} }
function RN(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Ut)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    x(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        x(5, a, c);
                    }
                }
            else {
                x(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    x(5, r, i);
                }
            }
        }
    } }
function Fu(e, t, n) { return Cm(e, t.parent, n); }
function Cm(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[H]; if (ge(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === nt.None || r === nt.Emulated)
        return null;
} return ne(o, n); }
function Tm(e, t, n) { return Nm(e, t, n); }
function Mm(e, t, n) { return e.type & 40 ? ne(e, n) : null; }
var Nm = Mm, gl;
function _m(e, t) { Nm = e, gl = t; }
function ju(e, t, n, o) { let r = Fu(e, o, t), i = t[C], s = o.parent || t[se], a = Tm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Ap(i, r, n[c], a, !1);
    else
        Ap(i, r, n, a, !1); gl !== void 0 && gl(i, o, t, n, r); }
function Bt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ne(t, e);
    if (n & 4)
        return qi(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Bt(e, o);
        {
            let r = e[t.index];
            return K(r) ? qi(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return Bt(e, t.next);
        if (n & 32)
            return Su(t, e)() || k(e[t.index]);
        {
            let o = wm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Ft(e[Q]);
                return Bt(r, o);
            }
            else
                return Bt(e, t.next);
        }
    }
} return null; }
function wm(e, t) { if (t !== null) {
    let o = e[Q][se], r = t.projection;
    return o.projection[r];
} return null; }
function qi(e, t) { let n = F + e + 1; if (n < t.length) {
    let o = t[n], r = o[y].firstChild;
    if (r !== null)
        return Bt(o, r);
} return t[ke]; }
function Hu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[A];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && we(k(c), o), n.flags |= 2), !Kn(n))
        if (l & 8)
            Hu(e, t, n.child, o, r, i, !1), Dn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Su(n, o), d;
            for (; d = u();)
                Dn(t, e, a, r, d, n, i, o);
            Dn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? bm(e, t, o, n, r, i) : Dn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Os(e, t, n, o, r, i) { Hu(n, o, e.firstChild, t, r, i, !1); }
function kN(e, t, n) { let o = t[C], r = Fu(e, n, t), i = n.parent || t[se], s = Tm(i, n, t); bm(o, 0, t, n, r, s); }
function bm(e, t, n, o, r, i) { let s = n[Q], c = s[se].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Dn(t, e, n[A], r, u, o, i, n);
    }
else {
    let l = c, u = s[q];
    zo(o) && (l.flags |= 128), Hu(e, t, l, u, r, i, !0);
} }
function xN(e, t, n, o, r, i, s) { let a = o[ke], c = k(o); a !== c && Dn(t, e, n, i, a, r, s); for (let l = F; l < o.length; l++) {
    let u = o[l];
    Os(u[y], u, e, t, i, a);
} }
function ON(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Ui.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Ui.Important), e.setStyle(n, o, r, i));
} }
function Sm(e, t, n, o, r) { let i = oe(), s = o & 2; try {
    Dt(-1), s && t.length > I && lm(e, t, I, !1), x(s ? 2 : 0, r, n), n(o, r);
}
finally {
    Dt(i), x(s ? 3 : 1, r, n);
} }
function Ps(e, t, n) { HN(e, t, n), (n.flags & 64) === 64 && VN(e, t, n); }
function to(e, t, n = ne) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function PN(e, t, n, o) { let i = o.get(iu, dg) || n === nt.ShadowDom, s = e.selectRootElement(t, i); return LN(s), s; }
function LN(e) { Am(e); }
var Am = () => null;
function FN(e) { Zh(e) ? im(e) : iM(e); }
function Rm() { Am = FN; }
function jN(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Vu(e, t, n, o, r, i) { let s = t[y]; if (Hs(e, s, t, n, o)) {
    ge(e) && km(t, e.index);
    return;
} e.type & 3 && (n = jN(n)), Bu(e, t, n, o, r, i); }
function Bu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ne(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function km(e, t) { let n = le(t, e); n[b] & 16 || (n[b] |= 64); }
function HN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; ge(n) && fN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Fi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = qo(t, e, s, n);
    if (we(c, t), i !== null && UN(t, s - o, c, a, n, i), me(a)) {
        let l = le(n.index, t);
        l[L] = qo(t, e, s, n);
    }
} }
function VN(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Yf(); try {
    Dt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        sc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && BN(c, l);
    }
}
finally {
    Dt(-1), sc(s);
} }
function BN(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function $u(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        nm(t, i.selectors, !1) && (o ??= [], me(i) ? o.unshift(i) : o.push(i));
    } return o; }
function $N(e, t, n, o, r, i) { let s = ne(e, t); Ls(t[C], s, i, e.value, n, o, r); }
function Ls(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? M(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function UN(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Zo(o, n, c, l);
    } }
function Fs(e, t, n, o, r) { let i = I + n, s = t[y], a = r(s, t, e, o, n); t[i] = a, Ve(e, !0); let c = e.type === 2; return c ? (sm(t[C], a, e), (Wf() === 0 || un(e)) && we(a, t), Gf()) : we(a, t), So() && (!c || !Kn(e)) && ju(s, t, a, e), e; }
function js(e) { let t = e; return Xa() ? ec() : (t = t.parent, Ve(t, !1)), t; }
function xm(e, t, n) { return (e === null || me(e)) && (n = Mo(n[t.index])), n[C]; }
function Uu(e, t) { let n = e[A]; if (!n)
    return; let o; try {
    o = n.get(Ct, null);
}
catch {
    o = null;
} o?.(t); }
function Hs(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Zo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Zo(u, l, o, r), a = !0;
    } return a; }
function WN(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            Zo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Zo(o, n[s], r, i), l = !0), l; }
function GN(e, t) { let n = le(t, e), o = n[y]; qN(o, n); let r = n[H]; r !== null && n[te] === null && (n[te] = Mg(r, n[A])), x(18), Vs(o, n, n[L]), x(19, n[L]); }
function qN(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Vs(e, t, n) { si(t); try {
    let o = e.viewQuery;
    o !== null && tl(1, o, n);
    let r = e.template;
    r !== null && Sm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[je]?.finishViewCreation(e), e.staticContentQueries && Pg(e, t), e.staticViewQueries && tl(2, e.viewQuery, n);
    let i = e.components;
    i !== null && zN(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, ai();
} }
function zN(e, t) { for (let n = 0; n < t.length; n++)
    GN(e, t[n]); }
function no(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = ws(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Ze] = l;
    let u = e[je];
    return u !== null && (c[je] = u.createEmbeddedView(i)), Vs(i, c, n), c;
}
finally {
    R(r);
} }
function qt(e, t) { return !t || t.firstChild === null || zo(e); }
function xn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), K(i) && Bs(i, o);
    let s = n.type;
    if (s & 8)
        xn(e, t, n.child, o);
    else if (s & 32) {
        let a = Su(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = wm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Ft(t[Q]);
            xn(c[y], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Bs(e, t) { for (let n = F; n < e.length; n++) {
    let o = e[n], r = o[y].firstChild;
    r !== null && xn(o[y], o, r, t);
} e[ke] !== e[H] && t.push(e[ke]); }
function Om(e) { if (e[Ot] !== null) {
    for (let t of e[Ot])
        t.impl.addSequence(t);
    e[Ot].length = 0;
} }
var Pm = [];
function QN(e) { return e[Ne] ?? ZN(e); }
function ZN(e) { let t = Pm.pop() ?? Object.create(KN); return t.lView = e, t; }
function YN(e) { e.lView[Ne] !== e && (e.lView = null, Pm.push(e)); }
var KN = Le(G({}, _a), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { ti(e.lView); }, consumerOnSignalRead() { this.lView[Ne] = this; } });
function JN(e) { let t = e[Ne] ?? Object.create(XN); return t.lView = e, t; }
var XN = Le(G({}, _a), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Ft(e.lView); for (; t && !Lm(t[y]);)
        t = Ft(t); t && Xr(t); }, consumerOnSignalRead() { this.lView[Ne] = this; } });
function Lm(e) { return e.type !== 2; }
function Fm(e) { if (e[Co] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Co])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var e_ = 100;
function jm(e, t = 0) { let o = e[Qe].rendererFactory, r = !1; r || o.begin?.(); try {
    t_(e, t);
}
finally {
    r || o.end?.();
} }
function t_(e, t) { let n = nc(); try {
    oc(!0), ml(e, t);
    let o = 0;
    for (; _o(e);) {
        if (o === e_)
            throw new _(103, !1);
        o++, ml(e, 1);
    }
}
finally {
    oc(n);
} }
function Hm(e, t, n, o) { if (vt(t))
    return; let r = t[b], i = !1, s = !1; si(t); let a = !0, c = null, l = null; i || (Lm(e) ? (l = QN(t), c = po(l)) : Ef() === null ? (a = !1, l = JN(t), c = po(l)) : t[Ne] && (ho(t[Ne]), t[Ne] = null)); try {
    Wa(t), rc(e.bindingStartIndex), n !== null && Sm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ci(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ti(t, p, 0, null), Cc(t, 0);
        }
    if (s || n_(t), Fm(t), Vm(t, 0), e.contentQueries !== null && Pg(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ci(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ti(t, p, 1), Cc(t, 1);
        }
    r_(e, t);
    let d = e.components;
    d !== null && $m(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && tl(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ci(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ti(t, p, 2), Cc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Jr]) {
        for (let p of t[Jr])
            p();
        t[Jr] = null;
    }
    i || (Om(t), t[b] &= -73);
}
catch (u) {
    throw i || ti(t), u;
}
finally {
    l !== null && (Lr(l, c), a && YN(l)), ai();
} }
function Vm(e, t) { for (let n = tg(e); n !== null; n = ng(n))
    for (let o = F; o < n.length; o++) {
        let r = n[o];
        Bm(r, t);
    } }
function n_(e) { for (let t = tg(e); t !== null; t = ng(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[Pt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Xr(r);
    }
} }
function o_(e, t, n) { x(18); let o = le(t, e); Bm(o, n), x(19, o[L]); }
function Bm(e, t) { jf(e) && ml(e, t); }
function ml(e, t) { let o = e[y], r = e[b], i = e[Ne], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Fr(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    Hm(o, e, o.template, e[L]);
else if (r & 8192) {
    let a = R(null);
    try {
        Fm(e), Vm(e, 1);
        let c = o.components;
        c !== null && $m(e, c, 1), Om(e);
    }
    finally {
        R(a);
    }
} }
function $m(e, t, n) { for (let o = 0; o < t.length; o++)
    o_(e, t[o], n); }
function r_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Dt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                Zf(s, i);
                let c = t[i];
                x(24, c), a(2, c), x(25, c);
            }
        }
    }
    finally {
        Dt(-1);
    } }
function Dr(e, t) { let n = nc() ? 64 : 1088; for (e[Qe].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = Ft(e);
    if (He(e) && !o)
        return e;
    e = o;
} return null; }
function Um(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function Wm(e, t) { let n = F + t; if (n < e.length)
    return e[n]; }
function oo(e, t, n, o = !0) { let r = t[y]; if (i_(r, t, e, n), o) {
    let s = qi(n, e), a = t[C], c = a.parentNode(e[ke]);
    c !== null && wN(r, e[se], a, t, c, s);
} let i = t[te]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Wu(e, t) { let n = Ko(e, t); return n !== void 0 && Er(n[y], n), n; }
function Ko(e, t) { if (e.length <= F)
    return; let n = F + t, o = e[n]; if (o) {
    let r = o[Ze];
    r !== null && r !== e && Lu(r, o), t > 0 && (e[n - 1][ie] = o[ie]);
    let i = mo(e, F + t);
    Em(o[y], o);
    let s = i[je];
    s !== null && s.detachView(i[y]), o[q] = null, o[ie] = null, o[b] &= -129;
} return o; }
function i_(e, t, n, o) { let r = F + o, i = n.length; o > 0 && (n[r - 1][ie] = t), o < i - F ? (t[ie] = n[r], Pa(n, F + o, t)) : (n.push(t), t[ie] = null), t[q] = n; let s = t[Ze]; s !== null && n !== s && Gm(s, t); let a = t[je]; a !== null && a.insertView(e), ei(t), t[b] |= 128; }
function Gm(e, t) { let n = e[Pt], o = t[q]; if (Y(o))
    e[b] |= 2;
else {
    let r = o[q][Q];
    t[Q] !== r && (e[b] |= 2);
} n === null ? e[Pt] = [t] : n.push(t); }
var wt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return xn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[L]; }
    set context(t) { this._lView[L] = t; }
    get destroyed() { return vt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (K(t)) {
            let n = t[To], o = n ? n.indexOf(this) : -1;
            o > -1 && (Ko(t, o), mo(n, o));
        }
        this._attachedToViewContainer = !1;
    } Er(this._lView[y], this._lView); }
    onDestroy(t) { ni(this._lView, t); }
    markForCheck() { Dr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { ei(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, jm(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new _(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = He(this._lView), n = this._lView[Ze]; n !== null && !t && Lu(n, this._lView), Dm(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new _(902, !1); this._appRef = t; let n = He(this._lView), o = this._lView[Ze]; o !== null && !n && Gm(o, this._lView), ei(this._lView); }
};
function s_(e) { return _o(e._lView) || !!(e._lView[b] & 64); }
function a_(e) { Xr(e._lView); }
var Jo = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = c_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = no(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new wt(i); }
} return e; })();
function c_() { return $s(T(), g()); }
function $s(e, t) { return e.type & 4 ? new Jo(t, e, Gn(e, t)) : null; }
var yl = "<-- AT THIS LOCATION";
function l_(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function u_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${h_(e, t, !1)}

`, r = m_();
    throw new _(-502, n + o + r);
}
function qm(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${g_(e)}

`, o = t + n + y_();
    return new _(-503, o);
}
function d_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${zi(r)}"`);
    } return t.join(" "); }
var f_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function p_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    f_.has(o.name) || t.push(`${o.name}="${zi(o.value)}"`);
} return t.join(" "); }
function Ac(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = d_(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${l_(e.type)})`;
} }
function _i(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = p_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? zi(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${zi(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function h_(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Ac(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Ac(t) + `
`, r += `  <!-- container -->  ${yl}
`) : r += "  " + Ac(t) + `  ${yl}
`, r += `  \u2026
`;
    let i = t.type ? Fu(e[y], t, e) : null;
    return i && (r = _i(i, `
` + r)), r;
}
function g_(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + _i(o.previousSibling) + `
`), n += "  " + _i(o) + `  ${yl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = _i(o.parentNode, `
` + n)), n;
}
function m_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function y_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function v_(e) { return e.replace(/\s+/gm, ""); }
function zi(e, t = 50) { return e ? (e = v_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function zm(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Mm(e, t, n) : k(n[r]); }
function Qm(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Wt(e, s, l, a, !1);
        }
} }
function tn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Gu(e, t, n, o, r), Qf() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = dn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Ve(i, !0), i; }
function Gu(e, t, n, o, r) { let i = zf(), s = Xa(), a = s ? i : i && i.parent, c = e.data[t] = E_(e, a, n, t, o, r); return I_(e, c, i, s), c; }
function I_(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function E_(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return wo() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Zm(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Ym(o) || D_(o, t) && C_(o) === null && T_(o, t.index);
    } }
function Ym(e) { return !(e.type & 64); }
function D_(e, t) { return Ym(t) || e.index > t.index; }
function C_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function T_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (_m(zm, Qm), e.insertBeforeIndex = t); }
function Oo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function M_(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function N_(e, t) { let n = e.insertBeforeIndex; n === null ? (_m(zm, Qm), n = e.insertBeforeIndex = [null, t]) : (Nf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function __(e, t, n) { let o = Gu(e, n, 64, null, null); return Zm(t, o), o; }
function Us(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function w_(e) { return e >>> 17; }
function b_(e) { return (e & 131070) >>> 1; }
function S_(e, t, n) { return e | t << 17 | n << 1; }
function Km(e) { return e === -1; }
function qu(e, t, n) { e.index = 0; let o = Us(t, n); o !== null ? e.removes = t.remove[o] : e.removes = P; }
function Qi(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[y].data[n];
        return qu(e, o, e.lView), Qi(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Qi(e)); }
function A_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return qu(e, n.value, o), Qi.bind(null, e); } return t; }
function R_(e, t) { let n = { stack: [], index: -1, lView: t }; return qu(n, e, t), Qi.bind(null, n); }
var k_ = new RegExp(`^(\\d+)*(${ou}|${nu})*(.*)`);
function x_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function O_(e) { let t = e.match(k_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function P_(e) { return !e.prev && e.parent?.type === 8; }
function Rc(e) { return e.index - I; }
function ro(e, t) { return !(e.type & 144) && !!t[e.index] && Jm(k(t[e.index])); }
function Jm(e) { return !!e && !e.isConnected; }
function Xm(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function L_(e, t, n) { let r = e.data[fr]?.[n]; return r ? ey(r, t) : null; }
function Cr(e, t, n, o) { let r = Rc(o), i = Xm(e, r); if (i === void 0) {
    let s = e.data[fr];
    if (s?.[r])
        i = ey(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (P_(o)) {
            let l = Rc(o.parent);
            i = el(e, l);
        }
        else {
            let l = ne(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Rc(c), d = el(e, u);
                if (c.type === 2 && d) {
                    let p = gu(e, u) + 1;
                    i = Ws(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ws(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function F_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case lg:
                n = n.firstChild;
                break;
            case ug:
                n = n.nextSibling;
                break;
        }
} return n; }
function ey(e, t) { let [n, ...o] = O_(e), r; if (n === nu)
    r = t[Q][H];
else if (n === ou)
    r = Cu(t[Q][H]);
else {
    let i = Number(n);
    r = k(t[i + I]);
} return F_(r, o); }
function vl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return j_(e, t); {
    let n = t.parentElement, o = vl(e, n), r = vl(n.firstChild, t);
    return !o || !r ? null : [...o, lg, ...r];
} }
function j_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(ug); return o == null ? null : n; }
function Fp(e, t, n) { let o = vl(e, t); return o === null ? null : x_(n, o); }
function ty(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (ro(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = nu, i = t[Q][H]) : (r = o.index, i = k(t[r]), s = M(r - I)); let a = k(t[e.index]); if (e.type & 44) {
    let l = Bt(t, e);
    l && (a = l);
} let c = Fp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Fp(l, a, ou), c === null)
        throw u_(t, e);
} return c; }
function ny(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: H_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function H_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var oy = !1, ry = () => { };
function zu(e) { oy = e; }
function Gs() { return oy; }
function V_(e, t, n, o) { ry(e, t, n, o); }
function iy() { ry = G_; }
function sy(e) { return e = e ?? D(De), e.get(su, !1); }
function ay(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = B_(e), t.i18nChildren.set(e, n)), n; }
function B_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function cy(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[y], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && Yh(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Il(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Il(e, t, n, o) { let r = null; for (let i of o) {
    let s = U_(e, t, n, i);
    s && ($_(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function $_(e, t) { return e && e.nextSibling !== t; }
function U_(e, t, n, o) { let r = k(e[o.index]); if (!r || Jm(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        mu(n, i);
        break;
    }
    case 1:
    case 2: {
        Il(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Il(e, t, n, o.cases[a]);
        }
        break;
    }
} return W_(e, o); }
function W_(e, t) { let o = e[y].data[t.index]; return ls(o) ? Bt(e, o) : t.kind === 3 ? R_(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function jt(e, t) { e.currentNode = t; }
function Ro(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function kc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function xc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function G_(e, t, n, o) { let r = e[te]; if (!r || !Gs() || n && (Yh(n) || Ts(r, n.index - I)))
    return; let i = e[y], s = i.data[t]; function a() { if (Km(o)) {
    let p = Cr(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = bg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[ms]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; gn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function gn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = L_(e.hydrationInfo, e.lView, r.index - I);
        i && (o = xc(t, i)), gn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = Ro(e, t, n);
            jt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            gn(e, xc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Ro(e, t, n);
            jt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = _g(r, o);
            switch (n.type) {
                case 0: {
                    let s = Ro(e, t, n);
                    if (uM(r, o)) {
                        gn(e, t, n.children);
                        let a = kc(t, 1);
                        jt(t, a);
                    }
                    else if (gn(e, xc(t, t.currentNode?.firstChild ?? null), n.children), jt(t, s?.nextSibling ?? null), i !== null) {
                        let a = kc(t, i + 1);
                        jt(t, a);
                    }
                    break;
                }
                case 1: {
                    Ro(e, t, n);
                    let s = kc(t, i + 1);
                    jt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                gn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Ro(e, t, n);
            jt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var ly = () => { };
function q_(e, t, n) { ly(e, t, n); }
function uy() { ly = z_; }
function z_(e, t, n) { let o = e[te]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Q_(e) { let t = e[te]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[C];
        for (let i of o.values())
            Z_(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function Z_(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && vr(e, r, !1);
} }
function qs(e) { let t = e[Ee] ?? [], o = e[q][C], r = []; for (let i of t)
    i.data[ys] !== void 0 ? r.push(i) : dy(i, o); e[Ee] = r; }
function Y_(e) { let { lContainer: t } = e, n = t[Ee]; if (n === null)
    return; let r = t[q][C]; for (let i of n)
    dy(i, r); }
function dy(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[tt];
    for (; n < r;) {
        let i = o.nextSibling;
        vr(t, o, !1), o = i, n++;
    }
} }
function zs(e) { qs(e); let t = e[H]; Y(t) && Zi(t); for (let n = F; n < e.length; n++)
    Zi(e[n]); }
function Zi(e) { Q_(e); let t = e[y]; for (let n = I; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        zs(o);
    }
    else
        Y(e[n]) && Zi(e[n]); }
function Qu(e) { let t = e._views; for (let n of t) {
    let o = hu(n);
    o !== null && o[H] !== null && (Y(o) ? Zi(o) : zs(o));
} }
function K_(e, t, n, o) { e !== null && (n.cleanup(t), zs(e.lContainer), Qu(o)); }
function J_(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[dr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[tt] > 0 && (i.firstChild = e, e = Ws(o[tt], e)), n.push(i);
    } return [e, n]; }
var fy = () => null, py = () => null;
function hy() { fy = X_, py = ew; }
function X_(e, t) { return my(e, t) ? e[Ee].shift() : (qs(e), null); }
function Xo(e, t) { return fy(e, t); }
function ew(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = Xo(e, t.tView.ssrId); return n[y].firstUpdatePass && o === null && tw(n, t), o; }
function gy(e, t, n) { return py(e, t, n); }
function tw(e, t) { let n = t; for (; n;) {
    if (jp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (jp(e, n))
        return;
    n = n.next;
} }
function my(e, t) { let n = e[Ee]; return !t || n === null || n.length === 0 ? !1 : n[0].data[gs] === t; }
function jp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && my(o, n) ? (qs(o), !0) : !1; }
var yy = class {
}, Qs = class {
}, El = class {
    resolveComponentFactory(t) { throw new _(917, !1); }
}, Tr = class {
    static NULL = new El;
}, er = class {
}, nw = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => ow();
} return e; })();
function ow() { let e = g(), t = T(), n = le(t.index, e); return (Y(n) ? n : e)[C]; }
var vy = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function Zu(e) { return e.ngModule !== void 0; }
function Ht(e) { return !!an(e); }
function mi(e) { return !!Fe(e); }
function Hp(e) { return !!Me(e); }
function Po(e) { return !!W(e); }
function rw(e) { return W(e) ? "component" : Me(e) ? "directive" : Fe(e) ? "pipe" : "type"; }
function iw(e, t) { if (Vr(e) && (e = U(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ie(t)}", to return a standalone entity or NgModule but got "${Ie(e) || e}".`); if (an(e) == null) {
    let n = W(e) || Me(e) || Fe(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Ie(e)}" ${rw(e)}, imported from "${Ie(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw Zu(e) ? new Error(`A module with providers was imported from "${Ie(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ie(e)}" type, imported from "${Ie(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Dl = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = an(t);
            if (n?.declarations)
                for (let o of En(n.declarations))
                    Po(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Ht(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Qr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of En(n.imports))
        if (Ht(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else if (Io(r))
            if (Hp(r) || Po(r))
                o.compilation.directives.add(r);
            else if (mi(r))
                o.compilation.pipes.add(r);
            else
                throw new _(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of En(n.declarations)) {
            if (Ht(r) || Io(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            mi(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of En(n.exports))
        if (Ht(r)) {
            let i = this.getNgModuleScope(r);
            Mt(i.exported.directives, o.exported.directives), Mt(i.exported.pipes, o.exported.pipes), Mt(i.exported.directives, o.compilation.directives), Mt(i.exported.pipes, o.compilation.pipes);
        }
        else
            mi(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Re(n ?? [])) {
        let i = U(r);
        try {
            iw(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Ht(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            Mt(s.exported.directives, o.compilation.directives), Mt(s.exported.pipes, o.compilation.pipes);
        }
        else if (mi(i))
            o.compilation.pipes.add(i);
        else if (Hp(i) || Po(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Mt(e, t) { for (let n of e)
    t.add(n); }
var On = new Dl, wi = {}, _n = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, wi, o); return r !== wi || n === wi ? r : this.parentInjector.get(t, n, o); }
};
function Yi(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Hr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Hr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function io(e, t = 0) { let n = g(); if (n === null)
    return Ae(e, t); let o = T(); return $h(o, n, U(e), t); }
function Iy() { let e = "invalid"; throw new Error(e); }
function Ey(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    cw(e, t, n, a, i, c, l);
} i !== null && o !== null && sw(n, o, i); }
function sw(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new _(-301, !1);
    o.push(t[r], i);
} }
function aw(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function cw(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && me(p) && (c = !0, aw(e, n, f)), Qc(Fi(n, t), e, p.type);
} hw(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Ir(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Rn(n.mergedAttrs, p.hostAttrs), uw(e, n, t, d, p), pw(d, p, r), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} lw(e, n, i); }
function lw(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Vp(0, t, r, o), Vp(1, t, r, o), $p(t, o, !1);
    else {
        let i = n.get(r);
        Bp(0, t, i, o), Bp(1, t, i, o), $p(t, o, !0);
    }
} }
function Vp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Dy(t, i);
    } }
function Bp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Dy(t, s);
    } }
function Dy(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function $p(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Tu(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function uw(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Gr(r.type, !0)), s = new Ut(i, me(r), io, null); e.blueprint[o] = s, n[o] = s, dw(e, t, o, Ir(e, n, r.hostVars, O), r); }
function dw(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    fw(s) != a && s.push(a), s.push(n, o, i);
} }
function fw(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function pw(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    me(t) && (n[""] = e);
} }
function hw(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function Yu(e, t, n, o, r, i, s, a) { let c = t[y], l = c.consts, u = ae(l, s), d = tn(c, e, n, o, u); return i && Ey(c, t, d, ae(l, a), r), d.mergedAttrs = Rn(d.mergedAttrs, d.attrs), d.attrs !== null && Yi(d, d.attrs, !1), d.mergedAttrs !== null && Yi(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Ku(e, t) { kh(e, t), $a(t) && e.queries.elementEnd(t); }
function Cy(e, t, n, o, r, i) { let s = t.consts, a = ae(s, r), c = tn(t, e, n, o, a); if (c.mergedAttrs = Rn(c.mergedAttrs, c.attrs), i != null) {
    let l = ae(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Yi(c, c.attrs, !1), c.mergedAttrs !== null && Yi(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function tr(e) { return Zs(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function gw(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function Ty(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Zs(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function My(e, t) { let n = tr(e), o = tr(t); return n && o ? gw(e, t, My) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function Ge(e, t, n) { return e[t] = n; }
function Mr(e, t) { return e[t]; }
function $(e, t, n) { if (n === O)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function zt(e, t, n, o) { let r = $(e, t, n); return $(e, t + 1, o) || r; }
function Ys(e, t, n, o, r) { let i = zt(e, t, n, o); return $(e, t + 2, r) || i; }
function be(e, t, n, o, r, i) { let s = zt(e, t, n, o); return zt(e, t + 2, r, i) || s; }
function Lo(e, t, n) { return function o(r) { let i = ge(e) ? le(e.index, t) : t; Dr(i, 5); let s = t[L], a = Up(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Up(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Up(e, t, n, o) { let r = lp(null); try {
    return x(6, t, n), n(o) !== !1;
}
catch (i) {
    return Uu(e, i), !1;
}
finally {
    x(7, t, n), lp(r);
} }
function Ny(e, t, n, o, r, i, s, a) { let c = un(e), l = !1, u = null; if (!o && c && (u = yw(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ne(e, n), f = o ? o(d) : d;
    tM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!mw(i)) {
        let h = o ? m => o(k(m[e.index])) : e.index;
        _y(h, t, n, i, a, p, !1);
    }
} return l; }
function mw(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function yw(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[xt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function _y(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? $f(t) : null, c = Bf(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function vw(e, t, n, o, r) { let i = Lo(e, t, n), s = Iw(e, t, o, r, i); }
function Iw(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Ki(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Ki(e, t, i, o, o, r)), c; }
function Ki(e, t, n, o, r, i) { let s = t[n], a = t[y], l = a.data[n].outputs[o], d = s[l].subscribe(i); _y(e.index, a, t, r, i, d, !0); }
var _t = Symbol("BINDING"), Ew = { kind: "input", requiredVars: 1 }, Dw = { kind: "output", requiredVars: 0 };
function Cw(e, t, n) { let o = g(), r = de(); if ($(o, r, n)) {
    let i = o[y], s = _e(), a = le(s.index, o);
    Dr(a, 1);
    let c = i.directiveRegistry[e], l = WN(s, i, o, c, t, n);
} }
function wy(e, t) { let n = { [_t]: Ew, update: () => Cw(n.targetIdx, e, t()) }; return n; }
function by(e, t) { let n = { [_t]: Dw, create: () => { let o = g(), r = T(), s = o[y].directiveRegistry[n.targetIdx]; vw(r, o, t, s, e); } }; return n; }
function Tw(e, t) { let n = wy(e, t), o = by(e + "Change", i => t.set(i)); return { [_t]: { kind: "twoWay", requiredVars: n[_t].requiredVars + o[_t].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var Ji = class extends Tr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new bt(n, this.ngModule); }
};
function Mw(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & bs.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function Nw(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function _w(e, t, n) { let o = t instanceof mt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new _n(n, o) : n; }
function ww(e) { let t = e.get(er, null); if (t === null)
    throw new _(407, !1); let n = e.get(vy, null), o = e.get(Ke, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function bw(e, t) { let n = Sy(e); return _s(t, n, n === "svg" ? Of : n === "math" ? Pf : null); }
function Sy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var bt = class extends Qs {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= Mw(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= Nw(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = aN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { x(22); let a = R(null); try {
        let c = this.componentDef, l = Sw(o, c, s, i), u = _w(c, r || this.ngModule, t), d = ww(u), f = d.rendererFactory.createRenderer(null, c), p = o ? PN(f, o, c.encapsulation, u) : bw(c, f), h = s?.some(Wp) || i?.some(E => typeof E != "function" && E.bindings.some(Wp)), m = ws(null, l, null, 512 | wu(c), null, null, d, f, u, null, Mg(p, u, !0));
        m[I] = p, si(m);
        let v = null;
        try {
            let E = Yu(I, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            sm(f, p, E), we(p, m), Ps(l, m, E), yu(l, E, m), Ku(l, E), n !== void 0 && Rw(E, this.ngContentSelectors, n), v = le(E.index, m), m[L] = v[L], Vs(l, m, null);
        }
        catch (E) {
            throw v !== null && Yc(v), Yc(m), E;
        }
        finally {
            x(23), ai();
        }
        return new Xi(this.componentType, m, !!h);
    }
    finally {
        R(a);
    } }
};
function Sw(e, t, n, o) { let r = e ? ["ng-version", "20.3.13"] : cN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[_t].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[_t].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Me(d);
        c.push(f);
    } return _u(0, null, Aw(i, s), 1, a, c, null, null, null, [r], null); }
function Aw(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Wp(e) { let t = e[_t].kind; return t === "input" || t === "twoWay"; }
var Xi = class extends yy {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = It(n[y], I), this.location = Gn(this._tNode, n), this.instance = le(this._tNode.index, n)[L], this.hostView = this.changeDetectorRef = new wt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Hs(o, r[y], r, t, n); this.previousInputValues.set(t, n); let s = le(o.index, r); Dr(s, 1); }
    get injector() { return new Nt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function Rw(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Ks = (() => { class e {
    static __NG_ELEMENT_ID__ = kw;
} return e; })();
function kw() { let e = T(); return Ry(e, g()); }
var xw = Ks, Ay = class extends xw {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Gn(this._hostTNode, this._hostLView); }
    get injector() { return new Nt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Jl(this._hostTNode, this._hostLView); if (Lh(t)) {
        let n = Pi(t, this._hostLView), o = Oi(t), r = n[y].data[o + 8];
        return new Nt(r, n);
    }
    else
        return new Nt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Gp(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - F; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = Xo(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, qt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !ko(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new bt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let E = (c ? d : this.parentInjector).get(mt, null);
        E && (i = E);
    } let f = W(u.componentType ?? {}), p = Xo(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, qt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Hf(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[q], l = new Ay(c, c[se], c[q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return oo(s, r, i, o), t.attachToViewContainerRef(), Pa(Oc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Gp(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Ko(this._lContainer, n); o && (mo(Oc(this._lContainer), n), Er(o[y], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Ko(this._lContainer, n); return o && mo(Oc(this._lContainer), n) != null ? new wt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Gp(e) { return e[To]; }
function Oc(e) { return e[To] || (e[To] = []); }
function Ry(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = Um(o, t, null, e), t[e.index] = n, bu(t, n)), ky(n, t, e, o), new Ay(n, e, t); }
function Ow(e, t) { let n = e[C], o = n.createComment(""), r = ne(t, e), i = n.parentNode(r); return Wt(n, i, o, n.nextSibling(r), !1), o; }
var ky = Oy, Ju = () => !1;
function xy(e, t, n) { return Ju(e, t, n); }
function Oy(e, t, n, o) { if (e[ke])
    return; let r; n.type & 8 ? r = k(o) : r = Ow(t, n), e[ke] = r; }
function Pw(e, t, n) { if (e[ke] && e[Ee])
    return !0; let o = n[te], r = t.index - I; if (!o || zn(t) || Ts(o, r))
    return !1; let s = el(o, r), a = o.data[Qn]?.[r], [c, l] = J_(s, a); return e[ke] = c, e[Ee] = l, !0; }
function Lw(e, t, n, o) { Ju(e, n, t) || Oy(e, t, n, o); }
function Py() { ky = Lw, Ju = Pw; }
var Cl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Tl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        ed(t, n).matches !== null && this.queries[n].setDirty(); }
}, es = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = Bw(t) : this.predicate = t; }
}, Ml = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Nl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, Fw(n, i)), this.matchTNodeWithReadOption(t, n, Mi(n, t, i, !1, !1));
        }
    else
        o === Jo ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Mi(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === lr || r === Ks || r === Jo && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Mi(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function Fw(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function jw(e, t) { return e.type & 11 ? Gn(e, t) : e.type & 4 ? $s(e, t) : null; }
function Hw(e, t, n, o) { return n === -1 ? jw(t, e) : n === -2 ? Vw(e, t, o) : qo(e, e[y], n, t); }
function Vw(e, t, n) { if (n === lr)
    return Gn(t, e); if (n === Jo)
    return $s(t, e); if (n === Ks)
    return Ry(t, e); }
function Ly(e, t, n, o) { let r = t[je].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(Hw(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function _l(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = Ly(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = F; d < u.length; d++) {
                let f = u[d];
                f[Ze] === f[q] && _l(f[y], f, l, o);
            }
            if (u[Pt] !== null) {
                let d = u[Pt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    _l(p[y], p, l, o);
                }
            }
        }
    }
} return o; }
function Xu(e, t) { return e[je].queries[t].queryList; }
function Fy(e, t, n) { let o = new ji((n & 4) === 4); return Uf(e, t, o, o.destroy), (t[je] ??= new Tl).queries.push(new Cl(o)) - 1; }
function jy(e, t, n) { let o = N(); return o.firstCreatePass && (Vy(o, new es(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), Fy(o, g(), t); }
function Hy(e, t, n, o) { let r = N(); if (r.firstCreatePass) {
    let i = T();
    Vy(r, new es(t, n, o), i.index), $w(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return Fy(r, g(), n); }
function Bw(e) { return e.split(",").map(t => t.trim()); }
function Vy(e, t, n) { e.queries === null && (e.queries = new Ml), e.queries.track(new Nl(t, n)); }
function $w(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function ed(e, t) { return e.queries.getByIndex(t); }
function By(e, t) { let n = e[y], o = ed(n, t); return o.crossesNgTemplate ? _l(n, e, t, []) : Ly(n, e, o, t); }
function td(e, t, n) { let o, r = Df(() => { o._dirtyCounter(); let i = Uw(o, e); if (t && i === void 0)
    throw new _(-951, !1); return i; }); return o = r[pt], o._dirtyCounter = hc(0), o._flatValue = void 0, r; }
function nd(e) { return td(!0, !1, e); }
function od(e) { return td(!0, !0, e); }
function rd(e) { return td(!1, !1, e); }
function $y(e, t) { let n = e[pt]; n._lView = g(), n._queryIndex = t, n._queryList = Xu(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function Uw(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : P; let r = Xu(n, o), i = By(n, o); return r.reset(i, Qh), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function Uy(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(a => zw(r, a)));
} return i; } return Pn.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => Qw(i)); t.push(c); }), Gy(), Promise.all(t).then(() => { }); }
var Pn = new Map, nr = new Set;
function Ww(e, t) { Wy(t) && (Pn.set(e, t), nr.add(e)); }
function Gw(e) { return nr.has(e); }
function Wy(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function Gy() { let e = Pn; return Pn = new Map, e; }
function qw(e) { nr.clear(), e.forEach((t, n) => nr.add(n)), Pn = e; }
function qy() { return Pn.size === 0; }
function zw(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new _(918, !1)) : t.text(); }
function Qw(e) { nr.delete(e); }
var wl = new Map, zy = !0;
function Zw(e, t, n) { if (t && t !== n && zy)
    throw new Error(`Duplicate module registered for ${e} - ${on(t)} vs ${on(t.name)}`); }
function id(e, t) { let n = wl.get(t) || null; Zw(t, n, e), wl.set(t, e); }
function sd(e) { return wl.get(e); }
function Yw(e) { zy = !e; }
function Qy(e, t, n) { let o = g(), r = _e(), i = ne(r, o); if (r.type === 2 && t.toLowerCase() === "iframe") {
    let s = i;
    s.src = "", s.srcdoc = Jn(""), vr(o[C], s);
    let a = !1;
    throw new _(-910, a);
} return e; }
var Ln = class {
}, Zy = class {
};
function Yy(e, t) { return new Fn(e, t ?? null, []); }
var Kw = Yy, Fn = class extends Ln {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Ji(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = an(t); this._bootstrapComponents = En(i.bootstrap), this._r3Injector = Jf(t, n, [{ provide: Ln, useValue: this }, { provide: Tr, useValue: this.componentFactoryResolver }, ...o], on(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, jn = class extends Zy {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Fn(this.moduleType, t, []); }
};
function Ky(e, t, n) { return new Fn(e, t, n, !1); }
var or = class extends Ln {
    injector;
    componentFactoryResolver = new Ji(this);
    instance = null;
    constructor(t) { super(); let n = new ja([...t.providers, { provide: Ln, useValue: this }, { provide: Tr, useValue: this.componentFactoryResolver }], t.parent || Yr(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function ad(e, t, n = null) { return new or({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var Jw = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Fa(!1, n.type), r = o.length > 0 ? ad([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e(Ae(mt)) });
} return e; })();
function Jy(e) { return We(() => { let t = nv(e), n = Le(G({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === fs.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(Jw).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || nt.Emulated, styles: e.styles || P, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Z("NgStandalone"), ov(n); let o = e.dependencies; return n.directiveDefs = ts(o, Xy), n.pipeDefs = ts(o, Fe), n.id = nb(n), n; }); }
function Xy(e) { return W(e) || Me(e); }
function cd(e) { return We(() => ({ type: e.type, bootstrap: e.bootstrap || P, declarations: e.declarations || P, imports: e.imports || P, exports: e.exports || P, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function Xw(e, t) { if (e == null)
    return Te; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = bs.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function eb(e) { if (e == null)
    return Te; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function ev(e) { return We(() => { let t = nv(e); return ov(t), t; }); }
function tv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function nv(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Te, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || P, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: Xw(e.inputs, t), outputs: eb(e.outputs), debugInfo: null }; }
function ov(e) { e.features?.forEach(t => t(e)); }
function ts(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var tb = new Map;
function nb(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function rv(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function ld(e) { let t = rv(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (me(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new _(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Pc(e.inputs), s.declaredInputs = Pc(e.declaredInputs), s.outputs = Pc(e.outputs);
            let a = r.hostBindings;
            a && ab(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && ib(e, c), l && sb(e, l), ob(e, r), Mf(e.outputs, r.outputs), me(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === ld && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} rb(o); }
function ob(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function rb(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Rn(r.hostAttrs, n = Rn(n, r.hostAttrs));
} }
function Pc(e) { return e === Te ? {} : e === P ? [] : e; }
function ib(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function sb(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function ab(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var cb = ["providersResolver"], lb = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function iv(e) { let t = rv(e.type), n; me(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of cb)
    o[r] = n[r]; if (me(n))
    for (let r of lb)
        o[r] = n[r]; }
function sv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = ub, n.hostDirectives = o ? e.map(bl) : [e]) : o ? n.hostDirectives.unshift(...e.map(bl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function ub(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, av(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && me(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function av(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                qp(bl(i), t, n);
        }
        else
            qp(o, t, n); }
function qp(e, t, n) { let o = Me(e.directive); db(o.declaredInputs, e.inputs), av(o, t, n), n.set(o, e), t.push(o); }
function bl(e) { return typeof e == "function" ? { directive: U(e), inputs: Te, outputs: Te } : { directive: U(e.directive), inputs: zp(e.inputs), outputs: zp(e.outputs) }; }
function zp(e) { if (e === void 0 || e.length === 0)
    return Te; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function db(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function cv(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Rn(e.mergedAttrs, e.attrs);
    let u = e.tView = _u(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Ve(e, !1); let c = lv(n, t, e, o); So() && ju(n, t, c, e), we(c, t); let l = Um(c, t, c, e); t[o + I] = l, bu(t, l), xy(l, e, t); }
function fb(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = tn(t, d, 4, s || null, a || null), oi() && Ey(t, e, f, ae(t.consts, l), $u), kh(t, f)) : f = t.data[d], cv(f, e, t, n, o, r, i, c), un(f) && Ps(t, e, f), l != null && to(e, f, u), f; }
function Qt(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = tn(t, d, 4, s || null, a || null), l != null) {
        let p = ae(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return cv(f, e, t, n, o, r, i, c), l != null && to(e, f, u), f; }
function ud(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = ae(l.consts, i); return fb(c, l, e, t, n, o, r, u, void 0, s, a), ud; }
function dd(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = ae(l.consts, i); return Qt(c, l, e, t, n, o, r, u, void 0, s, a), dd; }
var lv = uv;
function uv(e, t, n, o) { return xe(!0), t[C].createComment(""); }
function pb(e, t, n, o) { let r = !Ms(t, n); xe(r); let i = t[te]?.data[hs]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return uv(e, t); let s = t[te], a = Cr(s, e, t, n); Cs(s, o, a); let c = gu(s, o); return Ws(c, a); }
function dv() { lv = pb; }
var J = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(J || {}), Qp = 0, hb = 1, B = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(B || {}), rr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(rr || {}), wn = 0, ut = 1, xo = 2, yi = 3, gb = 4, mb = 5, Js = 6, yb = 7, bn = 8, vb = 9, fd = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(fd || {});
function Nr(e, t, n) { let o = pv(e); t[o] === null && (t[o] = []), t[o].push(n); }
function bi(e, t) { let n = pv(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function fv(e) { bi(1, e), bi(0, e), bi(2, e); }
function pv(e) { let t = gb; return e === 1 ? t = mb : e === 2 && (t = vb), t; }
function _r(e) { return e + 1; }
function pe(e, t) { let n = e[y], o = _r(t.index); return e[o]; }
function Ib(e, t, n) { let o = e[y], r = _r(t); e[r] = n; }
function re(e, t) { let n = _r(t.index); return e.data[n]; }
function Eb(e, t, n) { let o = _r(t); e.data[o] = n; }
function Db(e, t, n) { let o = t[y], r = re(o, n); switch (e) {
    case B.Complete: return r.primaryTmplIndex;
    case B.Loading: return r.loadingTmplIndex;
    case B.Error: return r.errorTmplIndex;
    case B.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Sl(e, t) { return t === B.Placeholder ? e.placeholderBlockConfig?.[Qp] ?? null : t === B.Loading ? e.loadingBlockConfig?.[Qp] ?? null : null; }
function hv(e) { return e.loadingBlockConfig?.[hb] ?? null; }
function Zp(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function Cb(e, t) { let n = t.primaryTmplIndex + I; return It(e, n); }
function gv(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function mv(e, t) { let n = null, o = _r(t.index); return I < o && o < e.bindingStartIndex && (n = re(e, t)), !!n && gv(n); }
function pd(e, t, n) { let o = n.get(j); return XT(e, () => o.run(t), () => o.runOutsideAngular(() => JT())); }
function Tb(e, t, n) { return n == null ? e : n >= 0 ? Vf(n, e) : e[t.index][F] ?? null; }
function Mb(e, t) { return Lt(I + t, e); }
function so(e, t, n, o, r, i, s) { let a = e[A], c = a.get(j), l; function u() { if (vt(e)) {
    l.destroy();
    return;
} let d = pe(e, t), f = d[ut]; if (f !== rr.Initial && f !== B.Placeholder) {
    l.destroy();
    return;
} let p = Tb(e, t, o); if (!p || (l.destroy(), vt(p)))
    return; let h = Mb(p, n), m = r(h, () => { c.run(() => { e !== p && Ga(p, m), i(); }); }, a); e !== p && ni(p, m), Nr(s, d, m); } l = ym({ read: u }, { injector: a }); }
function Xs(e, t) { let n = t.get(wb), o = () => n.remove(e); return n.add(e), o; }
var Nb = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, _b = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, wb = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D(j);
    requestIdleCallbackFn = Nb().bind(globalThis);
    cancelIdleCallbackFn = _b().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function ea(e) { return (t, n) => yv(e, t, n); }
function yv(e, t, n) { let o = n.get(vv), r = n.get(j), i = () => o.remove(t); return o.add(e, t, r), i; }
var vv = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Sf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && La(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && La(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), bb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? ad(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), Sb = new w("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Iv = new w("");
function Lc(e, t, n) { return e.get(bb).getOrCreateInjector(t, e, n, ""); }
function Ab(e, t, n) { if (e instanceof _n) {
    let r = e.injector, i = e.parentInjector, s = Lc(i, t, n);
    return new _n(r, s);
} let o = e.get(mt); if (o !== e) {
    let r = Lc(o, t, n);
    return new _n(e, r);
} return Lc(e, t, n); }
function et(e, t, n, o = !1) { let r = n[q], i = r[y]; if (vt(r))
    return; let s = pe(r, t), a = s[ut], c = s[yb]; if (!(c !== null && e < c) && Kp(a, e) && Kp(s[wn] ?? -1, e)) {
    let l = re(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (hv(l) !== null || Sl(l, B.Loading) !== null || Sl(l, B.Placeholder)) ? Al : Ev;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Uu(r, f);
    }
} }
function Rb(e, t) { let n = e[Ee]?.findIndex(r => r.data[pr] === t[ut]) ?? -1; return { dehydratedView: n > -1 ? e[Ee][n] : null, dehydratedViewIx: n }; }
function Ev(e, t, n, o, r) { x(20); let i = Db(e, r, o); if (i !== null) {
    t[ut] = e;
    let s = r[y], a = i + I, c = It(s, a), l = 0;
    Wu(n, l);
    let u;
    if (e === B.Complete) {
        let h = re(s, o), m = h.providers;
        m && m.length > 0 && (u = Ab(r[A], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = Rb(n, t), p = no(r, c, null, { injector: u, dehydratedView: d });
    if (oo(n, p, l, qt(c, d)), Dr(p, 2), f > -1 && n[Ee]?.splice(f, 1), (e === B.Complete || e === B.Error) && Array.isArray(t[bn])) {
        for (let h of t[bn])
            h();
        t[bn] = null;
    }
} x(21); }
function kb(e, t, n, o, r) { let i = Date.now(), s = r[y], a = re(s, o); if (t[xo] === null || t[xo] <= i) {
    t[xo] = null;
    let c = hv(a), l = t[yi] !== null;
    if (e === B.Loading && c !== null && !l) {
        t[wn] = e;
        let u = Yp(c, t, o, n, r);
        t[yi] = u;
    }
    else {
        e > B.Loading && l && (t[yi](), t[yi] = null, t[wn] = null), Ev(e, t, n, o, r);
        let u = Sl(a, e);
        u !== null && (t[xo] = i + u, Yp(u, t, o, n, r));
    }
}
else
    t[wn] = e; }
function Yp(e, t, n, o, r) { return yv(e, () => { let s = t[wn]; t[xo] = null, t[wn] = null, s !== null && et(s, n, o); }, r[A]); }
function Kp(e, t) { return e < t; }
function ao(e, t) { let n = e[t.index]; et(B.Placeholder, t, n); }
function Jp(e, t, n) { e.loadingPromise.then(() => { e.loadingState === J.COMPLETE ? et(B.Complete, t, n) : e.loadingState === J.FAILED && et(B.Error, t, n); }); }
var Al = null;
function Dv(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ae(r, n)), o != null && (t.loadingBlockConfig = ae(r, o)), Al === null && (Al = kb); }
var Si = "__ngAsyncComponentMetadataFn__";
function xb(e) { return e[Si] ?? null; }
function Cv(e, t, n) { let o = e; return o[Si] = () => Promise.all(t()).then(r => (n(...r), o[Si] = null, r)), o[Si]; }
function hd(e, t, n, o) { return We(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = G(G({}, r.propDecorators), o) : r.propDecorators = o); }); }
var Ob = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Ai(e, t) { let n = e[y]; for (let o = I; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = re(n, s);
            if (gv(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        Y(r[H]) && Ai(r[H], t);
        for (let s = F; s < r.length; s++)
            Ai(r[s], t);
    }
    else
        Y(e[o]) && Ai(e[o], t); }
function Pb() { return Z("Chrome DevTools profiling"), () => { }; }
function Lb(e) { let t = it(), n = e.get(st), o = cg(t, n), r = {}; for (let [i, s] of Object.entries(o))
    nM(i) || (r[i] = s); return r; }
var Xp = "ng";
function Fb(e, t) { jb(e, t); }
function jb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = ve;
    n[Xp] ??= {}, n[Xp][e] = t;
} }
var Tv = new w(""), Mv = new w(""), Hb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Ha() && (this._destroyRef = D(fn, { optional: !0 }) ?? void 0), gd || (_v(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { j.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Ae(j), Ae(Nv), Ae(Mv)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac });
} return e; })(), Nv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return gd?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function _v(e) { gd = e; }
var gd;
function md(e) { return !!e && typeof e.then == "function"; }
function wv(e) { return !!e && typeof e.subscribe == "function"; }
var yd = new w("");
function Vb(e) { return ze([{ provide: yd, multi: !0, useValue: e }]); }
var vd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(yd, { optional: !0 }) ?? [];
    injector = D(De);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Kr(this.injector, r);
        if (md(i))
            n.push(i);
        else if (wv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), wr = new w("");
function Id() { Cf(() => { let e = ""; throw new _(600, e); }); }
function bv(e) { return e.isBoundToModule; }
var Rl = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, Bb = 10;
function Ed(e, t) { return Array.isArray(t) ? t.reduce(Ed, e) : G(G({}, e), t); }
var Pe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(Ct);
    afterRenderManager = D(As);
    zonelessEnabled = D(pn);
    rootEffectScheduler = D(vc);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Zl;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Tt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(BC(n => !n)); }
    constructor() { D(eo, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(mt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = De.NULL) { return this._injector.get(j).run(() => { x(10); let s = n instanceof Qs; if (!this._injector.get(vd).done) {
        let h = "";
        throw new _(405, h);
    } let c; s ? c = n : c = this._injector.get(Tr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = bv(c) ? void 0 : this._injector.get(Ln), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(Tv, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Fo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), x(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { x(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ss.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new _(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), x(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(er, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < Bb;)
        x(14), this.synchronizeOnce(), x(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !_o(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            jm(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => _o(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Fo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(wr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Fo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new _(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Fo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Dd() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Sv(e) { let t = g(), n = T(); if (ao(t, n), !kv(0, t))
    return; let o = t[A], r = pe(t, n), i = e(() => he(0, t, n), o); Nr(0, r, i); }
function Av(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[A], o = T(), r = t[y], i = re(r, o); if (i.loadingState === J.NOT_STARTED) {
    let s = pe(t, o), c = e(() => br(i, t, o), n);
    Nr(1, s, c);
} }
function Rv(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[A], r = pe(t, n), i = r[Js], s = e(() => dt(o, i), o); Nr(2, r, s); }
function br(e, t, n) { ta(e, t, n); }
function ta(e, t, n) { let o = t[A], r = t[y]; if (e.loadingState !== J.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = pe(t, n), s = Cb(r, e); e.loadingState = J.IN_PROGRESS, bi(1, i); let a = e.dependencyResolverFn, c = o.get(yc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = W(h) || Me(h);
        if (m)
            d.push(m);
        else {
            let v = Fe(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = J.FAILED, e.errorTmplIndex === null) {
        let h = new _(-750, !1);
        Uu(t, h);
    }
}
else {
    e.loadingState = J.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Zp(p.directiveRegistry, d);
        let h = d.map(v => v.type), m = Fa(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Zp(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = J.COMPLETE, c(); }), e.loadingPromise); }
function kv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[A].get(Iv, null, { optional: !0 })?.behavior === fd.Manual); }
function he(e, t, n) { let o = t[y], r = t[n.index]; if (!kv(e, t))
    return; let i = pe(t, n), s = re(o, n); switch (fv(i), s.loadingState) {
    case J.NOT_STARTED:
        et(B.Loading, n, r), ta(s, t, n), s.loadingState === J.IN_PROGRESS && Jp(s, n, r);
        break;
    case J.IN_PROGRESS:
        et(B.Loading, n, r), Jp(s, n, r);
        break;
    case J.COMPLETE:
        et(B.Complete, n, r);
        break;
    case J.FAILED:
        et(B.Error, n, r);
        break;
    default:
} }
function dt(e, t, n) { return fo(this, null, function* () { let o = e.get(at); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = dM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), Wb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield eh(e, s, n) : o.awaitParentBlock(a, () => fo(null, null, function* () { return yield eh(e, s, n); })); }); }
function eh(e, t, n) { return fo(this, null, function* () { let o = e.get(at), r = o.hydrating, i = e.get(Tt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield qb(u), yield Gb(e), $b(u)) {
            Y_(u), th(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        Ub(c, t, o), th(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), K_(o.get(a), t, o, e.get(Pe)); }); }
function $b(e) { return pe(e.lView, e.tNode)[ut] === B.Error; }
function Ub(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && zs(r.lContainer); }
function th(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function Wb(e, t) { for (let n of t)
    e.hydrating.set(n, Dd()); }
function Gb(e) { return new Promise(t => Ou(t, { injector: e })); }
function qb(e) { return fo(this, null, function* () { let { tNode: t, lView: n } = e, o = pe(n, t); return new Promise(r => { zb(o, r), he(2, n, t); }); }); }
function zb(e, t) { Array.isArray(e[bn]) || (e[bn] = []), e[bn].push(t); }
function z(e, t, n) { return e === 0 ? nh(t, n) : e === 2 ? !nh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function Qb(e) { return e != null && (e & 1) === 1; }
function nh(e, t) { let n = e[A], o = re(e[y], t), r = gr(n), i = Qb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = pe(e, t)[Js] !== null; return !(i && a && r); }
function St(e, t) { let n = re(e, t); return n.hydrateTriggers ??= new Map; }
function xv(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[tt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} Zb(e, o), Jb(e, s), Yb(e, i), Kb(e, r); }
function Zb(e, t) { for (let n of t) {
    let o = e.get(at), i = Xs(() => dt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function Yb(e, t) { if (t.length > 0) {
    let n = e.get(at);
    for (let o of t) {
        let r = pd(o.el, () => dt(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function Kb(e, t) { for (let n of t) {
    let o = e.get(at), r = () => dt(e, n.blockName), s = ea(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function Jb(e, t) { for (let n of t)
    dt(e, n.blockName); }
function Ov(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = N(), f = e + I, p = Qt(u, d, e, null, 0, 0), h = u[A], m = gr(h); if (d.firstCreatePass) {
    Z("NgDefer");
    let qe = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: J.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, qe, a, s), Eb(d, f, qe);
} let v = u[f]; xy(v, p, u); let E = null, S = null; if (v[Ee]?.length > 0) {
    let qe = v[Ee][0].data;
    S = qe[ys] ?? null, E = qe[pr];
} let ce = [null, rr.Initial, null, null, null, null, S, E, null, null]; Ib(u, f, ce); let Se = null; S !== null && m && (Se = h.get(at), Se.add(S, { lView: u, tNode: p, lContainer: v })); let Ce = () => { fv(ce), S !== null && Se?.cleanup([S]); }; Nr(0, ce, () => Ga(u, Ce)), ni(u, Ce); }
function Pv(e) { let t = g(), n = _e(); if (!z(0, t, n))
    return; let o = de(); if ($(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = pe(t, n)[ut];
        i === !1 && a === rr.Initial ? ao(t, n) : i === !0 && (a === rr.Initial || a === B.Placeholder) && he(0, t, n);
    }
    finally {
        R(r);
    }
} }
function Lv(e) { let t = g(), n = _e(); if (!z(1, t, n))
    return; let o = de(); if ($(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[y], a = re(s, n);
        i === !0 && a.loadingState === J.NOT_STARTED && br(a, t, n);
    }
    finally {
        R(r);
    }
} }
function Fv(e) { let t = g(), n = _e(); if (!z(2, t, n))
    return; let o = de(), r = N(); if (St(r, n).set(6, null), $(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        he(2, t, n);
    else {
        let s = t[A], a = R(null);
        try {
            if (!!e === !0) {
                let u = pe(t, n)[Js];
                dt(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function jv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function Hv() { let e = g(), t = T(); z(0, e, t) && Sv(Xs); }
function Vv() { let e = g(), t = T(); z(1, e, t) && Av(Xs); }
function Bv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? he(2, e, t) : Rv(Xs, e, t); }
function $v() { let e = g(), t = T(); if (!z(0, e, t))
    return; re(e[y], t).loadingTmplIndex === null && ao(e, t), he(0, e, t); }
function Uv() { let e = g(), t = T(); if (!z(1, e, t))
    return; let n = e[y], o = re(n, t); o.loadingState === J.NOT_STARTED && ta(o, e, t); }
function Wv() { let e = g(), t = T(); if (!z(2, e, t))
    return; if (St(N(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    he(2, e, t);
else {
    let o = e[A], i = pe(e, t)[Js];
    dt(o, i);
} }
function Gv(e) { let t = g(), n = T(); z(0, t, n) && Sv(ea(e)); }
function qv(e) { let t = g(), n = T(); z(1, t, n) && Av(ea(e)); }
function zv(e) { let t = g(), n = T(); if (!z(2, t, n))
    return; St(N(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? he(2, t, n) : Rv(ea(e), t, n); }
function Qv(e, t) { let n = g(), o = T(); z(0, n, o) && (ao(n, o), typeof ngServerMode < "u" && ngServerMode || so(n, o, e, t, pg, () => he(0, n, o), 0)); }
function Zv(e, t) { let n = g(), o = T(); if (!z(1, n, o))
    return; let r = n[y], i = re(r, o); i.loadingState === J.NOT_STARTED && so(n, o, e, t, pg, () => br(i, n, o), 1); }
function Yv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function Kv(e, t) { let n = g(), o = T(); z(0, n, o) && (ao(n, o), typeof ngServerMode < "u" && ngServerMode || so(n, o, e, t, fg, () => he(0, n, o), 0)); }
function Jv(e, t) { let n = g(), o = T(); if (!z(1, n, o))
    return; let r = n[y], i = re(r, o); i.loadingState === J.NOT_STARTED && so(n, o, e, t, fg, () => br(i, n, o), 1); }
function Xv() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function eI(e, t) { let n = g(), o = T(); z(0, n, o) && (ao(n, o), typeof ngServerMode < "u" && ngServerMode || so(n, o, e, t, pd, () => he(0, n, o), 0)); }
function tI(e, t) { let n = g(), o = T(); if (!z(1, n, o))
    return; let r = n[y], i = re(r, o); i.loadingState === J.NOT_STARTED && so(n, o, e, t, pd, () => br(i, n, o), 1); }
function nI() { let e = g(), t = T(); if (!z(2, e, t))
    return; St(N(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && he(2, e, t); }
function Cd(e, t) { let n = g(), o = de(); if ($(n, o, t)) {
    let r = N(), i = _e();
    if (Hs(i, r, n, e, t))
        ge(i) && km(n, i.index);
    else {
        let a = ne(i, n);
        Ls(n[C], a, null, i.value, e, t, null);
    }
} return Cd; }
function Td(e, t, n, o) { let r = g(), i = de(); if ($(r, i, t)) {
    let s = N(), a = _e();
    $N(a, r, e, t, n, o);
} return Td; }
var oI = new w("", { providedIn: "root", factory: () => !1 }), rI = new w("", { providedIn: "root", factory: () => Xb }), Xb = 4e3, eS = !1, nn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function na(e) { return e[A].get(oI, eS); }
function tS(e, t, n) { let o = Hn.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Hn.set(e, { classList: t, cleanupFns: n }); }
function Md(e) { let t = Hn.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Hn.delete(e);
} $t.delete(e); }
var nS = () => { }, Hn = new WeakMap, $t = new WeakMap, Sn = new WeakMap;
function kl(e, t) { let n = Sn.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Sn.delete(e); }
function oa(e, t) { let n = Sn.get(e)?.shift(), o = t[Ze]; if (o) {
    let i = qi(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function iI(e, t) { Sn.has(e) ? Sn.get(e)?.push(t) : Sn.set(e, [t]); }
function ns(e) { let t = e[Ye] ??= {}; return t.enter ??= new Map; }
function Zt(e) { let t = e[Ye] ??= {}; return t.leave ??= new Map; }
function sI(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function oS(e, t) { if (!nn)
    return; let n = Hn.get(e); if (n && n.classList.length > 0 && rS(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Md(e); }
function rS(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function aI(e, t) { let n = $t.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function ra(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function xl(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Ol(e, t) { let n = Zt(e).get(t.index); n && (n.resolvers = void 0); }
function vi(e, t, n, o, r) { kl(t, n), xl(o, r), Ol(e, t); }
function jo(e) { if (Z("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return jo; let t = g(); if (na(t))
    return jo; let n = T(); return oa(n, t), ra(ns(t), n, () => iS(t, n, e)), xs(t[A]), Pu(t[A], ns(t)), jo; }
function iS(e, t, n) { let o = ne(t, e), r = e[C], i = e[A].get(j), s = sI(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && sS(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), tS(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (fm(o, $t, nn), !$t.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        Md(o);
    } }); });
} }
function sS(e, t, n) { let o = Hn.get(t); if (!(e.target !== t || !o) && aI(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Md(t);
} }
function Ho(e) { if (Z("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return Ho; let t = g(); if (na(t))
    return Ho; let n = T(); return oa(n, t), ra(ns(t), n, () => aS(t, n, e)), xs(t[A]), Pu(t[A], ns(t)), Ho; }
function aS(e, t, n) { let o = ne(t, e); n.call(e[L], { target: o, animationComplete: nS }); }
function Vo(e) { if (Z("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return Vo; let t = g(); if (na(t))
    return Vo; let o = T(); return oa(o, t), ra(Zt(t), o, () => cS(t, o, e)), xs(t[A]), Vo; }
function cS(e, t, n) { let { promise: o, resolve: r } = Dd(), i = ne(t, e), s = e[C], a = e[A].get(j); Gt.add(e), (Zt(e).get(t.index).resolvers ??= []).push(r); let c = sI(n); return c && c.length > 0 ? lS(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function lS(e, t, n, o, r, i) { oS(e, r); let s = [], a = Zt(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || aI(l, e))) {
    if (l.stopImmediatePropagation(), $t.delete(e), kl(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    xl(a, s), Ol(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), iI(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { fm(e, $t, nn), $t.has(e) || (kl(t, e), xl(a, s), Ol(n, t)); }); }); }
function os(e) { if (Z("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !nn)
    return os; let t = g(), n = T(); return oa(n, t), Gt.add(t), ra(Zt(t), n, () => uS(t, n, e)), xs(t[A]), os; }
function uS(e, t, n) { let { promise: o, resolve: r } = Dd(), i = ne(t, e), s = [], a = e[C], c = na(e), l = e[A].get(j), u = e[A].get(rI); (Zt(e).get(t.index).resolvers ??= []).push(r); let d = Zt(e).get(t.index)?.resolvers; if (c)
    vi(e, t, i, d, s);
else {
    let f = setTimeout(() => vi(e, t, i, d, s), u), p = { target: i, animationComplete: () => { vi(e, t, i, d, s), clearTimeout(f); } };
    iI(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { vi(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[L], p);
} return { promise: o, resolve: r }; }
function cI() { return g()[Q][L]; }
var Pl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Fc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function dS(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Fc(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Fc(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), v = n(s, f), E = n(i, u);
        if (Object.is(E, v)) {
            let S = n(c, p);
            Object.is(S, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new rs, r ??= rh(e, i, s, n), Ll(e, o, i, E))
            e.updateValue(i, u), i++, s++;
        else if (r.has(E))
            o.set(m, e.detach(i)), s--;
        else {
            let S = e.create(i, t[i]);
            e.attach(i, S), i++, s++;
        }
    }
    for (; i <= c;)
        oh(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Fc(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new rs, r ??= rh(e, i, s, n);
            let p = n(i, d);
            if (Ll(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        oh(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function Ll(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function oh(e, t, n, o, r) { if (Ll(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function rh(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var rs = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function lI(e, t, n, o, r, i, s, a) { Z("NgControlFlow"); let c = g(), l = N(), u = ae(l.consts, i); return Qt(c, l, e, t, n, o, r, u, 256, s, a), ia; }
function ia(e, t, n, o, r, i, s, a) { Z("NgControlFlow"); let c = g(), l = N(), u = ae(l.consts, i); return Qt(c, l, e, t, n, o, r, u, 512, s, a), ia; }
function uI(e, t) { Z("NgControlFlow"); let n = g(), o = de(), r = n[o] !== O ? n[o] : -1, i = r !== -1 ? is(n, I + r) : void 0, s = 0; if ($(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && Wu(i, s), e !== -1) {
            let c = I + e, l = is(n, c), u = Vl(n[y], c), d = gy(l, u, n), f = no(n, u, t, { dehydratedView: d });
            oo(l, f, s, qt(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = Wm(i, s);
    a !== void 0 && (a[L] = t);
} }
var Fl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - F; }
};
function dI(e) { return e; }
function fI(e, t) { return t; }
var jl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function pI(e, t, n, o, r, i, s, a, c, l, u, d, f) { Z("NgControlFlow"); let p = g(), h = N(), m = c !== void 0, v = g(), E = a ? s.bind(v[Q][L]) : s, S = new jl(m, E); v[I + e] = S, Qt(p, h, e + 1, t, n, o, r, ae(h.consts, i), 256), m && Qt(p, h, e + 2, c, l, u, d, ae(h.consts, f), 512); }
var Hl = class extends Pl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - F; }
    at(t) { return this.getLView(t)[L].$implicit; }
    attach(t, n) { let o = n[te]; this.needsIndexUpdate ||= t !== this.length, oo(this.lContainer, n, t, qt(this.templateTNode, o)), fS(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, pS(this.lContainer, t), hS(this.lContainer, t); }
    create(t, n) { let o = Xo(this.lContainer, this.templateTNode.tView.ssrId), r = no(this.hostLView, this.templateTNode, new Fl(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { Er(t[y], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[L].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[L].$index = t; }
    getLView(t) { return gS(this.lContainer, t); }
};
function hI(e) { let t = R(null), n = oe(); try {
    let o = g(), r = o[y], i = o[n], s = n + 1, a = is(o, s);
    if (i.liveCollection === void 0) {
        let l = Vl(r, s);
        i.liveCollection = new Hl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (dS(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = de(), u = c.length === 0;
        if ($(o, l, u)) {
            let d = n + 2, f = is(o, d);
            if (u) {
                let p = Vl(r, d), h = gy(f, p, o), m = no(o, p, void 0, { dehydratedView: h });
                oo(f, m, 0, qt(p, h));
            }
            else
                r.firstUpdatePass && qs(f), Wu(f, 0);
        }
    }
}
finally {
    R(t);
} }
function is(e, t) { return e[t]; }
function fS(e, t) { if (e.length <= F)
    return; let n = F + t, o = e[n], r = o ? o[Ye] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[A];
    NN(i, r), Gt.delete(o), r.detachedLeaveAnimationFns = void 0;
} }
function pS(e, t) { if (e.length <= F)
    return; let n = F + t, o = e[n], r = o ? o[Ye] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function hS(e, t) { return Ko(e, t); }
function gS(e, t) { return Wm(e, t); }
function Vl(e, t) { return It(e, t); }
function Nd(e, t, n) { let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e();
    Vu(s, o, e, t, o[C], n);
} return Nd; }
function Bl(e, t, n, o, r) { Hs(t, e, n, r ? "class" : "style", o); }
function sa(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? Yu(s, r, 2, t, $u, oi(), n, o) : i.data[s]; if (Fs(a, r, e, t, bd), un(a)) {
    let c = r[y];
    Ps(c, r, a), yu(c, a, r);
} return o != null && to(r, a), sa; }
function aa() { let e = N(), t = T(), n = js(t); return e.firstCreatePass && Ku(e, n), za(n) && Ya(), qa(), n.classesWithoutHost != null && JC(n) && Bl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && XC(n) && Bl(e, n, g(), n.stylesWithoutHost, !1), aa; }
function _d(e, t, n, o) { return sa(e, t, n, o), aa(), _d; }
function ca(e, t, n, o) { let r = g(), i = r[y], s = e + I, a = i.firstCreatePass ? Cy(s, i, 2, t, n, o) : i.data[s]; return Fs(a, r, e, t, bd), o != null && to(r, a), ca; }
function la() { let e = T(), t = js(e); return za(t) && Ya(), qa(), la; }
function wd(e, t, n, o) { return ca(e, t, n, o), la(), wd; }
var bd = (e, t, n, o, r) => (xe(!0), _s(t[C], o, fc()));
function mS(e, t, n, o, r) { let i = !Ms(t, n); if (xe(i), i)
    return _s(t[C], o, fc()); let s = t[te], a = Cr(s, e, t, n); return wg(s, r) && Cs(s, r, a.nextSibling), s && (eu(n) || Zh(a)) && ge(n) && (qf(n), im(a)), a; }
function gI() { bd = mS; }
function ua(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? Yu(i, o, 8, "ng-container", $u, oi(), t, n) : r.data[i]; if (Fs(s, o, e, "ng-container", kd), un(s)) {
    let a = o[y];
    Ps(a, o, s), yu(a, s, o);
} return n != null && to(o, s), ua; }
function Sr() { let e = N(), t = T(), n = js(t); return e.firstCreatePass && Ku(e, n), Sr; }
function Sd(e, t, n) { return ua(e, t, n), Sr(), Sd; }
function da(e, t, n) { let o = g(), r = o[y], i = e + I, s = r.firstCreatePass ? Cy(i, r, 8, "ng-container", t, n) : r.data[i]; return Fs(s, o, e, "ng-container", kd), n != null && to(o, s), da; }
function Ad() { let e = T(), t = js(e); return Sr; }
function Rd(e, t, n) { return da(e, t, n), Ad(), Rd; }
var kd = (e, t, n, o, r) => (xe(!0), Nu(t[C], ""));
function yS(e, t, n, o, r) { let i, s = !Ms(t, n); if (xe(s), s)
    return Nu(t[C], ""); let a = t[te], c = Cr(a, e, t, n), l = _g(a, r); return Cs(a, r, c), i = Ws(l, c), i; }
function mI() { kd = yS; }
function yI() { return g(); }
function xd(e, t, n) { let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e();
    Bu(s, o, e, t, o[C], n);
} return xd; }
function Od(e, t, n) { let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e(), a = ri(i.data), c = xm(a, s, o);
    Bu(s, o, e, t, c, n);
} return Od; }
var Ii = void 0;
function vS(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var IS = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Ii, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Ii, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Ii, "{1} 'at' {0}", Ii], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", vS], An = {};
function ES(e, t, n) { typeof t != "string" && (n = t, t = e[Vn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), An[t] = e, n && (An[t][Vn.ExtraData] = n); }
function Pd(e) { let t = TS(e), n = ih(t); if (n)
    return n; let o = t.split("-")[0]; if (n = ih(o), n)
    return n; if (o === "en")
    return IS; throw new _(701, !1); }
function DS(e) { return Pd(e)[Vn.CurrencyCode] || null; }
function vI(e) { return Pd(e)[Vn.PluralCase]; }
function ih(e) { return e in An || (An[e] = ve.ng && ve.ng.common && ve.ng.common.locales && ve.ng.common.locales[e]), An[e]; }
function CS() { An = {}; }
var Vn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Vn || {});
function TS(e) { return e.toLowerCase().replace(/_/g, "-"); }
var MS = ["zero", "one", "two", "few", "many"];
function NS(e, t) { let n = vI(t)(parseInt(e, 10)), o = MS[n]; return o !== void 0 ? o : "other"; }
var Ar = "en-US", _S = "USD", II = { marker: "element" }, EI = { marker: "ICU" }, Je = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Je || {}), DI = Ar;
function CI(e) { typeof e == "string" && (DI = e.toLowerCase().replace(/_/g, "-")); }
function wS() { return DI; }
var ir = 0, Bo = 0;
function bS(e) { e && (ir = ir | 1 << Math.min(Bo, 31)), Bo++; }
function SS(e, t, n) { if (Bo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Be() - Bo - 1;
    _I(e, t, r, i, ir);
} ir = 0, Bo = 0; }
function TI(e, t, n) { let o = e[C]; switch (n) {
    case Node.COMMENT_NODE: return Nu(o, t);
    case Node.TEXT_NODE: return Mu(o, t);
    case Node.ELEMENT_NODE: return _s(o, t, null);
} }
var $o = (e, t, n, o) => (xe(!0), TI(e, n, o));
function AS(e, t, n, o) { let r = e[te], i = t - I, s = !Gs() || !r || wo() || Ts(r, i); return xe(s), s ? TI(e, n, o) : Xm(r, i); }
function MI() { $o = AS; }
function RS(e, t, n, o) { let r = e[C]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Je.COMMENT) === Je.COMMENT, l = (s & Je.APPEND_EAGERLY) === Je.APPEND_EAGERLY, u = s >>> Je.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = $o(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = So()), l && n !== null && f && Wt(r, n, d, o, !1);
} }
function NI(e, t, n, o) { let r = n[C], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = $o(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = w_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let m = b_(c), v = n[m];
                    Wt(r, d, v, u, !1);
                    let E = Oo(e, m);
                    if (E !== null && typeof E == "object") {
                        let S = Us(E, n);
                        S !== null && NI(e, E.create[S], n, n[E.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Ls(r, Lt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case EI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = $o(n, u, l, Node.COMMENT_NODE);
                    we(p, n);
                }
                break;
            case II:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = $o(n, f, d, Node.ELEMENT_NODE);
                    we(p, n);
                }
                break;
            default:
        }
} }
function _I(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += M(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Ls(t[C], t[d], null, h, f, c, p) : Vu(h, t, f, c, t[C], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && om(t[C], m, c);
                            break;
                        case 2:
                            kS(e, Oo(e, d), t, c);
                            break;
                        case 3:
                            sh(e, Oo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Oo(e, l);
            t[u.currentCaseLViewIndex] < 0 && sh(e, u, o, t);
        }
    }
    i += a;
} }
function sh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = ir;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), _I(e, o, t.update[r], n, i);
} }
function kS(e, t, n, o) { let r = xS(t, o); if (Us(t, n) !== r && (wI(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && NI(e, t.create[r], n, s), q_(n, t.anchorIdx, r);
} }
function wI(e, t, n) { let o = Us(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Lt(s, n);
            a !== null && vr(n[C], a);
        }
        else
            wI(e, Oo(e, ~s), n);
    }
} }
function xS(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = NS(t, wS());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var ss = /�(\d+):?\d*�/gi, OS = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, PS = /�(\d+)�/, bI = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Uo = "\uFFFD", LS = /�\/?\*(\d+:\d+)�/gi, FS = /�(\/?[#*]\d+):?\d*�/gi, jS = /\uE500/g;
function HS(e) { return e.replace(jS, " "); }
function VS(e, t, n, o, r, i) { let s = dn(), a = [], c = [], l = [[]], u = [[]]; r = WS(r, i); let d = HS(r).split(FS); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = $l(p);
        for (let m = 0; m < h.length; m++) {
            let v = h[m];
            if ((m & 1) === 0) {
                let E = v;
                E !== "" && BS(u[0], e, s, l[0], a, c, n, E);
            }
            else {
                let E = v;
                if (typeof E != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let ce = SI(e, s, l[0], n, a, "", !0).index;
                RI(u[0], e, n, c, t, E, ce);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), v = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Ve(dn(), !1);
        else {
            let E = __(e, l[0], v);
            l.unshift([]), Ve(E, !0);
            let S = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(S), u.unshift(S.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function SI(e, t, n, o, r, i, s) { let a = Ir(e, o, 1, null), c = a << Je.SHIFT, l = dn(); t === l && (l = null), l === null && (c |= Je.APPEND_EAGERLY), s && (c |= Je.COMMENT, pN(A_)), r.push(c, i === null ? "" : i); let u = Gu(e, a, s ? 32 : 1, i === null ? "" : i, null); Zm(n, u); let d = u.index; return Ve(u, !1), l !== null && t !== l && N_(l, d), u; }
function BS(e, t, n, o, r, i, s, a) { let c = a.match(ss), u = SI(t, n, o, s, r, c ? null : a, !1).index; c && Wo(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function $S(e, t, n) { let r = T().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (OS.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Wo(i, c, r, a, US(i), null);
        }
    }
    e.data[t] = i;
} }
function Wo(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(ss), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | AI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function US(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function AI(e) { return 1 << Math.min(e, 31); }
function ah(e) { let t, n = "", o = 0, r = !1, i; for (; (t = LS.exec(e)) !== null;)
    r ? t[0] === `${Uo}/*${i}${Uo}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function WS(e, t) { if (Km(t))
    return ah(e); {
    let n = e.indexOf(`:${t}${Uo}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Uo}\\/\\*\\d+:${t}${Uo}`));
    return ah(e.substring(n, o));
} }
function RI(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Ir(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; QS(o, i, s), M_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let E = p.push(v) - 1;
            f[m] = `<!--\uFFFD${E}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = qS(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && ZS(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function GS(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(bI, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = $l(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = $l(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function $l(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            bI.test(c) ? o.push(GS(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function qS(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = jg(it()).getInertBodyElement(a), h = dl(p) || p; return h ? kI(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function kI(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Ir(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (ll.hasOwnProperty(v)) {
                jc(i, II, v, l, h), t.data[h] = v;
                let Se = m.attributes;
                for (let qe = 0; qe < Se.length; qe++) {
                    let At = Se.item(qe), If = At.name.toLowerCase();
                    !!At.value.match(ss) ? $g.hasOwnProperty(If) && (Iu[If] ? Wo(a, At.value, h, At.name, 0, Ns) : Wo(a, At.value, h, At.name, 0, null)) : YS(i, h, At);
                }
                let Ce = { kind: 1, index: h, children: [] };
                e.push(Ce), f = kI(Ce.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, ch(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let E = p.textContent || "", S = E.match(ss);
            jc(i, null, S ? "" : E, l, h), ch(s, h, d), S && (f = Wo(a, E, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let ce = PS.exec(p.textContent || "");
            if (ce) {
                let Se = parseInt(ce[1], 10), Ce = u[Se];
                jc(i, EI, "", l, h), RI(e, t, o, r, l, Ce, h), zS(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function ch(e, t, n) { n === 0 && e.push(t); }
function zS(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function QS(e, t, n) { e.push(AI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function ZS(e, t, n) { e.push(t, 1, n << 2 | 3); }
function jc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, S_(0, o, r)); }
function YS(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var lh = 0, KS = /\[(�.+?�?)\]/, JS = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, XS = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, eA = /{([A-Z0-9_]+)}/g, tA = /�I18N_EXP_(ICU(_\d+)?)�/g, nA = /\/\*/, oA = /\d+\:(\d+)/;
function rA(e, t = {}) { let n = e; if (KS.test(e)) {
    let o = {}, r = [lh];
    n = n.replace(JS, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(oA), E = v ? parseInt(v[1], 10) : lh, S = nA.test(m); l.push([E, S, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(XS, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(eA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(tA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function Ld(e, t, n = -1) { let o = N(), r = g(), i = I + e, s = ae(o.consts, t), a = dn(); if (o.firstCreatePass && VS(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Q];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[se] ? null : a, u = Cm(o, l, r), d = a && a.type & 8 ? r[a.index] : null; V_(r, i, a, n), RS(r, c.create, u, d), ic(!0); }
function Fd() { ic(!1); }
function xI(e, t, n) { Ld(e, t, n), Fd(); }
function OI(e, t) { let n = N(), o = ae(n.consts, t); $S(n, e + I, o); }
function jd(e) { let t = g(); return bS($(t, de(), e)), jd; }
function PI(e) { SS(N(), g(), e + I); }
function LI(e, t = {}) { return rA(e, t); }
function Hd(e, t, n) { let o = g(), r = N(), i = T(); return $d(r, o, o[C], i, e, t, n), Hd; }
function Vd(e, t) { let n = T(), o = g(), r = N(), i = ri(r.data), s = xm(i, n, o); return $d(r, o, s, n, e, t), Vd; }
function Bd(e, t, n) { let o = g(), r = N(), i = T(); return (i.type & 3 || n) && Ny(i, r, o, n, o[C], e, t, Lo(i, o, t)), Bd; }
function $d(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Lo(o, t, i), Ny(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Lo(o, t, i), Ki(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Lo(o, t, i), Ki(o, t, d, r, r, c);
} }
function FI(e = 1) { return Kf(e); }
function iA(e, t) { let n = null, o = nN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? nm(e, i, !0) : iN(o, i))
        return r;
} return n; }
function jI(e) { let t = g()[Q][se]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = yo(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? iA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function HI(e, t = 0, n, o, r, i) { let s = g(), a = N(), c = o ? e + 1 : null; c !== null && Qt(s, a, c, o, r, i, null, n); let l = tn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), ec(); let d = !s[te] || wo(); s[Q][se].projection[l.projection] === null && c !== null ? sA(s, a, c) : d && !Kn(l) && kN(a, s, l); }
function sA(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = Xo(i, r.tView.ssrId), a = no(e, r, void 0, { dehydratedView: s }); oo(i, a, 0, qt(r, s)); }
function VI(e, t, n, o) { Hy(e, t, n, o); }
function BI(e, t, n) { jy(e, t, n); }
function $I(e) { let t = g(), n = N(), o = ii(); bo(o + 1); let r = ed(n, o); if (e.dirty && Ff(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = By(t, o);
        e.reset(i, Qh), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function UI() { return Xu(g(), ii()); }
function WI(e, t, n, o, r) { $y(t, Hy(e, n, o, r)); }
function GI(e, t, n, o) { $y(e, jy(t, n, o)); }
function qI(e = 1) { bo(ii() + e); }
function zI(e) { let t = tc(); return Et(t, I + e); }
function Ei(e, t) { return e << 17 | t << 2; }
function Yt(e) { return e >> 17 & 32767; }
function aA(e) { return (e & 2) == 2; }
function cA(e, t) { return e & 131071 | t << 17; }
function Ul(e) { return e | 2; }
function Bn(e) { return (e & 131068) >> 2; }
function Hc(e, t) { return e & -131069 | t << 2; }
function lA(e) { return (e & 1) === 1; }
function Wl(e) { return e | 1; }
function uA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Yt(s), c = Bn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || zr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Yt(e[a + 1]);
        e[o + 1] = Ei(f, a), f !== 0 && (e[f + 1] = Hc(e[f + 1], o)), e[a + 1] = cA(e[a + 1], o);
    }
    else
        e[o + 1] = Ei(a, 0), a !== 0 && (e[a + 1] = Hc(e[a + 1], o)), a = o;
else
    e[o + 1] = Ei(c, 0), a === 0 ? a = o : e[c + 1] = Hc(e[c + 1], o), c = o; l && (e[o + 1] = Ul(e[o + 1])), uh(e, u, o, !0), uh(e, u, o, !1), dA(t, u, e, o, i), s = Ei(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function dA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && zr(i, t) >= 0 && (n[o + 1] = Wl(n[o + 1])); }
function uh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Yt(r) : Bn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    fA(c, t) && (a = !0, e[s + 1] = o ? Wl(l) : Ul(l)), s = o ? Yt(l) : Bn(l);
} a && (e[n + 1] = o ? Ul(r) : Wl(r)); }
function fA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? zr(e, t) >= 0 : !1; }
var ee = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function QI(e) { return e.substring(ee.key, ee.keyEnd); }
function pA(e) { return e.substring(ee.value, ee.valueEnd); }
function hA(e) { return KI(e), ZI(e, $n(e, 0, ee.textEnd)); }
function ZI(e, t) { let n = ee.textEnd; return n === t ? -1 : (t = ee.keyEnd = mA(e, ee.key = t, n), $n(e, t, n)); }
function gA(e) { return KI(e), YI(e, $n(e, 0, ee.textEnd)); }
function YI(e, t) { let n = ee.textEnd, o = ee.key = $n(e, t, n); return n === o ? -1 : (o = ee.keyEnd = yA(e, o, n), o = dh(e, o, n, 58), o = ee.value = $n(e, o, n), o = ee.valueEnd = vA(e, o, n), dh(e, o, n, 59)); }
function KI(e) { ee.key = 0, ee.keyEnd = 0, ee.value = 0, ee.valueEnd = 0, ee.textEnd = e.length; }
function $n(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function mA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function yA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function dh(e, t, n, o) { return t = $n(e, t, n), t < n && t++, t; }
function vA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = fh(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = fh(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function fh(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function Ud(e, t, n) { return eE(e, t, n, !1), Ud; }
function Wd(e, t) { return eE(e, t, null, !0), Wd; }
function JI(e) { tE(rE, IA, e, !1); }
function IA(e, t) { for (let n = gA(t); n >= 0; n = YI(t, n))
    rE(e, QI(t), pA(t)); }
function XI(e) { tE(_A, EA, e, !0); }
function EA(e, t) { for (let n = hA(t); n >= 0; n = ZI(t, n))
    vo(e, QI(t), !0); }
function eE(e, t, n, o) { let r = g(), i = N(), s = $e(2); if (i.firstUpdatePass && oE(i, e, s, o), t !== O && $(r, s, t)) {
    let a = i.data[oe()];
    iE(i, a, r, r[C], e, r[s + 1] = bA(t, n), o, s);
} }
function tE(e, t, n, o) { let r = N(), i = $e(2); r.firstUpdatePass && oE(r, null, i, o); let s = g(); if (n !== O && $(s, i, n)) {
    let a = r.data[oe()];
    if (sE(a, o) && !nE(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Hr(c, n || "")), Bl(r, a, s, n, o);
    }
    else
        wA(r, a, s, s[C], s[i + 1], s[i + 1] = NA(e, t, n), o, i);
} }
function nE(e, t) { return t >= e.expandoStartIndex; }
function oE(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[oe()], s = nE(e, n);
    sE(i, o) && t === null && !s && (t = !1), t = DA(r, i, t, o), uA(r, i, t, n, s, o);
} }
function DA(e, t, n, o) { let r = ri(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Vc(null, e, t, n, o), n = sr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Vc(r, e, t, n, o), i === null) {
            let c = CA(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Vc(null, e, t, c[1], o), c = sr(c, t.attrs, o), TA(e, t, o, c));
        }
        else
            i = MA(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function CA(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Bn(o) !== 0)
    return e[Yt(o)]; }
function TA(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Yt(r)] = o; }
function MA(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = sr(o, s, n);
} return sr(o, t.attrs, n); }
function Vc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = sr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function sr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), vo(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function NA(e, t, n) { if (n == null || n === "")
    return P; let o = [], r = ct(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function rE(e, t, n) { vo(e, t, ct(n)); }
function _A(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && vo(e, o, n); }
function wA(e, t, n, o, r, i, s, a) { r === O && (r = P); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && iE(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function iE(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = lA(l) ? ph(c, t, n, r, Bn(l), s) : void 0; if (!as(u)) {
    as(i) || aA(l) && (i = ph(c, null, n, r, a, s));
    let d = Lt(oe(), n);
    ON(o, s, d, r, i);
} }
function ph(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === O && (f = d ? P : void 0);
    let p = d ? qr(f, o) : u === o ? f : void 0;
    if (l && !as(p) && (p = qr(c, o)), as(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Yt(h) : Bn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = qr(c, o));
} return a; }
function as(e) { return e !== void 0; }
function bA(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = on(ct(e)))), e; }
function sE(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function aE(e, t = "") { let n = g(), o = N(), r = e + I, i = o.firstCreatePass ? tn(o, r, 1, t, null) : o.data[r], s = cE(o, n, i, t, e); n[r] = s, So() && ju(o, n, s, i), Ve(i, !1); }
var cE = (e, t, n, o, r) => (xe(!0), Mu(t[C], o));
function SA(e, t, n, o, r) { let i = !Ms(t, n); if (xe(i), i)
    return Mu(t[C], o); let s = t[te]; return Cr(s, e, t, n); }
function lE() { cE = SA; }
function uE(e, t) { let n = !1, o = Be(); for (let i = 1; i < t.length; i += 2)
    n = $(e, o++, t[i]) || n; if (rc(o), !n)
    return O; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += M(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function dE(e, t, n, o = "") { return $(e, de(), n) ? t + M(n) + o : O; }
function fE(e, t, n, o, r, i = "") { let s = Be(), a = zt(e, s, n, r); return $e(2), a ? t + M(n) + o + M(r) + i : O; }
function pE(e, t, n, o, r, i, s, a = "") { let c = Be(), l = Ys(e, c, n, r, s); return $e(3), l ? t + M(n) + o + M(r) + i + M(s) + a : O; }
function hE(e, t, n, o, r, i, s, a, c, l = "") { let u = Be(), d = be(e, u, n, r, s, c); return $e(4), d ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l : O; }
function gE(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Be(), p = be(e, f, n, r, s, c); return p = $(e, f + 4, u) || p, $e(5), p ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d : O; }
function mE(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Be(), m = be(e, h, n, r, s, c); return m = zt(e, h + 4, u, f) || m, $e(6), m ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p : O; }
function yE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let v = Be(), E = be(e, v, n, r, s, c); return E = Ys(e, v + 4, u, f, h) || E, $e(7), E ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + m : O; }
function vE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v, E = "") { let S = Be(), ce = be(e, S, n, r, s, c); return ce = be(e, S + 4, u, f, h, v) || ce, $e(8), ce ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + m + M(v) + E : O; }
function Gd(e) { return fa("", e), Gd; }
function fa(e, t, n) { let o = g(), r = dE(o, e, t, n); return r !== O && ft(o, oe(), r), fa; }
function qd(e, t, n, o, r) { let i = g(), s = fE(i, e, t, n, o, r); return s !== O && ft(i, oe(), s), qd; }
function zd(e, t, n, o, r, i, s) { let a = g(), c = pE(a, e, t, n, o, r, i, s); return c !== O && ft(a, oe(), c), zd; }
function Qd(e, t, n, o, r, i, s, a, c) { let l = g(), u = hE(l, e, t, n, o, r, i, s, a, c); return u !== O && ft(l, oe(), u), Qd; }
function Zd(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = gE(d, e, t, n, o, r, i, s, a, c, l, u); return f !== O && ft(d, oe(), f), Zd; }
function Yd(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = mE(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== O && ft(p, oe(), h), Yd; }
function Kd(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), v = yE(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== O && ft(m, oe(), v), Kd; }
function Jd(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v) { let E = g(), S = vE(E, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); return S !== O && ft(E, oe(), S), Jd; }
function Xd(e) { let t = g(), n = uE(t, e); return n !== O && ft(t, oe(), n), Xd; }
function ft(e, t, n) { let o = Lt(t, e); om(e[C], o, n); }
function ef(e, t, n) { gc(t) && (t = t()); let o = g(), r = de(); if ($(o, r, t)) {
    let i = N(), s = _e();
    Vu(s, o, e, t, o[C], n);
} return ef; }
function IE(e, t) { let n = gc(e); return n && e.set(t), n; }
function tf(e, t) { let n = g(), o = N(), r = T(); return $d(o, n, n[C], r, e, t), tf; }
var EE = {};
function nf(e) { let t = N(), n = g(), o = e + I, r = tn(t, o, 128, null, null); return Ve(r, !1), No(t, n, o, EE), nf; }
function DE(e) { Z("NgLet"); let t = N(), n = g(), o = oe(); return No(t, n, o, e), e; }
function CE(e) { let t = tc(), n = Et(t, I + e); if (n === EE)
    throw new _(314, !1); return n; }
function TE(e, t) { let n = N(), o = g(), r = o[C], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = It(n, s + I), d = Lt(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function ME(e) { return $(g(), de(), e) ? M(e) : O; }
function NE(e, t, n = "") { return dE(g(), e, t, n); }
function _E(e, t, n, o, r = "") { return fE(g(), e, t, n, o, r); }
function wE(e, t, n, o, r, i, s = "") { return pE(g(), e, t, n, o, r, i, s); }
function bE(e, t, n, o, r, i, s, a, c = "") { return hE(g(), e, t, n, o, r, i, s, a, c); }
function SE(e, t, n, o, r, i, s, a, c, l, u = "") { return gE(g(), e, t, n, o, r, i, s, a, c, l, u); }
function AE(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return mE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function RE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return yE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function kE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v = "") { return vE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, v); }
function xE(e) { return uE(g(), e); }
function AA(e, t, n) { let o = N(); if (o.firstCreatePass) {
    let r = me(e);
    Gl(n, o.data, o.blueprint, r, !0), Gl(t, o.data, o.blueprint, r, !1);
} }
function Gl(e, t, n, o, r) { if (e = U(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        Gl(e[i], t, n, o, r);
else {
    let i = N(), s = g(), a = T(), c = Zr(e) ? e : U(e.provide), l = kf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Zr(e) || !e.multi) {
        let p = new Ut(l, r, io, null), h = $c(c, t, r ? u : u + f, d);
        h === -1 ? (Qc(Fi(a, s), i, c), Bc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = $c(c, t, u + f, d), h = $c(c, t, u, u + f), m = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !m) {
            Qc(Fi(a, s), i, c);
            let E = xA(r ? kA : RA, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = E), Bc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(E), s.push(E);
        }
        else {
            let E = OE(n[r ? h : p], l, !r && o);
            Bc(i, e, p > -1 ? p : h, E);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function Bc(e, t, n, o) { let r = Zr(t), i = Af(t); if (r || i) {
    let c = (i ? U(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function OE(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function $c(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function RA(e, t, n, o, r) { return ql(this.multi, []); }
function kA(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = qo(o, o[y], this.providerFactory.index, r);
    s = c.slice(0, a), ql(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], ql(i, s); return s; }
function ql(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function xA(e, t, n, o, r, i) { let s = new Ut(e, n, io, null); return s.multi = [], s.index = t, s.componentProviders = 0, OE(s, r, o && !n), s; }
function PE(e, t = []) { return n => { n.providersResolver = (o, r) => AA(o, r ? r(e) : e, t); }; }
function LE(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function FE(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = ts(t, Xy), o.pipeDefs = ts(n, Fe); }
function jE(e, t) { return We(() => { let n = Qr(e); n.declarations = Di(t.declarations || P), n.imports = Di(t.imports || P), n.exports = Di(t.exports || P), t.bootstrap && (n.bootstrap = Di(t.bootstrap)), On.registerNgModule(e, t); }); }
function Di(e) { if (typeof e == "function")
    return e; let t = Re(e); return t.some(Vr) ? () => t.map(U).map(hh) : t.map(hh); }
function hh(e) { return Zu(e) ? e.ngModule : e; }
function HE(e, t, n) { let o = ue() + e, r = g(); return r[o] === O ? Ge(r, o, n ? t.call(n) : t()) : Mr(r, o); }
function VE(e, t, n, o) { return ZE(g(), ue(), e, t, n, o); }
function BE(e, t, n, o, r) { return YE(g(), ue(), e, t, n, o, r); }
function $E(e, t, n, o, r, i) { return KE(g(), ue(), e, t, n, o, r, i); }
function UE(e, t, n, o, r, i, s) { return JE(g(), ue(), e, t, n, o, r, i, s); }
function WE(e, t, n, o, r, i, s, a) { let c = ue() + e, l = g(), u = be(l, c, n, o, r, i); return $(l, c + 4, s) || u ? Ge(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : Mr(l, c + 5); }
function GE(e, t, n, o, r, i, s, a, c) { let l = ue() + e, u = g(), d = be(u, l, n, o, r, i); return zt(u, l + 4, s, a) || d ? Ge(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : Mr(u, l + 6); }
function qE(e, t, n, o, r, i, s, a, c, l) { let u = ue() + e, d = g(), f = be(d, u, n, o, r, i); return Ys(d, u + 4, s, a, c) || f ? Ge(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : Mr(d, u + 7); }
function zE(e, t, n, o, r, i, s, a, c, l, u) { let d = ue() + e, f = g(), p = be(f, d, n, o, r, i); return be(f, d + 4, s, a, c, l) || p ? Ge(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : Mr(f, d + 8); }
function QE(e, t, n, o) { return XE(g(), ue(), e, t, n, o); }
function Rr(e, t) { let n = e[t]; return n === O ? void 0 : n; }
function ZE(e, t, n, o, r, i) { let s = t + n; return $(e, s, r) ? Ge(e, s + 1, i ? o.call(i, r) : o(r)) : Rr(e, s + 1); }
function YE(e, t, n, o, r, i, s) { let a = t + n; return zt(e, a, r, i) ? Ge(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Rr(e, a + 2); }
function KE(e, t, n, o, r, i, s, a) { let c = t + n; return Ys(e, c, r, i, s) ? Ge(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Rr(e, c + 3); }
function JE(e, t, n, o, r, i, s, a, c) { let l = t + n; return be(e, l, r, i, s, a) ? Ge(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Rr(e, l + 4); }
function XE(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    $(e, s++, r[c]) && (a = !0); return a ? Ge(e, s, o.apply(i, r)) : Rr(e, s); }
function eD(e, t) { let n = N(), o, r = e + I; n.firstCreatePass ? (o = OA(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Gr(o.type, !0)), s, a = kt(io); try {
    let c = Li(!1), l = i();
    return Li(c), No(n, g(), r, l), l;
}
finally {
    kt(a);
} }
function OA(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function tD(e, t, n) { let o = e + I, r = g(), i = Et(r, o); return kr(r, o) ? ZE(r, ue(), t, i.transform, n, i) : i.transform(n); }
function nD(e, t, n, o) { let r = e + I, i = g(), s = Et(i, r); return kr(i, r) ? YE(i, ue(), t, s.transform, n, o, s) : s.transform(n, o); }
function oD(e, t, n, o, r) { let i = e + I, s = g(), a = Et(s, i); return kr(s, i) ? KE(s, ue(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function rD(e, t, n, o, r, i) { let s = e + I, a = g(), c = Et(a, s); return kr(a, s) ? JE(a, ue(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function iD(e, t, n) { let o = e + I, r = g(), i = Et(r, o); return kr(r, o) ? XE(r, ue(), t, i.transform, n, i) : i.transform.apply(i, n); }
function kr(e, t) { return e[y].data[t].pure; }
function sD(e, t) { return $s(e, t); }
function aD(e, t) { return () => { try {
    return On.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function cD(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function lD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function uD(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = PA(s, W(e)); if (e[rn] = a, c.tView) {
    let l = MT().values();
    for (let u of l)
        He(u) && u[q] === null && Ri(r, i, a, c, u);
} }
function PA(e, t) { let n = G({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Ri(e, t, n, o, r) { let i = r[y]; if (i === o.tView) {
    FA(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        Y(a[H]) && Ri(e, t, n, o, a[H]);
        for (let c = F; c < a.length; c++)
            Ri(e, t, n, o, a[c]);
    }
    else
        Y(a) && Ri(e, t, n, o, a);
} }
function LA(e, t) { e.componentReplaced?.(t.id); }
function FA(e, t, n, o, r) { let i = r[L], s = r[H], a = r[q], c = r[se], l = r[A].get(j, null), u = () => { if (o.encapsulation === nt.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = am(n), f = ws(a, d, i, wu(n), s, c, null, null, null, null, null); jA(a, r, f, c.index), Er(r[y], r); let p = r[Qe].rendererFactory; LA(p, o), f[C] = p.createRenderer(s, n), Em(r[y], r), HA(c), Vs(d, f, i), Hm(d, f, d.template, i); }; l === null ? gh(e, t, u) : l.run(() => gh(e, t, u)); }
function gh(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function jA(e, t, n, o) { for (let r = I; r < e[y].bindingStartIndex; r++) {
    let i = e[r];
    if ((Y(i) || K(i)) && i[ie] === t) {
        i[ie] = n;
        break;
    }
} e[yt] === t && (e[yt] = n), e[Eo] === t && (e[Eo] = n), n[ie] = t[ie], t[ie] = null, e[o] = n; }
function HA(e) { if (e.projection !== null) {
    for (let t of e.projection)
        ls(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var fe = { \u0275\u0275animateEnter: jo, \u0275\u0275animateEnterListener: Ho, \u0275\u0275animateLeave: Vo, \u0275\u0275animateLeaveListener: os, \u0275\u0275attribute: Td, \u0275\u0275defineComponent: Jy, \u0275\u0275defineDirective: ev, \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: go, \u0275\u0275defineNgModule: cd, \u0275\u0275definePipe: tv, \u0275\u0275directiveInject: io, \u0275\u0275getInheritedFactory: Wh, \u0275\u0275inject: Ae, \u0275\u0275injectAttribute: us, \u0275\u0275invalidFactory: Iy, \u0275\u0275invalidFactoryDep: Wr, \u0275\u0275templateRefExtractor: sD, \u0275\u0275resetView: Ja, \u0275\u0275HostDirectivesFeature: sv, \u0275\u0275NgOnChangesFeature: bh, \u0275\u0275ProvidersFeature: PE, \u0275\u0275CopyDefinitionFeature: iv, \u0275\u0275InheritDefinitionFeature: ld, \u0275\u0275ExternalStylesFeature: LE, \u0275\u0275nextContext: FI, \u0275\u0275namespaceHTML: dc, \u0275\u0275namespaceMathML: uc, \u0275\u0275namespaceSVG: lc, \u0275\u0275enableBindings: Qa, \u0275\u0275disableBindings: Za, \u0275\u0275elementStart: sa, \u0275\u0275elementEnd: aa, \u0275\u0275element: _d, \u0275\u0275elementContainerStart: ua, \u0275\u0275elementContainerEnd: Sr, \u0275\u0275domElement: wd, \u0275\u0275domElementStart: ca, \u0275\u0275domElementEnd: la, \u0275\u0275domElementContainer: Rd, \u0275\u0275domElementContainerStart: da, \u0275\u0275domElementContainerEnd: Ad, \u0275\u0275domTemplate: dd, \u0275\u0275domListener: Bd, \u0275\u0275elementContainer: Sd, \u0275\u0275pureFunction0: HE, \u0275\u0275pureFunction1: VE, \u0275\u0275pureFunction2: BE, \u0275\u0275pureFunction3: $E, \u0275\u0275pureFunction4: UE, \u0275\u0275pureFunction5: WE, \u0275\u0275pureFunction6: GE, \u0275\u0275pureFunction7: qE, \u0275\u0275pureFunction8: zE, \u0275\u0275pureFunctionV: QE, \u0275\u0275getCurrentView: yI, \u0275\u0275restoreView: Ka, \u0275\u0275listener: Hd, \u0275\u0275projection: HI, \u0275\u0275syntheticHostProperty: Od, \u0275\u0275syntheticHostListener: Vd, \u0275\u0275pipeBind1: tD, \u0275\u0275pipeBind2: nD, \u0275\u0275pipeBind3: oD, \u0275\u0275pipeBind4: rD, \u0275\u0275pipeBindV: iD, \u0275\u0275projectionDef: jI, \u0275\u0275domProperty: xd, \u0275\u0275ariaProperty: Cd, \u0275\u0275property: Nd, \u0275\u0275pipe: eD, \u0275\u0275queryRefresh: $I, \u0275\u0275queryAdvance: qI, \u0275\u0275viewQuery: BI, \u0275\u0275viewQuerySignal: GI, \u0275\u0275loadQuery: UI, \u0275\u0275contentQuery: VI, \u0275\u0275contentQuerySignal: WI, \u0275\u0275reference: zI, \u0275\u0275classMap: XI, \u0275\u0275styleMap: JI, \u0275\u0275styleProp: Ud, \u0275\u0275classProp: Wd, \u0275\u0275advance: cm, \u0275\u0275template: ud, \u0275\u0275conditional: uI, \u0275\u0275conditionalCreate: lI, \u0275\u0275conditionalBranchCreate: ia, \u0275\u0275defer: Ov, \u0275\u0275deferWhen: Pv, \u0275\u0275deferOnIdle: Hv, \u0275\u0275deferOnImmediate: $v, \u0275\u0275deferOnTimer: Gv, \u0275\u0275deferOnHover: Qv, \u0275\u0275deferOnInteraction: Kv, \u0275\u0275deferOnViewport: eI, \u0275\u0275deferPrefetchWhen: Lv, \u0275\u0275deferPrefetchOnIdle: Vv, \u0275\u0275deferPrefetchOnImmediate: Uv, \u0275\u0275deferPrefetchOnTimer: qv, \u0275\u0275deferPrefetchOnHover: Zv, \u0275\u0275deferPrefetchOnInteraction: Jv, \u0275\u0275deferPrefetchOnViewport: tI, \u0275\u0275deferHydrateWhen: Fv, \u0275\u0275deferHydrateNever: jv, \u0275\u0275deferHydrateOnIdle: Bv, \u0275\u0275deferHydrateOnImmediate: Wv, \u0275\u0275deferHydrateOnTimer: zv, \u0275\u0275deferHydrateOnHover: Yv, \u0275\u0275deferHydrateOnInteraction: Xv, \u0275\u0275deferHydrateOnViewport: nI, \u0275\u0275deferEnableTimerScheduling: Dv, \u0275\u0275repeater: hI, \u0275\u0275repeaterCreate: pI, \u0275\u0275repeaterTrackByIndex: dI, \u0275\u0275repeaterTrackByIdentity: fI, \u0275\u0275componentInstance: cI, \u0275\u0275text: aE, \u0275\u0275textInterpolate: Gd, \u0275\u0275textInterpolate1: fa, \u0275\u0275textInterpolate2: qd, \u0275\u0275textInterpolate3: zd, \u0275\u0275textInterpolate4: Qd, \u0275\u0275textInterpolate5: Zd, \u0275\u0275textInterpolate6: Yd, \u0275\u0275textInterpolate7: Kd, \u0275\u0275textInterpolate8: Jd, \u0275\u0275textInterpolateV: Xd, \u0275\u0275i18n: xI, \u0275\u0275i18nAttributes: OI, \u0275\u0275i18nExp: jd, \u0275\u0275i18nStart: Ld, \u0275\u0275i18nEnd: Fd, \u0275\u0275i18nApply: PI, \u0275\u0275i18nPostprocess: LI, \u0275\u0275resolveWindow: Xg, \u0275\u0275resolveDocument: em, \u0275\u0275resolveBody: Cu, \u0275\u0275setComponentScope: FE, \u0275\u0275setNgModuleScope: jE, \u0275\u0275registerNgModuleType: id, \u0275\u0275getComponentDepsFactory: aD, \u0275setClassDebugInfo: cD, \u0275\u0275declareLet: nf, \u0275\u0275storeLet: DE, \u0275\u0275readContextLet: CE, \u0275\u0275attachSourceLocations: TE, \u0275\u0275interpolate: ME, \u0275\u0275interpolate1: NE, \u0275\u0275interpolate2: _E, \u0275\u0275interpolate3: wE, \u0275\u0275interpolate4: bE, \u0275\u0275interpolate5: SE, \u0275\u0275interpolate6: AE, \u0275\u0275interpolate7: RE, \u0275\u0275interpolate8: kE, \u0275\u0275interpolateV: xE, \u0275\u0275sanitizeHtml: Gg, \u0275\u0275sanitizeStyle: qg, \u0275\u0275sanitizeResourceUrl: Du, \u0275\u0275sanitizeScript: zg, \u0275\u0275sanitizeUrl: Eu, \u0275\u0275sanitizeUrlOrResourceUrl: Yg, \u0275\u0275trustConstantHtml: Qg, \u0275\u0275trustConstantResourceUrl: Zg, \u0275\u0275validateIframeAttribute: Qy, forwardRef: Aa, resolveForwardRef: U, \u0275\u0275twoWayProperty: ef, \u0275\u0275twoWayBindingSet: IE, \u0275\u0275twoWayListener: tf, \u0275\u0275replaceMetadata: uD, \u0275\u0275getReplaceMetadataURL: lD }, Cn = null;
function dD(e) { Cn !== null && (e.defaultEncapsulation !== Cn.defaultEncapsulation || e.preserveWhitespaces !== Cn.preserveWhitespaces) || (Cn = e); }
function VA() { return Cn; }
function BA() { Cn = null; }
var Go = [];
function $A(e, t) { Go.push({ moduleType: e, ngModule: t }); }
var Uc = !1;
function fD() { if (!Uc) {
    Uc = !0;
    try {
        for (let e = Go.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Go[e];
            n.declarations && n.declarations.every(pD) && (Go.splice(e, 1), zA(t, n));
        }
    }
    finally {
        Uc = !1;
    }
} }
function pD(e) { return Array.isArray(e) ? e.every(pD) : !!U(e); }
function hD(e, t = {}) { gD(e, t), t.id !== void 0 && id(e, t.id), $A(e, t); }
function gD(e, t, n = !1) { let o = Re(t.declarations || P), r = null; Object.defineProperty(e, ka, { configurable: !0, get: () => (r === null && (r = X({ usage: 0, kind: "NgModule", type: e }).compileNgModule(fe, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Re(t.bootstrap || P).map(U), declarations: o.map(U), imports: Re(t.imports || P).map(U).map(mh), exports: Re(t.exports || P).map(U).map(mh), schemas: t.schemas ? Re(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ht, { get: () => { if (i === null) {
        let a = X({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(fe, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: ds(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Ra, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || P, imports: [(t.imports || P).map(U), (t.exports || P).map(U)] };
        s = X({ usage: 0, kind: "NgModule", type: e }).compileInjector(fe, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function UA(e, t) { let n = `Unexpected "${Ie(e)}" found in the "declarations" array of the`, o = `"${Ie(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var WA = new WeakMap, GA = new WeakMap;
function qA() { WA = new WeakMap, GA = new WeakMap, Go.length = 0, tb.clear(); }
function zA(e, t) { let n = Re(t.declarations || P), o = rf(e); n.forEach(r => { if (r = U(r), r.hasOwnProperty(rn)) {
    let s = W(r);
    of(s, o);
}
else
    !r.hasOwnProperty($r) && !r.hasOwnProperty(Ur) && (r.ngSelectorScope = e); }); }
function of(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(rn) ? W(n) : Me(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Fe(n)), e.schemas = t.schemas, e.tView = null; }
function rf(e) { if (Ht(e)) {
    let t = On.getNgModuleScope(e), n = Qr(e);
    return G({ schemas: n.schemas || null }, t);
}
else if (Io(e)) {
    if ((W(e) || Me(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Fe(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function mh(e) { return Zu(e) ? e.ngModule : e; }
var Wc = 0;
function mD(e, t) {
    let n = null;
    Ww(e, t), vD(e, t), Object.defineProperty(e, rn, { get: () => {
            if (n === null) {
                let o = X({ usage: 0, kind: "component", type: e });
                if (Wy(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = VA(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = nt.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = ID(e, t), l = Le(G({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || P, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Wc++;
                try {
                    if (l.usesInheritance && ED(e), n = o.compileComponent(fe, a, l), l.isStandalone) {
                        let u = Re(t.imports || P), { directiveDefs: d, pipeDefs: f } = QA(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(U);
                    }
                }
                finally {
                    Wc--;
                }
                if (Wc === 0 && fD(), ZA(e)) {
                    let u = rf(e.ngSelectorScope);
                    of(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ie(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function QA(e, t) { return { directiveDefs: () => Po(e) ? [...On.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Me(i)).filter(i => i !== null) : [], pipeDefs: () => Po(e) ? [...On.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Fe(i)).filter(i => i !== null) : [] }; }
function ZA(e) { return e.ngSelectorScope !== void 0; }
function sf(e, t) { let n = null; vD(e, t || {}), Object.defineProperty(e, $r, { get: () => { if (n === null) {
        let o = yD(e, t || {});
        n = X({ usage: 0, kind: "directive", type: e }).compileDirective(fe, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function yD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = X({ usage: 0, kind: "directive", type: e }), i = ID(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && ED(e), { metadata: i, sourceMapUrl: o }; }
function vD(e, t) { let n = null; Object.defineProperty(e, ht, { get: () => { if (n === null) {
        let o = yD(e, t), r = X({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(fe, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: ds(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function YA(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function ID(e, t) { let n = Xl(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Te, propMetadata: o, inputs: t.inputs || P, outputs: t.outputs || P, queries: yh(e, o, DD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !YA(e), exportAs: XA(t.exportAs), providers: t.providers || null, viewQueries: yh(e, o, CD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function ED(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Me(n) && !W(n) && tR(n) && sf(n, null), n = Object.getPrototypeOf(n); }
function KA(e) { return typeof e == "string" ? MD(e) : U(e); }
function JA(e, t) { return { propertyName: e, predicate: KA(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function yh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Ie(e)}" since the query selector wasn't defined.`);
            if (i.some(TD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(JA(r, s));
        } });
    } return o; }
function XA(e) { return e === void 0 ? null : MD(e); }
function DD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function CD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function TD(e) { return e.ngMetadataName === "Input"; }
function MD(e) { return e.split(",").map(t => t.trim()); }
var eR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function tR(e) { let t = Xl(); if (eR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (TD(s) || DD(s) || CD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function ND(e, t) { let n = null, o = null; Object.defineProperty(e, ht, { get: () => { if (o === null) {
        let r = vh(e, t), i = X({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(fe, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: ds(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Ur, { get: () => { if (n === null) {
        let r = vh(e, t);
        n = X({ usage: 0, kind: "pipe", type: r.type }).compilePipe(fe, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function vh(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var _D = cr("Directive", (e = {}) => e, void 0, void 0, (e, t) => sf(e, t)), nR = cr("Component", (e = {}) => G({ changeDetection: fs.Default }, e), _D, void 0, (e, t) => mD(e, t)), oR = cr("Pipe", e => G({ pure: !0 }, e), void 0, void 0, (e, t) => ND(e, t)), rR = rt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), iR = rt("Output", e => ({ alias: e })), sR = rt("HostBinding", e => ({ hostPropertyName: e })), aR = rt("HostListener", (e, t) => ({ eventName: e, args: t })), cR = cr("NgModule", e => e, void 0, void 0, (e, t) => hD(e, t)), cs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, lR = (() => { class e {
    compileModuleSync(n) { return new jn(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = an(n), i = En(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new bt(c)), s; }, []); return new cs(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), wD = new w(""), zl = class {
}, uR = (() => { class e {
    zone = D(j);
    changeDetectionScheduler = D(Ke);
    applicationRef = D(Pe);
    applicationErrorHandler = D(Ct);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), bD = new w("", { factory: () => !1 });
function pa({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new j(Le(G({}, ha()), { scheduleInRootZone: n })), [{ provide: j, useFactory: e }, { provide: gt, multi: !0, useFactory: () => { let o = D(uR, { optional: !0 }); return () => o.initialize(); } }, { provide: gt, multi: !0, useFactory: () => { let o = D(fR); return () => { o.initialize(); }; } }, t === !0 ? { provide: mc, useValue: !0 } : [], { provide: ui, useValue: n ?? pm }, { provide: Ct, useFactory: () => { let o = D(j), r = D(mt), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(ci), i.handleError(s)); }); }; } }]; }
function dR(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = pa({ ngZoneFactory: () => { let r = ha(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && Z("NgZone_CoalesceEvent"), new j(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return ze([{ provide: bD, useValue: !0 }, { provide: pn, useValue: !1 }, o]); }
function ha(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var fR = (() => { class e {
    subscription = new Yl;
    initialized = !1;
    zone = D(j);
    pendingTasks = D(Tt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { j.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { j.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var ga = (() => { class e {
    applicationErrorHandler = D(Ct);
    appRef = D(Pe);
    taskService = D(Tt);
    ngZone = D(j);
    zonelessEnabled = D(pn);
    tracing = D(eo, { optional: !0 });
    disableScheduling = D(mc, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new Yl;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Gi) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(ui, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof kn || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? kp : hm; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Gi + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, kp(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function pR() { return Z("NgZoneless"), ze([{ provide: Ke, useExisting: ga }, { provide: j, useClass: kn }, { provide: pn, useValue: !0 }, { provide: ui, useValue: !1 }, []]); }
function hR() { return typeof $localize < "u" && $localize.locale || Ar; }
var af = new w("", { providedIn: "root", factory: () => D(af, { optional: !0, skipSelf: !0 }) || hR() }), gR = new w("", { providedIn: "root", factory: () => _S }), mR = new w(""), yR = new w(""), SD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(SD || {}), Ql = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function vR(e) { return e.map(t => t.nativeElement); }
var ar = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Kt(t) : null; }
    get injector() { return xT(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Dp(t) || kT(t)); }
    get context() { return Dp(this.nativeNode) || RT(this.nativeNode); }
    get listeners() { return jT(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return LT(this.nativeNode); }
    get providerTokens() { return OT(this.nativeNode); }
}, Kt = class extends ar {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ye(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ye(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[y].data, r = o[t.nodeIndex], i = {}; return IR(this.nativeElement, i), DR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ye(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[y].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(Un(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Un(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Ih(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Ih(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function IR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                ER(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function ER(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Ih(e, t, n, o) { let r = ye(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[y].data[r.nodeIndex];
    Vt(s, i, t, n, o, e.nativeNode);
}
else
    cf(e.nativeNode, t, n, o); }
function Vt(e, t, n, o, r, i) { let s = Lf(e, t); if (e.type & 11) {
    if (Gc(s, n, o, r, i), ge(e)) {
        let c = le(e.index, t);
        c && c[y].firstChild && Vt(c[y].firstChild, c, n, o, r, i);
    }
    else
        e.child && Vt(e.child, t, n, o, r, i), s && cf(s, n, o, r);
    let a = t[e.index];
    K(a) && Eh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Gc(a[ke], n, o, r, i), Eh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Q], l = a[se].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Gc(u, n, o, r, i);
    else if (l) {
        let u = a[q], d = u[y].data[l.index];
        Vt(d, u, n, o, r, i);
    }
}
else
    e.child && Vt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Vt(a, t, n, o, r, i);
} }
function Eh(e, t, n, o, r) { for (let i = F; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && Vt(a, s, t, n, o, r);
} }
function Gc(e, t, n, o, r) { if (r !== e) {
    let i = Un(e);
    if (!i)
        return;
    (o && i instanceof Kt && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function cf(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Un(a);
    c && ((o && c instanceof Kt && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), cf(a, t, n, o));
} }
function DR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(YM), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += M(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var qc = "__ng_debug__";
function Un(e) { return e instanceof Node ? (e.hasOwnProperty(qc) || (e[qc] = e.nodeType == Node.ELEMENT_NODE ? new Kt(e) : new ar(e)), e[qc]) : null; }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Ta = Symbol("InputSignalNode#UNSET"), ZD = Le(G({}, ba), { transformFn: void 0, applyValueToInputSignal(e, t) { wa(e, t); } }), Yx = Symbol();
function YD(e, t) { let n = Object.create(ZD); n.value = e, n.transformFn = t?.transform; function o() { if (Pr(n), n.value === Ta) {
    let r = null;
    throw new _(-950, r);
} return n.value; } return o[pt] = n, o; }
var co = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(co || {});
var AD = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => us(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, CR = new w("");
CR.__NG_ELEMENT_ID__ = e => { let t = T(); if (t === null)
    throw new _(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new _(204, !1); };
function Kx(e) { return new Ic; }
function RD(e, t) { return YD(e, t); }
function TR(e) { return YD(Ta, e); }
var Jx = (RD.required = TR, RD);
function kD(e, t) { return nd(t); }
function MR(e, t) { return od(t); }
var Xx = (kD.required = MR, kD);
function eO(e, t) { return rd(t); }
function xD(e, t) { return nd(t); }
function NR(e, t) { return od(t); }
var tO = (xD.required = NR, xD);
function nO(e, t) { return rd(t); }
function KD(e, t) { let n = Object.create(ZD), o = new Ic; n.value = e; function r() { return Pr(n), OD(n.value), n.value; } return r[pt] = n, r.asReadonly = ep.bind(r), r.set = i => { n.equal(n.value, i) || (wa(n, i), o.emit(i)); }, r.update = i => { OD(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function OD(e) { if (e === Ta)
    throw new _(952, !1); }
function PD(e, t) { return KD(e, t); }
function _R(e) { return KD(Ta, e); }
var oO = (PD.required = _R, PD), JD = !0, uo = class {
}, rO = rt("ContentChildren", (e, t = {}) => G({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: JD }, t), uo), iO = rt("ContentChild", (e, t = {}) => G({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), uo), sO = rt("ViewChildren", (e, t = {}) => G({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: JD }, t), uo), aO = rt("ViewChild", (e, t) => G({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), uo);
function wR(e, t, n) { let o = new jn(n); return Promise.resolve(o); }
function LD(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var va = new w(""), bR = new w("");
function xr(e) { return !e.moduleRef; }
function XD(e) { let t = xr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(j); return n.run(() => { xr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Ct), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), xr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(va);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(va);
    s.add(i), e.moduleRef.onDestroy(() => { Fo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return AR(o, n, () => { let i = t.get(Tt), s = i.add(), a = t.get(vd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(af, Ar); if (CI(c || Ar), !t.get(bR, !0))
    return xr(e) ? t.get(Pe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (xr(e)) {
    let u = t.get(Pe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return eC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var eC;
function FD() { eC = SR; }
function SR(e, t) { let n = e.injector.get(Pe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new _(-403, !1); t.push(e); }
function AR(e, t, n) { try {
    let o = n();
    return md(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var tC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => mm(o?.ngZone, Le(G({}, ha({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [pa({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Ke, useExisting: ga }, pc], c = Ky(n.moduleType, this.injector, a); return FD(), XD({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Ed({}, o); return FD(), wR(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new _(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(va, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Ae(De)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), lo = null;
function RR(e) { if (Ma())
    throw new _(400, !1); Id(), lo = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(tC); return oC(e), t; }
function kR(e, t, n = []) { let o = `Platform: ${t}`, r = new w(o); return (i = []) => { let s = Ma(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? RR(nC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : xR(r); }; }
function nC(e = [], t) { return De.create({ name: t, providers: [{ provide: Rf, useValue: "platform" }, { provide: va, useValue: new Set([() => lo = null]) }, ...e] }); }
function xR(e) { let t = Ma(); if (!t)
    throw new _(-401, !1); return t; }
function Ma() { return typeof ngServerMode < "u" && ngServerMode ? null : lo?.get(tC) ?? null; }
function cO() { Ma()?.destroy(); }
function OR(e = []) { if (lo)
    return lo; let t = nC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (lo = t), Id(), oC(t), t; }
function lO(e) { return ze([{ provide: tu, useValue: e, multi: !0 }]); }
function oC(e) { let t = e.get(tu, null); Kr(e, () => { t?.forEach(n => n()); }); }
function uO(e) { return ze([]); }
function dO() { return !1; }
function fO() { }
function pO(e) { let t = sd(e); if (!t)
    throw rC(e); return new jn(t); }
function hO(e) { let t = sd(e); if (!t)
    throw rC(e); return t; }
function rC(e) { return new Error(`No module with ID ${e} loaded`); }
var PR = (() => { class e {
    static __NG_ELEMENT_ID__ = LR;
} return e; })();
function LR(e) { return FR(T(), g(), (e & 16) === 16); }
function FR(e, t, n) { if (ge(e) && !n) {
    let o = le(e.index, t);
    return new wt(o, o);
}
else if (e.type & 175) {
    let o = t[Q];
    return new wt(o, t);
} return null; }
var df = class extends PR {
}, jD = class extends df {
}, Ia = class {
    constructor() { }
    supports(t) { return tr(t); }
    create(t) { return new ff(t); }
}, jR = (e, t) => t, ff = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || jR; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < HD(o, r, i) ? n : o, a = HD(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !tr(t))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, Ty(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new pf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ea), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Ea), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, pf = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, hf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Ea = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new hf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function HD(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Da = class {
    constructor() { }
    supports(t) { return t instanceof Map || Zs(t); }
    create() { return new gf; }
}, gf = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Zs(t)))
        throw new _(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new mf(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, mf = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function VD() { return new iC([new Ia]); }
var iC = (() => { class e {
    factories;
    static \u0275prov = V({ token: e, providedIn: "root", factory: VD });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || VD()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new _(901, !1); }
} return e; })();
function BD() { return new sC([new Da]); }
var sC = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: BD });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || BD()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new _(901, !1); }
} return e; })(), HR = [new Da], VR = [new Ia], gO = new iC(VR), mO = new sC(HR), yO = kR(null, "core", []), vO = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Ae(Pe)); };
    static \u0275mod = cd({ type: e });
    static \u0275inj = go({});
} return e; })();
function IO(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (x(8), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new _(-401, !1); try {
    let i = r?.injector ?? OR(o), s = [pa({}), { provide: Ke, useExisting: ga }, pc, ...n || []], a = new or({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return XD({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    x(9);
} }
var ma = new WeakSet, $D = "", ya = [];
function UD(e) { return e.get(Is, au); }
function BR() { let e = [{ provide: Is, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(st);
            t = !!window._ejsas?.[n];
        } return t && Z("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: gt, useValue: () => { let t = D(Pe), { injector: n } = t; if (!ma.has(t)) {
        let o = D(hr);
        if (UD(n)) {
            yg();
            let r = n.get(st), i = gg(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (hg(s, a, c), uu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: wr, useFactory: () => { let t = D(Pe), { injector: n } = t; return () => { if (!UD(n) || ma.has(t))
        return; ma.add(t); let o = n.get(st); t.onDestroy(() => { ma.delete(t), typeof ngServerMode < "u" && !ngServerMode && Ec(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(fu); $R(r, n); let i = n.get(hr); i.get($D)?.forEach(du), i.delete($D); let s = r.instance; gr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var $R = (e, t) => { let n = t.get(st), o = window._ejsas[n], r = e.instance = new ap(new op(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = cp(n); r.replayEarlyEventInfos(i), Ec(n); let s = new ip(a => { WR(t, a, a.currentTarget); }); sp(r, s); };
function UR(e, t, n) { let o = new Map, r = t[xt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!np(l))
        continue;
    tp(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function WR(e, t, n) { let o = (n && n.getAttribute(Yn)) ?? ""; /d\d+/.test(o) ? GR(o, e, t, n) : t.eventPhase === rp.REPLAY && pu(t, n); }
function GR(e, t, n, o) { ya.push({ event: n, currentTarget: o }), dt(t, e, qR); }
function qR(e) { let t = [...ya], n = new Set(e); ya = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(Yn);
    n.has(i) ? pu(o, r) : ya.push({ event: o, currentTarget: r });
} }
var yf = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, zR = 0;
function aC(e) { return e.ssrId || (e.ssrId = `t${zR++}`), e.ssrId; }
function cC(e, t, n) { let o = []; return xn(e, t, n, o), o.length; }
function QR(e) { let t = []; return Bs(e, t), t.length; }
function lC(e, t, n) { let o = e[H]; return o && !o.hasAttribute(qn) ? Ca(o, e, null, t) : null; }
function uC(e, t, n) { let o = Mo(e[H]), r = lC(o, t); if (r === null)
    return; let i = k(o[H]), s = e[q], a = Ca(i, s, null, t), c = o[C], l = `${r}|${a}`; c.setAttribute(i, Mn, l); }
function EO(e, t) { let n = e.injector, o = sy(n), r = gr(n), i = new yf, s = new Map, a = e._views, c = n.get(Is, au), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(st); for (let h of a) {
    let m = hu(h);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        K(m) ? uC(m, v) : lC(m, v), XR(s, t);
    }
} let f = i.getAll(), p = n.get(Jt); if (p.set(Es, f), u.size > 0) {
    let h = {};
    for (let [m, v] of u.entries())
        h[m] = v;
    p.set(Ds, h);
} return l; }
function ZR(e, t, n, o, r) { let i = [], s = ""; for (let a = F; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (He(c) && (c = c[I], K(c))) {
        u = QR(c) + 1, uC(c, r);
        let p = Mo(c[H]);
        d = { [gs]: p[y].ssrId, [tt]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = aC(p), u = cC(p, c, p.firstChild)), d = { [gs]: l, [tt]: u };
        let h = !1;
        if (mv(n[y], t)) {
            let m = pe(n, t), v = re(n[y], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let E = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let S = [];
                Bs(e, S);
                let ce = { [tt]: S.length, [pr]: m[ut] }, Se = YR(v.hydrateTriggers);
                Se.length > 0 && (ce[vs] = Se), o !== null && (ce[ru] = o), r.deferBlocks.set(E, ce);
                let Ce = k(e);
                Ce !== void 0 ? Ce.nodeType === Node.COMMENT_NODE && WD(Ce, E) : WD(Ce, E), h || tk(v, S, E, r), o = E, d[ys] = E;
            }
            d[pr] = m[ut];
        }
        h || Object.assign(d, dC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[dr] ??= 1, p[dr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function YR(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function Or(e, t, n, o) { let r = t.index - I; e[fr] ??= {}, e[fr][r] ??= ty(t, n, o); }
function lf(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Zn] ??= [], e[Zn].includes(n) || e[Zn].push(n); }
function dC(e, t = null, n) { let o = {}, r = e[y], i = ay(r, n), s = n.shouldReplayEvents ? UR(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = cy(e, a, n);
    if (u) {
        o[ms] ??= {}, o[ms][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            lf(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Or(o, f, e, i);
        }
        continue;
    }
    if (ls(c) && !Kn(c)) {
        if (K(e[a]) && c.tView && (o[hs] ??= {}, o[hs][l] = aC(c.tView)), ro(c, e) && ek(c)) {
            lf(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Ua(d) && !zn(d) && (ro(d, e) ? lf(o, d) : Or(o, d, e, i));
                    else
                        throw qm(k(e[a]));
        }
        if (KR(o, c, e, i), K(e[a])) {
            let d = e[a][H];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute(qn) || Ca(f, d, t, n);
            }
            o[Qn] ??= {}, o[Qn][l] = ZR(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Oh(c)) {
            let d = k(e[a][H]);
            d.hasAttribute(qn) || Ca(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[ur] ??= {}, o[ur][l] = cC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !zn(d) && Or(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            mu(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && lu(d, s.get(d), t);
        }
    }
} return o; }
function KR(e, t, n, o) { Ua(t) || (t.projectionNext && t.projectionNext !== t.next && !zn(t.projectionNext) && Or(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && ro(t.parent, n) && !ro(t, n) && Or(e, t, n, o)); }
function JR(e) { let t = e[L]; return t?.constructor ? W(t.constructor)?.encapsulation === nt.ShadowDom : !1; }
function Ca(e, t, n, o) { let r = t[C]; if (xf(t) && !Gs() || JR(t))
    return r.setAttribute(e, qn, ""), null; {
    let i = dC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, Mn, s.toString()), s;
} }
function WD(e, t) { e.textContent = `ngh=${t}`; }
function XR(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function ek(e) { let t = e; for (; t != null;) {
    if (ge(t))
        return !0;
    t = t.parent;
} return !1; }
function tk(e, t, n, o) { let r = Sg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        lu(s, r, n);
} }
var GD = !1, qD = !1, zD = !1;
function nk() { GD || (GD = !0, Tg(), gI(), lE(), mI(), dv(), Py(), hy(), Rm()); }
function ok() { qD || (qD = !0, MI(), iy(), uy()); }
function rk() { zD || (zD = !0, kg()); }
function ik(e) { return e.whenStable(); }
var DO = "ngcm";
function CO() { let e = [{ provide: Xt, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Jt, { optional: !0 })?.get(Es, null)), t && Z("NgHydration"), t; } }, { provide: gt, useValue: () => { zu(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(Xt) && (Og(it()), nk()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: iu, useFactory: () => D(Xt) }, { provide: wr, useFactory: () => { if (D(Xt)) {
        let t = D(Pe);
        return () => { ik(t).then(() => { t.destroyed || Qu(t); }); };
    } return () => { }; }, multi: !0 }), ze(e); }
function TO() { return [{ provide: su, useFactory: () => D(Xt) }, { provide: gt, useValue: () => { D(Xt) && (ok(), zu(!0), Z("NgI18nHydration")); }, multi: !0 }]; }
function MO() { let e = [BR(), { provide: cu, useValue: !0 }, { provide: at, useClass: vg }, { provide: gt, useValue: () => { rk(), Z("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: wr, useFactory: () => { let t = D(De), n = it(); return () => { let o = xg(t), r = ny(n, n.body); xv(t, o, r), Ag(n, t); }; }, multi: !0 }), e; }
function NO(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function _O(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var sk = "\u{1F170}\uFE0F", Na = !1;
function wO(e) { if (!Na)
    return; let { startLabel: t } = fC(e); performance.mark(t); }
function bO(e) { if (!Na)
    return; let { startLabel: t, labelName: n, endLabel: o } = fC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function fC(e) { let t = `${sk}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var QD = !1;
function SO() { if (!QD && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    QD = !0, console.warn("Performance API is not supported on this platform");
    return;
} Na = !0; }
function AO() { Na = !1; }
function RO(e) { let t = e; for (; t;) {
    let n = Jh(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!Y(r) && !K(r) || r[H] !== t)
                continue;
            let i = n[y], s = It(i, o);
            if (ge(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function kO(e) { }
function xO(e) { return X({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(fe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function OO(e) { hd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function PO(e) { Cv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); hd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function LO(e) { return X({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(fe, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function FO(e) { return X({ usage: 1, kind: ak(e.target), type: e.type }).compileFactoryDeclaration(fe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function ak(e) { switch (e) {
    case co.Directive: return "directive";
    case co.Component: return "component";
    case co.Injectable: return "injectable";
    case co.Pipe: return "pipe";
    case co.NgModule: return "NgModule";
} }
function jO(e) { return X({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(fe, `ng:///${e.type.name}/\u0275prov.js`, e); }
function HO(e) { return X({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(fe, `ng:///${e.type.name}/\u0275inj.js`, e); }
function VO(e) { return X({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(fe, `ng:///${e.type.name}/\u0275mod.js`, e); }
function BO(e) { return X({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(fe, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var uf = Symbol("NOT_SET"), pC = new Set, ck = Le(G({}, ba), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: uf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== uf && !Fr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? pC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = po(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Lr(this, n);
    } return (this.value === uf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), vf = class extends Yo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(fn), s), this.scheduler = r; for (let a of ku) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(ck);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Pr(l), l.value), l.signal[pt] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? pC)
                    n();
            }
            finally {
                ho(t);
            } }
};
function $O(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Rs; let n = t?.injector ?? D(De), o = n.get(Ke), r = n.get(As), i = n.get(eo, null, { optional: !0 }); r.impl ??= n.get(xu); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(li, null, { optional: !0 }), c = new vf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function UO(e, t) { let n = W(e), o = t.elementInjector || Yr(); return new bt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function WO(e) { let t = W(e); if (!t)
    return null; let n = new bt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function GO(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var qO = new w("", { providedIn: "platform", factory: () => null }), zO = new w("", { providedIn: "platform", factory: () => null }), QO = new w("", { providedIn: "platform", factory: () => null });
export { qT as ANIMATION_MODULE_TYPE, wr as APP_BOOTSTRAP_LISTENER, st as APP_ID, yd as APP_INITIALIZER, vd as ApplicationInitStatus, vO as ApplicationModule, Pe as ApplicationRef, qh as Attribute, wD as COMPILER_OPTIONS, zT as CSP_NONCE, WM as CUSTOM_ELEMENTS_SCHEMA, fs as ChangeDetectionStrategy, PR as ChangeDetectorRef, lR as Compiler, zl as CompilerFactory, nR as Component, Qs as ComponentFactory, Tr as ComponentFactoryResolver, yy as ComponentRef, iO as ContentChild, rO as ContentChildren, gR as DEFAULT_CURRENCY_CODE, bC as DOCUMENT, Kt as DebugElement, Ql as DebugEventListener, ar as DebugNode, ff as DefaultIterableDiffer, fn as DestroyRef, _D as Directive, gt as ENVIRONMENT_INITIALIZER, lr as ElementRef, jD as EmbeddedViewRef, mt as EnvironmentInjector, ci as ErrorHandler, Xe as EventEmitter, CR as HOST_TAG_NAME, Nh as Host, AD as HostAttributeToken, sR as HostBinding, aR as HostListener, TC as INJECTOR, Dh as Inject, yT as Injectable, w as InjectionToken, De as Injector, rR as Input, iC as IterableDiffers, sC as KeyValueDiffers, af as LOCALE_ID, rI as MAX_ANIMATION_TIMEOUT, SD as MissingTranslationStrategy, cs as ModuleWithComponentFactories, GM as NO_ERRORS_SCHEMA, cR as NgModule, Zy as NgModuleFactory, Ln as NgModuleRef, Rl as NgProbeToken, j as NgZone, Ch as Optional, iR as Output, Ic as OutputEmitterRef, GT as PACKAGE_ROOT_URL, WT as PLATFORM_ID, tu as PLATFORM_INITIALIZER, yc as PendingTasks, oR as Pipe, tC as PlatformRef, uo as Query, ji as QueryList, qO as REQUEST, QO as REQUEST_CONTEXT, zO as RESPONSE_INIT, nw as Renderer2, er as RendererFactory2, Ui as RendererStyleFlags2, vy as Sanitizer, en as SecurityContext, Th as Self, xi as SimpleChange, Mh as SkipSelf, mR as TRANSLATIONS, yR as TRANSLATIONS_FORMAT, Jo as TemplateRef, Hb as Testability, Nv as TestabilityRegistry, Jt as TransferState, _h as Type, mC as VERSION, gC as Version, aO as ViewChild, sO as ViewChildren, Ks as ViewContainerRef, nt as ViewEncapsulation, df as ViewRef, ym as afterEveryRender, Ou as afterNextRender, $O as afterRenderEffect, vR as asNativeElements, _C as assertInInjectionContext, RC as assertNotInReactiveContext, xR as assertPlatform, NO as booleanAttribute, OC as computed, tO as contentChild, nO as contentChildren, UO as createComponent, ad as createEnvironmentInjector, Yy as createNgModule, Kw as createNgModuleRef, RR as createPlatform, kR as createPlatformFactory, vC as defineInjectable, cO as destroyPlatform, PC as effect, fO as enableProdMode, Pb as enableProfiling, Aa as forwardRef, Un as getDebugNode, pO as getModuleFactory, hO as getNgModuleById, Ma as getPlatform, NC as importProvidersFrom, D as inject, Jx as input, wy as inputBinding, dO as isDevMode, Xf as isSignal, Io as isStandalone, LC as linkedSignal, ze as makeEnvironmentProviders, ZT as makeStateKey, GO as mergeApplicationConfig, oO as model, _O as numberAttribute, Kx as output, by as outputBinding, yO as platformCore, Vb as provideAppInitializer, SC as provideBrowserGlobalErrorListeners, uO as provideCheckNoChangesConfig, MC as provideEnvironmentInitializer, UM as provideNgReflectAttributes, lO as providePlatformInitializer, dR as provideZoneChangeDetection, pR as provideZonelessChangeDetection, WO as reflectComponentType, U as resolveForwardRef, FC as resource, Kr as runInInjectionContext, _v as setTestabilityGetter, hc as signal, Tw as twoWayBinding, xC as untracked, Xx as viewChild, eO as viewChildren, oI as \u0275ANIMATIONS_DISABLED, ig as \u0275AcxChangeDetectionStrategy, sg as \u0275AcxViewEncapsulation, As as \u0275AfterRenderManager, DO as \u0275CLIENT_RENDER_MODE_FLAG, F as \u0275CONTAINER_HEADER_OFFSET, Ke as \u0275ChangeDetectionScheduler, ga as \u0275ChangeDetectionSchedulerImpl, Qs as \u0275ComponentFactory, Ob as \u0275Console, Ar as \u0275DEFAULT_LOCALE_ID, Iv as \u0275DEFER_BLOCK_CONFIG, Sb as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, at as \u0275DEHYDRATED_BLOCK_REGISTRY, fd as \u0275DeferBlockBehavior, B as \u0275DeferBlockState, bR as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, vc as \u0275EffectScheduler, rg as \u0275Framework, Ng as \u0275HydrationStatus, QT as \u0275IMAGE_CONFIG, ag as \u0275IMAGE_CONFIG_DEFAULTS, Rf as \u0275INJECTOR_SCOPE, Yx as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Ct as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, KT as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, Xt as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, cu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, hr as \u0275JSACTION_BLOCK_ELEMENT_MAP, fu as \u0275JSACTION_EVENT_CONTRACT, Hi as \u0275LContext, Vn as \u0275LocaleDataIndex, rn as \u0275NG_COMP_DEF, $r as \u0275NG_DIR_DEF, Rt as \u0275NG_ELEMENT_ID, Ra as \u0275NG_INJ_DEF, ka as \u0275NG_MOD_DEF, Ur as \u0275NG_PIPE_DEF, Br as \u0275NG_PROV_DEF, wi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, O as \u0275NO_CHANGE, jn as \u0275NgModuleFactory, kn as \u0275NoopNgZone, sk as \u0275PERFORMANCE_MARK_PREFIX, bD as \u0275PROVIDED_NG_ZONE, Tt as \u0275PendingTasksInternal, ja as \u0275R3Injector, ki as \u0275ReflectionCapabilities, bt as \u0275Render3ComponentFactory, Xi as \u0275Render3ComponentRef, Fn as \u0275Render3NgModuleRef, jC as \u0275ResourceImpl, _ as \u0275RuntimeError, pt as \u0275SIGNAL, Dg as \u0275SSR_CONTENT_INTEGRITY_MARKER, Tv as \u0275TESTABILITY, Mv as \u0275TESTABILITY_GETTER, vv as \u0275TimerScheduler, Ss as \u0275TracingAction, eo as \u0275TracingService, wt as \u0275ViewRef, jr as \u0275XSS_SECURITY_URL, pn as \u0275ZONELESS_ENABLED, Wg as \u0275_sanitizeHtml, Ns as \u0275_sanitizeUrl, Gt as \u0275allLeavingAnimations, Xn as \u0275allowSanitizationBypassAndThrow, EO as \u0275annotateForHydration, kO as \u0275assertType, IM as \u0275bypassSanitizationTrustHtml, TM as \u0275bypassSanitizationTrustResourceUrl, DM as \u0275bypassSanitizationTrustScript, EM as \u0275bypassSanitizationTrustStyle, CM as \u0275bypassSanitizationTrustUrl, Gy as \u0275clearResolutionOfComponentResourcesQueue, mD as \u0275compileComponent, sf as \u0275compileDirective, hD as \u0275compileNgModule, gD as \u0275compileNgModuleDefs, wR as \u0275compileNgModuleFactory, ND as \u0275compilePipe, Oa as \u0275convertToBitFlags, wC as \u0275createInjector, OR as \u0275createOrReusePlatformInjector, gO as \u0275defaultIterableDiffers, mO as \u0275defaultKeyValueDiffers, On as \u0275depsTracker, My as \u0275devModeEqual, AO as \u0275disableProfiling, SO as \u0275enableProfiling, HC as \u0275encapsulateResourceError, Pd as \u0275findLocaleData, fD as \u0275flushModuleScopingQueueAsMuchAsPossible, Tf as \u0275formatRuntimeError, UA as \u0275generateStandaloneInDeclarationsError, xb as \u0275getAsyncClassMetadataFn, RO as \u0275getClosestComponentName, W as \u0275getComponentDef, Un as \u0275getDebugNode, Ai as \u0275getDeferBlocks, PT as \u0275getDirectives, it as \u0275getDocument, FT as \u0275getHostElement, IC as \u0275getInjectableDef, ye as \u0275getLContext, DS as \u0275getLocaleCurrencyCode, vI as \u0275getLocalePluralCase, kC as \u0275getOutputDestroyRef, Fg as \u0275getSanitizationBypassType, Lb as \u0275getTransferState, zM as \u0275getUnknownElementStrictMode, ZM as \u0275getUnknownPropertyStrictMode, ve as \u0275global, Sy as \u0275inferTagNameFromDefinition, LR as \u0275injectChangeDetectorRef, IO as \u0275internalCreateApplication, pa as \u0275internalProvideZoneChangeDetection, bv as \u0275isBoundToModule, Gw as \u0275isComponentDefPendingResolution, CC as \u0275isEnvironmentProviders, EC as \u0275isInjectable, Ht as \u0275isNgModule, md as \u0275isPromise, wv as \u0275isSubscribable, s_ as \u0275isViewDirty, a_ as \u0275markForRefresh, We as \u0275noSideEffects, of as \u0275patchComponentDefWithScope, Z as \u0275performanceMarkFeature, Fb as \u0275publishExternalGlobalUtil, aM as \u0275readHydrationInfo, ES as \u0275registerLocaleData, et as \u0275renderDeferBlockState, qA as \u0275resetCompiledComponents, lM as \u0275resetIncrementalHydrationEnabledWarnedForTests, BA as \u0275resetJitOptions, Uy as \u0275resolveComponentResources, qw as \u0275restoreComponentResolutionQueue, Yw as \u0275setAllowDuplicateNgModuleIdsForTest, VC as \u0275setAlternateWeakRefImpl, cD as \u0275setClassDebugInfo, hd as \u0275setClassMetadata, Cv as \u0275setClassMetadataAsync, hC as \u0275setCurrentInjector, $T as \u0275setDocument, DC as \u0275setInjectorProfilerContext, CI as \u0275setLocaleId, qM as \u0275setUnknownElementStrictMode, QM as \u0275setUnknownPropertyStrictMode, wO as \u0275startMeasuring, bO as \u0275stopMeasuring, No as \u0275store, on as \u0275stringify, rf as \u0275transitiveScopesFor, ta as \u0275triggerResourceLoading, yC as \u0275truncateMiddle, CS as \u0275unregisterLocaleData, ct as \u0275unwrapSafeValue, AC as \u0275unwrapWritableSignal, CO as \u0275withDomHydration, BR as \u0275withEventReplay, TO as \u0275withI18nSupport, MO as \u0275withIncrementalHydration, iv as \u0275\u0275CopyDefinitionFeature, LE as \u0275\u0275ExternalStylesFeature, co as \u0275\u0275FactoryTarget, sv as \u0275\u0275HostDirectivesFeature, ld as \u0275\u0275InheritDefinitionFeature, bh as \u0275\u0275NgOnChangesFeature, PE as \u0275\u0275ProvidersFeature, cm as \u0275\u0275advance, jo as \u0275\u0275animateEnter, Ho as \u0275\u0275animateEnterListener, Vo as \u0275\u0275animateLeave, os as \u0275\u0275animateLeaveListener, Cd as \u0275\u0275ariaProperty, TE as \u0275\u0275attachSourceLocations, Td as \u0275\u0275attribute, XI as \u0275\u0275classMap, Wd as \u0275\u0275classProp, cI as \u0275\u0275componentInstance, uI as \u0275\u0275conditional, ia as \u0275\u0275conditionalBranchCreate, lI as \u0275\u0275conditionalCreate, VI as \u0275\u0275contentQuery, WI as \u0275\u0275contentQuerySignal, nf as \u0275\u0275declareLet, Ov as \u0275\u0275defer, Dv as \u0275\u0275deferEnableTimerScheduling, jv as \u0275\u0275deferHydrateNever, Yv as \u0275\u0275deferHydrateOnHover, Bv as \u0275\u0275deferHydrateOnIdle, Wv as \u0275\u0275deferHydrateOnImmediate, Xv as \u0275\u0275deferHydrateOnInteraction, zv as \u0275\u0275deferHydrateOnTimer, nI as \u0275\u0275deferHydrateOnViewport, Fv as \u0275\u0275deferHydrateWhen, Qv as \u0275\u0275deferOnHover, Hv as \u0275\u0275deferOnIdle, $v as \u0275\u0275deferOnImmediate, Kv as \u0275\u0275deferOnInteraction, Gv as \u0275\u0275deferOnTimer, eI as \u0275\u0275deferOnViewport, Zv as \u0275\u0275deferPrefetchOnHover, Vv as \u0275\u0275deferPrefetchOnIdle, Uv as \u0275\u0275deferPrefetchOnImmediate, Jv as \u0275\u0275deferPrefetchOnInteraction, qv as \u0275\u0275deferPrefetchOnTimer, tI as \u0275\u0275deferPrefetchOnViewport, Lv as \u0275\u0275deferPrefetchWhen, Pv as \u0275\u0275deferWhen, Jy as \u0275\u0275defineComponent, ev as \u0275\u0275defineDirective, V as \u0275\u0275defineInjectable, go as \u0275\u0275defineInjector, cd as \u0275\u0275defineNgModule, tv as \u0275\u0275definePipe, io as \u0275\u0275directiveInject, Za as \u0275\u0275disableBindings, wd as \u0275\u0275domElement, Rd as \u0275\u0275domElementContainer, Ad as \u0275\u0275domElementContainerEnd, da as \u0275\u0275domElementContainerStart, la as \u0275\u0275domElementEnd, ca as \u0275\u0275domElementStart, Bd as \u0275\u0275domListener, xd as \u0275\u0275domProperty, dd as \u0275\u0275domTemplate, _d as \u0275\u0275element, Sd as \u0275\u0275elementContainer, Sr as \u0275\u0275elementContainerEnd, ua as \u0275\u0275elementContainerStart, aa as \u0275\u0275elementEnd, sa as \u0275\u0275elementStart, Qa as \u0275\u0275enableBindings, aD as \u0275\u0275getComponentDepsFactory, yI as \u0275\u0275getCurrentView, Wh as \u0275\u0275getInheritedFactory, lD as \u0275\u0275getReplaceMetadataURL, xI as \u0275\u0275i18n, PI as \u0275\u0275i18nApply, OI as \u0275\u0275i18nAttributes, Fd as \u0275\u0275i18nEnd, jd as \u0275\u0275i18nExp, LI as \u0275\u0275i18nPostprocess, Ld as \u0275\u0275i18nStart, Ae as \u0275\u0275inject, us as \u0275\u0275injectAttribute, ME as \u0275\u0275interpolate, NE as \u0275\u0275interpolate1, _E as \u0275\u0275interpolate2, wE as \u0275\u0275interpolate3, bE as \u0275\u0275interpolate4, SE as \u0275\u0275interpolate5, AE as \u0275\u0275interpolate6, RE as \u0275\u0275interpolate7, kE as \u0275\u0275interpolate8, xE as \u0275\u0275interpolateV, Iy as \u0275\u0275invalidFactory, Wr as \u0275\u0275invalidFactoryDep, Hd as \u0275\u0275listener, UI as \u0275\u0275loadQuery, dc as \u0275\u0275namespaceHTML, uc as \u0275\u0275namespaceMathML, lc as \u0275\u0275namespaceSVG, FI as \u0275\u0275nextContext, OO as \u0275\u0275ngDeclareClassMetadata, PO as \u0275\u0275ngDeclareClassMetadataAsync, LO as \u0275\u0275ngDeclareComponent, xO as \u0275\u0275ngDeclareDirective, FO as \u0275\u0275ngDeclareFactory, jO as \u0275\u0275ngDeclareInjectable, HO as \u0275\u0275ngDeclareInjector, VO as \u0275\u0275ngDeclareNgModule, BO as \u0275\u0275ngDeclarePipe, eD as \u0275\u0275pipe, tD as \u0275\u0275pipeBind1, nD as \u0275\u0275pipeBind2, oD as \u0275\u0275pipeBind3, rD as \u0275\u0275pipeBind4, iD as \u0275\u0275pipeBindV, HI as \u0275\u0275projection, jI as \u0275\u0275projectionDef, Nd as \u0275\u0275property, HE as \u0275\u0275pureFunction0, VE as \u0275\u0275pureFunction1, BE as \u0275\u0275pureFunction2, $E as \u0275\u0275pureFunction3, UE as \u0275\u0275pureFunction4, WE as \u0275\u0275pureFunction5, GE as \u0275\u0275pureFunction6, qE as \u0275\u0275pureFunction7, zE as \u0275\u0275pureFunction8, QE as \u0275\u0275pureFunctionV, qI as \u0275\u0275queryAdvance, $I as \u0275\u0275queryRefresh, CE as \u0275\u0275readContextLet, zI as \u0275\u0275reference, id as \u0275\u0275registerNgModuleType, hI as \u0275\u0275repeater, pI as \u0275\u0275repeaterCreate, fI as \u0275\u0275repeaterTrackByIdentity, dI as \u0275\u0275repeaterTrackByIndex, uD as \u0275\u0275replaceMetadata, Ja as \u0275\u0275resetView, Cu as \u0275\u0275resolveBody, em as \u0275\u0275resolveDocument, Xg as \u0275\u0275resolveWindow, Ka as \u0275\u0275restoreView, Gg as \u0275\u0275sanitizeHtml, Du as \u0275\u0275sanitizeResourceUrl, zg as \u0275\u0275sanitizeScript, qg as \u0275\u0275sanitizeStyle, Eu as \u0275\u0275sanitizeUrl, Yg as \u0275\u0275sanitizeUrlOrResourceUrl, FE as \u0275\u0275setComponentScope, jE as \u0275\u0275setNgModuleScope, DE as \u0275\u0275storeLet, JI as \u0275\u0275styleMap, Ud as \u0275\u0275styleProp, Vd as \u0275\u0275syntheticHostListener, Od as \u0275\u0275syntheticHostProperty, ud as \u0275\u0275template, sD as \u0275\u0275templateRefExtractor, aE as \u0275\u0275text, Gd as \u0275\u0275textInterpolate, fa as \u0275\u0275textInterpolate1, qd as \u0275\u0275textInterpolate2, zd as \u0275\u0275textInterpolate3, Qd as \u0275\u0275textInterpolate4, Zd as \u0275\u0275textInterpolate5, Yd as \u0275\u0275textInterpolate6, Kd as \u0275\u0275textInterpolate7, Jd as \u0275\u0275textInterpolate8, Xd as \u0275\u0275textInterpolateV, Qg as \u0275\u0275trustConstantHtml, Zg as \u0275\u0275trustConstantResourceUrl, IE as \u0275\u0275twoWayBindingSet, tf as \u0275\u0275twoWayListener, ef as \u0275\u0275twoWayProperty, Qy as \u0275\u0275validateIframeAttribute, BI as \u0275\u0275viewQuery, GI as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.3.13
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
