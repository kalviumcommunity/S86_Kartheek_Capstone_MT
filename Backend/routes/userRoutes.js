const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user" });
  }
});

module.exports = router;
