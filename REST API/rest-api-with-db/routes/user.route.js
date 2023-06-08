const express = require("express");
const {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
