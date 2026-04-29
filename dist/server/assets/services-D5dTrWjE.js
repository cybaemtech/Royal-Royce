import { T as jsxRuntimeExports } from "./worker-entry-CVljLaDE.js";
import { L as Link } from "./router-18951-ir.js";
import { c as createLucideIcon, S as SiteShell, a as SectionHeading } from "./SectionHeading-u-sqC-cj.js";
import { s as serviceCeramic, a as servicePolish } from "./service-polish-BvicSzFs.js";
import { s as servicePpf, a as serviceInterior } from "./service-interior-BSnfDQ6g.js";
import { A as ArrowRight } from "./arrow-right-BW27vrmI.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const catalogue = [{
  title: "Ceramic Coating",
  img: serviceCeramic,
  duration: "2 – 4 days",
  description: "A 9H nano-ceramic system that bonds permanently with your paint, delivering a glass-like finish, hydrophobic protection and unmatched depth of colour.",
  bullets: ["Multi-stage paint decontamination", "Single-stage paint correction", "Up to 10 years of protection", "Optional wheel and trim coating"]
}, {
  title: "Paint Protection Film",
  img: servicePpf,
  duration: "3 – 5 days",
  description: "Premium self-healing urethane film that absorbs stone chips, scratches and rock impacts — engineered to preserve your paint for a decade.",
  bullets: ["Full body, partial or track packages", "Hydrophobic top-coat finish", "Self-healing under heat", "10-year material warranty"]
}, {
  title: "Interior Detailing",
  img: serviceInterior,
  duration: "1 – 2 days",
  description: "Hand-restoration of every surface — leather, alcantara, wood, metal — finished with conditioning treatments that protect against age and wear.",
  bullets: ["Deep extraction of textiles & carpets", "Leather conditioning & resealing", "Dashboard & trim restoration", "Antibacterial cabin sanitisation"]
}, {
  title: "Exterior Polishing",
  img: servicePolish,
  duration: "1 – 3 days",
  description: "Multi-stage machine polishing that removes swirl marks, oxidation and micro-scratches to reveal the true depth and clarity of your paint.",
  bullets: ["Paint thickness measurement", "Two to three stage correction", "Hand-finished sealing", "Engine bay & wheel detailing"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Services", title: "Treatments worthy of your automobile.", description: "Every service is performed in our climate-controlled atelier by certified specialists, using only premium global products." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury space-y-28", children: catalogue.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-[1400ms] shadow-soft" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.4em] text-gold mb-4", children: [
          "0",
          i + 1,
          " · ",
          s.duration
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl text-navy leading-tight", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: s.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-gold mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-3 px-8 py-4 bg-navy text-navy-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-all duration-500", children: [
          "Request a Quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }, s.title)) }) })
  ] });
}
export {
  ServicesPage as component
};
