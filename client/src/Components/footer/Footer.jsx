// import backgroundImageDesktop from "../../assets/images/footer/FOOTER.webp";
import backgroundImageDesktop from "../../assets/images/footer/FOOTER.webp";
import backgroundImageMobile from "../../assets/images/footer/FOOTER_01.webp";
import vismayLogo1 from "../../assets/images/footer/vismayLogo1.webp";
import SPCLogo from "../../assets/images/footer/SPC.webp";
import FBLogo from "../../assets/images/footer/LOGO_01.webp";
import InLogo from "../../assets/images/footer/LOGO_02.webp";
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
        className="flex items-center justify-center w-full min-h-[350px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="flex justify-between w-[102.5rem] h-[350px] gap-3 px-16 py-20">
          <div className="flex flex-col w-[499px] gap-[20px]">
            <p className="text-[#fff] text-[14px] bold font-[700]">
              Vismay International Corporation is now DPO/DPS compliant,
              certified by the National Privacy Commission
            </p>
            <div className="flex gap-5">
              <img
                className="w-[328px] h-[152px]"
                src={vismayLogo1}
                alt="Visymay Logo"
              />
              <img className="w-[82px] h-[152px]" src={SPCLogo} alt="SPC" />
            </div>
          </div>
          <div>
            <ul className="flex gap-20">
              <div>
                <li className="font-[700] text-[#fff] bold text-[20px] cursor-pointer">
                  Connect With Us
                </li>
                <div className="flex flex-row">
                  <img
                    className="w-[68px] h-[74px]"
                    src={InLogo}
                    alt="LinkedIn"
                  />
                  <img
                    className="w-[68px] h-[74px]"
                    src={FBLogo}
                    alt="Facebook"
                  />
                </div>
              </div>
              <li className="font-[700] text-[#fff] bold text-[20px] cursor-pointer">
                About Us
              </li>
              <li className="font-[700] text-[#fff] bold text-[20px] cursor-pointer">
                Careers
              </li>
              <li className="font-[700] text-[#fff] bold text-[20px] cursor-pointer">
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
