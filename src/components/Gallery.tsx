import Image from "next/image"; // Użyj komponentu Image
import spaAtmosphere from "@/assets/spa-atmosphere.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Gallery = () => {
  const images = [
    {
      src: spaAtmosphere,
      alt: "Atmosfera spa - kamienie do masażu i lawenda",
      title: "Spokój i harmonia",
    },
    {
      src: massageTherapy,
      alt: "Profesjonalny masaż terapeutyczny",
      title: "Profesjonalna terapia",
    },
    {
      src: heroBackground,
      alt: "Wnętrze salonu Kwiat Lotosu",
      title: "Nasze wnętrze",
    },
  ];

  return (
    // Użyto bg-white zamiast braku tła lub innego
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Zmieniono bg-accent/10 text-accent na konkretne kolory */}
          <div className="inline-block px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium">
            Galeria
          </div>
          {/* Zmieniono text-foreground na text-gray-900 */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Atmosfera Salonu
          </h2>
          {/* Zmieniono text-muted-foreground na text-gray-600 */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Zobacz jak wygląda nasze miejsce pełne spokoju i harmonii
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              // Zmieniono shadow-soft na shadow-md, hover:shadow-glow na hover:shadow-xl, transition-smooth na transition
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Użyto komponentu Image */}
              <div className="relative w-full h-80">
                {" "}
                {/* Dodano kontener dla Image z fill */}
                <Image
                  src={image.src} // Przekazano obiekt obrazu
                  alt={image.alt}
                  fill // Użyto fill
                  className="object-cover transition group-hover:scale-110" // Zmieniono transition-smooth na transition
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Dodano sizes
                />
              </div>
              {/* Zmieniono from-primary/80 via-primary/20 na konkretne kolory */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/80 via-purple-700/20 to-transparent opacity-0 group-hover:opacity-100 transition">
                {" "}
                {/* Zmieniono transition-smooth na transition */}
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
          {/* Zmieniono text-accent i bg-accent/30 na konkretne kolory */}
          <div className="inline-flex items-center gap-4 text-purple-600">
            <div className="w-16 h-px bg-purple-600/30" />
            <span className="text-4xl">🪷</span>
            <div className="w-16 h-px bg-purple-600/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
