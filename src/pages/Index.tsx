import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import MidPageHero from "@/components/MidPageHero";
import Community from "@/components/Community";
import Team from "@/components/Team";
import Accreditations from "@/components/Accreditations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NursingHome",
  "name": "Moyglare Nursing Home",
  "description": "Moyglare Nursing Home provides compassionate, person-centred residential care in Maynooth, County Kildare. HIQA registered with 24/7 nursing care.",
  "url": "https://www.moyglarenursinghome.ie",
  "telephone": "+353 1 628 9022",
  "email": "info@moyglarenursinghome.ie",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moyglare Road",
    "addressLocality": "Maynooth",
    "addressRegion": "County Kildare",
    "addressCountry": "IE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.3815",
    "longitude": "-6.5935"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "24/7 Nursing Care" },
    { "@type": "LocationFeatureSpecification", "name": "Free WiFi" },
    { "@type": "LocationFeatureSpecification", "name": "Gardens" },
    { "@type": "LocationFeatureSpecification", "name": "Chapel Services" }
  ],
  "numberOfBeds": 53,
  "medicalSpecialty": ["Dementia Care", "Respite Care", "Long-term Residential Care"]
};

const Index = () => {
  const location = useLocation();

  // Handle hash scrolling when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Moyglare Nursing Home | Quality Care in Maynooth, Co. Kildare</title>
        <meta 
          name="description" 
          content="Moyglare Nursing Home provides compassionate, person-centred residential care in Maynooth, County Kildare. HIQA registered with 24/7 nursing care. Schedule a visit today." 
        />
        <meta name="keywords" content="nursing home, Maynooth, Kildare, elderly care, residential care, dementia care, respite care, Ireland" />
        <link rel="canonical" href="https://www.moyglarenursinghome.ie" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Amenities />
          <MidPageHero />
          <Community />
          <Team />
          <Accreditations />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default Index;