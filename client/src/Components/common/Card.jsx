import React from "react";

const Card = ({
  src,
  title,
  description,
  position = 0,
  background = "",
  color = "",
}) => {
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
      className={`bg-[${background}] flex justify-around items-center flex-col xl:flex-row px-4 pt-8 xl:pt-0`}
    >
      <div
        className={`xl:w-[620px] ${
          color == "white" ? "text-white" : "text-[#06529B]"
        } xl:order-${position} order-0 w-4/4 md:w-3/4`}
      >
        <h2 className="font-bold xl:text-6xl lg:text-4xl text-3xl text-center lg:text-left">
          {title}
        </h2>
        <p
          className={`xl:text-base text-xs xl:w-auto ${
            color == "white" ? "text-white" : "text-black"
          }`}
        >
          {description}
        </p>
      </div>
      <img
        src={src}
        alt={`${title} mini banner`}
        className={`w-[619px] h-[324px] order-0 my-8 object-cover  pr-4`}
      />
    </div>
  );
};

export default Card;
