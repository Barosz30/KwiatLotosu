import lotusFlower from "@/assets/lotus-flower.jpg";

const About = () => {
  return (
    <section id="o-mnie" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={lotusFlower} 
                alt="Kwiat lotosu - symbol spokoju i harmonii" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-card opacity-20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-hero rounded-full blur-3xl opacity-30" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              O mnie
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Beata Drężek
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Witam serdecznie w moim salonie masażu <span className="text-primary font-medium">Kwiat Lotosu</span>. 
                Jestem certyfikowaną masażystką z wieloletnim doświadczeniem w sztuce terapii manualnej.
              </p>
              
              <p>
                Moja pasja do masażu narodziła się z głębokiego przekonania, że dotyk ma niesamowitą moc 
                uzdrawiania zarówno ciała, jak i ducha. W swojej pracy łączę tradycyjne techniki masażu 
                z nowoczesną wiedzą o anatomii i fizjologii człowieka.
              </p>
              
              <p>
                Każda sesja masażu jest dla mnie wyjątkową chwilą, w której staram się stworzyć przestrzeń 
                pełną spokoju i harmonii. Wierzę, że relaks i regeneracja to klucz do zdrowia i dobrego samopoczucia.
              </p>
            </div>

            {/* Certifications/Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="gradient-card rounded-xl p-4 shadow-soft">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-sm text-muted-foreground">Wieloletnie</div>
                <div className="font-semibold text-foreground">Doświadczenie</div>
              </div>
              <div className="gradient-card rounded-xl p-4 shadow-soft">
                <div className="text-3xl mb-2">🎓</div>
                <div className="text-sm text-muted-foreground">Certyfikowana</div>
                <div className="font-semibold text-foreground">Masażystka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
