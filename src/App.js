// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";

import "./styles/tailwind.css"; // Import Tailwind CSS

const App = () => {
  // State for current theme (true for light, false for dark)
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  // CSS class based on current theme
  const themeClass = isLightTheme ? "light" : "dark";

  // Background color based on current theme
  const backgroundColor = isLightTheme ? "bg-gray-300" : "bg-black";

  return (
    <Router>
      <div className={`min-h-screen ${backgroundColor} relative`}>
        <button
          className="absolute top-4 right-4 bg-transparent text-gray-700 hover:text-gray-900"
          onClick={toggleTheme}
        >
          {isLightTheme ? (
            <FaMoon size={24} className="text-green-500" /> // Set moon color to green-400
          ) : (
            <FaSun size={24} className="text-yellow-600" /> // Set sun color to yellow-800
          )}{" "}
        </button>
        <Routes>
          <Route exact path="/" element={<LoginPage theme={themeClass} />} />
          <Route exact path="/home" element={<HomePage theme={themeClass} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
