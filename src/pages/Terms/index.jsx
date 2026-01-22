import React from 'react';
import Footer from '../../components/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen bg-pink-50/30">
            <div className="pt-20 pb-12 px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>

                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Terms of Service</h1>

                    <div className="prose prose-purple prose-lg max-w-none text-gray-600">
                        <p className="mb-8 text-sm text-gray-400 font-medium tracking-wide uppercase">Last updated: January 2024</p>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">1</span>
                                    Acceptance of Terms
                                </h2>
                                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">2</span>
                                    Use License
                                </h2>
                                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Edura's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">3</span>
                                    Disclaimer
                                </h2>
                                <p>The materials on Edura's website are provided on an 'as is' basis. Edura makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">4</span>
                                    Limitations
                                </h2>
                                <p>In no event shall Edura or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Edura's website.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
