import React from "react";
import { Router, Routes, Route, Navigate } from "react-router";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

const App = () => {
  return (
      <div className="w-full max-w-4xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
};

export default App;
