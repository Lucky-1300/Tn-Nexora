
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogCategories, blogs } from "../data/blogs";
import { useTheme } from '../components/ThemeWrapper';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { isDark, bgColor, textColor, headingColor } = useTheme();

  const filteredBlogs = blogs.filter(
    (b) =>
      (activeCategory === "All" || b.category === activeCategory) &&
      [b.title, b.description, b.summary, ...(b.highlights || [])]
        .filter(Boolean)
        .some((text) => text.toLowerCase().includes(search.toLowerCase()))
  );
  const featured = filteredBlogs.find((b) => b.featured) || filteredBlogs[0];
  const gridBlogs = filteredBlogs.filter((b) => featured && b.id !== featured.id);

  return (
    <div className={`min-h-screen ${bgColor}`}>
      <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
        <section className={`rounded-[2rem] border ${isDark ? 'border-white/10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_transparent_40%),linear-gradient(180deg,rgba(16,21,34,0.96),rgba(10,15,28,1))]' : 'border-orange-300/40 bg-[radial-gradient(circle_at_top,_rgba(255,140,0,0.16),_transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,250,245,1))]'} px-6 py-12 text-center shadow-2xl ${isDark ? 'shadow-indigo-950/20' : 'shadow-orange-200/20'} md:px-10`}>
          <span className={`inline-flex rounded-full border ${isDark ? 'border-indigo-400/30 bg-indigo-400/10 text-indigo-300' : 'border-orange-400/30 bg-orange-400/10 text-orange-600'} px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em]`}>
            Blog Insights
          </span>
          <h1 className={`mt-5 text-4xl font-extrabold leading-tight md:text-6xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={isDark ? 'bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent'}>
              Our Blog
            </span>
          </h1>
          <p className={`mx-auto mt-4 max-w-3xl text-lg leading-8 ${isDark ? 'text-white/75' : 'text-gray-700'} md:text-xl`}>
            Insights, ideas, and strategies to help your brand grow across AI,
            design, marketing, and cloud.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full rounded-xl border ${isDark ? 'border-white/15 bg-white/5 text-white placeholder-white/50 focus:border-indigo-400/60 focus:ring-indigo-500/30' : 'border-orange-300/40 bg-orange-50/50 text-gray-900 placeholder-gray-500 focus:border-orange-400/60 focus:ring-orange-400/30'} px-5 py-3 outline-none transition focus:ring-2 md:w-96`}
            />
            <div className="flex flex-wrap justify-center gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === cat
                      ? isDark 
                        ? "border-transparent bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/20"
                        : "border-transparent bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                      : isDark
                      ? "border-white/10 bg-white/5 text-white/70 hover:border-indigo-400/40 hover:bg-indigo-400/10"
                      : "border-orange-300/40 bg-orange-100/30 text-gray-700 hover:border-orange-400/60 hover:bg-orange-200/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {featured && (
          <section className="group relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur-lg transition duration-300 hover:border-indigo-400/40 hover:shadow-indigo-500/10 md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-64 w-full rounded-2xl object-cover shadow-xl transition duration-300 group-hover:scale-[1.02] md:h-full"
                loading="lazy"
              />

              <div className="flex flex-col items-start">
                <div className="flex flex-wrap gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white shadow ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}>
                    {featured.category}
                  </span>
                  {featured.highlights?.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${isDark ? 'border-white/10 bg-[#11182a] text-white/70' : 'border-orange-300/40 bg-orange-50/50 text-gray-700'}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h2 className={`mt-4 text-3xl font-bold leading-tight md:text-5xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {featured.title}
                </h2>
                <p className={`mt-4 max-w-2xl text-base leading-7 md:text-lg ${isDark ? 'text-white/78' : 'text-gray-800'}`}>
                  {featured.summary || featured.description}
                </p>

                <div className={`mt-6 flex flex-wrap items-center gap-4 text-sm ${isDark ? 'text-white/55' : 'text-gray-600'}`}>
                  <span>{featured.author}</span>
                  <span>•</span>
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>

                <p className={`mt-5 max-w-2xl text-sm leading-6 ${isDark ? 'text-white/65' : 'text-gray-700'}`}>
                  {featured.content?.[0]}
                </p>

                <Link
                  to={`/blog/${featured.slug}`}
                  className={`mt-6 inline-flex rounded-full px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500 shadow-indigo-500/20' : 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/20'}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-indigo-300' : 'text-orange-600'}`}>
                Latest posts
              </span>
              <h2 className={`mt-2 text-2xl font-bold md:text-3xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                More articles worth reading
              </h2>
            </div>
            <p className={`hidden max-w-xl text-right text-sm leading-6 md:block ${isDark ? 'text-white/55' : 'text-gray-600'}`}>
              Each card includes a short summary, key takeaways, and a preview
              of the topic so the page feels richer and easier to scan.
            </p>
          </div>

          {gridBlogs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className={`group relative overflow-hidden rounded-3xl border p-5 backdrop-blur-lg transition duration-300 hover:-translate-y-1 ${isDark ? 'border-white/10 bg-white/5 shadow-xl shadow-indigo-950/20 hover:border-indigo-400/50 hover:shadow-indigo-500/10' : 'border-orange-300/40 bg-orange-50/30 shadow-lg shadow-orange-200/20 hover:border-orange-400/50 hover:shadow-orange-400/10'}`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white shadow ${isDark ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}>
                      {blog.category}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(blog.highlights || []).map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-1 text-xs ${isDark ? 'border-white/10 bg-[#11182a] text-white/70' : 'border-orange-300/40 bg-orange-50/50 text-gray-700'}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className={`mt-4 text-xl font-bold leading-snug line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {blog.title}
                  </h3>
                  <p className={`mt-3 line-clamp-3 text-sm leading-6 ${isDark ? 'text-white/72' : 'text-gray-700'}`}>
                    {blog.summary || blog.description}
                  </p>

                  <div className={`mt-5 flex items-center gap-3 text-xs ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className={`mt-6 inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition ${isDark ? 'border-indigo-400/30 bg-indigo-400/10 text-indigo-200 hover:border-indigo-400/60 hover:bg-indigo-400/20' : 'border-orange-400/30 bg-orange-100/30 text-orange-600 hover:border-orange-400/60 hover:bg-orange-100/50'}`}
                  >
                    Read More →
                  </Link>

                  <div className={`pointer-events-none absolute inset-0 rounded-3xl transition duration-300 ${isDark ? 'group-hover:shadow-[0_0_32px_6px_rgba(99,102,241,0.14)]' : 'group-hover:shadow-[0_0_32px_6px_rgba(255,140,0,0.14)]'}`} />
                </article>
              ))}
            </div>
          ) : (
            <div className={`rounded-3xl border px-6 py-12 text-center ${isDark ? 'border-white/10 bg-white/5 text-white/70' : 'border-orange-300/40 bg-orange-50/30 text-gray-700'}`}>
              No blogs match your search or selected category.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
