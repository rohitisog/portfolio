import React from "react";
import { Link } from "react-router"; 
import x from "../assets/x.svg";
import linkedin from "../assets/linked.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";

const Hero = () => {
  const socialData = [
    {
      id: 1,
      icon: x,
      link: "https://www.x.com/rohitonchain",
    },
    {
      id: 2,
      icon: linkedin,
      link: "https://www.linkedin.com/in/rohitscript",
    },
    {
      id: 3,
      icon: github,
      link: "https://www.github.com/rohitisog",
    },
    {
      id: 4,
      icon: discord,
      link: "https://discord.com/users/rohitscript",
    },
    {
      id: 5,
      icon: email,
      link: "mailto:rohitisog@gmail.com",
    },
  ];

  return (
    <div className="px-8">
      <div>
        <h2 className="text-xl font-semibold">About</h2>
        <p className="my-4 text-lg">
          I'm a passionate developer, building high-performance products with
          intuitive user experiences, transforming complex challenges into
          elegant solutions at lightning speed. I like traveling and exploring
          different cultures.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold py-2">Socials</h2>
        <div className="flex items-center justify-start gap-2">
          {socialData.map((social) => (
            <Link
              key={social.id}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <img src={social.icon} alt="Social Icon" className="w-12 h-12" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
