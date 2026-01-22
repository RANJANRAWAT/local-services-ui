import React from 'react';
import { FaGraduationCap, FaHandsHelping, FaGlobe } from 'react-icons/fa';
import Footer from '../../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-pink-50/30">
            <div className="pt-20 pb-12 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900">About Edura</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Empowering learners worldwide through accessible, high-quality, and innovative education.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
                                <FaGraduationCap />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Expert Instructors</h3>
                            <p className="text-gray-500 leading-relaxed">Learn from industry leaders and academic experts passionate about teaching.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
                                <FaHandsHelping />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Community Support</h3>
                            <p className="text-gray-500 leading-relaxed">Join a vibrant community of learners and mentors supporting each other.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
                                <FaGlobe />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-gray-800">Global Access</h3>
                            <p className="text-gray-500 leading-relaxed">Access our courses from anywhere in the world, at any time.</p>
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white">
                        <div className="prose prose-lg mx-auto text-gray-600">
                            <p className="mb-4">
                                Edura was founded with a simple mission: to make high-quality education accessible to everyone, everywhere.
                                We believe that learning is a lifelong journey, and we are dedicated to providing the tools and resources
                                necessary for individuals to unlock their full potential.
                            </p>
                            <p>
                                Our platform offers a diverse range of courses across various disciplines, ensuring that there is something for everyone.
                                Whether you are looking to advance your career, pick up a new hobby, or deepen your knowledge in a specific field, Edura is here to guide you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
