import React from "react";

import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <div style={{ height: "80px" }} className="container">
      <nav className="d-flex justify-content-between align-items-center  bg-white py-3">
        <Link to={"/"}>
          <img src={logo} alt="" height={40} />
        </Link>
        <div className="">
          <Link
            className="text-decoration-none text-black fs-5 ms-4"
            to={"/cart"}
          >
            <FiShoppingCart></FiShoppingCart>
          </Link>
          <Link
            className="text-decoration-none text-black fs-5 ms-4"
            to={"/login"}
          >
            Log in
          </Link>
          <Link
            className="text-decoration-none text-white  rounded-pill px-2 py-1 fs-5 ms-4 bg-danger "
            to={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
