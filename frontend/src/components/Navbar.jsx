

import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', type: 'route', to: '/' },
  { name: 'About Us', type: 'route', to: '/about' },
  { name: 'Reviews', type: 'dropdown', items: [
    { name: 'Testimonials', type: 'route', to: '/testimonials' },
    { name: 'SEO Case Study', href: '#seo-case-study' },
    { name: 'PPC Case Study', href: '#ppc-case-study' },
    { name: 'Website Case Study', href: '#website-case-study' },
  ] },
  { name: 'Services', type: 'dropdown', items: [
    { name: 'Search Engine Optimization', href: '#seo' },
    { name: 'Social Media Marketing', href: '#smm' },
    { name: 'Pay Per Click', href: '#ppc' },
    { name: 'Technical SEO', href: '#technical-seo' },
    { name: 'WordPress Website Development', href: '#wordpress' },
    { name: 'Website Analysis', href: '#website-analysis' },
    { name: 'Brand Promotion', href: '#brand-promotion' },
    { name: 'Video Marketing', href: '#video-marketing' },
    { name: 'Digital Marketing', href: '#digital-marketing' },
  ] },
  { name: 'Pricing', type: 'dropdown', items: [
    { name: 'SMO Pricing', href: '#smo-pricing' },
    { name: 'PPC Pricing', href: '#ppc-pricing' },
    { name: 'LinkedIn Pricing', href: '#linkedin-pricing' },
    { name: 'GMB Package', href: '#gmb-package' },
    { name: 'Performance Marketing Pricing', href: '#performance-marketing-pricing' },
  ] },
  { name: 'Blog', type: 'route', to: '/blog' },
  { name: 'Contact Us', type: 'anchor', href: '#contact' }
];

export default function Navbar() {
  const location = useLocation();
  return (
    <header className="w-full bg-[#101522] border-b border-[#23263a] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <span className="text-blue-400">&#9670;</span> Nexora
        </div>
        {/* Nav Links */}
        <ul className="flex-1 flex justify-center gap-8 text-base font-medium">
          {navLinks.map(link => {
            if (link.type === 'anchor') {
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={
                      link.href === '#home' && location.pathname === '/' ? 'text-white font-semibold' : 'text-white/90 hover:text-white transition'
                    }
                  >
                    {link.name}
                  </a>
                </li>
              );
            }
            if (link.type === 'dropdown') {
              return (
                <li key={link.name} className="relative group cursor-pointer">
                  <span className="text-white/90 hover:text-white transition flex items-center">
                    {link.name} <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                  <ul className="absolute left-0 mt-2 min-w-[180px] bg-[#181c2e] border border-[#23263a] rounded shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:ease-out z-50">
                    {link.items.map(item => (
                      <li key={item.name} className="pointer-events-auto">
                        {item.type === 'route' ? (
                          <Link to={item.to} className="block px-6 py-3 text-white hover:bg-[#23263a] hover:text-blue-400 transition-colors">{item.name}</Link>
                        ) : (
                          <a href={item.href} className="block px-6 py-3 text-white hover:bg-[#23263a] hover:text-blue-400 transition-colors">{item.name}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            if (link.type === 'route') {
              return (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className={
                      location.pathname === link.to ? 'text-white font-semibold' : 'text-white/90 hover:text-white transition'
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
        {/* CTA Button */}
        <Link to="/contact" className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}
