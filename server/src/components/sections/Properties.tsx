import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin, ArrowRight } from "lucide-react";

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
    <Section id="properties" className="bg-[#f8fafc]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-4 text-accent border-accent/20 bg-accent/5 px-3 py-1 text-xs uppercase font-bold tracking-wider">
            Exclusive Listings
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Properties</h2>
          <p className="text-lg text-muted-foreground">
            A selection of hand-picked listings and recently scouted homes across New Zealand.
          </p>
        </div>
        <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View all listings <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 bg-white group rounded-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/95 backdrop-blur-sm text-primary border-none shadow-md font-bold px-3 py-1.5">
                    {property.status}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-1.5 text-accent font-bold text-xs uppercase tracking-wide mb-2">
                  <MapPin size={14} />
                  {property.location}
                </div>
                <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">{property.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-primary mb-6 tracking-tight">{property.price}</div>
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1 items-center md:items-start">
                    <div className="flex items-center gap-2 text-primary">
                      <Bed size={18} className="text-accent" />
                      <span className="font-bold">{property.beds}</span>
                    </div>
                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Beds</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center md:items-start">
                    <div className="flex items-center gap-2 text-primary">
                      <Bath size={18} className="text-accent" />
                      <span className="font-bold">{property.baths}</span>
                    </div>
                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Baths</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center md:items-start">
                    <div className="flex items-center gap-2 text-primary">
                      <Square size={18} className="text-accent" />
                      <span className="font-bold">{property.sqm}</span>
                    </div>
                    <span className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">Area</span>
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
