import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'How to Build a Modern SaaS Landing Page',
    date: '2026-03-20',
    excerpt: 'Learn the key design and tech strategies for creating a premium SaaS landing page with React and Tailwind CSS.',
  },
  {
    title: 'Why Dark Mode is Essential for Tech Brands',
    date: '2026-02-15',
    excerpt: 'Explore the benefits of dark UI themes and how they improve user experience and brand perception.',
  },
  {
    title: 'Top 5 Cloud Solutions for Startups',
    date: '2026-01-30',
    excerpt: 'A quick guide to the best cloud platforms and tools for scaling your startup efficiently.',
  },
];

export default function Blog() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Blog</h1>
        <div className="flex flex-col gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-2 text-blue-300">{post.title}</h2>
              <div className="text-xs text-white/60 mb-2">{post.date}</div>
              <p className="text-white/80">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
