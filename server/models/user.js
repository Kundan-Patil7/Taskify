const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
     name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Create the model
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
