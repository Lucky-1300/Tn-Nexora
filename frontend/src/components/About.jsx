export default function About() {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/20">
      <img
        src="/src/assets/About.jpeg"
        alt="Team working"
        className="w-full md:w-1/2 rounded-xl object-cover h-64 md:h-72 shadow-lg"
      />
      <div className="flex-1 text-left">
        <span className="inline-block mb-2 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-semibold">Our Growth</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Tracking Our Growth Through Key Stats of Our Achievements</h2>
        <p className="text-white/80 mb-4">
          At Nexora, our journey began over a decade ago with a simple mission: to revolutionize the logistics industry. What started as a small team of passionate professionals has grown into a global leader.
        </p>
        <p className="text-white/70 mb-6">
          We create mind-blowing visuals, brands, websites and products that help startups and innovative companies grow. Partner with us to unlock your business’s full potential. From design to final MVP, we drive measurable growth through innovative digital technology.
        </p>
        <div className="flex gap-8 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">1 million</div>
            <div className="text-xs text-white/70">Ship delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">500</div>
            <div className="text-xs text-white/70">Clients worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">10 years</div>
            <div className="text-xs text-white/70">Years of experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
