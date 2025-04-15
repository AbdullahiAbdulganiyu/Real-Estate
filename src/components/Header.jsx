import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <NavBar />
      <div>
        <h2>Explore homes that fit your dreams</h2>
      </div>
      <div>
        <a href="">Projects</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
