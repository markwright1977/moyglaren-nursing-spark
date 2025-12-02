import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Users } from "lucide-react";
import communityImage from "@/assets/community-ty-students.jpg";

const Community = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="community" className="py-section md:py-section-lg bg-[hsl(var(--off-white))]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Community</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
            Part of the <span className="text-primary">Local Community</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We're proud to welcome visitors and build meaningful connections with our neighbours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-xl shadow-elevated overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={communityImage}
                alt="TY students from local school visiting Moyglare Nursing Home for community involvement activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Community Involvement</p>
                  <p className="text-sm text-muted-foreground">TY Student Visit</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-lg">
                Our TY Community Involvement class were back in Moyglare Nursing Home. They had a lovely time 
                playing boardgames, chatting and doing mindfulness colouring with the residents. There was even 
                a little sing song when we were there too. A great way to end the module with this fantastic 
                group of students and wonderful ambassadors for our school.
              </p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">Building intergenerational connections</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
