import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "🌸",
    title: "Masaż Relaksacyjny",
    description: "Głęboka relaksacja całego ciała, redukcja stresu i napięcia mięśniowego. Idealne rozwiązanie po ciężkim dniu.",
    duration: "60 min",
    benefits: ["Redukcja stresu", "Poprawa krążenia", "Głęboki relaks"]
  },
  {
    icon: "💆",
    title: "Masaż Klasyczny",
    description: "Tradycyjny masaż leczniczy wspomagający regenerację mięśni i poprawiający ich elastyczność.",
    duration: "60 min",
    benefits: ["Łagodzenie bólu", "Poprawa elastyczności", "Regeneracja"]
  },
  {
    icon: "🪷",
    title: "Masaż Tajski",
    description: "Technika łącząca akupresurę, stretching i elementy jogi. Przywraca równowagę energetyczną organizmu.",
    duration: "90 min",
    benefits: ["Równowaga energii", "Zwiększona elastyczność", "Głęboki relaks"]
  },
  {
    icon: "🎋",
    title: "Masaż Bańką Chińską",
    description: "Terapia z użyciem baniek próżniowych, która pobudza krążenie i wspomaga oczyszczanie organizmu.",
    duration: "45 min",
    benefits: ["Detoksykacja", "Poprawa krążenia", "Łagodzenie bólu"]
  },
  {
    icon: "🌿",
    title: "Masaż Aromaterapeutyczny",
    description: "Masaż z użyciem naturalnych olejków eterycznych, harmonizujący ciało i umysł.",
    duration: "75 min",
    benefits: ["Aromą relaks", "Harmonia umysłu", "Nawilżenie skóry"]
  },
  {
    icon: "🔥",
    title: "Masaż Gorącymi Kamieniami",
    description: "Terapia z wykorzystaniem nagrzanych kamieni bazaltowych, która rozluźnia napięcie i uspokaja.",
    duration: "80 min",
    benefits: ["Głębokie rozluźnienie", "Ciepło terapeutyczne", "Spokój wewnętrzny"]
  }
];

const Services = () => {
  return (
    <section id="oferta" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
            Oferta
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Nasze Masaże
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Wybierz masaż dopasowany do Twoich potrzeb i zanurz się w świecie relaksu
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 shadow-soft hover:shadow-glow transition-smooth group"
            >
              <CardHeader>
                <div className="text-5xl mb-4 transition-smooth group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-display text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-accent font-medium">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Benefits */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  <div className="text-sm font-medium text-foreground">Korzyści:</div>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-accent">✓</span>
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
          <div className="gradient-card rounded-2xl p-8 max-w-3xl mx-auto shadow-soft">
            <p className="text-lg text-foreground mb-4">
              <span className="font-semibold">Nie jesteś pewna/pewien który masaż wybrać?</span>
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się ze mną, a pomogę dobrać odpowiednią terapię dostosowaną do Twoich potrzeb i oczekiwań.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
