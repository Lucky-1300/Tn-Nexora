import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogBySlug } from "../data/blogs";
import { useTheme } from "../components/ThemeWrapper";

export default function BlogDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const { isDark } = useTheme();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className={`${isDark ? 'bg-gradient-to-br from-[#0a0f1c] to-black' : 'bg-white'} min-h-screen flex items-center justify-center px-4`}>
        <div className="text-center">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Blog not found</h1>
          <Link
            to="/blog"
            className={`inline-block px-5 py-2 rounded-full ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'} text-white font-semibold`}
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isDark ? 'bg-gradient-to-br from-[#0a0f1c] to-black' : 'bg-white'} min-h-screen`}>
      <main className="w-full max-w-6xl mx-auto px-4 py-12">
        <Link
          to="/blog"
          className={`mb-6 inline-flex items-center gap-2 rounded-full border ${isDark ? 'border-blue-400/30 bg-blue-500/10 text-blue-200 hover:border-blue-300/50 hover:bg-blue-500/20 hover:text-white' : 'border-orange-400/30 bg-orange-500/10 text-orange-700 hover:border-orange-300/50 hover:bg-orange-500/20 hover:text-orange-900'} px-5 py-2.5 text-sm font-semibold transition`}
        >
          ← Back to Blog
        </Link>

        <article className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-orange-200/50'} border rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden`}>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 md:h-80 object-cover"
            loading="lazy"
          />

          <div className="p-6 md:p-10">
            <span className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'} shadow`}>
              {blog.category}
            </span>
            <h1 className={`text-3xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              {blog.title}
            </h1>

            <div className={`flex items-center flex-wrap gap-3 ${isDark ? 'text-white/60' : 'text-gray-600'} text-sm mb-8`}>
              <span>{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            <div className={`space-y-4 ${isDark ? 'text-white/85' : 'text-gray-700'} leading-relaxed text-base md:text-lg`}>
              {blog.content.map((paragraph, index) => (
                <p key={`${blog.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}