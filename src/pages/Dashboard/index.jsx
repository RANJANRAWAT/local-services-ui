import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  FaGraduationCap,
  FaBook,
  FaCertificate,
  FaUser,
  FaStar,
  FaChalkboardTeacher,
  FaPlayCircle,
  FaTimes,
} from "react-icons/fa";
import image from "../../assets/newImgs.png";

const Dashboard = () => {
  const { user } = useAuth();
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayVideo = (videoUrl) => {
    if (!videoUrl) return;
    // Extract video ID from YouTube URL
    const videoId = videoUrl.split("v=")[1] || videoUrl.split("/").pop().split("?")[0];
    setActiveVideo(videoId);
  };

  return (
    <div className="min-h-screen bg-pink-50/30 font-sans text-gray-900 ">


      {/* Hero Section */}
      <div className="max-w-7xl mx-auto bg-purple-600 px-8 md:px-16 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center ">
        {/* Left Content */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Develop your <br />
            skills in a new <br />
            and unique way
          </h2>
          <p className="text-white text-lg max-w-md leading-relaxed">
            Explore a transformative approach to skill development on our online
            learning platform. Uncover a new realm of learning experiences and
            elevate your expertise in unique ways.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-pink-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-pink-500/30 hover:bg-pink-600 transition">
              Enroll Now
            </button>
            <button className="flex items-center gap-3 text-white font-semibold hover:text-gray-900 transition">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-500 text-xl">
                <FaPlayCircle />
              </div>
              What's Edura?
            </button>
          </div>
        </div>

        {/* Right Image Composition */}
        <div className="relative flex justify-center py-10">
          {/* Background Decorative Circle */}
          <div className="absolute inset-0 bg-transparent border-2 border-dashed border-purple-200 rounded-full w-[350px] h-[350px] animate-spin-slow opacity-50 m-auto -z-10 hidden md:block"></div>

          {/* Main Image */}
          <div className="relative z-10 w-full flex justify-center">
            <img
              src={image}
              alt="Student"
              className="h-[350px] object-cover drop-shadow-2xl z-10"
            />
          </div>

          {/* Floating Cards */}
          {/* Card 1: Courses */}
          <div className="absolute top-30 left-4 md:left-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce">
            <div className="p-3 bg-purple-500 rounded-lg text-white">
              <FaBook />
            </div>
            <div>
              <p className="font-bold text-gray-800">100+</p>
              <p className="text-xs text-gray-500">Online Courses</p>
            </div>
          </div>

          {/* Card 2: Students */}
          <div className="absolute bottom-32 -right-4 md:right-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce delay-100">
            <div className="p-3 bg-pink-500 rounded-lg text-white">
              <FaGraduationCap />
            </div>
            <div>
              <p className="font-bold text-gray-800">10k+</p>
              <p className="text-xs text-gray-500">Online Students</p>
              {/* Avatars */}
              <div className="flex -space-x-2 mt-1">
                {/* {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                  ></div>
                ))} */}
              </div>
            </div>
          </div>

          {/* Card 3: Expert Instruction */}
          <div className="absolute bottom-20 left-2 md:left-5 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce delay-100">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400 bg-gray-100 flex items-center justify-center">
              <FaUser className="text-gray-400" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">
                Expert Instruction
              </p>
              <p className="text-xs text-gray-500">200+ Instructors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Courses Section */}
        {/* Courses Section */}
        <div className="bg-purple-600 rounded-[30px] p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Popular Courses
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Discover our most sought-after courses, designed to help you master new skills and advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, category: "Web Design", title: "Web Design & Development", price: "$450.00", instructor: "J. Morgan", videoUrl: "https://youtu.be/HcOc7P5BMi4?si=qvPlWeB6smg6sEwX" },
              { id: 2, category: "UI/UX Design", title: "Wireframing & Prototyping", price: "$450.00", instructor: "A. Bell", videoUrl: "https://youtu.be/iyrEStiTZh0?si=283qHO_qkv3ppBQP" },
              { id: 3, category: "Data Science", title: "Python For Data Science", price: "$450.00", instructor: "M. Smith", videoUrl: "https://youtu.be/JDcZBzb46ts?si=lnsxC5f20OnN2R4m" }
            ].map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-4 shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Thumbnail */}
                <div className="h-48 rounded-2xl bg-gray-200 mb-4 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {course.videoUrl ? (
                      <button
                        onClick={() => handlePlayVideo(course.videoUrl)}
                        className="cursor-pointer focus:outline-none"
                      >
                        <FaPlayCircle className="text-white/80 text-5xl group-hover:text-white transition-colors" />
                      </button>
                    ) : (
                      <FaPlayCircle className="text-white/80 text-5xl group-hover:text-white transition-colors cursor-pointer" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Valid Badge & Rating */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full uppercase tracking-wide">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1 bg-purple-600 px-2 py-1 rounded-lg">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-white text-xs font-bold">4.9</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {course.title}
                  </h3>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-gray-500 text-xs">
                    <div className="flex items-center gap-1">
                      <FaBook className="text-gray-400" />
                      <span>12+ Courses</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-gray-400" />
                      <span>120 Students</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200 my-3"></div>

                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold text-lg">{course.price}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-sm"></div>
                      <span className="text-sm font-medium text-gray-600">{course.instructor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teachers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Expert Teachers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((teacher) => (
              <div
                key={teacher}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChalkboardTeacher className="text-white text-4xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  Teacher {teacher}
                </h3>
                <p className="text-gray-600 text-sm mb-3">Expert Instructor</p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {10 + teacher * 5} Courses
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Learning Progress
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaBook className="text-purple-600 text-4xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-purple-600 mb-1">12</p>
              <p className="text-gray-600">Enrolled Courses</p>
            </div>
            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <FaCertificate className="text-indigo-600 text-4xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-indigo-600 mb-1">5</p>
              <p className="text-gray-600">Completed Courses</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <FaGraduationCap className="text-purple-600 text-4xl mx-auto mb-3" />
              <p className="text-3xl font-bold text-purple-600 mb-1">3</p>
              <p className="text-gray-600">Certificates Earned</p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-10 transition-colors bg-black/50 rounded-full p-2"
            >
              <FaTimes size={24} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
