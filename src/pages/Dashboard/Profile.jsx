import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  FaEdit, 
  FaTimes, 
  FaSave, 
  FaSignOutAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

const formatDateTime = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString();
};

const Profile = ({ user: userProp }) => {
  const { user: userFromContext, updateUser, logout } = useAuth();
  const user = userProp || userFromContext;
  const navigate = useNavigate();
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const initials =
    (user?.name || user?.email || "?")
      .toString()
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((s) => s[0]?.toUpperCase())
      .join("") || "?";

  const handleEditClick = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    });
    setIsEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (updateUser) {
      updateUser(formData);
    }
    setIsEditModalOpen(false);
  };

  const handleClose = () => {
    setIsEditModalOpen(false);
  };

  const handleLogout = () => {
    if (logout) logout();
    // Use replace: true to prevent back button navigation
    navigate("/login", { replace: true });
    // Also clear browser history for this session
    window.history.pushState(null, "", "/login");
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 rounded-[40px] p-8 md:p-12 shadow-2xl border border-purple-200/50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-pink-400/10 to-purple-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-6">
              {/* Profile Avatar with Animation */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 text-white flex items-center justify-center text-2xl md:text-3xl font-extrabold shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  {initials}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <FaCheckCircle className="text-white text-xs" />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                  My Account
                </h2>
                <p className="text-gray-600 mt-2 text-lg font-medium">
                  Welcome back! Manage your profile details
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={handleEditClick}
                className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <FaEdit className="text-sm group-hover:rotate-12 transition-transform" />
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="group flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold border-2 border-red-300 hover:bg-red-50 hover:border-red-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                <FaSignOutAlt className="text-sm group-hover:translate-x-1 transition-transform" />
                Logout
              </button>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaUser className="text-purple-600 text-lg" />
              </div>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3">
                Name
              </p>
              <p className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-600 transition-colors">
                {user?.name || "—"}
              </p>
            </div>

            {/* Email Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 transform hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-indigo-600 text-lg" />
              </div>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
                Email
              </p>
              <p className="text-xl font-extrabold text-gray-900 break-all group-hover:text-indigo-600 transition-colors">
                {user?.email || "—"}
              </p>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 transform hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-pink-600 text-lg" />
              </div>
              <p className="text-xs font-bold text-pink-600 uppercase tracking-widest mb-3">
                Phone
              </p>
              <p className="text-2xl font-extrabold text-gray-900 group-hover:text-pink-600 transition-colors">
                {user?.phone || "—"}
              </p>
            </div>

            {/* Last Activity Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaClock className="text-amber-600 text-lg" />
              </div>
              <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">
                Last Activity
              </p>
              <p className="text-lg font-extrabold text-gray-900 group-hover:text-amber-600 transition-colors">
                {formatDateTime(user?.loginTime || user?.registerTime)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Modal with Enhanced Design */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 relative transform animate-scaleIn border border-purple-100">
            {/* Decorative Gradient Background */}
            {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-t-3xl"></div> */}
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600 transition-all duration-300 flex items-center justify-center hover:rotate-90 transform"
            >
              <FaTimes size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-8 mt-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                <FaEdit className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Edit Profile
              </h3>
              <p className="text-gray-500 mt-2 font-medium">
                Update your profile information below
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <FaUser className="text-purple-600" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-indigo-600" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <FaPhone className="text-pink-600" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <FaSave className="text-sm" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Profile;
