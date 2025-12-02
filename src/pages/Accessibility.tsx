import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Eye, Ear, Hand, Monitor, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Accessibility = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement | Moyglare Nursing Home</title>
        <meta 
          name="description" 
          content="Accessibility Statement for Moyglare Nursing Home. Learn about our commitment to making our website accessible to everyone." 
        />
        <link rel="canonical" href="https://www.moyglarenursinghome.ie/accessibility" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto max-w-4xl px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Accessibility Statement
            </h1>
            <p className="text-muted-foreground text-sm mb-10">
              Last updated: December 2024
            </p>

            {/* Introduction */}
            <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 mb-10">
              <p className="text-foreground/90 leading-relaxed text-lg">
                Moyglare Nursing Home is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to ensure we provide equal access to all users.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground/80">
              {/* Our Commitment */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Our Commitment
                </h2>
                <p>
                  We believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of ability.
                </p>
                <p>
                  To fulfil this commitment, we aim to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
                </p>
              </section>

              {/* Accessibility Features */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                  Accessibility Features
                </h2>
                <p className="mb-6">
                  Our website includes the following accessibility features:
                </p>
                
                <div className="grid gap-6">
                  {/* Visual */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="flex items-start gap-4 mb-3">
                      <Eye className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Visual Accessibility
                      </h3>
                    </div>
                    <ul className="text-foreground/70 ml-10 space-y-2 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Clear, readable fonts with appropriate sizing (minimum 17-18px for body text)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Strong colour contrast between text and backgrounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Alternative text for all meaningful images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Resizable text without loss of functionality</span>
                      </li>
                    </ul>
                  </div>

                  {/* Navigation */}
                  <div className="bg-secondary/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <Hand className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Navigation & Interaction
                      </h3>
                    </div>
                    <ul className="text-foreground/70 ml-10 space-y-2 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Keyboard navigation support throughout the site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Clear focus indicators for interactive elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Consistent navigation structure across all pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Touch-friendly buttons and links with adequate sizing</span>
                      </li>
                    </ul>
                  </div>

                  {/* Screen Readers */}
                  <div className="bg-off-white/50 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <Ear className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Screen Reader Compatibility
                      </h3>
                    </div>
                    <ul className="text-foreground/70 ml-10 space-y-2 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Semantic HTML structure for proper content hierarchy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>ARIA labels where appropriate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Descriptive link text</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Form labels associated with input fields</span>
                      </li>
                    </ul>
                  </div>

                  {/* Responsive Design */}
                  <div className="bg-secondary/30 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <Monitor className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Responsive Design
                      </h3>
                    </div>
                    <ul className="text-foreground/70 ml-10 space-y-2 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Mobile-friendly layout that adapts to different screen sizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Content remains accessible when zoomed up to 200%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>No horizontal scrolling required on standard screen sizes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Browser Tips */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Tips for Improving Your Experience
                </h2>
                <p className="mb-4">
                  You can improve your browsing experience using the following browser features:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>Zoom:</strong> Use Ctrl/Cmd + Plus (+) to increase text size, Ctrl/Cmd + Minus (-) to decrease</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>High Contrast:</strong> Enable high contrast mode in your operating system settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>Screen Readers:</strong> Our site is compatible with popular screen readers like JAWS, NVDA, and VoiceOver</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>Keyboard Navigation:</strong> Use Tab to navigate between links and buttons, Enter to activate</span>
                  </li>
                </ul>
              </section>

              {/* Ongoing Efforts */}
              <section className="mb-10 bg-secondary/20 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Ongoing Efforts
                </h2>
                <p>
                  We view accessibility as an ongoing effort and are continually working to improve the accessibility of our website. We regularly:
                </p>
                <ul className="space-y-2 mt-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>Review our website for accessibility issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>Train our staff on accessibility best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>Incorporate accessibility into our design and development process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>Welcome and respond to accessibility feedback</span>
                  </li>
                </ul>
              </section>

              {/* Physical Accessibility */}
              <section className="mb-10 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Physical Accessibility at Our Facility
                </h2>
                <p>
                  Moyglare Nursing Home is designed to be accessible to visitors and residents with mobility needs. Our facility includes:
                </p>
                <ul className="space-y-2 mt-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Step-free access throughout the building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Wheelchair-accessible facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Accessible parking spaces near the entrance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Wide corridors and doorways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>Accessible bathrooms</span>
                  </li>
                </ul>
              </section>

              {/* Feedback */}
              <section className="mb-10 bg-secondary/30 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Feedback & Contact
                </h2>
                <p>
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please let us know:
                </p>
                <div className="bg-background p-5 rounded-xl mt-4">
                  <p className="font-semibold text-foreground">Moyglare Nursing Home</p>
                  <p className="text-foreground/70">Moyglare Road, Maynooth, Co. Kildare, W23 HF82</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+35316289022" className="text-primary hover:underline">+353 1 628 9022</a>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:info@moyglare.ie" className="text-primary hover:underline">info@moyglare.ie</a>
                  </div>
                </div>
                <p className="mt-4 text-foreground/70">
                  We aim to respond to accessibility feedback within 5 working days and will work with you to resolve any issues.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Accessibility;