import { Button } from "@/components/ui/button";
import { Heart, Users, Clock } from "lucide-react";
import heroImage from "@/assets/moyglare-hero.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moyglare Nursing Home building exterior with beautiful gardens"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 gradient-hero" /> */}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full text-foreground text-sm font-medium mb-6 animate-fade-in-up opacity-0">
            Maynooth, County Kildare
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            A Place to Call
            <span className="block text-primary">Home</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Moyglare Nursing Home provides compassionate, person-centred care in a warm, 
            family atmosphere. Where every resident is cherished and respected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Schedule a Visit</a>
            </Button>
            <Button variant="outline" size="lg" className="border-foreground/50 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in-up opacity-0 animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">30+</p>
                <p className="text-xs md:text-sm text-foreground/70">Years of Care</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">53</p>
                <p className="text-xs md:text-sm text-foreground/70">Resident Beds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">24/7</p>
                <p className="text-xs md:text-sm text-foreground/70">Nursing Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
