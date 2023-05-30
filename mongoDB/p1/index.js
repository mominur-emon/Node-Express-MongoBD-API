const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3002;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not  connected");
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});

app.get("/", (req, res) => {
  res.send("welcome to home page");
});
