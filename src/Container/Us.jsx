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
      <h1 className="text-xl lg:text-4xl p-4">Who We Are</h1>
      <div className="flex flex-col lg:flex-row  gap-4 lg:gap-12">
        <img
          aria-describedby={id}
          onClick={handleClick}
          className="border-2 border-black p-4 rounded-2xl"
          src="/thePlatinum.png"
          alt=""
        />
        <img
          aria-describedby={id}
          onClick={handleClick}
          className="border-2 border-black p-4 rounded-2xl"
          src="/symphony.png"
          alt=""
        />
        <img
          aria-describedby={id}
          onClick={handleClick}
          className="border-2 border-black p-4 rounded-2xl"
          src="/strontium.jpg"
          alt=""
        />
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
