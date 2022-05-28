import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetcher from "../api/fetcher";
import Loading from "../Shared/Loading";

const useLaunch = () => {
  const {
    data: foods,
    isLoading,
    refetch,
  } = useQuery("Foods", async () => await fetcher.get("/launch"));

  if (isLoading) {
    <Loading />;
  }
  return [foods, refetch];
};

export default useLaunch;
