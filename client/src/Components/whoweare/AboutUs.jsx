import VisionIcon from "../../assets/images/whoweare/vision.webp";
import MissionIcon from "../../assets/images/whoweare/mission.webp";
import WhatWeAreIcon from "../../assets/images/whoweare/anonymous_figure.webp";

function AboutUs() {
  const headerCss = "text-[#0B3C89] text-3xl xl:text-6xl  font-bold bold mb-4";
  const descCss =
    "text-[#333] text-xs xl:text-base font-normal md:text-base leading-relaxed";
  return (
    <>
      <div className="px-6 py-16 md:px-16 text-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center ">
          {/* Vision */}
          <div className="max-w-md flex items-center flex-col gap-3">
            <div className="w-[260px] h-[210px] bg-[#E0E7FF] flex items-center">
              <img
                src={VisionIcon}
                alt="Vision"
                className="mx-auto mb-6 w-[100px] h-[100px]"
              />
            </div>
            <h2 className={headerCss}>Vision</h2>
            <p className={descCss}>
              Our mission is to transform how people live and work by developing
              dependable, cutting-edge technology products that boost
              efficiency, connectivity, and convenience.We work hard to provide
              innovative solutions that enable people, organizations, and
              communities to prosper in the digital era.
            </p>
          </div>

          {/* Mission */}
          <div className="max-w-md flex items-center flex-col flex-col gap-3">
            <div className="w-[260px] h-[210px] bg-[#E0E7FF] flex items-center">
              <img
                src={MissionIcon}
                alt="Mission"
                className="mx-auto mb-6 w-[100px] h-[100px]"
              />
            </div>
            <h2 className={headerCss}>Mission</h2>
            <p className={descCss}>
              Our vision is to be the leading provider of technology products
              that seamlessly integrate into people’s lives, enabling them to
              unlock their full potential. We envision a future where our
              products are at the forefront of technological advancement,
              empowering individuals to connect, create, and thrive. We aim to
              shape the digital landscape and make a positive impact on society.
            </p>
          </div>

          {/* What We Are */}
          <div className="md:col-span-2 flex items-center">
            <div className="max-w-2xl flex flex-col items-center justify-center flex-col gap-3">
              <div className="w-[260px] h-[210px] bg-[#E0E7FF] flex items-center">
                <img
                  src={WhatWeAreIcon}
                  alt="What We Are"
                  className="mx-auto mb-6 w-[100px] h-[100px]"
                />
              </div>
              <h2 className={headerCss}>What We Are</h2>
              <p className={descCss}>
                Vismay International Corp. is a retail operator established in
                2000 with the acquisition of Platinum Karaoke, a premium karaoke
                player brand, and was formally incorporated in 2010. In 2023,
                Vismay expanded its portfolio by acquiring Laifen, further
                cementing its position as a leading distributor of innovative
                lifestyle and consumer electronics products in the Philippines.{" "}
                <br />
                <br />
                Vismay International Corp. envisions "To be the leading provider
                of technology products that seamlessly integrate into people's
                lives, enabling them to unlock their full potential." We share
                our passion for service and innovation with our customers in a
                fun environment. <br />
                <br />
                Vismay International Corp. aims to transform how people live and
                work by developing dependable, cutting-edge technology products
                that boost efficiency, connectivity, and convenience. We are
                dedicated to providing innovative solutions that empower
                individuals, organizations, and communities to prosper in the
                digital era. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
