import React from "react";

const FoodModal = ({ food, setTreatment, refetch }) => {
  const { name, balance, picture, text } = food;
  return (
    <div>
      <input type="checkbox" id="foodModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="foodModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              setTreatment(null);
              refetch();
            }}
          >
            ✕
          </label>
          <div className="card lg-max-w-lg  shadow-xl">
            <figure className="px-10 pt-10">
              <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <h2 className="card-title text-primary text-2xl font-bold">
                {balance}
              </h2>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
