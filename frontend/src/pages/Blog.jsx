
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogCategories, blogs } from "../data/blogs";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = blogs.filter(
    (b) =>
      (activeCategory === "All" || b.category === activeCategory) &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase()))
  );
  const featured = blogs.find((b) => b.featured) || filteredBlogs[0];
  const gridBlogs = filteredBlogs.filter((b) => b.id !== featured.id);

  return (
    <div className="bg-gradient-to-br from-[#0a0f1c] to-black min-h-screen flex flex-col">
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">Insights, ideas, and strategies to grow in the digital world</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-80 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <div className="flex gap-2 mt-2 md:mt-0">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${activeCategory === cat ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg' : 'bg-white/5 text-white/70 border-white/10 hover:bg-blue-900/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog */}
        {featured && (
          <section className="mb-14 flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg p-6 md:p-10 relative overflow-hidden group hover:shadow-blue-500/20 transition duration-300">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full md:w-80 h-56 md:h-64 object-cover rounded-xl shadow-lg mb-4 md:mb-0 group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
            <div className="flex-1 flex flex-col items-start">
              <span className="px-3 py-1 mb-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">{featured.category}</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">{featured.title}</h2>
              <p className="text-white/80 mb-4 line-clamp-3">{featured.description}</p>
              <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                <span>{featured.author}</span>
                <span>•</span>
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
              <Link
                to={`/blog/${featured.slug}`}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
              >
                Read More
              </Link>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.2)] transition duration-300"></div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gridBlogs.map(blog => (
            <div
              key={blog.id}
              className="relative bg-white/10 border border-white/10 rounded-2xl shadow-xl backdrop-blur-lg flex flex-col p-5 transition duration-300 hover:scale-105 hover:shadow-blue-500/20 hover:border-blue-400/40 group overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">{blog.category}</span>
              <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{blog.title}</h3>
              <p className="text-white/80 mb-3 line-clamp-2">{blog.description}</p>
              <div className="flex items-center gap-3 text-white/60 text-xs mb-4">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <Link
                to={`/blog/${blog.slug}`}
                className="self-start px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
              >
                Read More →
              </Link>
              <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:shadow-[0_0_32px_6px_rgba(99,102,241,0.18)] transition duration-300"></div>
            </div>
          ))}
        </section>

        {/* Pagination Button removed as requested */}
      </main>
     
    </div>
  );
}
