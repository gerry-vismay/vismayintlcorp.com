import React from "react";

import Button from "../../Components/buttons/TButton";

import Banner from "../../Container/home/Banner";
import desktopImg from "../../assets/img/desktop-banner/PK.png";
import mobileImg from "../../assets/img/mobile-banner/PK.png";
import Attributes from "./attributes/Attributes";
import ImgWithDetailsCard from "../../Components/imgWithDetails/Card";

import pk23KSongs from "../../assets/home/pk/23k songs.png";
import pkAlpha2 from "../../assets/home/pk/alpha2.png";

const PlatinumKaraokePage = () => {
  return (
    <section className="mb-10">
      <Banner desktopImage={desktopImg} mobileImage={mobileImg} />
      <div className="px-80 h-[150px] bg-[#F12626] text-white flex justify-between items-center">
        <Attributes number="57" label="SM Stores" />
        <Attributes number="7" label="Robinsons Stores" />
        <Attributes number="6" label="Metro Stores" />
        <Attributes number="5" label="Abenson Stores" />
        <Attributes number="10" label="Other Stores" />
      </div>
      <ImgWithDetailsCard
        imgRight={pkAlpha2}
        titleRight="The Latest and Most Advanced Karaoke Systems"
        descriptionRight="Platinum Karaoke offers a range of advanced karaoke systems, providing you with easy-to-use and high-quality devices for a wonderful singing experience.
From USB compatibility to full HD video playback, we make sure that our karaoke systems include all the features you need and love in karaoke singing. 
In addition, we offer quality karaoke accessories, such as amplifiers, speakers and microphones so you can have the best karaoke players to take your experience to the next level."
        imgLeft={pk23KSongs}
        titleLeft="More Than 23,000 OPM & International Songs"
        descriptionLeft="With over 19,000 OPM and international songs in our karaoke units, you’ll surely have a blast going through your favorite classics, Top 20s, dance songs, and OPM hits, played with multiple background videos. With our karaoke system’s audio processor and recording function, you can create the best mix of vocals and music for the best performance every time. More importantly, we continuously update our song list. 
Because we value you, our customers, you can always request for your favorite songs to be included in our next volume of Platinum updates. With this unique feature, you’ll never run out of new songs to sing along with and impress your colleagues."
      />
      <div className=" flex justify-center py-8">
        <Button label="Learn more" href="https://platinumkaraoke.com" />
      </div>
    </section>
  );
};

export default PlatinumKaraokePage;
