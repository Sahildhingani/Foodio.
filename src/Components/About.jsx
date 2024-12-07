import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="h-full w-full bg-white flex flex-col justify-center items-center py-6 sm:py-12">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center w-full">
                {/* Image Section */}
                <div className="w-full sm:w-1/2">
                    <img
                        className="w-full h-auto ml-3 rounded-md"
                        src="https://media.istockphoto.com/id/666908954/photo/handsome-chef-pouring-olive-oil-on-meal.jpg?s=612x612&w=0&k=20&c=2dU_sMyn3GM2N81m-tMWQ4y5frBp87GQCflUtauJM4k="
                        alt="Chef Pouring Olive Oil"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-1/2 gap-5">
                    <div>
                        <h1 className="font-bold text-black text-3xl sm:text-4xl">About Our</h1>
                        <h1 className="font-bold text-red-600 text-3xl sm:text-4xl">Restaurant</h1>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime commodi consequatur sapiente optio dolore dolorum fugiat labore! Blanditiis doloremque corporis, velit autem, accusantium enim necessitatibus excepturi animi perspiciatis odit nihil.
                    </p>
                    <Link
                        to="/OrderOnline"
                        className="bg-red-700 text-lg hover:bg-red-950 text-white font-semibold rounded-lg h-12 w-40 sm:w-52 mt-4 sm:mt-6 pl-8 pt-2"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
