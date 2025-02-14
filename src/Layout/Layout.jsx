import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {
  return (
    <div className="w-full max-w-4xl mx-auto md:max-w-3xl md:bg-blue-300 lg:bg-yellow-400">
      <Navbar />
      <Outlet /> 
    </div>
  );
};

export default Layout;
