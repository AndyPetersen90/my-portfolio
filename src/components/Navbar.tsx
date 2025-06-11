import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId && sectionId !== activeSection) {
            setActiveSection(sectionId);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const navLinks = [
    { href: "#home-section", label: "Home" },
    { href: "#tech-stack-section", label: "Tech Stack" },
    { href: "#resume-section", label: "Resume" },
    { href: "#about-section", label: "About" },
    { href: "#project-section", label: "Projects" },
    { href: "#contact-section", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 min-h-[5vh] shadow-lg">
      <div className="flex items-center justify-center px-6 py-3 md:py-3">
        <button
          className="text-white md:hidden absolute left-6 pt-4 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <div className="hidden md:flex justify-between w-full max-w-4xl space-x-10">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className={`text-white text-lg transition-colors duration-300 hover:text-gray-300 relative ${
                activeSection === href.slice(1) ? "text-blue-400" : ""
              }`}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              {activeSection === href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-100 transition-transform duration-300" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              className={`text-white text-lg transition-colors duration-300 hover:text-gray-300 ${
                activeSection === href.slice(1) ? "text-blue-400" : ""
              }`}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
