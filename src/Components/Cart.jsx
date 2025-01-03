import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  // Use `useSelector` directly to get cart items
  const cartItems = useSelector((state) => state.items);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.Price * item.cnt, 0);

  // State to handle error messages
  const [error, setError] = useState(null);

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Handle checkout process
  const handleCheckout = () => {
    const session = localStorage.getItem('session');

    if (cartItems.length === 0) {
      setError("You need to add at least one item to the cart before proceeding to checkout.");
    } else if (session === 'true') {
      // Proceed to checkout if user is logged in
      navigate('/Details'); // Navigate to the details or checkout page
    } else {
      // Show an error if the user is not logged in
      setError("Please log in to proceed with checkout.");
    }
  };

  return (
    <div className="bg-white h-screen w-screen flex gap-3 flex-wrap overflow-scroll">
      {/* Cart items section */}
      <div className="flex gap-3 flex-wrap overflow-scroll flex-1">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartCard
              key={item.id}
              dishname={item.dishname}
              Price={item.Price}
              cnt={item.cnt}
              imageid={item.imageid}
              Rating={item.Rating}
            />
          ))
        ) : (
          <p className="text-black text-center mt-5">No items in the cart.</p>
        )}
      </div>

      {/* Bill section */}
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg flex flex-col justify-between h-full">
  <h1 className="text-black text-2xl font-extrabold mb-4 border-b pb-2">
    🧾 BILL
  </h1>

  {/* Item List */}
  <div className="flex flex-col space-y-4 flex-1 overflow-y-auto">
    {cartItems.length > 0 ? (
      cartItems.map((e) => (
        <div
          key={e.id}
          className="flex justify-between items-center border-b pb-3 last:border-none"
        >
          <div className="flex flex-col">
            <p className="font-semibold text-lg text-gray-800">{e.dishname}</p>
            <p className="text-sm text-gray-500">Quantity: {e.cnt}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-semibold text-lg text-gray-700">
              Rs. {e.Price * e.cnt}/-
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-center mt-6">
        🛒 No items in the cart yet. Add some delicious dishes!
      </p>
    )}
  </div>

  {/* Total Price Section */}
  {cartItems.length > 0 && (
    <div className="flex justify-between items-center border-t pt-4 mt-4">
      <p className="text-xl font-semibold text-gray-700">Total</p>
      <p className="text-xl font-bold text-red-500">Rs. {totalPrice}/-</p>
    </div>
  )}

  {/* Checkout Button */}
  <button
    onClick={handleCheckout}
    className={`py-3 px-4 w-full text-white font-bold rounded-lg mt-4 ${
      cartItems.length > 0
        ? "bg-blue-500 hover:bg-blue-600"
        : "bg-gray-400 cursor-not-allowed"
    }`}
    disabled={cartItems.length === 0}
  >
    {cartItems.length > 0 ? "Checkout" : "Cart is Empty"}
  </button>

  {/* Error message */}
  {error && <p className="text-red-600 text-center mt-4">{error}</p>}
</div>

    </div>
  );
}

export default Cart;






