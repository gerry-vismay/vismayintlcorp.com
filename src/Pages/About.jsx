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
      <div className="p-20 bg-gray-100">
        <h1 className="text-center text-3xl">Mission, Vision and Objects</h1>
      </div>

      <div className="p-32 bg-deep-orange-100 flex flex-col lg:flex-row gap-12 justify-center items-center lg:items-normal ">
        <div className="bg-blue-900 text-white w-[400px] text-center flex flex-col justify-between ">
          <div className=" p-8 ">
            <p>
              To be the leader in providing top-of-the-line karaoke products
              with excellent quality at a reasonable price along with quality
              service to our customers.
            </p>
          </div>
          <div className="bg-blue-700 translate-y-0 hover:translate-y-full transition-translate duration-500">
            <h2>Mission</h2>
          </div>
        </div>
        <div className="bg-blue-900 text-white  w-[400px] text-center flex flex-col justify-between ">
          <div className=" p-8">
            <p>
              Setting up a similar karaoke distribution channel that we have in
              the Philippines in other countries.
            </p>
          </div>
          <div className="bg-blue-700 translate-y-0 hover:translate-y-full transition-translate duration-500">
            <h2>Vision</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center my-16 items-center">
          <p className="text-3xl ">Objectives</p>
          <div className="h-1 w-20 bg-blue-900 rounded-md my-16"></div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 px-8 lg:px-20">
              <p>
                To provide top-of-the-line karaoke products to customers along
                with after sales services that ensure customer satisfaction.
              </p>
              <p>
                To be the market leader in distribution of electronic products
                and karaoke entertainment tools.
              </p>
              <p>
                To provide technologically advanced and economical karaoke
                products that cater to a wide range of customers.
              </p>
              {/* </div>
            <div> */}
              <p>
                To expand distribution of Platinum karaoke to other regions and
                to make Platinum karaoke available in every household across
                countries.
              </p>
              <p>
                To achieve profit and company growth and to ensure that all
                other values and objectives are adhered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-20 bg-gray-100">
        <h1 className="text-center text-3xl">Organizational Chart</h1>
      </div>
      <div className="container mx-auto mb-16">
        <img src="/OChart.png" alt="Organizational Chart" />
      </div>
    </section>
  );
};

export default About;
