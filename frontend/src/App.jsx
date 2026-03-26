
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './components/Contact';
import ServiceDetail from "./pages/ServiceDetail";
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
}

export default App;
