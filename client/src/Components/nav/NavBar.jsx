import React, { useEffect, useState } from "react";
import logo from "../../assets/images/vismayLogo.png";

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const [resizeLogo, setResizeLogo] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const threshold = 150; // buffer to the navbar not to hide immediately

    if (currentScrollY > lastScrollY && currentScrollY > threshold) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);

    if (currentScrollY > threshold) {
      setResizeLogo(true);
    } else {
      setResizeLogo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="w-full xl:border-t-[0px] border-t-[1px] px-4  mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 xl:flex-row xl:items-center xl:gap-6  ">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-xl"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-xl"
      >
        <a href="/whoweare" className="flex items-center">
          Who We Are
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-xl"
      >
        <a href="/careers" className="flex items-center">
          Careers
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-xl"
      >
        <a href="/ourbrands" className="flex items-center">
          Our Brands
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-xl"
      >
        <a href="/contactus" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div
      className={`lg:max-h-[150px] max-h-[88px]  w-full sticky backdrop-blur-md top-0 transition-all duration-200 ease-in-out z-50 ${
        showNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Navbar className="py-0 px-0 bg-[#0B3C89] z-10 h-max max-w-full rounded-none">
        <div className="flex items-center text-blue-gray-900 ">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium bg-white pl-12 pr-4 xl:order-0 order-1"
          >
            <img
              className={`w-40 lg:w-[259px] lg:h-[120px] ${
                resizeLogo
                  ? "lg:w-[150px] lg:h-[80px]"
                  : "lg:w-[259px] lg:h-[120px]"
              } transition-all duration-300 object-contain`}
              src={logo}
              alt=""
            />
          </Typography>
          <div className="flex items-center gap-4 xl:order-1 order-0 px-4 md:px-8">
            <div className="mr-4 hidden xl:block ">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit text-white hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="flex h-[88vh]  bg-transparent backdrop-blur-md">
            {navList}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
