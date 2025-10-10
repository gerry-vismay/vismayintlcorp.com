import React from "react";

const Card = ({
  src,
  title,
  description,
  position = 0,
  background = "",
  color = "",
}) => {
  return (
    <div
      className={`bg-[${background}] flex justify-around items-center flex-col xl:flex-row px-4 pt-8`}
    >
      <div
        className={`xl:w-[620px]  text-${color} xl:order-${position} order-0`}
      >
        <h2 className="font-bold xl:text-6xl text-3xl text-center lg:text-left">
          {title}
        </h2>
        <p className="xl:text-base text-xs xl:w-[500px] ">{description}</p>
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
