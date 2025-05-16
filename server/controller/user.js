const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login function
const login = async (req, res) => {
    const { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
        return res.status(400).json({ message: "Enter email and password" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({
            message: "Login successful",
            status: "success",
            token,
            user: user.name
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Signup function
const signup = async (req, res) => {
    const { email, password ,name} = req.body;

    try {
        // Check if email or password is missing
        if (!email || !password || !name) {
            return res.status(400).json({ message: "Enter email and password" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            name: user.name,
            message: "Success",
            user: { email: user.email , name: user.name },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        // Check if user is authorized
        if (!req.user) {
            return res.status(401).json({ message: "User not authorized" });
        }

        // Fetch the user's profile
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { login, signup, getUserProfile };
