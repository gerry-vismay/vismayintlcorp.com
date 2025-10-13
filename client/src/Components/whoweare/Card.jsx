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
    <div
      className={`flex flex-col items-center xl:w-[600px] ${className} py-4 xl:py-0`}
    >
      <div className="bg-[#E0E7FF] xl:w-[260px] xl:h-[210px] w-[160px] h-[110px] flex items-center justify-center ">
        <img
          src={img}
          alt={`${title} icon`}
          className="size-20 xl:size-40 rounded-[3rem]"
        />
      </div>

      <h2
        className={`font-bold text-3xl xl:text-6xl text-[#06529B] my-4 ${titleColor}`}
      >
        {title}
      </h2>
      <p className="text-center text-xs xl:text-base leading-4 xl:leading-7">
        {description}
      </p>
    </div>
  );
};

export default WhoWeAre;
