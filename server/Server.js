const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/Db.js");
const authRoute = require("./router/userRouter.js");
const todoRouter = require("./router/todoRouter.js")
const cors = require('cors');
// Initialize express app
const app = express();

// Configure dotenv
dotenv.config();

// Connect to the database
connectDb();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors());
// Routes
app.use("/api/auth", authRoute); // Auth-related routes
app.use('/api/todo',todoRouter);

// Placeholder route
app.get("/", (req, res) => {
  res.send("Welcome to the To-Do App API!");
});

// Fallback route for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware (optional, for debugging)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Define the port
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
