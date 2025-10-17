import BRAND from "../assets/images/banner/BRAND.webp";
import pk from "../assets/images/brand/pk.webp";
import lf from "../assets/images/brand/laifen.webp";

import Banner from "../components/banner/Banner";
import SectionBanner from "../components/banner/Banner";

const OurBrand = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 pb-10">
      {/* Photo Holder */}
      <Banner img={BRAND} alt="Our Brand Section" />

      {/* Main Content */}
      <div className="max-w-[1440px] w-full mx-auto mt-20 mb-10 px-4">
        {/* Platinum Karaoke Section */}
        <div className="mt-15 ">
          <h2 className="mb-10 mt-6 font-bold text-[#06529B] text-lg md:text-4xl leading-[1] ">
            The Platinum
          </h2>

          <div className="w-full flex justify-center mb-12">
            <SectionBanner
              link="https://platinumkaraoke.com/"
              img={pk}
              alt="Platinum Karaoke section Banner"
            />
          </div>
        </div>
        {/* Laifen Section
        <div className="mt-15">
          <h2 className="mb-10 mt-6 font-bold text-[#06529B] text-lg md:text-4xl leading-[1]">
            Laifen
          </h2>

          <div className="w-full flex justify-center">
            <SectionBanner img={lf} alt="Laifen section Banner" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurBrand;
