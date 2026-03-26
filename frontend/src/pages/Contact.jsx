import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 bg-[#0a0f1c] text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="mb-8 text-center max-w-xl mx-auto">
        <p className="mb-2">We'd love to hear from you! Please fill out the form below or reach us using the contact information provided.</p>
        <div className="flex flex-col gap-2 items-center text-white/80 text-sm">
          <div><span className="font-semibold">Address:</span> 123 Main Street, City, Country</div>
          <div><span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="underline hover:text-blue-400">+1 234 567 890</a></div>
          <div><span className="font-semibold">Email:</span> <a href="mailto:info@example.com" className="underline hover:text-blue-400">info@example.com</a></div>
        </div>
      </div>
      <form className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-lg flex flex-col gap-6">
        <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
        <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
        <textarea placeholder="Message" rows={5} className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
        <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transition hover:scale-105">Send Message</button>
      </form>
    </main>
    <div className="min-h-screen bg-[#0a0f1c] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-8 py-16 w-full">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
