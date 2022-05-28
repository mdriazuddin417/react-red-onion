import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetcher from "../api/fetcher";
import Loading from "../Shared/Loading";

const useDiner = () => {
  const {
    data: foods,
    isLoading,
    refetch,
  } = useQuery("Foods", async () => await fetcher.get("/dinner"));

  if (isLoading) {
    <Loading />;
  }
  return [foods, refetch];
};

export default useDiner;
