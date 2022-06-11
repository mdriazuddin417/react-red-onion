import React from "react";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { name, text, picture, balance, _id } = food;

  return (
    <div>
      <Link to={`/purchase/${_id}`}>
        <div className="card lg-max-w-lg  hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer h-full">
          <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>

            <p className="text-gray-400 text-md">{text.slice(0, 30)}... </p>
            <h2 className="card-title text-primary text-2xl font-bold">
              {balance}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Food;
