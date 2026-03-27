import { Link } from "react-router-dom";
const reviews = [
  {
    name: "Sarah Anderson",
    company: "E-Commerce Solutions",
    tag: "Digital Marketing",
    review:
      '"TN Nexora increased our online sales by 150% in just 3 months. Their digital marketing strategy was exactly what we needed."',
    rating: 5,
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=500&fit=crop",
  },
  {
    name: "James Mitchell",
    company: "Tech Startup Inc",
    tag: "SEO & Content",
    review:
      '"The team\'s expertise in SEO and content strategy transformed our online presence. Highly professional and results-driven."',
    rating: 5,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=500&h=500&fit=crop",
  },
  {
    name: "Emma Davis",
    company: "Healthcare Services",
    tag: "Lead Generation",
    review:
      '"Exceptional service! TN Nexora helped us reach our target audience effectively. Definitely recommend their services."',
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