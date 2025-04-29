import React from "react";
import Banner from "../Container/home/Banner";
import StaticBanner from "./../Components/banner/StaticBanner";
import Button from "../Components/buttons/TButton";

const Brands = () => {
  return (
    <section>
      <Banner className="pb-7" />
      <div className="">
        <StaticBanner link="#" img="PK" mobileImg="mobile-pk" />
      </div>
      <div className="">
        <StaticBanner link="#" img="lf" mobileImg="mobile-lf" />
      </div>
    </section>
  );
};

export default Brands;
