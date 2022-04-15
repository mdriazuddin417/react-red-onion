import React, { useEffect, useState } from "react";

const useLaunch = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return [foods, setFoods];
};

export default useLaunch;
