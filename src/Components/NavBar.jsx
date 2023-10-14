import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BioData } from "../datacontent/Datas";
import { FaBars } from "react-icons/fa";
import nyewlogo from "../images/nyewlogo.png";
import { darkTheme, lightTheme } from "../../public/Theme";
import github from "../images/github.png";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-center h-20 text-lg transition-all duration-300 ease-in-out bg-black">
      <div className="z-10 flex items-center justify-between w-full h-16 max-w-screen-lg px-6 mx-auto">
        <div className="flex items-center justify-start w-4/5 px-6 text-decoration-none">
          <Link to="/" className="flex items-center text-white">
            <img className="w-16 h-16 rounded-full" src={nyewlogo} alt="Logo" />
            <span className="px-1 font-bold text-18">Portfolio</span>
          </Link>
        </div>
        {showFaBars && (
          <div
            className={`${
              isMobile ? "block md:hidden" : "hidden md:block"
            } absolute top-0 right-0 transform -translate-x-full translate-y-12 text-1.5rem cursor-pointer text-theme-text_primary`}
            style={{ color: darkTheme.text_primary }}
          >
            <FaBars onClick={toggleMenu} />
          </div>
        )}
        <div className="flex items-center justify-center w-full gap-8 px-6 list-none md:flex">
          <NavItem label="About" href="#about" toggleMenu={toggleMenu} />
          <NavItem label="Skills" href="#skills" toggleMenu={toggleMenu} />
          <NavItem
            label="Experiences  "
            href="#experiences"
            toggleMenu={toggleMenu}
          />
          <NavItem label="Projects" href="#projects" toggleMenu={toggleMenu} />
          <NavItem
            label="Education"
            href="#education"
            toggleMenu={toggleMenu}
          />
          <NavItem label="Contact" href="#contact" toggleMenu={toggleMenu} />
        </div>
        <div className="flex items-center justify-end h-full px-6 w-80 sm:flex">
          <a href="https://github.com/jnwync" target="_blank">
            <button className="flex items-center justify-center px-5 font-medium no-underline transition-all ease-in-out border-2 border-red-800 cursor-pointer border-primary h-70p rounded-2xl text-primary text-16 duration-600 hover:bg-primary hover:text-white">
              <img className="w-30 h-30" src={github} alt="GitHub Profile" />
            </button>
          </a>
        </div>
        {isMobile && isOpen && (
          <div className="md:hidden">
            <div className="block">
              <NavItem label="About" href="#about" toggleMenu={toggleMenu} />
              <NavItem label="Skills" href="#skills" toggleMenu={toggleMenu} />
              <NavItem
                label="Experience"
                href="#experience"
                toggleMenu={toggleMenu}
              />
              <NavItem
                label="Projects"
                href="#projects"
                toggleMenu={toggleMenu}
              />
              <NavItem
                label="Education"
                href="#education"
                toggleMenu={toggleMenu}
              />
              <NavItem
                label="Contact"
                href="#contact"
                toggleMenu={toggleMenu}
              />
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

const NavItem = ({ label, href, toggleMenu }) => {
  return (
    <div
      className="font-medium no-underline transition-colors duration-200 ease-in-out cursor-pointer text-primary hover:text-primary"
      style={{ color: darkTheme.text_primary }}
      onClick={toggleMenu}
    >
      <a href={href}>{label}</a>
    </div>
  );
};

export default Navbar;
