import React from "react";
import logo from "../assets/vismayLogo.png";
import DPO from "../assets/footer/SPC-DPO-DPS-Seal-of-Registration-2025-1438x1438-1-1024x1024.png";
import fbIcon from "../assets/footer/facebook icon.png";
import igIcon from "../assets/footer/instagram icon.png";
import tiktokIcon from "../assets/footer/tiktok icon.png";
import xIcon from "../assets/footer/x icon.png";

// let iconPath = "./src/assets/icons/footer";

const Footer = () => {
  return (
    <footer className=" shadow shadow-gray-700 lg:flex lg:justify-around lg:items-center py-7 bg-[#D9D9D9]">
      <img
        src={logo}
        alt="Vismay International Corporation Logo"
        className="w-60"
      />
      <div className="border-l-2 border-black pl-4">
        <p className="text-xl uppercase pb-3">Connect WIth Us</p>
        <div className="w-[30px] flex flex-row gap-6">
          <img src={fbIcon} alt="facebook icon" />
          <img src={igIcon} alt="instagram icon" />
          <img src={tiktokIcon} alt="tiktok icon" />
          <img src={xIcon} alt="x or Twitter icon" />
        </div>
      </div>

      <div className="text-base uppercase space-y-1">
        <p>About Us</p>
        <p>Careers</p>
        <p>Our Brands</p>
      </div>

      <div className="lg:flex lg:flex-row ">
        <img className="w-[186px]" src={DPO} alt="DPO-DPS data privacy" />
        <div>
          <p>Read our</p>
          <p>Privacy Statement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
