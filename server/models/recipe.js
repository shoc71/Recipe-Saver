module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Recipe.associate = (models) => {
      Recipe.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Recipe;
  };
  