"use client";
import { useState } from "react"; // Importing the useState hook for managing the button's local state.

export const ButtonIndependentState = () => {
    const [count, setCount] = useState(0); // State variable to track the independent counter.

    // Function to increment the button's count when clicked.
    function handleClick() {
        setCount(count + 1); 
    }

    return (
        // Button that updates its state when clicked
        <button
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4 mb-3" // TailwindCSS classes for styling the button
            onClick={handleClick} // Attaching the click handler to update the count
        >
            I have been clicked {count} times {/* Displaying the current count */}
        </button>
    );
};
