import React, { useState } from "react";
import { Link } from "react-router-dom";
import Appwriteservice from "../Appwrite/Databasework";
import { useNavigate } from "react-router-dom";
function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState(""); // For displaying success/error messages
    const navigate = useNavigate();
    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await Appwriteservice.Login(email, password);
            if (response) {
                console.log("Login successful", response);
                setFeedback("Login successful! Redirecting...");
                localStorage.setItem('session','true');
                setTimeout(() => {
                    navigate("/");
                }, 2000); 
            }
        } catch (error) {
            console.error("Login error", error);
            // setFeedback("Invalid email or password.");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <form onSubmit={loginHandler}>
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

                    {/* Feedback Message */}
                    {feedback && (
                        <p
                            className={`text-center mb-4 ${
                                feedback.includes("successful")
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {feedback}
                        </p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition duration-300 mb-4"
                    >
                        Login
                    </button>
                </form>

                {/* Forgot Password and Sign Up Links */}
                <div className="flex justify-between">
                    <Link to="/Forgetpassword" className="text-blue-600 font-semibold">
                        Forgot Password?
                    </Link>
                    <div className="flex gap-1">
                        <h1>Don't have an account?</h1>
                        <Link to="/Signup" className="text-blue-600 font-semibold">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;



