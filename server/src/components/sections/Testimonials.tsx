import { Section } from "@/components/ui/section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James Thompson",
    role: "Relocating from UK",
    quote: "Home Scout NZ was a lifesaver. Moving from London, we had no idea where to start. They found us a beautiful home in a suburb we hadn't even considered, and handled everything while we were still overseas.",
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    quote: "The depth of market analysis provided was impressive. They identified an up-and-coming area that has already seen significant growth. Highly recommended for serious investors.",
  },
  {
    name: "Elena Rodriguez",
    role: "First Home Buyer",
    quote: "As first home buyers, we were overwhelmed by auctions. Having Home Scout represent us gave us confidence and they secured our home below our budget limit!",
  }
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-primary text-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Client Success Stories</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          We take pride in helping our clients find their perfect place in New Zealand.
        </p>
      </div>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem key={index}>
              <div className="p-6 md:p-12 text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-3xl font-light italic mb-8 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-white/70">{t.role}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        <CarouselNext className="hidden md:flex bg-white/10 border-white/20 hover:bg-white/20 text-white" />
      </Carousel>
    </Section>
  );
}
