import React, { useEffect, useState } from "react";

const useDiner = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("diner.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return [foods, setFoods];
};

export default useDiner;
