import React from "react";
import { useDispatch } from "react-redux";
import { add, remove, increase, decrease } from "../app/Slices";

function CartCard({ dishname, imageid, Detail, Rating, Price, documentid, cnt }) {
  const dispatch = useDispatch();

  // Handle incrementing the item count
  function onAddition() {
    dispatch(increase({ dishname })); // Pass payload as an object
  }

  // Handle decrementing the item count or removing the item
  function onSubtraction() {
    if (cnt === 1) {
      // Dispatch remove action if count is 1
      dispatch(remove({ dishname }));
    } else if (cnt > 1) {
      // Dispatch decrease action if count is greater than 1
      dispatch(decrease({ dishname }));
    }
  }

  return (
    <div className="bg-white h-96 w-80 m-3 shadow-slate-500 rounded-lg shadow-md flex flex-col">
      {/* Image Section */}
      <img
        src={imageid}
        alt={dishname}
        className="h-52 w-full object-cover rounded-t-lg"
      />

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4">
        <h1 className="text-black font-bold text-lg mb-2">{dishname}</h1>
        <p className="text-gray-700 text-sm mb-4 font-semibold">{Detail}</p>

        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-black">Rs.{Price}/-</h1>
          <h1 className="font-bold text-yellow-500">{Rating} ★</h1>
        </div>

        {/* Quantity Management Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onSubtraction}
            className="bg-red-500 text-white font-bold py-1 px-3 rounded-md hover:bg-red-600"
          >
            -
          </button>
          <h1 className="text-black font-semibold">{cnt}</h1>
          <button
            onClick={onAddition}
            className="bg-green-500 text-white font-bold py-1 px-3 rounded-md hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;

