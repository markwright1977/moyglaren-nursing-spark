import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Phone, Mail, MapPin, ExternalLink, FileText, Users, Clock, Shield, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Complaints = () => {
  const handleSubmitConcern = () => {
    const subject = encodeURIComponent("Concern/Complaint - Moyglare Nursing Home");
    const body = encodeURIComponent(
      "Dear Moyglare Nursing Home Team,\n\nI would like to raise a concern or complaint regarding:\n\n[Please describe your concern here]\n\n1. What happened and when:\n2. Who was involved:\n3. My specific concerns:\n4. What I am hoping to achieve:\n\nContact Details:\nName: \nPhone: \nEmail: \nPreferred method of contact: \n\nThank you."
    );
    window.location.href = `mailto:christine@moyglarenursinghome.ie?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Complaints Policy & Procedure | Moyglare Nursing Home</title>
        <meta 
          name="description" 
          content="Complaints Policy and Procedure for Moyglare Nursing Home. Learn how to make a complaint or raise a concern about our services. We value your feedback and are committed to resolving complaints fairly and transparently." 
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
              Complaints Policy & Procedure
            </h1>
            <p className="text-lg text-muted-foreground mb-4">Moyglare Nursing Home</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                Reference: Schedule 5/20
              </span>
              <span>Effective: 29/9/24</span>
              <span>Review Date: 29/9/26</span>
            </div>

            <a 
              href="/documents/Complaints_Policy.docx" 
              download="Moyglare_Complaints_Policy.docx"
              className="inline-flex items-center gap-2 text-sm bg-secondary/50 hover:bg-secondary/80 text-foreground px-4 py-2 rounded-lg transition-colors mb-10"
            >
              <FileText className="w-4 h-4" />
              Download Full Policy Document
            </a>

            {/* Policy Statement */}
            <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 mb-10">
              <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6" />
                Our Policy
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Moyglare Nursing Home is committed to the implementation of a complaints management process that is <strong>fair, transparent, non-prejudiced, non-recriminatory and impartial</strong> to the Complainant and the subject of the complaint.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                We have a culture of openness and transparency that welcomes residents, their family members and visitors voicing complaints. Residents and their family members shall be made to feel confident that making a complaint will not jeopardise the quality of care provided to the resident in any way.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                All complaints or comments received are viewed as an opportunity to inform service provision and to continually improve the quality of care and service provided to our residents.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground/80">
              {/* Who Can Make a Complaint */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Who Can Make a Complaint
                </h2>
                <p className="mb-4">Complaints about Moyglare Nursing Home shall be considered from:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>The resident receiving the health care services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>A spouse, civil partner, cohabitant, close relative, or carer of the resident</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Any person who, by law or by appointment of a court, has the care of the affairs of the resident</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Any legal representative of the resident</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Any other person with the consent of the resident</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Family members or carers of deceased residents</span>
                  </li>
                </ul>
              </section>

              {/* How to Make a Complaint */}
              <section className="mb-10 bg-secondary/20 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  How to Make a Complaint
                </h2>
                <p className="mb-4">
                  Complaints may be made to any member of staff. You can raise a concern or complaint in any of the following ways:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>Verbally:</strong> Speak to any staff member, the Person in Charge, or directly to the Complaints Officer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>By phone:</strong> <a href="tel:+35316289022" className="text-primary hover:underline">+353 1 628 9022</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>By email:</strong> <a href="mailto:christine@moyglarenursinghome.ie" className="text-primary hover:underline">christine@moyglarenursinghome.ie</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>In writing:</strong>
                      <address className="not-italic mt-2 text-foreground/70">
                        Ms Christine Espinas, Complaints Officer<br />
                        Moyglare Nursing Home<br />
                        Moyglare Road, Maynooth<br />
                        Co. Kildare, W23 HF82
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span><strong>Feedback box:</strong> Available at reception</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">What to Include in Your Complaint:</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-foreground/80">
                    <li>What happened and when (relevant dates and times)</li>
                    <li>Who was involved</li>
                    <li>Your specific concerns, starting with the most important</li>
                    <li>What you are hoping to achieve (e.g., apology, explanation)</li>
                    <li>Any extra information or relevant documents</li>
                    <li>Your preferred method of communication</li>
                  </ol>
                </div>
              </section>

              {/* What Happens Next */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  What Happens Next
                </h2>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span><strong>Acknowledgement:</strong> Written complaints will be acknowledged within <strong>5 working days</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span><strong>Investigation:</strong> Your complaint will be fully investigated by the Complaints Officer (Ms Christine Espinas, CNM2).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span><strong>Resolution:</strong> We aim to resolve all complaints within <strong>30 working days</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span><strong>Written Response:</strong> You will receive a written response informing you whether your complaint has been upheld, the reasons for that decision, and any improvements recommended.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                    <span><strong>Updates:</strong> If the process takes longer than 30 days, we will update you every <strong>20 working days</strong> on progress and expected completion.</span>
                  </li>
                </ul>
              </section>

              {/* Review Process */}
              <section className="mb-10 bg-secondary/20 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  If You're Not Satisfied – Review Process
                </h2>
                <p className="mb-4">
                  If you are unhappy with the outcome of your complaint, you may request a <strong>review</strong> by the Review Officer (Ms Anne Corcoran, Person in Charge).
                </p>
                <ul className="space-y-2 list-none pl-0 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>The review will be completed within <strong>20 working days</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>The Review Officer will determine the appropriateness of the recommendations and may uphold, vary or make a new recommendation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <span>You will receive a written response informing you of the outcome of the review.</span>
                  </li>
                </ul>
                
                <p className="mb-4">You may also contact the following external bodies:</p>
                
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

              {/* Advocacy Services */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Advocacy Support
                </h2>
                <p className="mb-4">
                  We will support you to make a complaint. An independent advocate (Ms May Daly) is available to any resident who needs assistance in understanding the complaints procedures. The following advocacy services are also available:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-xl p-4 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">SAGE Advocacy</h3>
                    <p className="text-sm text-foreground/70">Support & Advocacy Service for Older People</p>
                    <p className="text-sm mt-2">
                      <strong>Tel:</strong>{" "}
                      <a href="tel:015367330" className="text-primary hover:underline">01 536 7330</a>
                      <span className="text-xs text-muted-foreground ml-1">(08:00-22:00)</span>
                    </p>
                    <p className="text-sm">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@sageadvocacy.ie" className="text-primary hover:underline">info@sageadvocacy.ie</a>
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">Patient Advocacy Service (PAS)</h3>
                    <p className="text-sm text-foreground/70">Independent patient advocacy</p>
                    <p className="text-sm mt-2">
                      <strong>Tel:</strong>{" "}
                      <a href="tel:0818293003" className="text-primary hover:underline">0818 293 003</a>
                    </p>
                    <a 
                      href="https://www.patientadvocacyservice.ie" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm hover:underline mt-2"
                    >
                      www.patientadvocacyservice.ie
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Our Commitment */}
              <section className="mb-10 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Our Commitment
                </h2>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>All complaints are treated <strong>confidentially and respectfully</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>Making a complaint will <strong>not adversely affect the care or treatment</strong> you or your loved one receive.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>The rights of both the Complainant and staff members are <strong>safeguarded</strong> to ensure a fair and impartial investigation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>You have access to <strong>records and information</strong> in relation to your complaint, subject to the law.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg">♥</span>
                    <span>Feedback helps us <strong>improve and enhance our service</strong> for every resident.</span>
                  </li>
                </ul>
              </section>

              {/* Key Contacts */}
              <section className="mb-10 bg-secondary/30 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Key Contacts
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Complaints Officer:</span>
                    <span className="text-foreground/80">Ms Christine Espinas (CNM2)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Review Officer / Person in Charge:</span>
                    <span className="text-foreground/80">Ms Anne Corcoran</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Registered Provider:</span>
                    <span className="text-foreground/80">Moyglare Nursing Home Ltd</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-foreground">Independent Advocate:</span>
                    <span className="text-foreground/80">Ms May Daly (contact details available at reception)</span>
                  </div>
                </div>
              </section>

              {/* Additional Information Accordion */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Additional Information
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="definitions" className="border border-border/50 rounded-xl mb-3 px-4">
                    <AccordionTrigger className="text-foreground hover:no-underline">
                      What is a Complaint?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <p className="mb-3">
                        A complaint is an expression of dissatisfaction, both verbal and/or written, with any aspect of a service. It may relate to an organisation's action or lack of action, or about the standard of service provided by or on behalf of the organisation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="excluded" className="border border-border/50 rounded-xl mb-3 px-4">
                    <AccordionTrigger className="text-foreground hover:no-underline">
                      What Complaints Cannot Be Accepted?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <p className="mb-3">Moyglare Nursing Home cannot accept complaints under the following categories:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>A matter that is or has been the subject of legal proceedings before a court or tribunal</li>
                        <li>A matter relating to the Social Welfare Acts</li>
                        <li>A matter that could prejudice an investigation by the Gardaí</li>
                        <li>A matter that has been brought before any other complaints procedure established under an enactment</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="local-resolution" className="border border-border/50 rounded-xl mb-3 px-4">
                    <AccordionTrigger className="text-foreground hover:no-underline">
                      Local Resolution of Complaints
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <p>
                        Where a minor verbal concern arises, staff will attempt to resolve the issue immediately and locally where possible. Where concerns are resolved at local level, the full formal complaints response does not need to be implemented unless you wish otherwise. All resolved complaints are still documented.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="data-protection" className="border border-border/50 rounded-xl mb-3 px-4">
                    <AccordionTrigger className="text-foreground hover:no-underline">
                      Confidentiality & Data Protection
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <p>
                        All complaints are documented and processed in accordance with the eight principles of data protection and GDPR (General Data Protection Regulation). Personal information shared during the complaints process is handled confidentially and in accordance with our data protection policy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="verbal" className="border border-border/50 rounded-xl px-4">
                    <AccordionTrigger className="text-foreground hover:no-underline">
                      Verbal vs Written Complaints
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      <p className="mb-3">
                        <strong>Verbal complaints:</strong> Usually managed at the first stage. Note that no formal acknowledgement or outcome can be provided to a verbal complaint if you do not provide contact details.
                      </p>
                      <p>
                        <strong>Written complaints:</strong> May be received in writing initially, or where a verbal complaint cannot be resolved satisfactorily. Complaints via email are treated as written complaints. Staff will provide assistance if you have difficulty putting a complaint in writing.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                  Contact Complaints Officer
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