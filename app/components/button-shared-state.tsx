// Defining the props interface for the ButtonSharedState component.
interface ButtonSharedStateProps {
    count: number; // The shared count value passed down from the parent component.
    onClick: () => void; // The click handler function passed down from the parent component to update the shared state.
}

// Button component that shares state with other components.
export const ButtonSharedState = ({
    count,
    onClick 
}: ButtonSharedStateProps) => {
    return (
        // Button with shared state, displays the count and triggers the onClick function when clicked
        <button
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2 mb-3" // TailwindCSS classes for button styling
            onClick={onClick} // Triggering the passed in onClick function to update the shared state
        >
            I have been clicked {count} times {/* Displaying the shared count */}
        </button>
    );
};