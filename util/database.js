// DB Connection using sequelize
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("appointments", "db-user", "dbuser", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// DB Connection as clasic way
/*const mysql = require("mysql2");
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "root",
});

module.exports = dbPool.promise();
*/
