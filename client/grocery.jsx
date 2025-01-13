// /pages/grocery.jsx
import React, { useState } from "react";
import axios from "axios";

const GroceryPage = () => {
    const [query, setQuery] = useState("");
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);

    // Function to determine the correct API base URL
    const getApiBaseUrl = () => {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            return "http://localhost:3000/api";
        }
        return "https://shoc71.github.io/Recipe-Saver/api"; // Replace with actual production URL
    };

    const fetchPrice = async () => {
        const apiBaseUrl = getApiBaseUrl();  // Get the appropriate API base URL

        try {
            // Try to fetch the price from the local API
            const response = await axios.get(`${apiBaseUrl}/price`, { params: { query } });
            setPrice(response.data.price);
            setError(null);
        } catch (err) {
            console.error("Error fetching price from local API:", err);

            // If local API fails, try to fetch from the production API
            try {
                const response = await axios.get(`https://shoc71.github.io/Recipe-Saver/api/price`, { params: { query } }); // Replace with your production API URL
                setPrice(response.data.price);
                setError(null);
            } catch (prodErr) {
                console.error("Error fetching price from production API:", prodErr);
                setError("Failed to fetch price. Please try again.");
                setPrice(null);
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchPrice();
    };

    return (
        <div>
            <h1>Grocery Price Checker</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter an ingredient..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {price !== null && (
                <div>
                    <h2>Price for {query}:</h2>
                    <p>{price === "N/A" ? "Price not available" : `$${price}`}</p>
                </div>
            )}
        </div>
    );
};

export default GroceryPage;