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
    <div className={`text-center w-[626px] pt-12 ${className} `}>
      <img src={img} alt={`${title} icon`} className="w-[80px] mx-auto" />
      <div>
        <h3 className={`text-4xl font-bold py-4 ${titleColor}`}>{title}</h3>
        <p className="text-sm leading-7">{description}</p>
      </div>
    </div>
  );
};

export default WhoWeAre;
