const express = require("express");
const router = express.Router();

// POST /login
router.post("/login", (req, res) => {
  // Add logic to handle login request (e.g., verify username and password)
  console.log("Received login request from user:", req.body.email);

  // Simulate authentication logic
  const { email, password } = req.body;
  console.log("email||passs ", email, password);
  if (email === "rami@a.com" && password === "amasha") {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid username or password" });
  }
});

module.exports = router;
