import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGraduationCap, FaBook, FaUsers, FaAward, FaArrowLeft } from "react-icons/fa";
import AuthHeader from "../../components/AuthHeader";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Please enter your email address");
            return;
        }

        // Dummy password reset logic
        console.log("Password reset requested for:", email);
        setSubmitted(true);

        // Auto redirect after 3 seconds
        setTimeout(() => {
            navigate("/login");
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
            <AuthHeader />

            <div className="flex items-center justify-center px-4 py-2 min-h-[calc(100vh-100px)]">
                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Animated Image Section (Same as Login/Register) */}
                    <div className="hidden md:flex flex-col items-center justify-center space-y-6 animate-slide-in-left relative">
                        <div className="relative w-full max-w-md group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl transform rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <div className="text-center space-y-4">
                                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-bounce-slow">
                                        <FaGraduationCap className="text-white text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 animate-fade-in">Recover Account</h3>
                                    <p className="text-gray-600">Get back to your learning journey</p>
                                </div>
                            </div>
                        </div>

                        {/* Animated Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                            <div className="bg-white rounded-xl p-4 shadow-lg text-center transform hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                <div className="flex justify-center mb-2">
                                    <FaBook className="text-purple-600 text-2xl group-hover:animate-spin" />
                                </div>
                                <div className="text-2xl font-bold text-purple-600 animate-count-up">100+</div>
                                <div className="text-sm text-gray-600">Courses</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-lg text-center transform hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                <div className="flex justify-center mb-2">
                                    <FaUsers className="text-indigo-600 text-2xl group-hover:animate-bounce" />
                                </div>
                                <div className="text-2xl font-bold text-indigo-600 animate-count-up">50+</div>
                                <div className="text-sm text-gray-600">Teachers</div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-lg text-center transform hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                                <div className="flex justify-center mb-2">
                                    <FaAward className="text-purple-600 text-2xl group-hover:rotate-12 transition-transform" />
                                </div>
                                <div className="text-2xl font-bold text-purple-600 animate-count-up">10K+</div>
                                <div className="text-sm text-gray-600">Students</div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute left-0 top-20 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-float"></div>
                        <div className="absolute left-10 bottom-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-float-delayed"></div>
                    </div>

                    {/* Right Side - Forgot Password Form */}
                    <div className="w-full max-w-md mx-auto animate-slide-in-right">
                        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                            {/* Animated Background Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h2>
                                <p className="text-gray-600 mb-8">Enter your email to reset your password</p>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                                        {error}
                                    </div>
                                )}

                                {submitted ? (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-center">
                                        <p className="font-semibold">Reset Link Sent!</p>
                                        <p className="text-sm mt-1">Check your email for instructions.</p>
                                        <p className="text-xs mt-3 text-green-600">Redirecting to login...</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl"
                                        >
                                            Send Reset Link
                                        </button>
                                    </form>
                                )}

                                <div className="mt-6 text-center">
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 transition"
                                    >
                                        <FaArrowLeft className="mr-2" />
                                        Back to Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
