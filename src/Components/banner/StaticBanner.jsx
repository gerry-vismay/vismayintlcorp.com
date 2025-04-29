import React from "react";

const Banner = ({ link, img, mobileImg, className = "" }) => {
  return (
    <div>
      <a href={link}>
        <div className="hidden lg:block">
          <img
            src={`./src/assets/img/staticbanner/${img}.png`}
            alt={img}
            className={`h-full w-full object-cover relative py-7 ${className}`}
          />
        </div>
        <div className="lg:hidden block">
          <img
            src={`./src/assets/img/staticbanner/${mobileImg}.png`}
            alt={img}
            className={`h-full w-full object-cover relative py-7 ${className}`}
          />
        </div>
      </a>
    </div>
  );
};

export default Banner;
