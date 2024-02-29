import React from "react";
import { Typography } from "@material-tailwind/react";

const About = () => {
  return (
    <section>
      <div className="p-20 bg-gray-100">
        <h1 className="text-center text-3xl">About Us</h1>
      </div>
      <div className="p-16 bg-gray-200 text-center">
        <Typography as="text" color="blue">
          Vismay International Corporation deals in distribution of electronic
          goods.
        </Typography>
        <Typography as="text" color="blue">
          We also engage in distribution of Platinum karaoke products.
        </Typography>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col  lg:p-16 gap-16 w-8/12 justify-center items-center mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 lg:p-4">
            <img
              className="my-8 lg:my-0 lg:w-5/12 order-2 lg:order-1"
              src="/KaraokeDivision.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between order-1 lg:order-2 lg:mt-0 mt-8">
              <Typography className="text-3xl mb-8 font-bold" as="text">
                Karaoke Division
              </Typography>
              <Typography as="text">
                In 2010, Vismay International Corporation started distributing
                Platinum Karaoke and introduced a collection of karaoke players
                with latest technology. This piloted a new era in the
                entertainment industry with Karaoke systems becoming a must in
                every Filipino Household.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 lg:p-4">
            <div>
              <Typography as="text" className="text-3xl mb-8 font-bold">
                Electronics Division
              </Typography>
              <Typography as="text">
                Vismay is an authorized distributor for prestigious brands of
                electronic products such as Symphony air cooler, strontium SD
                card, Mifa Bluetooth speaker, Adidas mobile cases etc.
              </Typography>
            </div>
            <img
              className="my-8 lg:my-0 lg:w-5/12"
              src="/ElectronicsDivision.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
