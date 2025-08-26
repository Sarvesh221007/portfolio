import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme on mount + whenever it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`px-3 py-2 rounded-xl border font-medium transition-colors duration-300
        ${theme === "light" 
          ? "bg-gray-200 text-gray-800 border-gray-400 hover:bg-gray-300" 
          : "bg-gray-700 text-gray-200 border-gray-500 hover:bg-gray-600"
        }`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;
