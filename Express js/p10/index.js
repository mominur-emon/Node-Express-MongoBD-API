require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello i am home route");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//npm install dotenv
//use for cmd is environment setup
