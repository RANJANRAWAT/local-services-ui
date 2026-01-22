import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Profile from "../Dashboard/Profile";
import Footer from "../../components/Footer";

const MyAccount = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Protect route - redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  // Don't render if not logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-pink-50/30 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Profile user={user} />
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
