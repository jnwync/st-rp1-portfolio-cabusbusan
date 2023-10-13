import React from "react";
import { SkillsData } from "../datacontent/Datas";

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative z-10 flex flex-col items-center justify-center mb-4 bg-black"
    >
      <div className="relative flex flex-col items-center justify-between w-full gap-12 max-w-1100">
        <div className="mt-20 text-5xl font-extrabold text-center text-white md:mt-12">
          Skills
        </div>
        <div className="text-2xl text-center max-w-600 text-secondary">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </div>
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {SkillsData.map((skill) => (
            <div
              key={skill.title}
              className="p-4 border-2 border-red-800 border-solid rounded-lg shadow-md w-96 max-w-500 bg-card glowing-border ring ring-red-500"
            >
              <h2 className="mb-5 text-3xl font-semibold text-center text-secondary">
                {skill.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {skill.skills.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 p-2 text-lg font-normal text-white border-red-800 rounded-lg border-1 "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
