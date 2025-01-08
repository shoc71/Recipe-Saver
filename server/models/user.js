module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    User.associate = (models) => {
      User.hasMany(models.Recipe, { foreignKey: 'userId', onDelete: 'CASCADE' });
      User.hasMany(models.Grocery, { foreignKey: 'userId', onDelete: 'CASCADE' });
    };
  
    return User;
  };
  