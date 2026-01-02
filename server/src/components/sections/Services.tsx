import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, TrendingUp, Home, Key, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Search,
    title: "Property Scouting",
    description: "We uncover hidden gems and off-market listings that match your specific criteria, saving you hours of search time."
  },
  {
    icon: MapPin,
    title: "Location Strategy",
    description: "Deep neighborhood analysis including school zones, future developments, and lifestyle amenities to ensure the perfect fit."
  },
  {
    icon: TrendingUp,
    title: "Investment Analysis",
    description: "Data-driven insights on capital growth potential and rental yields for savvy property investors."
  },
  {
    icon: ShieldCheck,
    title: "Due Diligence",
    description: "Coordination of building inspections, LIM reports, and legal checks to ensure your investment is sound and secure."
  },
  {
    icon: Key,
    title: "Auction Bidding",
    description: "Professional representation at auctions to remove emotion and secure your property at the best possible price."
  },
  {
    icon: Home,
    title: "Relocation Support",
    description: "Specialized assistance for overseas buyers or those moving regions, making your transition to New Zealand seamless."
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Property Services</h2>
        <p className="text-lg text-muted-foreground">
          From the initial search to the final signature, we provide end-to-end support tailored to your unique property journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
