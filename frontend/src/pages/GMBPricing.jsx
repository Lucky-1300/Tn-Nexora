import React from "react";

const heroImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10172a"/><stop offset="100%" stop-color="#273766"/></linearGradient></defs>
  <rect width="800" height="600" rx="34" fill="url(#g)"/>
  <path d="M400 95 C510 95, 600 185, 600 295 C600 415, 485 500, 400 565 C315 500, 200 415, 200 295 C200 185, 290 95, 400 95Z" fill="#0f172a" stroke="#60a5fa" stroke-opacity=".4" stroke-width="7"/>
  <circle cx="400" cy="295" r="80" fill="#111827" stroke="#22d3ee" stroke-width="10"/>
  <circle cx="400" cy="295" r="30" fill="#22d3ee"/>
  <path d="M400 180 L400 265" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
  <path d="M340 295 L460 295" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
</svg>
`)}`;

const plans = [
  {
    name: "BRONZE",
    price: "$350",
    features: [
      "5 Number of Keywords",
      "One Time GMB Analysis",

      "PRE-OPTIMIZATION ANALYSIS",
      "Competitor Analysis",
      "Geographic Keywords Research & Analysis",
      "Baseline Ranking Check",
      "Business category Analysis",
      "Opening date check",
      "Contact information Analysis",
      "Social profiles Analysis",
      "Service area Analysis",
      "Content optimization",
      "Business hours Analysis",

      "GMB OPTIMIZATION ACTIVITIES",
      "Description Optimization",
      "Content Optimization",
      "Business category Optimization",
      "Opening date",
      "Contact information",
      "Social profiles Optimization",
      "Service area optimization",
      "Business hours",
      "Special hours",
      "Add more hours",
      "From the business",
      "Accessibility",
      "Amenities",
      "Crowd",
      "Planning (Appointment required)",
      "Service options (Language assistance)",
      "GMB FAQ Creation",

      "OFF-PAGE GMB OPTIMIZATION",
      "1 Article Writing",
      "1 Article Submissions",
      "5 Article Marketing",
      "5 Local Directories Posting",
      "2 Business Listing",
      "Google Places Citations",
      "1 Blog Writing",
      "1 Blog Submission",
      "5 Blog Marketing",
      "5 GMB Image Sharing",
      "5 Social Bookmarking",
      "5 GMB Q&A Post",
      "3 Profile Creation",
      "Review Collection",
      "5 Reviews (Client Provided)",

      "REPORTS",
      "Monthly GMB Analytics Report",
      "Monthly Keywords Ranking Report",
      "Monthly Off Page Report",
      "Review Report",
      "GMB Post Report",
    ],
  },
  {
    name: "GOLD",
    price: "$550",
    highlight: true,
    features: [
      "10 Number of Keywords",
      "One Time GMB Analysis",

      "PRE-OPTIMIZATION ANALYSIS",
      "Competitor Analysis",
      "Geographic Keywords Research & Analysis",
      "Baseline Ranking Check",
      "Business category Analysis",
      "Opening date check",
      "Contact information Analysis",
      "Social profiles Analysis",
      "Service area Analysis",
      "Content optimization",
      "Business hours Analysis",

      "GMB OPTIMIZATION ACTIVITIES",
      "Description Optimization",
      "Content Optimization",
      "Business category Optimization",
      "Opening date",
      "Contact information",
      "Social profiles Optimization",
      "Service area optimization",
      "Business hours",
      "Special hours",
      "Add more hours",
      "From the business",
      "Accessibility",
      "Amenities",
      "Crowd",
      "Planning (Appointment required)",
      "Service options (Language assistance)",
      "GMB FAQ Creation",

      "OFF-PAGE GMB OPTIMIZATION",
      "2 Article Writing",
      "5 Article Submissions",
      "10 Article Marketing",
      "10 Local Directories Posting",
      "5 Business Listing",
      "2 Google Places Citations",
      "2 Blog Writing",
      "5 Blog Submission",
      "10 Blog Marketing",
      "10 GMB Image Sharing",
      "10 Social Bookmarking",
      "10 GMB Q&A Post",
      "6 Profile Creation",
      "Review Collection",
      "10 Reviews (Client Provided)",

      "REPORTS",
      "Monthly GMB Analytics Report",
      "Monthly Keywords Ranking Report",
      "Monthly Off Page Report",
      "Review Report",
      "GMB Post Report",
    ],
  },
  {
    name: "PLATINUM",
    price: "$800",
    features: [
      "15 Number of Keywords",
      "One Time GMB Analysis",

      "PRE-OPTIMIZATION ANALYSIS",
      "Competitor Analysis",
      "Geographic Keywords Research & Analysis",
      "Baseline Ranking Check",
      "Business category Analysis",
      "Opening date check",
      "Contact information Analysis",
      "Social profiles Analysis",
      "Service area Analysis",
      "Content optimization",
      "Business hours Analysis",

      "GMB OPTIMIZATION ACTIVITIES",
      "Description Optimization",
      "Content Optimization",
      "Business category Optimization",
      "Opening date",
      "Contact information",
      "Social profiles Optimization",
      "Service area optimization",
      "Business hours",
      "Special hours",
      "Add more hours",
      "From the business",
      "Accessibility",
      "Amenities",
      "Crowd",
      "Planning (Appointment required)",
      "Service options (Language assistance)",
      "GMB FAQ Creation",

      "OFF-PAGE GMB OPTIMIZATION",
      "3 Article Writing",
      "10 Article Submissions",
      "15 Article Marketing",
      "20 Local Directories Posting",
      "10 Business Listing",
      "4 Google Places Citations",
      "3 Blog Writing",
      "10 Blog Submission",
      "15 Blog Marketing",
      "15 GMB Image Sharing",
      "20 Social Bookmarking",
      "15 GMB Q&A Post",
      "10 Profile Creation",
      "2 Review Collection",
      "15 Reviews (Client Provided)",

      "REPORTS",
      "Monthly GMB Analytics Report",
      "Monthly Keywords Ranking Report",
      "Monthly Off Page Report",
      "Review Report",
      "GMB Post Report",
    ],
  },
];

export default function GMBPricing() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.95),rgba(10,15,28,1))]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
              Google Business Profile
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              GMB pricing for stronger local visibility and customer discovery.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Improve your Google Business presence with a structured local SEO
              package that matches the project theme, removes side spacing, and
              adds more useful content across the page.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
              >
                Request local audit
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
                alt="Google Business Profile visual"
                style={{ objectPosition: "center bottom" }}
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
            Pick the plan that fits your local SEO goals, content needs, and
            review-building targets.
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
                <p className="mt-1 text-sm text-white/55">monthly</p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {plan.features.map((feature, i) => {
                  const isHeading = feature === feature.toUpperCase();

                  return (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${
                        isHeading ? "mt-4 font-semibold text-indigo-300" : ""
                      }`}
                    >
                      {!isHeading && (
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-[10px] font-bold text-indigo-300">
                          ✓
                        </span>
                      )}
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={`/contact?service=gmb&plan=${encodeURIComponent(plan.name)}`}
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}