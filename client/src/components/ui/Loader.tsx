import React from "react";
import { LoaderCircle } from "lucide-react";

// Define the component using React.FC for strong typing
const Loader: React.FC = () => {
  return (
    // Outer container:
    // 1. h-screen, w-screen: Full screen size.
    // 2. flex, flex-col, justify-center, items-center: Center content vertically and horizontally.
    // 3. bg-gradient-to-br: Gradient from top-left to bottom-right (br = bottom-right).
    // 4. from-gray-900: Dark neutral starting color.
    // 5. to-purple-700: Vibrant purple ending color.
    // 6. text-white: Default text color for contrast.
    <div
      className="
        h-screen w-screen flex flex-col justify-center items-center 
        bg-gradient-to-br from-gray-900 to-purple-700 
        text-white
      "
    >
      {/* Lucide LoaderCircle icon */}
      <LoaderCircle
        size={80} // Size of the icon (fixed value)
        strokeWidth={2} // Thickness of the icon lines (fixed value)
        // Tailwind classes applied to the icon:
        // 1. animate-spin: Tailwind's utility for a continuous spin animation.
        // 2. text-purple-300: Light purple color to ensure the icon stands out.
        className="animate-spin text-purple-300"
      />

      {/* Loading text */}
      <p className="mt-5 text-xl font-medium text-gray-200">
        Loading your data...
      </p>
    </div>
  );
};

export default Loader;
