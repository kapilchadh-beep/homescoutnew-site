import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f8fafc]">
      {/* Background with subtle pattern and soft overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://homescoutnz.co.nz/img/carousel-1.jpeg"
          alt="HomeScout NZ - Find Your Perfect Home"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-left max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-accent/10 border border-accent/20 text-sm font-semibold mb-6 text-accent">
            <CheckCircle2 size={16} />
            New Zealand's Trusted Specialists
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] mb-6 text-primary tracking-tight">
            Find Your <span className="text-accent">Perfect Home</span> <br className="hidden lg:block" /> in New Zealand
          </h1>
          
          <div className="flex flex-col gap-4 mb-10 text-lg md:text-xl text-muted-foreground font-medium">
            <p className="max-w-xl leading-relaxed">
              Stop searching and start living. We combine local expertise with deep scouting to find the home that's just right for you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="properties" smooth={true} duration={500} offset={-80}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 h-14 px-10 text-lg rounded-xl">
                View Properties
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <Button size="lg" variant="outline" className="bg-white hover:bg-slate-50 text-primary border-slate-200 shadow-sm h-14 px-10 text-lg rounded-xl">
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-primary/40"
      >
        <ArrowDown size={28} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
