import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import FoodModal from "./FoodModal";
import fetcher from "../../../api/fetcher";
import { toast } from "react-toastify";

const Food = ({ food, refetch }) => {
  const { name, text, picture, balance } = food;
  const [treatment, setTreatment] = useState(null);

  const handleFood = async (food) => {
    const res = await fetcher.post("/cart", { ...food });
    if (res?.data) {
      console.log(res.data);
      toast.success("Add product successfully.");
    }
  };
  return (
    <div>
      <div className="card lg-max-w-lg  shadow-xl hover:shadow-2xl hover:scale-110 duration-300">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-primary text-2xl font-bold">
            {balance}
          </h2>
          <p>
            {text.slice(0, 50)}...
            <label
              onClick={() => setTreatment(food)}
              htmlFor="foodModal"
              className="btn btn-link"
            >
              Read more
            </label>
          </p>

          <div className=" flex justify-between items-center">
            <button
              onClick={() => handleFood(food)}
              className="btn btn-primary"
            >
              Add To Cart <FiShoppingCart className="ml-2 font-bold text-xl" />
            </button>
          </div>
        </div>
      </div>

      {treatment && (
        <FoodModal food={food} setTreatment={setTreatment} refetch={refetch} />
      )}
    </div>
  );
};

export default Food;
