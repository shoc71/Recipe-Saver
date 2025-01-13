// index.jsx
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { User, Recipe } = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
const db = pgp(process.env.DATABASE_URL);  // Set the DATABASE_URL in .env file

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Register Endpoint
app.post("/api/register", async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const result = await db.one(
      "INSERT INTO users(email, password, full_name) VALUES($1, $2, $3) RETURNING id, email, full_name",
      [email, hashedPassword, fullName]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: result,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login Endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, email: user.email, fullName: user.full_name },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in" });
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