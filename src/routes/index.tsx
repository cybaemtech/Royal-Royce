import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, ShieldCheck, Sparkles, Award, Heart, Star, Play, MapPin } from "lucide-react";
import bgVideo from "@/assets/video.mp4";
import heroPhantom from "@/assets/hero-phantom.jpg";
import heroDetail from "@/assets/hero-detail.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import servicePolish from "@/assets/service-polish.jpg";
import aboutStudio from "@/assets/about-studio.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Royce Detailing — Luxury Car Detailing in India" },
      { name: "description", content: "Premium ceramic coating, paint protection film, and bespoke detailing for luxury cars. Mumbai's high-end automotive atelier." },
      { property: "og:title", content: "Royal Royce Detailing — Luxury Car Detailing" },
      { property: "og:description", content: "Premium ceramic coating, PPF and bespoke detailing for luxury cars in India." },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Ceramic Coating", desc: "9H nano-ceramic shield delivering mirror-finish gloss and years of protection.", img: serviceCeramic },
  { title: "Paint Protection Film", desc: "Self-healing PPF that defends against stone chips, scratches and the elements.", img: servicePpf },
  { title: "Interior Detailing", desc: "Hand-restored leather, immaculate textiles and showroom-fresh cabins.", img: serviceInterior },
  { title: "Exterior Polishing", desc: "Multi-stage paint correction that erases swirls and reveals depth of colour.", img: servicePolish },
];

const features = [
  { icon: Award, title: "Certified Craftsmen", text: "Trained on European luxury and supercar marques." },
  { icon: ShieldCheck, title: "Premium Products", text: "Only world-class formulations from Gtechniq, XPEL and Modesta." },
  { icon: Sparkles, title: "Lasting Brilliance", text: "Up to 10 years of guaranteed gloss and protection." },
  { icon: Heart, title: "Concierge Care", text: "Pickup, drop-off and a private viewing of your finished car." },
];

const testimonials = [
  { name: "Aarav Mehta", car: "Porsche 911 Turbo S", text: "The ceramic finish is unreal. My Porsche looks deeper, wetter and more alive than the day I drove it home." },
  { name: "Ishaan Kapoor", car: "Range Rover Autobiography", text: "Royal Royce is the only studio I trust. The level of detail and discretion is exactly what a luxury client expects." },
  { name: "Priya Sharma", car: "Mercedes-Maybach S580", text: "From the leather to the paint, every surface was treated like art. Truly a five-star experience." },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO — Editorial split layout */}
      <section className="relative min-h-screen w-full overflow-hidden bg-navy pt-24 lg:pt-28">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Ambient background layers */}
        <div className="absolute inset-0 gradient-navy opacity-80" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/15 blur-[140px]" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />

        <div className="relative container-luxury grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-20 lg:pb-32 pt-8 lg:pt-16">
          {/* LEFT — Editorial copy */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-8 animate-rise" style={{ animationDelay: "0.1s" }}>
              <span className="block h-px w-12 bg-gold animate-line" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-gold">
                Est. 2013 · India's Luxury Detailing Atelier
              </span>
            </div>

            <h1 className="font-display text-white leading-[0.92] text-[12vw] sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
              <span className="block animate-rise" style={{ animationDelay: "0.2s" }}>The Art</span>
              <span className="block animate-rise italic font-light text-white/80" style={{ animationDelay: "0.4s" }}>
                of <span className="text-shimmer not-italic font-normal">Automotive</span>
              </span>
              <span className="block animate-rise" style={{ animationDelay: "0.6s" }}>Perfection.</span>
            </h1>

            <p className="mt-10 max-w-xl text-base md:text-lg text-white/70 leading-relaxed animate-rise" style={{ animationDelay: "0.8s" }}>
              Where master craftsmen, certified science and obsessive care meet. We protect, restore and
              elevate the world's most refined automobiles — by appointment only.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5 animate-rise" style={{ animationDelay: "1s" }}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-9 py-5 bg-gold text-gold-foreground text-[11px] uppercase tracking-[0.35em] font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Book Appointment</span>
                <ArrowRight className="relative h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center gap-4 text-white/90 text-[11px] uppercase tracking-[0.35em]"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/60">
                  <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                  <Play className="h-3.5 w-3.5 fill-gold text-gold ml-0.5" />
                </span>
                <span className="group-hover:text-gold transition-colors">Watch the Craft</span>
              </Link>
            </div>

            {/* Location + cities */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-white/50 animate-rise" style={{ animationDelay: "1.2s" }}>
              <span className="inline-flex items-center gap-2 text-gold">
                <MapPin className="h-3.5 w-3.5" /> Now Serving
              </span>
              <span>Mumbai</span>
              <span className="text-gold/40">·</span>
              <span>Delhi NCR</span>
              <span className="text-gold/40">·</span>
              <span>Bangalore</span>
              <span className="text-gold/40">·</span>
              <span>Hyderabad</span>
            </div>
          </div>

          {/* RIGHT — Image stack */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[640px] animate-rise" style={{ animationDelay: "0.5s" }}>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 h-32 w-32 border-t border-r border-gold/60" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 border-b border-l border-gold/60" />

            {/* Main image */}
            <div className="relative h-full w-full overflow-hidden shadow-luxury">
              <img
                src={heroPhantom}
                alt="Black Rolls-Royce Phantom in detailing studio"
                width={1600}
                height={1200}
                className="h-full w-full object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/20" />
            </div>

            {/* Floating detail card */}
            <div className="hidden md:block absolute -left-8 lg:-left-16 bottom-12 w-56 animate-float">
              <div className="relative overflow-hidden border border-gold/30 bg-navy/80 backdrop-blur-md p-3 shadow-gold">
                <img src={heroDetail} alt="Hand polishing a luxury car" width={400} height={400} className="w-full aspect-square object-cover" />
                <div className="mt-3 px-1 pb-1">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-gold">10H Coating</div>
                  <div className="font-display text-white text-base mt-0.5">Studio Process</div>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute top-6 left-6 lg:-left-10 bg-navy/85 backdrop-blur-md border border-gold/30 px-5 py-3 shadow-luxury">
              <div className="flex items-center gap-1 text-gold mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/60">1200+ Elite Clients</div>
            </div>
          </div>
        </div>

        {/* Bottom marquee — luxury marques */}
        <div className="relative border-y border-white/10 bg-navy/60 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-5">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center shrink-0">
                {["Rolls-Royce", "Bentley", "Porsche", "Ferrari", "Lamborghini", "Aston Martin", "Mercedes-Maybach", "Range Rover", "McLaren", "Bugatti"].map((brand) => (
                  <span key={`${dup}-${brand}`} className="font-display text-2xl md:text-3xl text-white/30 hover:text-gold transition-colors px-10 flex items-center gap-10">
                    {brand}
                    <span className="h-1 w-1 rounded-full bg-gold/40" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Signature Services"
            title="Bespoke care, exquisitely delivered."
            description="Each treatment is performed in a controlled studio environment, by certified craftsmen using the world's most advanced detailing systems."
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <Link
                to="/services"
                key={s.title}
                className="group relative overflow-hidden bg-secondary hover-lift"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">0{i + 1}</div>
                  <h3 className="font-display text-3xl text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/75 max-w-md">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
                    Discover <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container-luxury grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={aboutStudio}
              alt="Royal Royce Detailing studio"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover shadow-luxury"
            />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-navy text-navy-foreground p-8 max-w-[220px] shadow-gold">
              <div className="font-display text-5xl text-gold">12</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/70">Years of mastering automotive elegance</div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Atelier"
              title="A studio devoted to the art of the automobile."
              description="Royal Royce was founded on a simple obsession — that exceptional cars deserve exceptional care. From flagship saloons to track-bred supercars, every vehicle that enters our studio receives an uncompromising standard of craftsmanship."
            />
            <ul className="mt-10 space-y-5">
              {[
                "Climate-controlled, dust-filtered detailing bays",
                "Manufacturer-trained, internationally certified specialists",
                "Globally renowned ceramic and PPF formulations",
                "Transparent process with documented before & after",
              ].map((line) => (
                <li key={line} className="flex items-start gap-4">
                  <span className="mt-2 h-px w-8 bg-gold shrink-0" />
                  <span className="text-foreground/85">{line}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-navy text-navy-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-gold-foreground transition-all duration-500"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Why Royal Royce"
            title="The standard others aspire to."
            align="center"
          />
          <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-background p-10 group transition-all duration-500 hover:bg-navy hover:text-navy-foreground"
              >
                <div className="h-14 w-14 flex items-center justify-center border border-gold text-gold mb-8 group-hover:bg-gold group-hover:text-gold-foreground transition-colors duration-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-navy group-hover:text-white transition-colors">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionHeading eyebrow="The Showcase" title="Recent works of devotion." />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-navy hover:text-gold transition-colors"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <div key={i} className="overflow-hidden aspect-square group">
                <img
                  src={img}
                  alt={`Detailing showcase ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted by India's most discerning drivers."
            align="center"
          />
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-secondary p-10 hover-lift">
                <div className="flex gap-1 text-gold mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display text-lg leading-relaxed text-foreground">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{t.car}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 25% 30%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 75% 70%, var(--gold) 0%, transparent 40%)"
        }} />
        <div className="container-luxury relative text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Reserve your slot</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-tight max-w-3xl mx-auto">
            Give your car the care <span className="italic text-shimmer">it deserves.</span>
          </h2>
          <p className="mt-8 text-lg text-white/70 max-w-xl mx-auto">
            Booking is by appointment only. Speak with our concierge to design a treatment plan tailored to your automobile.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-gold text-gold-foreground text-xs uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
