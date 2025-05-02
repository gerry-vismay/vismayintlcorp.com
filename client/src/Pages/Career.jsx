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
      <Banner desktopImage={careerImg} mobileImage={careerMobile} />

      <div className="text-center py-16">
        <p className="uppercase text-3xl lg:text-5xl font-bold">
          join our growing team
        </p>
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
        </div>
      </div>
    </section>
  );
};

export default Career;
