import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-building.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    "HIQA registered and regularly inspected",
    "Experienced and compassionate nursing staff",
    "Person-centred care approach",
    "Beautiful countryside setting",
    "Family-friendly visiting policy",
    "Nutritious home-cooked meals",
  ];

  return (
    <section id="about" className="py-section md:py-section-lg bg-[hsl(var(--off-white))]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-elevated image-hover">
              <img
                src={aboutImage}
                alt="Moyglare Nursing Home building exterior with ivy-covered entrance and gardens"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-lg shadow-card max-w-xs hidden md:block">
              <p className="font-display text-3xl font-bold text-primary mb-1">HIQA</p>
              <p className="text-sm text-muted-foreground">Registered & Inspected</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
              About Moyglare
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Compassionate Care in a 
              <span className="text-primary"> Warm Setting</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the heart of Maynooth, County Kildare, Moyglare Nursing Home 
              has been providing exceptional residential care for over three decades. 
              Our dedicated team treats every resident as family, ensuring dignity, 
              comfort, and quality of life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Under the leadership of our experienced management team, we maintain the 
              highest standards of care while creating a true home environment where 
              residents can thrive and families feel welcome.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
