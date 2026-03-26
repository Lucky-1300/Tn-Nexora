
import React from "react";
// Gradient text utility
const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{children}</span>
);

// 1. HERO SECTION
function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center py-0 px-0 bg-[#0a0f1c] overflow-hidden">
      <video
        src="/WhatsApp%20Video%202026-03-26%20at%204.00.38%20PM.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-h-[500px] object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

// 2. STATS SECTION
function Stats() {
  const stats = [
    { label: "1M+", desc: "Projects Delivered" },
    { label: "500+", desc: "Happy Clients" },
    { label: "10+", desc: "Years Experience" },
    { label: "98%", desc: "Client Satisfaction" },
  ];
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center shadow-md border border-white/10">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">{s.label}</div>
          <div className="text-gray-400 text-sm md:text-base">{s.desc}</div>
        </div>
      ))}
    </section>
  );
}

// 3. SERVICES SECTION
function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive, and high-performance websites built to scale your business.",
    },
    {
      title: "App Development",
      desc: "Custom mobile and web applications designed for seamless user experiences.",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure to power your digital transformation.",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful and intuitive designs that enhance user engagement and satisfaction.",
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to boost your online presence and growth.",
    },
  ];
  return (
    <section id="services" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Services</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        We provide end-to-end digital solutions tailored to your business needs.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 hover:border-blue-500/40 transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 4. ABOUT / GROWTH SECTION
function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Image Placeholder */}
      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl flex items-center justify-center shadow-2xl">
          <span className="text-5xl text-white/30 font-bold">Image</span>
        </div>
      </div>
      {/* Right: Content */}
      <div>
        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">Our Growth</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tracking Our Growth Through Key Stats of Our Achievements</h2>
        <p className="text-gray-400 mb-6">
          At Nexora, our journey began over a decade ago with a simple mission — to revolutionize the digital landscape. What started as a small team has now grown into a global digital powerhouse.
          <br /><br />
          We deliver innovative solutions that help businesses unlock their true potential and achieve measurable growth.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="bg-white/5 rounded-xl px-6 py-4 text-center">
            <div className="text-xl font-bold text-white">1 Million+ </div>
            <div className="text-gray-400 text-xs">Deliveries</div>
          </div>
          <div className="bg-white/5 rounded-xl px-6 py-4 text-center">
            <div className="text-xl font-bold text-white">500+ </div>
            <div className="text-gray-400 text-xs">Clients Worldwide</div>
          </div>
          <div className="bg-white/5 rounded-xl px-6 py-4 text-center">
            <div className="text-xl font-bold text-white">10+ </div>
            <div className="text-gray-400 text-xs">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. TESTIMONIALS SECTION
function Testimonials() {
  const testimonials = [
    {
      review:
        "Nexora completely transformed our digital presence. Their team is highly skilled, responsive, and truly understands business needs.",
      name: "Amit Sharma, Startup Founder",
    },
    {
      review:
        "Professional, innovative, and reliable — working with Nexora was the best decision for our company.",
      name: "Priya Verma, Marketing Head",
    },
  ];
  return (
    <section id="testimonials" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/10 hover:border-blue-500/40 transition-colors"
          >
            <p className="text-gray-200 text-lg mb-4">“{t.review}”</p>
            <div className="text-blue-400 font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 6. TEAM SECTION
function Team() {
  const team = [
    { name: "Rohit Kumar", role: "CEO & Founder" },
    { name: "Anjali Singh", role: "Lead Designer" },
    { name: "Vikram Patel", role: "Senior Developer" },
    { name: "Sara Ali", role: "Cloud Architect" },
  ];
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Experience the Future with Our Visionary Team</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        A passionate team of designers, developers, and strategists committed to excellence.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-600/40 flex items-center justify-center mb-4">
              <span className="text-2xl text-white/40 font-bold">IMG</span>
            </div>
            <div className="text-white font-semibold text-lg">{member.name}</div>
            <div className="text-gray-400 text-sm">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 7. FAQ SECTION
function FAQ() {
  const faqs = [
    {
      q: "What services does Nexora offer?",
      a: "We offer web development, app development, UI/UX design, cloud solutions, and digital marketing.",
    },
    {
      q: "How long does a project take?",
      a: "Depending on complexity, most projects take between 2–6 weeks.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we offer ongoing support and maintenance.",
    },
    {
      q: "How can I get started?",
      a: "You can contact us directly or schedule a call through our website.",
    },
  ];
  const [open, setOpen] = React.useState(null);
  return (
    <section id="faq" className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/5 rounded-xl border border-white/10">
            <button
              className="w-full text-left px-6 py-4 text-white font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{faq.q}</span>
              <span className="ml-4 text-blue-400">{open === i ? "-" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-gray-300 text-sm transition-all duration-200">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// 8. CTA SECTION
function CTA() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 text-center">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Let’s Build Something Amazing Together</h2>
        <p className="text-gray-100 mb-6">Have an idea? Let’s turn it into reality with our expert team.</p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-100 transition">Contact Us</a>
      </div>
    </section>
  );
}
// 9. CONTACT FORM SECTION
function ContactForm() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Get in Touch</h2>
      <p className="text-center text-gray-400 mb-12">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      <form className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">Name</label>
          <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition" />
        </div>
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">Email</label>
          <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition" />
        </div>
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">Message</label>
          <textarea rows={5} placeholder="Your message..." className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition" />
        </div>
        <button type="submit" className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">Send Message</button>
      </form>
    </section>
  );
}
// MAIN HOME PAGE COMPONENT
export default function Home() {
  return (
    <>
      <main className="bg-[#0a0f1c]">
        <Hero />
        <section className="max-w-7xl mx-auto px-4 py-12">
          <About />
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <Services />
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <Testimonials />
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <Team />
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <CTA />
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <FAQ />
        </section>
        <section className="max-w-7xl mx-auto px-4 py-12">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
