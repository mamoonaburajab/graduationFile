// childCard.js
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Update with the correct path
const router = express.Router();

// Middleware setup
router.use(cors());
router.use(express.json());

app.get("/getChildID", (req, res) => {
  const mom_ID = localStorage.userID; // نفترض أن localStorage.userID يحتوي على معرف الأم

  if (!mom_ID) {
    return res.status(400).send("لم يتم توفير معرف الأم في التخزين المحلي.");
  }

  const query = "SELECT child_ID FROM your_table WHERE mom_ID = ?";

  pool.query(query, [mom_ID], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("خطأ داخلي في الخادم");
    }

    if (results.length === 0) {
      return res
        .status(404)
        .send("لم يتم العثور على معرف الطفل لمعرف الأم المحدد");
    }

    const childID = results[0].child_ID;
    res.json({ childID });
  });
});
module.exports = router;
