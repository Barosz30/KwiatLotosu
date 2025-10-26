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
      // Zmieniono transition-smooth na transition, bg-card/95 backdrop-blur-md shadow-soft na konkretne wartości
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md" // Użyto bg-white zamiast bg-card, shadow-md zamiast shadow-soft
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            {/* Zmieniono gradient-hero na konkretny gradient, transition-smooth na transition, group-hover:shadow-glow na group-hover:shadow-lg */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center transition group-hover:shadow-lg">
              <span className="text-xl">🪷</span>
            </div>
            {/* Zmieniono text-foreground na text-gray-900 */}
            <span className="font-display font-bold text-xl text-gray-900">
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
                // Zmieniono text-foreground/70 hover:text-primary transition-smooth na konkretne kolory i transition
                className="text-gray-600 hover:text-purple-700 transition font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button
              // Zmieniono gradient-hero na konkretny gradient, shadow-soft na shadow-md, hover:shadow-glow na hover:shadow-lg, transition-smooth na transition
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => scrollToSection("kontakt")}
            >
              Umów wizytę
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              {/* Zmieniono bg-foreground na bg-gray-900, transition-smooth na transition */}
              <span
                className={`block h-0.5 bg-gray-900 transition ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[0.5rem]" : "" // Poprawiono translate-y
                }`}
              />
              {/* Zmieniono bg-foreground na bg-gray-900, transition-smooth na transition */}
              <span
                className={`block h-0.5 bg-gray-900 transition ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              {/* Zmieniono bg-foreground na bg-gray-900, transition-smooth na transition */}
              <span
                className={`block h-0.5 bg-gray-900 transition ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[0.5rem]" : "" // Poprawiono translate-y
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          // Zmieniono border-border/50 na border-gray-200, bg-card/80 na bg-white/80, shadow-glow na shadow-xl
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                // Zmieniono text-foreground/70 hover:text-primary transition-smooth na konkretne kolory i transition
                className="block w-full text-left py-2 text-gray-600 hover:text-purple-700 transition font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              // Zmieniono gradient-hero na konkretny gradient
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white"
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
