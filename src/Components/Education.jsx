import React from "react";
import { EducationData } from "../datacontent/Datas";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-0 md:py-60">
      <div className="w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold text-center text-white ">
          Education
        </h1>
        <div className="justify-center mt-12 text-2xl text-center text-white">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>
        <div className="flex flex-col items-center w-full max-w-2xl mt-10 space-y-4 md:items-end">
          {EducationData.map((edu, index) => (
            <div key={index} className="relative w-full">
              <EducationCard education={edu} />
              {index !== EducationData.length - 1 && (
                <div
                  className="absolute top-0 w-1 h-ful"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
