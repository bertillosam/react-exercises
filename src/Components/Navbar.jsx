import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 shadow-lg">
      <div className="max-w-5xl px-4">
        <div className="flex justify-between items-center h-16 font-bold">
          <a>
            {" "}
            Sam<span className="text-blue-500">o</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-500 hover:text-primary transform-colors"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="text-gray-500 hover:text-primary transform-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-primary transform-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
