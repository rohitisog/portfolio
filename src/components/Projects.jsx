import React from "react";
import tea from "../assets/tea.png";
import zerodha from "../assets/zerodha.png";
import npm from "../assets/npm.png";
import cointok from "../assets/cointok.png";
import virtual from "../assets/virtual.png";
import nftg from "../assets/nftg.png";

const landingPages = [
  {
    id: 1,
    name: "Zerodha Landing Page",
    live: "https://zerodha-og.vercel.app/",
    repo: "https://github.com/rohitisog/zerodha-landing-page",
    image: zerodha,
  },
  {
    id: 2,
    name: "NPM Landing Page",
    live: "https://npm-og.vercel.app/",
    repo: "https://github.com/rohitisog/npm-landing-page",
    image: npm,
  },
  {
    id: 3,
    name: "VirtualR Landing Page",
    live: "https://virtualr-pro.vercel.app/",
    repo: "https://github.com/rohitisog/virtualR",
    image: virtual,
  },
];

const otherProjects = [
  {
    id: 4,
    name: "Play teadice",
    live: "https://teadice.vercel.app/",
    repo: "https://github.com/rohitisog/teadice",
    image:
      "https://pbs.twimg.com/profile_images/1708838507957882880/SsQYN3T6_400x400.jpg",
  },

  {
    id: 5,
    name: "CoinTok ( TikTok-style Crypto App )",
    live: "https://cointok.vercel.app/",
    repo: "https://github.com/rohitisog/cointok",
    image: cointok,
  },
  {
    id: 6,
    name: "Tea Assam RPC One-Click Add",
    live: "https://assam-rpc.vercel.app/",
    repo: "https://github.com/rohitisog/tea-network",
    image: tea,
  },
  {
    id: 7,
    name: "NFTGalaxy Marketplace",
    live: "https://nftgalaxy.vercel.app/",
    repo: "https://github.com/rohitisog/nftgalaxy",
    image: nftg,
  },
  {
    id: 4,
    name: "Play Monadice",
    live: "https://monadice.vercel.app/",
    repo: "https://github.com/rohitisog/monadice",
    image:
      "https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667d7104644c621965495f6e_LogoMark.svg",
  },
];

const Projects = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mt-6">Projects</h2>
      {/* Other Projects */}
      <h3 className="text-lg font-bold text-gray-700 mt-4">Web3 Projects</h3>
      <div className="flex flex-wrap justify-between gap-4 mt-2">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full sm:w-[48%] md:w-[48%] lg:w-[48%]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-40 object-cover mb-2"
            />
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition bg-black text-white hover:bg-white hover:border-black hover:text-black "
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition border border-black bg-white text-black hover:bg-black hover:text-white"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Landing Pages */}
      <h3 className="text-lg font-bold text-gray-700 mt-6">Landing Pages</h3>
      <div className="flex flex-wrap justify-between gap-4 mt-2">
        {landingPages.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full sm:w-[48%] md:w-[48%] lg:w-[48%]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-40 object-cover mb-2"
            />
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition bg-black text-white hover:bg-white hover:border-black hover:text-black "
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl sm:text-sm px-3 py-1 transition border border-black bg-white text-black hover:bg-black hover:text-white"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
