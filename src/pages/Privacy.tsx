import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Moyglare Nursing Home</title>
        <meta 
          name="description" 
          content="Privacy Policy for Moyglare Nursing Home. Learn how we collect, use, and protect your personal data in accordance with GDPR." 
        />
        <link rel="canonical" href="https://www.moyglarenursinghome.ie/privacy" />
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

            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-muted-foreground text-sm mb-8">
                Last updated: December 2024
              </p>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  1. Introduction
                </h2>
                <p>
                  Moyglare Nursing Home is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and the Data Protection Acts 1988-2018.
                </p>
                <p>
                  Moyglare Nursing Home, located at Moyglare Road, Maynooth, Co. Kildare, is the data controller responsible for your personal data.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  2. Information We Collect
                </h2>
                <p>We may collect and process the following types of personal data:</p>
                <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
                  Resident Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, date of birth, PPS number, and contact details</li>
                  <li>Medical history, health records, and care assessments</li>
                  <li>Details of next of kin and emergency contacts</li>
                  <li>Financial information for billing purposes</li>
                  <li>Photographs and images (with consent)</li>
                </ul>

                <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
                  Visitor and Enquiry Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact details</li>
                  <li>Enquiry details and correspondence</li>
                  <li>Visitor sign-in records</li>
                </ul>

                <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3">
                  Website Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact form submissions</li>
                  <li>Technical data such as IP address and browser type</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  3. How We Use Your Information
                </h2>
                <p>We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Providing care services to residents</li>
                  <li>Communicating with residents, families, and healthcare professionals</li>
                  <li>Meeting our legal and regulatory obligations (including HIQA requirements)</li>
                  <li>Processing admissions and managing resident accounts</li>
                  <li>Responding to enquiries and scheduling visits</li>
                  <li>Improving our services and facilities</li>
                  <li>Ensuring the safety and security of all persons on our premises</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p>We process your personal data under the following legal bases:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Contract:</strong> To fulfil our contractual obligations in providing care services</li>
                  <li><strong>Legal obligation:</strong> To comply with healthcare regulations and legal requirements</li>
                  <li><strong>Vital interests:</strong> To protect the health and safety of residents</li>
                  <li><strong>Legitimate interests:</strong> To operate and improve our nursing home services</li>
                  <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  5. Sharing Your Information
                </h2>
                <p>We may share your personal data with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Healthcare professionals involved in your care (GPs, consultants, therapists)</li>
                  <li>Regulatory bodies such as HIQA and the HSE</li>
                  <li>Family members and nominated contacts (with appropriate consent)</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="mt-4">
                  We do not sell or share your personal data with third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Secure storage of physical and electronic records</li>
                  <li>Access controls and staff training on data protection</li>
                  <li>Regular review of security practices</li>
                  <li>Confidentiality agreements with staff and service providers</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  7. Data Retention
                </h2>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Medical and care records are retained in accordance with HSE guidelines and healthcare regulations.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  8. Your Rights
                </h2>
                <p>Under GDPR, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Right of access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                  <li><strong>Right to restrict processing:</strong> Request limitation of how we use your data</li>
                  <li><strong>Right to data portability:</strong> Request transfer of your data</li>
                  <li><strong>Right to object:</strong> Object to certain types of processing</li>
                  <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  9. CCTV
                </h2>
                <p>
                  CCTV cameras are in operation at Moyglare Nursing Home for the safety and security of residents, staff, and visitors. CCTV footage is retained for a limited period and accessed only by authorised personnel. Signage is displayed to inform individuals of CCTV operation.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  10. Cookies
                </h2>
                <p>
                  Our website may use cookies to improve your browsing experience. Cookies are small files stored on your device. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  11. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  12. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4">
                  <p className="font-semibold">Moyglare Nursing Home</p>
                  <p>Moyglare Road, Maynooth, Co. Kildare, W23 HF82</p>
                  <p>Phone: +353 1 628 9022</p>
                  <p>Email: info@moyglare.ie</p>
                </div>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the Data Protection Commission at{" "}
                  <a 
                    href="https://www.dataprotection.ie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.dataprotection.ie
                  </a>
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

export default Privacy;
