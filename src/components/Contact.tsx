"use client"; // <-- DODAJ TĘ LINIĘ NA SAMEJ GÓRZE

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
            Kontakt
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Umów Wizytę
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Zapraszam do kontaktu i rezerwacji terminu
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone & Email */}
          <Card className="gradient-card border-border/50 shadow-soft">
            <CardContent className="p-8 space-y-6">
              <div>
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Telefon
                </h3>
                <a
                  href="tel:+48123456789"
                  className="text-lg text-primary hover:text-accent transition-smooth"
                >
                  +48 123 456 789
                </a>
              </div>

              <div className="border-t border-border/50 pt-6">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a
                  href="mailto:kontakt@kwiatlotosu.pl"
                  className="text-lg text-primary hover:text-accent transition-smooth"
                >
                  kontakt@kwiatlotosu.pl
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Location & Hours */}
          <Card className="gradient-card border-border/50 shadow-soft">
            <CardContent className="p-8 space-y-6">
              <div>
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Adres
                </h3>
                <p className="text-muted-foreground">
                  ul. Przykładowa 123
                  <br />
                  00-001 Warszawa
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <div className="text-4xl mb-4">🕐</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Godziny otwarcia
                </h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Poniedziałek - Piątek: 9:00 - 19:00</p>
                  <p>Sobota: 10:00 - 16:00</p>
                  <p>Niedziela: Zamknięte</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="gradient-hero border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Gotowa/Gotowy na relaks?
              </h3>
              <p className="text-white/90 mb-6">
                Zarezerwuj wizytę już dziś i doświadcz głębokiego relaksu w
                Kwiecie Lotosu
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-smooth px-8 py-6 text-lg font-semibold"
                onClick={() => (window.location.href = "tel:+48123456789")}
              >
                Zadzwoń teraz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
