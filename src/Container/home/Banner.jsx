import React from "react";
import desktopImage from "../../assets/img/desktop-banner/webbanner.png";
import mobileImage from "../../assets/img/mobile-banner/mobile-banner.png";

const Banner = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <a href="/">
        <div className="lg:block hidden ">
          <img
            src={desktopImage}
            alt=""
            className={`h-full w-full object-cover  `}
          />
        </div>
        <div className="lg:hidden block ">
          <img
            src={mobileImage}
            alt=""
            className={`h-full w-full object-cover `}
          />
        </div>
      </a>
    </div>
  );
};

export default Banner;
