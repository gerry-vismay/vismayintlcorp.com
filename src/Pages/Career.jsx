import React from "react";
import CareerCard from "./../Components/career/Card";

const Career = () => {
  return (
    <section>
      <div className="bg-[url(./src/assets/img/desktop-banner/careers.png)] w-auto bg-cover h-[677px] flex justify-center items-center">
        <p className="uppercase text-5xl font-bold text-white ">careers</p>
      </div>
      <div className="text-center py-16">
        <p className="uppercase text-5xl font-bold">join our growing team</p>
      </div>
      <div className="max-w-screen-xl mx-auto mb-20 ">
        <div className="grid grid-cols-2 gap-16">
          <CareerCard img="career1" department="HR" openJobs={4} />
          <CareerCard img="career2" department="Marketing" openJobs={4} />
          <CareerCard img="career3" department="CSR" openJobs={4} />
          <CareerCard img="career4" department="Accounting" openJobs={4} />
        </div>
      </div>
    </section>
  );
};

export default Career;
