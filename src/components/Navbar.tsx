import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-black z-10">
      <div className="flex justify-around p-0 m-0">
        <a className="text-white text-3xl py-4" href="#home-section">
          Home
        </a>
        <a className="text-white text-3xl py-4" href="#about-section">
          About
        </a>
        <a className="text-white text-3xl py-4" href="#tech-stack-section">
          Tech Stack
        </a>
        <a className="text-white text-3xl py-4" href="#project-section">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
