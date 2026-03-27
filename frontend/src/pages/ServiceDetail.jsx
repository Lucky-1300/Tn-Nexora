import { useParams } from "react-router-dom";

const serviceData = {
  seo: {
    title: "Search Engine Optimization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    content: `
Enhance your website’s online visibility and drive more organic traffic with TN Nexora’s best SEO services.

Why Do You Need SEO?

A survey shows that more than 50% of website traffic comes from organic search.

A properly optimized website increases visibility and helps your business grow online.

Optimizing your website can benefit you in the following ways:

• Unlimited traffic and leads  
• Better conversions and ROI  
• Increased brand visibility  
• Easy discovery on search engines  
• Long-term business growth
    `,
  },

  smm: {
    title: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    content: `
Build a strong presence across platforms like Instagram, Facebook, and LinkedIn with our Social Media Marketing services.

Why Social Media Marketing?

Social media helps businesses connect directly with their audience and build trust.

A strong social presence increases brand awareness and engagement.

Benefits of Social Media Marketing:

• Increased brand awareness  
• Better customer engagement  
• Higher conversion rates  
• Direct communication with audience  
• Strong online reputation
    `,
  },

  ppc: {
    title: "Pay Per Click",
   image: "https://images.unsplash.com/photo-1560472355-536de3962603",
    content: `
Drive instant traffic and leads using high-performing paid campaigns.

Why PPC?

PPC allows businesses to reach targeted audiences instantly through ads.

It delivers measurable and quick results.

Benefits of PPC:

• Instant traffic generation  
• High ROI campaigns  
• Targeted audience reach  
• Measurable performance  
• Increased leads and sales
    `,
  },

  "technical-seo": {
    title: "Technical SEO",
 image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: `
Improve your website backend performance with Technical SEO.

Why Technical SEO?

Search engines need properly structured websites to rank them effectively.

It ensures your website is fast, secure, and crawlable.

Benefits of Technical SEO:

• Faster website speed  
• Better indexing by search engines  
• Improved user experience  
• Higher ranking potential  
• Reduced technical errors
    `,
  },

  wordpress: {
    title: "WordPress Development",
   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    content: `
Create powerful and scalable websites using WordPress.

Why WordPress?

WordPress is flexible, user-friendly, and widely used for business websites.

It allows easy customization and management.

Benefits of WordPress Development:

• Easy website management  
• Customizable design  
• SEO-friendly structure  
• Scalable solutions  
• Cost-effective development
    `,
  },

  "website-analysis": {
    title: "Website Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    content: `
Understand your website performance with detailed analysis.

Why Website Analysis?

Analyzing your website helps identify issues and improve performance.

It ensures your site is optimized for users and search engines.

Benefits of Website Analysis:

• Identify performance issues  
• Improve SEO ranking  
• Enhance user experience  
• Increase conversion rates  
• Data-driven improvements
    `,
  },

  "brand-promotion": {
    title: "Brand Promotion",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    content: `
Build a strong and recognizable brand identity.

Why Brand Promotion?

A strong brand helps you stand out from competitors.

It builds trust and credibility among customers.

Benefits of Brand Promotion:

• Increased brand awareness  
• Better customer trust  
• Strong market presence  
• Higher engagement  
• Long-term business growth
    `,
  },

  "video-marketing": {
    title: "Video Marketing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    content: `
Engage your audience with powerful video content.

Why Video Marketing?

Video content is more engaging and drives higher conversions.

It helps explain your services effectively.

Benefits of Video Marketing:

• Higher engagement  
• Better storytelling  
• Increased conversions  
• Strong brand connection  
• Improved reach on social platforms
    `,
  },

  "digital-marketing": {
    title: "Digital Marketing",
   image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    content: `
Complete digital solutions to grow your business online.

Why Digital Marketing?

Digital marketing connects your business with the right audience online.

It combines SEO, ads, and social media for maximum growth.

Benefits of Digital Marketing:

• Increased online visibility  
• Better lead generation  
• Multi-channel marketing  
• Higher ROI  
• Scalable growth strategies
    `,
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0f1c]">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 animate-fadeIn">
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full tracking-wide">
            Our Premium Service
          </span>

          {/* Gradient Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
            {service.title}
          </h1>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>

          {/* Content */}
          <div className="text-white/80 text-lg leading-relaxed space-y-4">
            {service.content.split("\n").map((line, i) => (
              <p
                key={i}
                className={`${
                  line.includes("•") ? "pl-4 border-l-2 border-indigo-500" : ""
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative group animate-fadeIn">
          {/* Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[420px] object-cover rounded-2xl shadow-2xl group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}