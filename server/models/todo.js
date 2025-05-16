const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true, // Removes leading/trailing whitespace
    },
    description: {
        type: String,
        default: "", // Optional field
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false, // Default status is incomplete
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Corrected the separator to a comma
        ref: "User", // References the User model
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"], // Restrict to predefined values
        default: "medium",
    },
    dueDate: {
        type: Date,
        default: null, // Optional due date
    },
}, { timestamps: true });

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
