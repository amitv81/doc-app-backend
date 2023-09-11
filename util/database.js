const mysql = require("mysql2");
const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "root",
});

module.exports = dbPool.promise();
