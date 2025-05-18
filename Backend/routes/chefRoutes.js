const express = require("express");
const router = express.Router();
const Chef = require("../models/Chef");


router.get("/", async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chefs" });
  }
});


router.post("/", async (req, res) => {
  try {
    const newChef = new Chef(req.body);
    await newChef.save();
    res.status(201).json(newChef);
  } catch (error) {
    res.status(400).json({ error: "Failed to create chef" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedChef = await Chef.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(updatedChef);
  } catch (error) {
    res.status(400).json({ error: "Failed to update chef" });
  }
});

module.exports = router;
