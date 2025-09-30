import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, User, ArrowRight, Mail } from "lucide-react";
import { blogPosts } from "../data/BlogData";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const categories = [
    "All Posts",
    "Cybersecurity", 
    "AI & Machine Learning",
    "Business Strategy",
    "Cloud Computing",
    "Digital Transformation"
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">CT</span>
              </div>
              <h1 className="text-2xl font-bold">CybaemTech Blog</h1>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Technology <span className="text-primary">Insights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the latest trends in cybersecurity, AI, digital transformation, and innovative 
                technology solutions from our expert team.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                  <div className="relative">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">{post.category}</span>
                    {post.featured && (
                      <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Featured</span>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>👤 {post.author}</span>
                      <span>📅 {post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-xs px-2 py-1 rounded">{tag}</span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="bg-gray-200 text-xs px-2 py-1 rounded">+{post.tags.length - 2} more</span>
                      )}
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline mt-auto">Read More</Link>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Posts");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Technology Insights</h3>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest articles on cybersecurity, AI, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white text-black"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;