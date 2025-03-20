import React from "react";
// Images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center"> 
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/* Button */}
          <a href="#contact">
              <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-3 btn btn-sm text-white text-sm sm:text-base md:text-lg font-semibold">
              Work with me
              </button>
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

