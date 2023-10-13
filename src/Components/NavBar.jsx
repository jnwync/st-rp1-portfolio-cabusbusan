import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BioData } from "../datacontent/Datas";
import { FaBars } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { darkTheme, lightTheme } from "../../public/Theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 960;
  const showFaBars = isMobile || isOpen;

  return (
    <div
      className={`bg-${darkTheme.card_light} h-20 flex items-center justify-center text-lg sticky top-0 z-10 transition-all duration-300 ease-in-out`}
    >
      <div className="z-10 flex items-center justify-between w-full h-16 max-w-screen-lg px-6 mx-auto">
        <div className="flex items-center justify-start w-4/5 px-6 text-decoration-none">
          <Link to="/" className="flex items-center text-white">
            <DiCssdeck className="text-3xl" />
            <span className="px-1 font-bold text-18">Portfolio</span>
          </Link>
          Logo
        </div>
        {showFaBars && (
          <div
            className={`${
              isMobile ? "block md:hidden" : "hidden md:block"
            } absolute top-0 right-0 transform -translate-x-full translate-y-12 text-1.5rem cursor-pointer text-theme-text_primary`}
            style={{ color: darkTheme.text_primary }}
          >
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
        )}
        <div className="flex items-center justify-center w-full gap-8 px-6 list-none md:flex">
          {/* NavItems */}
          <div
            className="font-medium no-underline transition-colors duration-200 ease-in-out cursor-pointer text-primary hover:text-primary"
            style={{ color: darkTheme.text_primary }}
            href="#about"
          >
            About
          </div>
          <div
            className="font-medium no-underline transition-colors duration-200 ease-in-out cursor-pointer text-primary hover:text-primary"
            style={{ color: darkTheme.text_primary }}
            href="#skills"
          >
            Skills
          </div>
          <div
            className="font-medium no-underline transition-colors duration-200 ease-in-out cursor-pointer text-primary hover:text-primary"
            style={{ color: darkTheme.text_primary }}
            href="#experience"
          >
            Experience
          </div>
          <div
            className="font-medium no-underline transition-colors duration-200 ease-in-out cursor-pointer text-primary hover:text-primary"
            style={{ color: darkTheme.text_primary }}
            href="#projects"
          >
            Projects
          </div>
          <div
            className="font-medium no-underline transition-colors duration-200 ease-in-out cursor-pointer text-primary hover:text-primary"
            style={{ color: darkTheme.text_primary }}
            href="#education"
          >
            Education
          </div>
        </div>
        <div className="flex items-center justify-end h-full px-6 w-80 sm:flex">
          <button
            className="flex items-center justify-center px-5 font-medium no-underline transition-all ease-in-out border-2 cursor-pointer border-primary h-70p rounded-2xl text-primary text-16 duration-600 hover:bg-primary hover:text-white"
            style={{ borderColor: darkTheme.primary, color: darkTheme.primary }}
          >
            Github Profile
          </button>
        </div>
        {isMobile && isOpen && (
          <div className="md:hidden">
            <div className="block">
              <a
                href="#about"
                className="block px-4 py-2 font-semibold transition duration-200 ease-in-out cursor-pointer text-theme-text_primary hover:text-theme-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-4 py-2 font-semibold transition duration-200 ease-in-out cursor-pointer text-theme-text_primary hover:text-theme-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block px-4 py-2 font-semibold transition duration-200 ease-in-out cursor-pointer text-theme-text_primary hover:text-theme-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block px-4 py-2 font-semibold transition duration-200 ease-in-out cursor-pointer text-theme-text_primary hover:text-theme-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                Projects
              </a>
              <a
                href="#education"
                className="block px-4 py-2 font-semibold transition duration-200 ease-in-out cursor-pointer text-theme-text_primary hover:text-theme-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                Education
              </a>
            </div>
            <a
              href={BioData.github}
              className="block px-4 py-2 mt-2 font-semibold text-white transition duration-200 ease-in-out cursor-pointer bg-theme-primary"
              style={{ padding: "10px 16px" }}
              target="_blank"
            >
              Github Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
