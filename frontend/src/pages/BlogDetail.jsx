import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogBySlug } from "../data/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="bg-gradient-to-br from-[#0a0f1c] to-black min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Blog not found</h1>
          <Link
            to="/blog"
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0a0f1c] to-black min-h-screen">
      <main className="w-full max-w-6xl mx-auto px-4 py-12">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 transition hover:border-blue-300/50 hover:bg-blue-500/20 hover:text-white"
        >
          ← Back to Blog
        </Link>

        <article className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 md:h-80 object-cover"
            loading="lazy"
          />

          <div className="p-6 md:p-10">
            <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              {blog.title}
            </h1>

            <div className="flex items-center flex-wrap gap-3 text-white/60 text-sm mb-8">
              <span>{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            <div className="space-y-4 text-white/85 leading-relaxed text-base md:text-lg">
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