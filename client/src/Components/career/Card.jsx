import React from "react";

const Card = ({ img, department, openJobs }) => {
  const careerPath = "/career";
  return (
    <div className="w-[310px] text-center text-[#07549C] mx-auto">
      <img src={`${img}`} alt={department} className="max-w-[300px]" />
      <h2 className="py-2 text-2xl font-extrabold">{department} Department</h2>
      <p>{openJobs} open jobs</p>
    </div>
  );
};

export default Card;
