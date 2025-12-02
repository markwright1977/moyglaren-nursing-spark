import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Award, Users } from 'lucide-react';

const teamHighlights = [
  {
    icon: Users,
    title: 'Dedicated Staff',
    description: 'Our team of over 50 caring professionals includes registered nurses, healthcare assistants, and support staff.',
  },
  {
    icon: Award,
    title: 'Qualified & Trained',
    description: 'All staff undergo continuous professional development and specialized training in elderly care.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We treat every resident with dignity, respect, and genuine warmth, as if they were our own family.',
  },
];

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Our People</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
            Meet Our Caring Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Behind every moment of care is a dedicated team committed to making Moyglare feel like home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
            Join Our Family
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            We're always looking for compassionate individuals to join our team. 
            If you're passionate about elderly care, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@moyglarenursinghome.ie"
            className="inline-block bg-primary-foreground text-primary font-medium px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors"
          >
            View Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
