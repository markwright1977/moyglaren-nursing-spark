import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Cookie, Shield, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Moyglare Nursing Home</title>
        <meta 
          name="description" 
          content="Cookie Policy for Moyglare Nursing Home. Learn about the cookies we use on our website and how to manage your preferences." 
        />
        <link rel="canonical" href="https://www.moyglarenursinghome.ie/cookies" />
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
              Cookie Policy
            </h1>
            <p className="text-muted-foreground text-sm mb-10">
              Last updated: December 2024
            </p>

            {/* Introduction */}
            <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 mb-10">
              <p className="text-foreground/90 leading-relaxed text-lg">
                This Cookie Policy explains how Moyglare Nursing Home uses cookies and similar technologies when you visit our website. We are committed to being transparent about the data we collect and how we use it.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground/80">
              {/* What are Cookies */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Cookie className="w-8 h-8 text-primary flex-shrink-0" />
                  <h2 className="font-display text-2xl font-semibold text-primary m-0">
                    What Are Cookies?
                  </h2>
                </div>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                  Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
                </p>
              </section>

              {/* Types of Cookies */}
              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                  Types of Cookies We Use
                </h2>
                
                <div className="grid gap-6">
                  {/* Essential Cookies */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="flex items-start gap-4 mb-3">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Essential Cookies
                      </h3>
                    </div>
                    <p className="text-foreground/70 ml-10">
                      These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                    </p>
                  </div>

                  {/* Preference Cookies */}
                  <div className="bg-secondary/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <Settings className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Preference Cookies
                      </h3>
                    </div>
                    <p className="text-foreground/70 ml-10">
                      These cookies allow the website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personalised features.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-off-white/50 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <BarChart3 className="w-6 h-6 text-primary flex-shrink-0" />
                      <h3 className="font-display text-lg font-semibold text-foreground m-0">
                        Analytics Cookies
                      </h3>
                    </div>
                    <p className="text-foreground/70 ml-10">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Managing Cookies */}
              <section className="mb-10 bg-secondary/30 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p>
                  Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience.
                </p>
                <p className="mt-4">
                  To manage cookies, you can:
                </p>
                <ul className="space-y-2 mt-4 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Adjust your browser settings to refuse cookies or alert you when cookies are being sent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Delete cookies that have already been set in your browser</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">•</span>
                    <span>Set your browser to block third-party cookies</span>
                  </li>
                </ul>
              </section>

              {/* Browser Settings */}
              <section className="mb-10 bg-off-white/50 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  How to Control Cookies in Your Browser
                </h2>
                <p className="mb-4">
                  You can find information on how to manage cookies in the most popular browsers at the following links:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              {/* Updates */}
              <section className="mb-10 bg-secondary/20 rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the "Last updated" date at the top of this page.
                </p>
              </section>

              {/* Contact */}
              <section className="mb-10 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-background p-5 rounded-xl mt-4">
                  <p className="font-semibold text-foreground">Moyglare Nursing Home</p>
                  <p className="text-foreground/70">Moyglare Road, Maynooth, Co. Kildare, W23 HF82</p>
                  <p className="text-foreground/70">Phone: <a href="tel:+35316289022" className="text-primary hover:underline">+353 1 628 9022</a></p>
                  <p className="text-foreground/70">Email: <a href="mailto:info@moyglarenursinghome.ie" className="text-primary hover:underline">info@moyglarenursinghome.ie</a></p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cookies;