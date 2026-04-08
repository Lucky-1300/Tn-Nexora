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

import { Link, useLocation } from "react-router-dom";
import React, { useState, useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile menu
  const [dragOverDropdown, setDragOverDropdown] = useState(null);
  const [droppedDropdown, setDroppedDropdown] = useState(null);
  const navRef = useRef();
  const dropResetTimerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("click", handleClickOutside); // ✅ CHANGE BACK TO mousedown

    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (dropResetTimerRef.current) {
        clearTimeout(dropResetTimerRef.current);
      }
    };
  }, []);

  function getDropdownIcon(dropdownName, isOpen) {
    if (dragOverDropdown === dropdownName) return "⬇";
    if (droppedDropdown === dropdownName) return "✓";
    return isOpen ? "▴" : "▾";
  }

  function handleDropdownDragOver(event, dropdownName) {
    event.preventDefault();
    if (dragOverDropdown !== dropdownName) {
      setDragOverDropdown(dropdownName);
    }
  }

  function handleDropdownDrop(event, dropdownName) {
    event.preventDefault();
    setDragOverDropdown(null);
    setDroppedDropdown(dropdownName);

    if (dropResetTimerRef.current) {
      clearTimeout(dropResetTimerRef.current);
    }

    dropResetTimerRef.current = setTimeout(() => {
      setDroppedDropdown(null);
    }, 800);
  }

  function handleDropdownDragLeave(dropdownName) {
    if (dragOverDropdown === dropdownName) {
      setDragOverDropdown(null);
    }
  }

  return (
    <header className={`w-full ${isDark ? 'bg-[#101522] border-[#23263a]' : 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-600'} border-b sticky top-0 z-50 transition-colors duration-300`}>
      <nav
        ref={navRef}
        className={`max-w-8xl mx-auto flex items-center justify-between px-3 md:px-4 py-2 md:py-3 text-white gap-2`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <img
            src={isDark ? "/image.png" : "/image.png"}
            alt="Logo"
            className="h-10 w-32 md:h-12 md:w-40 object-contain"
          />
        </div>

        {/* ✅ Desktop Menu */}
        <ul className="hidden lg:flex flex-1 justify-center gap-6 xl:gap-8 text-sm lg:text-base font-medium">
          {navLinks.map((link) => renderNavItem(link))}
        </ul>

        {/* CTA (Desktop only) */}
        <Link
          to="/contact"
          className={`hidden lg:block ml-2 lg:ml-6 px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-white text-[#FF8C00]'} font-semibold shadow-lg hover:scale-105 transition`}
        >
          Let's Talk
        </Link>

        <div>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`ml-1 md:ml-4 p-2 rounded-full transition duration-300 ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-orange-500'}`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {/* ✅ Hamburger */}
        <button
          className="lg:hidden text-white text-2xl ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className={`lg:hidden ${isDark ? 'bg-[#101522] border-[#23263a]' : 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-600'} border-t px-4 pb-4 transition-colors duration-300`}>
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
                        e.stopPropagation();
                        setOpenDropdown((prev) =>
                          prev === link.name ? null : link.name
                        );
                      }}
                        onDragOver={(event) => handleDropdownDragOver(event, link.name)}
                        onDrop={(event) => handleDropdownDrop(event, link.name)}
                        onDragLeave={() => handleDropdownDragLeave(link.name)}
                        className="flex justify-between items-center py-2 border-b border-white/10 cursor-pointer"
                      >
                        <span>{link.name}</span>

                        {/* Arrow */}
                        <span
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          {getDropdownIcon(link.name, isOpen)}
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
            className={`block mt-4 text-center px-5 py-2 rounded-full font-semibold transition ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30' : 'bg-white text-orange-600 hover:bg-orange-50'}`}
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
            onDragOver={(event) => handleDropdownDragOver(event, link.name)}
            onDrop={(event) => handleDropdownDrop(event, link.name)}
            onDragLeave={() => handleDropdownDragLeave(link.name)}
            className="text-white/90 hover:text-white flex items-center"
          >
            {link.name} <span className="ml-1">{getDropdownIcon(link.name, isOpen)}</span>
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
