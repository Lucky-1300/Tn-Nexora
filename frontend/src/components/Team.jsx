import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./ThemeWrapper";

const teamMembers = [
  {
    name: "Ishani Rastogi",
    role: "Backend Developer + Content Writer",
    image: "/Team/Ishani.jpeg",
    linkedin:
      "https://www.linkedin.com/in/ishani-rastogi-602512375",
    desc: "Builds strong backend systems and creates engaging content that connects with users.",
  },
  {
    name: "Utkarsh Jaiswal",
    role: "Full Stack Developer",
    image: "/Team/Utkarsh.png",
    linkedin:
      "https://www.linkedin.com/in/utkarsh-jaiswal-101401317",
    desc: "Handles both frontend and backend, ensuring smooth performance and scalable applications.",
  },
  {
    name: "Lucky Ray",
    role: "Full Stack Developer",
    image: "/Team/Lucky.jpeg",
    linkedin:
      "https://www.linkedin.com/in/lucky-ray-5a6642338",
    desc: "Focuses on building efficient and modern web solutions with full-stack expertise.",
  },
  {
    name: "Aafiya Shaikh",
    role: "UI/UX Designer + Frontend Developer",
    image: "/Team/Aafiya.png",
    linkedin:
      "https://www.linkedin.com/in/shaikh-aafiya-2442a8297",
    desc: "Designs intuitive user experiences and builds beautiful, responsive frontends.",
  },
  {
    name: "Sankalp Srivastava",
    role: " Marketing Team Head",
    image: "/Team/Sankalp.jpeg",
    linkedin: "https://linkedin.com/in/sankalp-srivastava-813688240",
    desc: "Sankalp Srivastava leads our marketing team with a strong focus on growth, branding, and performance-driven strategies...",
  },
];

export default function Team() {
  const { isDark } = useTheme();

  return (
    <section
      id="team"
      className={`py-5 px-4 transition duration-300 ${
        isDark ? "bg-[#0a0f1c] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Meet Our Team
        </h2>
        <p
          className={`mt-2 ${
            isDark ? "text-white/70" : "text-gray-600"
          }`}
        >
          The people behind our success..!
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`group rounded-2xl overflow-hidden transition duration-300
            ${index === 4 ? "md:col-span-2 md:col-start-2" : ""}
            ${
              isDark
                ? "bg-white/5 border-white/10 hover:border-white/20 hover:shadow-[0_0_8px_rgba(59,130,246,0.25),0_0_12px_rgba(168,85,247,0.2)]"
                : "bg-orange-50/40 border-orange-200/40 hover:border-orange-300/60 hover:shadow-[0_0_8px_rgba(249,115,22,0.25),0_0_12px_rgba(234,88,12,0.2)]"
            } border backdrop-blur-lg shadow-lg hover:-translate-y-2`}
          >
            {index === 4 ? (
              <div className="flex flex-col md:flex-row">
                
                <div className="relative w-full md:w-1/2 h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition duration-300">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-blue-400 transition"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>

                <div className="p-3 w-full md:w-1/2 flex flex-col justify-center">
                  <h3
                    className={`text-base font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {member.name}
                  </h3>

                  <p className="text-xs mt-1">
                    <span
                      className={`font-semibold ${
                        isDark ? "text-indigo-400" : "text-orange-600"
                      }`}
                    >
                      {member.role}
                    </span>
                  </p>

                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      isDark ? "text-white/60" : "text-gray-600"
                    }`}
                  >
                    {member.desc}
                  </p>

                  <div
                    className={`mt-2 h-1 w-0 transition-all duration-300
                    ${
                      isDark
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-orange-500 to-orange-600"
                    }
                    group-hover:w-full`}
                  ></div>
                </div>
              </div>
            ) : (
              <>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition duration-300">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-blue-400 transition"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {member.name}
                  </h3>

                  <p className="text-sm mt-1">
                    <span
                      className={`font-semibold ${
                        isDark ? "text-indigo-400" : "text-orange-600"
                      }`}
                    >
                      {member.role}
                    </span>
                  </p>

                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      isDark ? "text-white/60" : "text-gray-600"
                    }`}
                  >
                    {member.desc}
                  </p>

                  <div
                    className={`mt-4 h-1 w-0 transition-all duration-300
                    ${
                      isDark
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-orange-500 to-orange-600"
                    }
                    group-hover:w-full`}
                  ></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}