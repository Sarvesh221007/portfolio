// src/components/sections/Projects.jsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Freelancing Platform (SB Works)",
      description: "A MERN-based freelancing platform with authentication, project posting, bidding, and feedback system.",
      link: "https://freelancing-web-uuwi.vercel.app/",
    },
    {
      title: "Hotel booking (Wonderlust)",
      description: "A MERN based hotels booking platform. A MERN stack based project with authentication, hotel add, booking and Rating system.",
      link: "https://github.com/Sarvesh221007/MajorProject",
    },
    {
      title: "Educity Project",
      description: "A modern educational platform showcasing courses and learning resources with a clean, responsive UI.",
      link: "https://educity-m3f76kknt-sarvesh221007s-projects.vercel.app",
    }
    ,
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
