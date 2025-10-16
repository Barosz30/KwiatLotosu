const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-xl">🪷</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Kwiat Lotosu
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Profesjonalny salon masażu prowadzony przez Beatę Drężek. 
              Miejsce spokoju i harmonii dla Twojego ciała i ducha.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('o-mnie')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  O mnie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Oferta
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+48123456789" className="hover:text-primary transition-smooth">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:kontakt@kwiatlotosu.pl" className="hover:text-primary transition-smooth">
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
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Kwiat Lotosu - Salon Masażu. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">Beata Drężek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
