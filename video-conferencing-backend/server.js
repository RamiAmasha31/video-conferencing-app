// server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes); // Mount authentication routes

// Start server
const PORT = process.env.PORT || 5000; // Use environment variable or port 5000 by default
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
