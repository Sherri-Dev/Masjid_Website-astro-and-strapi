import React from "react";
import { IoClose } from "react-icons/io5/index";
import Navigation from "./Navigation";

const MobileNavigation = ({ onClick, mobileMenu }) => {
  const translateX = mobileMenu ? "0px" : "100%";
  return (
    <div
      style={{ transform: `translateX(${translateX})` }}
      className={`absolute right-0 z-50 block h-screen w-4/5 bg-scColor p-4 pb-8 transition-transform duration-500 md:hidden md:bg-transparent `}
    >
      <button
        className="ml-auto block bg-prColor p-3 text-xl font-bold text-white transition-colors duration-500 hover:bg-white hover:text-scColor md:hidden"
        onClick={onClick}
      >
        <IoClose />
      </button>
      <Navigation />
    </div>
  );
};

export default MobileNavigation;
