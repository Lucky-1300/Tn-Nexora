import React from "react";

export default function HomeHeroBrandSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-[#0a0f1c]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
        Building Brands <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Digital</span> Age Strategies
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
        Through innovative design, advanced tech solutions, and a client-centric approach, we empower businesses to achieve their digital aspirations.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#contact"
          className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
        >
          Get Started
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-xl font-semibold text-blue-200 border border-blue-400/40 bg-[#101522] hover:bg-blue-900/30 transition"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}