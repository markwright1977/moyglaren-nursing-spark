import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/moyglare-logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition after scrolling past ~80% of viewport height (hero section)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#amenities", label: "Amenities" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const moreNavLinks = [
    { href: "#gallery", label: "Gallery" },
    { href: "#community", label: "Community" },
    { href: "#team", label: "Our Team" },
    { href: "#faq", label: "FAQ" },
  ];

  const allNavLinks = [...mainNavLinks.slice(0, 3), ...moreNavLinks, ...mainNavLinks.slice(3)];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
          : "bg-gradient-to-b from-black/50 via-black/25 to-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Moyglare Nursing Home" 
              className="h-24 lg:h-28 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled 
                    ? "text-foreground hover:text-primary after:bg-primary" 
                    : "text-white hover:text-white/80 after:bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-base font-medium transition-all duration-300 ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              }`}>
                More
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border shadow-lg z-50">
                {moreNavLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <a
                      href={link.href}
                      className="w-full cursor-pointer text-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+35316289022" 
              className={`flex items-center gap-2 text-base transition-all duration-300 ${
                isScrolled 
                  ? "text-foreground hover:text-cta" 
                  : "text-white hover:text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+353 1 628 9022</span>
            </a>
            <Button asChild>
              <a href="#contact">Book a Visit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border/50 animate-fade-in bg-background">
            <div className="flex flex-col gap-2">
              {allNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors px-4 py-3 rounded-lg hover:bg-pale-sage min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50">
                <a 
                  href="tel:+35316289022" 
                  className="flex items-center gap-2 text-foreground mb-4 px-4 py-3 min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  +353 1 628 9022
                </a>
                <div className="px-4">
                  <Button className="w-full" asChild>
                    <a href="#contact">Book a Visit</a>
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
