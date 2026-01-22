import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Sitemap = () => {
    const pages = [
        { title: 'Home', path: '/', category: 'Main' },
        { title: 'Dashboard', path: '/dashboard', category: 'Main' },
        { title: 'About Us', path: '/about', category: 'Company' },
        { title: 'Courses', path: '/courses', category: 'Education' },
        { title: 'Instructors', path: '/teachers', category: 'Education' },
        { title: 'Contact Us', path: '/contact', category: 'Support' },
        { title: 'Blog', path: '/blog', category: 'Resources' },
        { title: 'Help Center', path: '/help-center', category: 'Support' },
        { title: 'Terms of Service', path: '/terms', category: 'Legal' },
        { title: 'Privacy Policy', path: '/privacy', category: 'Legal' },
        { title: 'Register', path: '/register', category: 'Auth' },
        { title: 'Login', path: '/login', category: 'Auth' }
    ];

    // Group pages by category
    const categorizedPages = pages.reduce((acc, page) => {
        if (!acc[page.category]) {
            acc[page.category] = [];
        }
        acc[page.category].push(page);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-pink-50/30">
            <div className="pt-20 pb-12 px-6">
                <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-[2rem] shadow-xl border border-gray-100">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 pb-6 border-b border-gray-100 text-center">Sitemap</h1>

                    <div className="grid md:grid-cols-3 gap-10">
                        {Object.entries(categorizedPages).map(([category, links]) => (
                            <div key={category} className="space-y-4">
                                <h3 className="text-xl font-bold text-purple-600 border-l-4 border-purple-500 pl-3">{category}</h3>
                                <ul className="space-y-2">
                                    {links.map((page, idx) => (
                                        <li key={idx}>
                                            <Link to={page.path} className="flex items-center text-gray-600 hover:text-purple-600 hover:translate-x-1 transition-all duration-300 group">
                                                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></span>
                                                <span className="font-medium group-hover:font-semibold">{page.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Sitemap;
