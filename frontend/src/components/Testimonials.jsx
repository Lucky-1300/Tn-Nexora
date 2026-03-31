import { Link } from 'react-router-dom';
import VarunBatraImg from '../assets/VarunBatra.png';
import JamesMitchellImg from '../assets/JamesMitchell.png';
import JunSeoLeeImg from '../assets/Jun-SeoLee.png';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Varun Batra",
      company: "E-Commerce Solutions",
      image: VarunBatraImg ,
      text: "TN Nexora increased our online sales by 150% in just 3 months. Their digital marketing strategy was exactly what we needed.",
      service: "Digital Marketing"
    },
    {
      id: 2,
      name: "James Mitchell",
      company: "Tech Startup Inc",
      image: JamesMitchellImg ,
      text: "The team's expertise in SEO and content strategy transformed our online presence. Highly professional and results-driven.",
      service: "SEO & Content"
    },
    {
      id: 3,
      name: "Jun-Seo Lee",
      company: "Healthcare Services",
      image: JunSeoLeeImg ,
      text: "Exceptional service! TN Nexora helped us reach our target audience effectively. Definitely recommend their services.",
      service: "Lead Generation"
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "Financial Consultancy",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=500&h=500&fit=crop",
      text: "Outstanding results with their PPC campaigns. ROI increased significantly within the first month.",
      service: "PPC Marketing"
    },
    {
      id: 5,
      name: "Jennifer Wilson",
      company: "Fashion Retail Brand",
      image: "https://images.pexels.com/photos/1181635/pexels-photo-1181635.jpeg?w=500&h=500&fit=crop",
      text: "TN Nexora's social media strategy boosted our engagement by 300%. They truly understand digital marketing.",
      service: "Social Media"
    },
    {
      id: 6,
      name: "David Rodriguez",
      company: "Real Estate Agency",
      image: "https://images.pexels.com/photos/1181804/pexels-photo-1181804.jpeg?w=500&h=500&fit=crop",
      text: "Professional and innovative approach. They delivered exactly what was promised and exceeded our expectations.",
      service: "Web Development"
    },
    {
      id: 7,
      name: "Lisa Thompson",
      company: "Beauty Brand",
      image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?w=500&h=500&fit=crop",
      text: "Their creative content strategy helped us build a loyal customer base. The results have been phenomenal!",
      service: "Content Marketing"
    },
    {
      id: 8,
      name: "Robert Johnson",
      company: "Legal Services Firm",
      image: "https://images.pexels.com/photos/2220294/pexels-photo-2220294.jpeg?w=500&h=500&fit=crop",
      text: "Excellent service and support throughout our entire project. TN Nexora truly goes above and beyond.",
      service: "Web Development"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Efforts Speak</h2>
          <p className="text-white/80 max-w-2xl mx-auto">See what our clients have to say about working with TN Nexora</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300 border border-blue-500/20 shadow-lg"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-white font-semibold mb-1">{testimonial.name}</p>
                <p className="text-white/60 text-sm mb-3">{testimonial.company}</p>
                <p className="text-blue-400 text-xs font-semibold mb-3">{testimonial.service}</p>
                <p className="text-white/80 text-sm leading-relaxed">"{testimonial.text}"</p>
                
                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link to="/testimonials">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold transition transform hover:scale-105">
              View All Reviews
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
