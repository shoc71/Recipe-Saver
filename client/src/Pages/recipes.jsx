import React, { useState } from "react";
import axios from "axios";
import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap"; // Importing Bootstrap components

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

  const handleLike = (recipeName) => {
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes")) || [];
    if (!likedRecipes.includes(recipeName)) {
      likedRecipes.push(recipeName);
      localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
      alert(`${recipeName} has been liked!`);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button color="primary" type="submit" className="mt-3">Search</Button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="row">
        {recipes.length > 0 && <h2>Recipes:</h2>}
        {recipes.map((recipe, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">{recipe.name || recipe.title}</CardTitle>
                <CardText>{recipe.description || "No description available"}</CardText>
                <h6>Ingredients:</h6>
                <ul>
                  {Array.isArray(recipe.ingredients) ? (
                    recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))
                  ) : (
                    <li>{recipe.ingredients}</li> // For string ingredients
                  )}
                </ul>
                <Button
                  color="success"
                  onClick={() => handleLike(recipe.name || recipe.title)}
                >
                  Like Recipe
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
