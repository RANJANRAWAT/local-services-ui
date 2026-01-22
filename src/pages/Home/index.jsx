import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaCertificate,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaCheckCircle,
  FaRocket,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaVideo,
  FaDollarSign,
  FaChartLine,
  FaAward,
  FaClock,
  FaGlobe,
} from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Animations */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/30 animate-fade-in">
                🎓 Learn & Teach Platform
              </span>
            </div> */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in-left">
              Welcome to <span className="text-yellow-300">EDURA</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-purple-100 animate-slide-in-right">
              Whether you want to learn new skills or share your expertise, EDURA is the perfect platform for you
            </p>
            
            {/* Two Paths - Learner & Trainer */}
            <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in">
              {/* For Learners */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 cursor-pointer">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaUserGraduate className="text-white text-4xl" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">I Want to Learn</h2>
                <p className="text-purple-100 mb-6">Discover thousands of courses, learn from experts, and advance your career</p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all"
                >
                  Start Learning <FaArrowRight />
                </Link>
              </div>

              {/* For Trainers */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 cursor-pointer">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FaChalkboardTeacher className="text-white text-4xl" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">I Want to Teach</h2>
                <p className="text-purple-100 mb-6">Share your knowledge, create courses, and earn while teaching others</p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all"
                >
                  Become a Trainer <FaArrowRight />
                </Link>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-purple-100">Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-purple-100">Courses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform hover:scale-110 transition-transform">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-purple-100">Trainers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Learners Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <FaUserGraduate className="text-purple-600 text-5xl mx-auto" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              For <span className="text-purple-600">Learners</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Start your learning journey with our comprehensive courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-transparent hover:border-purple-200">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaBook className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">500+ Courses</h3>
              <p className="text-gray-600">Choose from a wide range of subjects</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-transparent hover:border-indigo-200">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaCertificate className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Certified</h3>
              <p className="text-gray-600">Earn certificates upon completion</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-transparent hover:border-purple-200">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaClock className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Learn at Your Pace</h3>
              <p className="text-gray-600">Study anytime, anywhere</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-transparent hover:border-indigo-200">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaUsers className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Trainers Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <FaChalkboardTeacher className="text-indigo-600 text-5xl mx-auto" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              For <span className="text-indigo-600">Trainers</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Share your expertise and build your teaching career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-indigo-100">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaVideo className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Create Courses</h3>
              <p className="text-gray-600">Upload videos and create engaging content</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-indigo-100">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaDollarSign className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Earn Money</h3>
              <p className="text-gray-600">Get paid for your courses</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-indigo-100">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaChartLine className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Track Performance</h3>
              <p className="text-gray-600">Monitor your course analytics</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-indigo-100">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaGlobe className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reach Global Audience</h3>
              <p className="text-gray-600">Teach students worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image/Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                  About EDURA
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Your Gateway to <span className="text-purple-600">Quality Education</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EDURA is a comprehensive online learning platform designed to bridge the gap between learners and educators. 
                We provide a seamless experience for students to acquire new skills and for teachers to share their expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make quality education accessible to everyone, everywhere. With hundreds of courses 
                across various domains, expert instructors, and a supportive community, EDURA empowers you to achieve 
                your learning and teaching goals.
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <FaCheckCircle className="text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">500+ Courses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <FaCheckCircle className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700 font-medium">200+ Expert Teachers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <FaCheckCircle className="text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">10K+ Active Students</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <FaCheckCircle className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl mt-6"
              >
                Explore Courses <FaArrowRight />
              </Link>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform shadow-xl">
                    <div className="text-5xl mb-4">🎓</div>
                    <h3 className="text-xl font-bold mb-2">Learn</h3>
                    <p className="text-purple-100">Master new skills</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform shadow-xl">
                    <div className="text-5xl mb-4">👨‍🏫</div>
                    <h3 className="text-xl font-bold mb-2">Teach</h3>
                    <p className="text-indigo-100">Share knowledge</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform shadow-xl">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-xl font-bold mb-2">Courses</h3>
                    <p className="text-white/90">500+ available</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform shadow-xl">
                    <div className="text-5xl mb-4">🏆</div>
                    <h3 className="text-xl font-bold mb-2">Certify</h3>
                    <p className="text-white/90">Get certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular <span className="text-purple-600">Courses</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">Most enrolled courses this month</p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
            >
              View All Courses <FaArrowRight />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
                <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar />
                    <span className="text-gray-700 font-semibold">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Course Title {item}</h3>
                <p className="text-gray-600 mb-4">Learn advanced skills with expert guidance</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold">Free</span>
                  <Link to="/courses" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">
                    View Course <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100">
              Join our community of learners and trainers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Learner CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <FaUserGraduate className="text-white text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Start Learning</h3>
                <p className="text-purple-100">Join thousands of students</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/register"
                  className="group bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  Sign Up as Learner
                </Link>
                <Link
                  to="/login"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
                >
                  Already a Learner?
                </Link>
              </div>
            </div>

            {/* Trainer CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <FaChalkboardTeacher className="text-white text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Start Teaching</h3>
                <p className="text-purple-100">Share your knowledge and earn</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/register"
                  className="group bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  Become a Trainer
                </Link>
                <Link
                  to="/login"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all"
                >
                  Already a Trainer?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-purple-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-600 font-medium">Active Students</div>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-indigo-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Courses Available</div>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-purple-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-gray-600 font-medium">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

