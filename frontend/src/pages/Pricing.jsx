
import React from "react";
import { useTheme } from '../components/ThemeWrapper';

const heroImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#243b74"/></linearGradient></defs>
  <rect width="800" height="600" rx="34" fill="url(#g)"/>
  <rect x="90" y="90" width="620" height="420" rx="28" fill="#0b1222" stroke="#7c8cff" stroke-opacity=".35"/>
  <rect x="130" y="340" width="70" height="120" rx="12" fill="#5b6cff"/>
  <rect x="230" y="300" width="70" height="160" rx="12" fill="#2fb6ff"/>
  <rect x="330" y="260" width="70" height="200" rx="12" fill="#8a5cff"/>
  <rect x="430" y="310" width="70" height="150" rx="12" fill="#4c7dff"/>
  <rect x="530" y="280" width="70" height="180" rx="12" fill="#60a5fa"/>
  <path d="M140 250 C240 180, 330 220, 430 160 S620 140, 680 120" stroke="#a5b4fc" stroke-width="8" fill="none" stroke-linecap="round"/>
</svg>
`)}`;



const pricingSections = [
  {
    id: 'smo',
    title: 'SMO Pricing (Social Media Optimization)',
    headline: 'Grow Your Brand with Strategic Social Media Management',
    desc: 'We help businesses build a strong presence across platforms like Instagram, Facebook, and LinkedIn with engaging content and consistent growth strategies.',
    plans: [
      {
        name: 'Basic',
        price: '₹4,999/month',
        features: ['12 Posts/month', 'Basic creatives', '1 platform'],
      },
      {
        name: 'Standard',
        price: '₹9,999/month',
        features: ['20 Posts/month', '2 platforms', 'Caption + hashtag strategy'],
        highlight: true,
      },
      {
        name: 'Premium',
        price: '₹19,999/month',
        features: ['30 Posts/month', '3 platforms', 'Reels + Stories + Analytics'],
      },
    ],
  },
  {
    id: 'ppc',
    title: 'PPC Pricing (Google Ads / Paid Ads)',
    headline: 'Get Instant Leads with High-Converting Paid Ads',
    desc: 'Drive targeted traffic and boost conversions using optimized Google Ads and paid campaigns.',
    plans: [
      {
        name: 'Starter',
        price: '₹5,999/month',
        features: ['1 Campaign setup', 'Keyword research', 'Basic optimization'],
      },
      {
        name: 'Growth',
        price: '₹12,999/month',
        features: ['3 Campaigns', 'A/B testing', 'Conversion tracking'],
        highlight: true,
      },
      {
        name: 'Pro',
        price: '₹24,999/month',
        features: ['Advanced strategy', 'Retargeting ads', 'Weekly reports'],
      },
    ],
  },
  {
    id: 'linkedin',
    title: 'LinkedIn Pricing',
    headline: 'Build Authority & Generate B2B Leads on LinkedIn',
    desc: 'We help professionals and businesses grow their presence and generate quality leads through LinkedIn.',
    plans: [
      {
        name: 'Basic',
        price: '₹3,999/month',
        features: ['Profile optimization', '8 posts/month'],
      },
      {
        name: 'Advanced',
        price: '₹8,999/month',
        features: ['16 posts/month', 'Lead generation strategy'],
        highlight: true,
      },
      {
        name: 'Elite',
        price: '₹17,999/month',
        features: ['Personal branding', 'Daily engagement', 'DM outreach'],
      },
    ],
  },
  {
    id: 'gmb',
    title: 'GMB Package (Google My Business)',
    headline: 'Rank Your Business Locally & Get More Walk-ins',
    desc: 'Optimize your Google Business profile to appear in local searches and attract nearby customers.',
    plans: [
      {
        name: 'Basic',
        price: '₹2,999/month',
        features: ['Profile setup', '5 posts/month'],
      },
      {
        name: 'Standard',
        price: '₹6,999/month',
        features: ['SEO optimization', 'Reviews management'],
        highlight: true,
      },
      {
        name: 'Premium',
        price: '₹12,999/month',
        features: ['Weekly posts', 'Local ranking boost', 'Competitor analysis'],
      },
    ],
  },
  {
    id: 'performance',
    title: 'Performance Marketing Pricing',
    headline: 'Scale Your Business with Data-Driven Marketing',
    desc: 'We focus on ROI-based marketing strategies to maximize your revenue and growth.',
    plans: [
      {
        name: 'Starter',
        price: '₹9,999/month',
        features: ['Basic funnel setup', 'Ads management'],
      },
      {
        name: 'Growth',
        price: '₹19,999/month',
        features: ['Multi-channel campaigns', 'Funnel optimization'],
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: '₹39,999/month',
        features: ['Full-scale marketing', 'Dedicated manager', 'Advanced analytics'],
      },
    ],
  },
];


function BonusSection() {
  return (
    <section className="w-full max-w-5xl mx-auto mt-16 mb-8 bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
      <div className="flex flex-wrap justify-center gap-6 text-lg text-white/80">
        <div className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> Proven Results</div>
        <div className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> Transparent Pricing</div>
        <div className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> Dedicated Support</div>
        <div className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> ROI-Focused Strategy</div>
      </div>
    </section>
  );
}


export default function Pricing() {
  const { isDark, bgColor } = useTheme();

  return (
    <div className={`${bgColor} min-h-screen flex flex-col w-full`}>
      
      <main className="flex-1 py-12 px-2 md:px-6 flex flex-col items-center w-full">
        <section className={`w-full max-w-7xl mb-16 overflow-hidden rounded-[2rem] ${isDark ? 'border-white/10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.95),rgba(10,15,28,1))]' : 'border-orange-300/40 bg-[radial-gradient(circle_at_top,_rgba(255,140,0,0.18),_transparent_40%),linear-gradient(180deg,rgba(255,250,245,0.95),rgba(255,250,245,1))]'} border px-4 py-10 sm:px-6 lg:px-8`}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 text-center lg:text-left ${isDark ? 'text-white' : 'text-orange-500'}`}>Our Pricing</h1>
              <p className={`text-lg mb-8 text-center max-w-2xl mx-auto lg:mx-0 lg:text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Choose the plan that fits your business needs. Transparent pricing, no hidden fees.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className={`absolute -inset-4 rounded-[2rem] blur-3xl transition duration-300 ${isDark ? 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20' : 'bg-gradient-to-r from-orange-400/20 to-orange-500/20'}`} />
              <div className={`relative overflow-hidden rounded-[2rem] p-4 shadow-2xl backdrop-blur transition duration-300 ${isDark ? 'border border-white/10 bg-white/5 shadow-indigo-500/10' : 'border border-orange-300/40 bg-orange-50/30 shadow-orange-200/20'}`}>
                <img
                  src={heroImage}
                  alt="Pricing and marketing visual"
                  style={{
                    objectPosition: "center center",
                  }}
                  className="h-[280px] w-full rounded-[1.5rem] object-cover object-center sm:h-[340px]"
                />
              </div>
            </div>
          </div>
        </section>

        {pricingSections.map(section => (
          <section key={section.id} className="w-full max-w-5xl mx-auto mb-16">
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 text-center ${isDark ? 'text-white' : 'text-orange-500'}`}>{section.title}</h2>
            <div className={`text-lg font-semibold mb-2 text-center ${isDark ? 'text-indigo-300' : 'text-orange-600'}`}>{section.headline}</div>
            <p className={`mb-8 text-center ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{section.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-orange-300/40 bg-orange-100/20'} backdrop-blur shadow-xl flex flex-col items-center p-8 min-h-[420px] transition duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl ${plan.highlight ? isDark ? 'scale-105 border-indigo-500/60 shadow-indigo-500/20' : 'scale-105 border-orange-500/60 shadow-orange-500/20' : ''}`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-orange-600'}`}>{plan.name}</h3>
                  <ul className="mb-8 space-y-2 text-white/80 text-sm text-left w-full max-w-xs mx-auto">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={`text-2xl font-extrabold mb-4 ${isDark ? 'text-indigo-400' : 'text-orange-500'}`}>{plan.price}</div>
                  <a
                    href={`/contact?service=${section.id}&plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full py-3 rounded-lg text-center font-semibold transition bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:scale-105`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
            {/* Decorative line removed as requested */}
            <p className="text-center text-white/70 text-lg mt-2">Have questions or need a custom solution? <span className="text-indigo-300">Contact us</span> for a personalized quote!</p>
          </section>
        ))}
        <BonusSection />
      </main>
      
    </div>
  );
}
