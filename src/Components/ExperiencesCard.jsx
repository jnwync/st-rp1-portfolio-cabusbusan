import React from "react";

const ExperiencesCard = ({ experience }) => {
  return (
    <div className="flex flex-col gap-4 p-4 transition-transform border-4 border-red-800 rounded-lg shadow-md w-72 sm:w-300 hover:transform hover:scale-105 hover:shadow-lg hover:border-red-500">
      <div className="flex gap-4">
        <img
          src={experience.img}
          alt="Company Logo"
          className="h-20 mt-1 bg-black rounded-lg sm:h-16"
        />
        <div className="flex flex-col">
          <div className="text-2xl font-semibold text-red-500">
            {experience.role}
          </div>
          <div className="text-xl font-medium text-red-700">
            {experience.company}
          </div>
          <div className="text-sm font-normal text-red-600">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="text-xl font-normal text-white">
        {experience?.desc && (
          <div className="overflow-hidden -webkit-line-clamp-4 -webkit-box-orient-vertical text-ellipsis">
            {experience.desc}
          </div>
        )}
      </div>
      {experience?.skills && (
        <div className="mt-2">
          <b>Skills:</b>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <div key={index} className="text-base font-normal text-white">
                • {skill}
              </div>
            ))}
          </div>
        </div>
      )}
      {experience.doc && (
        <a href={experience.doc} target="_blank">
          <img
            src={experience.doc}
            alt="Document"
            className="block h-20 bg-black rounded-lg cursor-pointer w-fit-content hover:opacity-80"
          />
        </a>
      )}
    </div>
  );
};

export default ExperiencesCard;
