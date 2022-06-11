import React from "react";
import { FaBeer } from "react-icons/fa";
const SingleFood = ({ img }) => {
  return (
    <div className="flex gap-5 p-5">
      <img src={img} alt="" className="w-1/2" />
      <img src={img} alt="" className="w-1/2" />
    </div>
  );
};

export default SingleFood;
