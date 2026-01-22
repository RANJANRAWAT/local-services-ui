import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import Footer from "../../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions? We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-purple-100/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 mb-2 text-lg">Phone</h3>
                      <p className="text-gray-600 font-medium">+113 (569) 568 23</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-indigo-100/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 mb-2 text-lg">Email</h3>
                      <p className="text-gray-600 font-medium">info@edura.com</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 mb-2 text-lg">Address</h3>
                      <p className="text-gray-600 font-medium">123 Education Street, Learning City, LC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-purple-100/50 shadow-lg">
                <h3 className="font-extrabold text-gray-900 mb-4 text-lg">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebookF, color: "from-blue-600 to-blue-700", href: "#" },
                    { icon: FaTwitter, color: "from-sky-500 to-sky-600", href: "#" },
                    { icon: FaLinkedinIn, color: "from-blue-700 to-blue-800", href: "#" },
                    { icon: FaInstagram, color: "from-pink-500 to-purple-600", href: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-purple-100/50 relative overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none transition-all"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <FaCheckCircle /> Message Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
