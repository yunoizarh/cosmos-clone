import { MoveRight } from "lucide-react";
import { useState } from "react";
import { CosmosLogo } from "./CustomSvgs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = ["Products", "Developers", "Explore", "Contact"];

  return (
    <header className="w-full text-gray-200 px-6 py-3 md:px-[10%]">
      <nav className="max-w-7xl flex items-center justify-between py-4 relative">
        {/* Logo */}
        <div>
          <CosmosLogo />
        </div>

        {/* Desktop Links with Dropdown */}
        <ul className="hidden md:flex gap-6 text-[13px] font-medium relative">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span className="hover:text-indigo-400 transition">{link}</span>

              {/* Dropdown */}
              {hoveredLink === link && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a1a] rounded-lg shadow-xl p-4 
                  animate-fadeIn z-50"
                >
                  <p className="text-sm text-gray-300">Dropdown for {link}</p>
                  {/* You can map actual dropdown links here later */}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block text-sm">
          <a href="#" className="flex items-center gap-2 text-inherit">
            <span>New to CosMos? Bridge with IBC Eureka</span>
            <MoveRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[6px]"
          >
            {isOpen ? (
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white rotate-45 origin-center"></span>
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white -rotate-45 origin-center"></span>
              </div>
            ) : (
              <>
                <span className="w-6 h-[2px] bg-white block"></span>
                <span className="w-6 h-[2px] bg-white block"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#111] rounded-lg shadow-lg py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <div
              key={link}
              className="text-sm font-medium hover:text-indigo-400"
            >
              {link}
            </div>
          ))}
          <a href="#" className="flex items-center gap-2 text-inherit">
            <span>New to CosMos? Bridge with IBC Eureka</span>
            <MoveRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
