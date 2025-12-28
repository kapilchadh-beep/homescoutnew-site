import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Section id="contact" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Find Your Home</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Ready to start your property journey? Get in touch with us today for a confidential discussion about your needs.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email Us</h4>
                <a href="mailto:hello@homescoutnz.co.nz" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@homescoutnz.co.nz
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <a href="tel:+6491234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +64 9 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Office</h4>
                <p className="text-muted-foreground">
                  Auckland, New Zealand<br />
                  Serving nationwide
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-lg border-border/50">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+64..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about what you're looking for..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg">Send Message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
