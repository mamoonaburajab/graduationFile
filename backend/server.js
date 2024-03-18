// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbLogin = require("./login");
// const dbChildCard = require("./childCard");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", dbLogin);

// app.use("/api/mother", dbChildCard);

const PORT = process.env.PORT || 3017;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
