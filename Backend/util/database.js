const { Sequelize } = require("sequelize");

module.exports = new Sequelize("giftify-data", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
