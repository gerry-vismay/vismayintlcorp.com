import React from "react";

const Error404 = () => {
  return (
    <div className="h-[50vh] my-10 text-center">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <p>
        Return to{" "}
        <a href="/" className="text-red-700">
          Home
        </a>
      </p>
    </div>
  );
};

export default Error404;
