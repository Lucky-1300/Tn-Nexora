
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ServiceDetail from "./pages/ServiceDetail";
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import TestimonialsPage from './pages/Testimonials';

function App() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
