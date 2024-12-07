import React, { useEffect, useState } from "react";
import AppwriteServices from "../Appwrite/Databasework";
import DishCard from './DishCard'
import conf from "../../EnvVariables/Env_Variable";
import { ID } from "appwrite";
import { Link } from "react-router-dom";
function OrderOnline() {
    const [menu, setMenu] = useState([]); // The complete menu
    const [selectedButton, setSelectedButton] = useState(0); // Default to "All Category"
    const [cat, setCat] = useState("All Category"); // Selected category
    const [newMenu, setNewMenu] = useState([]); // Filtered menu items

    useEffect(() => {
        // Fetch menu data from Appwrite
        const fetchMenu = async () => {
            try {
                const data = await AppwriteServices.Menu(); // Assuming it returns a promise
                setMenu(data); // Set the complete menu
                setNewMenu(data); // Set default newMenu to all items
                console.log("Fetched Menu:", data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, []);

    const handleButtonClick = (buttonId, category) => {
        setSelectedButton(buttonId); // Update the selected button's ID
        setCat(category); // Set the selected category
    };

    useEffect(() => {
        // Filter the menu based on the selected category
        if (cat !== "All Category") {
            setNewMenu(menu.filter((val) => val.catogery === cat)); // Filter based on category
        } else {
            setNewMenu(menu); // Show all items if "All Category" is selected
        }
    }, [cat, menu]); // Re-run whenever `cat` or `menu` changes

    // Log the updated newMenu whenever it changes
    useEffect(() => {
        console.log("Updated New Menu:", newMenu);
    }, [newMenu]);

    return (
        <div className="h-full w-full bg-white flex flex-col items-center  px-4 sm:px-8">
            <h1 className="text-4xl font-bold text-black mt-6 sm:mt-8 md:mt-10">Menu</h1>
            <div className="flex flex-wrap gap-5 mt-8 justify-center sm:justify-start">
                {["All Category", "Lunch", "Dinner", "Deserts", "Drinks"].map((category, index) => (
                    <button
                        key={index}
                        className={`h-10 w-40 sm:w-52 font-semibold text-lg rounded-md py-2 px-4 ${
                            selectedButton === index
                                ? "bg-red-500 text-white" // Active styles
                                : "bg-slate-100 text-black" // Default styles
                        }`}
                        onClick={() => handleButtonClick(index, category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
                {
                    newMenu.map((val) => (
                        <DishCard 
                            key={ID.unique()}
                            dishname={val.Name_of_dish} 
                            imageid={`https://cloud.appwrite.io/v1/storage/buckets/${conf.Bucketid}/files/${val.ImageId}/view?project=${conf.Projectid}&mode=admin`} 
                            Detail={val.detail} 
                            Rating={val.rating} 
                            Price={val.price} 
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default OrderOnline;






