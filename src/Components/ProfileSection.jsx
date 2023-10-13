import React from "react";
import wallpaper from "../images/wallpaper.jpg";
import Typewriter from "typewriter-effect";
import { BioData } from "../datacontent/Datas";
import img from "../images/WayneImage.png";
import { darkTheme, lightTheme } from "../../public/Theme";

const ProfileSection = () => {
  return (
    <div id="about">
      <div className="relative flex justify-center px-5 py-20 bg-card-light sm:px-0">
        <div className="relative z-10 flex justify-center w-full max-w-screen-xl">
          <div className="items-center justify-between w-full sm:flex">
            <div className="w-full sm:w-1/2 sm:order-1">
              <div className="font-extrabold text-center sm:text-5xl text-text-primary sm:text-left text-7xl">
                Hi, I am <br /> {BioData.name}
              </div>
              <div className="flex items-center my-5 text-4xl font-extrabold text-center text-loop text-text-primary sm:text-left">
                <span className={`text-${darkTheme.primary} cursor-pointer `}>
                  I am a&nbsp;
                </span>
                <span className="text-4xl text-red-600">
                  <Typewriter
                    options={{
                      strings: BioData.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>

              <p className="mt-5 text-2xl text-center text-gray-300 sm:text-left">
                {BioData.description}
              </p>
              <a
                href={BioData.resume}
                target="display"
                className="inline-block w-full px-4 py-2 mt-6 text-xl font-semibold text-center text-white transition-transform duration-300 transform bg-red-800 rounded-lg resume-button sm:w-auto sm:text-left bg-gradient-to-r from-primary via-primary to-primary hover:scale-105 hover:shadow-lg"
              >
                Check Resume
              </a>
            </div>
            <div className="flex justify-end w-full sm:w-1/2 sm:order-2">
              <img
                src={img}
                alt="hero-image"
                className="relative w-400 h-400 max-w-400 max-h-400 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black"></div>
    </div>
  );
};

export default ProfileSection;
