import React from "react";

const Banner = ({ img, mobile, alt, className = "", link }) => {
  return (
    <div className={`${className}`}>
      <a href={link}>
        <picture className=" ">
          <source media="(min-width: 768px)" srcset={mobile}></source>
          <img src={img} alt={alt} className={`h-full w-full object-cover `} />
        </picture>
        {/* <div className="lg:hidden block ">
          <img
            src={mobileImage}
            alt=""
            className={`h-full w-full object-cover `}
          />
        </div> */}
      </a>
    </div>
  );
};

export default Banner;
