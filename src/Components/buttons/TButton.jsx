import React from "react";

const TButton = ({ href, label, className = "" }) => {
  return (
    <a
      href={href}
      className={`bg-[#06529B] text-xs md:text-xl text-white py-2 px-8 rounded-full cursor-pointer ${className}`}
    >
      {label}
    </a>
  );
};

export default TButton;
