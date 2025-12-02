import { Check } from "lucide-react";
import entranceImage from "@/assets/moyglare-entrance.webp";

const About = () => {
  const highlights = [
    "HIQA registered and regularly inspected",
    "Experienced and compassionate nursing staff",
    "Person-centred care approach",
    "Beautiful countryside setting",
    "Family-friendly visiting policy",
    "Nutritious home-cooked meals",
  ];

  return (
    <section id="about" className="py-20 md:py-32 gradient-warm">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={entranceImage}
                alt="Moyglare Nursing Home building and grounds"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-xl shadow-card max-w-xs hidden md:block">
              <p className="font-display text-3xl font-bold text-primary mb-1">HIQA</p>
              <p className="text-sm text-muted-foreground">Registered & Inspected</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
              About Moyglare
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
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
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
