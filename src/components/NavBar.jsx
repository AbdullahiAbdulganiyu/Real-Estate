import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>

        <img src={assets.menu_icon} className="md:hidden w-7" alt="menu_icon" />
      </div>
      {/* ------------------ mobile-menu--------------- */}
      <div className="md:hidden fixed w-full right-0 top-0 buttom-0 overflow-hidden">
        <ul>
          <a href="#Header" className="px-4 py-2">
            Header
          </a>
          <a href="#About" className="px-4 py-2">
            About
          </a>
          <a href="#Projects" className="px-4 py-2">
            Projects
          </a>
          <a href="#Testimonials" className="px-4 py-2">
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
