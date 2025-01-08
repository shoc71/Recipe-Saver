module.exports = (sequelize, DataTypes) => {
    const Grocery = sequelize.define('Grocery', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Grocery.associate = (models) => {
      Grocery.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Grocery;
  };
  