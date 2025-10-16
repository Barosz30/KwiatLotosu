import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-primary/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="inline-block mb-4">
            <div className="w-24 h-24 mx-auto rounded-full gradient-hero shadow-glow flex items-center justify-center">
              <span className="text-4xl">🪷</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground drop-shadow-lg">
            Kwiat Lotosu
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 font-light max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:px-8 shadow-glow">
            Salon Masażu
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl p-3 shadow-glow">
            Znajdź harmonię ciała i ducha w spokojnej atmosferze naszego salonu
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="gradient-hero text-white shadow-glow hover:shadow-soft transition-smooth px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Umów wizytę
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-card transition-smooth px-8 py-6 text-lg"
              onClick={() => {
                const offerSection = document.getElementById("oferta");
                offerSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Zobacz ofertę
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
