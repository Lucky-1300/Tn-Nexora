import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] text-center px-4 py-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/40 via-purple-700/30 to-indigo-900/20 blur-2xl opacity-70" />
        <span className="inline-block mb-4 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
          ABOUT TN NEXORA
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl text-white">
          Digital Marketing That Matters To Your Success
        </h1>
        <p className="text-lg text-white/80 max-w-2xl">
          Our marketing efforts are to achieve your business goals no matter
          what.
        </p>
      </section>

      {/* About Section with Image */}
      <section className="py-20 px-4">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Digital Era Experts
                </h2>
                <p className="text-white/80">
                  We are fully equipped with digital tools and resources to help
                  you
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                  <span className="text-2xl">✓</span> Right Size
                </h3>
                <p className="text-white/80">
                  We are fully equipped with digital tools and resources to help
                  you
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                  <span className="text-2xl">✓</span> Excellent Support
                </h3>
                <p className="text-white/80">
                  We are fully equipped with digital tools and resources to help
                  you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision, Mission, Support, Awards */}
      <section className="py-12 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-3 text-white">Our Vision</h3>
              <p className="text-white/80">
                We want every business receives high-quality digital marketing
                and guaranteed growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-white">Our Mission</h3>
              <p className="text-white/80">
                We were founded with a mission to deliver world-class services
                at a revolutionary price.
              </p>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-bold mb-3 text-white">Our Support</h3>
              <p className="text-white/80">
                We believe in offering personalized support for your best
                experience.
              </p>
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-white">Our Awards</h3>
              <p className="text-white/80">
                Google and HubSpot have awarded us with digital and social media
                marketing certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              We Provide the Best Services For Your Digital Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-white/80 text-lg">
                TN Nexora is all about equipping businesses with the best tools
                for the ride ahead. We have empowered brands around the world in
                building IT strategies and tactical capabilities.
              </p>

              <div className="space-y-4">
                {/* Save Your Time */}
                <div className="flex gap-3">
                  <div className="text-3xl">⏱️</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1 text-white">
                      Save Your Time
                    </h4>
                    <p className="text-white/80">
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
                    <h4 className="text-2xl font-bold mb-1 text-white">
                      Affordable Price
                    </h4>
                    <p className="text-white/80">
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
                    <h4 className="text-2xl font-bold mb-1 text-white">
                      Best Strategy
                    </h4>
                    <p className="text-white/80">
                      Each of our teams is dedicated to achieving one goal. So,
                      our strategies work to bring sales to your business.
                    </p>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="flex gap-3">
                  <div className="text-3xl">🎧</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1 text-white">
                      24/7 Support
                    </h4>
                    <p className="text-white/80">
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
      <section className="py-12 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Easy Steps To Get Your Solution
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We follow a completely transparent process for each of our
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  💼
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Book A Service
              </h3>
              <p className="text-white/80">
                To get started with us, book a service based on your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  👥
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Start Consultation
              </h3>
              <p className="text-white/80">
                We share details about how we bring success to your door through
                our service.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  📊
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Check Your Growth
              </h3>
              <p className="text-white/80">
                We keep you updated about every single progress or result of
                your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            src="/About.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Need Advice to Market Your Business Digitally?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Schedule a call or meeting with us to discuss your needs and get the
            best productive update from us.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg transition transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
