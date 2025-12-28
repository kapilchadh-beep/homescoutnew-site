import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            We Are Your Eyes and Ears on the Ground
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            At Home Scout NZ, we understand that finding the perfect property takes more than just scrolling through listings. It requires local insight, market expertise, and a dedicated partner who understands your unique vision.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you are relocating from overseas, investing in the market, or looking for your forever home, we provide a bespoke service that removes the noise and delivers results.
          </p>

          <div className="space-y-4">
            {[
              "Access to off-market properties not listed publicly",
              "Unbiased advice and independent property assessments",
              "Expert negotiation strategies to secure the best price",
              "Complete guidance from initial brief to key handover"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=2000&auto=format&fit=crop" 
              alt="Home Scout NZ Consultant" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border hidden md:block">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                10+
              </div>
              <div>
                <p className="font-bold text-foreground">Years Experience</p>
                <p className="text-sm text-muted-foreground">In NZ Property Market</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">"We don't just find houses; we discover homes."</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
