const express = require("express");
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controller/todo");
const { protect } = require("../middleware/authenticate"); // Middleware to protect routes

const router = express.Router();

// To-Do Routes
router.post("/", protect, createTodo); // Create a new To-Do
router.get("/", protect, getTodos); // Get all To-Dos for logged-in user
router.get("/:id", protect, getTodoById); // Get a specific To-Do by ID
router.put("/:id", protect, updateTodo); // Update a To-Do by ID
router.delete("/:id", protect, deleteTodo); // Delete a To-Do by ID

module.exports = router;
