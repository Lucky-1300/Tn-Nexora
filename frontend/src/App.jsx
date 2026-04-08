// import { Routes, Route } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ServiceDetail from "./pages/ServiceDetail";
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import TestimonialsPage from './pages/Testimonials';
import Team from "./components/Team";

import Pricing from './pages/Pricing';
import SMOPricing from './pages/SMOPricing';
import PPCPricing from './pages/PPCPricing';
import LinkedInPricing from './pages/LinkedInPricing';
import GMBPricing from './pages/GMBPricing';
import PerformancePricing from './pages/PerformancePricing';

import NotFound from "./pages/NotFound";
import Forbidden from "./pages/Forbidden";
import ServerError from "./pages/ServerError";

function App() {

const location = useLocation();

const hideLayout =
  location.pathname === "/403" ||
  location.pathname === "/500" ||
  location.pathname === "/404";

  return (
    <div className="bg-[#0a0f1c] min-h-screen flex flex-col">
      
      {/* <Navbar /> */}
     {!hideLayout && <Navbar />}




      {/* ✅ FIXED: Routes wrapped inside flex-1 */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          
          <Route path="/pricing/smo" element={<SMOPricing />} />
          <Route path="/pricing/ppc" element={<PPCPricing />} />
          <Route path="/pricing/linkedin" element={<LinkedInPricing />} />
          <Route path="/pricing/gmb" element={<GMBPricing />} />
          <Route path="/pricing/performance" element={<PerformancePricing />} />

          

          {/* ✅ ADDED: 404 fallback (broken links fix) */}
          {/* <Route 
          <Route 
            path="*" 
            element={
              <h1 className="text-white text-center mt-20 text-2xl">
                404 Page Not Found
              </h1>
            } 
          /> */}
          {/* <Route path="/403" element={<Forbidden />} />
<Route path="/500" element={<ServerError />} />
<Route path="*" element={<NotFound />} /> */}
<Route path="/403" element={<Forbidden />} />
<Route path="/500" element={<ServerError />} />
<Route path="/404" element={<NotFound />} />
<Route path="*" element={<Navigate to="/404" />} />







        </Routes>
      </div>

      {/* <Footer /> */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;