import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import loungeCozy from '@/assets/lounge-cozy.jpg';

const MidPageHero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={loungeCozy}
          alt="Comfortable lounge area at Moyglare Nursing Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--sage)/0.85)] via-[hsl(var(--sage)/0.7)] to-[hsl(var(--sage)/0.5)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-cta hover:bg-cta-hover text-white font-semibold rounded-lg transition-colors"
            >
              Schedule a Visit
            </a>
            <a 
              href="tel:+35316289022" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageHero;