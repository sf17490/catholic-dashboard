/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand: "#1E40AF", // Custom brand color (a deep blue)
        // snowWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
