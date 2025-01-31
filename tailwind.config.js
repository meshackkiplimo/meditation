/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",  // Include all JS, JSX, TS, and TSX files in the app folder
      "./components/**/*.{js,jsx,ts,tsx}",  // Include all JS, JSX, TS, and TSX files in the components folder
      "./app/(tabs)/meditate.tsx",  // Specific file path
    ],
    theme: {
      extend: {
        fontFamily: {
          rmono: ["Roboto-Mono", "sans-serif"],  // Custom font family
        },
      },
    },
    plugins: [],
  };
  