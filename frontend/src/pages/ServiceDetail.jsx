import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useTheme } from '../components/ThemeWrapper';

const serviceData = {
  seo: {
    title: "Search Engine Optimization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    sections: [
      {
        heading: "Overview",
        text: "We work on improving your website so that it can reach the right audience through search engines like Google. Instead of making random changes, we first take time to properly analyze your website. This helps us understand what is already working and what needs improvement. Every website is different, so we don’t follow a fixed approach for everyone.One of the first steps is understanding what your potential customers are actually searching for. Based on that, we work on correcting and refining the keywords used on your website so that it matches real user searches. This helps your website appear in more relevant search results.We also focus on improving the content of your website. Content is not just about adding keywords, but making sure it is clear, useful, and easy to understand. We try to make your website more helpful for users, which also improves how search engines see your site.Another important part is fixing basic and technical issues. This includes checking page speed, mobile experience, and overall website performance. ",
      },
      {
        heading: "Why SEO?",
        text: "Most people search online before choosing any service or product. Whether it’s a small decision or a big one, search engines are usually the first step. If your website is not visible there, you are likely missing out on potential customers.SEO helps your business appear in front of people who are already searching for what you offer. This makes the traffic more relevant and increases the chances of getting genuine inquiries. Instead of reaching random users, SEO connects you with the right audience.",
      },
      {
        heading: "Benefits",
        list: [
          "Better visibility on search engines like Google",
          "More relevant and targeted traffic",
          "Helps your website perform better technically",
          "Increases chances of getting genuine inquiries",
        ],
      },
    ],
  },

  smm: {
    title: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
    sections: [
      {
        heading: "Overview",
        text: "We help your business grow on social media platforms like Instagram, Facebook, and LinkedIn by creating simple and engaging content. Social media is not just about posting regularly, it’s about understanding what your audience wants to see and how they interact.We start by understanding your business and the type of audience you want to reach. Based on that, we plan what kind of content should be posted and when. This includes posts, reels, and basic creatives that are easy to understand and relatable.We also handle your social media pages by posting consistently and making sure everything looks organized and professional. Along with that, we focus on engaging with your audience by responding to comments and keeping the page active.Another important part is improving engagement. We try to create content that people can relate to, so they like, comment, and share. This helps your brand stay active and visible.In some cases, we also run paid promotions to reach more people. This helps in increasing reach and bringing your content in front of the right audience. ",
      },
      {
        heading: "Why Social Media Marketing?",
        text: "Today, people spend a lot of time on social media. Before trusting a business, they often check its social presence. If your business is not active there, it may look less reliable.Social media helps you stay connected with your audience and keeps your brand visible in their daily life. It is one of the easiest ways to build trust and awareness",
      },
      {
        heading: "Benefits",
        list: [
          "Direct connection with customers",
          "Increased followers and reach",
          "Builds trust and brand presence",
          "Keeps your business active online",
        ],
      },
    ],
  },

  ppc: {
    title: "Pay Per Click",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603",
    sections: [
      {
        heading: "Overview",
        text: "Pay Per Click  advertising is one of the most effective ways to reach potential customers online. At TN Nexora, we help businesses promote their products and services by creating well-planned PPC campaigns that focus on real results. Our goal is to connect your business with people who are already searching for services similar to yours.We start by understanding your business, target audience, and goals. Based on this, we research keywords that people commonly use when searching online. Choosing the right keywords is very important because it helps your advertisement appear in front of the right audience. Our team carefully selects keywords that have good search volume and match your business services.After keyword research, we create clear and engaging ad content that encourages users to click. The ad content is written in a simple and attractive way so that people can easily understand what you are offering. We also focus on writing headlines and descriptions that build interest and trust.Our team sets up PPC campaigns on platforms such as Google Ads and social media platforms. We make sure your ads are shown to people based on their search activity, interests, and location. This helps in reaching users who are more likely to become your customers.",
      },
      {
        heading: "Why PPC?",
        text: "In today’s digital world, many people search online before choosing any service or product. If your business does not appear in search results, you may miss potential customers. PPC helps your business appear in front of people at the right time when they are actively searching.One of the biggest advantages of PPC is that it provides faster visibility compared to many other marketing methods. While some marketing strategies take time to show results, PPC can start bringing visitors to your website as soon as the campaign becomes active.",
      },
      {
        heading: "Benefits",
        list: [
          "IPay Per Click advertising offers multiple advantages for businesses that want to grow online and attract more customers.",
          "One major benefit is that PPC helps in bringing visitors to your website quickly. Your ads can appear on search engines and social media platforms, which increases the chances of people visiting your website.",
          "PPC also allows flexible budget control. Businesses can decide how much they want to spend on advertising. Budget can be increased or decreased depending on requirements and performance.",
          "It also helps in increasing inquiries and potential customers. When more people visit your website, the chances of getting calls, messages, or contact form submissions also increase.",
        ],
      },
    ],
  },

  "technical-seo": {
    title: "Technical SEO",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    sections: [
      {
        heading: "Overview",
        text: "Technical SEO plays an important role in improving the overall performance of a website. At TN Nexora, we focus on optimizing the technical structure of your website so that search engines can easily access, understand, and index your pages. A strong technical foundation helps your website perform better and supports long-term growth in search rankings.Our process starts with a detailed technical audit of your website. We carefully examine different technical elements to identify issues that may affect website performance. Many times, websites look good on the surface but face technical problems in the background that prevent them from performing well on search engines. Our team works on resolving such issues step by step.One of the key areas we work on is website speed. A slow-loading website can create a poor user experience and may cause visitors to leave the site quickly. We optimize images, reduce unnecessary code, and improve loading performance so that your website opens smoothly across different devices and internet speeds.We also ensure that your website is mobile-friendly. Today, most users browse websites on mobile devices, so it is important that the website adjusts properly to different screen sizes. We check layout structure, font visibility, button placement, and responsiveness to make sure visitors can easily navigate the site on mobile.",
      },
      {
        heading: "Why Technical SEO?",
        text: "Technical SEO is important because it helps search engines properly access and understand your website. Even if your website has good design and content, technical issues can prevent it from performing well in search results.A technically optimized website provides a smoother experience to users. When visitors can easily open pages, navigate the site, and find information quickly, they are more likely to stay longer. This improves overall website engagement.",
      },
      {
        heading: "Benefits",
        list: [
          "Fixing technical errors helps users access pages without interruption. This improves user satisfaction and reduces chances of visitors leaving the website early.",
          "Technical SEO also supports better search engine crawling and indexing. When search engines can easily read website structure, the chances of appearing in search results improve.",
          "Improved website security helps build trust among users. Secure websites are considered more reliable and professional.",
        ],
      },
    ],
  },

  wordpress: {
    title: "WordPress Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    sections: [
      {
        heading: "Overview",
        text: "In this service, we create websites using the WordPress platform based on your business needs. First, we understand what your business is about and what type of website you need. After that, we plan a simple and clean design that looks professional and is easy for visitors to understand.We create important pages like Home, About, Services, and Contact so that visitors can easily find the information they are looking for. The website layout is kept simple so users can move from one page to another without confusion.We also make sure the website works properly on mobile devices, as most people browse websites on their phones. The design adjusts according to screen size so the website looks clear and readable on mobile, tablet, and desktop.Features like contact forms, images, and social media links can also be added so that customers can easily connect with you. We try to keep the website fast so visitors do not have to wait for pages to load.One advantage of WordPress is that future updates are easy. If you want to change text, replace images, or add a new page later, it can be done without difficulty.",
      },
      {
        heading: "Why WordPress?",
        text: "Nowadays, most businesses want to be present online so that people can learn about their services through the internet. A good website helps create a positive impression and makes the business look more reliable.WordPress is helpful because managing the website is simple. If changes are needed in the future, the website can be updated without creating everything again.",
      },
      {
        heading: "Benefits",
        list: [
          "One of the main benefits of WordPress is that it provides a professional-looking website that represents your business properly.",
          "The website works smoothly on mobile devices, which helps reach more users. It is easy to update content, so information can be kept accurate over time.",
          "The website structure is simple, allowing visitors to find information easily. This improves user experience and makes the website more useful.",
        ],
      },
    ],
  },

  "website-analysis": {
    title: "Website Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    sections: [
      {
        heading: "Overview",
        text: "In this service, we carefully review your website to understand how it is performing and identify areas that may need improvement. A website may look good from the front, but there can be issues in the background that affect performance, user experience, and visibility on search engines. Our goal is to find such issues and suggest practical improvements.We start by checking how smoothly your website works. This includes analyzing loading speed, page performance, and overall structure. If a website takes too long to load, visitors may leave before exploring the content. We look for factors that may slow down the website and suggest ways to improve performance.We also review how easy it is for visitors to use your website. A clear layout helps users find information without confusion. We observe whether the navigation is simple and whether important pages are easy to access. Small improvements in structure can make a big difference in user experience.Another important part of website analysis is identifying technical issues. Sometimes pages may not open properly, links may not work, or certain elements may not function as expected. We carefully review these issues and highlight what needs attention.",
      },
      {
        heading: "Why Website Analysis?",
        text: "Website analysis is important because it helps identify issues that may affect performance. Sometimes small problems can create difficulty for users or reduce the effectiveness of the website. Regular analysis helps in keeping the website updated and functional.",
      },
      {
        heading: "Benefits",
        list: [
          "Website analysis helps improve overall website performance by identifying areas that may need attention.",
          "It also helps improve website organization, allowing users to move smoothly between pages.",
          "Understanding website performance helps in making better decisions for future improvements.",
          "Another benefit is maintaining consistency. Regular checks help ensure that the website continues to work properly over time.",
        ],
      },
    ],
  },

  "brand-promotion": {
    title: "Brand Promotion",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    sections: [
      {
        heading: "Overview",
        text: "We help your business reach more people by improving its online presence in a simple and practical way. The main goal of brand promotion is to make your business more recognizable so that people can easily remember your name when they need related services.We start by understanding your business and the audience you want to connect with. Based on that, we plan activities that help your brand appear more consistent and professional across different online platforms.Our team works on creating content that clearly explains your services and represents your business in a professional manner. We focus on maintaining a consistent style so your brand looks organized and easy to identify.We also help keep your brand active online by sharing regular updates that reflect your services and business values. Consistency helps people recognize your brand more easily over time.Another important part of brand promotion is improving visibility. When people see your brand name more often, they become more familiar with it. Familiarity helps in building trust and makes your business look more reliable..",
      },
      {
        heading: "Why SEO?",
        text: " Brand promotion is important because people usually choose services they recognize and trust. If your business is not visible enough, potential customers may not become aware of what you offer.Promoting your brand helps create familiarity. When people repeatedly see your business name, they begin to remember it. This recognition can make your business feel more dependable..",
      },
      {
        heading: "Benefits",
        list: [
          "Brand promotion helps increase awareness so more people become familiar with your business name.",
          "It builds trust over time, as consistent visibility makes your brand appear reliable.",
          "Your business looks more professional when information is presented clearly and consistently.",
          "It becomes easier for potential customers to understand what services you provide.",
        ],
      },
    ],
  },

  "video-marketing": {
    title: "Video Marketing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    sections: [
      {
        heading: "Overview",
        text: "We help your business communicate its message more clearly through well-planned video content. Videos make it easier for people to understand what your business offers because information can be explained in a simple and engaging way. Our focus is to create video ideas that present your services in a clear and professional manner.We begin by understanding your business type and the audience you want to reach. Based on this, we suggest video topics that can explain your services in a way that is easy to follow. This may include introduction videos, service explanation videos, or informative videos that help viewers learn more about your work.We also plan short-form videos that are suitable for social media platforms. Short videos help deliver information quickly and can hold the viewer’s attention more effectively. Clear and simple presentation helps viewers stay interested and understand the message without confusion.Consistency is also important in video marketing. We aim to maintain a similar style so that the videos represent your brand properly. A consistent approach helps people recognize your business more easily.",
      },
      {
        heading: "Why Video Marketing?",
        text: "Video marketing is important because many people prefer watching videos instead of reading long text. Videos can explain information in a short time and make the message easier to understand.A well-presented video can make your business look more professional. When viewers clearly understand your services, they are more likely to remember your brand.",
      },
      {
        heading: "Benefits",
        list: [
          "Video marketing helps explain services in a clear and simple way so viewers can understand the message quickly.",
          "Information shared through video is often easier to remember.Video content can reach more people as it can be shared across different platforms.",
          "It helps improve overall communication by presenting services in a visually clear format.",
          "Over time, consistent video content can support better awareness and recognition of your business.",
        ],
      },
    ],
  },

  "digital-marketing": {
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    sections: [
      {
        heading: "Overview",
        text: "We help businesses improve their online presence through practical and well-planned digital marketing activities. Today, many people search for products and services on the internet before making a decision. Because of this, having a proper online presence has become important for businesses that want to connect with more people.Our approach is simple and focused on presenting your services in a clear way so that potential customers can easily understand what your business offers. We work on different areas of digital marketing to improve visibility and make your business easier to find online.This may include improving website structure, sharing useful content, maintaining activity on social platforms, and planning promotional strategies that help your business reach the right audience. Each activity is planned carefully so that the information about your services is presented clearly and consistently.",
      },
      {
        heading: "Why Digital Marketing?",
        text: "Digital marketing is important because many people use the internet to search for information before choosing a service. If a business is not visible online, potential customers may not become aware of it.",
      },
      {
        heading: "Benefits",
        list: [
          "Digital marketing helps improve online visibility so more people can learn about your business.",
          "It allows your services to be presented in a clear and structured way, making it easier for visitors to understand what you offer.",
          "A consistent online presence helps your business appear more reliable and professional.",
          "It helps connect your business with people who may be interested in your services.",
        ],
      },
    ],
  },
};

export default function ServiceDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const { isDark, bgColor } = useTheme();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${bgColor} ${isDark ? 'text-white' : 'text-gray-900'}`}>
        404 - Service Not Found
      </div>
    );
  }
  return (
  <div className={`${bgColor} ${isDark ? 'text-white' : 'text-gray-900'} px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24`}>

    {/* ✅ HEADING */}
    <div className="mb-6 md:mb-14 text-center lg:text-left">
      <span className={`inline-block px-4 py-1 text-sm ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-orange-400/20 text-orange-600'} rounded-full`}>
        Our Premium Service
      </span>

      <h1 className={`mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${isDark ? 'bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 text-transparent bg-clip-text' : 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-transparent bg-clip-text'}`}>
        {service.title}
      </h1>

      <div className={`mt-4 w-20 h-1 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'} rounded-full mx-auto lg:mx-0`}></div>
    </div>

  
    <div className="space-y-10">

      {/* ✅ TOP (Overview + Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT → Overview */}
        <div>
         
          <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold ${isDark ? '' : 'text-orange-500'}`}>
            {service.sections[0].heading}
          </h2>

          <p className={`leading-relaxed text-sm sm:text-base md:text-lg ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
            {service.sections[0].text}
          </p>
        </div>

        {/* RIGHT → IMAGE */}
        <div className="relative group w-full">
          <div className={`absolute -inset-1 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500`}></div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover rounded-2xl shadow-2xl group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>

      </div>

      {/* ✅ BOTTOM → Remaining Sections FULL WIDTH */}
      <div className="space-y-6 max-w-full">

        {service.sections.slice(1).map((section, index) => (
          <div key={index}>

            <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 ${isDark ? '' : 'text-orange-500'}`}>
              {section.heading}
            </h2>

            {section.text && (
              <p className={`leading-relaxed text-sm sm:text-base md:text-lg ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                {section.text}
              </p>
            )}

            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className={`pl-4 border-l-2 ${isDark ? 'border-indigo-500 text-white/80' : 'border-orange-500 text-gray-700'} text-sm sm:text-base md:text-lg`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

          </div>
        ))}

      </div>

    </div>
  </div>
);
}