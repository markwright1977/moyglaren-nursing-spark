import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Users, Music } from "lucide-react";
import communityImage from "@/assets/community-ty-students.jpg";
import musicImage from "@/assets/community-music-students.jpg";

const communityPosts = [
  {
    image: communityImage,
    alt: "TY students from local school visiting Moyglare Nursing Home for community involvement activities",
    title: "TY Student Visit",
    icon: Users,
    text: "Our TY Community Involvement class were back in Moyglare Nursing Home. They had a lovely time playing boardgames, chatting and doing mindfulness colouring with the residents. There was even a little sing song when we were there too. A great way to end the module with this fantastic group of students and wonderful ambassadors for our school.",
    tagline: "Building intergenerational connections"
  },
  {
    image: musicImage,
    alt: "MPPS trad group performing traditional Irish music at Moyglare Nursing Home",
    title: "Traditional Music Visit",
    icon: Music,
    text: "The MPPS trad group visited Moyglare Nursing Home today.",
    tagline: "Bringing music and joy to our residents"
  }
];

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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {communityPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <div className="bg-card rounded-xl shadow-elevated overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <post.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Community Involvement</p>
                      <p className="text-sm text-muted-foreground">{post.title}</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed flex-1">
                    {post.text}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{post.tagline}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
