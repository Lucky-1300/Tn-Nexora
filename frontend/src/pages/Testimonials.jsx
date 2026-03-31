import { useEffect } from 'react';
import VarunBatraImg from '../assets/VarunBatra.png';
import JamesMitchellImg from '../assets/JamesMitchell.png';
import JunSeoLeeImg from '../assets/Jun-SeoLee.png';

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allTestimonials = [
    {
      id: 1,
      name: "Varun Batra",
      company: "E-Commerce Solutions",
      image: VarunBatraImg ,
      text: "TN Nexora increased our online sales by 150% in just 3 months. Their digital marketing strategy was exactly what we needed.",
      service: "Digital Marketing",
      rating: 5
    },
    {
      id: 2,
      name: "James Mitchell",
      company: "Tech Startup Inc",
      image: JamesMitchellImg ,
      text: "The team's expertise in SEO and content strategy transformed our online presence. Highly professional and results-driven.",
      service: "SEO & Content",
      rating: 5
    },
    {
      id: 3,
      name: "Jun-Seo Lee",
      company: "Healthcare Services",
      image: JunSeoLeeImg ,
      text: "Exceptional service! TN Nexora helped us reach our target audience effectively. Definitely recommend their services.",
      service: "Lead Generation",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "Financial Consultancy",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=500&h=500&fit=crop",
      text: "Outstanding results with their PPC campaigns. ROI increased significantly within the first month.",
      service: "PPC Marketing",
      rating: 5
    },
    {
      id: 5,
      name: "Jennifer Wilson",
      company: "Fashion Retail Brand",
      image: "https://images.pexels.com/photos/1181635/pexels-photo-1181635.jpeg?w=500&h=500&fit=crop",
      text: "TN Nexora's social media strategy boosted our engagement by 300%. They truly understand digital marketing.",
      service: "Social Media",
      rating: 5
    },
    {
      id: 6,
      name: "David Rodriguez",
      company: "Real Estate Agency",
      image: "https://images.pexels.com/photos/1181804/pexels-photo-1181804.jpeg?w=500&h=500&fit=crop",
      text: "Professional and innovative approach. They delivered exactly what was promised and exceeded our expectations.",
      service: "Web Development",
      rating: 5
    },
    {
      id: 7,
      name: "Lisa Thompson",
      company: "Beauty Brand",
      image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?w=500&h=500&fit=crop",
      text: "Their creative content strategy helped us build a loyal customer base. The results have been phenomenal!",
      service: "Content Marketing",
      rating: 5
    },
    {
      id: 8,
      name: "Robert Johnson",
      company: "Legal Services Firm",
      image: "https://images.pexels.com/photos/2220294/pexels-photo-2220294.jpeg?w=500&h=500&fit=crop",
      text: "Excellent service and support throughout our entire project. TN Nexora truly goes above and beyond.",
      service: "Web Development",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[40vh] text-center px-4 py-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/40 via-purple-700/30 to-indigo-900/20 blur-2xl opacity-70" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl text-white">
            Our Efforts Speak
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Read what our satisfied clients have to say about their experience with TN Nexora
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((testimonial) => (
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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Ready to Work With Us?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of satisfied clients who have transformed their business with TN Nexora
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg transition transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>
    </>
  );
}
