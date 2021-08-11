const { Sequelize } = require("sequelize");

module.exports = new Sequelize("new-giftify", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
