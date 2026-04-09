import { Mail, Phone, Building2 } from "lucide-react";
import { useState } from "react";
import { useTheme } from './ThemeWrapper';

export default function Contact() {
  const [result, setResult] = useState("");
  const { isDark, bgColor } = useTheme();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "ee3598a3-c466-424e-b6d7-0087ada49894");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      // ✅ SEND DATA TO GOOGLE SHEET
      fetch(
        "https://script.google.com/macros/s/AKfycbzC5FwY_sJ4lQyM51toxauohXOJw3RuRtP7n4BuHZafC7VvgPwl8HeGlIZi8kr8KY-q/exec",
        {
          method: "POST",
          mode: "no-cors", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            website: formData.get("website"),
            message: formData.get("message"),
          }),
        },
      )
        .then((res) => res.text())
        .then((data) => console.log("Sheet response:", data))
        .catch((err) => console.log("Sheet error:", err));

      setResult("SUCCESS");
      event.target.reset();
    } else {
      setResult("ERROR");
    }

    setTimeout(() => {
      setResult("");
    }, 3000);
  };
  return (
    <section
      id="contact"
      // className={`mb-12 py-4 px-2 md:px-8 w-full flex flex-col items-center justify-center ${bgColor}`}
      className={`py-4 px-2 md:px-8 w-full flex flex-col items-center ${bgColor}`}
    >
      {/* Heading */}
      <div className="mb-10 w-full max-w-7xl mx-auto">
        <p className={`inline-block px-4 py-1 text-sm ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-orange-400/20 text-orange-600'} rounded-full mb-4`}>
          CONTACT US
        </p>
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-orange-500'}`}>
          Get In Touch With TN Nexora
        </h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-stretch">
        {/* LEFT SIDE (Contact Info) */}
        <div className="md:col-span-2 space-y-8 flex flex-col justify-between">
          {/* Branch */}
          <div className="flex items-start gap-4 group">
            <div className={`p-4 ${isDark ? 'bg-indigo-500/10 border-indigo-400/20' : 'bg-orange-400/10 border-orange-400/20'} border rounded-xl group-hover:scale-110 transition duration-300`}>
              <Building2 className={isDark ? 'text-indigo-400' : 'text-orange-500'} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-orange-600'}`}>
                Execution Office
              </h3>
              <p className={isDark ? 'text-white/60' : 'text-gray-700'}>kanpur, Uttarpardesh.</p>
            </div>
          </div>

          {/* Head */}
          <div className="flex items-start gap-4 group">
            <div className={`p-4 ${isDark ? 'bg-blue-500/10 border-blue-400/20' : 'bg-blue-400/10 border-blue-400/20'} border rounded-xl group-hover:scale-110 transition duration-300`}>
              <Building2 className={isDark ? 'text-blue-400' : 'text-blue-600'} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-orange-600'}`}>Head Office</h3>
              <p className={isDark ? 'text-white/60' : 'text-gray-700'}>kanpur, Uttarpardesh.</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 group">
            <div className={`p-4 ${isDark ? 'bg-slate-500/10 border-slate-400/20' : 'bg-slate-400/10 border-slate-400/20'} border rounded-xl group-hover:scale-110 transition duration-300`}>
              <Phone className={isDark ? 'text-slate-300' : 'text-slate-700'} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-orange-600'}`}>Phone</h3>
              <p className={isDark ? 'text-white/70' : 'text-gray-700'}>+91 9320050310</p>
              <p className={isDark ? 'text-white/70' : 'text-gray-700'}>+91 9420050310</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 group">
            <div className={`p-4 ${isDark ? 'bg-indigo-500/10 border-indigo-400/20' : 'bg-orange-400/10 border-orange-400/20'} border rounded-xl group-hover:scale-110 transition duration-300`}>
              <Mail className={isDark ? 'text-indigo-300' : 'text-orange-500'} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-orange-600'}`}>Email</h3>
              <p className={isDark ? 'text-indigo-300' : 'text-orange-600'}>
                tnnexoratechnologies@gmail.com
              </p>
            </div>
          </div>

          {/* Social */}

          <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-orange-300/40'}`}>
            <p className={isDark ? 'text-white/70' : 'text-gray-700'}>Follow Our Social Media</p>

            <div className="flex gap-4 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/tn-nexora-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition hover:scale-110 ${isDark ? 'bg-white/10 border-white/20 text-white/80 hover:bg-blue-500/20' : 'bg-orange-100/50 border-orange-300/40 text-orange-600 hover:bg-orange-200/50'}`}
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
                href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition hover:scale-110 ${isDark ? 'bg-white/10 border-white/20 text-white/80 hover:bg-pink-500/20' : 'bg-orange-100/50 border-orange-300/40 text-orange-600 hover:bg-orange-200/50'}`}
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
                href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition hover:scale-110 ${isDark ? 'bg-white/10 border-white/20 text-white/80 hover:bg-red-500/20' : 'bg-orange-100/50 border-orange-300/40 text-orange-600 hover:bg-orange-200/50'}`}
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
          <div className={`w-full backdrop-blur-xl border rounded-2xl p-6 md:p-10 shadow-xl transition duration-300 ${isDark ? 'bg-white/5 border-white/10 hover:shadow-indigo-500/10' : 'bg-orange-50/70 border-orange-300/40 hover:shadow-orange-400/10'} hover:scale-[1.01]`}>
            <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-orange-600'}`}>
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className={`w-full px-4 py-3 rounded-lg border text-base transition focus:outline-none focus:ring-2 ${isDark ? 'bg-slate-800 border-slate-700 text-gray-300 placeholder-slate-500 focus:ring-blue-500' : 'bg-orange-50 border-orange-300/60 text-gray-900 placeholder-gray-600 focus:ring-orange-500'}`}
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className={`w-full px-4 py-3 rounded-lg border text-base transition focus:outline-none focus:ring-2 ${isDark ? 'bg-slate-800 border-slate-700 text-gray-300 placeholder-slate-500 focus:ring-blue-500' : 'bg-orange-50 border-orange-300/60 text-gray-900 placeholder-gray-600 focus:ring-orange-500'}`}
                  required
                />
              </div>

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-lg border text-base transition focus:outline-none focus:ring-2 ${isDark ? 'bg-slate-800 border-slate-700 text-gray-300 placeholder-slate-500 focus:ring-blue-500' : 'bg-orange-50 border-orange-300/60 text-gray-900 placeholder-gray-600 focus:ring-orange-500'}`}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 rounded-lg border text-base transition focus:outline-none focus:ring-2 ${isDark ? 'bg-slate-800 border-slate-700 text-gray-300 placeholder-slate-500 focus:ring-blue-500' : 'bg-orange-50 border-orange-300/60 text-gray-900 placeholder-gray-600 focus:ring-orange-500'}`}
                required
              />

              <input
                type="text"
                name="website"
                placeholder="Website"
                className={`w-full px-4 py-3 rounded-lg border text-base transition focus:outline-none focus:ring-2 ${isDark ? 'bg-slate-800 border-slate-700 text-gray-300 placeholder-slate-500 focus:ring-blue-500' : 'bg-orange-50 border-orange-300/60 text-gray-900 placeholder-gray-600 focus:ring-orange-500'}`}
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className={`w-full px-4 py-3 rounded-lg border text-base transition focus:outline-none focus:ring-2 ${isDark ? 'bg-slate-800 border-slate-700 text-gray-300 placeholder-slate-500 focus:ring-blue-500' : 'bg-orange-50 border-orange-300/60 text-gray-900 placeholder-gray-600 focus:ring-orange-500'}`}
                required
              ></textarea>

              <div className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-700'}`}>
                <input
                  type="checkbox"
                  className={`mt-1 ${isDark ? 'accent-indigo-500' : 'accent-orange-500'}`}
                  required
                />
                <p>I agree to receive updates and communications.</p>
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-white font-semibold hover:scale-105 hover:shadow-lg transition duration-300 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}
              >
                Submit Now
              </button>
            </form>
            {result === "SUCCESS" && (
              <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg">
                ✅ Message sent successfully!
              </div>
            )}

            {result === "ERROR" && (
              <div className="fixed top-5 right-5 bg-red-500 text-white px-6 py-3 rounded-lg">
                ❌ Something went wrong!
              </div>
            )}

            {result === "Sending..." && (
              <div className="fixed top-5 right-5 bg-yellow-500 text-black px-6 py-3 rounded-lg">
                ⏳ Sending...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
