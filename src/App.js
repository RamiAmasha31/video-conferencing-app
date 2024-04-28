import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MdHome, MdExitToApp } from "react-icons/md";
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";
import CreateMeeting from "./components/CreateMeeting.jsx";
import JoinMeeting from "./components/JoinMeeting.jsx";
import Logs from "./components/Logs.jsx";
import "./styles/tailwind.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage isLoggedIn state
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
        <div className="absolute top-4 right-4">
          {/* Conditionally render home and exit icons based on isLoggedIn state */}
          {isLoggedIn ? (
            <React.Fragment>
              <button className="bg-transparent text-gray-700 hover:text-gray-900 mr-4">
                <MdHome size={24} />
              </button>
              <button
                className="bg-transparent text-gray-700 hover:text-gray-900 mr-4"
                onClick={() => setIsLoggedIn(false)} // Logout action
              >
                <MdExitToApp size={24} />
              </button>
            </React.Fragment>
          ) : null}
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginPage theme={themeClass} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route exact path="/home" element={<HomePage theme={themeClass} />} />
          <Route
            exact
            path="/create-meeting"
            element={<CreateMeeting theme={themeClass} />}
          />
          <Route
            exact
            path="/join-meeting"
            element={<JoinMeeting theme={themeClass} />}
          />
          <Route
            exact
            path="/conference-log"
            element={<Logs theme={themeClass} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
