import { a as l, b as m, c as u, d as g, e as b, f as y, g as d } from "@nf-internal/chunk-QAPG25XG";
import { b as f } from "@nf-internal/chunk-LJGPQ2JK";
import { A as c } from "@nf-internal/chunk-VOXALN5U";
import { a, b as h } from "@nf-internal/chunk-JKOY2XUY";
var z = ':host{--swiper-theme-color:#007aff}:host{display:block;margin-left:auto;margin-right:auto;position:relative;z-index:1}.swiper{display:block;height:100%;list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;width:100%;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:initial;display:flex;height:100%;position:relative;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);width:100%;z-index:1}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){display:block;flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){backface-visibility:hidden;transform:translateZ(0)}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{height:var(--swiper-centered-offset-after);min-width:1px;width:100%}', k = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}::slotted(.swiper-slide-shadow){background:#00000026}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(270deg,#00000080,#0000)}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(90deg,#00000080,#0000)}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(0deg,#00000080,#0000)}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(180deg,#00000080,#0000)}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid #0000;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){backface-visibility:hidden;z-index:0}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){backface-visibility:hidden;z-index:0}::slotted(.swiper-zoom-container){align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-height:100%;max-width:100%;object-fit:contain}", p = class {
}, v = typeof window > "u" || typeof HTMLElement > "u" ? p : HTMLElement, S = (r, e) => { if (typeof CSSStyleSheet < "u" && r.adoptedStyleSheets) {
    let s = new CSSStyleSheet;
    s.replaceSync(e), r.adoptedStyleSheets = [s];
}
else {
    let s = document.createElement("style");
    s.rel = "stylesheet", s.textContent = e, r.appendChild(s);
} }, n = class extends v {
    constructor() { super(), this.attachShadow({ mode: "open" }); }
    cssStyles() {
        return [z, ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []].join(`
`);
    }
    cssLinks() { return this.injectStylesUrls || []; }
    calcSlideSlots() { let e = this.slideSlots || 0, s = [...this.querySelectorAll("[slot^=slide-]")].map(i => parseInt(i.getAttribute("slot").split("slide-")[1], 10)); if (this.slideSlots = s.length ? Math.max(...s) + 1 : 0, !!this.rendered) {
        if (this.slideSlots > e)
            for (let i = e; i < this.slideSlots; i += 1) {
                let t = document.createElement("swiper-slide");
                t.setAttribute("part", `slide slide-${i + 1}`);
                let o = document.createElement("slot");
                o.setAttribute("name", `slide-${i + 1}`), t.appendChild(o), this.shadowRoot.querySelector(".swiper-wrapper").appendChild(t);
            }
        else if (this.slideSlots < e) {
            let i = this.swiper.slides;
            for (let t = i.length - 1; t >= 0; t -= 1)
                t > this.slideSlots && i[t].remove();
        }
    } }
    render() {
        if (this.rendered)
            return;
        this.calcSlideSlots();
        let e = this.cssStyles();
        this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")), e.length && S(this.shadowRoot, e), this.cssLinks().forEach(i => { if (this.shadowRoot.querySelector(`link[href="${i}"]`))
            return; let o = document.createElement("link"); o.rel = "stylesheet", o.href = i, this.shadowRoot.appendChild(o); });
        let s = document.createElement("div");
        s.classList.add("swiper"), s.part = "container", c(s, `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({ length: this.slideSlots }).map((i, t) => `
        <swiper-slide part="slide slide-${t}">
          <slot name="slide-${t}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${m(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev"></div>
        <div part="button-next" class="swiper-button-next"></div>
      ` : ""}
      ${u(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${g(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `), this.shadowRoot.appendChild(s), this.rendered = !0;
    }
    initialize() { if (this.swiper && this.swiper.initialized)
        return; let { params: e, passedParams: s } = d(this); this.swiperParams = e, this.passedParams = s, delete this.swiperParams.init, this.render(), this.swiper = new f(this.shadowRoot.querySelector(".swiper"), h(a(a({}, e.virtual ? {} : { observer: !0 }), e), { touchEventsTarget: "container", onAny: (i, ...t) => { i === "observerUpdate" && this.calcSlideSlots(); let o = e.eventsPrefix ? `${e.eventsPrefix}${i.toLowerCase()}` : i.toLowerCase(), x = new CustomEvent(o, { detail: t, bubbles: i !== "hashChange", cancelable: !0 }); this.dispatchEvent(x); } })); }
    connectedCallback() { this.swiper && this.swiper.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.init === !1 || this.getAttribute("init") === "false" || this.initialize(); }
    disconnectedCallback() { this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.swiper && this.swiper.destroy && this.swiper.destroy(); }
    updateSwiperOnPropChange(e, s) { let { params: i, passedParams: t } = d(this, e, s); this.passedParams = t, this.swiperParams = i, !(this.swiper && this.swiper.params[e] === s) && y(a(a(a({ swiper: this.swiper, passedParams: this.passedParams, changedParams: [b(e)] }, e === "navigation" && t[e] ? { prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" } : {}), e === "pagination" && t[e] ? { paginationEl: ".swiper-pagination" } : {}), e === "scrollbar" && t[e] ? { scrollbarEl: ".swiper-scrollbar" } : {})); }
    attributeChangedCallback(e, s, i) { this.swiper && this.swiper.initialized && (s === "true" && i === null && (i = !1), this.updateSwiperOnPropChange(e, i)); }
    static get observedAttributes() { return l.filter(s => s.includes("_")).map(s => s.replace(/[A-Z]/g, i => `-${i}`).replace("_", "").toLowerCase()); }
};
l.forEach(r => { r !== "init" && (r = r.replace("_", ""), Object.defineProperty(n.prototype, r, { configurable: !0, get() { return (this.passedParams || {})[r]; }, set(e) { this.passedParams || (this.passedParams = {}), this.passedParams[r] = e, this.swiper && this.swiper.initialized && this.updateSwiperOnPropChange(r, e); } })); });
var w = class extends v {
    constructor() { super(), this.attachShadow({ mode: "open" }); }
    render() { let e = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true"; if (S(this.shadowRoot, k), this.shadowRoot.appendChild(document.createElement("slot")), e) {
        let s = document.createElement("div");
        s.classList.add("swiper-lazy-preloader"), s.part.add("preloader"), this.shadowRoot.appendChild(s);
    } }
    initialize() { this.render(); }
    connectedCallback() { this.swiperLoopMoveDOM || this.initialize(); }
}, L = () => { typeof window > "u" || (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", n), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", w)); };
typeof window < "u" && (window.SwiperElementRegisterParams = r => { l.push(...r); });
export { n as SwiperContainer, w as SwiperSlide, L as register };
