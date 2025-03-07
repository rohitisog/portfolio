import React from "react";

const experienceData = [
  {
    id: 1,
    company: "Spheron Foundation",
    role: "Ambassador (Officer Level - 2)",
    date: "Nov 2024 - Present",
    description:
      "Building and growing the developer community, advocating Spheron's decentralized infrastructure solutions, and creating educational content to drive adoption.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQEAfZLwUVEd6Q/company-logo_200_200/company-logo_200_200/0/1722249662798/spheron_logo?e=2147483647&v=beta&t=2PGqbZwQ2M2Vowmc0b2FNbb5Q5Qfk61upeou4V61v7A",
  },
];

const AmbassadorExp = () => {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Ambassador Experience</h2>
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

export default AmbassadorExp;
