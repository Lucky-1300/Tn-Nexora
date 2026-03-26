
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './components/Contact';
import ServiceDetail from "./pages/ServiceDetail";
import Blog from './pages/Blog';
import About from './pages/About';
import TestimonialsPage from './pages/Testimonials';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
}

export default App;
