import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../../../CustomLink/CustomLink";
import FoodModal from "./FoodModal";

const Services = () => {
  const handleModal = (food) => {
    console.log(food);
  };
  return (
    <div>
      <div className="text-center my-5 flex justify-center items-center text-2xl gap-5">
        <CustomLink to={"/breakfast"}>
          <button>Breakfast</button>
        </CustomLink>
        <CustomLink to={"/launch"}>
          <button>Launch</button>
        </CustomLink>
        <CustomLink to={"/diner"}>
          <button>Diner</button>
        </CustomLink>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
