import React from "react";
import { Link } from "react-router";

const recentWorkData = [
  {
    id: 1,
    title: "CoinTok",
    description:
      "TikTok-style crypto price tracker powered by CoinGecko API. Smooth infinite scroll UI.",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
    link: "https://cointok.vercel.app/",
  },
  {
    id: 2,
    title: "VirtualR",
    description:
      "A futuristic VR landing page showcasing immersive experiences with sleek UI.",
    image: "https://virtualr-pro.vercel.app/assets/logo-6TE5HpCe.png",
    link: "https://virtualr-pro.vercel.app/",
  },
  {
    id: 3,
    title: "NPM Landing Page",
    description:
      "Modern NPM-inspired landing page, designed for a clean, developer-friendly experience.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    link: "https://npm-og.vercel.app/",
  },
  {
    id: 4,
    title: "Tea Assam RPC",
    description:
      "One-click RPC setup for the Tea Protocol’s Assam Test Network.",
    image: "https://avatars.githubusercontent.com/u/94703010?s=200&v=4",
    link: "https://assam-rpc.vercel.app/",
  },
];

const RecentWork = () => {
  return (
    <div className="px-8 mt-6">
      <h2 className="text-xl font-semibold">Recent Work</h2>
      <div className="flex flex-wrap gap-6 mt-4">
        {recentWorkData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-4 rounded-xl border border-gray-300 hover:shadow-lg transition w-[48%] min-w-[250px]"
          >
            <div className="flex items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/projects"
          className="text-blue-600 hover:underline font-semibold"
        >
          Check other work →
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
