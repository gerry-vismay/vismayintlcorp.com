import React from "react";
import CareerCard from "../features/career/Card.jsx";

// banners
import Banner from "../components/banner/Banner.jsx";
import careerImg from "../assets/images/desktop-banner/careers.png";
import careerMobile from "../assets/images/mobile-banner/careers.png";

// data
import { careers } from "../data/data.js";
import { useParams } from "react-router-dom";
const Career = () => {
  const { department } = useParams();

  const filteredCareers = department
    ? careers.filter(
        (career) =>
          career.department.toLowerCase() === department.toLowerCase() &&
          career.openJobs > 0
      )
    : careers.filter((career) => career.openJobs > 0);

  console.log(department);

  return (
    <section>
      <Banner link="" desktopImage={careerImg} mobileImage={careerMobile} />

      <div className="text-center py-16">
        <p className="uppercase text-3xl lg:text-5xl font-bold">
          join our growing team
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto mb-20">
        {filteredCareers.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            There are currently no job openings available. Please check back
            later for future opportunities.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {filteredCareers.map(({ id, img, department, openJobs }) => (
              <CareerCard
                key={id}
                link={`/careers/${department.toLowerCase()}`}
                img={img}
                department={department}
                openJobs={openJobs}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Career;
