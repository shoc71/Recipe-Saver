// db.js (Database Models)
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "mysql", // You can change this based on your database
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "my_database",
});

// User model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Recipe model
const Recipe = sequelize.define("Recipe", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

// Grocery model (if needed)
const Grocery = sequelize.define("Grocery", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Recipe,
      key: "id",
    },
  },
}, {
  timestamps: true,
});

// Sync the models with the database
sequelize.sync()
  .then(() => {
    console.log("Database connected and models synced!");
  })
  .catch((err) => {
    console.error("Error syncing database models:", err);
  });

module.exports = { User, Recipe, Grocery };
