import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white p-8 flex justify-center ">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <NavLink to="/" className="text-2xl text-black font-semibold">
          Rohit Kumar
        </NavLink>

        <div>
          <NavLink
            to="/"
            className="rounded-2xl bg-black text-white py-1 px-3 mx-2 hover:bg-gray-800 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="rounded-2xl bg-black text-white py-1 px-3 mx-2 hover:bg-gray-800 transition"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blogs"
            className="rounded-2xl bg-black text-white py-1 px-3 mx-2 hover:bg-gray-800 transition"
          >
            Blogs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
