CREATE DATABASE React_Recipe_Saver

CREATE TABLE user_login (
    UserID serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    passkey VARCHAR(100) NOT NULL UNIQUE,
);
INSERT INTO user_login (username, email, passkey)

CREATE TABLE Recipes (
    RecipeID serial PRIMARY KEY,
    RecipeName varchar(255),
    RecipeClass varchar(255),
    --RecipeClass ex:appetizer/dessert/entreé/pastry etc.--
    Ingredients varchar(255),
    RecipeAllergens(255),
    Steps varchar(1000),
);
INSERT INTO Recipes (RecipeName, RecipeClass, RecipeAllergens, Steps)

CREATE TABLE Ingredients (
    IngredientID serial PRIMARY KEY,
    IngredientName varchar(255),
    IngredientClass varchar(255),
    IngredientAllergens varchar(255),
);
INSERT INTO Ingredients (IngredientName, IngredientClass, IngredientAllergens)
/*grocery
name
veg
nutritional


recipe
 id serial PRIMARY KEY,

gorcery [array of grocery items]
cooktime
steps*/
