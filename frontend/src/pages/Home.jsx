import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../components/ThemeWrapper";
import Services from "../components/Services";
import HomeEffortsReviews from "../components/HomeEffortsReviews";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Projects from "../components/Projects";
import HomeHeroBrandSection from "../components/HomeHeroBrandSection";

export default function Home() {
  const { isDark, bgColor } = useTheme();
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const videoElement = heroVideoRef.current;
    if (!videoElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadHeroVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoadHeroVideo && heroVideoRef.current) {
      const playPromise = heroVideoRef.current.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    }
  }, [shouldLoadHeroVideo]);

  return (
    <div
      className={`${bgColor} min-h-screen ${isDark ? "text-white" : "text-gray-900"}`}
    >
      <main className="flex flex-col gap-0">
        {/* Hero Section with Video */}
        <section
          id="home"
          className={`relative flex flex-col items-center justify-center text-center py-0 px-0 ${bgColor} overflow-hidden`}
        >
          <video
            ref={heroVideoRef}
            autoPlay={shouldLoadHeroVideo}
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-[500px] object-cover"
          >
            {shouldLoadHeroVideo && (
              <source
                src="https://res.cloudinary.com/doblrowxb/video/upload/v1776328207/headerVid_jyb0yt.mp4"
                type="video/mp4"
              />
            )}
            Your browser does not support the video tag.
          </video>
          <HomeHeroBrandSection />
        </section>

        {/* Our Services Section */}
        <section className="pt-8 pb-4">
          <Services />
        </section>

        {/* Projects Section (inserted before Team) */}
        <section className="pt-0 pb-4">
          <Projects />
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
