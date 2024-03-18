const mysql = require("mysql2");

// Replace with your actual database credentials
const db = mysql.createConnection({
  host: "localhost",
  user: "mamoon",
  password: "mamoon",
  database: "Clinic",
});

module.exports = db;
