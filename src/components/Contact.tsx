"use client"; // Dyrektywa jest potrzebna ze względu na onClick w Button

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    // Zmieniono bg-secondary/30 na bg-amber-50
    <section id="kontakt" className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Zmieniono bg-accent/10 text-accent na konkretne kolory */}
          <div className="inline-block px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium">
            Kontakt
          </div>
          {/* Zmieniono text-foreground na text-gray-900 */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Umów Wizytę
          </h2>
          {/* Zmieniono text-muted-foreground na text-gray-600 */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Zapraszam do kontaktu i rezerwacji terminu
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone & Email */}
          {/* Zmieniono gradient-card na bg-white, border-border/50 na border-gray-200, shadow-soft na shadow-md */}
          <Card className="bg-white border border-gray-200 shadow-md">
            <CardContent className="p-8 space-y-6">
              <div>
                <div className="text-4xl mb-4">📞</div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Telefon
                </h3>
                <a
                  href="tel:+48123456789"
                  // Zmieniono text-primary hover:text-accent transition-smooth na konkretne kolory i transition
                  className="text-lg text-purple-700 hover:text-purple-600 transition"
                >
                  +48 123 456 789
                </a>
              </div>

              {/* Zmieniono border-border/50 na border-gray-200 */}
              <div className="border-t border-gray-200 pt-6">
                <div className="text-4xl mb-4">✉️</div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:kontakt@kwiatlotosu.pl"
                  // Zmieniono text-primary hover:text-accent transition-smooth na konkretne kolory i transition
                  className="text-lg text-purple-700 hover:text-purple-600 transition"
                >
                  kontakt@kwiatlotosu.pl
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Location & Hours */}
          {/* Zmieniono gradient-card na bg-white, border-border/50 na border-gray-200, shadow-soft na shadow-md */}
          <Card className="bg-white border border-gray-200 shadow-md">
            <CardContent className="p-8 space-y-6">
              <div>
                <div className="text-4xl mb-4">📍</div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Adres
                </h3>
                {/* Zmieniono text-muted-foreground na text-gray-600 */}
                <p className="text-gray-600">
                  ul. Przykładowa 123
                  <br />
                  00-001 Warszawa
                </p>
              </div>

              {/* Zmieniono border-border/50 na border-gray-200 */}
              <div className="border-t border-gray-200 pt-6">
                <div className="text-4xl mb-4">🕐</div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  Godziny otwarcia
                </h3>
                {/* Zmieniono text-muted-foreground na text-gray-600 */}
                <div className="space-y-1 text-gray-600">
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
          {/* Zmieniono gradient-hero na konkretny gradient, shadow-glow na shadow-xl */}
          <Card className="bg-gradient-to-r from-purple-600 to-pink-500 border-0 shadow-xl max-w-2xl mx-auto">
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
                // Zmieniono text-primary na text-purple-700, hover:bg-white/90 na hover:bg-gray-100, transition-smooth na transition
                className="bg-white text-purple-700 hover:bg-gray-100 transition px-8 py-6 text-lg font-semibold"
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
