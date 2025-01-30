import React from "react";
import { Link ,NavLink} from "react-router";

const About = () => {
  return (
    <>
      <div className=" flex-col hidden md:flex">
        <NavLink to="/">Explore</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/work">Works</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/getInTouch">GetInTouch</NavLink>
      </div>

      <div className="">

      </div>
    </>
  );
};

export default About;
