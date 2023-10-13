import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import { ProjectsData } from "../datacontent/Datas";
import ProjectsModal from "./ProjectsModal"; // Import the ProjectsModal component

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="projects"
      className="relative z-10 flex flex-col items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center w-full max-w-4xl gap-12 p-10 pb-100">
        <h1 className="mt-20 text-5xl font-extrabold text-center text-primary md:mt-12">
          Projects
        </h1>
        <p className="max-w-lg text-2xl text-center text-secondary">
          I have worked on a wide range of web applications. Here are some of my
          projects.
        </p>
        <div className="flex text-base font-medium text-white border border-red-800 rounded-3xl mt-22">
          <button
            className={`px-4 py-2 border-b-2 ${
              toggle === "all" ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setToggle("all")}
          >
            All
          </button>
          <div className="w-1.5 h-full bg-primary"></div>
          <button
            className={`px-4 py-2 border-b-2 ${
              toggle === "web app" ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setToggle("web app")}
          >
            Web Application
          </button>
          <div className="w-1.5 h-full bg-primary"></div>
          <button
            className={`px-4 py-2 ${
              toggle === "machine learning"
                ? "border-primary"
                : "border-transparent"
            }`}
            onClick={() => setToggle("machine learning")}
          >
            Machine Learning
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-28">
          {toggle === "all" &&
            ProjectsData.map((project) => (
              <ProjectCards
                key={project.id}
                project={project}
                openModal={openModal}
              />
            ))}
          {ProjectsData.filter((item) => item.category === toggle).map(
            (project) => (
              <ProjectCards
                key={project.id}
                project={project}
                openModal={openModal}
              />
            )
          )}
        </div>
      </div>
      {isModalOpen && selectedProject && (
        <ProjectsModal
          openModal={isModalOpen}
          setOpenModal={setIsModalOpen}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
