import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaStar, FaBook, FaUsers, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "John Doe",
      specialization: "Web Development",
      rating: 4.9,
      students: 5000,
      courses: 12,
      experience: "10+ years",
      image: "👨‍💻",
      bio: "Expert in full-stack development with 10+ years of experience"
    },
    {
      id: 2,
      name: "Jane Smith",
      specialization: "Data Science",
      rating: 4.8,
      students: 3500,
      courses: 8,
      experience: "8+ years",
      image: "👩‍🔬",
      bio: "Data scientist and machine learning expert"
    },
    {
      id: 3,
      name: "Mike Johnson",
      specialization: "Digital Marketing",
      rating: 4.7,
      students: 6000,
      courses: 15,
      experience: "12+ years",
      image: "👨‍💼",
      bio: "Marketing strategist helping businesses grow online"
    },
    {
      id: 4,
      name: "Sarah Williams",
      specialization: "UI/UX Design",
      rating: 4.9,
      students: 4200,
      courses: 10,
      experience: "9+ years",
      image: "👩‍🎨",
      bio: "Creative designer with expertise in user experience"
    },
    {
      id: 5,
      name: "David Brown",
      specialization: "Python Programming",
      rating: 4.8,
      students: 7500,
      courses: 18,
      experience: "11+ years",
      image: "👨‍🏫",
      bio: "Python expert and software engineering instructor"
    },
    {
      id: 6,
      name: "Emily Davis",
      specialization: "Mobile Development",
      rating: 4.6,
      students: 2800,
      courses: 7,
      experience: "7+ years",
      image: "👩‍💻",
      bio: "Mobile app developer specializing in iOS and Android"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FaChalkboardTeacher className="text-6xl mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Our Expert Teachers</h1>
          <p className="text-xl text-purple-100">Learn from industry professionals with years of experience</p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center group"
              >
                {/* Teacher Image */}
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {teacher.image}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{teacher.specialization}</p>
                <p className="text-gray-600 text-sm mb-4">{teacher.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y">
                  <div>
                    <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                      <FaStar />
                      <span className="text-gray-800 font-bold">{teacher.rating}</span>
                    </div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold mb-1">{teacher.students}+</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold mb-1">{teacher.courses}</div>
                    <div className="text-xs text-gray-600">Courses</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <FaGraduationCap className="inline mr-2" />
                  {teacher.experience} Experience
                </div>

                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
                >
                  View Courses <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;

