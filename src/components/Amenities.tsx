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
  return (
    <section id="amenities" className="py-20 md:py-32 bg-[hsl(var(--off-white))]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wide uppercase mb-4 block">
            Our Facilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comfort & Quality in 
            <span className="text-primary"> Every Detail</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our purpose-built facilities combine modern amenities with a warm, 
            homely atmosphere.
          </p>
        </div>

        {/* Amenities Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-card shadow-soft flex items-center justify-center">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{amenity.label}</span>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden shadow-card group aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-lg text-primary-foreground">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;