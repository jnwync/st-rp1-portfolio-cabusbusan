import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";

const ProjectsModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  if (!project) {
    return null;
  }

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full overflow-y-scroll transition-all duration-500 ease-in-out bg-black bg-opacity-70">
        <div className="relative w-full max-w-md p-8 rounded-lg bg-card text-text-primary">
          <CloseRounded
            onClick={() => setOpenModal({ state: false, project: null })}
            className="absolute cursor-pointer top-3 right-4"
          />
          <img
            src={project.image}
            className="object-cover w-full mb-8 rounded-md h-96"
            alt={project.title}
          />
          <h2 className="text-2xl font-semibold text-text-primary">
            {project.title}
          </h2>
          <p className="text-sm text-text-secondary">{project.date}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm font-normal rounded-lg text-primary bg-primary-15"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-base text-text-primary">
            {project.description}
          </p>
          {project.member && (
            <div>
              <h3 className="mt-6 text-2xl font-semibold text-text-primary">
                Members
              </h3>
              <div className="flex flex-col gap-4 mt-2">
                {project.member.map((member) => (
                  <div className="flex items-center gap-2" key={member.name}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="object-cover rounded-full shadow-md w-14 h-14"
                    />
                    <div className="text-base font-medium text-text-primary">
                      {member.name}
                    </div>
                    <a
                      href={member.github}
                      target="new"
                      className="text-primary"
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      className="text-primary"
                    >
                      <LinkedIn />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-end mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-semibold transition-colors duration-500 rounded-lg text-text-primary bg-primary hover:bg-opacity-90"
            >
              View Code
            </a>
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 ml-2 font-semibold transition-colors duration-500 rounded-lg text-text-primary bg-primary hover:bg-opacity-90"
            >
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectsModal;
