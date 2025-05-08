import React from "react";

const Card = ({ img, department, openJobs, link }) => {
  const careerPath = "/career";
  return (
    <div className="w-[310px] text-center text-[#07549C] mx-auto">
      <img src={`${img}`} alt={department} className="max-w-[300px]" />
      <a href={link} className="py-2 text-2xl font-extrabold">
        {department} Department
      </a>
      <p>{openJobs} open job(s)</p>
    </div>
  );
};

export default Card;
