import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Footer from '../../components/Footer';

const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Web Developer",
        image: "https://i.pravatar.cc/150?img=1",
        content: "Edura transformed my career. The web development bootcamp was intense but incredibly rewarding. I landed my dream job within a month of graduating!",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Data Analyst",
        image: "https://i.pravatar.cc/150?img=11",
        content: "The data science courses are top-notch. The instructors explain complex concepts in a way that is easy to understand. Highly recommended!",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Graphic Designer",
        image: "https://i.pravatar.cc/150?img=5",
        content: "I loved the creative arts section. It helped me refine my skills and build a portfolio that got me my first freelance clients.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <div className="min-h-screen bg-pink-50/30">
            <div className="pt-20 pb-12 px-6">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Student Success Stories</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our community of learners who have achieved their goals thanks to Edura.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {TESTIMONIALS_DATA.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-8 rounded-[2rem] shadow-xl relative mt-4 hover:-translate-y-3 transition-transform duration-300 border border-purple-50">
                                <div className="absolute top-0 right-0 p-8 opacity-10 text-purple-600">
                                    <FaQuoteLeft size={40} />
                                </div>

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-purple-100 shadow-md" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                                        <p className="text-purple-600 text-sm font-bold uppercase tracking-wide">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex text-yellow-400 mb-4 text-sm bg-yellow-50 inline-flex px-3 py-1 rounded-full">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < testimonial.rating ? "" : "text-gray-300"} />
                                    ))}
                                </div>

                                <p className="text-gray-600 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Testimonials;
