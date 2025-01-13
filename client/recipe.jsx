import React, { useState } from "react";
import axios from "axios";

const RecipePage = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const getApiBaseUrl = () => {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return "http://localhost:3000/api"; // Local server
        }
        return "https://shoc71.github.io/Recipe-Saver/api"; // Replace with actual production URL
    };

    const fetchRecipes = async () => {
        const apiBaseUrl = getApiBaseUrl();  // Get the appropriate API base URL
        try {
            // Try to fetch recipes from the local API
            const response = await axios.get(`${apiBaseUrl}/recipe-with-prices`, { params: { query } });
            setRecipes(response.data.recipes);
            setError(null);
        } catch (err) {
            console.error("Error fetching recipes from local API:", err);

            // If local API fails, try to fetch from the production API
            try {
                const response = await axios.get(`https://shoc71.github.io/Recipe-Saver/api/recipe-with-prices`, { params: { query } }); // Replace with your production API URL
                setRecipes(response.data.recipes);
                setError(null);
            } catch (prodErr) {
                console.error("Error fetching recipes from production API:", prodErr);
                setError("Failed to fetch recipes. Please try again.");
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchRecipes();
    };

    return (
        <div>
            <h1>Recipe Finder</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a recipe..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <ul>
                            {recipe.prices.map(({ ingredient, price }, index) => (
                                <li key={index}>
                                    {ingredient}: {price === "N/A" ? "Price not available" : `$${price}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipePage;