import HRDepartmentLogo from "../../assets/images/career/HR_DEPARTMENT_00.webp";

function CareerDepartmentSection() {
  return (
    <div className=" w-full flex items-center justify-center py-16">
      <div className="w-[102.5rem] flex flex-col gap-8 xl:gap-0 xl:flex-row justify-around items-center">
        <div className="order-1 xl:order-0 flex flex-col gap-15 ">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#06529B] border-b-2 border-blue-400 pb-1 font-normal tracking-wider">
              DIGITAL ONLINE <br />
              {/* <span className="font-bold bold text-5xl tracking-normal text-[#06529B]">
                HR DEPARTMENT
              </span> */}
            </h1>
            <p className="relative text-base md:text-xl text-[#06529B] mt-2 font-bold cursor-pointer inline-block group">
              Job(s) available
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#2f5579b0] transition-all duration-500 group-hover:w-full"></span>
            </p>

            <ul className="pb-8 pt-4 cursor-pointer tracking-wider font-medium text-xs md:text-base text-black/85 pl-8 list-disc list-inside">
              <li>Product and Sales Training Officer</li>
              <li>Property Leasing Officer (Airbnb)</li>
              <li>Project and Property Officer</li>
              <li>Warehouse and Logistic Manager</li>
              <li>IT Manager</li>
              <li>FP&A Manager</li>
              <li>Admin Officer</li>
              <li>Livestreamer</li>
              <li>General Manager (Paragon)</li>
              <li>Accounting Supervisor</li>
              <li>Key Accounts Manager</li>
            </ul>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-4 text-xs md:text-base">
            <a
              href="https://ph.jobstreet.com/vismay-international-corp-jobs"
              target="_blank"
            >
              <button className="flex items-center justify-center rounded-full text-white bg-[#0872d7] border-2 border-[#0872d7] hover:bg-[#085eaf] hover:ring-2 md:px-8 py-2 tracking-tight w-[190px] cursor-pointer">
                Jobstreet
                <span className="material-symbols-outlined mt-1">
                  arrow_right
                </span>
              </button>
            </a>
            <a
              href="https://ph.indeed.com/cmp/Xtremeway-Corporation/jobs"
              target="_blank"
            >
              <button className="flex items-center justify-center rounded-full bg-white text-[#0872d7] border-2 border-[#0872d7] hover:text-[#085eaf] hover:ring-2  px-8 py-2 tracking-tight w-[190px] cursor-pointer">
                Indeed
                <span className="material-symbols-outlined mt-1">
                  arrow_right
                </span>
              </button>
            </a>
            <a
              href="https://www.facebook.com/vismayinternationalcorp"
              target="_blank"
            >
              <button className="flex items-center justify-center rounded-full text-white bg-[#0872d7] border-2 border-[#0872d7] hover:bg-[#085eaf] hover:ring-2 px-8 py-2 tracking-tight w-[190px] cursor-pointer">
                Facebook
                <span className="material-symbols-outlined mt-1">
                  arrow_right
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="order-0 xl:order-1 h-[336px] md:h-[636px] w-[328px] md:w-[628px] bg-[#0872d7] flex items-center justify-center rounded-[3px]">
          <div >
            <img
              src={HRDepartmentLogo}
              alt="HR Department"
              className="w-[223px] md:w-[473px] object-cover bg-white border-[12px] border-white rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerDepartmentSection;
