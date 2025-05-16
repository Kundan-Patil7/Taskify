const Todo = require("../models/todo");

// Create a new To-Do
const createTodo = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    // Create a new to-do item and associate it with the logged-in user
    const todo = await Todo.create({
      title,
      description,
      priority,
      dueDate,
      userId: req.user._id, // Attach logged-in user ID
    });

    res.status(201).json({ message: "To-Do created successfully", todo });
  } catch (error) {
    console.error("Error creating To-Do:", error.message);
    res.status(500).json({ message: "Failed to create To-Do", error: error.message });
  }
};

// Get all To-Dos for the logged-in user
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id }).sort({ createdAt: -1 }); // Retrieve all to-dos for the user
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching To-Dos:", error.message);
    res.status(500).json({ message: "Failed to fetch To-Dos", error: error.message });
  }
};

// Get a single To-Do by ID
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id, userId: req.user._id }); // Ensure the user owns the to-do

    if (!todo) {
      return res.status(404).json({ message: "To-Do not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error fetching To-Do:", error.message);
    res.status(500).json({ message: "Failed to fetch To-Do", error: error.message });
  }
};

// Update a To-Do by ID
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.user._id }, // Ensure the user owns the to-do
      updates,
      { new: true } // Return the updated document
    );

    if (!todo) {
      return res.status(404).json({ message: "To-Do not found" });
    }

    res.status(200).json({ message: "To-Do updated successfully", todo });
  } catch (error) {
    console.error("Error updating To-Do:", error.message);
    res.status(500).json({ message: "Failed to update To-Do", error: error.message });
  }
};

// Delete a To-Do by ID
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.user._id }); // Ensure the user owns the to-do

    if (!todo) {
      return res.status(404).json({ message: "To-Do not found" });
    }

    res.status(200).json({ message: "To-Do deleted successfully" });
  } catch (error) {
    console.error("Error deleting To-Do:", error.message);
    res.status(500).json({ message: "Failed to delete To-Do", error: error.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
