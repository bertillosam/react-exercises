import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 shadow-lg bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 font-bold">
          {/* Logo / Brand */}
          <a href="#home" className="text-xl">
            Sam<span className="text-blue-500">o</span>
          </a>

          {/* Hamburger for Mobile */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Fixed Menu Links (Top Right) */}
      <ul className="hidden md:flex space-x-8 absolute top-4 right-6">
        <li>
          <a
            href="#home"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
