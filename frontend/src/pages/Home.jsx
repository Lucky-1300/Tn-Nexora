

import React, { useEffect } from "react";
import { useTheme } from '../components/ThemeWrapper';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Services from '../components/Services';
import HomeEffortsReviews from '../components/HomeEffortsReviews';
import Contact from '../components/Contact';
import HomeHeroBrandSection from '../components/HomeHeroBrandSection';

export default function Home() {
  const { isDark, bgColor, textColor } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`${bgColor} min-h-screen ${isDark ? 'text-white' : 'text-gray-900'}`}>
     
      <main className="flex flex-col gap-0">
        {/* Hero Section with Video */}
        <section id="home" className={`relative flex flex-col items-center justify-center text-center py-0 px-0 ${bgColor} overflow-hidden`}>
          <video
            src="/WhatsApp%20Video%202026-03-26%20at%204.00.38%20PM.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-[500px] object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <HomeHeroBrandSection />
        </section>

        {/* Our Services Section */}
        <section className="pt-8 pb-4">
          <Services />
        </section>

        {/* Our Efforts Speak (Testimonials) */}
        <section className="pt-0 pb-4">
          <HomeEffortsReviews />
        </section>

        {/* Get In Touch (Contact) */}
        <section className="pt-0 pb-8">
          <Contact />
        </section>
      </main>
      
    </div>
  );
}
