import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '../components/ThemeWrapper';

export default function About() {
  const { isDark, bgColor, } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      {/* <section className={`relative flex flex-col items-center justify-center min-h-[25vh] text-center px-4 py-6 ${bgColor}`}> */}
      <section className={`relative flex flex-col items-center justify-center min-h-[25vh] text-center px-4 py-6 ${bgColor}`}>
        <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-br from-blue-600/40 via-purple-700/30 to-indigo-900/20' : 'bg-gradient-to-br from-orange-400/20 via-orange-300/10 to-orange-200/10'} blur-2xl opacity-70`} />
        <span className={`inline-block mb-4 px-4 py-2 ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-400/20 text-orange-600'} rounded-full text-sm font-semibold`}>
          ABOUT TN NEXORA
        </span>
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Digital Marketing That Matters To Your Success
        </h1>
        <p className={`text-lg ${isDark ? 'text-white/80' : 'text-gray-700'} max-w-2xl`}>
          Our marketing efforts are to achieve your business goals no matter
          what.
        </p>
      </section>

      {/* About Section with Image */}
      <section className={`py-20 px-4 ${bgColor}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/About.jpeg"
                alt="TN Nexora Team"
                className="rounded-xl shadow-2xl object-cover w-full h-80 md:h-96"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-orange-500'}`}>
                  Digital Era Experts
                </h2>
                <p className={isDark ? 'text-white/80' : 'text-gray-700'}>
                  We are fully equipped with digital tools and resources to help
                  you
                </p>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-orange-500'}`}>
                  <span className="text-2xl">✓</span> Right Size
                </h3>
                <p className={isDark ? 'text-white/80' : 'text-gray-700'}>
                  We are fully equipped with digital tools and resources to help
                  you
                </p>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-orange-500'}`}>
                  <span className="text-2xl">✓</span> Excellent Support
                </h3>
                <p className={isDark ? 'text-white/80' : 'text-gray-700'}>
                  We are fully equipped with digital tools and resources to help
                  you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision, Mission, Support, Awards */}
      <section className={`py-12 px-4 ${isDark ? 'bg-white/5' : 'bg-orange-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Vision */}
            <div className={`rounded-2xl p-8 hover:scale-105 transition ${isDark ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-400/30' : 'bg-orange-100/50 border-orange-300/50'} border`}>
              <div className="text-4xl mb-4">👁️</div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>Our Vision</h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                We want every business receives high-quality digital marketing
                and guaranteed growth.
              </p>
            </div>

            {/* Mission */}
            <div className={`rounded-2xl p-8 hover:scale-105 transition ${isDark ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-400/30' : 'bg-orange-100/50 border-orange-300/50'} border`}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>Our Mission</h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                We were founded with a mission to deliver world-class services
                at a revolutionary price.
              </p>
            </div>

            {/* Support */}
            <div className={`rounded-2xl p-8 hover:scale-105 transition ${isDark ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-400/30' : 'bg-orange-100/50 border-orange-300/50'} border`}>
              <div className="text-4xl mb-4">🎧</div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>Our Support</h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                We believe in offering personalized support for your best
                experience.
              </p>
            </div>

            {/* Awards */}
            <div className={`rounded-2xl p-8 hover:scale-105 transition ${isDark ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-400/30' : 'bg-orange-100/50 border-orange-300/50'} border`}>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>Our Awards</h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                Google and HubSpot have awarded us with digital and social media
                marketing certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-12 px-4 ${bgColor}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className={`inline-block mb-4 px-4 py-2 ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-400/20 text-orange-600'} rounded-full text-sm font-semibold`}>
              WHY CHOOSE US
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-orange-500'}`}>
              We Provide the Best Services For Your Digital Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <div className="space-y-6">
              <p className={`text-lg ${isDark ? 'text-white/80' : 'text-gray-800'}`}>
                TN Nexora is all about equipping businesses with the best tools
                for the ride ahead. We have empowered brands around the world in
                building IT strategies and tactical capabilities.
              </p>

              <div className="space-y-4">
                {/* Save Your Time */}
                <div className="flex gap-3">
                  <div className="text-3xl">⏱️</div>
                  <div>
                    <h4 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                      Save Your Time
                    </h4>
                    <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                      Our simplified approach to tackling a project saves time
                      and reduces your involvement. We blow your mind with
                      exceptional results.
                    </p>
                  </div>
                </div>

                {/* Affordable Price */}
                <div className="flex gap-3">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h4 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                      Affordable Price
                    </h4>
                    <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                      We assure you that our pricing strategy fits your budget.
                      We are more on the growth side than money.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                {/* Best Strategy */}
                <div className="flex gap-3">
                  <div className="text-3xl">💡</div>
                  <div>
                    <h4 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                      Best Strategy
                    </h4>
                    <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                      Each of our teams is dedicated to achieving one goal. So,
                      our strategies work to bring sales to your business.
                    </p>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="flex gap-3">
                  <div className="text-3xl">🎧</div>
                  <div>
                    <h4 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                      24/7 Support
                    </h4>
                    <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                      Reach out to us 24 hours a day, and we will help you in
                      the best possible way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className={`py-12 px-4 ${isDark ? 'bg-white/5' : 'bg-orange-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`inline-block mb-4 px-4 py-2 ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-400/20 text-orange-600'} rounded-full text-sm font-semibold`}>
              OUR PROCESS
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-orange-500'}`}>
              Easy Steps To Get Your Solution
            </h2>
            <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
              We follow a completely transparent process for each of our
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                  💼
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                Book A Service
              </h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                To get started with us, book a service based on your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                  👥
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                Start Consultation
              </h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                We share details about how we bring success to your door through
                our service.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${isDark ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-full flex items-center justify-center text-3xl shadow-lg`}>
                  📊
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-orange-600'}`}>
                Check Your Growth
              </h3>
              <p className={isDark ? 'text-white/80' : 'text-gray-800'}>
                We keep you updated about every single progress or result of
                your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-12 px-4 overflow-hidden ${bgColor}`}>
        <div className={`absolute inset-0 -z-10 ${isDark ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100'}`} />
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            src="/About.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-orange-600'}`}>
            Need Advice to Market Your Business Digitally?
          </h2>
          <p className={`mb-8 max-w-2xl mx-auto text-lg ${isDark ? 'text-white/80' : 'text-gray-800'}`}>
            Schedule a call or meeting with us to discuss your needs and get the
            best productive update from us.
          </p>
          <Link
            to="/contact"
            className={`inline-block px-8 py-4 rounded-full text-white font-bold text-lg transition transform hover:scale-105 ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
