import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaStar, FaUsers, FaClock, FaArrowRight, FaSearch } from "react-icons/fa";

const Courses = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-xl text-purple-100">Discover hundreds of courses to enhance your skills</p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              >
                {/* Course Image */}
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {course.image}
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {course.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4">By {course.instructor}</p>

                  {/* Course Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Price and Enroll */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                      Enroll <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

