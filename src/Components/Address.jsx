import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Appwriteservice from '../Appwrite/Databasework'

function Address() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Validation: Check if any field is empty
    if (!customerName || !email || !phone || !address || !city || !zip) {
      setErrorMessage("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    try {
      const data = await Appwriteservice.cartdocument({ customerName, email, phone, address, city, zip });
      if (data) {
        setSuccessMessage("Order placed successfully!");
        console.log("Order is placed.");
        
        // Display success message and then navigate after 3 seconds
        setTimeout(() => {
          navigate("/OrderOnline");
        }, 3000);
      } else {
        setErrorMessage("There was an issue with placing your order.");
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    }
    setLoading(false);
    console.log("Order Details:", { customerName, email, phone, address, city, zip });
  };

  return (
    <div className="h-auto w-full flex flex-col gap-5 p-6 sm:p-12">
      <h1 className="text-2xl font-bold text-center mb-6">Order Details</h1>

      {/* Success/Error Messages */}
      {successMessage && (
        <div className="text-green-600 text-center mb-4">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="text-red-600 text-center mb-4">{errorMessage}</div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
        {/* Customer Name */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Customer Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Zip Code */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Zip Code</label>
          <input
            type="text"
            placeholder="Enter your zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-6 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
}

export default Address;






