import React from "react";
import logo from "../../assets/images/vismayLogo.png";

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 xl:flex-row xl:items-center xl:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-xl"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-xl"
      >
        <a href="/whoweare" className="flex items-center">
          Who We Are
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-xl"
      >
        <a href="/careers" className="flex items-center">
          Careers
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-xl"
      >
        <a href="/ourbrands" className="flex items-center">
          Our Brands
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-xl"
      >
        <a href="/contactus" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[150px] w-full ">
      <Navbar className="sticky py-0 bg-[#D9D9D9] top-0 z-10 h-max max-w-full rounded-none px-4">
        <div className="flex items-center justify-between xl:px-16 px-4 text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img className="w-40 lg:w-[259px] lg:h-[120px]" src={logo} alt="" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden xl:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
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
          <div className="flex items-center ">{navList}</div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
