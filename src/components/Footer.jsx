import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div>
        <div>
          <img src={assets.logo_dark} alt="logo_dark" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
