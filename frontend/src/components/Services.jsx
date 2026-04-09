import { useNavigate } from "react-router-dom";
import { useTheme } from './ThemeWrapper';

const services = [
  {
    title: "Search Engine Optimization",
    slug: "seo",
    desc: "Improve website ranking on Google and drive organic traffic with advanced SEO strategies.",
    icon: (
      <svg
        className="w-8 h-8 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="7" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    slug: "smm",
    desc: "Grow your brand presence and engagement across all major social media platforms.",
    icon: (
      <svg
        className="w-8 h-8 text-pink-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 8h2a2 2 0 0 1 2 2v8h-6v-8a2 2 0 0 1 2-2z" />
        <path d="M7 8h2a2 2 0 0 1 2 2v8H5v-8a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: "Pay Per Click",
     slug: "ppc",
    desc: "Run targeted paid campaigns to generate leads and maximize ROI instantly.",
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 1v22M17 5H9a4 4 0 0 0 0 8h6a4 4 0 0 1 0 8H7" />
      </svg>
    ),
  },
  {
    title: "Technical SEO",
    slug: "technical-seo",
    desc: "Optimize website structure, speed, and indexing for better search performance.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "WordPress Development",
    slug: "wordpress",
    desc: "Create powerful and customizable WordPress websites tailored to your business.",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M8 12l2 6 2-6 2 6 2-6" />
      </svg>
    ),
  },
  {
    title: "Website Analysis",
    slug: "website-analysis",
    desc: "Detailed audit of your website to identify performance, SEO, and UX improvements.",
    icon: (
      <svg
        className="w-8 h-8 text-cyan-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 3v18h18" />
        <path d="M7 12l3-3 4 4 5-5" />
      </svg>
    ),
  },
  {
    title: "Brand Promotion",
     slug: "brand-promotion",
    desc: "Build a strong brand identity and increase awareness through strategic campaigns.",
    icon: (
      <svg
        className="w-8 h-8 text-red-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Video Marketing",
     slug: "video-marketing",
    desc: "Engage your audience with high-quality video content and marketing strategies.",
    icon: (
      <svg
        className="w-8 h-8 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="5" width="15" height="14" rx="2" />
        <polygon points="10 9 15 12 10 15 10 9" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
     slug: "digital-marketing",
    desc: "Complete digital marketing solutions to grow your business online effectively.",
    icon: (
      <svg
        className="w-8 h-8 text-orange-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20" />
      </svg>
    ),
  },
];

export default function Services() {
  const navigate = useNavigate();
  const { isDark, bgColor, textColor, headingColor } = useTheme();
  
  return (
   <section id="services" className={`px-4 md:px-10 lg:px-20 ${bgColor}`}>
      <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-orange-500'}`}>
        Our Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => navigate(`/services/${service.slug}`)}
            className={`${isDark ? 'bg-white/10 border-white/20 hover:shadow-blue-500/40' : 'bg-orange-100/30 border-orange-300/40 hover:shadow-orange-400/40'} backdrop-blur-lg border rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer`}
          >
            <div className="mb-4">{service.icon}</div>
            <h1 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white/90' : 'text-orange-600'}`}>
              {service.title}
            </h1>
            <p className={isDark ? 'text-white/70' : 'text-gray-700'}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}