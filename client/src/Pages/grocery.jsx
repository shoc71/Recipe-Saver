import React, { useState, useEffect } from 'react'; // Import useEffect
import '../App.css';

const Grocery = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetching grocery items when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://api.example.com/grocery-items'); // Replace with actual API URL
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  // Adding an item to the shopping cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Grocery Store</h1>
      <h2>Items</h2>
      <ul>
        {items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))
        ) : (
          <p>Loading items...</p>
        )}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default Grocery;
