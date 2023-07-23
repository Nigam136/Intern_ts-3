const express = require("express");
const User = require("../model/User");

const router = express.Router();

//user registration API
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.create({
      username,
      password,
      email,
    });

    res
      .status(200)
      .send({ message: "user created successfully...", user: user });
  } catch (err) {
    res.status(500).json({ err: "unsuccessfull registraion..." });
  }
});

//user login API
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "password incorrect" });
    }
    res
      .status(200)
      .send({ message: "user logged in successfully...", user: user });

    // res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ err: "unsuccessfull login" });
  }
});

module.exports = router;
