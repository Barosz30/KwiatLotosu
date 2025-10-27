import Image from "next/image";
import lotusFlower from "@/assets/logo.webp";

const About = () => {
  return (
    // Użyto konkretnej wartości bg-amber-50 zamiast bg-muted
    <section id="o-mnie" className="py-20 px-4 bg-amber-50">
      <div className="container mx-0 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-996/2048 rounded-2xl overflow-hidden shadow-md">
              {" "}
              <Image
                src={lotusFlower}
                alt="Kwiat lotosu - symbol spokoju i harmonii"
                fill
                className="object-contain rounded-2xl overflow-hidden shadow-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-white opacity-20" />{" "}
            </div>
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 -z-10" /> */}
          </div>

          <div className="space-y-6">
            {/* Zmieniono bg-accent/10 text-accent na konkretne kolory */}
            <div className="inline-block px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium">
              O mnie
            </div>

            {/* Zmieniono text-foreground na text-gray-900 */}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Beata Drężek
            </h2>

            {/* Zmieniono text-muted-foreground na text-gray-600 */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Witam serdecznie w moim salonie masażu{" "}
                {/* Zmieniono text-primary na text-purple-700 */}
                <span className="text-purple-700 font-medium">
                  Kwiat Lotosu
                </span>
                . Jestem certyfikowaną masażystką z wieloletnim doświadczeniem w
                sztuce terapii manualnej.
              </p>
              {/*...reszta paragrafów... */}
              <p>
                Moja pasja do masażu narodziła się z głębokiego przekonania, że
                dotyk ma niesamowitą moc uzdrawiania zarówno ciała, jak i ducha.
                W swojej pracy łączę tradycyjne techniki masażu z nowoczesną
                wiedzą o anatomii i fizjologii człowieka.
              </p>
              <p>
                Każda sesja masażu jest dla mnie wyjątkową chwilą, w której
                staram się stworzyć przestrzeń pełną spokoju i harmonii. Wierzę,
                że relaks i regeneracja to klucz do zdrowia i dobrego
                samopoczucia.
              </p>
            </div>

            {/* Wyróżnienia */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Zmieniono gradient-card na bg-white, shadow-soft na shadow-md */}
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl mb-2">✨</div>
                {/* Zmieniono text-muted-foreground na text-purple-600 (dla akcentu) */}
                <div className="text-sm text-purple-600 font-medium">
                  Wieloletnie
                </div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <div className="font-semibold text-gray-900">Doświadczenie</div>
              </div>
              {/* Zmieniono gradient-card na bg-white, shadow-soft na shadow-md */}
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl mb-2">🎓</div>
                {/* Zmieniono text-muted-foreground na text-purple-600 (dla akcentu) */}
                <div className="text-sm text-purple-600 font-medium">
                  Certyfikowana
                </div>
                {/* Zmieniono text-foreground na text-gray-900 */}
                <div className="font-semibold text-gray-900">Masażystka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
