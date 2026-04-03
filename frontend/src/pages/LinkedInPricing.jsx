import React from "react";

const heroImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10172a"/><stop offset="100%" stop-color="#27406e"/></linearGradient></defs>
  <rect width="800" height="600" rx="34" fill="url(#g)"/>
  <rect x="140" y="100" width="230" height="400" rx="28" fill="#0f172a" stroke="#60a5fa" stroke-opacity=".35"/>
  <circle cx="255" cy="190" r="48" fill="#60a5fa"/>
  <rect x="190" y="275" width="130" height="16" rx="8" fill="#cbd5e1" fill-opacity=".85"/>
  <rect x="190" y="305" width="110" height="10" rx="5" fill="#94a3b8" fill-opacity=".6"/>
  <rect x="420" y="100" width="250" height="400" rx="30" fill="#0f172a" stroke="#22d3ee" stroke-opacity=".35"/>
  <circle cx="490" cy="180" r="16" fill="#60a5fa"/><circle cx="575" cy="180" r="16" fill="#22d3ee"/><circle cx="650" cy="180" r="16" fill="#7c3aed"/>
  <path d="M490 180 L575 180 L650 180" stroke="#64748b" stroke-width="5"/>
  <path d="M490 180 L545 260 L625 230" stroke="#64748b" stroke-width="5" fill="none"/>
</svg>
`)}`;

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
    <div className="bg-[#0a0f1c] min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.95),rgba(10,15,28,1))]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
              LinkedIn Growth
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              LinkedIn pricing for authority, outreach, and lead generation.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Build a stronger professional presence with a structured LinkedIn
              strategy that fits the project’s dark indigo theme and keeps the
              layout clean, balanced, and content-rich.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
              >
                Start LinkedIn growth
              </a>
              <a
                href="#plans"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-indigo-400/60 hover:bg-indigo-400/10"
              >
                View plans
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur">
              <img
                src={heroImage}
                alt="LinkedIn growth visual"
                style={{ objectPosition: "center top" }}
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
            Choose the package based on your current outreach goals, posting
            needs, and lead generation targets.
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
                  const isHeading = feature === feature.toUpperCase();
                  const excluded = feature.includes("❌");

                  return (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${
                        isHeading ? "mt-4 text-indigo-300 font-semibold" : ""
                      }`}
                    >
                      {!isHeading && (
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                            excluded
                              ? "bg-red-500/15 text-red-300"
                              : "bg-indigo-500/15 text-indigo-300"
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

              <a
                href={`/contact?service=linkedin&plan=${encodeURIComponent(plan.name)}`}
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