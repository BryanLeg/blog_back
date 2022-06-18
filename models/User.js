const { DataTypes, Sequelize } = require("sequelize");

function model(sequelize) {
  const attributes = {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scope: {
      withPassword: { attributes: {} },
    },
  };

  return sequelize.define("User", attributes, options);
}

module.exports = model;
