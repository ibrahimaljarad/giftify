const { Sequelize } = require("sequelize");

module.exports = new Sequelize("giftify", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
