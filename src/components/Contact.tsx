import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import entranceImage from "@/assets/entrance-large.jpg";
import { useState } from "react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Visit Request from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;
    
    window.location.href = `mailto:info@moyglare.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-section md:py-section-lg bg-[hsl(var(--pale-sage))]">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you're exploring care options or planning a visit, our friendly team is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Warm Intro */}
            <div>
              <p className="text-foreground leading-relaxed text-lg">
                We understand that choosing a nursing home is one of the most important decisions 
                you'll make for your family. Our doors are always open, and we'd be delighted 
                to show you around and answer any questions you may have.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-elevated">
              <img 
                src={entranceImage} 
                alt="The welcoming entrance of Moyglare Nursing Home with fountain and gardens" 
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <a 
                    href="https://www.google.com/maps/place/MOYGLARE+NURSING+HOME/@53.3909083,-6.5975496,17z/data=!3m1!4b1!4m6!3m5!1s0x48676fe5c2bfe8a1:0x5956f5617982a8c8!8m2!3d53.3909083!4d-6.5975496!16s%2Fg%2F1hf12ynpl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cta transition-colors"
                  >
                    Moyglare Road, Maynooth,<br />
                    Co. Kildare, W23 HF82
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+35316289022" className="text-muted-foreground hover:text-cta transition-colors">
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
                  <a href="mailto:info@moyglare.ie" className="text-muted-foreground hover:text-cta transition-colors">
                    info@moyglare.ie
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
                variant="primary"
                className="w-full"
              >
                <a href="tel:+35316289022" className="flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-soft">
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
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-card rounded-lg p-8 md:p-10 shadow-elevated">
              <h3 className="font-display text-2xl text-primary mb-2">
                Request a Visit
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll be in touch to arrange a time that suits you.
              </p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
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
                      value={formData.lastName}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    aria-label="Your message"
                    className="w-full px-4 py-3 min-h-[120px] rounded-lg border border-border bg-[hsl(var(--off-white))] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
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
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/80 italic font-display">
            "You're welcome to visit anytime — come see why so many families choose Moyglare."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
