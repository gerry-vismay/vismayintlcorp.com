import React from "react";

const Banner = ({ link, alt, img, mobile, className = "" }) => {
  return (
    // <div>
    //   <a href={link}>
    //     <div className="hidden lg:block">
    //       <img
    //         src={desktopImage}
    //         alt={label}
    //         className={`h-full w-full object-cover relative py-7 ${className}`}
    //       />
    //     </div>
    //     <div className="lg:hidden block">
    //       <img
    //         src={mobileImg}
    //         alt={label}
    //         className={`h-full w-full object-cover relative py-7 ${className}`}
    //       />
    //     </div>
    //   </a>
    // </div>

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
