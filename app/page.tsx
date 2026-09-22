import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg)]">
        <Hero />
        <Portfolio />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
