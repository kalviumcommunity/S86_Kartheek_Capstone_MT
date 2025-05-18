const express = require("express");
const router = express.Router();
const Chef = require("../models/Chef");

// GET all chefs
router.get("/", async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chefs" });
  }
});

module.exports = router;
