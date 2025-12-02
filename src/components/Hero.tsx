import { Button } from "@/components/ui/button";
import { Heart, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-entrance.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image - no overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moyglare Nursing Home building exterior with beautiful gardens and fountain"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content with text shadows for accessibility - no backdrop */}
      <div className="container mx-auto relative z-10 py-16 md:py-24">
        <div className="max-w-2xl p-4 md:p-8">
          <span className="inline-block px-4 py-2 bg-white/90 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in-up opacity-0 shadow-md">
            Maynooth, County Kildare
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            A Place to Call
            <span className="block text-white">Home</span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-xl mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            Moyglare Nursing Home provides compassionate, person-centred care in a warm, 
            family atmosphere. Where every resident is cherished and respected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="primary" size="lg" asChild>
              <a href="#contact">Schedule a Visit</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/20 bg-white/10" 
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 animate-fade-in-up opacity-0 animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">30+</p>
                <p className="text-xs md:text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Years of Care</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">53</p>
                <p className="text-xs md:text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Resident Beds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-display font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">24/7</p>
                <p className="text-xs md:text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Nursing Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
