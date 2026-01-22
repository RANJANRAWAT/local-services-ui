import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 rounded-t-[50px] mt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-extrabold text-white flex items-center gap-2">
              <FaGraduationCap className="text-purple-500" />
              Edura
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering learners worldwide with accessible, high-quality education. Join our community and start your journey today.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '#' },
                { label: 'Our Courses', path: '/courses' },
                { label: 'Instructors', path: '/teachers' },
                { label: 'Testimonials', path: '#' },
                { label: 'Blog', path: '/blog' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-purple-400 transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Help Center', path: '#' },
                { label: 'Terms of Service', path: '#' },
                { label: 'Privacy Policy', path: '#' },
                { label: 'Sitemap', path: '#' },
                { label: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-purple-400 transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
              />
              <button className="absolute right-2 top-2 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition shadow-lg hover:shadow-purple-500/30">
                <FaPaperPlane size={14} />
              </button>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-purple-500" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-purple-500" />
                <span>support@edura.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500">
            © 2024 <span className="text-white font-bold">Edura</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-purple-400 transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-purple-400 transition">Terms of Use</Link>
            <Link to="#" className="hover:text-purple-400 transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

