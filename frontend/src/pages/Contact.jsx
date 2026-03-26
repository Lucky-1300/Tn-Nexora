import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg flex flex-col gap-6">
          <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
          <textarea placeholder="Message" rows={5} className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
          <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transition hover:scale-105">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
