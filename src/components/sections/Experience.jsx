import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "InternPe",
      period: "July 2025 – Aug 2025",
      details: [
        "Built responsive web applications using HTML, CSS, JavaScript, and React.",
        "Developed a fully functional eCommerce project as part of the internship tasks."
      ]
    },
    {
      role: "Full Stack Developer Intern – MERN",
      company: "SmartInternz",
      period: "May 2025 – July 2025",
      details: [
        "Designed and developed a freelancing platform (SB Works) using MongoDB, Express.js, React, and Node.js.",
        "Implemented features such as authentication, admin panel, project posting, bidding system, and feedback flow."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-lg text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
