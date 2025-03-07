import React from "react";
import ant from "../assets/antier.png";
import alp from "../assets/alephium.png";

const experienceData = [
  {
    id: 1,
    company: "Alephium India",
    role: "DevRel India",
    date: "June 2024 - Sept 2024",
    description:
      "Driving developer relations, fostering a strong blockchain community, and creating educational content to enhance Alephium’s adoption across India.",
    image: alp,
  },
  {
    id: 2,
    company: "Antier Solutions",
    role: "Software Developer & Trainer Intern",
    date: "Jan 2024 - May 2024",
    description:
      "Developed blockchain-based solutions, mentored trainees, and conducted workshops to upskill developers in blockchain and Web3 technologies.",
    image: ant,
  },
  {
    id: 3,
    company: "Antier Solutions",
    role: "Blockchain Developer Trainee",
    date: "June 2023 - Dec 2023",
    description:
      "Gained hands-on experience in smart contract development, DeFi, and NFTs while contributing to real-world blockchain projects.",
    image: ant,
  },
];

const Experience = () => {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Experience</h2>
      <div className="mt-6 space-y-6">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-row items-center bg-white p-5 rounded-lg shadow-md transition duration-300 hover:bg-gray-50 hover:shadow-lg"
          >
            {/* Logo always on the left */}
            <img
              src={exp.image}
              alt={`${exp.company} logo`}
              className="h-16 w-16 rounded-full shadow-sm transition-transform duration-300 hover:scale-110"
            />

            {/* Experience details beside the logo */}
            <div className="w-full pl-4">
              <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.role}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
              <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
