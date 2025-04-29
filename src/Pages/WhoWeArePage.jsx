import React from "react";
import WhoWeAre from "../Components/whoweare/Card";

const WhoWeArePage = () => {
  return (
    <div>
      <div className="bg-[url(./src/assets/img/desktop-banner/webbanner1.png)]  bg-cover h-[677px]"></div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center lg:mx-8 lg:gap-8 xl:max-w-screen-xl xl:mx-auto pt-24">
        <WhoWeAre
          color="blue"
          img="Mission"
          title="Mission"
          description="Our mission is to transform how people live and work by developing dependable,cutting-edge technology products that boost efficiency, connectivity, and convenience. We work hard to provide innovative solutions that enable  people, organizations, and communities to prosper in the digital era. "
        />
        <WhoWeAre
          color="blue"
          img="Vision"
          title="Vision"
          description="Our Vision is to be the leading provider of technology products that seamlesly integrate into people's lives, enabling then to unlock their full potential. We envision a future where our products are at the forefront of technological advancement, empowering individuals to connect, create, and achieve their goal with ease. By leveraging  our expertise and passion for innovation, we aim to shape the digital landscape and make a positive impact on society."
        />
      </div>

      <div className="text-center w-[626px] pt-12 mx-auto">
        <img
          src="./src/assets/icons/whatwedo.png"
          alt="Mission icon"
          className="w-[80px] mx-auto"
        />
        <h3 className="text-4xl font-bold py-3 text-[#07549C]">What We Do</h3>
        <p className="text-sm leading-7 pb-12">
          Vismay International Corp. is a retail operator established in 2000
          with the acquisition of Platinum Karaoke, a premium karaoke player
          brand, and was formally incorporated in 2010. In 2023, Vismay expanded
          its portfolio by acquiring Laifen, further cementing its position as a
          leading distributor of innovative lifestyle and consumer electronics
          products in the Philippines.
        </p>

        <p className="text-sm leading-7 pb-12">
          Vismay International Corp. envisions "To be the leading provider of
          technology products that seamlessly integrate into people's lives,
          enabling them to unlock their full potential." We share our passion
          for service and innovation with our customers in a fun environment.
        </p>

        <p className="text-sm leading-7 pb-12">
          Vismay International Corp. aims to transform how people live and work
          by developing dependable, cutting-edge technology products that boost
          efficiency, connectivity, and convenience. We are dedicated to
          providing innovative solutions that empower individuals,
          organizations, and communities to prosper in the digital era.
        </p>
      </div>
    </div>
  );
};

export default WhoWeArePage;
