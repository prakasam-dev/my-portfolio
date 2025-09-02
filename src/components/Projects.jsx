import React from "react";
import { FaLock } from "react-icons/fa";
import Hms_img from "../assets/hms.jpg";
import Eye_care_img from "../assets/eye_care.jpg";
import Quiz_img from "../assets/quizz.jpg";
import Weather_img from "../assets/weather.jpg"
import Reestar_img from "../assets/reestar.jpeg"
import Student_img from "../assets/Student.jpeg"

const projects = [
  {
    id: 1,
    name: "Hospital Management System",
    technologies: "MERN stack",
    image: Hms_img,
    github: "https://github.com/prakasam-dev/Hospital-management-system.git",
    locked: false,
  },
  {
    id: 2,
    name: "Eye Care Website",
    technologies: "React.js, Tailwind CSS",
    image: Eye_care_img,
    github: "https://github.com/prakasam-dev/EyeCare-React-Frontend.git",
    locked: false,
  },
  {
    id: 3,
    name: "Quiz App",
    technologies: "HTML, CSS, JavaScript",
    image: Quiz_img,
    github: "https://github.com/prakasam-dev/Quiz-App-UI.git",
    locked: false,
  },
  {
    id: 4,
    name: "Weather App",
    technologies: "React.js, Tailwind CSS",
    image: Weather_img,
    github: "https://github.com/prakasam-dev/Weather-App.git",
    locked: false,
  },
  {
    id: 5,
    name: "Student Registration Form",
    technologies: "HTML, CSS, JavaScript",
    image: Student_img,
    github: "https://github.com/prakasam-dev/Student-Registration-Form.git",
    locked: false,
  },
  {
    id: 6,
    name: "Hotel Landing page UI",
    technologies: "HTML, CSS",
    image: Reestar_img,
    github: "https://github.com/prakasam-dev/REESTAR-Hotel-UI.git",
    locked: false,
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="p-3">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-44 object-cover rounded-md transition duration-300 ${
                    project.locked ? "blur-sm" : "group-hover:blur-sm"
                  }`}
                />
              </div>

              {/* Desktop hover buttons or lock */}
              <div className="absolute inset-0 hidden sm:flex flex-col justify-center items-center transition duration-300">
                {project.locked ? (
                  <FaLock className="text-gray-400 text-3xl" />
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 flex space-x-2 mb-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm px-3 py-1.5 rounded-full"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile view */}
              <div className="px-4 pb-2 sm:hidden">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.technologies}
                </p>
                {project.locked ? (
                  <div className="flex justify-center">
                    <FaLock className="text-gray-400 text-xl" />
                  </div>
                ) : (
                  <div className="flex justify-around">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm px-3 py-1.5 rounded-full"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-3 py-1.5 rounded-full"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>

              {/* Title and tech for desktop */}
              <div className="px-4 pb-4 hidden sm:block">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
