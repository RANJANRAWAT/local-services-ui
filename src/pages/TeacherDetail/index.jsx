import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaUsers,
  FaBook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaRegIdBadge,
} from "react-icons/fa";
import { getTeacherById } from "../../data/teachers";
import Footer from "../../components/Footer";

const Stat = ({ icon: Icon, label, value }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-purple-700">
        <Icon />
      </div>
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-lg font-extrabold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const TeacherDetail = () => {
  const { id } = useParams();
  const teacher = getTeacherById(id);

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-purple-700 font-semibold">
            <FaArrowLeft /> Back to Dashboard
          </Link>
          <div className="mt-8 bg-white rounded-3xl p-10 shadow-xl border border-purple-100">
            <h1 className="text-3xl font-extrabold text-gray-900">Teacher not found</h1>
            <p className="text-gray-600 mt-2">Please go back and pick a valid teacher.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 opacity-[0.08]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 relative z-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-purple-800 font-bold hover:text-purple-950 transition"
            >
              <FaArrowLeft /> Back to Dashboard
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-extrabold text-gray-600 bg-white/70 backdrop-blur rounded-full px-4 py-2 border border-white/70">
              <FaRegIdBadge className="text-purple-700" />
              Profile: {teacher.id}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-end gap-6">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 text-white flex items-center justify-center text-5xl shadow-2xl ring-4 ring-white/60">
              {teacher.image}
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
                {teacher.name}
              </h1>
              <p className="mt-2 text-purple-800 font-extrabold">
                {teacher.title} • {teacher.specialization}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
                {teacher.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-[44px] p-6 md:p-10 shadow-2xl border border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-3 gap-4">
            <Stat icon={FaStar} label="Rating" value={teacher.rating} />
            <Stat icon={FaUsers} label="Students" value={`${teacher.students}+`} />
            <Stat icon={FaBook} label="Courses" value={teacher.courses} />
          </div>

          <div className="relative z-10 mt-6 grid lg:grid-cols-3 gap-6">
            {/* About */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900">About</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{teacher.about}</p>

              <div className="mt-6">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Key skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {teacher.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-extrabold bg-purple-100 text-purple-800 border border-purple-200/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900">Contact</h2>
              <div className="mt-4 space-y-3 text-gray-800">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-700" />
                  <span className="font-semibold break-all">{teacher.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-purple-700" />
                  <span className="font-semibold">{teacher.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-purple-700" />
                  <span className="font-semibold">{teacher.contact.city}</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4 border border-gray-100 shadow-sm">
                <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Experience
                </p>
                <p className="mt-1 text-lg font-extrabold text-gray-900">
                  {teacher.experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeacherDetail;


