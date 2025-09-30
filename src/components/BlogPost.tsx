import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { blogPosts } from "../data/BlogData";

const categories = [
  "Cybersecurity",
  "AI & Machine Learning",
  "Business Strategy",
  "Cloud Computing",
  "Digital Transformation"
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  // Example Table of Contents (static)
  const toc = [
    "Implement Zero Trust Architecture",
    "Enhance Employee Security Awareness",
    "Adopt AI-Powered Security Solutions",
    "Develop Comprehensive Incident Response Plans"
  ];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <header className="border-b bg-white">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="font-bold text-xl text-blue-700">CybaemTech Blog</div>
          </div>
        </header>
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found.</h2>
          <p className="text-gray-500">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold text-xl text-blue-700">CybaemTech Blog</div>
          <nav className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/blog?category=${encodeURIComponent(cat)}`}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  post.category === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
        {/* Search Bar */}
        <div className="container mx-auto px-6 py-2">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full md:w-1/2 border rounded px-4 py-2 text-base"
            disabled // For demo only, implement search in Blog.tsx
          />
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <Link to="/blog" className="text-blue-600 hover:underline text-sm mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-2 inline-block">{post.category}</span>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 text-sm">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7"></path><path d="M16 6l-4-4-4 4"></path><path d="M12 2v14"></path></svg>
              Share
            </button>
          </div>
          <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded mb-8" />
          <div className="prose prose-lg mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="font-semibold mr-2">Tags:</span>
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
          {/* Author Box */}
          <div className="bg-gray-50 border rounded p-4 flex items-center gap-4 mt-8">
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-xs text-gray-500">{post.authorRole}</div>
              <div className="text-xs text-gray-500 mt-2">
                {post.author} is a thought leader at CybaemTech, specializing in innovative solutions for modern business challenges. Focuses on cyber resilience, AI, and digital transformation.
              </div>
            </div>
          </div>
        </div>
        {/* Table of Contents Sidebar */}
        <aside className="w-full lg:w-64 mb-8 lg:mb-0">
          <div className="bg-gray-50 border rounded p-4 sticky top-24">
            <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
            <ul className="text-sm space-y-2">
              {toc.map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.replace(/\s+/g, "-").toLowerCase()}`} className="text-blue-600 hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BlogPost;