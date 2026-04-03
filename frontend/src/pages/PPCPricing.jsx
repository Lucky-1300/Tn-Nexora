import React from "react";

const heroImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1f3b74"/></linearGradient></defs>
  <rect width="800" height="600" rx="34" fill="url(#g)"/>
  <rect x="95" y="100" width="610" height="400" rx="28" fill="#0b1222" stroke="#60a5fa" stroke-opacity=".3"/>
  <rect x="150" y="360" width="52" height="100" rx="10" fill="#60a5fa"/>
  <rect x="230" y="320" width="52" height="140" rx="10" fill="#7c3aed"/>
  <rect x="310" y="275" width="52" height="185" rx="10" fill="#22d3ee"/>
  <rect x="390" y="330" width="52" height="130" rx="10" fill="#818cf8"/>
  <rect x="470" y="290" width="52" height="170" rx="10" fill="#4c7dff"/>
  <rect x="550" y="250" width="52" height="210" rx="10" fill="#2fb6ff"/>
  <path d="M150 240 C250 220, 340 170, 430 180 S590 140, 650 120" stroke="#c7d2fe" stroke-width="8" fill="none" stroke-linecap="round"/>
</svg>
`)}`;

const plans = [
  {
    name: "BASIC",
    price: "$350",
    features: [
      "Setup Fee ₹200",
      "Free Trial 10 Days Free Trial",
      "Advertising Budget ₹0 - ₹50,000 / Month",
      "Full Optimization 3 Months",
      "Ad Groups Up To 5",
      "Ads per Ad Group Up to 2 Ads per Ad Group (Max 10 Ads)",
      "Keywords Up to 50",
      "Negative Keywords",
      "Conversion Tracking",
      "Monthly Reporting",
      "No Contracts",
      "Ad Networks Google",
      "Mobile Ads",
      "Call Extensions",
      "Sitelink Extensions",
      "Remarketing ❌",
      "Monthly Conference Calls ❌",
      "Display / Image Ads ❌",
    ],
  },
  {
    name: "GOLD",
    price: "$550",
    highlight: true,
    features: [
      "Setup Fee ₹200",
      "Free Trial 10 Days Free Trial",
      "Advertising Budget ₹50,000 - ₹1,50,000 / Month",
      "Full Optimization 3 Months",
      "Ad Groups Up To 10",
      "Ads per Ad Group Up to 2 Ads per Ad Group (Max 20 Ads)",
      "Keywords Up to 100",
      "Negative Keywords",
      "Conversion Tracking",
      "Monthly Reporting",
      "No Contracts",
      "Ad Networks Google, Bing, Yahoo",
      "Mobile Ads",
      "Call Extensions",
      "Sitelink Extensions",
      "Remarketing ✔",
      "Monthly Conference Calls ✔",
      "Display / Image Ads ❌",
    ],
  },
  {
    name: "PLATINUM",
    price: "$800",
    features: [
      "Setup Fee ₹200",
      "Free Trial 10 Days Free Trial",
      "Advertising Budget ₹1,50,000 - ₹5,00,000 / Month",
      "Full Optimization 3 Months",
      "Ad Groups Up To 20",
      "Ads per Ad Group Up to 2 Ads per Ad Group (Max 40 Ads)",
      "Keywords Up to 200",
      "Negative Keywords",
      "Conversion Tracking",
      "Monthly Reporting",
      "No Contracts",
      "Ad Networks Google, Bing, Yahoo, FB",
      "Mobile Ads",
      "Call Extensions",
      "Sitelink Extensions",
      "Remarketing ✔",
      "Monthly Conference Calls ✔",
      "Display / Image Ads ✔",
    ],
  },
];

export default function PPCPricing() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.95),rgba(10,15,28,1))]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
              Pay Per Click
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              PPC pricing designed to bring fast, measurable leads.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              A high-performance paid ads setup for brands that want better
              visibility, stronger conversions, and a more polished digital
              presence that matches the project theme.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
              >
                Get a quote
              </a>
              <a
                href="#plans"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-indigo-400/60 hover:bg-indigo-400/10"
              >
                View packages
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur">
              <img
                src={heroImage}
                alt="PPC advertising visual"
                style={{ objectPosition: "center center" }}
                className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[380px] lg:h-[460px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Our pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            The best price just for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 leading-7">
            Pick a package based on your current budget and lead generation
            goals. Every plan includes a strong foundation for paid campaign
            success.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white/5 p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-indigo-500/10 ${
                plan.highlight
                  ? "border-indigo-400/60 ring-1 ring-indigo-400/30 lg:-mt-2"
                  : "border-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-indigo-500/20">
                  Most popular
                </div>
              )}

              <h3 className="text-center text-xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#11182a] p-5 text-center">
                <div className="text-4xl font-extrabold text-indigo-300">
                  {plan.price}
                </div>
                <p className="mt-1 text-sm text-white/55">per month</p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {plan.features.map((feature, i) => {
                  const excluded = feature.includes("❌");

                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                          excluded
                            ? "bg-red-500/15 text-red-300"
                            : "bg-indigo-500/15 text-indigo-300"
                        }`}
                      >
                        {excluded ? "×" : "✓"}
                      </span>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={`/contact?service=ppc&plan=${encodeURIComponent(plan.name)}`}
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}