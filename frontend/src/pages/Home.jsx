import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="max-w-6xl mx-auto px-4 py-12">
          <About />
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Services />
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Testimonials />
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Team />
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <FAQ />
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
