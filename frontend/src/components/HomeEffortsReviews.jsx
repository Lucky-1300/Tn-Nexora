
import { Link } from "react-router-dom";
import { useTheme } from './ThemeWrapper';

const reviews = [
  {
    name: "Varun Batra",
    company: "E-Commerce Solutions",
    tag: "Digital Marketing",
    review:
      '"TN Nexora helped us improve our digital marketing efforts in a structured way. Earlier, we were trying different things but nothing was giving consistent results. Their team analyzed everything and created a proper plan. After implementing their strategies, we saw a steady improvement in leads and visibility. It wasn’t overnight, but the growth was real and sustainable."',
    rating: 5,
    image:
      "/VarunBatra.png",
  },
  {
    name: "James Mitchell",
    company: "Tech Startup Inc",
    tag: "SEO & Content",
    review:
      '"Working with TN Nexora has been easy and comfortable. They understood what we needed and handled everything in a proper way. The team stays active and keeps things clear, which makes the process simple to follow. We appreciate their steady work and the improvement we have noticed over time. Overall, it has been a good experience working with them."',
    rating: 5,
    image:
      "/JamesMitchell.png",
  },
  {
    name: "Jun-Seo Lee",
    company: "Healthcare Services",
    tag: "Lead Generation",
    review:
      '"Digital marketing can be confusing sometimes, especially when you don’t have much technical knowledge. TN Nexora made things simpler for us. They guided us step by step and helped us understand what’s important and what’s not.Their support has been consistent, and we never felt lost during the process. That kind of guidance really helps when you’re trying to grow your business online."',
    rating: 5,
    image:
      "/Jun-SeoLee.png",
  },
];

export default function HomeEffortsReviews() {
  const { isDark, bgColor } = useTheme();

  return (
    <section className={`max-w-7xl mx-auto py-5 px-4 ${bgColor}`}>
      <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-2 ${isDark ? 'text-white' : 'text-orange-500'}`}>
        Our Efforts Speak
      </h2>
      <p className={`text-center mb-12 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        See what our clients have to say about working with TN Nexora
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-10 items-stretch">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`h-full rounded-2xl shadow-lg overflow-hidden flex flex-col ${isDark ? 'bg-[#181e2a] border-white/10' : 'bg-orange-50/50 border-orange-300/40'} border`}
          >
            <div className="h-56 overflow-hidden bg-black flex items-center justify-center">
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className={`font-semibold text-lg mb-1 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                {r.name}
              </div>
              <div className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{r.company}</div>
              <div className={`text-xs font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-orange-500'}`}>
                {r.tag}
              </div>
              <div className={`text-sm mb-4 flex-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{r.review}</div>
              <div className="flex gap-1 mt-auto mb-0">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/testimonials">
          <button className={`px-8 py-3 rounded-xl font-semibold shadow-lg transition text-lg text-white ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'}`}>
            View All Reviews
          </button>
        </Link>
      </div>
    </section>
  );
}
