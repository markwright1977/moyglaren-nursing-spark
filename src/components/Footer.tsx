import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-lg font-bold">M</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  Moyglare
                </h3>
                <p className="text-xs text-muted-foreground">Nursing Home</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing compassionate care in Maynooth, Co. Kildare for over 30 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground text-sm hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground text-sm hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#amenities" className="text-muted-foreground text-sm hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Moyglare Road, Maynooth</li>
              <li>Co. Kildare, W23 HF82</li>
              <li className="pt-2">
                <a href="tel:+35316289022" className="hover:text-primary transition-colors">+353 1 628 9022</a>
              </li>
              <li>
                <a href="mailto:info@moyglarenursinghome.ie" className="hover:text-primary transition-colors">info@moyglarenursinghome.ie</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Moyglare Nursing Home. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-terracotta fill-terracotta" /> in Ireland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
