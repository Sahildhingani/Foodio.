import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, increase } from "../app/Slices"; // Assuming you have an `updateCount` action in your slice

function DishCard({ dishname, imageid, Detail, Rating, Price }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items); // Access cart items from the Redux store

  function onclickhandler() {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((item) => item.dishname === dishname);

    if (existingItem) {
      // If item exists, increase its count
      dispatch(
        increase({
          dishname: existingItem.dishname,
          cnt: existingItem.cnt + 1,
        })
      );
      console.log("Item count updated in the cart");
    } else {
      // If item doesn't exist, add it to the cart
      dispatch(
        add({
          dishname,
          imageid,
          Detail,
          Rating,
          Price,
          cnt: 1, // Initialize the count to 1 when adding a new item
        })
      );
      console.log("New item added to the cart");
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

        <button
          onClick={onclickhandler}
          className="text-white bg-red-600 py-2 rounded-lg w-full hover:bg-red-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DishCard;






