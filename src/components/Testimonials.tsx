import { Star, Quote, Heart } from "lucide-react";
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
  const highlightedTestimonial = testimonials.find(t => t.highlighted);
  const regularTestimonials = testimonials.filter(t => !t.highlighted);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[hsl(var(--off-white))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            What Families Say About Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real words from families who trust Moyglare with their loved ones.
          </p>
        </div>

        {/* Highlighted Testimonial */}
        {highlightedTestimonial && (
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative p-8 md:p-10 rounded-2xl bg-[hsl(var(--pale-sage))] shadow-lg border border-sage-light/20">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-terracotta/30" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(highlightedTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                  ))}
                </div>

                <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 italic text-center max-w-2xl mx-auto">
                  "{highlightedTestimonial.quote}"
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-terracotta" />
                  <p className="font-display font-semibold text-primary text-lg">
                    {highlightedTestimonial.author}
                  </p>
                </div>
                <p className="text-sm text-center mt-1" style={{ color: '#777777' }}>
                  {highlightedTestimonial.relation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Regular Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {regularTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[hsl(var(--pale-sage))]/50"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-terracotta/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic max-w-[350px]">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <p className="font-display font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm" style={{ color: '#777777' }}>
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Stories Link */}
        <div className="text-center mb-16">
          <a 
            href="#contact" 
            className="inline-flex items-center text-terracotta hover:underline transition-all duration-200 font-medium"
          >
            Read More Stories
            <span className="ml-1">→</span>
          </a>
        </div>

        {/* CTA Block */}
        <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-10 shadow-soft border border-border/30">
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
            We'd love to care for your loved one too.
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Every family deserves peace of mind. Let us show you how Moyglare can become a second home.
          </p>
          <Button 
            asChild
            className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200"
          >
            <a href="#contact">Arrange a Visit</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
