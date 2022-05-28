import React, { useState } from "react";
import useBreakfast from "../../../hooks/useBreakfast";
import Food from "./Food";
import FoodModal from "./FoodModal";

const Breakfast = () => {
  const [foods, refetch] = useBreakfast();

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:p-5 p-10">
        {foods?.data.map((food) => (
          <Food key={food._id} food={food} refetch={refetch}></Food>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
