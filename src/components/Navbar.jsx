import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeBackground = () => {
    setShowNavbar(window.scrollY >= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`hidden px-10 -ml-10 lg:flex navbar ${showNavbar ? "active" : ""}`}>
        <div className="flex items-center text-black">
        <h1 className=" text-2xl text-black">Kelvin charles</h1>

        </div>
        <div className="flex items-center text-black">
          <ul className="flex space-x-5 mr-5">
            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="#about">ABOUT</a>
            </li>
            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="#services"> SERVICES</a>
            </li>
            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="/career"> CAREER</a>
            </li>
            

            <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`lg:hidden navbar flex items-center justify-between ml-auto fixed top-0 left-0 w-full p-4 z-50 ${
          isMenuOpen ? "bg-white" : ""
        } ${showNavbar ? "active" : ""}`}
      >
        <div
          className={`logo absolute left-1/2 transform -translate-x-1/2 ${
            isMenuOpen ? "text-black" : "text-black"
          }`}
        >
          <a href="/">

          <h1 className=" text-2xl text-black">Kelvin charles</h1>

          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="menu-icon focus:outline-none text-black"
        >
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
        <ul
          className={`menu-links ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white h-screen p-4 rounded shadow-md transition-transform duration-600 transform-gpu ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ transitionDelay: isMenuOpen ? "0s" : "0.3s" }}
        >
          <li className="cursor-pointer mb-2 font-bold text-[#D2A34C]">
            <a href="#about">ABOUT</a>
          </li>
          <li className="cursor-pointer mb-2 font-bold text-[#D2A34C]">
            <a href="#services"> SERVICES</a>
          </li>
          <li className="cursor-pointer font-bold text-[#D2A34C]">
              <a href="/career"> CAREER</a>
            </li>

          <li className="cursor-pointer mb-2 font-bold text-[#D2A34C]">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div
        className="hidden lg:block w-screen -ml-10 lg:h-screen -mt-28"
        style={{
          backgroundImage: `url('/banner.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="container h-[90vh] w-screen flex justify-center items-center">
          {/* Add your content here */}
        </div>
      </div>
      <div
  className="lg:hidden w-[100vw]   -mt-28"
  style={{
    backgroundImage: `url('/banner-small1.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center", // Ensure image is centered
    backgroundRepeat: "", // Prevent image from repeating
  }}
>

        <div className="container h-[90vh] w-screen flex justify-center items-center">
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
