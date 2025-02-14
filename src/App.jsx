import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 380);
    };

    checkScreenWidth(); 
    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="h-screen flex items-center justify-center text-center p-4 bg-gradient-to-r from-orange-600 to-orange-400">
        <p className="text-lg font-semibold text-white">
          🔍 Open this website in mobile view for the best experience! 📱
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto md:max-w-3xl">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
