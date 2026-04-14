import { useEffect } from 'react';
import { useTheme } from '../components/ThemeWrapper';


export default function TestimonialsPage() {
  const { isDark, bgColor } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allTestimonials = [
    {
      id: 1,
      name: "Varun Batra",
      company: "E-Commerce Solutions",
      image: "/VarunBatra.png",
      text: "TN Nexora helped us improve our digital marketing efforts in a structured way. Earlier, we were trying different things but nothing was giving consistent results. Their team analyzed everything and created a proper plan. After implementing their strategies, we saw a steady improvement in leads and visibility. It wasn’t overnight, but the growth was real and sustainable",
      service: "Digital Marketing",
      rating: 5
    },
    {
      id: 2,
      name: "James Mitchell",
      company: "Tech Startup Inc",
      image: "/JamesMitchell.png",
      text: "Working with TN Nexora has been easy and comfortable. They understood what we needed and handled everything in a proper way. The team stays active and keeps things clear, which makes the process simple to follow. We appreciate their steady work and the improvement we have noticed over time. Overall, it has been a good experience working with them.",
      service: "SEO & Content",
      rating: 5
    },
    {
      id: 3,
      name: "Jun-Seo Lee",
      company: "Healthcare Services",
      image: "/Jun-SeoLee.png",
      text: "Digital marketing can be confusing sometimes, especially when you don’t have much technical knowledge. TN Nexora made things simpler for us. They guided us step by step and helped us understand what’s important and what’s not.Their support has been consistent, and we never felt lost during the process. That kind of guidance really helps when you’re trying to grow your business online.",
      service: "Lead Generation",
      rating: 5
    },
    {
      id: 4,
      name: "Sora Nakamoto",
      company: "Financial Consultancy",
      image: "/SoraNakamoto.png",
      text: "Working with TN Nexora has been a really good experience for us. Their team explains everything very clearly, which makes it easy to understand even for someone without a technical background. They make sure that we know what is being done and why it is important.The whole process felt simple and well-managed. Whenever we had questions, they were patient and ready to guide us. It never felt confusing, which is something we really appreciated.Overall, the experience has been smooth, and we feel more confident about our online presence after working with them.",
      service: "PPC Marketing",
      rating: 5
    },
    {
      id: 5,
      name: "Farah Qasim",
      company: "Fashion Retail Brand",
      image: "/FarahQasim.png",
      text: "We approached TN Nexora for social media marketing, and the results were better than expected. Their team came up with creative ideas and handled everything consistently. Our engagement slowly started improving, and we noticed more people interacting with our brand. They are also very responsive. Whenever we had a question or needed a change, they were quick to help. It felt like we were working with a team that actually cares about our growth.",
      service: "Social Media",
      rating: 5
    },
    {
      id: 6,
      name: "David Rodriguez",
      company: "Real Estate Agency",
      image: "/DavidRodriguez.png",
      text: "Our experience with TN Nexora for website development was really good. Our old website was outdated and not user-friendly. They redesigned everything from scratch and made it modern and responsive. Now the website looks much better and loads faster. We also noticed that users are spending more time on the site. Overall, the result matched what we had in mind.",
      service: "Web Development",
      rating: 5
    },
    // {
    //   id: 7,
    //   name: "Lisa Thompson",
    //   company: "Beauty Brand",
    //   image: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?w=500&h=500&fit=crop",
    //   text: "We started with TN Nexora for a small project, just to test how things go. But after seeing their work, we decided to continue with them for long-term marketing.Their team is easy to work with and doesn’t complicate things. They explain what they are doing and why they are doing it. That clarity builds trust. Over time, we’ve seen steady growth in our online presence, and we’re happy with the progress so far.",
    //   service: "Content Marketing",
    //   rating: 5
    // },
    // {
    //   id: 8,
    //   name: "Robert Johnson",
    //   company: "Legal Services Firm",
    //   image: "https://images.pexels.com/photos/2220294/pexels-photo-2220294.jpeg?w=500&h=500&fit=crop",
    //   text: "One thing we really appreciate about TN Nexora is their honesty. They don’t make unrealistic promises. Instead, they focus on what can actually be achieved and work towards it step by step. Their team is professional, easy to work with, and always open to feedback. That made the whole process comfortable for us.",
    //   service: "Web Development",
    //   rating: 5
    // }
  ];

  return (
    <>
      {/* Hero Section */}
        <section className={`relative flex flex-col items-center justify-center text-center px-4 py-8 ${bgColor}`}>
          <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-br from-blue-600/40 via-purple-700/30 to-indigo-900/20' : 'bg-gradient-to-br from-orange-400/30 via-orange-300/20 to-orange-200/20'} blur-2xl opacity-70`} />
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-2 max-w-3xl ${isDark ? 'text-white' : 'text-orange-500'}`}>
            Our Efforts Speak
          </h1>
          <p className={`text-lg max-w-2xl ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
            Read what our satisfied clients have to say about their experience with TN Nexora
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className={`py-12 px-4 ${bgColor}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`rounded-lg overflow-hidden hover:scale-105 transition duration-300 border shadow-lg ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/20' : 'bg-orange-50/50 border-orange-300/40'}`}
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
                    <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-orange-600'}`}>{testimonial.name}</p>
                    <p className={`text-sm mb-3 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{testimonial.company}</p>
                    <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-orange-500'}`}>{testimonial.service}</p>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>"{testimonial.text}"</p>
                    
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
        <section className={`relative py-12 px-4 overflow-hidden ${bgColor}`}>
          <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100'}`} />
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-orange-500'}`}>Ready to Work With Us?</h2>
            <p className={`mb-8 max-w-2xl mx-auto text-lg ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              Join hundreds of satisfied clients who have transformed their business with TN Nexora
            </p>
            <button className={`px-8 py-4 rounded-full text-white font-bold text-lg transition transform hover:scale-105 ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}>
              Get Started Today
            </button>
          </div>
        </section>
    </>
  );
}
