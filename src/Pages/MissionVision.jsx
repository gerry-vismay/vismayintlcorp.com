import React from "react";

const MissionVision = () => {
  return (
    <section>
      <div className="p-20 bg-gray-100">
        <h1 className="text-center text-3xl">Mission, Vision and Objects</h1>
      </div>

      <div className="p-32 bg-deep-orange-100 flex flex-col lg:flex-row gap-12 justify-center ">
        <div className="bg-blue-900 text-white w-[400px] text-center flex flex-col justify-between overflow-y-hidden">
          <div className="-translate-y-full hover:-translate-y-0 transition-translate duration-500 bg-blue-700 p-8 ">
            <p>
              To be the leader in providing top-of-the-line karaoke products
              with excellent quality at a reasonable price along with quality
              service to our customers.
            </p>
          </div>
          <div className="bg-blue-700 translate-y-0 hover:translate-y-full transition-translate duration-500">
            <h2>Mission</h2>
          </div>
        </div>
        <div className="bg-blue-900 text-white  w-[400px] text-center flex flex-col justify-between overflow-y-hidden">
          <div className="-translate-y-full hover:-translate-y-0 transition-translate duration-500 bg-blue-700 p-8">
            <p>
              Setting up a similar karaoke distribution channel that we have in
              the Philippines in other countries.
            </p>
          </div>
          <div className="bg-blue-700 translate-y-0 hover:translate-y-full transition-translate duration-500">
            <h2>Vision</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center my-16 items-center">
          <p className="text-3xl ">Objectives</p>
          <div className="h-1 w-20 bg-blue-900 rounded-md my-16"></div>
          <div>
            <div className="grid grid-cols-2 gap-8 px-20">
              <p>
                To provide top-of-the-line karaoke products to customers along
                with after sales services that ensure customer satisfaction.
              </p>
              <p>
                To be the market leader in distribution of electronic products
                and karaoke entertainment tools.
              </p>
              <p>
                To provide technologically advanced and economical karaoke
                products that cater to a wide range of customers.
              </p>
              {/* </div>
            <div> */}
              <p>
                To expand distribution of Platinum karaoke to other regions and
                to make Platinum karaoke available in every household across
                countries.
              </p>
              <p>
                To achieve profit and company growth and to ensure that all
                other values and objectives are adhered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
