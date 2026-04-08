import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ServiceDetail from "./pages/ServiceDetail";
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import TestimonialsPage from './pages/Testimonials';

import Pricing from './pages/Pricing';
import SMOPricing from './pages/SMOPricing';
import PPCPricing from './pages/PPCPricing';
import LinkedInPricing from './pages/LinkedInPricing';
import GMBPricing from './pages/GMBPricing';
import PerformancePricing from './pages/PerformancePricing';

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`${isDark ? 'bg-[#0a0f1c] text-white' : 'bg-white text-[#FF8C00]'} min-h-screen flex flex-col transition-colors duration-300`}>
      
      <Navbar />

      {/* ✅ FIXED: Routes wrapped inside flex-1 */}
      <div className={`flex-1 ${isDark ? '' : 'bg-white'} transition-colors duration-300`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          
          <Route path="/pricing/smo" element={<SMOPricing />} />
          <Route path="/pricing/ppc" element={<PPCPricing />} />
          <Route path="/pricing/linkedin" element={<LinkedInPricing />} />
          <Route path="/pricing/gmb" element={<GMBPricing />} />
          <Route path="/pricing/performance" element={<PerformancePricing />} />

          {/* ✅ ADDED: 404 fallback (broken links fix) */}
          <Route 
            path="*" 
            element={
              <h1 className="text-white text-center mt-20 text-2xl">
                404 Page Not Found
              </h1>
            } 
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;