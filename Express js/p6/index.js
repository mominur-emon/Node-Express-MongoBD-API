const express = require("express");
const app = express();
const PORT = "3000";

app.get("/userId/:id/userAge/:age", (req, res) => {
  const id = req.params.id;
  const age = req.params.age;
  res.send(`student id is ${id} age is : ${age}`);
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//http://localhost:3000/userId/101/userAge/15

