import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Complaints = () => {
  const handleSubmitConcern = () => {
    const subject = encodeURIComponent("Concern/Complaint - Moyglare Nursing Home");
    const body = encodeURIComponent(
      "Dear Moyglare Nursing Home Team,\n\nI would like to raise a concern or complaint regarding:\n\n[Please describe your concern here]\n\nContact Details:\nName: \nPhone: \nEmail: \n\nThank you."
    );
    window.location.href = `mailto:info@moyglare.ie?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Complaints Procedure | Moyglare Nursing Home</title>
        <meta 
          name="description" 
          content="Complaints Procedure for Moyglare Nursing Home. Learn how to make a complaint or raise a concern about our services. We value your feedback." 
        />
        <link rel="canonical" href="https://www.moyglarenursinghome.ie/complaints" />
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
              Complaints Procedure
            </h1>
            <p className="text-lg text-muted-foreground mb-10">Moyglare Nursing Home</p>

            {/* Introduction */}
            <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 mb-10">
              <p className="text-foreground/90 leading-relaxed text-lg">
                At Moyglare Nursing Home, we are committed to providing the highest standards of care and respect for every resident. We understand that sometimes you, your family, or your representative may have concerns or wish to make a complaint. We value all feedback and treat every complaint as an opportunity to review and improve our service.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground/80">
              {/* Section 1 */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  1. How to Make a Complaint
                </h2>
                <p className="mb-4">
                  You can make a complaint or raise a concern in any of the following ways:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>In person:</strong> speak to any staff member or to the Person in Charge (PIC).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>By phone:</strong> <a href="tel:+35316289022" className="text-primary hover:underline">+353 1 628 9022</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>By email:</strong> <a href="mailto:info@moyglare.ie" className="text-primary hover:underline">info@moyglare.ie</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>In writing:</strong>
                      <address className="not-italic mt-2 text-foreground/70">
                        The Person in Charge<br />
                        Moyglare Nursing Home<br />
                        Moyglare Road, Maynooth<br />
                        Co. Kildare, W23 HF82
                      </address>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-foreground/70 italic">
                  A family member, friend, or advocate may also make the complaint on your behalf.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10 bg-secondary/20 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  2. What Happens Next
                </h2>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>Your complaint will be <strong>acknowledged within 5 working days</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>It will be fully <strong>investigated by the Designated Complaints Person</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>We aim to <strong>resolve all complaints within 30 working days</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>If the process takes longer, we will <strong>update you regularly</strong> on progress and expected completion.</span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  3. If You're Not Satisfied
                </h2>
                <p className="mb-6">
                  If you are unhappy with how your complaint has been handled or the outcome, you may ask for a review by the <strong>Registered Provider, Moyglare Nursing Home Ltd</strong>.
                </p>
                <p className="mb-4">You may also contact:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Ombudsman */}
                  <div className="bg-background rounded-xl p-5 border border-border/50">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      Office of the Ombudsman
                    </h3>
                    <address className="not-italic text-sm text-foreground/70 space-y-1">
                      <p>6 Earlsfort Terrace</p>
                      <p>Dublin 2, D02 W773</p>
                      <p className="pt-2">
                        <strong>Tel:</strong>{" "}
                        <a href="tel:016395600" className="text-primary hover:underline">01 639 5600</a>
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:complaints@ombudsman.ie" className="text-primary hover:underline">complaints@ombudsman.ie</a>
                      </p>
                    </address>
                    <a 
                      href="https://www.ombudsman.ie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm hover:underline mt-3"
                    >
                      www.ombudsman.ie
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* HIQA */}
                  <div className="bg-background rounded-xl p-5 border border-border/50">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      HIQA
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">Health Information and Quality Authority</p>
                    <address className="not-italic text-sm text-foreground/70 space-y-1">
                      <p>George's Court, George's Lane</p>
                      <p>Smithfield, Dublin 7</p>
                      <p className="pt-2">
                        <strong>Tel:</strong>{" "}
                        <a href="tel:0212409300" className="text-primary hover:underline">021 240 9300</a>
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:concerns@hiqa.ie" className="text-primary hover:underline">concerns@hiqa.ie</a>
                      </p>
                    </address>
                    <a 
                      href="https://www.hiqa.ie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm hover:underline mt-3"
                    >
                      www.hiqa.ie
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-10 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  4. Our Commitment
                </h2>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>All complaints are treated <strong>confidentially and respectfully</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>Making a complaint will <strong>not affect the care or treatment</strong> you or your loved one receive.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>Feedback helps us <strong>improve and enhance our service</strong> for every resident.</span>
                  </li>
                </ul>
              </section>

              {/* Section 5 - Key Contacts */}
              <section className="mb-10 bg-secondary/30 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  5. Key Contacts
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Designated Complaints Person (DCP):</span>
                    <span className="text-foreground/80">Anne Corcoran</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Deputy DCP:</span>
                    <span className="text-foreground/80">Damian Doyle</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Registered Provider:</span>
                    <span className="text-foreground/80">Moyglare Nursing Home Ltd</span>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl p-8 text-center">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Submit a Concern or Complaint
                </h2>
                <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
                  We're here to listen. If you have any concerns or feedback, please don't hesitate to reach out to us.
                </p>
                <Button onClick={handleSubmitConcern} size="lg">
                  Contact Us
                </Button>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Complaints;