import React from "react";
import logo from "../assets/vismayLogo.png";
import DPO from "../assets/footer/SPC-DPO-DPS-Seal-of-Registration-2025-1438x1438-1-1024x1024.png";
import fbIcon from "../assets/footer/facebook icon.png";
import inIcon from "../assets/footer/LinkedIn icon.png";

// let iconPath = "./src/assets/icons/footer";

const Footer = () => {
  return (
    <footer className="shadow shadow-gray-700 flex flex-col items-center gap-10 lg:flex-row lg:justify-around lg:items-center py-7 bg-[#D9D9D9]">
      <img
        src={logo}
        alt="Vismay International Corporation Logo"
        className="w-60"
      />
      <div className="lg:border-l-2 border-black pl-4">
        <p className="text-xl uppercase pb-3">Connect WIth Us</p>
        <div className="w-[45px] flex flex-row gap-6">
          <img src={fbIcon} alt="facebook icon" />
          <img src={inIcon} alt="instagram icon" />
        </div>
      </div>

      <div className="text-base uppercase space-y-1">
        <p>About Us</p>
        <p>Careers</p>
        <p>Our Brands</p>
      </div>

      <div className="lg:flex lg:flex-row ">
        <img className="w-[186px]" src={DPO} alt="DPO-DPS data privacy" />
        <div className="text-center lg:text-left lg:mt-8">
          <p>Read our</p>
          <p className="font-bold">Privacy Statement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
