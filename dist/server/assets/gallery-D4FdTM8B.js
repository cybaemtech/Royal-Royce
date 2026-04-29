import { T as jsxRuntimeExports } from "./worker-entry-CVljLaDE.js";
import { S as SiteShell, a as SectionHeading } from "./SectionHeading-u-sqC-cj.js";
import { g as gallery1, a as gallery2, b as gallery3, c as gallery4 } from "./gallery-4-Dd88bqQC.js";
import { g as gallery5 } from "./gallery-5-BJPcb06U.js";
import { s as serviceCeramic, a as servicePolish } from "./service-polish-BvicSzFs.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-18951-ir.js";
const gallery6 = "/assets/gallery-6-B6ylGY0g.jpg";
const items = [{
  img: gallery1,
  label: "Mercedes G-Wagon",
  tag: "Full PPF"
}, {
  img: gallery2,
  label: "Lamborghini Urus",
  tag: "Ceramic Coat"
}, {
  img: gallery3,
  label: "Ferrari 488",
  tag: "Paint Correction"
}, {
  img: gallery4,
  label: "Porsche 911",
  tag: "Ceramic + PPF"
}, {
  img: gallery5,
  label: "Bentley Continental",
  tag: "Showroom Detail"
}, {
  img: gallery6,
  label: "Range Rover Vogue",
  tag: "Hydrophobic Coat"
}, {
  img: serviceCeramic,
  label: "Audi RS6",
  tag: "Ceramic Coat"
}, {
  img: servicePolish,
  label: "BMW M5",
  tag: "Multi-stage Polish"
}];
function GalleryPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The Showcase", title: "A portfolio of devotion.", description: "A small selection of cars recently delivered from our atelier — each treated with patience, precision and pride." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: `group relative overflow-hidden ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.label, loading: "lazy", className: "w-full aspect-[4/3] object-cover transition-transform duration-[1400ms] group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: it.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-white mt-1", children: it.label })
      ] }) })
    ] }, i)) }) }) })
  ] });
}
export {
  GalleryPage as component
};
