const express = require("express");
const app = express();

//read-get
app.get("/", (req, res) => {
  res.send("I am a get request at home route");
  res.end();
});

//create new anything-post
app.post("/", (req, res) => {
  res.send("I am post request at home route");
  res.end();
});

//update-put
app.put("/", (req, res) => {
  res.send("I am a put request at home route");
  res.end();
});

//delete
app.delete("/", (req, res) => {
  res.send("I am a delete request at home route");
  res.end();
});
module.exports = app;

//for check code use to postman app
