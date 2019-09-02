const Users = require("../users/users-model.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 10);
  newUser.password = hash;
  console.log(newUser);
  try {
    const users = await Users.add(newUser);
    if (users) {
      res.status(200).json({ message: "successful register" });
    } else {
      res.status(401).json({ message: "You shall not register!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      //creating cookie after login
      req.session.user = user;
      res.status(200).json({ message: "Logged in" });
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send("error logging out");
      } else {
        res.send("good bye");
      }
    });
  }
});
module.exports = router;
