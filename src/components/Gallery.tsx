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
  { src: entranceHall, alt: 'Welcoming entrance hall', title: 'Entrance Hall' },
  { src: lounge, alt: 'Comfortable lounge area', title: 'Main Lounge' },
  { src: bedroom, alt: 'Private bedroom', title: 'Private Rooms' },
  { src: dining, alt: 'Elegant dining room', title: 'Dining Room' },
  { src: garden, alt: 'Beautiful garden patio', title: 'Garden Patio' },
  { src: gardenSeating, alt: 'Peaceful garden seating', title: 'Garden Seating' },
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
    <section id="gallery" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Facility</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
            A Place of Comfort
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour through our beautifully maintained spaces designed for comfort and wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-primary-foreground font-display text-lg">{image.title}</p>
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
              className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-4 text-primary-foreground text-center">
              <p className="font-display text-xl">{images[selectedIndex].title}</p>
              <p className="text-sm opacity-70">{selectedIndex + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
