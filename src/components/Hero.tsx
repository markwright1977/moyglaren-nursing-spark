import { Button } from "@/components/ui/button";
import { Heart, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-entrance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Caring nurse with elderly residents at Moyglare Nursing Home"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content positioned on left with solid background support */}
      <div className="container mx-auto relative z-10 py-16 md:py-24">
        <div className="max-w-xl">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in-up opacity-0">
            Maynooth, County Kildare
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            A Place to Call
            <span className="block text-primary">Home</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
            Moyglare Nursing Home provides compassionate, person-centred care in a warm, 
            family atmosphere. Where every resident is cherished and respected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="primary" size="lg" asChild>
              <a href="#contact">Schedule a Visit</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 animate-fade-in-up opacity-0 animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">30+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Years of Care</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">53</p>
                <p className="text-xs md:text-sm text-muted-foreground">Resident Beds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-foreground">24/7</p>
                <p className="text-xs md:text-sm text-muted-foreground">Nursing Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
