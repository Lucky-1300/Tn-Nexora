const navLinks = [
  { name: "Home", type: "route", to: "/" },
  { name: "About Us", type: "route", to: "/about" },

  {
    name: "Reviews",
    type: "dropdown",
    items: [
      { name: "Testimonials", type: "route", to: "/testimonials" },
      { name: "SEO Case Study", type: "route", to: "/case-study/seo" },
      { name: "PPC Case Study", type: "route", to: "/case-study/ppc" },
      { name: "Website Case Study", type: "route", to: "/case-study/website" },
    ],
  },

  {
    name: "Services",
    type: "dropdown",
    items: [
      {
        name: "Search Engine Optimization",
        type: "route",
        to: "/services/seo",
      },
      { name: "Social Media Marketing", type: "route", to: "/services/smm" },
      { name: "Pay Per Click", type: "route", to: "/services/ppc" },
      { name: "Technical SEO", type: "route", to: "/services/technical-seo" },
      {
        name: "WordPress Website Development",
        type: "route",
        to: "/services/wordpress",
      },
      {
        name: "Website Analysis",
        type: "route",
        to: "/services/website-analysis",
      },
      {
        name: "Brand Promotion",
        type: "route",
        to: "/services/brand-promotion",
      },
      {
        name: "Video Marketing",
        type: "route",
        to: "/services/video-marketing",
      },
      {
        name: "Digital Marketing",
        type: "route",
        to: "/services/digital-marketing",
      },
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
      {
        name: "Performance Marketing Pricing",
        type: "route",
        to: "/pricing/performance",
      },
    ],
  },

  { name: "Blog", type: "route", to: "/blog" },
  { name: "Contact Us", type: "anchor", href: "/contact" },
];

import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile menu
  const navRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("click", handleClickOutside); // ✅ use click instead of mousedown
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-[#101522] border-b border-[#23263a] sticky top-0 z-50">
      <nav
        ref={navRef}
        className="max-w-8xl mx-auto flex items-center justify-between px-4 py-3"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <img
            src="/image.png"
            alt="Logo"
            className="h-12 w-40 object-contain"
          />
        </div>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-base font-medium">
          {navLinks.map((link) => renderNavItem(link))}
        </ul>

        {/* CTA (Desktop only) */}
        <Link
          to="/contact"
          className="hidden md:block ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Let's Talk
        </Link>

        {/* ✅ Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#101522] border-t border-[#23263a] px-4 pb-4">
          <ul className="flex flex-col gap-2 mt-3 text-white">
            {navLinks.map((link) => {
              const isOpen = openDropdown === link.name;

              return (
                <li key={link.name}>
                  {/* ROUTE */}
                  {link.type === "route" && (
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 border-b border-white/10"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* ANCHOR */}
                  {link.type === "anchor" && (
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 border-b border-white/10"
                    >
                      {link.name}
                    </a>
                  )}

                  {/* ✅ DROPDOWN FIXED */}
                  {link.type === "dropdown" && (
                    <>
                      <div
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ stops bubbling
                          setOpenDropdown((prev) =>
                            prev === link.name ? null : link.name
                          );
                        }}
                        className="flex justify-between items-center py-2 border-b border-white/10 cursor-pointer"
                      >
                        <span>{link.name}</span>

                        {/* Arrow */}
                        <span
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>

                      {/* Dropdown Items */}
                      {isOpen && (
                        <div className="pl-4 mt-2 flex flex-col gap-2">
                          {link.items.map((item) =>
                            item.type === "route" ? (
                              <Link
                                key={item.name}
                                to={item.to}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="block w-full text-sm text-white/80 hover:text-indigo-400 transition py-1"
                              >
                                {item.name}
                              </Link>
                            ) : (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block w-full text-sm ..."
                              >
                                {item.name}
                              </a>
                            ),
                          )}
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );

  // 🔥 reusable render function (desktop)
  function renderNavItem(link) {
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

    if (link.type === "anchor") {
      return (
        <li key={link.name}>
          <a href={link.href} className="text-white/90 hover:text-white">
            {link.name}
          </a>
        </li>
      );
    }

    if (link.type === "dropdown") {
      const isOpen = openDropdown === link.name;

      return (
        <li key={link.name} className="relative cursor-pointer">
          <span
            onClick={() => setOpenDropdown(isOpen ? null : link.name)}
            className="text-white/90 hover:text-white flex items-center"
          >
            {link.name} ▾
          </span>

          {isOpen && (
            <ul className="absolute left-0 mt-2 min-w-[180px] bg-[#181c2e] border border-[#23263a] rounded shadow-lg">
              {link.items.map((item) => (
                <li key={item.name}>
                  {item.type === "route" ? (
                    <Link
                      to={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-6 py-3 text-white hover:bg-[#23263a]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-6 py-3 text-white hover:bg-[#23263a]"
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
  }
}
