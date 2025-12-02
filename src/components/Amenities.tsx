import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import entranceImage from "@/assets/entrance-building.jpg";
import entranceFlowersImage from "@/assets/entrance-flowers.jpg";
import entranceHallImage from "@/assets/entrance-hall-new.jpg";
import diningImage from "@/assets/dining-room.jpg";
import loungeMainImage from "@/assets/lounge-main.jpg";
import loungeCozyImage from "@/assets/lounge-cozy.jpg";
import gardenPatioImage from "@/assets/garden-patio-new.jpg";
import gardenSeatingImage from "@/assets/garden-seating-new.jpg";
import waterFeatureImage from "@/assets/water-feature.jpg";
import { Wifi, Tv, UtensilsCrossed, Flower2, Car, Church } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Tv, label: "TV Lounges" },
  { icon: UtensilsCrossed, label: "Home Cooking" },
  { icon: Flower2, label: "Gardens" },
  { icon: Car, label: "Parking" },
  { icon: Church, label: "Chapel Services" },
];

const galleryImages = [
  { src: entranceImage, alt: "Moyglare Nursing Home entrance with fountain", title: "Main Entrance" },
  { src: entranceFlowersImage, alt: "Entrance with beautiful flowers", title: "Building Exterior" },
  { src: diningImage, alt: "Elegant dining room", title: "Dining Room" },
  { src: loungeMainImage, alt: "Spacious main lounge", title: "Main Lounge" },
  { src: loungeCozyImage, alt: "Cozy residents lounge", title: "Residents Lounge" },
  { src: entranceHallImage, alt: "Welcoming entrance hall", title: "Entrance Hall" },
  { src: gardenPatioImage, alt: "Outdoor patio area", title: "Garden Patio" },
  { src: gardenSeatingImage, alt: "Garden seating area", title: "Garden Seating" },
  { src: waterFeatureImage, alt: "Garden water feature fountain", title: "Water Feature" },
];

const Amenities = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="amenities" className="py-section md:py-section-lg bg-[hsl(var(--off-white))]">
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
            Our Facilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Comfort & Quality in 
            <span className="text-primary"> Every Detail</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our purpose-built facilities combine modern amenities with a warm, 
            homely atmosphere.
          </p>
        </motion.div>

        {/* Amenities Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-card shadow-soft flex items-center justify-center transition-all duration-300 hover:shadow-card hover:scale-105">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">{amenity.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
              className="relative rounded-lg overflow-hidden shadow-soft group aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="font-display text-lg text-primary-foreground drop-shadow-md">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
