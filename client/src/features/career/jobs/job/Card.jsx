import React from "react";
import Button from "../../../../components/common/Button";
import CollapsibleCareer from "../../../../components/collapsible/Career";

const Card = ({ title, qualifications, locations }) => {
  const handleApply = () => {
    const subject = encodeURIComponent(`Application for ${title}`);

    const mailtoLink = `mailto:hrrecruitment@vismayintlcorp.com?subject=${subject}`;

    // open default mail client
    window.location.href = mailtoLink;

    // Optional alert for user to attach their resume
    setTimeout(() => {
      alert("Please make sure to attach your resume before sending the email.");
    }, 500);
  };
  return (
    <div className=" mx-10">
      <h2 className=" lg:text-[1.375rem] lg:mb-6 my-6 lg:mt-14">{title}</h2>
      <div className=" font-normal flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 lg:gap-0 ">
        <div className="flex-1 w-full lg:mr-6">
          <CollapsibleCareer label="Job Qualifications">
            <ul className={`font-normal list-disc list-outside ml-5 flex-1 `}>
              {qualifications}
            </ul>
          </CollapsibleCareer>

          <CollapsibleCareer label="To be assigned at">
            <ul className="font-normal text-xs lg:text-base ml-5  flex-1 ">
              {locations}
            </ul>
          </CollapsibleCareer>
        </div>

        <Button
          label="Apply Now"
          onClick={handleApply}
          className="font-normal text-nowrap flex-[0.1]"
        />
      </div>
    </div>
  );
};

export default Card;
