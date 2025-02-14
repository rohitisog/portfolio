import React from "react";
import { NavLink } from "react-router";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/projects", label: "Projects" },
  // { id: 3, path: "/blogs", label: "Blogs" },
];

const Navbar = () => {
  return (
    <div className="bg-white p-8 pt-12 flex justify-center">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <NavLink to="/" className="text-2xl text-black font-semibold">
          Rohit Kumar
        </NavLink>

        <div>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `rounded-2xl sm:text-sm py-1 px-2 md:px-3 ml-1 md:mx-2 transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-black  border-black hover:bg-gray-200"
                }`
              }
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
