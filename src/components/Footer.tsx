import { Heart, Phone, Mail, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/moyglare-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-green))] pt-16 pb-8">
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
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Our Services" },
                { href: "#amenities", label: "Amenities" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mb-5 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[hsl(var(--footer-text))] mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/MOYGLARE+NURSING+HOME/@53.3909083,-6.5975496,17z/data=!3m1!4b1!4m6!3m5!1s0x48676fe5c2bfe8a1:0x5956f5617982a8c8!8m2!3d53.3909083!4d-6.5975496!16s%2Fg%2F1hf12ynpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--footer-text-muted))] text-sm leading-relaxed hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
                >
                  Moyglare Road, Maynooth,<br />Co. Kildare, W23 HF82
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[hsl(var(--footer-text))] flex-shrink-0" />
                <a 
                  href="tel:+35316289022" 
                  className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
                >
                  +353 1 628 9022
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[hsl(var(--footer-text))] flex-shrink-0" />
                <a 
                  href="mailto:info@moyglare.ie" 
                  className="text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors duration-200 break-all"
                >
                  info@moyglare.ie
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditation & Social */}
          <div>
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mb-5 text-lg">Accreditation</h4>
            <ul className="text-[hsl(var(--footer-text-muted))] text-sm space-y-2 mb-4">
              <li><strong className="text-[hsl(var(--footer-text))]">Registered Provider:</strong> Moyglare Nursing Home Ltd</li>
              <li><strong className="text-[hsl(var(--footer-text))]">HIQA Registration No:</strong> 72</li>
              <li><strong className="text-[hsl(var(--footer-text))]">Person in Charge:</strong> Anne Corcoran</li>
            </ul>
            <a 
              href="https://www.hiqa.ie/system/files?file=inspectionreports/72-moyglare-nursing-home-27-november-2024.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[hsl(var(--footer-text-muted))] text-sm hover:text-[hsl(var(--footer-text))] transition-colors duration-200 underline underline-offset-2"
            >
              View our latest HIQA report
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <h4 className="font-display font-semibold text-[hsl(var(--footer-text))] mt-6 mb-3 text-lg">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[hsl(var(--footer-text)/0.1)] flex items-center justify-center hover:bg-[hsl(var(--footer-text)/0.2)] transition-colors duration-200 min-h-[44px] min-w-[44px]"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5 text-[hsl(var(--footer-text))]" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[hsl(var(--footer-text)/0.1)] flex items-center justify-center hover:bg-[hsl(var(--footer-text)/0.2)] transition-colors duration-200 min-h-[44px] min-w-[44px]"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5 text-[hsl(var(--footer-text))]" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[hsl(var(--footer-text)/0.15)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm">
              <Link 
                to="/privacy" 
                className="text-[hsl(var(--footer-text-muted))] hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-[hsl(var(--footer-text)/0.3)] hidden md:inline">|</span>
              <Link 
                to="/cookies" 
                className="text-[hsl(var(--footer-text-muted))] hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
              >
                Cookies
              </Link>
              <span className="text-[hsl(var(--footer-text)/0.3)] hidden md:inline">|</span>
              <Link 
                to="/accessibility" 
                className="text-[hsl(var(--footer-text-muted))] hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
              >
                Accessibility
              </Link>
              <span className="text-[hsl(var(--footer-text)/0.3)] hidden md:inline">|</span>
              <Link 
                to="/complaints" 
                className="text-[hsl(var(--footer-text-muted))] hover:text-[hsl(var(--footer-text))] transition-colors duration-200"
              >
                Complaints Procedure
              </Link>
            </nav>
            <p className="text-[hsl(var(--footer-text-muted))] text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-cta fill-cta" /> in Ireland
            </p>
          </div>
          <p className="text-[hsl(var(--footer-text-muted))] text-sm text-center md:text-left">
            © {new Date().getFullYear()} Moyglare Nursing Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
