import React, { useState } from "react";
import Appwriteservice from "../Appwrite/Databasework";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onclickhandler = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Validate input fields to ensure all are filled
    if (!name || !email || !subject || !message) {
      setErrorMessage("Please fill in all fields before submitting.");
      return; // Stop the form submission
    }

    setErrorMessage(""); // Clear any previous error message

    try {
      // Make the API call and await the result
      const data = await Appwriteservice.createContact({ name, email, subject, message });

      if (data) {
        alert("Request sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Something went wrong, please try again later.");
      }
    } catch (error) {
      console.error("Error in request:", error);
      alert("An unexpected error occurred. Please check the console for details.");
    }
  };

  return (
    <div className="bg-gray-50 h-full min-h-screen w-full flex flex-col items-center py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-7xl px-4">

        {/* Contact Image */}
        <img
          className="w-full h-128 md:w-96  rounded-lg shadow-lg object-cover"
          src="https://images.indianexpress.com/2017/05/google-maps-759.jpg"
          alt="Map Illustration"
        />

        {/* Contact Form */}
        <form
          onSubmit={onclickhandler}
          className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
        >
          <h1 className="text-gray-800 font-bold text-2xl text-center">Contact Us</h1>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-600 text-center mb-4">{errorMessage}</div>
          )}

          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="mt-1 border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Input */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-gray-600 text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              className="mt-1 border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Subject"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-600 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 border border-gray-300 rounded-md h-24 px-3 py-2 resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-md w-full hover:bg-red-600 transition-colors focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;




