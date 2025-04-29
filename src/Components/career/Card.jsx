import React from "react";

const Card = ({ img, department, openJobs }) => {
  return (
    <div className="w-[310px] text-center text-[#07549C] mx-auto">
      <img
        src={`./src/assets/img/career/${img}.png`}
        alt={department}
        className="max-w-[300px]"
      />
      <h2 className="py-2 text-2xl font-extrabold">{department} Department</h2>
      <p>{openJobs} open jobs</p>
    </div>
  );
};

export default Card;
