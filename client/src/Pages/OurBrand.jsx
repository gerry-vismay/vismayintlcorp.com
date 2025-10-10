import BRAND from "../assets/images/banner/BRAND.webp";
import pk from "../assets/images/brand/pk.webp";
import lf from "../assets/images/brand/laifen.webp";

const OurBrand = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 pb-10">
      {/* Photo Holder */}
      <div className="w-screen overflow-hidden flex justify-center mb-8">
        <img src={BRAND} alt="Our Brand" className="w-full h-auto object" />
      </div>

      {/* Main Content */}
      <div className="max-w-[1588px] w-full mx-auto mt-20 !mb-10">
        {/* Top Section */}
        <div className="!mt-15">
          <h2 className="mb-10 mt-6 font-inter font-bold text-[#06529B] text-left w-[1062px] h-[77px] text-[36px] leading-[1] ">
            The Platinum
          </h2>

          <div className="w-full flex justify-center mb-12">
            <img
              src={pk}
              alt="The Platinum"
              className="w-full max-w-[1588px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="!mt-15">
          <h2
            className="
                mb-10
                mt-6
                font-inter font-bold
                text-[#06529B]
                text-left
                w-[1062px]
                h-[77px]
                text-[36px]
                leading-[1]
                "
          >
            Laifen
          </h2>

          <div className="w-full flex justify-center">
            <img
              src={lf}
              alt="Laifen"
              className="w-full max-w-[1588px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
