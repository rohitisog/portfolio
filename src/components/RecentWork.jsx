import React from "react";
import { Link } from "react-router";

const recentWorkData = [
    {
      id: 1,
      title: "CoinTok",
      description:
        "CoinTok is a TikTok-style crypto price tracker with infinite scrolling and real-time market updates, powered by the CoinGecko API for accurate data.",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
      link: "https://cointok.vercel.app/",
    },
    {
      id: 2,
      title: "VirtualR",
      description:
        "VirtualR is a next-gen VR landing page with immersive visuals, sleek design, and interactive elements to showcase futuristic virtual reality experiences effortlessly.",
      image: "https://virtualr-pro.vercel.app/assets/logo-6TE5HpCe.png",
      link: "https://virtualr-pro.vercel.app/",
    },
    {
      id: 3,
      title: "NPM Landing Page",
      description:
        "This project features a modern NPM-inspired landing page, designed for an intuitive, clean, and developer-friendly experience with optimized UI components.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeUJb1dEdm1RX2ij9CWLdqtCpU-Z-KgWBGQ&s",
      link: "https://npm-og.vercel.app/",
    },
    {
      id: 4,
      title: "Tea Assam RPC",
      description:
        "Tea Assam RPC provides a seamless one-click RPC setup for developers interacting with the Tea Protocol’s Assam Test Network blockchain infrastructure efficiently.",
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
            className="bg-gray-100 p-4 rounded-xl border border-gray-300 hover:shadow-lg transition md:w-[48%] min-w-[250px]"
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
