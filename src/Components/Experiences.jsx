import React from "react";
import ExperiencesCard from "./ExperiencesCard";
import { ExperiencesData } from "../datacontent/Datas";

const Experiences = () => {
  return (
    <div
      id="experience"
      className="relative z-10 flex flex-col items-center justify-center max-w-screen-xl gap-12 p-4 mx-auto md:p-8"
    >
      <h1 className="mt-5 text-5xl font-extrabold text-primary">Experiences</h1>
      <p className="max-w-screen-md text-2xl text-center text-secondary">
        My work experience as a software engineer and working on different
        companies and projects.
      </p>
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-3 mt-3">
        {ExperiencesData.map((experience, index) => (
          <ExperiencesCard experience={experience} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
