import React from "react";
import logo from "../../assets/images/vismayLogo.png";
import DPO from "../../assets/icons/footer/SPC-DPO-DPS-Seal-of-Registration-2025-1438x1438-1-1024x1024.png";
import fbIcon from "../../assets/icons/footer/facebook icon.png";
import inIcon from "../../assets/icons/footer/LinkedIn icon.png";

// let iconPath = "./src/assets/icons/footer";

const Footer = () => {
  return (
    <footer className="shadow shadow-gray-700 py-7 bg-[#D9D9D9] px-8">
      <div className="grid grid-cols-1 gap-10 place-items-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <a href="/">
          <img
            src={logo}
            alt="Vismay International Corporation Logo"
            className="w-60"
          />
        </a>

        <div className=" xl:h-[186px] xl:flex xl:items-center xl:pl-12 xl:border-l-[1px] xl:border-black">
          <div className="flex flex-col ">
            <p className="text-xl uppercase pb-3">Connect WIth Us</p>
            <div className="flex flex-row gap-6">
              <a href="https://www.facebook.com/profile.php?id=100009972825900">
                <img src={fbIcon} alt="facebook icon" className="w-[45px]" />
              </a>
              <a href="#">
                <img src={inIcon} alt="LinkedIn icon" className="w-[45px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-base uppercase space-y-1 text-center  xl:h-[186px] xl:flex xl:flex-col xl:justify-center xl:items-start xl:pl-12 xl:border-l-[1px] xl:border-black">
          <a href="/whoweare">
            <p>About Us</p>
          </a>
          <a href="/careers">
            <p>Careers</p>
          </a>
          <a href="/ourbrands">
            <p>Our Brands</p>
          </a>
        </div>

        <div className="lg:flex lg:flex-row  xl:border-l-[1px] xl:border-black">
          <img
            className="w-[186px] cursor-pointer"
            src={DPO}
            alt="DPO-DPS data privacy"
          />
          <div className="text-center lg:text-left lg:mt-8">
            <p>Read our</p>
            <a href="/privacy-policy">
              <p className="font-bold ">Privacy Statement</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
