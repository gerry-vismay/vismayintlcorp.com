import React from "react";
import Banner from "./Banner";
import WhoWeAreCard from "../../Components/whoweare/Card";
import TButton from "../../Components/buttons/TButton";
import ImgWithDetailsCard from "../../Components/imgWithDetails/Card";
import milestonesIcon from "../../assets/icons/Milestones.png";
import aspirationsIcon from "../../assets/icons/Aspirations.png";
import karaokeImg from "../../assets/home/KaraokeDivision.png";
import electronicsImg from "../../assets/home/ElectronicsDivision.png";
import desktopImage from "../../assets/img/desktop-banner/webbanner.png";
import mobileImage from "../../assets/img/mobile-banner/mobile-banner.png";

const Home = () => {
  return (
    <main>
      <div>
        <Banner desktopImage={desktopImage} mobileImage={mobileImage} />
      </div>
      <div className="flex flex-col  md:justify-between xl:max-w-screen-xl mx-auto">
        <WhoWeAreCard
          color="blue"
          className="w-full mx-auto px-10 "
          img={milestonesIcon}
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
          img={aspirationsIcon}
          title="Aspirations"
          description="At Vismay International Corporation, we aspire to be the foremost name in innovative lifestyle technology—bringing cutting-edge gadgets, entertainment, and digital experiences closer to every Filipino home. Fueled by passion and guided by excellence, we envision a future where access to world-class tech is not just a luxury, but a standard. We strive to lead with integrity, grow with purpose, and always put people first—because for us, progress means empowering lives through technology."
        />
      </div>

      <ImgWithDetailsCard
        imgRight={karaokeImg}
        titleRight="Karaoke Division"
        descriptionRight="In 2010, Vismay International Corporation started distributing
          Platinum Karaoke and introduced a collection of karaoke players with
          latest technology. This piloted a new era in the entertainment
          industry with Karaoke systems becoming a must in every Filipino
          Household."
        imgLeft={electronicsImg}
        titleLeft="Electronics Division"
        descriptionLeft="Electronics Division Vismay is an authorized distributor for
          prestigious brands of electronic products such as Symphony air cooler,
          strontium SD card, Mifa Bluetooth speaker, Adidas mobile cases etc."
      />

      <div className="flex justify-center py-8">
        <TButton label="Who We Are" href="/whoweare" />
      </div>
    </main>
  );
};

export default Home;
