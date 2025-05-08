import React from "react";

const Banner = ({ desktopImage, mobileImage, className = "", link }) => {
  return (
    <div className={`${className}`}>
      <a href={link}>
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
