const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

/*
//use json file 
app.use("/register", (req, res) => {
  // res.status(200).json({
  //   message: "i am register page",
  //   statusCode: 200,
  // });
  res.redirect("/login");
});*/

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/login", (req, res) => {
  res.cookie("name", "emon");
  res.cookie("age", "30");
  res.end();
});
app.use((req, res) => {
  res.send("404 page not found!!");
});
module.exports = app;
