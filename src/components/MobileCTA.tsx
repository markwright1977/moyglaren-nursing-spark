import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 shadow-elevated"
        >
          <div className="flex gap-3">
            <a href="tel:+35316289022" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
            </a>
            <a href="#contact" className="flex-1">
              <Button className="w-full gap-2">
                <Calendar className="w-4 h-4" />
                Book Visit
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCTA;
