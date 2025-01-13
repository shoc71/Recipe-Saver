// api.jsx (Server-Side)
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Tasty API configuration
const TASTY_API_URL = "https://tasty.p.rapidapi.com/recipes/list";
const TASTY_API_HEADERS = {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY || "dd6194b682mshe6c79a969f0869ep1d44a8jsn763011772b2a",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
};

// API Ninjas configuration
const NINJAS_API_URL = "https://api.api-ninjas.com/v1/recipe";
const NINJAS_PRICE_API_URL = "https://api.api-ninjas.com/v1/pricing";
const NINJAS_API_KEY = process.env.NINJAS_API_KEY || "Eag/ooh3bx6/GwAxMgoWVw==8XLY2nBTE8AelTy6";

// Endpoint to get recipes and prices
app.get("/api/recipe-with-prices", async (req, res) => {
    const { query } = req.query;
    try {
        // Fetch recipes from Tasty API
        const tastyResponse = await axios.get(TASTY_API_URL, {
            headers: TASTY_API_HEADERS,
            params: { q: query },
        });

        const recipes = tastyResponse.data.results.map(recipe => ({
            id: recipe.id,
            name: recipe.name,
            ingredients: recipe.sections?.flatMap(section => section.components.map(component => component.raw_text)) || [],
        }));

        // Fetch prices for ingredients using API Ninjas
        for (let recipe of recipes) {
            const pricePromises = recipe.ingredients.map(ingredient =>
                axios.get(`${NINJAS_PRICE_API_URL}?query=${encodeURIComponent(ingredient)}`, {
                    headers: { "X-Api-Key": NINJAS_API_KEY },
                }).then(response => ({ ingredient, price: response.data.price || "N/A" })).catch(() => ({ ingredient, price: "N/A" }))
            );
            recipe.prices = await Promise.all(pricePromises);
        }

        res.status(200).json({ recipes });
    } catch (error) {
        console.error("Error fetching recipes or prices:", error);
        res.status(500).json({ message: "Error fetching recipes or prices", error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
