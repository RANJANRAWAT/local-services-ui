import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Profile from "./Profile";
import Footer from "../../components/Footer";
import {
  FaGraduationCap,
  FaBook,
  FaCertificate,
  FaUser,
  FaStar,
  FaChalkboardTeacher,
  FaPlayCircle,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import image from "../../assets/newImgs.png";
import { TEACHERS } from "../../data/teachers";

const Dashboard = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(null);

  // Protect route - redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handlePlayVideo = (videoUrl) => {
    if (!videoUrl) return;
    // Extract video ID from YouTube URL
    const videoId = videoUrl.split("v=")[1] || videoUrl.split("/").pop().split("?")[0];
    setActiveVideo(videoId);
  };

  // Don't render if not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-pink-50/30 font-sans text-gray-900 ">
      {/* My Account / Profile */}
      {/* <div className="max-w-7xl mx-auto px-6 pt-8">
        <Profile user={user} />
      </div> */}

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
            {/* <button
              onClick={() => navigate('/videos')}
              className="bg-red-600 text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:bg-red-700 transition flex items-center gap-2"
            >
              <FaPlayCircle className="text-sm" />
              Video Library
            </button> */}
            <button
              onClick={() => {
                const randomRoomId = Date.now().toString();
                navigate(`/room/${randomRoomId}`);
              }}
              className="bg-purple-800 text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:bg-purple-900 transition flex items-center gap-2"
            >
              <FaPhone className="text-sm" />
              Start Video Call
            </button>
          </div>
        </div>

        {/* Right Image Composition */}
        <div className="relative flex justify-center py-10">
          {/* Background Decorative Circle */}
          {/* Background Decorative Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer Glow */}
            <div className="w-[450px] h-[450px] bg-white/20 rounded-full absolute blur-2xl"></div>
            {/* Rotating Ring */}
            <div className="w-[400px] h-[400px] border-[3px] border-dashed border-white/40 rounded-full absolute animate-spin-slow"></div>
            {/* Inner Circle */}
            <div className="w-[350px] h-[350px] bg-purple-500 rounded-full absolute shadow-2xl"></div>
          </div>

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
                {/* Video Embed */}
                <div className="h-48 rounded-2xl mb-4 overflow-hidden relative group">
                  {course.videoUrl ? (
                    (() => {
                      // Extract video ID from YouTube URL
                      const videoId = course.videoUrl.includes('youtu.be/')
                        ? course.videoUrl.split('youtu.be/')[1]?.split('?')[0]
                        : course.videoUrl.split('v=')[1]?.split('&')[0];

                      return videoId ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
                          title={course.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                        ></iframe>
                      ) : (
                        <div className="h-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                          <FaPlayCircle className="text-white/80 text-5xl" />
                        </div>
                      );
                    })()
                  ) : (
                    <div className="h-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                      <FaPlayCircle className="text-white/80 text-5xl" />
                    </div>
                  )}
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
        <div className="bg-purple-600 rounded-[30px] p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Expert Teachers
              </h2>
              <p className="text-purple-100 max-w-2xl mx-auto">
                Meet our dedicated team of expert instructors who are committed to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEACHERS.slice(0, 4).map((teacher) => (
                <div
                  key={teacher.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/teacher/${teacher.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") navigate(`/teacher/${teacher.id}`);
                  }}
                  className="group bg-white rounded-3xl p-6 text-center shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  <div className="relative mb-6">
                    <div className="w-28 h-28 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 text-5xl">
                      {teacher.image || "👩‍🏫"}
                    </div>
                    <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full text-black shadow-sm">
                      {teacher.rating} ★
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-purple-600 text-sm font-medium mb-4 uppercase tracking-wider text-xs">
                    {teacher.specialization}
                  </p>

                  {/* Social Icons - Animated */}
                  <div className="flex justify-center gap-3 mb-4 opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                      <FaFacebook size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors">
                      <FaTwitter size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors">
                      <FaLinkedin size={14} />
                    </button>
                  </div>

                  <div className="border-t border-dashed border-gray-200 my-4"></div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Courses</span>
                    <span className="font-bold text-gray-900">{teacher.courses}</span>
                  </div>
                  <div className="mt-3 text-xs font-bold text-purple-700">
                    Click to view full details →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-purple-600 rounded-[30px] p-8 md:p-12 mb-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Your Learning Analytics
              </h2>
              <p className="text-purple-100 max-w-2xl mx-auto">
                Track your progress and achievements as you advance through your learning journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat Card 1 */}
              <div className="group bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaBook className="text-8xl text-purple-600 transform rotate-12" />
                </div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <FaBook className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Enrolled Courses</p>
                    <h3 className="text-4xl font-extrabold text-gray-900">12</h3>
                  </div>
                </div>
                <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-purple-600 h-full rounded-full w-3/4"></div>
                </div>
                <p className="text-xs text-purple-600 mt-2 font-bold">+2 this month</p>
              </div>

              {/* Stat Card 2 */}
              <div className="group bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaCertificate className="text-8xl text-pink-600 transform rotate-12" />
                </div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <FaCertificate className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Completed</p>
                    <h3 className="text-4xl font-extrabold text-gray-900">5</h3>
                  </div>
                </div>
                <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-pink-500 h-full rounded-full w-1/2"></div>
                </div>
                <p className="text-xs text-pink-600 mt-2 font-bold">42% completion rate</p>
              </div>

              {/* Stat Card 3 */}
              <div className="group bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaGraduationCap className="text-8xl text-indigo-600 transform rotate-12" />
                </div>
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <FaGraduationCap className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium mb-1">Certificates</p>
                    <h3 className="text-4xl font-extrabold text-gray-900">3</h3>
                  </div>
                </div>
                <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full w-full"></div>
                </div>
                <p className="text-xs text-indigo-600 mt-2 font-bold">All perfect scores!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
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
