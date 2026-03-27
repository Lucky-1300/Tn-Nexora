import React from "react";

const plans = [
  {
    name: "BASIC (FB, INSTA, TWITTER)",
    price: "$350",
    features: [
      "Organic Promotion",
      "Competitor Analysis",
      "Strategy formation & hashtag creation",
      "Monthly creative creation",
      "10 Monthly postings",
      "Account Management",
      "Engagement with active communities and groups",
      "Network build-up",
      "Engagement with third-party posts",
      "Content optimization",
      "Paid Promotion ❌",
      "Budget estimate ❌",
      "Setting up campaigns ❌",
      "Ad creative creation ❌",
      "Daily account optimization ❌",
      "Conversion tracking (Google Analytics) ❌",
      "Remarketing ❌",
      "Customer Support (Phone & Email)",
    ],
  },
  {
    name: "STANDARD",
    price: "$550",
    highlight: true,
    features: [
      "Organic Promotion",
      "Competitor Analysis",
      "Strategy formation & hashtag creation",
      "Monthly creative creation",
      "15 Monthly postings",
      "Account Management",
      "Engagement with active communities and groups",
      "Network build-up",
      "Engagement with third-party posts",
      "Content optimization",
      "Paid Promotion ✔",
      "Budget estimate ✔",
      "Setting up campaigns ✔",
      "Ad creative creation ✔",
      "Daily account optimization ✔",
      "Conversion tracking (Google Analytics) ✔",
      "Remarketing ❌",
      "Customer Support (Priority)",
    ],
  },
  {
    name: "PREMIUM",
    price: "$800",
    features: [
      "Organic Promotion",
      "Competitor Analysis",
      "Strategy formation & hashtag creation",
      "Monthly creative creation",
      "20 Monthly postings",
      "Account Management",
      "Engagement with active communities and groups",
      "Network build-up",
      "Engagement with third-party posts",
      "Content optimization",
      "Paid Promotion ✔",
      "Budget estimate ✔",
      "Setting up campaigns ✔",
      "Ad creative creation ✔",
      "Daily account optimization ✔",
      "Conversion tracking (Google Analytics) ✔",
      "Remarketing ✔",
      "Customer Support (Dedicated Manager)",
    ],
  },
];

export default function SMOPricing() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-black py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          SMO Pricing
        </h1>
        <p className="text-white/60 mt-2 text-sm">
          Home / Pricing / SMO
        </p>
      </div>

      {/* Section */}
      <div className="text-center mt-12 mb-8 px-4">
        <span className="text-indigo-400 text-xs uppercase font-semibold tracking-wider">
          Our Pricing
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
          The Best Price Just For You
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 pb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col transition-all duration-300 hover:scale-105 ${
              plan.highlight
                ? "border-indigo-500/60 shadow-indigo-500/20 scale-105"
                : ""
            }`}
          >
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              {plan.name}
            </h3>

            {/* Features */}
            <ul className="text-sm text-white/80 space-y-2 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className={`mt-1 text-xs ${
                      feature.includes("❌")
                        ? "text-red-400"
                        : "text-indigo-400"
                    }`}
                  >
                    {feature.includes("❌") ? "✖" : "✔"}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-auto text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {plan.price}
              </div>
              <p className="text-xs text-white/50 mb-4">per month</p>

              <button className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:scale-105 transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}