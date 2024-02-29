import React from "react";
import { Typography } from "@material-tailwind/react";

const Career = () => {
  return (
    <section>
      <div className="p-20 bg-gray-100">
        <h1 className="text-center text-3xl">Careers</h1>
      </div>
      <div className="p-16 bg-gray-200 text-center">
        <Typography as="text" color="blue">
          Be part of our growing team today and get a chance to work with global
          brands such as
        </Typography>
        <Typography as="text" color="blue">
          Strontium Technology, Symphony, Adidas, Platinum Karaoke and more!
        </Typography>
      </div>
    </section>
  );
};

export default Career;
