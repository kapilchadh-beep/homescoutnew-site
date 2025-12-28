import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/modern_new_zealand_home_exterior_with_nature.png";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern New Zealand Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            New Zealand's Premier Property Scouts
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Find Your Dream Home <br className="hidden md:block" />
            <span className="text-secondary">Without the Stress</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            We specialize in uncovering hidden gems and off-market opportunities. Let us handle the search while you enjoy the journey home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="services" smooth={true} duration={500} offset={-80}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none w-full sm:w-auto h-14 px-8 text-lg">
                Explore Services
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm w-full sm:w-auto h-14 px-8 text-lg">
                Book Consultation
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
