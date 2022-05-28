import React from "react";
import Food from "./Food";
import useDiner from "../../../hooks/useDiner";
const Diner = () => {
  const [foods, refetch] = useDiner();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:p-5 p-10">
      {foods?.data.map((food) => (
        <Food key={food.id} food={food} refetch={refetch}></Food>
      ))}
    </div>
  );
};

export default Diner;
