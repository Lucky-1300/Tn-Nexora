import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeWrapper";

/* 🔥 Leadership */
const leadership = {
  name: "Sankalp Srivastava",
  role: "Marketing Team Head",
  image: "/Team/Sankalp.jpeg",
  linkedin: "https://linkedin.com/in/sankalp-srivastava-813688240",
  desc: "Sankalp Srivastava leads our marketing team with a strong focus on growth, branding, and performance-driven strategies. He specializes in digital marketing, audience targeting, and building scalable outreach systems that ensure our products reach the right audience. His leadership bridges the gap between development and market demand, helping the company grow consistently and sustainably.",
};

/* 💻 Team */
const teamMembers = [
  {
    name: "Ishani Rastogi",
    role: "Backend Developer + Content Writer",
    image: "/Team/Ishani.jpeg",
    linkedin: "https://www.linkedin.com/in/ishani-rastogi-602512375",
    desc: "Builds strong backend systems and creates engaging content that connects with users.",
  },
  {
    name: "Utkarsh Jaiswal",
    role: "Full Stack Developer",
    image: "/Team/Utkarsh.png",
    linkedin: "https://www.linkedin.com/in/utkarsh-jaiswal-101401317",
    desc: "Handles both frontend and backend, ensuring smooth performance and scalable applications.",
  },
  {
    name: "Lucky Ray",
    role: "Full Stack Developer",
    image: "/Team/Lucky.jpeg",
    linkedin: "https://www.linkedin.com/in/lucky-ray-5a6642338",
    desc: "Focuses on building efficient and modern web solutions with full-stack expertise.",
  },
  {
    name: "Aafiya Shaikh",
    role: "UI/UX Designer + Frontend Developer",
    image: "/Team/Aafiya-v2.png",
    linkedin: "https://www.linkedin.com/in/shaikh-aafiya-2442a8297",
    desc: "Designs intuitive user experiences and builds beautiful, responsive frontends.",
  },
];

export default function Team() {
  const { isDark } = useTheme();

  return (
    <section
      id="team"
      className={`py-12 px-4 ${
        isDark ? "bg-[#0a0f1c] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our Team
        </h2>
        <p className={`${isDark ? "text-white/70" : "text-gray-600"} mt-3`}>
          The people behind our success..!
        </p>
      </div>

      {/* ================= LEADERSHIP ================= */}
      <div className="max-w-4xl mx-auto mb-20">
        <div
          className={`group relative rounded-2xl overflow-hidden border backdrop-blur-xl transition duration-300
          ${
            isDark
              ? "bg-white/5 border-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
              : "bg-orange-50/40 border-orange-200/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">

            {/* Image */}
            <div className="relative w-full md:w-[38%] h-[300px] md:h-[320px] overflow-hidden">
              <img
                src={leadership.image}
                alt={leadership.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <a
                  href={leadership.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 md:w-[62%]">
              <h3 className="text-2xl md:text-3xl font-bold">
                {leadership.name}
              </h3>

              <p
                className={`mt-2 font-semibold ${
                  isDark ? "text-indigo-400" : "text-orange-600"
                }`}
              >
                {leadership.role}
              </p>

              <p
                className={`mt-4 leading-relaxed text-sm md:text-base ${
                  isDark ? "text-white/70" : "text-gray-600"
                }`}
              >
                {leadership.desc}
              </p>

              {/* Divider */}
              <div
                className={`mt-6 h-[2px] w-16 rounded-full ${
                  isDark
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TEAM GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`group rounded-2xl overflow-hidden border backdrop-blur-lg transition duration-300
            ${
              isDark
                ? "bg-white/5 border-white/10 hover:border-white/20 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                : "bg-orange-50/40 border-orange-200/40 hover:border-orange-300/60 hover:shadow-[0_0_12px_rgba(249,115,22,0.2)]"
            } hover:-translate-y-2`}
          >
            {/* Image */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <h3 className="font-semibold text-lg">
                {member.name}
              </h3>

              <p
                className={`text-sm font-semibold mt-1 ${
                  isDark ? "text-indigo-400" : "text-orange-600"
                }`}
              >
                {member.role}
              </p>

              <p
                className={`text-sm mt-3 ${
                  isDark ? "text-white/60" : "text-gray-600"
                }`}
              >
                {member.desc}
              </p>

              {/* Animated line */}
              <div
                className={`mt-5 h-[3px] w-0 group-hover:w-full transition-all duration-300 rounded-full
                ${
                  isDark
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-gradient-to-r from-orange-500 to-orange-600"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}