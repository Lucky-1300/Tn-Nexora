import React from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <span className="text-blue-400">&#9670;</span> Nexora
        </div>
        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white/90 font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-400 transition">{link.name}</a>
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <a href="#contact" className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition hidden md:inline-block">
          Let's Talk
        </a>
        {/* Mobile menu (optional) */}
      </nav>
    </header>
  );
}
