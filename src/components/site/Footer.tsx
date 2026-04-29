import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-luxury py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl mb-2">Royal Royce</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Detailing Atelier</div>
          <p className="text-sm text-navy-foreground/70 leading-relaxed">
            India's premium destination for ceramic coating, paint protection and bespoke
            automotive care. Where every car is treated as a masterpiece.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/80">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Visit Us</h4>
          <ul className="space-y-4 text-sm text-navy-foreground/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />Studio 7, Bandra West, Mumbai 400050</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />+91 98 7654 3210</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />care@royalroyce.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Connect</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-11 w-11 border border-navy-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-gold-foreground transition-all duration-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-navy-foreground/50 leading-relaxed">
            Open Mon–Sat · 10am – 8pm<br />By appointment only
          </p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-navy-foreground/50">
          <span>© {new Date().getFullYear()} Royal Royce Detailing. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Crafted with precision</span>
        </div>
      </div>
    </footer>
  );
}
