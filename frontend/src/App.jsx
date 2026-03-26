
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
