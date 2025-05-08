import React from "react";
import Button from "../../../../components/common/Button";

const Card = ({ title, qualifications }) => {
  return (
    <div>
      <h2 className="text-[1.375rem] mb-6 mt-14">{title}</h2>
      <p className="mb-6">Job Qualifications:</p>
      <div className="font-normal flex justify-between items-center">
        <ul className="list-disc list-inside flex-1 max-w-[42rem]">
          {qualifications}
        </ul>
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
