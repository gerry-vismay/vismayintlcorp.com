import React from "react";

// banners
import Banner from "../../../components/banner/Banner.jsx";
import careerImg from "../../../assets/images/desktop-banner/careers.png";
import careerMobile from "../../../assets/images/mobile-banner/careers.png";
import { careers } from "../../../data/data.js";

import Card from "./job/Card.jsx";
import { useParams } from "react-router-dom";

const jobOffers = [
  {
    id: 1,
    title: "Graphics Artist",
    department: "marketing",
    qualification: [
      "Must be pursuing or have completed a college-level course in Information Technology, Computer Science, Advertising/Media, Art/Design/Creative Multimedia, or a related field.",
      "At least 6 months related working experience",
      "Knowledgeable in graphic design software, including Adobe Illustrator, Photoshop, Corel Draw and Autocad",
      "Freehand drawing skills are a plus",
      "Results oriented and must be keen to details",
      "College undergraduates are also encouraged to apply",
    ],
  },
  {
    id: 2,
    title: "Marketing Specialist",
    department: "marketing",
    qualification: [
      "Must have good English communication and interpersonal skills",
      "Preferably with sales experience (insurance sales, real estate, B2B or B2C field sales, etc.)",
      "Physically-able to perform a field-based work",
      "Goal-oriented and can work with minimum supervision",
      "Interest in sales, training, and upskilling",
      "Willing to be assigned to any site and travel for work",
    ],
  },
];

const OpenJobs = () => {
  const { department } = useParams(); // create params for the value to render

  const filterDepartment = jobOffers.filter(
    (offer) => department === offer.department.toLowerCase()
  );

  const jobOpens = careers.find(
    (jobOPen) => jobOPen.department.toLowerCase() === department
  );

  const openJobsCOunt = jobOpens ? jobOpens.openJobs : 0;

  console.log(department);
  console.log(filterDepartment);

  console.log(careers);

  console.log(openJobsCOunt);
  return (
    <section className=" text-xl font-semibold mb-14">
      <Banner desktopImage={careerImg} mobileImage={careerMobile} />
      <div className="max-w-screen-2xl mx-auto ">
        <h2 className="text-[rgb(7,84,156)] text-2xl mt-14">
          {openJobsCOunt} Job(s) available
        </h2>
        {filterDepartment.map(({ id, title, qualification }) => {
          return (
            <Card
              key={id}
              title={title}
              qualifications={qualification.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OpenJobs;
