const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Mominur Rahman",
    email: "mmmmmm@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Rifat ahmed",
    email: "rrrrrrrr@gmail.com",
  },
];

module.exports = users;