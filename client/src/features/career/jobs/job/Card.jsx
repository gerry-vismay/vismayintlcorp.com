import React from "react";
import Button from "../../../../components/common/Button";

const Card = ({ title, qualifications, locations }) => {
  return (
    <div className=" mx-10">
      <h2 className=" lg:text-[1.375rem] lg:mb-6 mt-6 lg:mt-14">{title}</h2>
      <p className="mb-6">Job Qualifications:</p>
      <div className="font-normal flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 lg:gap-y-0">
        <div>
          <ul className="list-disc list-outside ml-5 flex-1 max-w-[42rem]">
            {qualifications}
            <li>To be assigned at</li>
          </ul>
          <ul className="text-base ml-5 flex-1 max-w-[42rem]">{locations}</ul>
        </div>

        <Button
          label="Apply Now"
          href="mailto:hrrecruitment@vismayintlcorp.com"
          className="font-normal"
        />
      </div>
    </div>
  );
};

export default Card;
