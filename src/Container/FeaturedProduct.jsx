import React from "react";
import { Typography } from "@material-tailwind/react";

const FeaturedProduct = () => {
  return (
    <section className="text-center text-3xl my-20">
      <h1>Our Featured Products</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-2/3 gap-8 mx-auto mt-20">
        <div className="flex flex-col">
          <a href="">
            <img className="mb-8" src="/Alpha2.jpg" alt="" />
            <Typography>Platinum Alpha 2</Typography>
          </a>
        </div>
        <div className="flex flex-col">
          <a href="">
            <img className="mb-8" src="/Alpha2.jpg" alt="" />
            <Typography>Platinum Alpha 2</Typography>
          </a>
        </div>
        <div className="flex flex-col">
          <a href="">
            <img className="mb-8" src="/Alpha2.jpg" alt="" />
            <Typography>Platinum Alpha 2</Typography>
          </a>
        </div>
        <div className="flex flex-col">
          <a href="">
            <img className="mb-8" src="/Alpha2.jpg" alt="" />
            <Typography>Platinum Alpha 2</Typography>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
