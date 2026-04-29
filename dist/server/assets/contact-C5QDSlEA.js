import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CVljLaDE.js";
import { S as SiteShell, a as SectionHeading, M as MapPin, P as Phone, b as Mail, d as MessageCircle } from "./SectionHeading-u-sqC-cj.js";
import { A as ArrowRight } from "./arrow-right-BW27vrmI.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-18951-ir.js";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-20 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Reserve Your Slot", title: "Speak with our concierge.", description: "Tell us about your automobile and your goals — we will design a tailored treatment programme and respond within one business day." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid gap-16 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        [{
          icon: MapPin,
          title: "Studio",
          text: "Studio 7, Linking Road,\nBandra West, Mumbai 400050"
        }, {
          icon: Phone,
          title: "Telephone",
          text: "+91 98 7654 3210\nMon – Sat · 10am – 8pm"
        }, {
          icon: Mail,
          title: "Email",
          text: "care@royalroyce.in"
        }, {
          icon: MessageCircle,
          title: "WhatsApp",
          text: "Quick replies via WhatsApp concierge"
        }].map(({
          icon: Icon,
          title,
          text
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 shrink-0 border border-gold text-gold flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-1", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground whitespace-pre-line leading-relaxed", children: text })
          ] })
        ] }, title)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919876543210", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 px-7 py-4 bg-gold text-gold-foreground text-xs uppercase tracking-[0.3em] hover:bg-navy hover:text-navy-foreground transition-all duration-500", children: [
          "Chat on WhatsApp ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "bg-secondary p-8 lg:p-12 space-y-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Telephone", name: "phone", type: "tel", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Vehicle (Make & Model)", name: "vehicle" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: "Service of Interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-2 w-full bg-background border-b border-border focus:border-gold py-3 outline-none transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Ceramic Coating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Paint Protection Film" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Interior Detailing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Exterior Polishing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bespoke Consultation" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "mt-2 w-full bg-background border-b border-border focus:border-gold py-3 outline-none transition-colors resize-none", placeholder: "Tell us about your car and what you'd like to achieve..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy text-navy-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-all duration-500", children: [
          submitted ? "Thank You — We'll Be in Touch" : "Send Enquiry",
          !submitted && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/6] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Royal Royce Detailing location", src: "https://www.openstreetmap.org/export/embed.html?bbox=72.825%2C19.05%2C72.855%2C19.075&layer=mapnik", className: "w-full h-full grayscale-[40%] contrast-110", loading: "lazy" }) }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "mt-2 w-full bg-background border-b border-border focus:border-gold py-3 outline-none transition-colors" })
  ] });
}
export {
  ContactPage as component
};
