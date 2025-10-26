"use client";

import { Button } from "@/components/ui/button";

export function HeroButtons() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
      <Button
        size="lg"
        className="gradient-hero text-white shadow-glow hover:shadow-soft transition-smooth px-8 py-6 text-lg cursor-pointer"
        onClick={() => scrollToSection("kontakt")}
      >
        Umów wizytę
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="bg-white border-primary/30 hover:bg-card transition-smooth px-8 py-6 text-lg cursor-pointer"
        onClick={() => scrollToSection("oferta")}
      >
        Zobacz ofertę
      </Button>
    </div>
  );
}
