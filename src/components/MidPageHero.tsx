import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import loungeWarm from '@/assets/lounge-warm.png';

const MidPageHero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-section md:py-section-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={loungeWarm}
          alt="Comfortable lounge area at Moyglare Nursing Home"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.9)] via-[hsl(var(--primary)/0.75)] to-[hsl(var(--primary)/0.5)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            A place filled with warmth and care
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
            At Moyglare, every resident is treated like family. Our dedicated team creates 
            a nurturing environment where your loved ones can thrive, feel safe, and enjoy 
            life to the fullest.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Schedule a Visit</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="tel:+35316289022">Call Us Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageHero;
