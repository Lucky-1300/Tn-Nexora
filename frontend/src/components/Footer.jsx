import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] border-t border-gray-800 pt-12 pb-4 px-4 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400 text-2xl font-bold">&#9670;</span>
            <span className="text-white text-2xl font-bold">Nexora</span>
          </div>
          <p className="mb-2 text-sm">We build innovative digital solutions that help businesses grow and scale in the modern world.</p>
          <span className="text-xs text-blue-400">Empowering businesses through technology.</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {['Home','About Us','Services','Pricing','Blog','Contact Us'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g,'-')}`} className="hover:text-white transition-colors duration-200 rounded px-1 focus:outline-none focus:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            {['Web Development','App Development','UI/UX Design','Cloud Solutions','Digital Marketing'].map(service => (
              <li key={service}>
                <a href={`#${service.toLowerCase().replace(/ /g,'-')}`} className="hover:text-white transition-colors duration-200 rounded px-1 focus:outline-none focus:text-white">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info & Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 mb-4">
            <li>
              <a href="mailto:contact@nexora.com" className="hover:text-white transition-colors duration-200">contact@nexora.com</a>
            </li>
            <li>
              <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">+91 9876543210</a>
            </li>
            <li>
              <span>India</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-xl"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-xl"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors text-xl"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors text-xl"><FaGithub /></a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-4 mt-4 text-center text-xs text-gray-500">
        <div className="mb-2">© 2026 Nexora. All rights reserved.</div>
        <div className="space-x-2">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
