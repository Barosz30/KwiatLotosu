import dynamic from "next/dynamic";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const About = dynamic(() => import("@/components/About"), {
  loading: () => <p>Ładowanie sekcji O mnie...</p>, // Opcjonalny wskaźnik ładowania
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <p>Ładowanie Oferty...</p>,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <p>Ładowanie Galerii...</p>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <p>Ładowanie Kontaktu...</p>,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
