import { Mail, Phone, Building2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-2 md:px-8 w-full flex flex-col items-center justify-center bg-transparent">
      {/* Heading */}
      <div className="mb-12 w-full max-w-7xl mx-auto">
        <p className="inline-block px-4 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full mb-4">
          CONTACT US
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get In Touch With TN Nexora
        </h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-stretch">
        {/* LEFT SIDE (Contact Info) */}
        <div className="md:col-span-2 space-y-8 flex flex-col justify-between">
          {/* Branch */}
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-indigo-500/10 border border-indigo-400/20 rounded-xl group-hover:scale-110 transition duration-300">
              <Building2 className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Branch Office
              </h3>
              <p className="text-white/60 text-sm">
                #116, 1100 Leander Rd #126, kanpur, TX 78628
              </p>
            </div>
          </div>

          {/* Head */}
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl group-hover:scale-110 transition duration-300">
              <Building2 className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Head Office</h3>
              <p className="text-white/60 text-sm">
                1309 Coffeen Avenue STE 1200 Sheridan,Kanpur 82801
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-slate-500/10 border border-slate-400/20 rounded-xl group-hover:scale-110 transition duration-300">
              <Phone className="text-slate-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="text-white/70 text-sm">+1 562-983-9466</p>
              <p className="text-white/70 text-sm">+1 592-993-6913</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-indigo-500/10 border border-indigo-400/20 rounded-xl group-hover:scale-110 transition duration-300">
              <Mail className="text-indigo-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-indigo-300 text-sm">
                tnnexora@technologies.us
              </p>
            </div>
          </div>

          {/* Social */}

          <div className="pt-6 border-t border-white/10">
            <p className="text-white/70 mb-4">Follow Our Social Media</p>

            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white/80 hover:scale-110 hover:bg-blue-500/20 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V9h3v10zM6.5 7.7C5.6 7.7 5 7.1 5 6.2s.6-1.5 1.5-1.5S8 5.3 8 6.2 7.4 7.7 6.5 7.7zM20 19h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3s.1-9 0-10h3v1.4c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white/80 hover:scale-110 hover:bg-pink-500/20 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6-1a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white/80 hover:scale-110 hover:bg-red-500/20 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 4.5.5 6.2.5 6.2S.2 8.2.2 10.1v1.8c0 1.9.3 3.9.3 3.9s.2 1.7.9 2.4c.9.9 2.1.9 2.7 1 2 .2 7.9.3 7.9.3s4.8 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.3-2 .3-3.9v-1.8c0-1.9-.3-3.9-.3-3.9zM9.8 14.7V8.7l5.5 3-5.5 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM (Contact Form) */}
        <div className="md:col-span-3 flex items-center">
          <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl hover:shadow-indigo-500/10 hover:scale-[1.01] transition duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-style"
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="input-style"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input-style"
              />
              <input type="text" placeholder="Website" className="input-style" />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="input-style"
              ></textarea>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <input type="checkbox" className="mt-1 accent-indigo-500" />
                <p>I agree to receive updates and communications.</p>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
