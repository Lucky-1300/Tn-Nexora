import React, { useEffect } from "react";
import { useTheme } from '../components/ThemeWrapper';

const heroImage = "/linkedinPricing.jpeg";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen overflow-x-hidden transition duration-300 ${isDark ? 'bg-[#0a0f1c]' : 'bg-white'}`}>
      {/* Hero */}
      <section className={`relative transition duration-300 ${isDark ? 'bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.95),rgba(10,15,28,1))]' : 'bg-gradient-to-br from-orange-50 via-white to-white'}`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className={`mb-4 inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition duration-300 ${isDark ? 'border-indigo-400/30 bg-indigo-400/10 text-indigo-300' : 'border-orange-400/40 bg-orange-100/50 text-orange-700'}`}>
              LinkedIn Growth
            </p>
            <h1 className={`text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              LinkedIn pricing for authority, outreach, and lead generation.
            </h1>
            <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg transition duration-300 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
              Build a stronger professional presence with a structured LinkedIn
              strategy that fits the project’s dark indigo theme and keeps the
              layout clean, balanced, and content-rich.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className={`rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500 shadow-indigo-500/20' : 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/20'}`}
              >
                Start LinkedIn growth
              </a>
              <a
                href="#plans"
                className={`rounded-full border px-6 py-3 font-semibold transition ${isDark ? 'border-white/15 bg-white/5 text-white hover:border-indigo-400/60 hover:bg-indigo-400/10' : 'border-orange-400/40 bg-orange-100/30 text-orange-700 hover:border-orange-500/60 hover:bg-orange-200/40'}`}
              >
                View plans
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className={`absolute -inset-4 rounded-[2rem] blur-3xl transition duration-300 ${isDark ? 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20' : 'bg-gradient-to-r from-orange-400/20 to-orange-500/20'}`} />
            <div className={`relative overflow-hidden rounded-[2rem] p-4 shadow-2xl backdrop-blur transition duration-300 ${isDark ? 'border border-white/10 bg-white/5 shadow-indigo-500/10' : 'border border-orange-300/40 bg-orange-50/30 shadow-orange-200/20'}`}>
              <img
                src={heroImage}
                alt="LinkedIn growth visual"
                style={{
                  objectPosition: "center top",
                }}
                className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[380px] lg:h-[460px]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Plans */}
      <section id="plans" className={`mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 transition duration-300 ${isDark ? '' : ''}`}>
        <div className="text-center">
          <span className={`text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${isDark ? 'text-indigo-300' : 'text-orange-700'}`}>
            Our pricing
          </span>
          <h2 className={`mt-3 text-3xl font-bold md:text-4xl transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The best price just for you
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl leading-7 transition duration-300 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
            Choose the package based on your current outreach goals, posting
            needs, and lead generation targets.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/5 hover:border-indigo-400/60 hover:shadow-indigo-500/10' : 'bg-orange-50/40 hover:border-orange-400/60 hover:shadow-orange-400/20'} ${
                plan.highlight
                  ? isDark ? "border-indigo-400/60 ring-1 ring-indigo-400/30 lg:-mt-2" : "border-orange-300/60 ring-1 ring-orange-300/40 lg:-mt-2"
                  : isDark ? "border-white/10" : "border-orange-200/40"
              }`}
            >
              {plan.highlight && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg ${isDark ? 'bg-indigo-500 shadow-indigo-500/20' : 'bg-orange-500 shadow-orange-500/20'}`}>
                  Most popular
                </div>
              )}

              <h3 className={`text-center text-xl font-bold transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              <ul className={`mt-6 space-y-3 text-sm transition duration-300 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                {plan.features.map((feature, i) => {
                  const isHeading = feature === feature.toUpperCase();
                  const excluded = feature.includes("❌");

                  return (
                    <li
                      key={i}
                      className={`flex items-start gap-3 transition duration-300 ${
                        isHeading ? isDark ? "mt-4 text-indigo-300 font-semibold" : "mt-4 text-orange-700 font-semibold" : ""
                      }`}
                    >
                      {!isHeading && (
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition duration-300 ${
                            excluded
                              ? isDark ? "bg-red-500/15 text-red-300" : "bg-red-100/50 text-red-600"
                              : isDark ? "bg-indigo-500/15 text-indigo-300" : "bg-orange-100/50 text-orange-600"
                          }`}
                        >
                          {excluded ? "×" : "✓"}
                        </span>
                      )}
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <div className={`mt-6 rounded-2xl border p-5 text-center transition duration-300 ${isDark ? 'border-white/10 bg-[#11182a]' : 'border-orange-200/50 bg-orange-100/30'}`}>
                <div className={`text-4xl font-extrabold transition duration-300 ${isDark ? 'text-indigo-300' : 'text-orange-600'}`}>
                  {plan.price}
                </div>
                <p className={`mt-1 text-sm transition duration-300 ${isDark ? 'text-white/55' : 'text-gray-600'}`}>per month</p>
              </div>

              <a
                href={`/contact?service=linkedin&plan=${encodeURIComponent(plan.name)}`}
                className={`mt-8 w-full rounded-xl py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/20' : 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20'}`}
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