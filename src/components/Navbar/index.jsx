import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isLoggedIn } = useAuth();

  // Sliding banner messages
  const bannerMessages = [
    "🎓 Start Your Learning Journey Today!",
    "📚 Access 100+ Premium Courses",
    "👨‍🏫 Learn from Expert Teachers",
    "🏆 Get Certified & Advance Your Career"
  ];

  // Auto-slide banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0b0e2d] text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2">
          {/* First Row - Contact Info */}
          <div className="flex justify-between items-center mb-2">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="flex items-center gap-2 text-xs sm:text-sm">
                <FaPhoneAlt className="text-purple-400" /> +113 (569) 568 23
              </span>
              <span className="flex items-center gap-2 text-xs sm:text-sm">
                <FaEnvelope className="text-purple-400" /> info@edura.com
              </span>
              <span className="hidden md:block text-xs sm:text-sm">
                Mon - Sat: 8:00 - 15:00
              </span>
            </div>

            {/* Right - Social & Login */}
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-xs sm:text-sm">Follow Us:</span>
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />

              {/* Divider */}
              <span className="h-4 w-px bg-gray-600 mx-2"></span>

              {/* Login / Register - Show when NOT logged in */}
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="hover:text-white font-medium transition text-xs sm:text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="text-white font-medium cursor-pointer hover:text-purple-300 transition text-xs sm:text-sm"
                >
                  My Account
                </Link>
              )}
            </div>
          </div>

          {/* Second Row - Slider */}
          <div className="flex items-center gap-4">
            {/* Sliding Banner */}
            <div className="relative overflow-hidden flex-1 min-w-0 h-8 rounded">
              <div className="relative h-full flex items-center px-3">
                {/* Sliding Messages */}
                <div className="flex w-full h-full relative">
                  {bannerMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center text-white font-semibold text-xs transition-all duration-1000 ease-in-out ${
                        index === currentSlide
                          ? "translate-x-0 opacity-100"
                          : index < currentSlide
                          ? "-translate-x-full opacity-0"
                          : "translate-x-full opacity-0"
                      }`}
                    >
                      <span className="truncate px-2">{message}</span>
                    </div>
                  ))}
                </div>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                  {bannerMessages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-4 bg-white"
                          : "w-1 bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white shadow relative border-b-2 border-purple-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left Side - Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src={logo} alt="EDURA" className="h-9 w-9" />
              <span className="text-2xl font-bold text-[#3b2bd8] hidden sm:block">
                EDURA
              </span>
            </div>

            {/* Right Side - Menu + Actions */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Menu */}
              <nav className="hidden lg:flex gap-6 font-medium text-gray-800">
                <Link to="/dashboard" className="hover:text-purple-600 transition">HOME</Link>
                <Link to="/courses" className="hover:text-purple-600 transition">COURSES</Link>
                <Link to="/teachers" className="hover:text-purple-600 transition">TEACHERS</Link>
                <Link to="/blog" className="hover:text-purple-600 transition">BLOG</Link>
                <Link to="/contact" className="hover:text-purple-600 transition">CONTACT</Link>
              </nav>

              {/* Icons */}
              <div className="flex items-center gap-3">
                <FaSearch
                  className="text-gray-600 cursor-pointer hover:text-purple-600 transition"
                  onClick={() => setShowSearch(true)}
                />
                <FaHeart className="text-gray-600 cursor-pointer hover:text-purple-600 transition" />
                <FaShoppingCart className="text-gray-600 cursor-pointer hover:text-purple-600 transition" />
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:opacity-90 transition text-sm sm:text-base whitespace-nowrap">
                Contact Us →
              </button>

              {/* Search Popup */}
              {showSearch && (
                <div className="absolute right-0 top-14 z-50 bg-white shadow-2xl rounded-xl flex items-center px-4 py-3 w-80 border">
                  <FaSearch className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-1 outline-none text-gray-700"
                    autoFocus
                  />
                  <FaTimes
                    className="text-gray-500 cursor-pointer ml-3"
                    onClick={() => setShowSearch(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
