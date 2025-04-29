import React from "react";
import Banner from "../Container/home/Banner";
import StaticBanner from "./../Components/banner/StaticBanner";

// banner
import desktopImgPK from "../assets/staticbanner/pk.png";
import desktopImgLF from "../assets/staticbanner/lf.png";

import mobileImgPK from "../assets/staticbanner/mobile-pk.png";
import mobileImgLF from "../assets/staticbanner/mobile-lf.png";

import desktopImage from "../assets/img/desktop-banner/webbanner.png";
import mobileImage from "../assets/img/mobile-banner/mobile-banner.png";

const Brands = () => {
  return (
    <section>
      <Banner
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        className="pb-7"
      />

      <StaticBanner
        link="#"
        desktopImage={desktopImgPK}
        mobileImg={mobileImgPK}
        label="Platinum karaoke"
      />

      <StaticBanner
        link="#"
        desktopImage={desktopImgLF}
        mobileImg={mobileImgLF}
        label="Laifen"
      />
    </section>
  );
};

export default Brands;
