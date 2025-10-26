import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: "🌸",
    title: "Masaż Relaksacyjny",
    description:
      "Głęboka relaksacja całego ciała, redukcja stresu i napięcia mięśniowego. Idealne rozwiązanie po ciężkim dniu.",
    duration: "60 min",
    benefits: ["Redukcja stresu", "Poprawa krążenia", "Głęboki relaks"],
  },
  {
    icon: "💆",
    title: "Masaż Klasyczny",
    description:
      "Tradycyjny masaż leczniczy wspomagający regenerację mięśni i poprawiający ich elastyczność.",
    duration: "60 min",
    benefits: ["Łagodzenie bólu", "Poprawa elastyczności", "Regeneracja"],
  },
  {
    icon: "🪷",
    title: "Masaż Tajski",
    description:
      "Technika łącząca akupresurę, stretching i elementy jogi. Przywraca równowagę energetyczną organizmu.",
    duration: "90 min",
    benefits: [
      "Równowaga energii",
      "Zwiększona elastyczność",
      "Głęboki relaks",
    ],
  },
  {
    icon: "🎋",
    title: "Masaż Bańką Chińską",
    description:
      "Terapia z użyciem baniek próżniowych, która pobudza krążenie i wspomaga oczyszczanie organizmu.",
    duration: "45 min",
    benefits: ["Detoksykacja", "Poprawa krążenia", "Łagodzenie bólu"],
  },
  {
    icon: "🌿",
    title: "Masaż Aromaterapeutyczny",
    description:
      "Masaż z użyciem naturalnych olejków eterycznych, harmonizujący ciało i umysł.",
    duration: "75 min",
    benefits: ["Aromą relaks", "Harmonia umysłu", "Nawilżenie skóry"],
  },
  {
    icon: "🔥",
    title: "Masaż Gorącymi Kamieniami",
    description:
      "Terapia z wykorzystaniem nagrzanych kamieni bazaltowych, która rozluźnia napięcie i uspokaja.",
    duration: "80 min",
    benefits: [
      "Głębokie rozluźnienie",
      "Ciepło terapeutyczne",
      "Spokój wewnętrzny",
    ],
  },
];

const Services = () => {
  return (
    // Zmieniono bg-secondary/30 na bg-amber-50
    <section id="oferta" className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Zmieniono bg-accent/10 text-accent na konkretne kolory */}
          <div className="inline-block px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium">
            Oferta
          </div>
          {/* Zmieniono text-foreground na text-gray-900 */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Nasze Masaże
          </h2>
          {/* Zmieniono text-muted-foreground na text-gray-600 */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Wybierz masaż dopasowany do Twoich potrzeb i zanurz się w świecie
            relaksu
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              // Zmieniono gradient-card na bg-white, border-border/50 na border-gray-200, shadow-soft na shadow-md, hover:shadow-glow na hover:shadow-lg, transition-smooth na transition
              className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition group"
            >
              <CardHeader>
                {/* Zmieniono transition-smooth na transition */}
                <div className="text-5xl mb-4 transition group-hover:scale-110">
                  {service.icon}
                </div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <CardTitle className="text-2xl font-display text-gray-900">
                  {service.title}
                </CardTitle>
                {/* Zmieniono text-accent na text-purple-600 */}
                <CardDescription className="text-purple-600 font-medium">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Zmieniono text-muted-foreground na text-gray-600 */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                {/* Zmieniono border-border/50 na border-gray-200 */}
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  {/* Zmieniono text-foreground na text-gray-900 */}
                  <div className="text-sm font-medium text-gray-900">
                    Korzyści:
                  </div>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      // Zmieniono text-muted-foreground na text-gray-600
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        {/* Zmieniono text-accent na text-purple-600 */}
                        <span className="text-purple-600">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          {/* Zmieniono gradient-card na bg-white, shadow-soft na shadow-md */}
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-md">
            {/* Zmieniono text-foreground na text-gray-900 */}
            <p className="text-lg text-gray-900 mb-4">
              <span className="font-semibold">
                Nie jesteś pewna/pewien który masaż wybrać?
              </span>
            </p>
            {/* Zmieniono text-muted-foreground na text-gray-600 */}
            <p className="text-gray-600">
              Skontaktuj się ze mną, a pomogę dobrać odpowiednią terapię
              dostosowaną do Twoich potrzeb i oczekiwań.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
