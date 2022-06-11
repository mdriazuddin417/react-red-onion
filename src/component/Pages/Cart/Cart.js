import { async } from "@firebase/util";
import React from "react";
import fetcher from "../../../api/fetcher";
import { toast } from "react-toastify";
const Cart = ({ carts, refetch }) => {
  const deleteCart = async (id) => {
    await fetcher.delete(`/cart/${id}`).then((res) => {
      console.log(res);
      refetch();
      toast.success("Delete Cart success!");
    });
  };

  let total = 0;
  for (let cart of carts) {
    total = total + cart.price;
  }
  const delivery = 5;
  const tax = total * 0.1;
  const newTotal = total + tax + delivery;
  return (
    <div class="hero h-screen  bg-base-200">
      <div class="hero-content grid lg:grid-cols-2 gap-10 p-10">
        <div className=" bg-white p-10 rounded-xl">
          <h1 class="text-2xl font-bold p-2">Edit Delivery Details</h1>
          <hr />
          <form action="" className="mt-10 space-y-5">
            <input
              type="text"
              required
              placeholder="delivery option"
              className="p-3 rounded-md w-full  bg-gray-100 focus:outline-primary"
            />
            <input
              type="text"
              required
              placeholder="address"
              className="p-3 rounded-md w-full  bg-gray-100 focus:outline-primary"
            />

            <input
              type="text"
              required
              placeholder="Flat,suite or floor"
              className="p-3 rounded-md w-full  bg-gray-100 focus:outline-primary"
            />
            <input
              type="text"
              required
              placeholder="Business Name"
              className="p-3 rounded-md w-full  bg-gray-100 focus:outline-primary"
            />
            <textarea
              type="text"
              required
              placeholder="add delivery instruction"
              className="p-3 rounded-md w-full h-[150px]  bg-gray-100 focus:outline-primary"
            />
            <input
              type="submit"
              value={"Save & Continue"}
              className="p-3 rounded-md w-full btn btn-primary"
            />
          </form>
        </div>
        <div className="bg-white p-10  rounded-xl ">
          <div className="space-y-5 h-[500px] overflow-auto">
            {carts.map((cart) => (
              <div>
                <span
                  class="indicator-item badge badge-primary cursor-pointer indicator-top indicator-end "
                  onClick={() => deleteCart(cart._id)}
                >
                  Delete
                </span>
                <div className="h-[120px] w-full rounded-2xl p-5 flex justify-around items-center bg-slate-200 ">
                  <img src={cart.image} alt="" className="h-[100px]" />
                  <div>
                    <h3 className="text-black text-xl font-bold">
                      {cart.name}
                    </h3>
                    <h3 className="text-gray-500 text-xl font-semibold">
                      Quantity: {cart.quantity}
                    </h3>
                    <h3 className="text-red-700 text-2xl font-bold">
                      $ {cart.price}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className=" text-gray-500 lg:text-xl text-xl ">
              Subtotal Price: ${total.toFixed(2)}
            </h3>
            <h3 className=" text-gray-500  text-xl ">Tax:{tax.toFixed(2)}</h3>
            <h3 className=" text-gray-500  text-xl ">
              Delivery fee: ${delivery}
            </h3>
            <h3 className=" text-black lg:text-2xl text-xl font-bold">
              Total Price: $1{newTotal}
            </h3>
            <input
              type="submit"
              value={"Place Order"}
              className="p-3 rounded-md w-full btn btn-primary mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
