import React from "react";

const landingPages = [
  {
    id: 1,
    name: "Zerodha Landing Page",
    live: "https://zerodha-og.vercel.app/",
    repo: "https://github.com/rohitscript/zerodha-landing-page",
  },
  {
    id: 2,
    name: "NPM Landing Page",
    live: "https://npm-og.vercel.app/",
    repo: "https://github.com/rohitscript/npm-landing-page",
  },
  {
    id: 3,
    name: "VirtualR Landing Page",
    live: "https://virtualr-pro.vercel.app/",
    repo: "https://github.com/rohitscript/virtualR",
  },
];

const otherProjects = [
  {
    id: 4,
    name: "CoinTok (TikTok-style Crypto Tracker)",
    live: "https://cointok.vercel.app/",
    repo: "https://github.com/rohitisog/cointok",
  },
  {
    id: 5,
    name: "Tea Assam RPC One-Click Add",
    live: "https://assam-rpc.vercel.app/",
    repo: "https://github.com/rohitisog/tea-network",
  },
  {
    id: 6,
    name: "Get Pokémon (API Fetching Practice)",
    live: "https://get-pokemon-roan.vercel.app/",
    repo: "https://github.com/rohitscript/getPokemon",
  },
  {
    id: 7,
    name: "Coolify Project (Under Construction)",
    live: "https://coolify-og.vercel.app/",
    repo: "https://github.com/rohitisog/coolify",
  },
];

const Projects = () => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold">Projects</h2>

      <h3 className="text-lg font-bold text-gray-700 mt-6">Landing Pages</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        {landingPages.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full md:w-[48%] lg:w-[32%]"
          >
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-gray-700 mt-6">Other Projects</h3>
      <div className="flex flex-wrap gap-4 mt-2">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md transition hover:bg-gray-100 hover:shadow-lg w-full md:w-[48%] lg:w-[32%]"
          >
            <h4 className="text-lg font-semibold">{project.name}</h4>
            <div className="mt-2 flex space-x-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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
