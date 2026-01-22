import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaUser, FaArrowRight, FaTag } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-purple-100">Latest insights, tips, and stories from the world of online education</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              >
                {/* Blog Image */}
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>

                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <FaTag className="text-purple-600" />
                    <span className="text-purple-600 text-sm font-semibold">{post.category}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
                  >
                    Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

