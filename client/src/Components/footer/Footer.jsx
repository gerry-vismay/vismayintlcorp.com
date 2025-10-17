// import backgroundImageDesktop from "../../assets/images/footer/FOOTER.webp";
import backgroundImageDesktop from "../../assets/images/footer/FOOTER.webp";
import backgroundImageMobile from "../../assets/images/footer/FOOTER_01.webp";
import vismayLogo1 from "../../assets/images/footer/vismayLogo1.webp";
import SPCLogo from "../../assets/images/footer/SPC.webp";
import InLogo from "../../assets/images/footer/LOGO_01.webp";
import FBLogo from "../../assets/images/footer/LOGO_02.webp";
import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imageSrc = isMobile ? backgroundImageMobile : backgroundImageDesktop;

  return (
    <>
      <div
        className="flex items-center justify-center w-full  bg-cover bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="flex justify-between flex-col xl:flex-row xl:w-[102.5rem]  w-auto gap-3 xl:px-16 py-20">
          <div className="flex flex-col xl:w-[499px] gap-[20px] xl:px-0 px-4 order-1 xl:order-0 xl:mx-auto">
            <p className="text-[#fff] text-[14px] bold font-[700] text-center xl:text-left">
              Vismay International Corporation is now DPO/DPS compliant,
              certified by the National Privacy Commission
            </p>
            <div className="flex gap-5 mx-auto xl:mx-0">
              <a href="/">
                <img
                  className="lg:w-[328px] lg:h-[152px] w-[200px] h-[100px]"
                  src={vismayLogo1}
                  alt="Visymay Logo"
                />
              </a>
              <a href="/privacy-policy">
                <img className="w-[82px] h-[152px]" src={SPCLogo} alt="SPC" />
              </a>
            </div>
          </div>
          <div className="xl:text-left text-center mx-auto order-0 xl:order-1 xl:pb-0 pb-8">
            <ul className="flex flex-col xl:flex-row gap-4 xl:gap-20">
              <div>
                <li className="font-[700] text-[#fff] bold text-[20px] cursor-pointer">
                  Connect With Us
                </li>
                <div className="flex flex-row">
                  <a href="https://www.facebook.com/vismayinternationalcorp">
                    <img
                      className="w-[68px] h-[74px]"
                      src={FBLogo}
                      alt="Facebook Link"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/vismay-international-corporation/">
                    <img
                      className="w-[68px] h-[74px]"
                      src={InLogo}
                      alt="LinkedIn Link"
                    />
                  </a>
                </div>
              </div>
              <li className="font-[700] text-[#fff] bold text-[20px] ">
                About Us
              </li>
              <li className="font-[700] text-[#fff] bold text-[20px] ">
                Careers
              </li>
              <li className="font-[700] text-[#fff] bold text-[20px] ">
                Our Brands
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
