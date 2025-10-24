import user from "../models/user.js";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Register a new user
export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const newUser = new user({ firstName, lastName, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = await existingUser.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }
        const token = jwt.sign({ id: existingUser._id }, SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};