import React from "react";

const educationData = [
  {
    id: 1,
    college: "DAV College Jalandhar, Punjab",
    stream: "BCA - Bachelors of Computer Applications",
    date: "Aug 2020 - May 2023",
    percentage: "79.79%",
    collegeLogo: "https://www.davjalandhar.com/wp-content/uploads/2022/07/logo-512x512-1.png",
  },
  {
    id: 2,
    college: "Doaba College Jalandhar, Punjab",
    stream: "10 + 2 Non-Medical",
    date: "Apr 2019 - Mar 2020",
    percentage: "85.33%",
    collegeLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47pokGLAsB1K3NwUtPCSW7uAk6lMiJRvURg&s",
  },
  {
    id: 3,
    college: "Jullundur Model Sr. Sec. School, Jalandhar",
    stream: "10th - Matric",
    date: "Apr 2017 - Mar 2018",
    percentage: "83.69%",
    collegeLogo: "https://static.vecteezy.com/system/resources/thumbnails/008/040/410/small_2x/school-logo-design-template-free-vector.jpg",
  },
];

const Education = () => {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Education</h2>
      <div className="mt-6 space-y-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-row items-center bg-white p-5 rounded-lg shadow-md transition duration-300 hover:bg-gray-50 hover:shadow-lg"
          >
            {/* Logo always on the left for all screen sizes */}
            <img
              src={edu.collegeLogo}
              alt={`${edu.college} logo`}
              className="h-16 w-16 rounded-full shadow-sm transition-transform duration-300 hover:scale-110"
            />

            {/* Education details beside the logo */}
            <div className="w-full pl-4">
              <h3 className="text-lg font-semibold text-gray-900">{edu.college}</h3>
              <p className="text-sm text-gray-600">{edu.stream}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Percentage:</span> {edu.percentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
