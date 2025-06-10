import React from "react";

const Button = ({ href, label, className = "", onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      href={href}
      className={`bg-[#06529B] text-xs md:text-xl text-white py-2 px-8 rounded-full cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
