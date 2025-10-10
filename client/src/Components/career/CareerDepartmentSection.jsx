import HRDepartmentLogo from "../../assets/images/career/HR_DEPARTMENT_00.webp";

function CareerDepartmentSection() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[102.5rem] h-[39rem] flex flex-row justify-around items-center">
        <div className="flex flex-col gap-15">
          <div>
            <h1 className="text-3xl font-bold text-[#06529B] border-b-2 border-blue-400 pb-1 text-[48px] font-normal tracking-wider">
              DIGITAL ONLINE <br />
              <span className="font-bold bold text-[48px] tracking-normal text-[#06529B]">
                HR DEPARTMENT
              </span>
            </h1>
            <p className="relative text-xl text-[#06529B] mt-2 font-bold cursor-pointer inline-block group">
              1 Job(s) available
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#2f5579b0] transition-all duration-500 group-hover:w-full"></span>
            </p>
          </div>
          <div>
            <button className="flex items-center justify-center rounded-full text-[#1c1d1e] white bg-[#0872d7] hover:bg-[#085eaf] px-8 py-2 tracking-tight w-[190px] cursor-pointer">
              Learn More
              <span className="material-symbols-outlined mt-[2px]">
                arrow_right
              </span>
            </button>
          </div>
        </div>
        <div className="h-[703px] w-[658px] bg-[#0872d7] flex items-center justify-center rounded-[3px]">
          <div className=" flex items-center rounded-full bg-white w-[480px] h-[480px] relative">
            <img
              src={HRDepartmentLogo}
              alt="HR Department"
              className="w-[678px] h-[473px] object-cover absolute bottom-3 right-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerDepartmentSection;
