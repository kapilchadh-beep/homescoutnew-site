import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Image - Refined and moved to the side for better text legibility */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
        <img
          src="https://homescoutnz.co.nz/img/carousel-1.jpeg"
          alt="Modern Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 lg:via-white/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-block py-1 px-3 rounded-md bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
            New Zealand's Trusted Specialists
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-6 text-black tracking-tight">
            Find Your <span className="text-accent">Perfect Home</span> <br className="hidden md:block" /> in New Zealand
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-medium">
            Stop searching and start living. We combine local expertise with deep scouting to find the home that's just right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="properties" smooth={true} duration={500} offset={-80}>
              <Button size="lg" className="bg-black hover:bg-black/90 text-white h-14 px-10 text-lg rounded-full font-bold">
                View Properties
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button size="lg" variant="outline" className="bg-white hover:bg-slate-50 text-black border-black h-14 px-10 text-lg rounded-full font-bold">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-black/30"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
