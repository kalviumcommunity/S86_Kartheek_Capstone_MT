const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

// GET all menu items
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find().populate("chefId");
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

module.exports = router;
