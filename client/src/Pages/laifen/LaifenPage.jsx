import React from "react";

import Button from "../../components/common/Button";

import Banner from "../../components/banner/Banner";
import desktopImg from "../../assets/images/desktop-banner/lf.png";
import mobileImg from "../../assets//images/mobile-banner/lf.png";

import ImgWithDetailsCard from "../../components/common/Card";
import leftImg from "../../assets/images/home/lf/laifen 2.png";
import rightImg from "../../assets/images/home/lf/laifen1.png";

const LaifenPage = () => {
  return (
    <section>
      <Banner desktopImage={desktopImg} mobileImage={mobileImg} />
      <div className="px-80 h-[150px] bg-[#07549C] text-white flex justify-between items-center"></div>
      <ImgWithDetailsCard
        imgRight={rightImg}
        titleRight="Quick Drying Power for Glossy, Smooth Hair"
        descriptionRight="Offers a Faster Drying with Less Heat Damage that
Breaks water down into smaller droplets, making them evaporate quicker for faster drying and reduced heat exposure, A Frizz-Free Styling
Neutralizes the positive ions that are responsible for static electricity, fending off frizz and flyaways right from the source.And Shine Like a Diamond that smooths hair cuticles for healthier hair that better reflects light for a positively dazzling look."
        imgLeft={leftImg}
        titleLeft="High-Speed Drying with Advanced Heat Protection"
        descriptionLeft="Laifen is a high-speed hair dryer operates at 110,000 RPM, compare to a traditional one runs that at 20,000-30,000 RPM. Designed for ultra-fast drying with advanced heat protection, so you can spend less time drying and more time living. Includes 3 magnetic nozzles for versatile styling.
."
      />
      <div className=" flex justify-center py-8">
        <Button label="Learn more" href="https://laifen.ph" />
      </div>
    </section>
  );
};

export default LaifenPage;
