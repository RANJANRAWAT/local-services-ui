import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChalkboardTeacher, FaStar, FaBook, FaUsers, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import Footer from "../../components/Footer";

const Teachers = () => {
  const navigate = useNavigate();
  
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

  const handleTeacherClick = (teacherId) => {
    navigate(`/teacher/${teacherId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <FaChalkboardTeacher className="text-7xl mx-auto mb-6 animate-bounce-slow" />
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
            Our Expert Teachers
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Learn from industry professionals with years of real-world experience
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                onClick={() => handleTeacherClick(teacher.id)}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 text-center border border-purple-100/50 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Floating Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:via-indigo-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                
                {/* Teacher Image with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-36 h-36 mx-auto bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500 shadow-2xl border-4 border-white">
                    {teacher.image}
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <FaStar className="text-xs" /> {teacher.rating}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-purple-600 font-bold mb-3 text-lg">{teacher.specialization}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{teacher.bio}</p>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-5 border-y border-gray-100">
                  <div className="group/stat">
                    <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                      <FaStar className="group-hover/stat:animate-pulse" />
                      <span className="text-gray-900 font-extrabold text-lg">{teacher.rating}</span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Rating</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-gray-900 font-extrabold text-lg mb-2 group-hover/stat:text-purple-600 transition-colors">
                      {teacher.students.toLocaleString()}+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Students</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-gray-900 font-extrabold text-lg mb-2 group-hover/stat:text-indigo-600 transition-colors">
                      {teacher.courses}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Courses</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
                  <FaGraduationCap className="text-purple-600" />
                  <span className="font-semibold">{teacher.experience} Experience</span>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  View Profile <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Teachers;
