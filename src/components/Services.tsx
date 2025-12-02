import { Heart, Stethoscope, Brain, Pill, Activity, Users } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Long-term Residential Care",
    description: "Comprehensive 24/7 nursing care for residents requiring ongoing support in a comfortable, home-like environment.",
  },
  {
    icon: Stethoscope,
    title: "Medical & Nursing Care",
    description: "Qualified nursing staff available round-the-clock, with regular GP visits and specialist referrals as needed.",
  },
  {
    icon: Brain,
    title: "Dementia Care",
    description: "Specialised, compassionate care for residents living with dementia, in a safe and supportive setting.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Professional medication administration and monitoring by our trained nursing team.",
  },
  {
    icon: Activity,
    title: "Rehabilitation Support",
    description: "Physiotherapy and occupational therapy services to help maintain mobility and independence.",
  },
  {
    icon: Users,
    title: "Respite Care",
    description: "Short-term stays available to give family carers a well-deserved break while ensuring quality care for your loved one.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Care for 
            <span className="text-primary"> Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of nursing and care services designed to support 
            residents at every stage of their journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card gradient-card border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
