import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={`${isDark ? 'bg-[#0a0f1c] border-gray-800 text-gray-400' : 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-600 text-white'} border-t pt-12 pb-4 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        {/* Company Info */}
        <div>
          {/* <div > */}
            {/* Logo */}
            <div className="mb-2">
              <img
                src={isDark ? "/image.png" : "/image.png"}
                alt="Logo"
                loading="eager"
                decoding="async"
                className="h-15 w-50 object-contain"
              />
            </div>
          {/* </div> */}
          <p className="mb-2 text-sm">We build innovative digital solutions that help businesses grow and scale in the modern world.</p>
          <span className={`text-xs ${isDark ? 'text-blue-400' : 'text-white'}`}>Empowering businesses through technology.</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/#services' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.href} className={`${isDark ? 'hover:text-white' : 'hover:text-white/80'} transition-colors duration-200 rounded px-1 focus:outline-none`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            {[
              { label: 'Search Engine Optimization', href: '/services/seo' },
              { label: 'Social Media Marketing', href: '/services/smm' },
              { label: 'Pay Per Click', href: '/services/ppc' },
              { label: 'Technical SEO', href: '/services/technical-seo' },
              { label: 'WordPress Development', href: '/services/wordpress' },
              { label: 'Website Analysis', href: '/services/website-analysis' },
            ].map((service) => (
              <li key={service.label}>
                <Link to={service.href} className={`${isDark ? 'hover:text-white' : 'hover:text-white/80'} transition-colors duration-200 rounded px-1 focus:outline-none`}>
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info & Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 mb-4">
            <li>
              <a href="mailto:tnnexoratechnologies@gmail.com" className={`${isDark ? 'hover:text-white' : 'hover:text-white/80'} transition-colors duration-200`}>tnnexoratechnologies@gmail.com</a>
            </li>
            <li>
              <a href="tel:+9320050310" className={`${isDark ? 'hover:text-white' : 'hover:text-white/80'} transition-colors duration-200`}>+91 9320050310</a>
            </li>
            <li>
              <span>India</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/company/tn-nexora-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-white/80'} transition-colors text-xl`}><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-white/80'} transition-colors text-xl`}><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'hover:text-pink-400' : 'hover:text-white/80'} transition-colors text-xl`}><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'hover:text-gray-200' : 'hover:text-white/80'} transition-colors text-xl`}><FaGithub /></a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className={`border-t ${isDark ? 'border-gray-800 text-gray-500' : 'border-orange-400 text-white'} pt-4 mt-4 text-center text-xs transition-colors duration-300`}>
        <div className="mb-2">© 2026 Nexora. All rights reserved.</div>
        <div className="space-x-2">
          <a href="#privacy" className={`${isDark ? 'hover:text-white' : 'hover:text-orange-100'} transition-colors`}>Privacy Policy</a>
          <span>|</span>
          <a href="#terms" className={`${isDark ? 'hover:text-white' : 'hover:text-orange-100'} transition-colors`}>Terms</a>
        </div>
      </div>
    </footer>
  );
}
