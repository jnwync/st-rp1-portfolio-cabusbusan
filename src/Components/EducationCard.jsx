import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="relative flex flex-col justify-between gap-4 p-4 overflow-hidden transition-transform border-4 border-red-800 border-solid rounded-lg shadow-md w-650 hover:shadow-xl hover:-translate-y-5 sm:w-300">
      <div className="flex w-full gap-4">
        <img
          src={education.img}
          alt="School Logo"
          className="mt-4 bg-black rounded-lg h-50 sm:h-40"
        />
        <div className="flex flex-col w-full">
          <div className="font-semibold text-red-600 text-18 sm:text-14">
            {education.school}
          </div>
          <div className="font-medium text-red-700 text-14 sm:text-12">
            {education.degree}
          </div>
          <div className="font-normal text-red-500 text-12 sm:text-10">
            {education.date}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-full overflow-hidden -webkit-box -webkit-line-clamp-4 -webkit-box-orient-vertical">
          {education.desc}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
