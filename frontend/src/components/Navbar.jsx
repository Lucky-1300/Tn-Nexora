import { Link, useLocation } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

const navLinks = [
  { name: "Home", type: "route", to: "/" },
  { name: "About Us", type: "route", to: "/about" },

  {
    name: "Reviews",
    type: "dropdown",
    items: [
      { name: "Testimonials", type: "route", to: "/testimonials" },
      { name: "SEO Case Study", href: "#seo-case-study" },
      { name: "PPC Case Study", href: "#ppc-case-study" },
      { name: "Website Case Study", href: "#website-case-study" },
    ],
  },

  {
    name: "Services",
    type: "dropdown",
    items: [
      { name: "Search Engine Optimization", type: "route", to: "/services/seo" },
      { name: "Social Media Marketing", type: "route", to: "/services/smm" },
      { name: "Pay Per Click", type: "route", to: "/services/ppc" },
      { name: "Technical SEO", type: "route", to: "/services/technical-seo" },
      { name: "WordPress Website Development", type: "route", to: "/services/wordpress" },
      { name: "Website Analysis", type: "route", to: "/services/website-analysis" },
      { name: "Brand Promotion", type: "route", to: "/services/brand-promotion" },
      { name: "Video Marketing", type: "route", to: "/services/video-marketing" },
      { name: "Digital Marketing", type: "route", to: "/services/digital-marketing" },
    ],
  },

  {
    name: "Pricing",
    type: "dropdown",
    items: [
      { name: "SMO Pricing", type: "route", to: "/pricing/smo" },
      { name: "PPC Pricing", type: "route", to: "/pricing/ppc" },
      { name: "LinkedIn Pricing", type: "route", to: "/pricing/linkedin" },
      { name: "GMB Package", type: "route", to: "/pricing/gmb" },
      { name: "Performance Marketing Pricing", type: "route", to: "/pricing/performance" },
    ],
  },

  { name: "Blog", type: "route", to: "/blog" },
  { name: "Contact Us", type: "anchor", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#101522] border-b border-[#23263a] sticky top-0 z-50">
      <nav ref={navRef} className="max-w-8xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <img src="/image.png" alt="Logo" className="h-13 w-50 object-contain" />
        </div>

        {/* Nav Links */}
        <ul className="flex-1 flex justify-center gap-8 text-base font-medium">
          {navLinks.map((link) => {
            // 🔹 ANCHOR LINKS
            if (link.type === "anchor") {
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={
                      link.href === '#home' && location.pathname === '/'
                        ? 'text-white font-semibold'
                        : 'text-white/90 hover:text-white transition'
                    }
                  >
                    {link.name}
                  </a>
                </li>
              );
            }

            // 🔹 DROPDOWN (open on click, close on outside click)
            if (link.type === "dropdown") {
              const isOpen = openDropdown === link.name;
              return (
                <li key={link.name} className="relative cursor-pointer select-none">
                  <span
                    className={`text-white/90 hover:text-white transition flex items-center ${isOpen ? 'font-semibold' : ''}`}
                    onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                  >
                    {link.name}
                    <svg
                      className="ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  {isOpen && (
                    <ul className="absolute left-0 mt-2 min-w-[180px] bg-[#181c2e] border border-[#23263a] rounded shadow-lg z-10 animate-fadeIn">
                      {link.items.map(item => (
                        <li key={item.name}>
                          {item.type === 'route' ? (
                            <Link
                              to={item.to}
                              className="block px-6 py-3 text-white hover:bg-[#23263a] hover:text-blue-400 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              className="block px-6 py-3 text-white hover:bg-[#23263a] hover:text-blue-400 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            // 🔹 ROUTE LINKS
            if (link.type === "route") {
              return (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className={
                      location.pathname === link.to
                        ? "text-white font-semibold"
                        : "text-white/90 hover:text-white transition"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>

        {/* CTA BUTTON */}
        <Link
          to="/contact"
          className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Let's Talk
        </Link>

      </nav>
    </header>
  );
}