import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <div className="">
        <input className="banner-input" type="text" placeholder="Search" />
        <button className="banner-btn text-white">Search</button>
      </div>
    </div>
  );
};

export default Banner;
