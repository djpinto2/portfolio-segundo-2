import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[var(--bg)]">
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
