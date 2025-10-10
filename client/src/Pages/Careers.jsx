import CareersBanner from "../assets/images/banner/CAREERS.webp";
import CareerDepartmentSection from "../components/career/CareerDepartmentSection";

function Careers() {
  return (
    <>
      <div>
        <img
          className="w-[1,922px] h-[825] bg-cover bg-center bg-no-repeat"
          src={CareersBanner}
          alt="Careers"
        />

        <CareerDepartmentSection />
      </div>
    </>
  );
}

export default Careers;
