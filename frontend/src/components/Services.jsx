const services = [
  {
    title: 'Web Development',
    desc: 'Modern, scalable websites and web apps tailored to your business needs.',
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
    ),
  },
  {
    title: 'App Development',
    desc: 'Cross-platform mobile apps with seamless user experience and performance.',
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    desc: 'Cloud-native solutions for scalability, security, and business agility.',
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 15a4 4 0 0 1 4-4h1a4 4 0 0 1 8 0h1a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z" /></svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-blue-500/40 cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white/90">{service.title}</h3>
            <p className="text-white/70 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
