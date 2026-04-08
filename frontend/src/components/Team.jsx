import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ishani Rastogi",
    role: "Backend Developer + Content Writer",
    image: "/Team/Ishani.jpeg", 
    linkedin: "https://www.linkedin.com/in/ishani-rastogi-602512375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desc: "Builds strong backend systems and creates engaging content that connects with users.",
  },
  {
    name: "Utkarsh Jaiswal",
    role: "Full Stack Developer",
    image: "/Team/Utkarsh.png",
    linkedin: "https://www.linkedin.com/in/utkarsh-jaiswal-101401317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desc: "Handles both frontend and backend, ensuring smooth performance and scalable applications.",
  },
  {
    name: "Lucky Ray",
    role: "Full Stack Developer",
    image: "/team/lucky.jpg",
    linkedin: "https://www.linkedin.com/in/lucky-ray-5a6642338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desc: "Focuses on building efficient and modern web solutions with full-stack expertise.",
  },
  {
    name: "Aafiya Shaikh",
    role: "UI/UX Designer + Frontend Developer",
    image: "/Team/Aafiya.jpeg",
    linkedin: "https://www.linkedin.com/in/shaikh-aafiya-2442a8297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desc: "Designs intuitive user experiences and builds beautiful, responsive frontends.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-5 px-4 bg-[#0a0f1c] text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-white/70">The people behind our success..!</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden 
          bg-white/5 backdrop-blur-lg 
            border border-white/10 
          hover:border-white/20
            shadow-lg 
            hover:shadow-[0_0_8px_rgba(59,130,246,0.25),0_0_12px_rgba(168,85,247,0.2)]
            transition duration-300 
            hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover 
                group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60 
                opacity-0 group-hover:opacity-100 
                flex items-center justify-center gap-6
                transition duration-300"
              >

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

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>

              <p className="text-sm mt-1">
                <span className="text-indigo-400 font-semibold">
                  {member.role}
                </span>
              </p>

              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                {member.desc}
              </p>

              <div
                className="mt-4 h-1 w-0 
                bg-gradient-to-r from-blue-500 to-purple-600 
                group-hover:w-full transition-all duration-300"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
