import React from "react";

const Banner = ({ link, label, desktopImage, mobileImg, className = "" }) => {
  return (
    <div>
      <a href={link}>
        <div className="hidden lg:block">
          <img
            src={desktopImage}
            alt={label}
            className={`h-full w-full object-cover relative py-7 ${className}`}
          />
        </div>
        <div className="lg:hidden block">
          <img
            src={mobileImg}
            alt={label}
            className={`h-full w-full object-cover relative py-7 ${className}`}
          />
        </div>
      </a>
    </div>
  );
};

export default Banner;
