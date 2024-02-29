import React from "react";
import { Typography } from "@material-tailwind/react";

const BetterThanOther = () => {
  return (
    <section>
      <div className="w-3/4 mx-auto text-center ">
        <div className="text-center text-xl lg:text-3xl mb-8">
          <h1>What Makes us</h1>
          <h1>better than others</h1>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div>
            <Typography as="text" variant="small" color="black" className="p-4">
              Retail & Online stores
            </Typography>
            <Typography as="text" variant="small" color="black" className="p-4">
              We have the most comprehensive catalogue of latest and original
              electronic gadgets. We carry a wide range in hardware, software,
              and accessories.
            </Typography>
          </div>
          <div>
            <Typography as="text" variant="small" color="black" className="p-4">
              Centralized Distribution & Superior Service centers
            </Typography>
            <Typography as="text" variant="small" color="black" className="p-4">
              We have the best distribution channels and highly skilled teams at
              our service centers ensuring that our customer have 100%
              satisfaction.
            </Typography>
          </div>
          <div>
            <Typography as="text" variant="small" color="black" className="p-4">
              Authentic and high-performance goods
            </Typography>
            <Typography as="text" variant="small" color="black" className="p-4">
              Our core principle has been to always sell original gadgets,
              softwares, and accessories to our customers.
            </Typography>
          </div>
          <div>
            <Typography as="text" variant="small" color="black" className="p-4">
              After sales support
            </Typography>
            <Typography as="text" variant="small" color="black" className="p-4">
              We not only provide goods to our customers but also after sales
              support and assistance by an expert team of technicians.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterThanOther;
