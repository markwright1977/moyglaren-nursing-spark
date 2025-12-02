import { Star, Quote, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "They care for Mum like she's family. The kindness and attention to detail from every staff member gives us complete peace of mind.",
    author: "Mary K.",
    relation: "Daughter of Resident",
    rating: 5,
    highlighted: true,
  },
  {
    quote: "Finding Moyglare was such a relief for our family. Dad is happy, well-cared for, and the staff keep us informed about everything.",
    author: "John O'B.",
    relation: "Son of Resident",
    rating: 5,
  },
  {
    quote: "The gardens are beautiful and the food is wonderful. I feel truly at home here, and the nurses are so kind and attentive.",
    author: "Margaret D.",
    relation: "Resident",
    rating: 5,
  },
  {
    quote: "We visited many nursing homes before choosing Moyglare. The warmth we felt from the moment we walked in made the decision easy.",
    author: "Siobhan M.",
    relation: "Daughter of Resident",
    rating: 5,
  },
  {
    quote: "The team goes above and beyond every single day. Mum's face lights up when she sees her favourite carers each morning.",
    author: "Patrick C.",
    relation: "Son of Resident",
    rating: 5,
  },
  {
    quote: "After two years here, I can honestly say this is my home. The staff remember the little things that make each day special.",
    author: "Bridget F.",
    relation: "Resident",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlightedTestimonial = testimonials.find(t => t.highlighted);
  const regularTestimonials = testimonials.filter(t => !t.highlighted);

  return (
    <section id="testimonials" className="py-section md:py-section-lg bg-[hsl(var(--off-white))]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            What Families <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real words from families who trust Moyglare with their loved ones.
          </p>
        </motion.div>

        {/* Highlighted Testimonial */}
        {highlightedTestimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative p-8 md:p-10 rounded-lg bg-[hsl(var(--pale-sage))] shadow-card border border-primary/10">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-cta/20" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(highlightedTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                  ))}
                </div>

                <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 italic text-center max-w-2xl mx-auto">
                  "{highlightedTestimonial.quote}"
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-cta" />
                  <p className="font-display font-semibold text-primary text-lg">
                    {highlightedTestimonial.author}
                  </p>
                </div>
                <p className="text-sm text-center mt-1 text-muted-foreground">
                  {highlightedTestimonial.relation}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {regularTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3, ease: "easeOut" }}
              className="group relative p-8 rounded-lg bg-card border border-border/30 shadow-soft card-hover"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cta/15" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <p className="font-display font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Stories Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-14"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center text-cta hover:text-cta-hover transition-colors duration-200 font-medium link-underline"
          >
            Read More Stories
            <span className="ml-1">→</span>
          </a>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center bg-card rounded-lg p-10 shadow-soft border border-border/30"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
            We'd love to care for your loved one too.
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Every family deserves peace of mind. Let us show you how Moyglare can become a second home.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Arrange a Visit</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
