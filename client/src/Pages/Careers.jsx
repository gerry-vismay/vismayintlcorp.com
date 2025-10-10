import CareersBanner from "../assets/images/banner/CAREERS.webp";
import CareerDepartmentSection from "../components/career/CareerDepartmentSection";

import Banner from "../components/banner/Banner";

function Careers() {
  return (
    <>
      <div>
        <Banner img={CareersBanner} />
        <CareerDepartmentSection />
      </div>
    </>
  );
}

export default Careers;
