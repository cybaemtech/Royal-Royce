import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import servicePolish from "@/assets/service-polish.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Royal Royce Detailing" },
      { name: "description", content: "Explore the works of Royal Royce Detailing — ceramic, PPF and showroom restorations on the world's finest automobiles." },
      { property: "og:title", content: "Gallery — Royal Royce Detailing" },
      { property: "og:description", content: "A showcase of bespoke detailing work on luxury and exotic cars." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: gallery1, label: "Mercedes G-Wagon", tag: "Full PPF" },
  { img: gallery2, label: "Lamborghini Urus", tag: "Ceramic Coat" },
  { img: gallery3, label: "Ferrari 488", tag: "Paint Correction" },
  { img: gallery4, label: "Porsche 911", tag: "Ceramic + PPF" },
  { img: gallery5, label: "Bentley Continental", tag: "Showroom Detail" },
  { img: gallery6, label: "Range Rover Vogue", tag: "Hydrophobic Coat" },
  { img: serviceCeramic, label: "Audi RS6", tag: "Ceramic Coat" },
  { img: servicePolish, label: "BMW M5", tag: "Multi-stage Polish" },
];

function GalleryPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="The Showcase"
            title="A portfolio of devotion."
            description="A small selection of cars recently delivered from our atelier — each treated with patience, precision and pride."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxury">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden ${i % 5 === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`}
              >
                <img
                  src={it.img}
                  alt={it.label}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.tag}</div>
                    <div className="font-display text-2xl text-white mt-1">{it.label}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
