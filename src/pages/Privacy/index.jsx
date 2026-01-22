import React from 'react';
import Footer from '../../components/Footer';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-pink-50/30">
            <div className="pt-20 pb-12 px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>

                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Privacy Policy</h1>

                    <div className="prose prose-purple prose-lg max-w-none text-gray-600">
                        <p className="mb-8 text-sm text-gray-400 font-medium tracking-wide uppercase">Last updated: January 2024</p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm">1</span>
                                    Information We Collect
                                </h2>
                                <p>We collect information that you strictly provide to us. This includes your name, email address, and any other details you choose to share when creating an account or enrolling in a course. We believe in minimal data collection.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm">2</span>
                                    How We Use Your Information
                                </h2>
                                <p>We use the information we collect to operate and maintain our services, to communicate with you about your account and course progress, and to personalize your experience on our platform to serve you better.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm">3</span>
                                    Cookies
                                </h2>
                                <p>We use cookies to improve your experience on our site, understand how you use our services, and customize content. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website effectively.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm">4</span>
                                    Data Security
                                </h2>
                                <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. We use industry-standard encryption and security practices. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your data.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
