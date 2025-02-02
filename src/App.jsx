import React from "react";
import { Routes, Route } from "react-router";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Work from "./components/Work";
import GetInTouch from "./components/GetInTouch";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
        {/*  twitter , linkedin, github , read cv */}
      </Routes>
    </>
  );
};

export default App;
