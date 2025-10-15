import React from "react";
import Banner from "../components/banner/Banner";
import StaticBanner from "./../Components/banner/StaticBanner";

// banner
import desktopImgPK from "../assets/images/staticbanner/pk.png";
import desktopImgLF from "../assets/images/staticbanner/lf.png";

import mobileImgPK from "../assets/images/staticbanner/mobile-pk.png";
import mobileImgLF from "../assets/images/staticbanner/mobile-lf.png";

import desktopImage from "../assets/images/desktop-banner/webbanner.png";

const Brands = () => {
  return (
    <>
      <Banner img={desktopImage} />
      <main className="max-w-screen-2xl mx-auto">
        <StaticBanner
          link="/ourbrands/platinumkaraoke"
          desktopImage={desktopImgPK}
          mobileImg={mobileImgPK}
          label="Platinum karaoke"
        />

        <StaticBanner
          link="/ourbrands/laifen"
          desktopImage={desktopImgLF}
          mobileImg={mobileImgLF}
          label="Laifen"
        />
      </main>
    </>
  );
};

export default Brands;
