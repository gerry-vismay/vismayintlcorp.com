import React from "react";

const WhoWeAre = ({ img, title, description, color, className = "" }) => {
  // const pathIcons = "./assets/icons";
  let titleColor = "";
  if (color === "red") {
    titleColor = "text-red-500";
  } else if (color === "blue") {
    titleColor = "text-[#07549C]";
  } else {
    titleColor = "text-black";
  }
  return (
    <div className={`flex flex-col items-center w-[600px] ${className}`}>
      <div className="bg-[#E0E7FF] w-[260px] h-[210px] flex items-center justify-center ">
        <img
          src={img}
          alt={`${title} icon`}
          className="w-[157px] h-[157px] rounded-[3rem]"
        />
      </div>

      <h2 className={`font-bold text-6xl text-[#06529B] my-4 ${titleColor}`}>
        {title}
      </h2>
      <p className="text-center text-base leading-7">{description}</p>
    </div>
  );
  // return (
  //   <div className={`text-center w-full pt-12 ${className} `}>
  //     <img src={img} alt={`${title} icon`} className="w-[80px] mx-auto" />
  //     <div>
  //       <h3 className={`text-4xl font-bold py-4 ${titleColor}`}>{title}</h3>
  //       <p className="text-sm leading-7">{description}</p>
  //     </div>
  //   </div>
  // );
};

export default WhoWeAre;
