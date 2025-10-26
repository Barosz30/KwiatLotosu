import heroBackground from "@/assets/hero-background.jpg";
import { HeroButtons } from "@/components/ui/hero-buttons";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground.src})` }}
      >
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="w-24 h-24 mx-auto rounded-full gradient-hero shadow-glow flex items-center justify-center">
              <span className="text-4xl">🪷</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground text-black drop-shadow-lg">
            Kwiat Lotosu
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 text-black font-light max-w-2xl mx-auto">
            Salon Masażu
          </p>
          <p className="text-lg md:text-xl text-foreground/80 text-black max-w-2xl mx-auto">
            Znajdź harmonię ciała i ducha w spokojnej atmosferze naszego salonu
          </p>

          <HeroButtons />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-black flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-black rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
