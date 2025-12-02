import { Heart, Stethoscope, Brain, Pill, Activity, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-section md:py-section-lg bg-[hsl(var(--pale-sage))]">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Comprehensive Care for 
            <span className="text-primary"> Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We offer a full range of nursing and care services designed to support 
            residents at every stage of their journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-lg bg-card shadow-soft border border-border/30 card-hover"
            >
              <div className="w-14 h-14 rounded-lg bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
