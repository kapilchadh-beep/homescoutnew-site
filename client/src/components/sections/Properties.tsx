import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin } from "lucide-react";

// This array can be easily updated in one go to "upload" new properties
const properties = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Remuera, Auckland",
    price: "$1,850,000",
    beds: 4,
    baths: 2,
    sqm: "210m²",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
    status: "Off-Market"
  },
  {
    id: 2,
    title: "Architectural Gem",
    location: "Ponsonby, Auckland",
    price: "$2,100,000",
    beds: 3,
    baths: 2,
    sqm: "185m²",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1000&auto=format&fit=crop",
    status: "Recently Sold"
  },
  {
    id: 3,
    title: "Seaside Retreat",
    location: "Mission Bay, Auckland",
    price: "$2,450,000",
    beds: 5,
    baths: 3,
    sqm: "280m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    status: "New Listing"
  }
];

export function Properties() {
  return (
    <Section id="properties" className="bg-secondary/20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
        <p className="text-lg text-muted-foreground">
          A selection of exclusive listings and successfully scouted homes across New Zealand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-white border-none shadow-sm">
                  {property.status}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1">
                  <MapPin size={14} />
                  {property.location}
                </div>
                <CardTitle className="text-xl">{property.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-4">{property.price}</div>
                <div className="flex items-center justify-between py-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bed size={18} className="text-accent" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bath size={18} className="text-accent" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Square size={18} className="text-accent" />
                    <span>{property.sqm}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
