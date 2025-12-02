import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Team member data - replace placeholder images with real photos
const teamMembers = [
  {
    name: 'Dr. Sarah Murphy',
    role: 'Director of Nursing',
    quote: 'Every resident deserves to feel valued and cared for every single day.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    alt: 'Dr. Sarah Murphy, Director of Nursing at Moyglare, smiling warmly',
  },
  {
    name: 'Mary O\'Brien',
    role: 'Clinical Nurse Manager',
    quote: 'I love making every resident\'s day brighter with a kind word and genuine care.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    alt: 'Mary O\'Brien, Clinical Nurse Manager, in her nursing uniform',
  },
  {
    name: 'Patrick Kelly',
    role: 'Senior Care Assistant',
    quote: 'Building meaningful connections with residents is the most rewarding part of my work.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face',
    alt: 'Patrick Kelly, Senior Care Assistant, providing compassionate care',
  },
  {
    name: 'Aoife Brennan',
    role: 'Activities Coordinator',
    quote: 'Seeing our residents laugh and engage fills my heart with joy every day.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
    alt: 'Aoife Brennan, Activities Coordinator, organizing engaging activities',
  },
];

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-20 md:py-28 bg-[hsl(var(--off-white))]">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Our People</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading mt-2 mb-3">
            Meet Our Caring Team
          </h2>
          {/* Accent line */}
          <div className="w-16 h-0.5 bg-cta mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dedicated professionals who treat every resident like family.
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative mb-5 mx-auto w-32 h-32">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover rounded-xl shadow-card transition-all duration-300 group-hover:brightness-105 group-hover:scale-105"
                />
              </div>
              
              {/* Name */}
              <h3 className="font-display font-semibold text-heading text-lg mb-1">
                {member.name}
              </h3>
              
              {/* Role */}
              <p className="text-muted-foreground text-sm mb-4">
                {member.role}
              </p>
              
              {/* Quote - fades in on hover */}
              <p className="text-foreground/80 text-sm italic leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Group Photo / Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=500&fit=crop"
            alt="The caring team at Moyglare Nursing Home gathered together, showing their warm and welcoming spirit"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--sage)/0.8)] via-[hsl(var(--sage)/0.3)] to-transparent flex items-end justify-center pb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 text-primary ml-1" />
              </div>
              <p className="text-white font-display text-xl md:text-2xl">Our team in action</p>
              <p className="text-white/80 text-sm mt-1">Watch how we make every day special</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Quote Banner */}
        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-[hsl(var(--pale-sage))] rounded-2xl p-8 md:p-10 max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0">
              <Heart className="w-7 h-7 text-cta" />
            </div>
            <div>
              <p className="text-foreground text-lg md:text-xl italic leading-relaxed mb-3">
                "The staff at Moyglare truly care — they make every day special. My mother has never been happier."
              </p>
              <p className="text-muted-foreground font-medium">
                — Daughter of Resident
              </p>
            </div>
          </div>
        </motion.div>

        {/* Join Our Family CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Passionate about elderly care? We'd love to hear from you.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-cta hover:bg-cta-hover text-white rounded-full px-8"
          >
            <a href="mailto:careers@moyglarenursinghome.ie">
              Join Our Family
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;