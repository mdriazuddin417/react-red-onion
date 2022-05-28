import React from "react";
import useLaunch from "../../../hooks/useLaunch";
import Food from "./Food";
const Launch = () => {
  const [foods, refetch] = useLaunch();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:p-5 p-10">
      {foods?.data.map((food) => (
        <Food key={food._id} food={food} refetch={refetch}></Food>
      ))}
    </div>
  );
};

export default Launch;
