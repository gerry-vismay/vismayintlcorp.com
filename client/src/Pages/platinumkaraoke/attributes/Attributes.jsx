import React from "react";

const Attributes = ({ number, label }) => {
  return (
    <div className="text-center">
      <p className="text-[35px]">{number}</p>
      <p className="text-base">{label}</p>
    </div>
  );
};

export default Attributes;
