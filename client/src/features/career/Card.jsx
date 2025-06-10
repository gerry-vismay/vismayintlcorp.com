import React from "react";

const Card = ({ img, department, openJobs, link }) => {
  const careerPath = "/career";
  return (
    <div className="w-[310px] text-center text-[#07549C] mx-auto">
      <img src={`${img}`} alt={department} className="max-w-[300px] pb-4" />
      <a href={link} className="text-2xl font-extrabold">
        {department} Department
      </a>
      <p className="pt-2">{openJobs} open job(s)</p>
    </div>
  );
};

export default Card;
