import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../../api/fetcher";
import Loading from "../../../Shared/Loading";
import SingleFood from "./SingleFood";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const Purchase = ({ refetch }) => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [value, setValue] = useState(1);

  const { data: foods, isLoading } = useQuery(
    "food",
    async () => await fetcher(`/food/${id}`)
  );

  if (value < 1) {
    toast.error("please increase quantity");

    setValue(1);
  }
  if (isLoading) {
    <Loading />;
  }

  const newPrice = parseInt(foods?.data.balance) * parseInt(value);
  const sendCart = async () => {
    const product = {
      email: user?.email,
      price: newPrice,
      quantity: value,
      name: foods?.data.name,
      image: foods?.data.picture,
    };
    await fetcher
      .post("/cart", product)
      .then((res) => {
        toast.success("Add Product success .");
        setValue(1);
        refetch();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="lg:pt-24 lg:px-12 ">
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <h2 className="text-4xl font-bold mb-5">{foods?.data.name}</h2>
          <h2 className="text-3xl font-bold text-red-700">${newPrice}</h2>
          <div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Enter Quantity</span>
              </label>
              <label class="input-group  ">
                <button
                  className="btn btn-primary "
                  onClick={() => setValue(value - 1)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  class="border border-primary p-3 w-[100px]"
                />
                <button
                  className="btn btn-primary"
                  onClick={() => setValue(value + 1)}
                >
                  +
                </button>
              </label>
            </div>
            <button
              className="btn btn-primary rounded-full mt-5"
              onClick={sendCart}
            >
              Add Cart
            </button>
          </div>
          <h2 className="text-gray-500 text-md mt-5">{foods?.data.text}</h2>
          <div className="w-[350px] ">
            <SingleFood img={foods?.data.picture} />
          </div>
        </div>
        <div>
          <img src={foods?.data.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
