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
    <div className="p-8">
      <h2 className="text-xl font-semibold">Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            <img
              src={exp.image}
              alt={exp.company}
              className="h-12 w-12 rounded-full shadow-sm transition-transform duration-300 hover:scale-105"
            />
            <div className="w-full px-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-600">{exp.role}</p>
                </div>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
              <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
