import React from "react";

const Card = ({
  imgRight,
  titleRight,
  descriptionRight,
  imgLeft,
  titleLeft,
  descriptionLeft,
}) => {
  const homePath = "/home";
  return (
    <div className="mt-[50px] text-sm mx-auto flex justify-center flex-col">
      <div className="flex flex-col items-center lg:flex-row max-w-screen-lg mx-auto lg:gap-20 py-6">
        <div className="order-2 lg:order-none lg:text-left text-center w-[330px] lg:w-auto  ">
          <h3 className="text-3xl font-bold py-4 ">{titleRight}</h3>
          <p className="text-xs md:text-sm leading-7">{descriptionRight}</p>
        </div>
        <img
          src={imgRight}
          className="order-1 lg:order-none w-[330px]"
          alt={`${titleRight}`}
        />
      </div>

      <div className="flex flex-col items-center lg:flex-row max-w-screen-lg lg:mx-auto lg:gap-20 py-6">
        <img
          src={imgLeft}
          className="order-1 lg:order-none w-[330px]"
          alt={`${titleLeft}`}
        />
        <div className="order-2 lg:order-none lg:text-right text-center w-[330px] lg:w-auto">
          <h3 className="text-3xl font-bold py-4">{titleLeft}</h3>
          <p className="text-xs md:text-sm leading-7">{descriptionLeft}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
