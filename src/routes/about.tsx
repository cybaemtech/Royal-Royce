import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight } from "lucide-react";
import aboutStudio from "@/assets/about-studio.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Royal Royce Detailing" },
      { name: "description", content: "Twelve years of devotion to the art of the automobile. Meet India's premier luxury detailing atelier." },
      { property: "og:title", content: "About Royal Royce Detailing" },
      { property: "og:description", content: "A boutique atelier devoted to the world's finest automobiles." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Story"
            title="Twelve years devoted to the art of the automobile."
            description="Royal Royce began as one craftsman's obsession with perfection. Today it is a boutique atelier trusted by India's most discerning collectors and enthusiasts."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxury grid gap-16 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <img src={aboutStudio} alt="Inside the studio" loading="lazy" className="w-full aspect-[16/11] object-cover shadow-luxury" />
          </div>
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">The Philosophy</div>
            <h3 className="font-display text-4xl text-navy leading-tight">Where the work is the signature.</h3>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We refuse the assembly-line approach. Every vehicle entrusted to us is treated as
              the singular masterpiece it is — patiently corrected, precisely coated, and
              quietly returned in a state more refined than the day it was new.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our specialists train annually with international partners, our products are
              sourced exclusively from the world's finest formulators, and our results speak
              louder than any guarantee we could ever print.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-luxury grid gap-16 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2 lg:order-2">
            <img src={gallery5} alt="Bentley detail" loading="lazy" className="w-full aspect-square object-cover shadow-luxury" />
          </div>
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">The Atelier</div>
            <h3 className="font-display text-4xl text-navy leading-tight">A studio engineered for perfection.</h3>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                ["Climate Control", "Temperature, humidity and air quality monitored 24/7."],
                ["Filtered Lighting", "5000K daylight panels reveal every imperfection."],
                ["Sealed Bays", "Dust-free environment for ceramic and PPF curing."],
                ["Discreet Service", "Private viewing for delivery and collection."],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="font-display text-2xl text-navy">{t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container-luxury text-center">
          <SectionHeading eyebrow="Begin" title="Experience the Royal Royce difference." align="center" />
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-navy text-navy-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-all duration-500"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
