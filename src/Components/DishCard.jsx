import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../app/Slices";
import store from "../app/store";

function DishCard({ dishname, imageid, Detail, Rating, Price }) {
  const dispatch = useDispatch();

  function onclickhandler() {
    // Dispatch the `add` action with the dish details as a payload object
    dispatch(
      add({
        dishname,
        imageid,
        Detail,
        Rating,
        Price,
        cnt: 1, // Initialize the count to 1 when adding to the cart
      })
    );
    console.log("element dispatched");
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




// function onclickhandler(){
  //   try {
  //     const data=Appwriteservice.cartdocument({ dishname, imageid, Detail, Rating, Price })
  //     if(data){
  //       return data;
  //     }else{
  //       console.log('error');
  //     }
  //   } catch (error) {
  //     console.log('error',error);
  //   }
  // }