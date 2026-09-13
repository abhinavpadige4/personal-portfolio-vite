import { useState } from "react";
import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from "react-icons/si";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const sections = [
    { id: "hero", label: "Home", offset: 0 },
    { id: "about", label: "About", offset: 80 },
    { id: "skills", label: "Skills", offset: 80 },
    { id: "projects", label: "Projects", offset: 80 },
    { id: "experience", label: "Experience", offset: 80 },
    { id: "contact", label: "Contact", offset: 80 },
  ];

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-foreground">Portfolio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeLink === section.id
                    ? "bg-accent/20 text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded hover:bg-muted/20 transition-colors"
            >
              {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded hover:bg-muted/20 transition-colors"
            >
              <span className="h-[2px] w-6 bg-muted block mb-1.5"></span>
              <span className="h-[2px] w-6 bg-muted block mb-1.5"></span>
              <span className="h-[2px] w-6 bg-muted block"></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeLink === section.id
                      ? "bg-accent/20 text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;