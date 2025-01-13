// index.jsx
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { User, Recipe } = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a new user
app.post("/register", async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, password_hash: hashedPassword });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user", error });
    }
});

// Login user
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in", error });
    }
});

// Save a recipe
app.post("/recipes", async (req, res) => {
    const { userId, title, ingredients, instructions, image_url } = req.body;
    try {
        const recipe = await Recipe.create({
            user_id: userId,
            title,
            ingredients,
            instructions,
            image_url,
        });
        res.status(201).json({ message: "Recipe saved successfully", recipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving recipe", error });
    }
});

// Delete a recipe
app.delete("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Recipe.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ message: "Recipe not found" });
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting recipe", error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});