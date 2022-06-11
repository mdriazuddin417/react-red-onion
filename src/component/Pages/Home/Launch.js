import React from "react";
import { useQuery } from "react-query";
import fetcher from "../../../api/fetcher";

import Loading from "../../../Shared/Loading";
import Food from "./Food";
const Launch = () => {
  const { data: foods, isLoading } = useQuery(
    "foods",
    async () => await fetcher("/foods")
  );

  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:p-5 p-10">
      {foods?.data.slice(12, 18).map((food) => (
        <Food key={food._id} food={food}></Food>
      ))}
    </div>
  );
};

export default Launch;
