// import React from "react";

// const NavBar: React.FC = () => {
//   return (
//     <nav className="fixed top-0 w-full bg-black z-10">
//       <div className="flex justify-around p-0 m-0">
//         <a className="text-white text-xl py-4" href="#home-section">
//           Home
//         </a>
//         <a className="text-white text-xl py-4" href="#about-section">
//           About
//         </a>
//         <a className="text-white text-xl py-4" href="#resume-section">
//           Resume
//         </a>
//         <a className="text-white text-xl py-4" href="#tech-stack-section">
//           Tech Stack
//         </a>
//         <a className="text-white text-xl py-4" href="#project-section">
//           Projects
//         </a>
//         <a className="text-white text-xl py-4" href="#contact-section">
//           Contact Me
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { Menu } from "lucide-react"; // Icon for the mobile menu

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black z-10 min-h-[5vh]">
      <div className="flex items-center justify-center px-6 py-3 md:py-3">
        <button className="text-white md:hidden absolute left-6 pt-4" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={32} />
        </button>

        <div className="hidden md:flex justify-between w-full space-x-10">
          <a className="text-white text-lg hover:text-gray-300" href="#home-section">
            Home
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#about-section">
            About
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#resume-section">
            Resume
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#tech-stack-section">
            Tech Stack
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#project-section">
            Projects
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#contact-section">
            Contact Me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center md:hidden bg-black py-4 space-y-4">
          <a className="text-white text-lg hover:text-gray-300" href="#home-section">
            Home
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#about-section">
            About
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#resume-section">
            Resume
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#tech-stack-section">
            Tech Stack
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#project-section">
            Projects
          </a>
          <a className="text-white text-lg hover:text-gray-300" href="#contact-section">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
