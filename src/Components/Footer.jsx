import React from "react";

let iconPath = "./src/assets/icons/footer";

const Footer = () => {
  return (
    <footer className=" shadow shadow-gray-700 lg:flex lg:justify-around lg:items-center py-7 bg-[#D9D9D9]">
      <img
        src="./src/assets/vismayLogo.png"
        alt="Vismay International Corporation Logo"
        className="w-60"
      />
      <div className="border-l-2 border-black pl-4">
        <p className="text-xl uppercase pb-3">Connect WIth Us</p>
        <div className="w-[30px] flex flex-row gap-6">
          <img src={`${iconPath}/facebook icon.png`} alt="facebook icon" />
          <img src={`${iconPath}/instagram icon.png`} alt="instagram icon" />
          <img src={`${iconPath}/tiktok icon.png`} alt="tiktok icon" />
          <img src={`${iconPath}/x icon.png`} alt="x or Twitter icon" />
        </div>
      </div>

      <div className="text-base uppercase space-y-1">
        <p>About Us</p>
        <p>Careers</p>
        <p>Our Brands</p>
      </div>

      <div className="lg:flex lg:flex-row ">
        <img
          className="w-[186px]"
          src={`${iconPath}/SPC-DPO-DPS-Seal-of-Registration-2025-1438x1438-1-1024x1024.png`}
          alt="DPO-DPS data privacy"
        />
        <div>
          <p>Read our</p>
          <p>Privacy Statement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
