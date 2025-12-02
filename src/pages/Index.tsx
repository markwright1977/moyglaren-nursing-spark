import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Amenities />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
