import React from "react";
import { Link } from "react-router";

const recentWorkData = [
  {
    id: 1,
    title: "Sendit",
    description:
      "A frictionless digital commerce platform designed to help creators monetize their content, products, and expertise effortlessly.",
    image: "https://picsum.photos/200/300",
    link: "/",
  },
  {
    id: 2,
    title: "PassCrypt",
    description:
      "Next-gen password manager. Securely store passwords, PINs, and keys. Efficient and seamless.",
    image: "https://picsum.photos/200/301",
    link: "/",
  },
  {
    id: 3,
    title: "Merilink",
    description:
      "Share all your content and products from multiple platforms with a single link.",
    image: "https://picsum.photos/200/302",
    link: "/",
  },
  {
    id: 4,
    title: "Unsight",
    description:
      "Global anonymous platform for tech students to share posts, resources, opportunities, and more.",
    image: "https://picsum.photos/200/303",
    link: "/",
  },
];

const RecentWork = () => {
  return (
    <div className="px-8 mt-6">
      <h2 className="text-xl font-semibold">Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {recentWorkData.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-4 rounded-xl border border-gray-300 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </Link>
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
