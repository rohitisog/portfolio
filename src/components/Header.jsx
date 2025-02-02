import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/work", text: "Professional Work" },
    { to: "/projects", text: "Projects" },
    { to: "/blogs", text: "Blogs" },
    { to: "/getInTouch", text: "Get In Touch" },
  ];

  return (
    <>
      <nav>
        {mobileDrawerOpen && (
            <div>
             <button onClick={toggleNavbar}>
             {mobileDrawerOpen ? "X" : "Menu"}
           </button>
          <div className="backdrop-brightness-75 bg-gradient-to-r from-orange-800 to-orange-500/50 p-4 flex flex-col h-screen w-full">
            {navLinks.map((link, index) => (
                <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                >
                {link.text}
              </NavLink>
            ))}
            
            </div>
           
          </div>
        )}

        <div>
            
        </div>
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? "X" : "Menu"}
        </button>
      </nav>
    </>
  );
};

export default Header;