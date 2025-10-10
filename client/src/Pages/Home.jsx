import React from "react";
import Banner from "../components/banner/Banner";
import WhoWeAreCard from "../Components/whoweare/Card";

import ImgWithDetailsCard from "../components/common/Card";

// icons
import aspirations from "../assets/icons/aspirations.webp";
import milestones from "../assets/icons/milestones.webp";

import karaokeImg from "../assets/images/home/karaoke-division.webp";
import electronicsImg from "../assets/images/home/electronic-division.webp";

import desktopImage from "../assets/images/banner/BANNERv2.webp";

const Home = () => {
  return (
    <main>
      <div>
        <Banner img={desktopImage} />
      </div>
      <div className="flex justify-around flex-col lg:flex-row my-12">
        <WhoWeAreCard
          color="blue"
          className="w-full mx-auto px-10"
          img={milestones}
          title="Milestones"
          description="Founded in 2000, Vismay International Corporation began with a mission
        to make world-class technology accessible to Filipinos. Starting as a
        distributor of electronics and lifestyle products, the company quickly
        expanded its reach and offerings. In 2010, it opened its first retail
        store in Metro Manila, followed by the successful nationwide launch of
        Platinum Karaoke in 2015. Embracing the shift to digital, Vismay
        strengthened its e-commerce presence in 2018 to better serve customers
        across the country. Today, with over two decades of experience, Vismay
        remains committed to innovation, quality, and empowering everyday lives
        through accessible, reliable technology."
        />
        <WhoWeAreCard
          color="blue"
          className="w-full mx-auto px-10 "
          img={aspirations}
          title="Aspirations"
          description="At Vismay International Corporation, we aspire to be the foremost name in innovative lifestyle technology—bringing cutting-edge gadgets, entertainment, and digital experiences closer to every Filipino home. Fueled by passion and guided by excellence, we envision a future where access to world-class tech is not just a luxury, but a standard. We strive to lead with integrity, grow with purpose, and always put people first—because for us, progress means empowering lives through technology."
        />
      </div>

      <ImgWithDetailsCard
        src={karaokeImg}
        title="Karaoke Division"
        description="In 2010, Vismay International Corporation started distributing
          Platinum Karaoke and introduced a collection of karaoke players with
          latest technology. This piloted a new era in the entertainment
          industry with Karaoke systems becoming a must in every Filipino
          Household."
        background="#06529B"
        color="white"
      />
      <ImgWithDetailsCard
        position={1}
        src={electronicsImg}
        title="Electronics Division"
        description="Electronics Division Vismay is an authorized distributor for
          prestigious brands of electronic products such as Symphony air cooler,
          strontium SD card, Mifa Bluetooth speaker, Adidas mobile cases etc."
      />
    </main>
  );
};

export default Home;
