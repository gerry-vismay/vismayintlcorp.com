import React, { useState } from "react";

const Career = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 border border-gray-400 p-4 rounded mb-4">
      <div className="flex justify-between">
        <button
          onClick={handleCollapse}
          className="font-semibold text-left w-full text-gray-800 hover:text-black transition-all"
        >
          {label}
        </button>
        {isOpen ? (
          <span className="font-bold cursor-pointer text-xs lg:text-3xl rotate-90">
            &gt;
          </span>
        ) : (
          <span className="font-bold cursor-pointer text-xs lg:text-3xl">
            &gt;
          </span>
        )}
      </div>

      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Career;
