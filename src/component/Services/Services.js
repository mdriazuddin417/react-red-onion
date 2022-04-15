import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="d-flex justify-content-center gap-4 fs-5">
        <Link to="breakfast">Breakfast</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Services;
