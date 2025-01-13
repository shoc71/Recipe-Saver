// api.jsx (Client-Side)
import axios from "axios";

let API_BASE_URL;

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // Local development environment
  API_BASE_URL = "http://localhost:3000/api";
} else {
  // Production environment (GitHub Pages or other live environment)
  API_BASE_URL = "https://https://shoc71.github.io/Recipe-Saver/api";
}

// Fetch recipes from Tasty API
export const fetchTastyRecipes = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tasty`, { params: { query } });
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes from Tasty API:", error);
        throw error;
    }
};

// Fetch recipes from API Ninjas
export const fetchNinjasRecipes = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ninjas`, { params: { query } });
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes from API Ninjas:", error);
        throw error;
    }
};

// Example usage in a React component
// import { fetchTastyRecipes, fetchNinjasRecipes } from "./api";
//
// useEffect(() => {
//     const getRecipes = async () => {
//         const query = "italian soup";
//         try {
//             const tastyRecipes = await fetchTastyRecipes(query);
//             console.log("Tasty Recipes:", tastyRecipes);
//
//             const ninjasRecipes = await fetchNinjasRecipes(query);
//             console.log("Ninjas Recipes:", ninjasRecipes);
//         } catch (error) {
//             console.error("Error fetching recipes:", error);
//         }
//     };
//
//     getRecipes();
// }, []);
