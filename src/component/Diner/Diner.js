import React from "react";
import Food from "../Food/Food";
import useDiner from "../../hooks/useDiner";
const Diner = () => {
  const [foods, setFoods] = useDiner();
  return (
    <div className="">
      <div className="">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4 my-3 ">
          {foods.map((food) => (
            <Food food={food} key={food.id}></Food>
          ))}
        </div>
      </div>
      <div className=" d-block text-center mb-3">
        <button className="btn btn-secondary ">Checkout Your Food</button>
      </div>
    </div>
  );
};

export default Diner;
