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
    <div className={`bg-[${background}] flex justify-around items-center`}>
      <div className={`w-[620px] text-${color} order-${position}`}>
        <h2 className="font-bold text-6xl ">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
      <img
        src={src}
        alt={`${title} mini banner`}
        className={`w-[619px] h-[324px] order-0 my-8 object-cover`}
      />
    </div>
  );
};

export default Card;
