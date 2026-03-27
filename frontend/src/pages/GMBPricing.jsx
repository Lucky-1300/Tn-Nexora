import React from "react";

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
    <div className="bg-[#0a0f1c] min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-black py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          GMB Package
        </h1>
        <p className="text-white/60 mt-2 text-sm">
          Home / Pricing / GMB
        </p>
      </div>

      {/* Section */}
      <div className="text-center mt-20 mb-12 px-4">
        <span className="text-indigo-400 text-xs uppercase font-semibold tracking-wider">
          Our Pricing
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
          The Best Price Just For You
        </h2>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">
          Boost your local visibility and attract more customers with optimized Google Business strategies.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 pb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              plan.highlight
                ? "border-indigo-500/60 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
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
                <li
                  key={i}
                  className={`flex items-start gap-2 ${
                    feature === feature.toUpperCase()
                      ? "text-indigo-300 font-semibold mt-4"
                      : ""
                  }`}
                >
                  {feature !== feature.toUpperCase() && (
                    <span className="text-indigo-400 text-xs mt-1">✔</span>
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-auto text-center">
              <div className="text-2xl font-bold text-indigo-400">
                {plan.price}
              </div>
              <p className="text-xs text-white/50 mb-4">monthly</p>

              <button className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:scale-105 transition">
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}