import React from "react";
import { useQuery } from "react-query";
import fetcher from "../../../api/fetcher";

import Loading from "../../../Shared/Loading";

import Food from "./Food";

const Breakfast = () => {
  const { data: foods, isLoading } = useQuery(
    "foods",
    async () => await fetcher("/foods")
  );

  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:p-5 p-10">
        {foods?.data?.slice(0, 6).map((food) => (
          <Food key={food._id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
