import AnimatedSection from './AnimatedSection';
import ceilecarelogo from '@/assets/ceilecare-logo.png';
import nhilogo from '@/assets/nhi-logo.png';
import hiqalogo from '@/assets/hiqa-logo.png';

const accreditations = [
  {
    name: 'HIQA',
    logo: hiqalogo,
    description: 'Registered and regulated by the Health Information and Quality Authority (HIQA).',
    alt: 'HIQA - Health Information and Quality Authority logo',
  },
  {
    name: 'CéileCare',
    logo: ceilecarelogo,
    description: 'Part of the CéileCare Group — delivering family traditions in modern care.',
    alt: 'CéileCare logo',
  },
  {
    name: 'Nursing Homes Ireland',
    logo: nhilogo,
    description: 'Member of Nursing Homes Ireland (NHI), representing excellence in private and voluntary nursing home care.',
    alt: 'Nursing Homes Ireland logo',
  },
];

const Accreditations = () => {
  return (
    <section className="py-16 md:py-20 bg-cream/50" aria-labelledby="accreditations-heading">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 
              id="accreditations-heading" 
              className="font-display text-2xl md:text-3xl lg:text-4xl text-heading mb-4"
            >
              Our Accreditations & Memberships
            </h2>
            <p className="text-foreground/80 text-body-lg">
              We're proud to be recognised by organisations that uphold the highest standards in care and quality of life.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {accreditations.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center text-center max-w-sm"
              >
                <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft transition-all duration-300 group-hover:shadow-elevated group-hover:scale-[1.02] mb-4">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed px-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Accreditations;
