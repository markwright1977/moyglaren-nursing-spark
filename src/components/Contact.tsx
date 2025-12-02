import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-32 bg-[hsl(var(--pale-sage))]">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading mt-2 mb-4">
            We'd Love to <span className="text-primary">Meet You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We'd love to hear from you — whether you're exploring care options or arranging a visit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-elevated order-2 lg:order-1"
          >
            <h3 className="font-display text-2xl text-heading mb-2">
              Request a Visit
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill out the form below and we'll be in touch to arrange a time that suits you.
            </p>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Murphy"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="+353 1 234 5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell us about your enquiry..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-cta hover:bg-cta-hover text-white">
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We respond within one working day — your enquiry is confidential.
              </p>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm">
                  Moyglare Road, Maynooth,<br />
                  Co. Kildare, W23 HF82
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+35316289022" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +353 1 628 9022
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:info@moyglarenursinghome.ie" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
                  info@moyglarenursinghome.ie
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Visiting Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Daily: 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.7695736!2d-6.5987!3d53.3842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48677b5c1f6ef72f%3A0x!2sMoyglare%20Road%2C%20Maynooth%2C%20Co.%20Kildare!5e0!3m2!1sen!2sie!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moyglare Nursing Home Location"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;