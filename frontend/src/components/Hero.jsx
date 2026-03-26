export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 overflow-hidden">
      {/* Glowing gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/40 via-purple-700/30 to-indigo-900/20 blur-2xl opacity-70" />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Building Brands <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital</span> Age Strategies
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
        Through innovative design, advanced tech solutions, and a client-centric approach, we empower businesses to achieve their digital aspirations.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg transition hover:scale-105">Get Started</button>
        <button className="px-6 py-3 rounded-xl border border-blue-400 text-blue-300 font-semibold bg-white/5 backdrop-blur-md transition hover:scale-105">Schedule a Call</button>
      </div>
    </section>
  );
}
