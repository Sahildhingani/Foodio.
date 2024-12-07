import React, { useState } from "react";
import Appwriteservice from "../Appwrite/Databasework";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [feedback, setFeedback] = useState(""); // For success/error messages

    const signupHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setFeedback("Passwords do not match!");
            return;
        }

        try {
            const response = await Appwriteservice.Signup(username, email, password);
            if (response) {
                setFeedback("Signup successful! You can now log in.");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setUsername("");
            }
        } catch (error) {
            console.error("Signup error", error);
            setFeedback("Signup failed. Please try again.");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
                <form onSubmit={signupHandler}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-medium mb-1"
                        >
                            Name
                        </label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-medium mb-1"
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 relative">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-medium mb-1"
                        >
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600 mt-5"
                        >
                            {passwordVisible ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4 relative">
                        <label
                            htmlFor="confirm-password"
                            className="block text-gray-700 text-sm font-medium mb-1"
                        >
                            Confirm Password
                        </label>
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            id="confirm-password"
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600 mt-5"
                        >
                            {confirmPasswordVisible ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition duration-300 mb-4"
                    >
                        Sign Up
                    </button>

                    {/* Feedback Message */}
                    {feedback && (
                        <p
                            className={`text-center ${
                                feedback.includes("successful")
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {feedback}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Signup;

