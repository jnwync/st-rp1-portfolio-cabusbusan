import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { darkTheme } from "../public/Theme";
import Navbar from "./Components/NavBar";
import ProfileSection from "./Components/ProfileSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#1C1C27] text-[#F2F3F4] p-4 rounded-lg">
      <Router>
        <Navbar />
        <div className={`w-full overflow-x-hidden bg-black`}>
          <ProfileSection />
          <div className="relative w-full h-32 bg-gradient-to-br from-purple-100 via-transparent to-blue-100">
            <div className="absolute inset-0 clip-path-[polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)]">
              <Skills />
              <Projects />
              <Experiences />
              <Education />
              <Contact />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
