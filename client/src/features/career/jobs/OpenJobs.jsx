import React, { useEffect, useState } from "react";

// banners
import Banner from "../../../components/banner/Banner.jsx";
import careerImg from "../../../assets/images/desktop-banner/careers.png";
import careerMobile from "../../../assets/images/mobile-banner/careers.png";
import { careers } from "../../../data/data.js";

import Card from "./job/Card.jsx";
import SkeletonCard from "../../../components/common/SkeletonCard.jsx";
import { useParams } from "react-router-dom";

const OpenJobs = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiURL = import.meta.env.VITE_API_URL;
  const { department } = useParams();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch(`${apiURL}/api/items`);
      const data = await res.json();
      console.log("Fetched from /api/items:", data);

      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  const filterDepartment = Array.isArray(items)
    ? items.filter((job) => department === job.department.toLowerCase())
    : [];

  const jobOpens = careers.find(
    (jobOpen) => jobOpen.department.toLowerCase() === department
  );
  const openJobsCount = jobOpens ? jobOpens.openJobs : 0;

  return (
    <section className="text-xs lg:text-xl font-semibold mb-14 lg:mx-0">
      <Banner desktopImage={careerImg} mobileImage={careerMobile} />
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-[rgb(7,84,156)] lg:text-2xl mt-14 mx-10">
          {openJobsCount} Job(s) available
        </h2>

        {loading ? (
          <>
            {[...Array({ length: filterDepartment.length <= 4 || 3 })].map(
              (_, i) => (
                <SkeletonCard key={i} />
              )
            )}
          </>
        ) : filterDepartment.length > 0 ? (
          filterDepartment.map(
            ({ id, position, qualifications, locations }) => (
              <Card
                key={id}
                title={position}
                qualifications={qualifications.map((requirement, i) => (
                  <li key={i}>{requirement}</li>
                ))}
                locations={locations.map((location, i) => (
                  <li className="italic" key={i}>
                    {location}
                  </li>
                ))}
              />
            )
          )
        ) : (
          <div className="text-center py-10 text-gray-500 text-base lg:text-lg">
            No jobs available for this department.
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenJobs;
