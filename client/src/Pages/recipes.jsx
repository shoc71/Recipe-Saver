import React, { useState } from "react";
import axios from "axios";

const fetchRecipesFromTasty = async (query) => {
  const apiUrl = "https://tasty.p.rapidapi.com/recipes/list";
  const headers = {
    "x-rapidapi-key": "dd6194b682mshe6c79a969f0869ep1d44a8jsn763011772b2a",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  };
  const params = { from: 0, size: 10, tags: query };

  try {
    const response = await axios.get(apiUrl, { headers, params });
    return response.data.results.map((recipe) => ({
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe.sections?.[0]?.components?.map((c) => c.raw_text) || [],
    }));
  } catch (error) {
    console.error("Error fetching recipes from Tasty API:", error);
    throw error;
  }
};

const fetchRecipesFromApiNinjas = async (query) => {
  const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
  const headers = {
    "X-Api-Key": "Eag/ooh3bx6/GwAxMgoWVw==8XLY2nBTE8AelTy6",
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    return response.data.map((recipe) => ({
      name: recipe.title,
      ingredients: recipe.ingredients,
    }));
  } catch (error) {
    console.error("Error fetching recipes from API Ninjas:", error);
    throw error;
  }
};

const RecipePage = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

    const fetchCombinedRecipes = async () => {
    console.log("Fetching recipes...");
    try {
      const [tastyRecipes, ninjaRecipes] = await Promise.all([
        fetchRecipesFromTasty(query),
        fetchRecipesFromApiNinjas(query),
      ]);
      console.log("API responses received:", { tastyRecipes, ninjaRecipes });
      const combinedRecipes = [...tastyRecipes, ...ninjaRecipes];
      setRecipes(combinedRecipes);
      setError(null);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to fetch recipes. Please try again.");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchCombinedRecipes();
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
        {recipes.length > 0 && <h2>Recipes:</h2>}
        {recipes.map((recipe, index) => (
            <div key={index}>
            <h3>{recipe.name || recipe.title}</h3>
            {Array.isArray(recipe.ingredients) ? (
                <ul>
                {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                ))}
                </ul>
            ) : recipe.ingredients ? (
                <p>Ingredients: {recipe.ingredients}</p> // Render string ingredients
            ) : (
                <p>No ingredients provided.</p>
            )}
            {recipe.price && <p>Estimated Price: ${recipe.price}</p>}
            </div>
        ))}
        </div>

    </div>
  );
};

export default RecipePage;
