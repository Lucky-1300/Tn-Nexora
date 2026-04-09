import React, { useEffect } from "react";
import { useTheme } from '../components/ThemeWrapper';

const heroImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#10172a"/><stop offset="100%" stop-color="#1f3b74"/></linearGradient></defs>
  <rect width="800" height="600" rx="34" fill="url(#g)"/>
  <rect x="100" y="90" width="600" height="420" rx="30" fill="#0f172a" stroke="#94a3b8" stroke-opacity=".22"/>
  <path d="M150 400 C230 350, 280 365, 340 300 S470 225, 540 250 S630 180, 670 145" stroke="#8b5cf6" stroke-width="10" fill="none" stroke-linecap="round"/>
  <path d="M150 420 C230 370, 280 390, 340 325 S470 250, 540 275 S630 205, 670 170" stroke="#22d3ee" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>
  <rect x="165" y="285" width="50" height="160" rx="10" fill="#60a5fa"/>
  <rect x="240" y="250" width="50" height="195" rx="10" fill="#7c3aed"/>
  <rect x="315" y="220" width="50" height="225" rx="10" fill="#22d3ee"/>
  <rect x="390" y="300" width="50" height="145" rx="10" fill="#818cf8"/>
  <rect x="465" y="260" width="50" height="185" rx="10" fill="#4c7dff"/>
</svg>
`)}`;

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
    ],
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
    ],
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
    ],
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
    ],
  },
];

export default function PerformancePricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen overflow-x-hidden transition duration-300 ${isDark ? 'bg-[#0a0f1c]' : 'bg-white'}`}>
      <section className={`transition duration-300 ${isDark ? 'bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.95),rgba(10,15,28,1))]' : 'bg-gradient-to-br from-orange-50 via-white to-white'}`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className={`mb-4 inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition duration-300 ${isDark ? 'border-indigo-400/30 bg-indigo-400/10 text-indigo-300' : 'border-orange-400/40 bg-orange-100/50 text-orange-700'}`}>
              Performance Marketing
            </p>
            <h1 className={`text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Performance marketing pricing built for lead growth and ROI.
            </h1>
            <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg transition duration-300 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
              Scale your paid campaigns with structured setup, optimisation,
              retargeting, reporting, and conversion-focused support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className={`rounded-full px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/20' : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20'}`}
              >
                Book a consultation
              </a>
              <a
                href="#plans"
                className={`rounded-full border px-6 py-3 font-semibold transition ${isDark ? 'border-white/15 bg-white/5 text-white hover:border-indigo-400/60 hover:bg-indigo-400/10' : 'border-orange-300/40 bg-orange-100/30 text-orange-700 hover:border-orange-400/60 hover:bg-orange-200/30'}`}
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
                alt="Performance marketing dashboard"
                style={{ objectPosition: "center bottom" }}
                className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[380px] lg:h-[460px]"
              />

              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#0f1628]/90 px-4 py-3 text-white shadow-xl backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">ROI focus</p>
                  <p className="mt-1 text-lg font-bold">Higher conversions</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0f1628]/90 px-4 py-3 text-white shadow-xl backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Reporting</p>
                  <p className="mt-1 text-lg font-bold">Clear performance data</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="plans" className={`mx-auto w-full max-w-[1600px] px-4 pb-8 sm:px-6 lg:px-8 transition duration-300 ${isDark ? '' : ''}`}>
        <div className="text-center">
          <span className={`text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${isDark ? 'text-indigo-300' : 'text-orange-700'}`}>
            Our pricing
          </span>
          <h2 className={`mt-3 text-3xl font-bold md:text-4xl transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The best price just for you
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl leading-7 transition duration-300 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
            Choose the package that fits your growth stage, lead goals, and advertising budget.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-10 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/5 hover:border-indigo-400/60 hover:shadow-indigo-500/10' : 'bg-orange-50/40 hover:border-orange-400/60 hover:shadow-orange-400/20'} ${
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

              <h3 className={`text-center text-xl font-bold transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>

              <div className={`mt-6 rounded-2xl border p-7 text-center transition duration-300 ${isDark ? 'border-white/10 bg-[#11182a]' : 'border-orange-200/50 bg-orange-100/30'}`}>
                <div className={`text-4xl font-extrabold transition duration-300 ${isDark ? 'text-indigo-300' : 'text-orange-600'}`}>{plan.price}</div>
                <p className={`mt-1 text-sm transition duration-300 ${isDark ? 'text-white/55' : 'text-gray-600'}`}>monthly</p>
              </div>

              <ul className={`mt-6 space-y-3 text-sm transition duration-300 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                {plan.features.map((feature, i) => {
                  const isHeading = feature === feature.toUpperCase();

                  return (
                    <li
                      key={i}
                      className={`flex items-start gap-3 transition duration-300 ${
                        isHeading ? isDark ? "mt-4 font-semibold text-indigo-300" : "mt-4 font-semibold text-orange-700" : ""
                      }`}
                    >
                      {!isHeading && (
                        <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition duration-300 ${isDark ? 'bg-indigo-500/15 text-indigo-300' : 'bg-orange-100/50 text-orange-600'}`}>
                          ✓
                        </span>
                      )}
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={`/contact?service=performance&plan=${encodeURIComponent(plan.name)}`}
                className={`mt-8 w-full rounded-xl py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/20' : 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20'}`}
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