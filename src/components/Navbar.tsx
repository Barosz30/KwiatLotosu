"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Start", id: "top" },
    { label: "O mnie", id: "o-mnie" },
    { label: "Oferta", id: "oferta" },
    { label: "Galeria", id: "galeria" },
    { label: "Kontakt", id: "kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center transition-smooth group-hover:shadow-glow">
              <span className="text-xl">🪷</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Kwiat Lotosu
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-foreground/70 hover:text-primary transition-smooth font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth cursor-pointer"
              onClick={() => scrollToSection("kontakt")}
            >
              Umów wizytę
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-foreground transition-smooth ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-smooth ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-smooth ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50 bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-glow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-foreground/70 hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full gradient-hero text-white"
              onClick={() => scrollToSection("kontakt")}
            >
              Umów wizytę
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
