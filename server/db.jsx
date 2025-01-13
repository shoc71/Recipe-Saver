// db.jsx
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false, // Disable SQL logging
});

// Models
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

const Recipe = sequelize.define("Recipe", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        },
        onDelete: "CASCADE",
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.JSONB,
    },
    instructions: {
        type: DataTypes.TEXT,
    },
    image_url: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
    underscored: true,
});

// Sync database
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected...");
        await sequelize.sync({ alter: true });
        console.log("Models synchronized...");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
})();

module.exports = { User, Recipe };