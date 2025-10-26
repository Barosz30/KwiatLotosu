"use client"; // Dyrektywa jest potrzebna ze względu na onClick w przyciskach linków

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Funkcja pomocnicza do przewijania
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Zmieniono bg-primary/5 na bg-purple-50, border-border/50 na border-gray-200
    <footer className="bg-purple-50 border-t border-gray-200 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Zmieniono gradient-hero na konkretny gradient */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                <span className="text-xl">🪷</span>
              </div>
              {/* Zmieniono text-foreground na text-gray-900 */}
              <span className="font-display font-bold text-xl text-gray-900">
                Kwiat Lotosu
              </span>
            </div>
            {/* Zmieniono text-muted-foreground na text-gray-600 */}
            <p className="text-gray-600 text-sm">
              Profesjonalny salon masażu prowadzony przez Beatę Drężek. Miejsce
              spokoju i harmonii dla Twojego ciała i ducha.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* Zmieniono text-foreground na text-gray-900 */}
            <h3 className="font-display font-semibold text-gray-900">
              Szybkie linki
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("o-mnie")}
                  // Zmieniono text-muted-foreground hover:text-primary transition-smooth na konkretne kolory i transition
                  className="text-gray-600 hover:text-purple-700 transition cursor-pointer"
                >
                  O mnie
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("oferta")}
                  // Zmieniono text-muted-foreground hover:text-primary transition-smooth na konkretne kolory i transition
                  className="text-gray-600 hover:text-purple-700 transition cursor-pointer"
                >
                  Oferta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("galeria")}
                  // Zmieniono text-muted-foreground hover:text-primary transition-smooth na konkretne kolory i transition
                  className="text-gray-600 hover:text-purple-700 transition cursor-pointer"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("kontakt")}
                  // Zmieniono text-muted-foreground hover:text-primary transition-smooth na konkretne kolory i transition
                  className="text-gray-600 hover:text-purple-700 transition cursor-pointer"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Zmieniono text-foreground na text-gray-900 */}
            <h3 className="font-display font-semibold text-gray-900">
              Kontakt
            </h3>
            {/* Zmieniono text-muted-foreground na text-gray-600 */}
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a
                  href="tel:+48123456789"
                  // Zmieniono hover:text-primary transition-smooth na konkretny kolor i transition
                  className="hover:text-purple-700 transition"
                >
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a
                  href="mailto:kontakt@kwiatlotosu.pl"
                  // Zmieniono hover:text-primary transition-smooth na konkretny kolor i transition
                  className="hover:text-purple-700 transition"
                >
                  kontakt@kwiatlotosu.pl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>ul. Przykładowa 123, 00-001 Warszawa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Zmieniono border-border/50 na border-gray-200, text-muted-foreground na text-gray-500 */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Kwiat Lotosu - Salon Masażu. Wszelkie prawa
            zastrzeżone.
          </p>
          <p className="mt-2">Beata Drężek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
