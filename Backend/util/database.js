const { Sequelize } = require("sequelize");

module.exports = new Sequelize("giftyfy", "root", "123obaida123$", {
  host: "localhost",
  dialect: "mysql",
});
