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

// POST a new menu item
router.post("/", async (req, res) => {
  try {
    const newMenu = new Menu(req.body);
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ error: "Failed to create menu item" });
  }
});

// PUT update menu item by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(updatedMenu);
  } catch (error) {
    res.status(400).json({ error: "Failed to update menu item" });
  }
});

module.exports = router;
