import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skills";
import Education from "./Components/Education";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full overflow-x-hidden bg-gray-100">
        <HeroSection />
        <div className="relative w-full h-32 bg-gradient-to-br from-purple-100 via-transparent to-blue-100">
          <div className="absolute inset-0 clip-path-[polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)]">
            <Skills />
            <Education />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default App;
