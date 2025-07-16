import { MoveRight } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Products", "Developers", "Explore", "Contact"];

  return (
    <header className="w-full text-gray-200 px-6 py-2 md:px-[10%]">
      {/* <header className="w-full fixed top-0 z-50  bg-opacity-80 backdrop-blur-sm text-[#f6f4f5] px-6 py-4 md:px-[10%]"> */}
      <nav className="max-w-7xl flex items-center justify-between py-4">
        {/* Logo */}
        <div className="">
          <h2>COSMOS</h2>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-[13px] font-medium">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-indigo-400 cursor-pointer">
              {link}
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

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[6px]"
          >
            {isOpen ? (
              // Custom X icon (two lines rotated)
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white rotate-45 origin-center"></span>
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white -rotate-45 origin-center"></span>
              </div>
            ) : (
              // Two horizontal lines
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
