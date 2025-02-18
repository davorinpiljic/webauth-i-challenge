const Users = require("../users/users-model.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const restrictedVerify = require("../auth/restricted-middleware.js");

router.get("/", restrictedVerify, async (req, res) => {
  const users = await Users.find();
  try {
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});
router.get("/restricted/users", restrictedVerify, async (req, res) => {
  try {
    const users = await Users.find();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(401).json("You shall not pass!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
