/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFA500", // Default button color (e.g., blue-700)
          hover: "#2563EB",  // Hover state color (e.g., blue-600)
        },
      },
    },
  },
  plugins: [],
};

