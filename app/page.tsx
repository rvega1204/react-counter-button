"use client"; // Ensures this component uses React's client-side rendering.

import { useState } from 'react'; // Importing the useState hook for managing local state.
import { ButtonSharedState } from './components/button-shared-state'; // Button component that shares state with others.
import { ButtonIndependentState } from './components/button-independent-state'; // Button component with its own independent state.

export default function Home() {
  const [count, setCount] = useState(0); // State variable for the shared counter.

  // Function to increment the shared counter.
  function handleClick() {
    setCount(count + 1); 
  }

  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-4">React Counter Buttons</h1>

      {/* Section for buttons with shared state */}
      <h2 className="text-xl mb-3">Buttons with shared state</h2>
      {/* Both buttons share the same state and increment the same counter */}
      <ButtonSharedState count={count} onClick={handleClick} />
      <ButtonSharedState count={count} onClick={handleClick} />

      {/* Section for buttons with independent state */}
      <h2 className="text-xl mb-3">Buttons with independent state</h2>
      {/* Each button manages its own independent state */}
      <ButtonIndependentState />
      <ButtonIndependentState />
    </main>
  );
}