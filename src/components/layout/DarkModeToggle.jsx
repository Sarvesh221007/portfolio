import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        background: theme === "light" ? "#333" : "#eee",
        color: theme === "light" ? "#fff" : "#333",
        fontWeight: "bold"
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
