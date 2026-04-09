import React from "react";
import { useTheme } from './ThemeWrapper';

export default function HomeHeroBrandSection() {
  const { isDark, bgColor } = useTheme();

  return (
    <section className={`flex flex-col items-center justify-center text-center py-5 px-4 ${bgColor}`}>
      <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Building Brands <span className={isDark ? 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'}>Digital</span> Age Strategies
      </h1>
      <p className={`text-lg md:text-xl mb-10 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Through innovative design, advanced tech solutions, and a client-centric approach, we empower businesses to achieve their digital aspirations.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#contact"
          className={`px-8 py-3 rounded-xl font-semibold ${isDark ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' : 'text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'} shadow-lg transition`}
        >
          Get Started
        </a>
        <a
          href="#contact"
          className={`px-8 py-3 rounded-xl font-semibold border transition ${isDark ? 'text-blue-200 border-blue-400/40 bg-[#101522] hover:bg-blue-900/30' : 'text-orange-600 border-orange-400/40 bg-orange-50/30 hover:bg-orange-100/50'}`}
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
