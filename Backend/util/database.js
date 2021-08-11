const { Sequelize } = require("sequelize");

module.exports = new Sequelize("new-giftify", "root", "CODing94spACE", {
  host: "localhost",
  dialect: "mysql",
});
