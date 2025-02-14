import React from "react";
import { NavLink } from "react-router";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/projects", label: "Projects" },
  { id: 3, path: "/blogs", label: "Blogs" },
];

const Navbar = () => {
  return (
    <div className="bg-white p-8 flex justify-center">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <NavLink to="/" className="text-2xl text-black font-semibold">
          Rohit Kumar
        </NavLink>

        <div>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="rounded-2xl sm:text-sm bg-black text-white py-1 px-3 mx-2 hover:bg-gray-800 transition"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
