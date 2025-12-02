import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/moyglare-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-green))] py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img 
              src={logo} 
              alt="Moyglare Nursing Home" 
              className="h-20 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-[hsl(var(--footer-text-muted))] text-sm leading-relaxed">
              Providing compassionate, person-centred care in Maynooth, Co. Kildare for over 30 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mb-5 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[hsl(var(--footer-text))] mt-0.5 flex-shrink-0" />
                <span className="text-[hsl(var(--footer-text-muted))] text-sm">
                  Moyglare Road, Maynooth,<br />Co. Kildare, W23 HF82
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[hsl(var(--footer-text))] flex-shrink-0" />
                <a href="tel:+35316289022" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors">
                  +353 1 628 9022
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[hsl(var(--footer-text))] flex-shrink-0" />
                <a href="mailto:info@moyglarenursinghome.ie" className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors break-all">
                  info@moyglarenursinghome.ie
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditation & Social */}
          <div>
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mb-5 text-lg">Accreditation</h4>
            <p className="text-[hsl(var(--footer-text-muted))] text-sm mb-4">
              HIQA Registered Nursing Home<br />
              Fully compliant with national standards
            </p>
            
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mb-3 text-lg mt-6">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[hsl(var(--footer-text)/0.1)] flex items-center justify-center hover:bg-[hsl(var(--footer-text)/0.2)] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5 text-[hsl(var(--footer-text))]" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[hsl(var(--footer-text)/0.1)] flex items-center justify-center hover:bg-[hsl(var(--footer-text)/0.2)] transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5 text-[hsl(var(--footer-text))]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--footer-text)/0.2)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[hsl(var(--footer-text-muted))] text-sm">
            © {new Date().getFullYear()} Moyglare Nursing Home. All rights reserved.
          </p>
          <p className="text-[hsl(var(--footer-text-muted))] text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-cta fill-cta" /> in Ireland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;