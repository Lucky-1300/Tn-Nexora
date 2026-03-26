import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-8 py-16 w-full">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
