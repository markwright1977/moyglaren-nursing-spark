import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The care my mother receives at Moyglare is exceptional. The staff treat her like family, and we always feel welcome when we visit.",
    author: "Mary K.",
    relation: "Daughter of Resident",
    rating: 5,
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
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[hsl(var(--off-white))]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            What Families 
            <span className="text-primary"> Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the families and residents who call Moyglare home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-soft"
            >
              <Quote className="w-10 h-10 text-sage-light mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
