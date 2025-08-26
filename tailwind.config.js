/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
