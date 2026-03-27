import React from "react";

const plans = [
  {
    name: "BRONZE",
    price: "$350",
    features: [
      "PERSONAL PAGE",
      "Create 10–15 targeted audience",
      "Engage with target audience",
      "Like and comment on posts",
      "Send connection invites (50/day)",
      "Follow/Unfollow targeted profiles",

      "BUSINESS PAGE",
      "Increase followers via invitations",
      "Like and comment on posts",
      "Create and post content (2/week)",

      "GROUPS & EVENTS",
      "Join relevant groups",
      "Invite connections to group",
      "Message group members",

      "LEAD GENERATION",
      "Reach out via LinkedIn messages (limited)",
      "Basic follow-ups ❌",
      "CRM integration ❌",

      "REPORTING",
      "Tracking followers ✔",
      "Tracking engagement ✔",
      "Tracking leads ❌",
    ],
  },
  {
    name: "GOLD",
    price: "$550",
    highlight: true,
    features: [
      "PERSONAL PAGE",
      "Create 20–30 targeted audience",
      "Engage with target audience",
      "Like and comment on posts",
      "Send connection invites (100/day)",
      "Follow/Unfollow targeted profiles",

      "BUSINESS PAGE",
      "Increase followers via invitations",
      "Like and comment on posts",
      "Create and post content (3/week)",

      "GROUPS & EVENTS",
      "Join relevant groups",
      "Invite connections to group",
      "Message group members",
      "Event outreach messaging ✔",

      "LEAD GENERATION",
      "Reach out via LinkedIn messages",
      "Structured follow-ups ✔",
      "CRM integration ✔",

      "REPORTING",
      "Tracking followers ✔",
      "Tracking engagement ✔",
      "Tracking leads ✔",
    ],
  },
  {
    name: "PLATINUM",
    price: "$650",
    features: [
      "PERSONAL PAGE",
      "Create 40–60 targeted audience",
      "Engage with target audience",
      "Like and comment on posts",
      "Send connection invites (150/day)",
      "Follow/Unfollow targeted profiles",

      "BUSINESS PAGE",
      "Increase followers via invitations",
      "Like and comment on posts",
      "Create and post content (5/week)",

      "GROUPS & EVENTS",
      "Join relevant groups",
      "Invite connections to group",
      "Message group members",
      "Event outreach + automation ✔",

      "LEAD GENERATION",
      "Advanced outreach messaging",
      "Multi-step follow-ups ✔",
      "CRM + automation integration ✔",

      "REPORTING",
      "Tracking followers ✔",
      "Tracking engagement ✔",
      "Tracking leads ✔",
      "Dedicated manager ✔",
    ],
  },
];

export default function LinkedInPricing() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-black py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          LinkedIn Pricing
        </h1>
        <p className="text-white/60 mt-2 text-sm">
          Home / Pricing / LinkedIn
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
        <p className="text-white/70 mt-3 max-w-xl mx-auto">
          Build authority, generate leads, and grow your professional network with powerful LinkedIn strategies.
        </p>
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
                <li
                  key={i}
                  className={`flex items-start gap-2 ${
                    feature === feature.toUpperCase()
                      ? "text-indigo-300 font-semibold mt-3"
                      : ""
                  }`}
                >
                  {!feature.includes("PAGE") &&
                  !feature.includes("GENERATION") &&
                  !feature.includes("REPORTING") &&
                  !feature.includes("GROUPS") ? (
                    <span
                      className={`mt-1 text-xs ${
                        feature.includes("❌")
                          ? "text-red-400"
                          : "text-indigo-400"
                      }`}
                    >
                      {feature.includes("❌") ? "✖" : "✔"}
                    </span>
                  ) : null}
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