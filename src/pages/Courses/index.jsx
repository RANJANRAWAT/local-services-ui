import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaStar, FaUsers, FaClock, FaArrowRight, FaSearch, FaFilter } from "react-icons/fa";
import Footer from "../../components/Footer";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const courses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      instructor: "John Doe",
      rating: 4.8,
      students: 1250,
      duration: "12 hours",
      price: "Free",
      image: "💻",
      category: "Development"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Jane Smith",
      rating: 4.9,
      students: 890,
      duration: "15 hours",
      price: "$49",
      image: "📊",
      category: "Data Science"
    },
    {
      id: 3,
      title: "Digital Marketing Course",
      instructor: "Mike Johnson",
      rating: 4.7,
      students: 2100,
      duration: "10 hours",
      price: "$39",
      image: "📱",
      category: "Marketing"
    },
    {
      id: 4,
      title: "UI/UX Design Bootcamp",
      instructor: "Sarah Williams",
      rating: 4.9,
      students: 1500,
      duration: "20 hours",
      price: "$59",
      image: "🎨",
      category: "Design"
    },
    {
      id: 5,
      title: "Python Programming",
      instructor: "David Brown",
      rating: 4.8,
      students: 3200,
      duration: "18 hours",
      price: "Free",
      image: "🐍",
      category: "Programming"
    },
    {
      id: 6,
      title: "Mobile App Development",
      instructor: "Emily Davis",
      rating: 4.6,
      students: 980,
      duration: "25 hours",
      price: "$69",
      image: "📲",
      category: "Development"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
              All Courses
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Discover hundreds of premium courses to enhance your skills and advance your career
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                <div className="flex items-center gap-3">
                  <FaSearch className="absolute left-6 text-white/80 text-xl" />
                  <input
                    type="text"
                    placeholder="Search courses by name or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
                  />
                  <button className="px-6 py-4 bg-white/20 hover:bg-white/30 rounded-xl text-white font-semibold transition flex items-center gap-2">
                    <FaFilter /> Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Found
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-purple-100/50 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Floating Badge */}
                {course.price === "Free" && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg animate-bounce">
                    FREE
                  </div>
                )}

                {/* Course Image with Gradient Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center text-7xl">
                    {course.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {course.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4 font-medium">By {course.instructor}</p>

                  {/* Course Info Icons */}
                  <div className="flex items-center gap-4 mb-5 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5 bg-yellow-50 px-2 py-1 rounded-lg">
                      <FaStar className="text-yellow-400" />
                      <span className="font-bold text-gray-800">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaUsers className="text-purple-600" />
                      <span className="font-medium">{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-indigo-600" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                  </div>

                  {/* Price and Enroll */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        {course.price}
                      </span>
                    </div>
                    <Link
                      to="/register"
                      className="group/btn flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      Enroll <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
