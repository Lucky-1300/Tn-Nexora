const plans = [
  {
  name: "BASIC",
  price: "$799",
  features: [
    "50 Working Hours (per month)",
    "40 Keywords",
    "40 Backlinks (per month)",
    "5 Landing Pages Optimization",

    "TECHNICAL SEO ENHANCEMENTS",
    "Website SEO Audit & Fixes",
    "Pre-Optimization Website Analysis",
    "Competitor Analysis & Strategy",
    "Keyword Research & LSI Optimization",
    "Baseline Ranking Check",
    "Duplicate Content Check & Fix",
    "Google Penalty Check & Recovery",
    "Backlink Toxicity Analysis (if required)",
    "XML Sitemap Optimization",
    "Robots.txt Optimization",
    "HrefLang & Multilingual SEO Setup ❌",
    "Website Security & HTTPS Optimization",
    "Mobile-First & Core Web Vitals Optimization ❌",
    "Schema Markup for Rich Snippets ❌",
    "Google Discover & Zero-Click Optimization ❌",

    "CONTENT OPTIMIZATION & AI SEO",
    "AI-Powered Deep Research & Reasoning ✔",
    "Google E.E.A.T Compliance ❌",
    "Search Intent & Content Marketing Funnel ❌",
    "Product/Service Research for Foundational Insights ❌",
    "Data-Driven Optimization ❌",
    "Content Siloing & Topic Clustering ❌",
    "NLP & Semantic SEO Optimization ❌",

    "LOCAL & VOICE SEARCH SEO",
    "Google Business Profile Optimization ✔",
    "Localized Keyword Optimization ✔",
    "Voice Search Optimization ❌",
    "AI-Based Local SEO Enhancements ❌",

    "ON-PAGE SEO ENHANCEMENTS",
    "AI Search Optimization (LLM Basic) ✔",
    "Canonical Tag Implementation ✔",
    "Title & Meta Tags Optimization ✔",
    "Heading & Image Alt Tags Optimization ✔",
    "Content Optimization & NLP SEO ✔",
    "URL Restructuring & SEO-friendly Setup ✔",
    "Internal Linking Strategy ✔",
    "404 Page Customization & Fixing ✔",
    "Website Speed Optimization ✔",
    "Google Indexed Pages Check & Fix ✔",
    "Google Search Console & Analytics Setup ✔",
    "Structured Data Implementation ❌",

    "OFF-PAGE SEO ENHANCEMENTS",
    "Search Engine Submission – Manual",
    "1 Article Writing",
    "1 Article Submission",
    "5 Article Marketing",
    "3 Directory Submissions",
    "Business Listing ✔",
    "Blog Section Creation (One-time) ✔",
    "1 Blog Writing",
    "1 Blog Posting",
    "5 Blog Marketing",
    "5 Third Party Blog Pinging",
    "2 Image Sharing",
    "PPT Submissions ❌",
    "10 Social Bookmarking",
    "Profile Creation ✔",
    "Product Listing ✔",
    "Video Marketing (if client provides) ✔",
    "Press Release ❌",
    "Guest Posting ❌",
    "Infographic Submission ❌",
    "Web 2.0 Submissions ❌",
    "Podcast Submissions ❌",
    "Classified Ads Submissions ✔",
    "Local Citation Building ✔",
    "Quora / Forum Posting ✔",
    "Broken Link Building ❌",

    "PUSH NOTIFICATION SERVICES",
    "Web Push Notifications Setup ✔",
    "Triggered Notifications for Engagement ✔",
    "Personalized AI Notifications ❌",
    "Cart Abandonment Notifications ✔",
    "Re-engagement Notifications ✔",
    "Geo-Fencing Notifications ❌",
    "AI Predictive Notifications ❌",
    "A/B Testing & Performance Optimization ❌",

    "RETARGETING MARKETING",
    "Budget handled by client",
    "Google Ads Retargeting ✔",
    "Dynamic Search Ads ❌",
    "Facebook & Instagram Retargeting ✔",
    "Lookalike Audience ✔",
    "Cart Abandonment Ads ✔",
    "Google Tag Manager & Pixel Setup ✔",
    "LinkedIn Retargeting ❌",
    "Email & CRM Retargeting ❌",
    "WhatsApp Retargeting ❌",

    "SOCIAL MEDIA OPTIMIZATION (SMO)",
    "LinkedIn & Pinterest Setup ✔",
    "Facebook & Instagram Setup ✔",
    "4 Monthly Posting",
    "LinkedIn & Twitter Posting ✔",
    "Social PR ❌",

    "SEO & MARKETING AUTOMATION",
    "Google Search Console ✔",
    "Google Analytics (GA4) ✔",
    "Bing Webmaster Tools ✔",
    "Microsoft Clarity ❌",
    "Google Tag Manager ✔",
    "UTM Tracking ❌",
    "Google Looker Studio ❌",
    "Facebook Pixel API ❌",
    "LinkedIn Insight Tag ❌",
    "WhatsApp Chatbot ❌",
    "Email Automation ❌",
    "AI Chatbots ❌",
    "Zapier Integrations ❌",
    "Predictive Analytics ❌",

    "REPORTING & ANALYTICS",
    "Monthly SEO Report ✔",
    "Competitor Report ❌",
    "Conversion Tracking ✔",
    "Monthly Off-page Report ✔",
    "Ad Performance Report ✔",
  ]
},
{
  name: "BRONZE",
  price: "$1299",
  features: [
    "75 Working Hours (per month)",
    "50 Keywords",
    "55 Backlinks (per month)",
    "10 Landing Pages Optimization",

    "TECHNICAL SEO ENHANCEMENTS",
    "Website SEO Audit & Fixes",
    "Pre-Optimization Website Analysis",
    "Competitor Analysis & Strategy",
    "Keyword Research & LSI Optimization",
    "Baseline Ranking Check",
    "Duplicate Content Check & Fix",
    "Google Penalty Check & Recovery",
    "Backlink Toxicity Analysis (if required)",
    "XML Sitemap Optimization",
    "Robots.txt Optimization",
    "HrefLang & Multilingual SEO Setup ❌",
    "Website Security & HTTPS Optimization",
    "Mobile-First & Core Web Vitals Optimization ✔",
    "Schema Markup for Rich Snippets ✔",
    "Google Discover & Zero-Click Optimization ❌",

    "CONTENT OPTIMIZATION & AI SEO",
    "AI-Powered Deep Research & Reasoning ✔",
    "Google E.E.A.T Compliance ✔",
    "Search Intent & Content Marketing Funnel ✔",
    "Product/Service Research for Foundational Insights ✔",
    "Data-Driven Optimization ✔",
    "Content Siloing & Topic Clustering ✔",
    "NLP & Semantic SEO Optimization ✔",

    "LOCAL & VOICE SEARCH SEO",
    "Google Business Profile Optimization ✔",
    "Localized Keyword Optimization ✔",
    "Voice Search Optimization ✔",
    "AI-Based Local SEO Enhancements ❌",

    "ON-PAGE SEO ENHANCEMENTS",
    "AI Search Optimization (LLM Basic) ✔",
    "Canonical Tag Implementation ✔",
    "Title & Meta Tags Optimization ✔",
    "Heading & Image Alt Tags Optimization ✔",
    "Content Optimization & NLP SEO ✔",
    "URL Restructuring & SEO-friendly Setup ✔",
    "Internal Linking Strategy ✔",
    "404 Page Customization & Fixing ✔",
    "Website Speed Optimization ✔",
    "Google Indexed Pages Check & Fix ✔",
    "Google Search Console & Analytics Setup ✔",
    "Structured Data Implementation ✔",

    "OFF-PAGE SEO ENHANCEMENTS",
    "Search Engine Submission – Manual",
    "2 Article Writing",
    "2 Article Submissions",
    "10 Article Marketing",
    "5 Directory Submissions",
    "Business Listing ✔",
    "Blog Section Creation (One-time) ✔",
    "2 Blog Writing",
    "2 Blog Posting",
    "10 Blog Marketing",
    "8 Third Party Blog Pinging",
    "4 Image Sharing",
    "PPT Submissions ❌",
    "15 Social Bookmarking",
    "Profile Creation ✔",
    "Product Listing ✔",
    "Video Marketing (if client provides) ✔",
    "Press Release (if client provides news) ✔",
    "Guest Posting (High Authority Sites) ✔",
    "Infographic Submission ✔",
    "Web 2.0 Submissions ✔",
    "Podcast Submissions ❌",
    "Classified Ads Submissions ✔",
    "Local Citation Building ✔",
    "Quora / Forum Posting ✔",
    "Broken Link Building ❌",

    "PUSH NOTIFICATION SERVICES",
    "Web Push Notifications Setup ✔",
    "Triggered Notifications for Engagement ✔",
    "Personalized AI Notifications ✔",
    "Cart Abandonment Notifications ✔",
    "Re-engagement Notifications ✔",
    "Geo-Fencing Notifications ❌",
    "AI Predictive Notifications ❌",
    "A/B Testing & Performance Optimization ❌",

    "RETARGETING MARKETING",
    "Budget handled by client",
    "To start after 3 months (if data available)",
    "Google Ads Retargeting ✔",
    "Dynamic Search Ads & Shopping ✔",
    "Facebook & Instagram Retargeting ✔",
    "Lookalike Audience ✔",
    "Cart Abandonment Ads ✔",
    "Google Tag Manager & Pixel Setup ✔",
    "LinkedIn Retargeting ✔",
    "Email & CRM Retargeting ✔",
    "WhatsApp Retargeting ✔",

    "SOCIAL MEDIA OPTIMIZATION (SMO)",
    "LinkedIn & Pinterest Setup ✔",
    "Facebook & Instagram Setup ✔",
    "8 Monthly Posting",
    "LinkedIn & Twitter Posting ✔",
    "Social PR ✔",

    "SEO & MARKETING AUTOMATION",
    "Google Search Console ✔",
    "Google Analytics (GA4) ✔",
    "Bing Webmaster Tools ✔",
    "Microsoft Clarity ✔",
    "Google Tag Manager ✔",
    "UTM Tracking ✔",
    "Google Looker Studio ✔",
    "Facebook Pixel API ✔",
    "LinkedIn Insight Tag ✔",
    "WhatsApp Chatbot ✔",
    "Email Automation ✔",
    "AI Chatbots ✔",
    "Zapier Integrations ✔",
    "Predictive Analytics ❌",

    "REPORTING & ANALYTICS",
    "Monthly SEO Report ✔",
    "Competitor SEO & Keyword Report ✔",
    "Conversion Tracking ✔",
    "Monthly Off-page Report ✔",
    "Ad Performance & ROI Report ✔",
  ]
},
{
  name: "GOLD (POPULAR)",
  price: "$1699",
  highlight: true,
  features: [
    "100 Working Hours (per month)",
    "70 Keywords",
    "80 Backlinks (per month)",
    "12 Landing Pages Optimization",

    "TECHNICAL SEO ENHANCEMENTS",
    "Website SEO Audit & Fixes",
    "Pre-Optimization Website Analysis",
    "Competitor Analysis & Strategy",
    "Keyword Research & LSI Optimization",
    "Baseline Ranking Check",
    "Duplicate Content Check & Fix",
    "Google Penalty Check & Recovery",
    "Backlink Toxicity Analysis (if required)",
    "XML Sitemap Optimization",
    "Robots.txt Optimization",
    "HrefLang & Multilingual SEO Setup ✔",
    "Website Security & HTTPS Optimization",
    "Mobile-First & Core Web Vitals Optimization ✔",
    "Schema Markup for Rich Snippets ✔",
    "Google Discover & Zero-Click Optimization ✔",

    "CONTENT OPTIMIZATION & AI SEO",
    "AI-Powered Deep Research & Reasoning ✔",
    "Google E.E.A.T Compliance ✔",
    "Search Intent & Content Marketing Funnel ✔",
    "Product/Service Research for Foundational Insights ✔",
    "Data-Driven Optimization ✔",
    "Content Siloing & Topic Clustering ✔",
    "NLP & Semantic SEO Optimization ✔",

    "LOCAL & VOICE SEARCH SEO",
    "Google Business Profile Optimization ✔",
    "Localized Keyword Optimization ✔",
    "Voice Search Optimization ✔",
    "AI-Based Local SEO Enhancements ✔",

    "ON-PAGE SEO ENHANCEMENTS",
    "AI Search Optimization (LLM Basic) ✔",
    "Canonical Tag Implementation ✔",
    "Title & Meta Tags Optimization ✔",
    "Heading & Image Alt Tags Optimization ✔",
    "Content Optimization & NLP SEO ✔",
    "URL Restructuring & SEO-friendly Setup ✔",
    "Internal Linking Strategy ✔",
    "404 Page Customization & Fixing ✔",
    "Website Speed Optimization ✔",
    "Google Indexed Pages Check & Fix ✔",
    "Google Search Console & Analytics Setup ✔",
    "Structured Data Implementation ✔",

    "OFF-PAGE SEO ENHANCEMENTS",
    "Search Engine Submission – Manual",
    "3 Article Writing",
    "3 Article Submissions",
    "15 Article Marketing",
    "10 Directory Submissions",
    "Business Listing ✔",
    "Blog Section Creation (One-time) ✔",
    "3 Blog Writing",
    "3 Blog Posting",
    "15 Blog Marketing",
    "10 Third Party Blog Pinging",
    "6 Image Sharing",
    "1 PPT Submission",
    "20 Social Bookmarking",
    "Profile Creation ✔",
    "Product Listing ✔",
    "Video Marketing (if client provides) ✔",
    "Press Release (if client provides news) ✔",
    "3 Guest Posting (High Authority Sites)",
    "2 Infographic Submissions",
    "3 Web 2.0 Submissions",
    "3 Podcast Submissions",
    "Classified Ads Submissions ✔",
    "Local Citation Building ✔",
    "Quora / Forum Posting ✔",
    "Broken Link Building ✔",

    "PUSH NOTIFICATION SERVICES",
    "Web Push Notifications Setup ✔",
    "Triggered Notifications for Engagement ✔",
    "Personalized AI Notifications ✔",
    "Cart Abandonment Notifications ✔",
    "Re-engagement Notifications ✔",
    "Geo-Fencing Notifications ✔",
    "AI Predictive Notifications ✔",
    "A/B Testing & Performance Optimization ✔",

    "RETARGETING MARKETING",
    "Budget handled by client",
    "To start after 3 months (if data available)",
    "Google Ads Retargeting ✔",
    "Dynamic Search Ads & Shopping ✔",
    "Facebook & Instagram Retargeting ✔",
    "Lookalike Audience ✔",
    "Cart Abandonment Ads ✔",
    "Google Tag Manager & Pixel Setup ✔",
    "LinkedIn Retargeting ✔",
    "Email & CRM Retargeting ✔",
    "WhatsApp Retargeting ✔",

    "SOCIAL MEDIA OPTIMIZATION (SMO)",
    "LinkedIn & Pinterest Setup ✔",
    "Facebook & Instagram Setup ✔",
    "16 Monthly Posting",
    "LinkedIn & Twitter Posting ✔",
    "Social PR ✔",

    "SEO & MARKETING AUTOMATION",
    "Google Search Console ✔",
    "Google Analytics (GA4) ✔",
    "Bing Webmaster Tools ✔",
    "Microsoft Clarity ✔",
    "Google Tag Manager ✔",
    "UTM Tracking ✔",
    "Google Looker Studio ✔",
    "Facebook Pixel API ✔",
    "LinkedIn Insight Tag ✔",
    "WhatsApp Chatbot ✔",
    "Email Automation ✔",
    "AI Chatbots ✔",
    "Zapier Integrations ✔",
    "Predictive Analytics ✔",

    "REPORTING & ANALYTICS",
    "Monthly SEO Report ✔",
    "Competitor SEO & Keyword Tracking Report ✔",
    "Conversion Tracking ✔",
    "Monthly Off-page & Link Building Report ✔",
    "Ad Performance & ROI Report ✔",
  ]
},
{
  name: "PLATINUM",
  price: "$2499",
  features: [
    "150 Working Hours (per month)",
    "100 Keywords",
    "125 Backlinks (per month)",
    "20 Landing Pages Optimization",

    "TECHNICAL SEO ENHANCEMENTS",
    "Website SEO Audit & Fixes",
    "Pre-Optimization Website Analysis",
    "Competitor Analysis & Strategy",
    "Keyword Research & LSI Optimization",
    "Baseline Ranking Check",
    "Duplicate Content Check & Fix",
    "Google Penalty Check & Recovery",
    "Backlink Toxicity Analysis (if required)",
    "XML Sitemap Optimization",
    "Robots.txt Optimization",
    "HrefLang & Multilingual SEO Setup ✔",
    "Website Security & HTTPS Optimization",
    "Mobile-First & Core Web Vitals Optimization ✔",
    "Schema Markup for Rich Snippets ✔",
    "Google Discover & Zero-Click Optimization ✔",

    "CONTENT OPTIMIZATION & AI SEO",
    "AI-Powered Deep Research & Reasoning ✔",
    "Google E.E.A.T Compliance ✔",
    "Search Intent & Content Marketing Funnel ✔",
    "Product/Service Research for Foundational Insights ✔",
    "Data-Driven Optimization ✔",
    "Content Siloing & Topic Clustering ✔",
    "NLP & Semantic SEO Optimization ✔",

    "LOCAL & VOICE SEARCH SEO",
    "Google Business Profile Optimization ✔",
    "Localized Keyword Optimization ✔",
    "Voice Search Optimization ✔",
    "AI-Based Local SEO Enhancements ✔",

    "ON-PAGE SEO ENHANCEMENTS",
    "AI Search Optimization (LLM Advanced) ✔",
    "Canonical Tag Implementation ✔",
    "Title & Meta Tags Optimization ✔",
    "Heading & Image Alt Tags Optimization ✔",
    "Content Optimization & NLP SEO ✔",
    "URL Restructuring & SEO-friendly Setup ✔",
    "Internal Linking Strategy ✔",
    "404 Page Customization & Fixing ✔",
    "Website Speed Optimization ✔",
    "Google Indexed Pages Check & Fix ✔",
    "Google Search Console & Analytics Setup ✔",
    "Structured Data Implementation ✔",

    "OFF-PAGE SEO ENHANCEMENTS",
    "Search Engine Submission – Manual",
    "4 Article Writing",
    "4 Article Submissions",
    "20 Article Marketing",
    "15 Directory Submissions",
    "Business Listing ✔",
    "Blog Section Creation (One-time) ✔",
    "4 Blog Writing",
    "4 Blog Posting",
    "20 Blog Marketing",
    "15 Third Party Blog Pinging",
    "8 Image Sharing",
    "2 PPT Submission",
    "25 Social Bookmarking",
    "Profile Creation ✔",
    "Product Listing ✔",
    "Video Marketing (if client provides) ✔",
    "Press Release (if client provides news) ✔",
    "5 Guest Posting (High Authority Sites)",
    "3 Infographic Submissions",
    "5 Web 2.0 Submissions",
    "5 Podcast Submissions",
    "Classified Ads Submissions ✔",
    "Local Citation Building ✔",
    "Quora / Forum Posting ✔",
    "Broken Link Building ✔",

    "PUSH NOTIFICATION SERVICES",
    "Web Push Notifications Setup ✔",
    "Triggered Notifications for Engagement ✔",
    "Personalized AI Notifications ✔",
    "Cart Abandonment Notifications ✔",
    "Re-engagement Notifications ✔",
    "Geo-Fencing Notifications ✔",
    "AI Predictive Notifications ✔",
    "A/B Testing & Performance Optimization ✔",

    "RETARGETING MARKETING",
    "Budget handled by client",
    "To start after 2 months (if data available)",
    "Google Ads Retargeting ✔",
    "Dynamic Search Ads & Shopping ✔",
    "Facebook & Instagram Retargeting ✔",
    "Lookalike Audience ✔",
    "Cart Abandonment Ads ✔",
    "Google Tag Manager & Pixel Setup ✔",
    "LinkedIn Retargeting ✔",
    "Email & CRM Retargeting ✔",
    "WhatsApp Retargeting ✔",

    "SOCIAL MEDIA OPTIMIZATION (SMO)",
    "LinkedIn & Pinterest Setup ✔",
    "Facebook & Instagram Setup ✔",
    "20 Monthly Posting",
    "LinkedIn & Twitter Posting ✔",
    "Social PR ✔",

    "SEO & MARKETING AUTOMATION",
    "Google Search Console ✔",
    "Google Analytics (GA4) ✔",
    "Bing Webmaster Tools ✔",
    "Microsoft Clarity ✔",
    "Google Tag Manager ✔",
    "UTM Tracking ✔",
    "Google Looker Studio ✔",
    "Facebook Pixel API ✔",
    "LinkedIn Insight Tag ✔",
    "WhatsApp Chatbot ✔",
    "Email Automation ✔",
    "AI Chatbots ✔",
    "Zapier Integrations ✔",
    "Predictive Analytics ✔",

    "REPORTING & ANALYTICS",
    "Monthly SEO Report ✔",
    "Competitor SEO & Keyword Tracking Report ✔",
    "Conversion Tracking ✔",
    "Monthly Off-page & Link Building Report ✔",
    "Ad Performance & ROI Report ✔",
  ]
}
];

export default function PerformancePricing() {
  return (
    <div>

      {/* 🔥 Header */}
      <div className="bg-[#1b1e3a] py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Performance Marketing Pricing
        </h1>

        <div className="mt-3 text-sm text-white/60">
          <span className="hover:text-indigo-400 cursor-pointer">Home</span>
          <span className="mx-2 text-orange-400">›</span>
          <span className="text-white/80">
            Performance Marketing Pricing
          </span>
        </div>
      </div>

      {/* 🔥 Main Section */}
      <div className="bg-[#0a0f1c] min-h-screen p-10">
        <div className="grid md:grid-cols-4 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col
                transition-all duration-300 ease-in-out
                hover:scale-[1.03]
                hover:border-indigo-500/60
                hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]
                ${plan.highlight ? "scale-[1.03] border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.5)]" : ""}
              `}
            >

              {/* 🔥 Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  🏢
                </div>
              </div>

              <h2 className="text-white text-lg font-bold text-center mb-4">
                {plan.name}
              </h2>

              <ul className="text-sm text-white/80 space-y-2 mb-6">
                {plan.features.map((f, i) => {
                  const isSection = f === f.toUpperCase();
                  const isCross = f.includes("❌");

                  return (
                    <li
                      key={i}
                      className={`flex gap-2 ${
                        isSection ? "text-indigo-300 font-semibold mt-4" : ""
                      }`}
                    >
                      {!isSection && (
                        <span
                          className={`text-xs mt-1 ${
                            isCross ? "text-red-400" : "text-green-400"
                          }`}
                        >
                          {isCross ? "✖" : "✔"}
                        </span>
                      )}
                      <span>{f}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="text-center mt-auto">
                <p className="text-indigo-400 font-bold text-xl">
                  {plan.price}
                </p>
                <button className="mt-3 w-full py-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded text-white hover:scale-105 transition">
                  Buy Now
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}