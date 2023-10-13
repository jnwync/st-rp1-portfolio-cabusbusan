import React from "react";

const ProjectCards = ({ project, openModal }) => {
  const handleClick = () => {
    openModal(project);
  };
  return (
    <div
      className="flex flex-col gap-4 p-6 overflow-hidden transition-shadow transform rounded-lg shadow-lg cursor-pointer w-96 h-120 bg-card hover:translate-y-2 hover:shadow-xl hover:brightness-110"
      onClick={handleClick}
    >
      <img
        src={project.image}
        alt="Project Image"
        className="w-full h-48 bg-white rounded-lg shadow-md"
      />
      <div className="flex flex-wrap w-full gap-2">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 text-sm font-normal text-white bg-red-800 rounded-lg bg-primary-15"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-0">
        <div className="overflow-hidden text-xl font-semibold text-text-secondary line-clamp-2 overflow-ellipsis">
          {project.title}
        </div>
        <div className="ml-2 text-sm font-normal text-text-secondary-80">
          {project.date}
        </div>
        <div className="mt-2 overflow-hidden text-sm font-normal text-text-secondary-99 line-clamp-3 overflow-ellipsis">
          {project.description}
        </div>
      </div>
      <div className="flex items-center pl-4">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt="Member Avatar"
            className="ml-1 bg-white rounded-full shadow-md w-14 h-14 border-3 border-card"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
