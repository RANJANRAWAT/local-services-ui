import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaUser, FaArrowRight, FaTag, FaClock } from "react-icons/fa";
import Footer from "../../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Effective Online Learning",
      excerpt: "Discover proven strategies to maximize your online learning experience and achieve better results.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Learning Tips",
      image: "📚",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Become a Successful Online Teacher",
      excerpt: "Learn the essential skills and strategies needed to excel as an online instructor.",
      author: "Jane Smith",
      date: "March 10, 2024",
      category: "Teaching",
      image: "👨‍🏫",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Future of E-Learning Platforms",
      excerpt: "Exploring the latest trends and technologies shaping the future of online education.",
      author: "Mike Johnson",
      date: "March 5, 2024",
      category: "Technology",
      image: "🚀",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Best Practices for Course Creation",
      excerpt: "A comprehensive guide to creating engaging and effective online courses.",
      author: "Sarah Williams",
      date: "February 28, 2024",
      category: "Course Design",
      image: "🎓",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Student Success Stories",
      excerpt: "Inspiring stories from students who transformed their careers through online learning.",
      author: "David Brown",
      date: "February 20, 2024",
      category: "Success Stories",
      image: "🌟",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Building a Learning Community",
      excerpt: "How to create and nurture a thriving community of learners and educators.",
      author: "Emily Davis",
      date: "February 15, 2024",
      category: "Community",
      image: "👥",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Latest insights, tips, and stories from the world of online education
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-purple-100/50 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Blog Image with Gradient */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center text-7xl">
                    {post.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      <FaTag className="text-purple-600 text-xs" />
                      <span className="text-purple-700 text-xs font-bold">{post.category}</span>
                    </div>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <FaClock className="text-xs" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-5 pb-5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-purple-600" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 group/link"
                  >
                    Read More <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
