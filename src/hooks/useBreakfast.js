import React, { useEffect, useState } from "react";

const useBreakfast = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return [foods, setFoods];
};

export default useBreakfast;
