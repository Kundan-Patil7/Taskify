const express = require("express");
const { login, signup, getUserProfile } = require("../controller/user");
const {protect}  = require("../middleware/authenticate"); // Middleware for token verification

const router = express.Router(); // Use express.Router()

// Define routes
router.post("/login", login);
router.post("/signup", signup);
router.get("/profile", protect , getUserProfile); // Include authentication middleware

module.exports = router;
