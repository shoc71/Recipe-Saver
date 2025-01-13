// gotta run these commands first
// npx sequelize-cli model:generate --name User --attributes username:string,password:string
// npx sequelize-cli model:generate --name Recipe --attributes title:string,description:text,userId:integer
// npx sequelize-cli model:generate --name Grocery --attributes name:string,quantity:integer,userId:integer

const express = require('express');
const { User, Recipe, Grocery } = require('./models');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Register a new user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ userId: user.id, username: user.username });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Get recipes for a user
app.get('/api/users/:userId/recipes', async (req, res) => {
  const { userId } = req.params;
  try {
    const recipes = await Recipe.findAll({ where: { userId } });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

// Add a recipe
app.post('/api/users/:userId/recipes', async (req, res) => {
  const { userId } = req.params;
  const { title, description } = req.body;
  try {
    const recipe = await Recipe.create({ title, description, userId });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Error adding recipe' });
  }
});

// Get groceries for a user
app.get('/api/users/:userId/groceries', async (req, res) => {
  const { userId } = req.params;
  try {
    const groceries = await Grocery.findAll({ where: { userId } });
    res.json(groceries);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching groceries' });
  }
});

// Add a grocery item
app.post('/api/users/:userId/groceries', async (req, res) => {
  const { userId } = req.params;
  const { name, quantity } = req.body;
  try {
    const grocery = await Grocery.create({ name, quantity, userId });
    res.json(grocery);
  } catch (err) {
    res.status(500).json({ error: 'Error adding grocery' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
