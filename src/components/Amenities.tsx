import roomImage from "@/assets/room-comfort.jpg";
import gardenImage from "@/assets/garden.jpg";
import { Wifi, Tv, UtensilsCrossed, Flower2, Car, Church } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Tv, label: "TV Lounges" },
  { icon: UtensilsCrossed, label: "Home Cooking" },
  { icon: Flower2, label: "Gardens" },
  { icon: Car, label: "Parking" },
  { icon: Church, label: "Chapel Services" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 md:py-32 bg-secondary">
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img
              src={roomImage}
              alt="Comfortable private bedroom at Moyglare"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-2xl text-primary-foreground mb-2">
                Private Rooms
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                Comfortable, well-appointed private rooms with personal touches
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-card group">
            <img
              src={gardenImage}
              alt="Beautiful landscaped gardens"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-2xl text-primary-foreground mb-2">
                Landscaped Gardens
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                Beautiful gardens with scenic views of the Kildare countryside
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
