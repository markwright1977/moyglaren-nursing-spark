import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import entranceImage from "@/assets/entrance-large.jpg";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-[hsl(var(--pale-sage))]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mt-2 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're exploring care options or planning a visit, our friendly team is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Warm Intro */}
            <div className="prose prose-lg">
              <p className="text-foreground leading-relaxed text-lg">
                We understand that choosing a nursing home is one of the most important decisions 
                you'll make for your family. Our doors are always open, and we'd be delighted 
                to show you around and answer any questions you may have.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={entranceImage} 
                alt="The welcoming entrance of Moyglare Nursing Home" 
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Moyglare Road, Maynooth,<br />
                    Co. Kildare, W23 HF82
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+35316289022" className="text-muted-foreground hover:text-primary transition-colors">
                    +353 1 628 9022
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@moyglarenursinghome.ie" className="text-muted-foreground hover:text-primary transition-colors">
                    info@moyglarenursinghome.ie
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visiting Hours</h3>
                  <p className="text-muted-foreground">
                    Daily: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Call Button */}
            <div className="lg:hidden">
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <a href="tel:+35316289022" className="flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.7695736!2d-6.5987!3d53.3842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48677b5c1f6ef72f%3A0x!2sMoyglare%20Road%2C%20Maynooth%2C%20Co.%20Kildare!5e0!3m2!1sen!2sie!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moyglare Nursing Home Location"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-elevated">
              <h3 className="font-display text-2xl text-primary mb-2">
                Request a Visit
              </h3>
              <p className="text-muted-foreground mb-8">
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
                      name="firstName"
                      aria-label="Your first name"
                      className="w-full px-4 py-3 min-h-[44px] rounded-lg border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                      name="lastName"
                      aria-label="Your last name"
                      className="w-full px-4 py-3 min-h-[44px] rounded-lg border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                    name="email"
                    aria-label="Your email address"
                    className="w-full px-4 py-3 min-h-[44px] rounded-lg border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
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
                    name="phone"
                    aria-label="Your phone number"
                    className="w-full px-4 py-3 min-h-[44px] rounded-lg border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="+353 1 234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    aria-label="Your message"
                    className="w-full px-4 py-3 min-h-[120px] rounded-lg border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold py-3 min-h-[48px]"
                >
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll reply within one working day. Your enquiry is confidential.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/80 italic">
            "You're welcome to visit anytime — come see why so many families choose Moyglare."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
