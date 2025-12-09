import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Leaf } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What types of care do you provide?',
    answer: 'We provide comprehensive care including long-term residential care, respite care, convalescent care, and specialized dementia care. Our qualified nursing staff are available 24/7 to meet the individual needs of each resident.',
  },
  {
    question: 'How do I arrange a visit to Moyglare Nursing Home?',
    answer: 'We welcome visitors and prospective residents to tour our facility. Simply call us at +353 1 628 9022 or fill out the contact form on our website to schedule a convenient time. We recommend booking in advance to ensure a staff member can give you a personalized tour.',
  },
  {
    question: 'Is Moyglare Nursing Home HIQA registered?',
    answer: 'Yes, Moyglare Nursing Home is fully registered and regularly inspected by HIQA (Health Information and Quality Authority). We maintain the highest standards of care and comply with all regulatory requirements.',
  },
  {
    question: 'What is included in the fees?',
    answer: 'Our fees include accommodation in a private or shared room, all meals and snacks, 24-hour nursing care, laundry services, and access to all communal facilities. Some additional services may incur extra charges.',
  },
  {
    question: 'Can residents bring personal belongings?',
    answer: 'Absolutely! We encourage residents to personalize their rooms with photographs, small furniture pieces, and personal items. This helps create a homely atmosphere and aids in the transition to their new home.',
  },
  {
    question: 'What are the visiting hours?',
    answer: 'We have flexible visiting hours to accommodate families. Generally, visitors are welcome from 10am to 9pm daily. We encourage families to visit regularly and participate in activities with their loved ones.',
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-section md:py-section-lg bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Questions</span>
            <Leaf className="w-5 h-5 text-primary transform scale-x-[-1]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of the questions families often ask when exploring care options.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/30 rounded-lg px-6 shadow-soft data-[state=open]:border-l-4 data-[state=open]:border-l-primary hover:border-l-4 hover:border-l-primary/50 transition-all duration-200"
              >
                <AccordionTrigger 
                  className="text-left font-display text-lg text-primary hover:text-primary/80 transition-colors py-5 [&>svg]:text-primary"
                  aria-label={`Toggle answer for: ${faq.question}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed pb-5 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
