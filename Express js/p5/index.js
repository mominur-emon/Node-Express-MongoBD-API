const express = require("express");
const app = express();
const PORT = "3000";

app.get("/", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`student name is ${name} id is : ${id}`);
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


//http://localhost:3000/?name=emon&id=101