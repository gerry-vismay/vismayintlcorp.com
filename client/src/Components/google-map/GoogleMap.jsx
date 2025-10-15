import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div className="h-[70vh] w-full mt-10 px-8">
      <h2 className="text-[#06529B] text-xl md:text-3xl lg:text-4xl font-bold pb-4">
        Our Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.2628772598523!2d121.04061769685418!3d14.508267623874433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf7ce9c44f21%3A0x907a63ce7939f0f!2sVismay%20International%20Corporation!5e0!3m2!1sen!2sph!4v1760509064832!5m2!1sen!2sph&zoom=10"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
