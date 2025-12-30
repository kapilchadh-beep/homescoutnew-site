import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://homescoutnz.co.nz/img/carousel-1.jpeg"
          alt="HomeScout NZ - Find Your Perfect Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-sm font-medium mb-6 text-white">
            Welcome to HomeScout NZ
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-balance">
            Find Your Perfect Home in New Zealand
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-lg md:text-xl font-light">
            <span className="flex items-center gap-2">Property Search</span>
            <span className="w-1 h-1 bg-white rounded-full self-center hidden md:block"></span>
            <span className="flex items-center gap-2">Home Scouting</span>
            <span className="w-1 h-1 bg-white rounded-full self-center hidden md:block"></span>
            <span className="flex items-center gap-2">Market Insights</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="properties" smooth={true} duration={500} offset={-80}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none w-full sm:w-auto h-14 px-8 text-lg">
                View Properties
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm w-full sm:w-auto h-14 px-8 text-lg">
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white/70 animate-bounce"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
