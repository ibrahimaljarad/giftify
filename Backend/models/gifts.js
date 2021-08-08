const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

const Gifts = db.define(
  "gifts",
  {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      },
      title: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      description: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      location: {
      type: DataTypes.STRING,
      allowNull: false,
      },
  },
  {
      freezeTableName: true,
  }
);

module.exports = Gifts;

