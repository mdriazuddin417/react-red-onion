import React from "react";

import { NavLink } from "react-router-dom";
import logo from "../../images/logo2.png";
import { FiShoppingCart } from "react-icons/fi";
import fetcher from "../../api/fetcher";
import { useQuery } from "react-query";
import Loading from "../Loading";
const Header = ({ count }) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/breakfast"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>
                  <div class="indicator">
                    <span class="indicator-item badge badge-secondary">
                      {count}
                    </span>
                    <button class="btn">
                      <FiShoppingCart />
                    </button>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to={"/login"}>Log In</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"}>SignUp</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/breakfast"}>
            <img src={logo} alt="" width={200} />
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to={"/breakfast"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>
                <div class="indicator">
                  <span class="indicator-item indicator-top indicator-end badge badge-secondary">
                    {count}
                  </span>
                  <span class=" text-2xl">
                    <FiShoppingCart />
                  </span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to={"/login"}>Log In</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>SignUp</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
