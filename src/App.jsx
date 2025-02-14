import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="w-full max-w-4xl mx-auto md:max-w-3xl ">
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
