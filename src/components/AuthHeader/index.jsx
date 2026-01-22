import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const AuthHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

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

  // Helper to determine active link class
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "font-medium transition text-sm sm:text-base";
    return `${baseClass} ${isActive ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-600"}`;
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left Side - Logo + Slider */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img src={logo} alt="EDURA" className="h-10 w-10" />
              <span className="text-2xl font-bold text-[#3b2bd8] hidden sm:block">EDURA</span>
            </Link>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-300 hidden md:block"></div>

            {/* Sliding Banner - Same Line */}
            <div className="relative overflow-hidden flex-1 min-w-0 h-12 rounded-lg">
              <div className="relative h-full flex items-center px-4">
                {/* Sliding Messages */}
                <div className="flex w-full h-full relative">
                  {bannerMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center text-black font-semibold text-xs sm:text-sm md:text-base transition-all duration-1000 ease-in-out ${index === currentSlide
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
                <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                  {bannerMessages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                        ? "w-5 bg-purple-600"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            <Link
              to="/"
              className={getLinkClass("/")}
            >
              Home
            </Link>
            <Link
              to="/login"
              className={getLinkClass("/login")}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={getLinkClass("/register")}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;

