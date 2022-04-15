import React from "react";
import { Link, Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import CustomLink from "../../CustomLink/CustomLink";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="d-flex justify-content-center gap-4 mt-2">
        <CustomLink className="text-black fs-5" to="breakfast">
          Breakfast
        </CustomLink>
        <CustomLink className="text-black fs-5" to="launch">
          Launch
        </CustomLink>
        <CustomLink className="text-black fs-5" to="diner">
          Diner
        </CustomLink>
      </div>

      <div className="container ">
        <div className=" text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
