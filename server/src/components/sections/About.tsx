import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <img src="https://homescoutnz.co.nz/img/HS_logo.jpg" alt="HomeScout NZ Logo" className="h-16 mb-4" />
            <h6 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">About HomeScout NZ</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Your Trusted Property Search Partner
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            HomeScout NZ is dedicated to helping you find your perfect home in New Zealand. We understand that finding the right property can be a daunting task, and we're here to make the process easier and more enjoyable.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our team of experienced professionals is passionate about property and committed to providing you with the best possible service. We combine local expertise with innovative technology to give you a competitive edge in the market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-8">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-primary mb-1">Personalized approach</h4>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-primary mb-1">Local market expertise</h4>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-primary mb-1">Innovative technology</h4>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://homescoutnz.co.nz/img/about_new.jpg" 
              alt="HomeScout NZ Partner" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
