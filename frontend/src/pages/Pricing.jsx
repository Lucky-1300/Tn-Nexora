


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
  return (
    <div className="bg-[#0a0f1c] min-h-screen flex flex-col w-full">
      
      <main className="flex-1 py-12 px-2 md:px-6 flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">Our Pricing</h1>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
          Choose the plan that fits your business needs. Transparent pricing, no hidden fees.
        </p>
        {pricingSections.map(section => (
          <section key={section.id} className="w-full max-w-5xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">{section.title}</h2>
            <div className="text-indigo-300 text-lg font-semibold mb-2 text-center">{section.headline}</div>
            <p className="text-white/80 mb-8 text-center">{section.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-xl flex flex-col items-center p-8 min-h-[420px] transition duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:border-indigo-500/60 ${plan.highlight ? 'scale-105 border-indigo-500/60 shadow-indigo-500/20' : ''}`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-2xl font-extrabold mb-4 text-indigo-400">{plan.price}</div>
                  <ul className="mb-8 space-y-2 text-white/80 text-sm text-left w-full max-w-xs mx-auto">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:scale-105`}>
                    Get Started
                  </button>
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
