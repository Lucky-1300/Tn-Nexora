import React, { useRef, useState, useEffect } from "react";
import api from "../services/api";
import Services from "../components/Services";
import HomeEffortsReviews from "../components/HomeEffortsReviews";
import Contact from "../components/Contact";
import Team from "../components/Team";
import HomeHeroBrandSection from "../components/HomeHeroBrandSection";

export default function Home() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white">
      <main className="flex flex-col gap-0">
        {/* Hero Section with Video */}
        <section
          id="home"
          ref={videoRef}
          className="relative flex flex-col items-center justify-center text-center py-0 px-0 bg-[#0a0f1c] overflow-hidden"
        >
          {isVisible && (
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
          )}
          <HomeHeroBrandSection />
        </section>

        {/* Our Services Section */}
        <section className="pt-8 pb-4">
          <Services />
        </section>

        {/* Our Team Section */}
        <section className="pt-0 pb-4">
          <Team />
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
