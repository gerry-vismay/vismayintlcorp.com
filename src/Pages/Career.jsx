import React from "react";
import CareerCard from "./../Components/career/Card";

// banners
import Banner from "../Container/home/Banner.jsx";
import careerImg from "../assets/img/desktop-banner/careers.png";
import careerMobile from "../assets/img/mobile-banner/careers.png";

// data
import { careers } from "../data/data.js";
const Career = () => {
  return (
    <section>
      <div className=" relative inline-block">
        <Banner desktopImage={careerImg} mobileImage={careerMobile} />
        <p className="uppercase text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md">
          careers
        </p>
      </div>
      <div className="lg:hidden block"></div>

      <div className="text-center py-16">
        <p className="uppercase text-5xl font-bold">join our growing team</p>
      </div>
      <div className="max-w-screen-xl mx-auto mb-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {careers.map(({ img, department, openJobs }) => {
            return (
              <CareerCard
                img={img}
                department={department}
                openJobs={openJobs}
              />
            );
          })}
          {/* <CareerCard img="career1" department="HR" openJobs={4} />
          <CareerCard img="career2" department="Marketing" openJobs={4} />
          <CareerCard img="career3" department="CSR" openJobs={4} />
          <CareerCard img="career4" department="Accounting" openJobs={4} /> */}
        </div>
      </div>
    </section>
  );
};

export default Career;
