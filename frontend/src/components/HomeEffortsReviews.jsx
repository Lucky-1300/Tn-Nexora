
import { Link } from "react-router-dom";
const reviews = [
  {
    name: "Sarah Anderson",
    company: "E-Commerce Solutions",
    tag: "Digital Marketing",
    review:
      '"TN Nexora helped us improve our digital marketing efforts in a structured way. Earlier, we were trying different things but nothing was giving consistent results. Their team analyzed everything and created a proper plan. After implementing their strategies, we saw a steady improvement in leads and visibility. It wasn’t overnight, but the growth was real and sustainable."',
    rating: 5,
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=500&fit=crop",
  },
  {
    name: "James Mitchell",
    company: "Tech Startup Inc",
    tag: "SEO & Content",
    review:
      '"Working with TN Nexora has been easy and comfortable. They understood what we needed and handled everything in a proper way. The team stays active and keeps things clear, which makes the process simple to follow. We appreciate their steady work and the improvement we have noticed over time. Overall, it has been a good experience working with them."',
    rating: 5,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=500&h=500&fit=crop",
  },
  {
    name: "Emma Davis",
    company: "Healthcare Services",
    tag: "Lead Generation",
    review:
      '"Digital marketing can be confusing sometimes, especially when you don’t have much technical knowledge. TN Nexora made things simpler for us. They guided us step by step and helped us understand what’s important and what’s not.Their support has been consistent, and we never felt lost during the process. That kind of guidance really helps when you’re trying to grow your business online."',
    rating: 5,
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=500&h=500&fit=crop",
  },
];

export default function HomeEffortsReviews() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2">
        Our Efforts Speak
      </h2>
      <p className="text-center text-gray-300 mb-12 text-lg">
        See what our clients have to say about working with TN Nexora
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-[#181e2a] rounded-2xl shadow-lg overflow-hidden border border-white/10 flex flex-col"
          >
            <div className="h-56 w-full bg-gray-300 object-cover">
              <img
                src={r.image}
                alt={r.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-white font-semibold text-lg mb-1">
                {r.name}
              </div>
              <div className="text-gray-400 text-sm mb-1">{r.company}</div>
              <div className="text-blue-400 text-xs font-semibold mb-2">
                {r.tag}
              </div>
              <div className="text-white/80 text-sm mb-4">{r.review}</div>
              <div className="flex gap-1 mb-2">
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
          <button className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:from-blue-600 hover:to-purple-600 transition text-lg">
            View All Reviews
          </button>
        </Link>
      </div>
    </section>
  );
}
