import React from "react";
import TButton from "../../Components/buttons/TButton";

const Banner = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <a href="/">
        <div className="lg:block hidden ">
          <img
            src=".\src\assets\img\desktop-banner\webbanner.png"
            alt=""
            className={`h-full w-full object-cover  `}
          />
        </div>
        <div className="lg:hidden block ">
          <img
            src=".\src\assets\img\mobile-banner\mobile-banner.png"
            alt=""
            className={`h-full w-full object-cover `}
          />
        </div>
      </a>
    </div>
  );
};

export default Banner;
