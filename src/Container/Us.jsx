import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Us = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex flex-col justify-center items-center my-24 gap-4 cursor-pointer">
      <h1 className="text-2xl lg:text-4xl p-4">Who We Are</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center gap-4 lg:gap-16">
        <div className="p-2">
          <a href="https://platinumkaraoke.com/">
            <img
              aria-describedby={id}
              // onClick={handleClick}
              className=""
              src="/platinumLogo.png"
              alt=""
            />
          </a>
        </div>
        <div className="p-2 ">
          <a href="https://gamextreme.ph/">
            <img
              aria-describedby={id}
              // onClick={handleClick}
              className=""
              src="/gxBlack.png"
              alt=""
            />
          </a>
        </div>
        <div className=" p-2">
          <a href="https://laifen.ph/">
            <img
              aria-describedby={id}
              // onClick={handleClick}
              className=""
              src="/laifenBlack.png"
              alt=""
            />
          </a>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="py-2 px-8 flex gap-4">
            <a href="#">
              <FacebookIcon fontSize="large" variant />
            </a>
            <a href="#">
              <XIcon fontSize="large" />
            </a>
            <a href="#">
              <YouTubeIcon fontSize="large" />
            </a>
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Us;
