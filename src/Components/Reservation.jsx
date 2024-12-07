import React, { useState } from "react";
import Appwriteservice from "../Appwrite/Databasework";
import { Link } from "react-router-dom";
function Reservation() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(0);
    const [feedback, setFeedback] = useState(""); // For user feedback

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const reservationData = { date, time, people };
            const data = await Appwriteservice.CreateReservation(reservationData);

            if (data) {
                setFeedback("Reservation created successfully!");
                setDate("");
                setTime("");
                setPeople(0);
            }
        } catch (error) {
            console.error(error);
            setFeedback("Failed to create reservation. Please try again.");
        }
    };

    return (
        <div className="bg-white h-full w-full flex justify-center py-6 sm:py-10">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-6 sm:mt-12 px-4 sm:px-0">
                <div className="flex-1">
                    <img
                        className="w-full h-96 mt-10 rounded-md"
                        src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg"
                        alt="Restaurant"
                    />
                </div>
                <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
                    <h1 className="font-bold text-3xl sm:text-4xl text-black mb-5">Book a Table</h1>
                    <form
                        className="flex flex-col gap-4 w-full sm:w-96"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="date" className="font-medium">
                            Date
                        </label>
                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            id="date"
                            type="date"
                            className="border-gray-400 border-2 rounded h-10 w-full pl-2 cursor-pointer"
                            required
                        />

                        <label htmlFor="time" className="font-medium">
                            Time
                        </label>
                        <input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            id="time"
                            type="time"
                            className="border-gray-400 border-2 rounded h-10 w-full pl-2 cursor-pointer"
                            required
                        />

                        <label htmlFor="partySize" className="font-medium">
                            Party Size
                        </label>
                        <input
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            id="partySize"
                            type="number"
                            min="1"
                            max="20"
                            className="border-gray-400 border-2 rounded h-10 w-full pl-2"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg h-12 w-full mt-8"
                        >
                            Submit
                        </button>
                    </form>
                    {feedback && (
                        <p
                            className={`mt-4 text-center ${
                                feedback.includes("successfully")
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {feedback}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Reservation;

