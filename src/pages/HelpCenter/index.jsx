import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaBook, FaUserCog, FaCreditCard } from 'react-icons/fa';
import Footer from '../../components/Footer';

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="min-h-screen bg-pink-50/30">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 text-center rounded-b-[50px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">How can we help you?</h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for articles, guides, or FAQs..."
                            className="w-full py-5 px-8 pl-14 rounded-full text-gray-900 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-lg placeholder-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 relative z-20">
                    {[
                        { icon: FaBook, title: "Getting Started", desc: "Guides for new students" },
                        { icon: FaUserCog, title: "Account Settings", desc: "Manage your profile & security" },
                        { icon: FaCreditCard, title: "Billing & Payments", desc: "Invoices, refunds, and plans" },
                        { icon: FaQuestionCircle, title: "Course FAQs", desc: "Common questions about courses" }
                    ].map((cat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-purple-50 group text-center">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                <cat.icon size={28} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">{cat.title}</h3>
                            <p className="text-gray-500 text-sm">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How do I reset my password?", a: "You can reset your password by clicking 'Forgot Password' on the login page. Follow the instructions sent to your email." },
                            { q: "Can I download courses offline?", a: "Yes, our mobile app supports offline viewing for all enrolled courses. Just look for the download icon next to the lesson." },
                            { q: "What is the refund policy?", a: "We offer a 30-day money-back guarantee for all course purchases if you are not satisfied with the content." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-purple-200 transition-colors">
                                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">Q</span>
                                    {faq.q}
                                </h4>
                                <p className="text-gray-600 leading-relaxed pl-11">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HelpCenter;
