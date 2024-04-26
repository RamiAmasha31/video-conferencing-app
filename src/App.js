// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import "./styles/tailwind.css"; // Import Tailwind CSS

const App = () => {
  // State for current theme (true for light, false for dark)
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  // CSS class based on current theme
  const themeClass = isLightTheme ? "light-theme" : "dark-theme";

  return (
    <Router>
      <div className={themeClass}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
