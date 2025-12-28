import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
            <Home size={24} />
          </div>
          <span className={`text-xl font-display font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            Home Scout NZ
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`text-sm font-medium cursor-pointer hover:text-accent transition-colors ${
                scrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <Button className={scrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"}>
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={scrolled ? "text-foreground" : "text-white"} /> : <Menu className={scrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-accent cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
