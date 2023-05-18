const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("middle ware function");

  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleWare);


// app.get("/", myMiddleWare, (req, res) => {
//   console.log("i am home " + req.currentTime);
//   res.send("home route");
// });

app.get("/", (req, res) => {
  console.log("i am home " + req.currentTime);
  res.send("home route");
});

app.get("/about", (req, res) => {
  console.log("i am about " + req.currentTime);
  res.send("about route");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
