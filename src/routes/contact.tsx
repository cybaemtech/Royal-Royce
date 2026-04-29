import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Royal Royce Detailing" },
      { name: "description", content: "Book your luxury detailing appointment. Visit our Mumbai atelier or speak with our concierge." },
      { property: "og:title", content: "Contact Royal Royce Detailing" },
      { property: "og:description", content: "Reserve a private appointment at our Mumbai studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      <section className="pt-40 pb-20 bg-secondary">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Reserve Your Slot"
            title="Speak with our concierge."
            description="Tell us about your automobile and your goals — we will design a tailored treatment programme and respond within one business day."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-luxury grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-10">
            {[
              { icon: MapPin, title: "Studio", text: "Studio 7, Linking Road,\nBandra West, Mumbai 400050" },
              { icon: Phone, title: "Telephone", text: "+91 98 7654 3210\nMon – Sat · 10am – 8pm" },
              { icon: Mail, title: "Email", text: "care@royalroyce.in" },
              { icon: MessageCircle, title: "WhatsApp", text: "Quick replies via WhatsApp concierge" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5">
                <div className="h-12 w-12 shrink-0 border border-gold text-gold flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{title}</div>
                  <div className="text-foreground whitespace-pre-line leading-relaxed">{text}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-gold text-gold-foreground text-xs uppercase tracking-[0.3em] hover:bg-navy hover:text-navy-foreground transition-all duration-500"
            >
              Chat on WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-secondary p-8 lg:p-12 space-y-6 shadow-soft"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Telephone" name="phone" type="tel" required />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Vehicle (Make & Model)" name="vehicle" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold">Service of Interest</label>
                <select className="mt-2 w-full bg-background border-b border-border focus:border-gold py-3 outline-none transition-colors">
                  <option>Ceramic Coating</option>
                  <option>Paint Protection Film</option>
                  <option>Interior Detailing</option>
                  <option>Exterior Polishing</option>
                  <option>Bespoke Consultation</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full bg-background border-b border-border focus:border-gold py-3 outline-none transition-colors resize-none"
                  placeholder="Tell us about your car and what you'd like to achieve..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy text-navy-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-all duration-500"
              >
                {submitted ? "Thank You — We'll Be in Touch" : "Send Enquiry"}
                {!submitted && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="aspect-[16/6] w-full">
          <iframe
            title="Royal Royce Detailing location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.825%2C19.05%2C72.855%2C19.075&layer=mapnik"
            className="w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
          />
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.3em] text-gold">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-background border-b border-border focus:border-gold py-3 outline-none transition-colors"
      />
    </div>
  );
}
