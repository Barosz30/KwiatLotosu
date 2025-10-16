import spaAtmosphere from "@/assets/spa-atmosphere.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Gallery = () => {
  const images = [
    {
      src: spaAtmosphere,
      alt: "Atmosfera spa - kamienie do masażu i lawenda",
      title: "Spokój i harmonia"
    },
    {
      src: massageTherapy,
      alt: "Profesjonalny masaż terapeutyczny",
      title: "Profesjonalna terapia"
    },
    {
      src: heroBackground,
      alt: "Wnętrze salonu Kwiat Lotosu",
      title: "Nasze wnętrze"
    }
  ];

  return (
    <section id="galeria" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
            Galeria
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Atmosfera Salonu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Zobacz jak wygląda nasze miejsce pełne spokoju i harmonii
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-smooth"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-display text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-accent">
            <div className="w-16 h-px bg-accent/30" />
            <span className="text-4xl">🪷</span>
            <div className="w-16 h-px bg-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
