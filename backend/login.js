const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const { role } = req.query;

  const validRoles = [
    "Mother",
    "Doctor",
    "Administrative_Manager",
    "System_Administrator",
  ];

  if (!validRoles.includes(role)) {
    return res.status(400).json({ success: false, message: "Invalid role" });
  }

  const query = `SELECT ID FROM ${role} WHERE ID = ? AND password = ?`;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    if (result.length > 0) {
      res.json({ success: true });
    } else {
      console.error("Login failed:", "Invalid credentials");
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

module.exports = router;
