import React, { useState } from "react";
import chef1 from '../images/chef1.jpg';
import chef2 from '../images/chef2.jpg';
import chef3 from '../images/chef3.jpg';
import { Link } from "react-router-dom";

function Home() {
    const [loginclicked, setloginclicked] = useState(false);
    return (
        <>
            <div className="h-full w-full bg-white flex flex-col items-center mt-10 overflow-scroll px-4 sm:px-8">
                {/* part-1 */}
                <div className="flex flex-col-reverse md:flex-row gap-14 mt-14">
                    <div className="flex flex-col mt-10">
                        <h1 className="text-black text-4xl sm:text-6xl font-bold">Best Restaurant</h1>
                        <div className="flex gap-3">
                            <h1 className="text-black text-4xl sm:text-6xl font-bold">In</h1>
                            <h1 className="text-red-700 font-bold text-4xl sm:text-6xl">Town.</h1>
                        </div>
                        <h1 className="text-black text-lg mt-5">We provide best food in town, we provide home</h1>
                        <h1 className="text-black text-lg">delivery and dine in services.</h1>
                        <div className="flex gap-5 mt-5">
                            <Link to="/OrderOnline" className="bg-red-700 text-lg hover:bg-red-950 text-white font-semibold rounded-lg h-12 w-40 pl-8 pt-2">Order now</Link>
                            <Link to="/Reservation" className="text-red-700 bg-slate-300 text-lg hover:bg-slate-800 font-semibold rounded-lg h-12 w-40 pt-2 pl-8">Reservation</Link>
                        </div>
                    </div>
                    <div>
                        {/* image part */}
                        <img className="h-96 w-full sm:w-128 rounded-3xl object-cover" src="https://media.istockphoto.com/id/1325172440/photo/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-olives-capers-anchovies-and.jpg?s=612x612&w=0&k=20&c=ieMxGg7flhSltOMDpuLZINAWYT2W2WDjJTlwoUWuwH4=" alt="" />
                    </div>
                </div>

                {/* section 2 */}
                <div className="flex flex-col-reverse md:flex-row gap-14 mt-14">
                    <div className="flex flex-col mt-10">
                        <h1 className="text-black text-4xl sm:text-6xl font-bold">Our Most</h1>
                        <div className="flex gap-3">
                            <h1 className="text-black text-4xl sm:text-6xl font-bold">Popular</h1>
                            <h1 className="text-red-700 font-bold text-4xl sm:text-6xl">Dish.</h1>
                        </div>
                        <h1 className="text-black text-lg mt-5">This dish is full of flavor and nutritional Quinoa is a complete protein </h1>
                        <h1 className="text-black text-lg">providing all the essential amino acids your body needs and is also a</h1>
                        <h1 className="text-black text-lg">good source of fibers.</h1>
                        <div className="flex gap-5 mt-5">
                            <Link to="/OrderOnline" className="bg-red-700 text-lg hover:bg-red-950 text-white font-semibold rounded-lg h-12 w-40 pl-8 pt-2">Order now</Link>
                        </div>
                    </div>
                    <div>
                        {/* image part */}
                        <img className="h-96 w-full sm:w-128 rounded-3xl object-cover" src="https://t4.ftcdn.net/jpg/08/84/41/47/360_F_884414753_OYA8JPoLxNVA8VwMHQqKH50YHnaijbUI.jpg" alt="" />
                    </div>
                </div>

                {/* Our Popular Chef */}
                <h1 className="text-black text-3xl font-bold mt-10">Our Popular Chef</h1>
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    <div className="flex flex-col items-center">
                        <img className="h-72 w-72 rounded-md object-cover" src={chef3} alt="" />
                        <h1 className="text-black font-bold">Betran Komar</h1>
                        <h1 className="text-gray-600">Head Chef</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="h-72 w-72 rounded-md object-cover" src={chef2} alt="" />
                        <h1 className="text-black font-bold">Ferry Sawui</h1>
                        <h1 className="text-gray-600">Chef</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="h-72 w-72 rounded-md object-cover" src={chef1} alt="" />
                        <h1 className="text-black font-bold">Iswan Dracho</h1>
                        <h1 className="text-gray-600">Chef</h1>
                    </div>
                </div>

                {/* Section 4 */}
                <h1 className="text-black text-3xl font-bold mt-10 mb-10">What Our Customers Say</h1>
                <div className="bg-slate-200 w-full sm:w-128 flex p-4 rounded-lg">
                    <img className="h-10 w-10 mr-2 mb-5" src="https://cdn-icons-png.flaticon.com/512/7911/7911108.png" alt="" />
                    <h1 className="ml-3 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident, et, vel laboriosam omnis optio mollitia incidunt inventore fugiat veniam hic minus saepe ea odio ad perferendis tempora vero. Laborum</h1>
                    <img className="h-10 w-10 mt-24" src="https://cdn-icons-png.flaticon.com/512/7911/7911122.png" alt="" />
                </div>

                {/* Section 3 */}
                {/* Section 3 */}
                <div className="bg-red-200 w-full sm:w-5/6 mt-10 mb-10 gap-5 flex flex-col justify-center items-center rounded-md px-4 sm:px-8 py-10">
    <h1 className="font-bold text-3xl sm:text-5xl text-black mt-16 text-center">Hungry? We are open now...</h1>
    <div className="flex flex-col sm:flex-row gap-8 mt-3 mb-32 justify-center w-full">
        <Link 
            to="/OrderOnline" 
            className="bg-red-700 text-lg hover:bg-red-950 text-white font-semibold rounded-lg h-16 sm:h-12 sm:w-60 w-full pt-2 text-center">
            Order now
        </Link>
        <Link 
            to="/Reservation" 
            className="text-red-700 bg-slate-300 text-lg hover:bg-slate-800 font-semibold rounded-lg h-16 sm:h-12 sm:w-60 w-full pt-2 text-center">
            Reservation
        </Link>
    </div>
</div>


            </div>
        </>
    );
}

export default Home;
