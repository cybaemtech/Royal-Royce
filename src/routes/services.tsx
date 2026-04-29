import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Check } from "lucide-react";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import servicePolish from "@/assets/service-polish.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Royal Royce Detailing" },
      { name: "description", content: "Ceramic coating, paint protection film, interior detailing, and exterior polishing crafted for luxury automobiles." },
      { property: "og:title", content: "Luxury Detailing Services — Royal Royce" },
      { property: "og:description", content: "Bespoke ceramic, PPF, interior and exterior treatments for luxury cars." },
    ],
  }),
  component: ServicesPage,
});

const catalogue = [
  {
    title: "Ceramic Coating",
    img: serviceCeramic,
    duration: "2 – 4 days",
    description:
      "A 9H nano-ceramic system that bonds permanently with your paint, delivering a glass-like finish, hydrophobic protection and unmatched depth of colour.",
    bullets: [
      "Multi-stage paint decontamination",
      "Single-stage paint correction",
      "Up to 10 years of protection",
      "Optional wheel and trim coating",
    ],
  },
  {
    title: "Paint Protection Film",
    img: servicePpf,
    duration: "3 – 5 days",
    description:
      "Premium self-healing urethane film that absorbs stone chips, scratches and rock impacts — engineered to preserve your paint for a decade.",
    bullets: [
      "Full body, partial or track packages",
      "Hydrophobic top-coat finish",
      "Self-healing under heat",
      "10-year material warranty",
    ],
  },
  {
    title: "Interior Detailing",
    img: serviceInterior,
    duration: "1 – 2 days",
    description:
      "Hand-restoration of every surface — leather, alcantara, wood, metal — finished with conditioning treatments that protect against age and wear.",
    bullets: [
      "Deep extraction of textiles & carpets",
      "Leather conditioning & resealing",
      "Dashboard & trim restoration",
      "Antibacterial cabin sanitisation",
    ],
  },
  {
    title: "Exterior Polishing",
    img: servicePolish,
    duration: "1 – 3 days",
    description:
      "Multi-stage machine polishing that removes swirl marks, oxidation and micro-scratches to reveal the true depth and clarity of your paint.",
    bullets: [
      "Paint thickness measurement",
      "Two to three stage correction",
      "Hand-finished sealing",
      "Engine bay & wheel detailing",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Services"
            title="Treatments worthy of your automobile."
            description="Every service is performed in our climate-controlled atelier by certified specialists, using only premium global products."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxury space-y-28">
          {catalogue.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-[1400ms] shadow-soft"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">0{i + 1} · {s.duration}</div>
                <h3 className="font-display text-4xl md:text-5xl text-navy leading-tight">{s.title}</h3>
                <p className="mt-6 text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-8 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-foreground/85">
                      <Check className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-navy text-navy-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-all duration-500"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
