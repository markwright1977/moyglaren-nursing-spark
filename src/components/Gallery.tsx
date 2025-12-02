import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import entranceHall from '@/assets/entrance-hall-new.jpg';
import lounge from '@/assets/lounge-main.jpg';
import bedroom from '@/assets/bedroom.jpg';
import dining from '@/assets/dining-room.jpg';
import garden from '@/assets/garden-patio-new.jpg';
import gardenSeating from '@/assets/garden-seating-new.jpg';

const images = [
  { src: entranceHall, alt: 'Welcoming entrance hall with comfortable seating and natural light', title: 'Entrance Hall', caption: 'A warm welcome awaits you' },
  { src: lounge, alt: 'Comfortable lounge area with cozy furniture for residents to relax', title: 'Main Lounge', caption: 'Where friendships flourish' },
  { src: bedroom, alt: 'Private bedroom with ensuite facilities and personal touches', title: 'Private Rooms', caption: 'Your own peaceful sanctuary' },
  { src: dining, alt: 'Elegant dining room where residents enjoy nutritious meals together', title: 'Dining Room', caption: 'Meals made with care' },
  { src: garden, alt: 'Beautiful garden patio with flowers and seating areas', title: 'Garden Patio', caption: 'Nature at your doorstep' },
  { src: gardenSeating, alt: 'Peaceful garden seating area surrounded by greenery', title: 'Garden Seating', caption: 'Tranquil outdoor spaces' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-section md:py-section-lg bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Facility</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
            A Place of <span className="text-primary">Comfort</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Take a virtual tour through our beautifully maintained spaces designed for comfort and wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-soft"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              {/* Warm beige overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(50_20%_30%/0.7)] via-[hsl(50_20%_50%/0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display text-lg drop-shadow-md">{image.title}</p>
                  <p className="text-white/90 text-sm drop-shadow-md">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white hover:text-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-4 text-white text-center">
              <p className="font-display text-xl">{images[selectedIndex].title}</p>
              <p className="text-sm opacity-80">{images[selectedIndex].caption}</p>
              <p className="text-sm opacity-60 mt-1">{selectedIndex + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
